"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[44773],{58860:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>u});var n=a(37953);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,u=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return a?n.createElement(u,i(i({ref:t},g),{},{components:a})):n.createElement(u,i({ref:t},g))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},42648:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>d});a(37953);var n=a(58860);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={title:"Django REST Framework - How to use it to create APIs?",description:"Explore the Django REST Framework and learn how to create APIs using it.",slug:"django-rest-framework",authors:"muhammad_khabbab",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-04-03-django-rest/social.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/django-rest-framework",source:"@site/blog/2024-04-03-django-rest.md",title:"Django REST Framework - How to use it to create APIs?",description:"Explore the Django REST Framework and learn how to create APIs using it.",date:"2024-04-03T00:00:00.000Z",formattedDate:"April 3, 2024",tags:[{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:7.68,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"Django REST Framework - How to use it to create APIs?",description:"Explore the Django REST Framework and learn how to create APIs using it.",slug:"django-rest-framework",authors:"muhammad_khabbab",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-04-03-django-rest/social.png",hide_table_of_contents:!1},prevItem:{title:"Building components with Radix UI",permalink:"/blog/radix-ui"},nextItem:{title:"TypeScript keyof with Examples",permalink:"/blog/typescript-keyof"},relatedPosts:[{title:"esbuild - Next-generation JavaScript bundler",description:"The advantages of using esbuild and how to use it in your project.",permalink:"/blog/what-is-esbuild",formattedDate:"July 4, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.845,date:"2024-07-04T00:00:00.000Z"},{title:"What is Turborepo and Why Should You Care?",description:"The advantages of using Turborepo for monorepo development.",permalink:"/blog/how-to-use-turborepo",formattedDate:"July 5, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.565,date:"2024-07-05T00:00:00.000Z"},{title:"How to Change Node Version",description:"A comprehensive guide on how to change the node version.",permalink:"/blog/change-node-version",formattedDate:"March 27, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:10.11,date:"2024-03-27T00:00:00.000Z"}],authorPosts:[{title:"A Detailed Guide on Docker run Command",description:"We'll discuss the Docker run command in detail, including its syntax, options, and examples.",permalink:"/blog/docker-run-command",formattedDate:"June 24, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.855,date:"2023-06-24T00:00:00.000Z"},{title:"A Complete Guide to Listing Docker Containers",description:"We'll discuss the importance of listing docker containers, how to list running and stopped containers, listing the latest containers, and how to disable truncation of container names.",permalink:"/blog/docker-list-containers",formattedDate:"June 6, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.265,date:"2023-06-06T00:00:00.000Z"},{title:"Synchronous vs. Asynchronous Programming",description:"This article explains the differences between the Synchronous and Asynchronous programming and when to use each.",permalink:"/blog/synchronous-vs-asynchronous",formattedDate:"February 16, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:10.05,date:"2024-02-16T00:00:00.000Z"}]},g={authorsImageUrls:[void 0]},d=[{value:"<strong>Overview and Importance of REST APIs</strong>",id:"overview-and-importance-of-rest-apis",level:2},{value:"<strong>What is Django?</strong>",id:"what-is-django",level:2},{value:"<strong>Why choose Django REST Framework</strong>",id:"why-choose-django-rest-framework",level:2},{value:"<strong>Steps for Installation and Setup of Django REST Framework(DRF)</strong>",id:"steps-for-installation-and-setup-of-django-rest-frameworkdrf",level:2},{value:"<strong>Step 1: Create and Activate Virtual Environment</strong>",id:"step-1-create-and-activate-virtual-environment",level:3},{value:"<strong>Step 2: Install and set pre-requisites</strong>",id:"step-2-install-and-set-pre-requisites",level:3},{value:"<strong>Step 3: Install and Configure DRF</strong>",id:"step-3-install-and-configure-drf",level:3},{value:"<strong>How to Create API using DRF?</strong>",id:"how-to-create-api-using-drf",level:2},{value:"<strong>Understanding RESTful Structure</strong>",id:"understanding-restful-structure",level:3},{value:"<strong>Create Model</strong>",id:"create-model",level:3},{value:"<strong>Create Serializer</strong>",id:"create-serializer",level:3},{value:"<strong>Create Views</strong>",id:"create-views",level:3},{value:"<strong>Add URL patterns</strong>",id:"add-url-patterns",level:3},{value:"<strong>Conclusion</strong>",id:"conclusion",level:2}],m={toc:d},c="wrapper";function u(e){var{components:t}=e,a=i(e,["components"]);return(0,n.yg)(c,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},m,a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"overview-and-importance-of-rest-apis"},(0,n.yg)("strong",{parentName:"h2"},"Overview and Importance of REST APIs")),(0,n.yg)("p",null,"REST is a short form of Representational State Transfer, and its APIs allow different applications to communicate with each other through the HTTP protocol. Through REST APIs, we can integrate different applications to exchange data and share functionalities. For Example, on the food delivery app, when we tap on \u2018order now\u2019, the mobile app sends a request to API, which processes that request and sends confirmation in response to the mobile app. The most common ",(0,n.yg)("inlineCode",{parentName:"p"},"HTTP")," methods that developers typically use with REST APIs are ",(0,n.yg)("inlineCode",{parentName:"p"},"GET"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"POST"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"PUT"),", and ",(0,n.yg)("inlineCode",{parentName:"p"},"DELETE"),"."),(0,n.yg)("p",null,"Steps to be covered:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#overview-and-importance-of-rest-apis"},(0,n.yg)("strong",{parentName:"a"},"Overview and Importance of REST APIs"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#what-is-django"},(0,n.yg)("strong",{parentName:"a"},"What is Django?"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#why-choose-django-rest-framework"},(0,n.yg)("strong",{parentName:"a"},"Why choose Django REST Framework"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#steps-for-installation-and-setup-of-django-rest-frameworkdrf"},(0,n.yg)("strong",{parentName:"a"},"Steps for Installation and Setup of Django REST Framework(DRF)")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#step-1-create-and-activate-virtual-environment"},(0,n.yg)("strong",{parentName:"a"},"Step 1: Create and Activate Virtual Environment"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#step-2-install-and-set-pre-requisites"},(0,n.yg)("strong",{parentName:"a"},"Step 2: Install and set pre-requisites"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#step-3-install-and-configure-drf"},(0,n.yg)("strong",{parentName:"a"},"Step 3: Install and Configure DRF"))))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#how-to-create-api-using-drf"},(0,n.yg)("strong",{parentName:"a"},"How to Create API using DRF?")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#understanding-restful-structure"},(0,n.yg)("strong",{parentName:"a"},"Understanding RESTful Structure"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#create-model"},(0,n.yg)("strong",{parentName:"a"},"Create Model"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#create-serializer"},(0,n.yg)("strong",{parentName:"a"},"Create Serializer"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#create-views"},(0,n.yg)("strong",{parentName:"a"},"Create Views"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#add-url-patterns"},(0,n.yg)("strong",{parentName:"a"},"Add URL patterns")))))),(0,n.yg)("h2",{id:"what-is-django"},(0,n.yg)("strong",{parentName:"h2"},"What is Django?")),(0,n.yg)("p",null,"It is an open-source web framework written in a powerful language, Python, and it is popular among the development community due to its simplicity, flexibility, and rich features. You do not require a separate web server because Django has its own! Due to its pragmatic design, you can speed up the development process and avoid reinventing the wheel. It also comes up with a security ",(0,n.yg)("inlineCode",{parentName:"p"},"middleware")," that helps you to protect your website automatically from the most common security attacks."),(0,n.yg)("h2",{id:"why-choose-django-rest-framework"},(0,n.yg)("strong",{parentName:"h2"},"Why choose Django REST Framework")),(0,n.yg)("p",null,"The extensive range of pre-built features in the Django REST framework makes common tasks like request handling, authentication, and serialization very simple to utilize. One of the main differences between other frameworks and DRF is that it allows the developers to specify the URL structure rather than depending on one that is automatically created and is less flexible. Serialization is also a fundamental part that supports both ORM and non-ORM data sources. Because of its adaptability and modularity, developers can modify the framework to meet the needs of complex projects, and it reduces code redundancy by adhering to the DRY (",(0,n.yg)("em",{parentName:"p"},"Don't Repeat Yourself"),") principle."),(0,n.yg)("h2",{id:"steps-for-installation-and-setup-of-django-rest-frameworkdrf"},(0,n.yg)("strong",{parentName:"h2"},"Steps for Installation and Setup of Django REST Framework(DRF)")),(0,n.yg)("h3",{id:"step-1-create-and-activate-virtual-environment"},(0,n.yg)("strong",{parentName:"h3"},"Step 1: Create and Activate Virtual Environment")),(0,n.yg)("p",null,"Before we begin to work with DRF, first, we need to ensure that we have created a virtual environment and it is activated. The activated environment will have all the dependencies installed."),(0,n.yg)("p",null,"We are using ",(0,n.yg)("inlineCode",{parentName:"p"},"VS Code")," as IDE and using the ",(0,n.yg)("inlineCode",{parentName:"p"},"command prompt"),"(Terminal) to execute the commands."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"The project folder is created, and we run the following commands to create and activate the virtual environment.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},"python -m venv efvenv\n")),(0,n.yg)("p",null,"By executing the command above, we have created the environment with the name ",(0,n.yg)("inlineCode",{parentName:"p"},"efvenv"),". Now, in the next command, we are going to activate it:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},".\\efvenv\\Scripts\\activate\n")),(0,n.yg)("p",null,"Once the virtual environment is activated, you can see it at the start of each line in the command prompt."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Note:")," It is important to understand that activating commands of a virtual environment can be different for different operating systems and command shells. For Linux or MacOS, the command will be ",(0,n.yg)("inlineCode",{parentName:"p"},"source efvenv/bin/activate")),(0,n.yg)("h3",{id:"step-2-install-and-set-pre-requisites"},(0,n.yg)("strong",{parentName:"h3"},"Step 2: Install and set pre-requisites")),(0,n.yg)("p",null,"Once the virtual environment is activated, the next steps include the installation of Django Framework using the Python package manager. Execute the command below:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},"pip install django\n")),(0,n.yg)("p",null,"After installation, you can verify it by running the command below, which will return you the version of Django:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},"python -m django \u2013version\n")),(0,n.yg)("p",null,"In this tutorial, we will be creating an Event Finder App, so let\u2019s create a Django project on the top level that controls the whole web application:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},"django-admin startproject event_finder\n")),(0,n.yg)("p",null,"For our APIs, we need to create apps inside the project. These apps contain the logic of our APIs, and they can be created by running the command below:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},"django-admin startapp events\n")),(0,n.yg)("h3",{id:"step-3-install-and-configure-drf"},(0,n.yg)("strong",{parentName:"h3"},"Step 3: Install and Configure DRF")),(0,n.yg)("p",null,"In this step, we will first install DRF by using the Python package manager:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},"pip install djangorestframework\n")),(0,n.yg)("p",null,"In the project directory, go to the ",(0,n.yg)("inlineCode",{parentName:"p"},"settings.py")," file. In our case, it will be located at ",(0,n.yg)("inlineCode",{parentName:"p"},"/event_finder/settings.py")),(0,n.yg)("p",null,"Search for ",(0,n.yg)("inlineCode",{parentName:"p"},"INSTALLED APPS")," in ",(0,n.yg)("inlineCode",{parentName:"p"},"settings.py")," and add the ",(0,n.yg)("inlineCode",{parentName:"p"},"rest_framework")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"events")," apps to the list."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},"INSTALLED_APPS  = [\n  'django.contrib.admin',\n  'django.contrib.auth',\n  'django.contrib.contenttypes',\n  'django.contrib.sessions',\n  'django.contrib.messages',\n  'django.contrib.staticfiles',\n  'rest_framework',\n  'events',\n  'django_filters',\n  'drf_yasg',\n]\n")),(0,n.yg)("h2",{id:"how-to-create-api-using-drf"},(0,n.yg)("strong",{parentName:"h2"},"How to Create API using DRF?")),(0,n.yg)("h3",{id:"understanding-restful-structure"},(0,n.yg)("strong",{parentName:"h3"},"Understanding RESTful Structure")),(0,n.yg)("p",null,"The RESTful structure involves different ",(0,n.yg)("inlineCode",{parentName:"p"},"HTTP")," methods that manipulate the resources. As we are creating an event finder App, where the event is a resource. So, we will create endpoints for performing the following actions on the event:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Endpoint"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Method"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Purpose"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"api/events"),(0,n.yg)("td",{parentName:"tr",align:"left"},"GET"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Retrieve the list of all events")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"api/events/id"),(0,n.yg)("td",{parentName:"tr",align:"left"},"GET"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Retrieve specific event")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"api/events/id"),(0,n.yg)("td",{parentName:"tr",align:"left"},"POST"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Create an Event")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"api/events/id"),(0,n.yg)("td",{parentName:"tr",align:"left"},"PUT"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Update an Event")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"api/events/id"),(0,n.yg)("td",{parentName:"tr",align:"left"},"DELETE"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Delete an Event")))),(0,n.yg)("p",null,"In order to implement this structure and create our Web APIs, we will implement different parts of our application and take advantage of DRF to streamline this process."),(0,n.yg)("h3",{id:"create-model"},(0,n.yg)("strong",{parentName:"h3"},"Create Model")),(0,n.yg)("p",null,"First of all, we will define our models in the ",(0,n.yg)("inlineCode",{parentName:"p"},"model.py")," file. This file is created by default in each app when we create it using Django command. For Example, we create a model with name events:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},"from  django.db  import  models\n\nclass  Event(models.Model):\n\n  CATEGORY_CHOICES  = [\n    ('CON', 'Concert'),\n    ('SPR', 'Sports'),\n    ('TEC', 'Technology'),\n    ('ART', 'Art'),\n  ]\n\n  title  =  models.CharField(max_length=200)\n  description  =  models.TextField()\n  date  =  models.DateField()\n  location  =  models.CharField(max_length=100)\n  category  =  models.CharField(max_length=3, choices=CATEGORY_CHOICES, default='CON')\n  participant_count  =  models.IntegerField(default=0)\n  is_active  =  models.BooleanField(default=True)\n\n  def  __str__(self):\n\nreturn  self.title\n")),(0,n.yg)("p",null,"Once you have created the model, then you need to make and apply migrations to create the corresponding database schema. So, do not forget to run these commands after creating or updating models:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},"python manage.py makemigrations\n\npython manage.py migrate\n")),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-04-03-django-rest/REST-1.png",alt:"Snapshot of making and applying migrations"})),(0,n.yg)("h3",{id:"create-serializer"},(0,n.yg)("strong",{parentName:"h3"},"Create Serializer")),(0,n.yg)("p",null,"Django REST Framework(DRF) provides serializers that can convert complex datatypes like query sets and Django models to Python datatypes that can be rendered into various data formats such as ",(0,n.yg)("inlineCode",{parentName:"p"},"JSON"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"XML"),", and ",(0,n.yg)("inlineCode",{parentName:"p"},"Yaml"),". We will create a serializer for the model we defined above by creating a ",(0,n.yg)("inlineCode",{parentName:"p"},"serializers.py")," file in our Django app i.e., ",(0,n.yg)("inlineCode",{parentName:"p"},"events"),", and name it ",(0,n.yg)("inlineCode",{parentName:"p"},"EventSerializer"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},"from  rest_framework  import  serializers\nfrom .models  import  Event\n\nclass  EventSerializer(serializers.ModelSerializer):\n  class  Meta:\n  model  =  Event\n  fields  =  '__all__'\n")),(0,n.yg)("h3",{id:"create-views"},(0,n.yg)("strong",{parentName:"h3"},"Create Views")),(0,n.yg)("p",null,"Using DRF, we can create viewsets, which are the classes that encapsulate common methods(",(0,n.yg)("inlineCode",{parentName:"p"},"GET"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"POST"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"PUT"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"DELETE"),"). If you require standard CRUD operations and reduce the amount of code, then DRF\u2019s viewsets are most feasible. But, if you want to have highly customized views, then it's better to utilize APIView of DRF."),(0,n.yg)("p",null,"In our ",(0,n.yg)("inlineCode",{parentName:"p"},"views.py")," file, we will create ",(0,n.yg)("inlineCode",{parentName:"p"},"EventViewSet")," by utilizing Event Model and ",(0,n.yg)("inlineCode",{parentName:"p"},"EventSerializer")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},"from  rest_framework  import  viewsets\nfrom .models  import  Event\nfrom .serializers  import  EventSerializer\n\nclass  EventViewSet(viewsets.ModelViewSet):\n\n  queryset  =  Event.objects.all()\n  serializer_class  =  EventSerializer\n")),(0,n.yg)("h3",{id:"add-url-patterns"},(0,n.yg)("strong",{parentName:"h3"},"Add URL patterns")),(0,n.yg)("p",null,"Once you set up your views, models, and serializers, then you have to configure your URL routes that will decide the right view to be called for each endpoint. Django REST Framework equips us with a very simple way to handle URL routing."),(0,n.yg)("p",null,"First, you need to create URL patterns for your app, and for that, create ",(0,n.yg)("inlineCode",{parentName:"p"},"urls.py")," file in your app directory. Import necessary functions and add routing by registering it with the app\u2019s name, like the Example below:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},"from  django.urls  import  path, include\nfrom  rest_framework.routers  import  DefaultRouter\nfrom .views  import  EventViewSet\n\nrouter  =  DefaultRouter()\nrouter.register(r'events', EventViewSet)\n\nurlpatterns  = [\n  path('', include(router.urls)),\n]\n")),(0,n.yg)("p",null,"Add URL patterns to your main project\u2019s ",(0,n.yg)("inlineCode",{parentName:"p"},"url.py")," file and map it with your app ",(0,n.yg)("inlineCode",{parentName:"p"},"URLConf")," by including ",(0,n.yg)("inlineCode",{parentName:"p"},"[appname].urls"),". If you require an organized structure of URLs, then you can make use of ",(0,n.yg)("inlineCode",{parentName:"p"},"api/")," prefix. By considering this practice, our ",(0,n.yg)("inlineCode",{parentName:"p"},"event_finder")," project URL pattern will look like this:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},"from  django.contrib  import  admin\nfrom  django.urls  import  path, include\n\nurlpatterns  = [\n  path('admin/', admin.site.urls),\n\n  path('api/', include('events.urls')),\n]\n")),(0,n.yg)("p",null,"As everything is set up, we can now test our fully functional APIs through a built-in interface provided by DRF."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Run your app through this command:")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},"python manage.py runserver\n")),(0,n.yg)("p",null,"It will return a localhost URL to open it in the browser by appending ",(0,n.yg)("inlineCode",{parentName:"p"},"api/")," and app name. In our Example, it is:"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"http://127.0.0.1:8000/api/events/"},"http://127.0.0.1:8000/api/events/")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"The interface provided by DRF will look like this:")),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-04-03-django-rest/REST-2.png",alt:"Snapshot of Django REST Framework Interface"})),(0,n.yg)("h2",{id:"conclusion"},(0,n.yg)("strong",{parentName:"h2"},"Conclusion")),(0,n.yg)("p",null,"Whether you are working on a small project or you aim to scale it to a higher level with many complex functionalities, Django, with the addition of Django REST Framework, makes it easier for you to create, test and manage REST APIs through its extensive features. This article has guided you through the basic steps needed to lay the foundation for a basic application that performs common CRUD operations using DRF. We encourage readers to explore it further, as the DRF's role and capabilities extend far beyond."))}u.isMDXComponent=!0}}]);