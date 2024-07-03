"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[30946],{58860:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var r=n(37953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(n),m=a,g=l["".concat(d,".").concat(m)]||l[m]||c[m]||o;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[l]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>l});n(37953);var r=n(58860);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={title:"useUpdatePassword",description:"useUpdatePassword data hook from Refine is a modified version of react-query's useMutation for registration.",source:"/packages/core/src/hooks/auth/useUpdatePassword/index.ts"},d=void 0,p={unversionedId:"authentication/hooks/use-update-password/index",id:"authentication/hooks/use-update-password/index",title:"useUpdatePassword",description:"useUpdatePassword data hook from Refine is a modified version of react-query's useMutation for registration.",source:"@site/docs/authentication/hooks/use-update-password/index.md",sourceDirName:"authentication/hooks/use-update-password",slug:"/authentication/hooks/use-update-password/",permalink:"/docs/authentication/hooks/use-update-password/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/authentication/hooks/use-update-password/index.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1719988904,formattedLastUpdatedAt:"Jul 3, 2024",frontMatter:{title:"useUpdatePassword",description:"useUpdatePassword data hook from Refine is a modified version of react-query's useMutation for registration.",source:"/packages/core/src/hooks/auth/useUpdatePassword/index.ts"},sidebar:"mainSidebar",previous:{title:"useForgotPassword",permalink:"/docs/authentication/hooks/use-forgot-password/"},next:{title:"Headless",permalink:"/docs/examples/authentication/headless"}},u={},l=[{value:"Usage",id:"usage",level:2},{value:"Redirection after updatePassword",id:"redirection-after-updatepassword",level:2},{value:"Error handling",id:"error-handling",level:2}],c=(m="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",e)});var m;const g={toc:l},y="wrapper";function f(e){var{components:t}=e,n=s(e,["components"]);return(0,r.yg)(y,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"useUpdatePassword")," calls ",(0,r.yg)("inlineCode",{parentName:"p"},"updatePassword")," method from ",(0,r.yg)("a",{parentName:"p",href:"/docs/authentication/auth-provider"},(0,r.yg)("inlineCode",{parentName:"a"},"authProvider"))," under the hood."),(0,r.yg)("p",null,"It returns the result of ",(0,r.yg)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,r.yg)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation"},"useMutation"),"."),(0,r.yg)("p",null,"Data that is resolved from ",(0,r.yg)("inlineCode",{parentName:"p"},"updatePassword")," will be returned as the ",(0,r.yg)("inlineCode",{parentName:"p"},"data")," in the query result with the following type:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"type SuccessNotificationResponse = {\n  message: string;\n  description?: string;\n};\n\ntype AuthActionResponse = {\n  success: boolean;\n  redirectTo?: string;\n  error?: Error;\n  [key: string]: unknown;\n  successNotification?: SuccessNotificationResponse;\n};\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"success"),": A boolean indicating whether the operation was successful. If ",(0,r.yg)("inlineCode",{parentName:"li"},"success")," is false, a notification will be shown.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"When ",(0,r.yg)("inlineCode",{parentName:"li"},"error")," is provided, the notification will contain the error message and name. Otherwise, a generic error message will be shown with the following values: ",(0,r.yg)("inlineCode",{parentName:"li"},'{ name: "Update Password Error", message: "Error while resetting password" }'),"."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"redirectTo"),": If has a value, the app will be redirected to the given URL."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"error"),": If has a value, a notification will be shown with the error message and name."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"[key: string]"),": Any additional data you wish to include in the response, keyed by a string identifier."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"successNotification"),": If provided, a success notification will be shown. The structure is as follows:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"type SuccessNotificationResponse = {\n  message: string;\n  description?: string;\n};\n")),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(c,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Refine provides a default 'update password' page, page which handles the update password flow manually.\nIf you want to use a custom 'update password' however, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"useUpdatePassword")," hook like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/customupdatePasswordPage"',title:'"pages/customupdatePasswordPage"'},'import { useUpdatePassword } from "@refinedev/core";\n\ntype updatePasswordVariables = {\n  password: string;\n};\n\nexport const UpdatePasswordPage = () => {\n  const { mutate: updatePassword } =\n    useUpdatePassword<updatePasswordVariables>();\n\n  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {\n    e.preventDefault();\n\n    const values = {\n      password: e.currentTarget.password.value,\n    };\n\n    updatePassword(values);\n  };\n\n  return (\n    <form onSubmit={onSubmit}>\n      <label>Password</label>\n      <input name="password" value="refine" />\n      <button type="submit">Submit</button>\n    </form>\n  );\n};\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"mutate")," acquired from ",(0,r.yg)("inlineCode",{parentName:"p"},"useUpdatePassword")," can accept any kind of object for values since the ",(0,r.yg)("inlineCode",{parentName:"p"},"updatePassword")," method from ",(0,r.yg)("inlineCode",{parentName:"p"},"authProvider")," doesn't have a restriction on its parameters.\nA type parameter for the values can be provided to ",(0,r.yg)("inlineCode",{parentName:"p"},"useUpdatePassword"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"const { mutate: updatePassword } = useUpdatePassword<{ newPassword: string }>();\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"useUpdatePassword")," gives you query strings for the ",(0,r.yg)("inlineCode",{parentName:"p"},"updatePassword")," method from ",(0,r.yg)("inlineCode",{parentName:"p"},"authProvider"),". If you have logic that sends a password regeneration email to the email address while resetting the password and proceeds through the access token, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"queryStrings")," variable's ",(0,r.yg)("inlineCode",{parentName:"p"},"updatePassword")," method from ",(0,r.yg)("inlineCode",{parentName:"p"},"authProvider"),". For example, if your regeneration link is ",(0,r.yg)("inlineCode",{parentName:"p"},"YOUR_DOMAIN/update-password?token=123"),", you can access the token from the parameters of the URL."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import type { AuthProvider } from "@refinedev/core";\n\nconst authProvider: AuthProvider = {\n  // ...\n  updatePassword: (params) => {\n    // you can access query strings from params.queryStrings\n    console.log(params.token);\n    if (params.token === "123") {\n      // your logic to update the password\n    }\n    // ...\n  },\n};\n'))),(0,r.yg)("h2",{id:"redirection-after-updatepassword"},"Redirection after updatePassword"),(0,r.yg)(c,{id:"redirection-after-updatepassword",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"A custom URL can be given to mutate the function from the ",(0,r.yg)("inlineCode",{parentName:"p"},"useUpdatePassword")," hook if you want to redirect yourself to a certain URL:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useUpdatePassword } from "@refinedev/core";\n\nconst { mutate: updatePassword } = useUpdatePassword();\n\nupdatePassword({ redirectPath: "/custom-url" });\n')),(0,r.yg)("p",null,"Then, you can handle this URL in your ",(0,r.yg)("inlineCode",{parentName:"p"},"updatePassword")," method of the ",(0,r.yg)("inlineCode",{parentName:"p"},"authProvider"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import type { AuthProvider } from "@refinedev/core";\n\nconst authProvider: AuthProvider = {\n  // ...\n  updatePassword: async ({ redirectPath }) => {\n    // ...\n    return {\n      success: true,\n      redirectTo: redirectPath,\n      successNotification: {\n        message: "Update password successful",\n        description: "You have successfully updated password.",\n      },\n    };\n  },\n};\n'))),(0,r.yg)("h2",{id:"error-handling"},"Error handling"),(0,r.yg)(c,{id:"error-handling",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Since the methods of ",(0,r.yg)("inlineCode",{parentName:"p"},"authProvider")," always return a resolved promise, you can handle errors by using the ",(0,r.yg)("inlineCode",{parentName:"p"},"success")," value in the response:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useUpdatePassword } from "@refinedev/core";\n\nconst { mutate: updatePassword } = useUpdatePassword();\n\nupdatePassword(\n  {\n    newPassword: "refine",\n  },\n  {\n    onSuccess: (data) => {\n      if (!data.success) {\n        // handle error\n      }\n\n      // handle success\n    },\n  },\n);\n')),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"The ",(0,r.yg)("inlineCode",{parentName:"p"},"onError")," callback of the ",(0,r.yg)("inlineCode",{parentName:"p"},"useUpdatePassword")," hook will not be called if ",(0,r.yg)("inlineCode",{parentName:"p"},"success")," is ",(0,r.yg)("inlineCode",{parentName:"p"},"false"),". This is because the ",(0,r.yg)("inlineCode",{parentName:"p"},"authProvider")," methods always return a resolved promise, and the callback is only triggered when the promise is rejected."))))}f.isMDXComponent=!0}}]);