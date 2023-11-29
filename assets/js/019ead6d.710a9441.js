"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[853],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},48516:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:5,id:"javascriptsandbox"},i="Handpoint Sandbox",s={unversionedId:"javascriptsandbox",id:"version-JavaScript SDK 7.2.0/javascriptsandbox",title:"Handpoint Sandbox",description:"Get started today with the Handpoint sandbox and test payment transactions right in your browser. The sandbox is available here//www.handpoint.com/lab/cloudpos. A payment terminal is required to start testing.",source:"@site/javascript_versioned_docs/version-JavaScript SDK 7.2.0/javascriptsandbox.md",sourceDirName:".",slug:"/javascriptsandbox",permalink:"/javascript/javascriptsandbox",draft:!1,tags:[],version:"JavaScript SDK 7.2.0",sidebarPosition:5,frontMatter:{sidebar_position:5,id:"javascriptsandbox"},sidebar:"tutorialSidebar",previous:{title:"Integration Guide",permalink:"/javascript/javascriptquickintegration"},next:{title:"Transaction Types",permalink:"/javascript/javascripttransactiontypes"}},l={},p=[],c={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"handpoint-sandbox"},"Handpoint Sandbox"),(0,r.kt)("p",null,"Get started today with the Handpoint sandbox and test payment transactions right in your browser. The sandbox is available here: ",(0,r.kt)("a",{parentName:"p",href:"http://www.handpoint.com/lab/cloudpos"},"http://www.handpoint.com/lab/cloudpos"),". ",(0,r.kt)("strong",{parentName:"p"},"A payment terminal is required to start testing.")),(0,r.kt)("p",null,"This is the initial setup screen:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sandbox logo",src:a(8564).Z,width:"1010",height:"532"})),(0,r.kt)("p",null,'To get started, select the target environment in which you are going to operate (Sandbox or Production). If you have any doubts selecting the correct environment, click on  "',(0,r.kt)("em",{parentName:"p"},"How do I know what type of card reader I have?"),'" and you will be redirected to an explanation page.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sandbox logo",src:a(99347).Z,width:"1017",height:"520"})),(0,r.kt)("p",null,'Next, enter your Handpoint API key in the box labeled "',(0,r.kt)("em",{parentName:"p"},"INSERT API KEY"),"\u201d and save. This action will automatically populate the \u201c",(0,r.kt)("em",{parentName:"p"},"SELECT A DEVICE"),"\u201d drop down with the list of payment terminals assigned to your test account. If the API key is not valid, an error message will appear in the \u201cRESPONSES\u201d section of the sandbox."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sandbox logo",src:a(82742).Z,width:"1023",height:"527"})),(0,r.kt)("p",null,"In the \u201c",(0,r.kt)("em",{parentName:"p"},"SELECT A DEVICE"),"\u201d list choose any of the payment terminals assigned to your account. You can refresh the \u201c",(0,r.kt)("em",{parentName:"p"},"SELECT A DEVICE"),"\u201d list by clicking the refresh button on the right side of the \u201c",(0,r.kt)("em",{parentName:"p"},"SELECT A DEVICE"),"\u201d box. If you are already connected to a device, you can disconnect from it using the \u201c",(0,r.kt)("em",{parentName:"p"},"Disconnect"),'\u201d button or trigger a software and configuration update operation by using the "',(0,r.kt)("em",{parentName:"p"},"Update"),'" button.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sandbox logo",src:a(88345).Z,width:"1017",height:"521"})),(0,r.kt)("p",null,"Once you have selected a device, the \u201cSELECT A DEVICE\u201d box will be disabled, and the rest of the sandbox will be enabled. With your selected device, you can simulate a number of operations, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sale"),(0,r.kt)("li",{parentName:"ul"},"Sale and tokenize"),(0,r.kt)("li",{parentName:"ul"},"Refund"),(0,r.kt)("li",{parentName:"ul"},"Tokenize card"),(0,r.kt)("li",{parentName:"ul"},"Reverse sale transactions"),(0,r.kt)("li",{parentName:"ul"},"Reverse refund transactions")),(0,r.kt)("p",null,"In order to reverse a transaction, a transaction id is needed, this id is available in the transaction result data coming from a previous sale or refund operation. Each transaction result will appear in the RESPONSES panel, on the right side of the screen."),(0,r.kt)("p",null,"With each transaction result you will be able to perform several operations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"View and print the merchant receipt"),(0,r.kt)("li",{parentName:"ul"},"View and print the customer receipt"),(0,r.kt)("li",{parentName:"ul"},"Reverse the transaction"),(0,r.kt)("li",{parentName:"ul"},"Copy the transaction result data, it is the raw JSON transaction result, as received by the application from the payment terminal. ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sandbox logo",src:a(79038).Z,width:"1010",height:"527"})))}d.isMDXComponent=!0},8564:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cloudpos-1dd12e65b9220c043771880182d1ecff.png"},99347:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cloudpos2-81ba10174d6fe33b8fbb91df42decb7d.png"},82742:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cloudpos3-28f448bfc040e6cf11ba7e03a9f6ba39.png"},88345:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cloudpos4-99a17307c037fdf9ce537df9ea0b7ae9.png"},79038:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cloudpos5-98886b5a16ad2faeeeebf8dffa1cf62a.png"}}]);