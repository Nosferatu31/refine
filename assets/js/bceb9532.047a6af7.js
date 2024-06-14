"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[83138],{58860:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>g});var r=t(37953);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(g,i(i({ref:n},l),{},{components:t})):r.createElement(g,i({ref:n},l))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},34611:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});t(37953);var r=t(58860);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={id:"azure-ad",title:"Azure AD Login",sidebar_label:"Azure AD Login"},c="Azure Active Directory B2C (AAD B2C)",u={unversionedId:"advanced-tutorials/auth/azure-ad",id:"advanced-tutorials/auth/azure-ad",title:"Azure AD Login",description:"Azure Active Directory B2C provides business-to-customer identity as a service. Your customers use their preferred social, enterprise, or local account identities to get single sign-on access to your applications and APIs.",source:"@site/docs/advanced-tutorials/auth/azure-ad.md",sourceDirName:"advanced-tutorials/auth",slug:"/advanced-tutorials/auth/azure-ad",permalink:"/docs/advanced-tutorials/auth/azure-ad",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/advanced-tutorials/auth/azure-ad.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1718352227,formattedLastUpdatedAt:"Jun 14, 2024",frontMatter:{id:"azure-ad",title:"Azure AD Login",sidebar_label:"Azure AD Login"},sidebar:"mainSidebar",previous:{title:"Auth0 Login",permalink:"/docs/advanced-tutorials/auth/auth0"},next:{title:"Custom Layout",permalink:"/docs/advanced-tutorials/custom-layout"}},l={},p=[{value:"Installation",id:"installation",level:3},{value:"Configure the MsalProvider component",id:"configure-the-msalprovider-component",level:2},{value:"Override <code>/login</code> page",id:"override-login-page",level:2},{value:"Auth Provider",id:"auth-provider",level:2}],d=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",n)},m=d("DocThumbsUpDownFeedbackWidget"),g=d("InstallPackagesCommand"),f={toc:p},y="wrapper";function h(e){var{components:n}=e,t=i(e,["components"]);return(0,r.yg)(y,a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},f,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"azure-active-directory-b2c-aad-b2c"},"Azure Active Directory B2C (AAD B2C)"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/active-directory-b2c/overview"},"Azure Active Directory B2C")," provides business-to-customer identity as a service. Your customers use their preferred social, enterprise, or local account identities to get single sign-on access to your applications and APIs."),(0,r.yg)("p",null,"The Microsoft Authentication Library (MSAL) enables developers to acquire security tokens from the Microsoft identity platform to authenticate users and access secured web APIs. It can be used to provide secure access to Microsoft Graph, other Microsoft APIs, third-party web APIs, or your own web API. MSAL supports many different application architectures and platforms including .NET, JavaScript, Java, Python, Android, and iOS."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"We use Azure AD B2C in our example but authentication with Azure AD should be very similar.")),(0,r.yg)("h3",{id:"installation"},"Installation"),(0,r.yg)(m,{id:"installation",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"We will be using the javascript version of msal library and a helper for react. You can find more about the msal library here: ",(0,r.yg)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/active-directory/develop/msal-overview"},"docs")),(0,r.yg)("p",null,"To install the required dependencies, run the following command:"),(0,r.yg)(g,{args:"@azure/msal-browser @azure/msal-react",mdxType:"InstallPackagesCommand"}),(0,r.yg)("p",null,"Detailed documentation for using msal with react can be found here: ",(0,r.yg)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/active-directory/develop/single-page-app-quickstart?pivots=devlang-react"},"docs"))),(0,r.yg)("h2",{id:"configure-the-msalprovider-component"},"Configure the MsalProvider component"),(0,r.yg)(m,{id:"configure-the-msalprovider-component",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"We've create config file in ",(0,r.yg)("inlineCode",{parentName:"p"},"src/config.ts")," folder. This file contains the configuration for the msal library. You can find more information about the configuration options here: ",(0,r.yg)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications"},"docs")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/config.ts"',title:'"src/config.ts"'},'import { Configuration, LogLevel } from "@azure/msal-browser";\n\nexport const msalConfig: Configuration = {\n    auth: {\n        clientId: "YOUR_CLIENT_ID", //`${process.env.REACT_APP_AZURE_AAD_CLIENT_ID}`,\n        authority: "YOUR_AUTHORITY", //`https://${process.env.REACT_APP_AZURE_AAD_TENANT_NAME}.b2clogin.com/${process.env.REACT_APP_AZURE_AAD_TENANT_NAME}.onmicrosoft.com/${process.env.REACT_APP_AZURE_AAD_POLICY_NAME}`,\n        knownAuthorities: ["YOUR_KNOWN_AUTHORITIES"], //[`${process.env.REACT_APP_AZURE_AAD_TENANT_NAME}.b2clogin.com`],\n        redirectUri: "http://localhost:3000/", // Replace appropriately\n        postLogoutRedirectUri: window.location.origin,\n    },\n    cache: {\n        cacheLocation: "sessionStorage", // This configures where your cache will be stored\n        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge\n    },\n};\n\n// Add scopes here for ID token to be used at Microsoft identity platform endpoints.\nexport const loginRequest = {\n    scopes: ["User.Read"]\n};\n\nexport const tokenRequest = {\n    scopes: [...] // Replace ... with your custom scopes\n};\n\n\n// Add the endpoints here for Microsoft Graph API services you\'d like to use.\nexport const graphConfig = {\n    graphMeEndpoint: "ENTER_THE_GRAPH_ENDPOINT_HERE/v1.0/me"\n};\n')),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"We recommend to use environment variables for the configuration parameters.")),(0,r.yg)("p",null,"Wrap your root component with an ",(0,r.yg)("inlineCode",{parentName:"p"},"MsalProvider")," that you can import from the SDK."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/index.tsx"',title:'"src/index.tsx"'},'import React from "react";\nimport ReactDOM from "react-dom/client";\n\nimport {\n  EventType,\n  PublicClientApplication,\n  AccountInfo,\n  EventPayload,\n  SilentRequest,\n} from "@azure/msal-browser";\nimport { MsalProvider } from "@azure/msal-react";\n\nimport App, { TOKEN_KEY } from "./App";\nimport { msalConfig, tokenRequest } from "./config";\n\nconst msalInstance = new PublicClientApplication(msalConfig);\n\nmsalInstance.addEventCallback(async (event) => {\n  if (event.eventType === EventType.LOGIN_SUCCESS) {\n    const payload: EventPayload = event.payload;\n    msalInstance.setActiveAccount(payload as AccountInfo);\n\n    let account = msalInstance.getActiveAccount();\n\n    const request: SilentRequest = {\n      ...tokenRequest,\n      account: account!,\n    };\n    try {\n      // Silently acquires an access token which is then attached to a request for API access\n      const response = await msalInstance.acquireTokenSilent(request);\n      console.log("Fetching access token: success");\n      console.log("Scopes", response.scopes);\n      console.log("Token Type", response.tokenType);\n\n      localStorage.setItem(TOKEN_KEY, response.accessToken);\n    } catch (e) {\n      msalInstance.acquireTokenPopup(request).then((response) => {\n        localStorage.setItem(TOKEN_KEY, response.accessToken);\n      });\n    }\n  }\n});\n\nconst root = ReactDOM.createRoot(\n  document.getElementById("root") as HTMLElement,\n);\nroot.render(\n  <React.StrictMode>\n    <MsalProvider instance={msalInstance}>\n      <App />\n    </MsalProvider>\n  </React.StrictMode>,\n);\n'))),(0,r.yg)("h2",{id:"override-login-page"},"Override ",(0,r.yg)("inlineCode",{parentName:"h2"},"/login")," page"),(0,r.yg)(m,{id:"override-login-page",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"First, we need to override the Refine login page. In this way, we will redirect it to the Azure AD login page. We create a ",(0,r.yg)("inlineCode",{parentName:"p"},"login.tsx")," file in the ",(0,r.yg)("inlineCode",{parentName:"p"},"/src")," folder."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/login.tsx"',title:'"src/login.tsx"'},'import React from "react";\nimport { useLogin } from "@refinedev/core";\nimport { Layout, Button } from "antd";\n\nconst LoginPage = () => {\n  const SignInButton = () => {\n    const { mutate: login } = useLogin();\n\n    return (\n      <Button type="primary" size="large" block onClick={() => login()}>\n        Sign in\n      </Button>\n    );\n  };\n\n  return (\n    <Layout\n      style={{\n        background: `radial-gradient(50% 50% at 50% 50%, #63386A 0%, #310438 100%)`,\n        backgroundSize: "cover",\n      }}\n    >\n      <div style={{ height: "100vh", display: "flex" }}>\n        <div style={{ maxWidth: "200px", margin: "auto" }}>\n          <div style={{ marginBottom: "28px" }}>\n            <img src="./refine.svg" alt="Refine" />\n          </div>\n          <SignInButton />\n        </div>\n      </div>\n    </Layout>\n  );\n};\n\nexport default LoginPage;\n'))),(0,r.yg)("h2",{id:"auth-provider"},"Auth Provider"),(0,r.yg)(m,{id:"auth-provider",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"In Refine, authentication and authorization processes are performed with the auth provider. Let's write a provider for Azure AD."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine, AuthProvider, Authenticated } from "@refinedev/core";\nimport { Layout, ErrorComponent } from "@refinedev/antd";\nimport routerProvider, {\n  NavigateToResource,\n  CatchAllNavigate,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { useIsAuthenticated, useMsal } from "@azure/msal-react";\nimport { AccountInfo, SilentRequest } from "@azure/msal-browser";\nimport axios from "axios";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport LoginPage from "./login";\nimport { tokenRequest } from "./config";\n\nexport const TOKEN_KEY = "refine-auth";\n\nexport const axiosInstance = axios.create();\n\naxiosInstance.interceptors.request.use(\n  // Here we can perform any function we\'d like on the request\n  (config) => {\n    // Retrieve the token from local storage\n    const token = localStorage.getItem(TOKEN_KEY);\n\n    // Check if the header property exists\n    if (config.headers) {\n      // Set the Authorization header if it exists\n      config.headers["Authorization"] = `Bearer ${token}`;\n    }\n    return config;\n  },\n);\n\nconst App: React.FC = () => {\n  const API_URL = "https://api.fake-rest.refine.dev";\n\n  const isAuthenticated = useIsAuthenticated();\n  const { instance, inProgress, accounts } = useMsal();\n\n  if (inProgress === "login" || inProgress === "handleRedirect") {\n    return <div>Loading...</div>;\n  }\n\n  const account: AccountInfo = accounts[0];\n\n  const request: SilentRequest = {\n    ...tokenRequest,\n    account,\n  };\n\n  const authProvider: AuthProvider = {\n    login: async () => {\n      instance.loginRedirect(); // Pick the strategy you prefer i.e. redirect or popup\n      return {\n        success: true,\n      };\n    },\n    register: async () => ({\n      success: true,\n    }),\n    resetPassword: async () => ({\n      success: true,\n    }),\n    updatePassword: async () => ({\n      success: true,\n    }),\n    logout: async () => ({\n      success: true,\n    }),\n    check: async () => {\n      try {\n        if (account) {\n          const token = await instance.acquireTokenSilent(request);\n          localStorage.setItem(TOKEN_KEY, token.accessToken);\n          return {\n            authenticated: true,\n          };\n        } else {\n          return {\n            authenticated: false,\n            redirectTo: "/login",\n          };\n        }\n      } catch (e) {\n        return {\n          authenticated: false,\n          redirectTo: "/login",\n        };\n      }\n    },\n    onError: async (error) => {\n      console.error(error);\n      return { error };\n    },\n    getPermissions: async () => null,\n    getIdentity: async (): Promise<AccountInfo> => {\n      if (account === null || account === undefined) {\n        return null;\n      }\n      return account;\n    },\n  };\n\n  return (\n    <BrowserRouter>\n      <Refine\n        routerProvider={routerProvider}\n        dataProvider={dataProvider(API_URL, axiosInstance)}\n        authProvider={authProvider}\n        resources={[\n          {\n            name: "posts",\n            list: "/posts",\n          },\n        ]}\n      >\n        <Routes>\n          <Route\n            element={\n              <Authenticated fallback={<CatchAllNavigate to="/login" />}>\n                <Layout>\n                  <Outlet />\n                </Layout>\n              </Authenticated>\n            }\n          >\n            <Route path="/posts" element={<div>dummy list page</div>} />\n          </Route>\n          <Route\n            element={\n              <Authenticated fallback={<Outlet />}>\n                <NavigateToResource />\n              </Authenticated>\n            }\n          >\n            <Route path="/login" element={<LoginPage />} />\n          </Route>\n          <Route path="*" element={<ErrorComponent />} />\n        </Routes>\n      </Refine>\n    </BrowserRouter>\n  );\n};\n\nexport default App;\n'))))}h.isMDXComponent=!0}}]);