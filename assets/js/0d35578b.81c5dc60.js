"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[73801],{58860:(e,t,o)=>{o.d(t,{xA:()=>c,yg:()=>m});var n=o(37953);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(o),h=a,m=p["".concat(l,".").concat(h)]||p[h]||g[h]||r;return o?n.createElement(m,i(i({ref:t},c),{},{components:o})):n.createElement(m,i({ref:t},c))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},90889:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});o(37953);var n=o(58860);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})),e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}const s={title:"Redirect in React Router V6 with useNavigate hook",description:"We'll discover how to perform a redirect using useNavigate in React Router V6",slug:"usenavigate-react-router-redirect",authors:"joseph_mawa",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-19-router-use-navigate/social.jpg",hide_table_of_contents:!1},l=void 0,u={permalink:"/blog/usenavigate-react-router-redirect",source:"@site/blog/2022-09-19-router-use-navigate.md",title:"Redirect in React Router V6 with useNavigate hook",description:"We'll discover how to perform a redirect using useNavigate in React Router V6",date:"2022-09-19T00:00:00.000Z",formattedDate:"September 19, 2022",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:5.22,hasTruncateMarker:!1,authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],frontMatter:{title:"Redirect in React Router V6 with useNavigate hook",description:"We'll discover how to perform a redirect using useNavigate in React Router V6",slug:"usenavigate-react-router-redirect",authors:"joseph_mawa",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-19-router-use-navigate/social.jpg",hide_table_of_contents:!1},prevItem:{title:"OTP Authentication with Supabase and Twilio in React",permalink:"/blog/supabase-twilio-otp-authentication-in-react"},nextItem:{title:"Material UI Grid System in React",permalink:"/blog/material-ui-grid"},relatedPosts:[{title:"Using SVGs in React",description:"Let's talk about React SVG and how it makes the process of adding and handling images on modern websites more versatile and fun.",permalink:"/blog/react-svg",formattedDate:"November 17, 2023",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:13.3,date:"2023-11-17T00:00:00.000Z"},{title:"Develop your Own Customizable Invoice Generator with Refine and Strapi | Part I",description:"Looking for an invoice generator? Try out Refine. With our custom interface, you can build your own invoice in minutes! Learn more here.",permalink:"/blog/refine-react-admin-invoice-generator",formattedDate:"February 22, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:11.21,date:"2022-02-22T00:00:00.000Z"},{title:"Understanding the React useRef Hook",description:"We will explain the differences between useRef and React ref.",permalink:"/blog/react-useref-hook-and-ref",formattedDate:"January 18, 2024",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:11.17,date:"2024-01-18T00:00:00.000Z"}],authorPosts:[{title:"5 Best Free Platforms for Hosting Hobby Web Projects",description:"A list of the best free platforms for hosting hobby web projects. You can host your static websites, React apps, and more for free.",permalink:"/blog/5-top-free-react-hosting-platforms",formattedDate:"November 23, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:19.08,date:"2022-11-23T00:00:00.000Z"},{title:"Building a React Admin Dashboard with Tremor Library",description:"We'll build a simple React admin dashboard using Refine and Tremor.",permalink:"/blog/building-react-admin-dashboard-with-tremor",formattedDate:"July 2, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:23.495,date:"2023-07-02T00:00:00.000Z"},{title:"How to use the useParams hook in React Router",description:"We'll discover how to access the parameters of the current route with the useParams hook in React Router.",permalink:"/blog/react-router-useparams",formattedDate:"September 24, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:4.445,date:"2022-09-24T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"How to set up React Router V6",id:"how-to-set-up-react-router-v6",level:2},{value:"Install React router",id:"install-react-router",level:3},{value:"Configure React router",id:"configure-react-router",level:3},{value:"Configure routes",id:"configure-routes",level:3},{value:"How to use the <code>useNavigate</code> hook",id:"how-to-use-the-usenavigate-hook",level:2},{value:"Path with optional second argument",id:"path-with-optional-second-argument",level:3},{value:"Modifying the history stack",id:"modifying-the-history-stack",level:3},{value:"Conclusion",id:"conclusion",level:2}],g={toc:p},h="wrapper";function m(e){var{components:t}=e,o=i(e,["components"]);return(0,n.yg)(h,r(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),n.forEach((function(t){a(e,t,o[t])}))}return e}({},g,o),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"React Router is a popular routing library for React. The latest version, React router version 6, shipped with several new features and improved compatibility with the latest version of React. Since hooks have become the preferred way of writing React code, React Router version 6 also heavily uses React hooks."),(0,n.yg)("p",null,"One such hook is the ",(0,n.yg)("inlineCode",{parentName:"p"},"useNavigate")," hook. The ",(0,n.yg)("inlineCode",{parentName:"p"},"useNavigate")," hook lets you navigate programmatically within your React code. In this article, you will learn the ",(0,n.yg)("inlineCode",{parentName:"p"},"useNavigate")," hook and how to use it. We will also hint at when you might choose the ",(0,n.yg)("inlineCode",{parentName:"p"},"useNavigate")," hook over the ",(0,n.yg)("inlineCode",{parentName:"p"},"Navigate")," component."),(0,n.yg)("p",null,"Steps we'll cover:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#how-to-set-up-react-router-v6"},"How to set up React Router V6")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#how-to-use-the-usenavigate-hook"},"How to use the useNavigate hook"))),(0,n.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.yg)("p",null,"To run the examples in this article, be sure to have some or all of the following."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The Node runtime environment. Install Node for your operating system from the ",(0,n.yg)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node downloads page"),"."),(0,n.yg)("li",{parentName:"ul"},"A working React project. Quickly create a React project using ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/pankod/superplate"},"superplate"),".")),(0,n.yg)("h2",{id:"how-to-set-up-react-router-v6"},"How to set up React Router V6"),(0,n.yg)("p",null,"If you have set up a React project, follow the steps below to start using React router. We will use React router version 6 throughout this article. This article assumes you are running React in the browser."),(0,n.yg)("h3",{id:"install-react-router"},"Install React router"),(0,n.yg)("p",null,"Install React router from the NPM package registry before using it. You can install it like so:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"# Using NPM\n npm install react-router-dom@6\n\n# Using Yarn\nyarn add react-router-dom@6\n\n# Using pnpm\npnpm add react-router-dom@6\n")),(0,n.yg)("h3",{id:"configure-react-router"},"Configure React router"),(0,n.yg)("p",null,"Configure your app to start using React Router by importing the router and wrapping your root component in it. Since our goal is to run React router in the browser, we will use the top-level Component ",(0,n.yg)("inlineCode",{parentName:"p"},"BrowserRouter"),". It is the recommended interface for running React router in the browser. Several other routers, like ",(0,n.yg)("inlineCode",{parentName:"p"},"NativeRouter")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"StaticRouter"),", have their use cases. Check the React router documentation to learn more about the other routers and their use cases."),(0,n.yg)("p",null,"According to the ",(0,n.yg)("a",{parentName:"p",href:"https://reactrouter.com/en/main"},"documentation"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"BrowserRouter")," uses the HTML 5 history API internally to keep your application's UI in sync with the URL. The code below shows how to wrap the root component in ",(0,n.yg)("inlineCode",{parentName:"p"},"BrowserRouter")," when working with React version 18."),(0,n.yg)("p",null,"You can copy and paste the code below into the ",(0,n.yg)("inlineCode",{parentName:"p"},"index.js")," file."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport { BrowserRouter as Router } from "react-router-dom";\nimport App from "./App";\n\nconst root = ReactDOM.createRoot(document.getElementById("root"));\n\nroot.render(\n  <React.StrictMode>\n    <Router>\n      <App />\n    </Router>\n  </React.StrictMode>,\n);\n')),(0,n.yg)("h3",{id:"configure-routes"},"Configure routes"),(0,n.yg)("p",null,"After installing and connecting your application like in the previous steps, configure the routes to start using React router. Since we are using React router version 6, we will import the ",(0,n.yg)("inlineCode",{parentName:"p"},"Routes")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"Route")," components.",(0,n.yg)("br",{parentName:"p"}),"\n","After that, you can set up the routes like in the example below."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Route, Routes } from "react-router-dom";\nimport { Home, Blog } from "./components";\n\nfunction App() {\n  return (\n    <div className="App">\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/blog" element={<Blog />} />\n      </Routes>\n    </div>\n  );\n}\n')),(0,n.yg)("p",null,"That is just about everything you need to do to start using React router version 6."),(0,n.yg)("h2",{id:"how-to-use-the-usenavigate-hook"},"How to use the ",(0,n.yg)("inlineCode",{parentName:"h2"},"useNavigate")," hook"),(0,n.yg)("p",null,"As mentioned above, the ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"useNavigate"))," hook became part of React router in version 6. It is useful when navigating programmatically in your React project. The ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"useNavigate"))," hook returns an imperative method that you can use for changing location."),(0,n.yg)("p",null,"You can use the function returned by the ",(0,n.yg)("inlineCode",{parentName:"p"},"useNavigate")," hook in two ways."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Pass the path you want to navigate as the first argument and an optional object as the second argument."),(0,n.yg)("li",{parentName:"ul"},"Pass the delta in the history stack to which you want to navigate as the only argument.")),(0,n.yg)("h3",{id:"path-with-optional-second-argument"},"Path with optional second argument"),(0,n.yg)("p",null,"If you choose to pass the path you want to navigate and the second optional argument, then you can do it like so:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigate } from "react-router-dom";\n\nconst navigate = useNavigate();\n\nconst submitHandler = async (event) => {\n  event.preventDefault();\n\n  try {\n    await submitForm();\n    navigate("/success"); // Omit optional second argument\n  } catch (error) {\n    navigate("/error", { state: { message: "Failed to submit form" } }); // Pass optional second argument\n  }\n};\n')),(0,n.yg)("p",null,"In the example above, we navigate inside an event handler after submitting a form. Where we navigate depends on whether the form submission was successful or not."),(0,n.yg)("p",null,"The optional second argument looks like the object below. You can pass data as the value of the ",(0,n.yg)("inlineCode",{parentName:"p"},"state")," property. If you set the value of ",(0,n.yg)("inlineCode",{parentName:"p"},"replace")," to ",(0,n.yg)("inlineCode",{parentName:"p"},"true"),", React router will replace the current entry in the history stack instead of adding a new one. Both ",(0,n.yg)("inlineCode",{parentName:"p"},"state")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"replace")," fields are optional."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'{\n  state: { message: "Failed to submit form" },\n  replace: false,\n}\n')),(0,n.yg)("p",null,"After navigation, the data you passed using ",(0,n.yg)("inlineCode",{parentName:"p"},"navigate")," is accessible inside the matching route's rendered component using the ",(0,n.yg)("inlineCode",{parentName:"p"},"useLocation")," hook."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},"const location = useLocation();\nconsole.log(location.state);\n// { message: 'Failed to submit form' }\n")),(0,n.yg)("h3",{id:"modifying-the-history-stack"},"Modifying the history stack"),(0,n.yg)("p",null,"If you choose to modify the history stack, you need to pass the delta in the history stack to which you want to go. For example, ",(0,n.yg)("inlineCode",{parentName:"p"},"navigate(-1)")," is equivalent to clicking the browser's back button."),(0,n.yg)("p",null,"Be aware that ",(0,n.yg)("inlineCode",{parentName:"p"},"useNavigate")," is a hook. Therefore you cannot directly use it with ES6 classes. Use the ",(0,n.yg)("inlineCode",{parentName:"p"},"Navigate")," component instead. The ",(0,n.yg)("inlineCode",{parentName:"p"},"Navigate")," component uses ",(0,n.yg)("inlineCode",{parentName:"p"},"useNavigate")," internally, and the two are functionally similar."),(0,n.yg)("p",null,"Similarly, while using the ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"useNavigate"))," hook, you should remember the rules of React hooks. Do not invoke React hooks inside loops, conditions, or nested functions. Invoke them at the top level."),(0,n.yg)("h2",{id:"conclusion"},"Conclusion"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"useNavigate")," hook shipped with React Router version 6. It comes in handy if you want an imperative API for navigation and returns a function you can invoke in two ways. When invoking the function returned, you either pass the path you want to navigate to as the first argument and an optional object as the second argument or the delta you want to navigate in the history stack."),(0,n.yg)("p",null,"The ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"useNavigate"))," hook is functionally similar to the ",(0,n.yg)("inlineCode",{parentName:"p"},"Navigate")," component. Since you can't directly use hooks with ES6 classes, the ",(0,n.yg)("inlineCode",{parentName:"p"},"Navigate")," component comes in handy when working with class-based components."),(0,n.yg)("br",null),(0,n.yg)("div",null,(0,n.yg)("a",{href:"https://discord.gg/refine"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord-banner.png",alt:"discord banner"}))))}m.isMDXComponent=!0}}]);