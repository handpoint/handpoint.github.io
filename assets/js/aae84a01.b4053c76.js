"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4288],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4028:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:5,id:"javascriptsandbox"},l="Handpoint Sandbox",c={unversionedId:"javascriptsandbox",id:"version-JavaScript SDK 6.1.0/javascriptsandbox",title:"Handpoint Sandbox",description:"Get started today with the Handpoint sandbox and test payment transactions right in your browser. The sandbox is available here//www.handpoint.com/lab/cloudpos. A payment terminal is required to start testing.",source:"@site/javascript_versioned_docs/version-JavaScript SDK 6.1.0/javascriptsandbox.md",sourceDirName:".",slug:"/javascriptsandbox",permalink:"/javascript/javascriptsandbox",draft:!1,tags:[],version:"JavaScript SDK 6.1.0",sidebarPosition:5,frontMatter:{sidebar_position:5,id:"javascriptsandbox"},sidebar:"tutorialSidebar",previous:{title:"Integration Guide",permalink:"/javascript/javascriptquickintegration"},next:{title:"Transaction Types",permalink:"/javascript/javascripttransactiontypes"}},p={},u=[],d={toc:u};function m(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"handpoint-sandbox"},"Handpoint Sandbox"),(0,o.kt)("p",null,"Get started today with the Handpoint sandbox and test payment transactions right in your browser. The sandbox is available here: ",(0,o.kt)("a",{parentName:"p",href:"http://www.handpoint.com/lab/cloudpos"},"http://www.handpoint.com/lab/cloudpos"),". ",(0,o.kt)("strong",{parentName:"p"},"A payment terminal is required to start testing.")),(0,o.kt)("p",null,"This is the initial setup screen:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sandbox logo",src:n(6260).Z,width:"1010",height:"532"})),(0,o.kt)("p",null,'To get started, select the target environment in which you are going to operate (Sandbox or Production). If you have any doubts selecting the correct environment, click on  "',(0,o.kt)("em",{parentName:"p"},"How do I know what type of card reader I have?"),'" and you will be redirected to an explanation page.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sandbox logo",src:n(1849).Z,width:"1017",height:"520"})),(0,o.kt)("p",null,'Next, enter your Handpoint API key in the box labeled "',(0,o.kt)("em",{parentName:"p"},"INSERT API KEY"),"\u201d and save. This action will automatically populate the \u201c",(0,o.kt)("em",{parentName:"p"},"SELECT A DEVICE"),"\u201d drop down with the list of payment terminals assigned to your test account. If the API key is not valid, an error message will appear in the \u201cRESPONSES\u201d section of the sandbox."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sandbox logo",src:n(9539).Z,width:"1023",height:"527"})),(0,o.kt)("p",null,"In the \u201c",(0,o.kt)("em",{parentName:"p"},"SELECT A DEVICE"),"\u201d list choose any of the payment terminals assigned to your account. You can refresh the \u201c",(0,o.kt)("em",{parentName:"p"},"SELECT A DEVICE"),"\u201d list by clicking the refresh button on the right side of the \u201c",(0,o.kt)("em",{parentName:"p"},"SELECT A DEVICE"),"\u201d box. If you are already connected to a device, you can disconnect from it using the \u201c",(0,o.kt)("em",{parentName:"p"},"Disconnect"),'\u201d button or trigger a software and configuration update operation by using the "',(0,o.kt)("em",{parentName:"p"},"Update"),'" button.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sandbox logo",src:n(4190).Z,width:"1017",height:"521"})),(0,o.kt)("p",null,"Once you have selected a device, the \u201cSELECT A DEVICE\u201d box will be disabled, and the rest of the sandbox will be enabled. With your selected device, you can simulate a number of operations, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sale"),(0,o.kt)("li",{parentName:"ul"},"Sale and tokenize"),(0,o.kt)("li",{parentName:"ul"},"Refund"),(0,o.kt)("li",{parentName:"ul"},"Tokenize card"),(0,o.kt)("li",{parentName:"ul"},"Reverse sale transactions"),(0,o.kt)("li",{parentName:"ul"},"Reverse refund transactions")),(0,o.kt)("p",null,"In order to reverse a transaction, a transaction id is needed, this id is available in the transaction result data coming from a previous sale or refund operation. Each transaction result will appear in the RESPONSES panel, on the right side of the screen."),(0,o.kt)("p",null,"With each transaction result you will be able to perform several operations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"View and print the merchant receipt"),(0,o.kt)("li",{parentName:"ul"},"View and print the customer receipt"),(0,o.kt)("li",{parentName:"ul"},"Reverse the transaction"),(0,o.kt)("li",{parentName:"ul"},"Copy the transaction result data, it is the raw JSON transaction result, as received by the application from the payment terminal. ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sandbox logo",src:n(5344).Z,width:"1010",height:"527"})))}m.isMDXComponent=!0},6260:function(e,t,n){t.Z=n.p+"assets/images/cloudpos-1dd12e65b9220c043771880182d1ecff.png"},1849:function(e,t,n){t.Z=n.p+"assets/images/cloudpos2-81ba10174d6fe33b8fbb91df42decb7d.png"},9539:function(e,t,n){t.Z=n.p+"assets/images/cloudpos3-28f448bfc040e6cf11ba7e03a9f6ba39.png"},4190:function(e,t,n){t.Z=n.p+"assets/images/cloudpos4-99a17307c037fdf9ce537df9ea0b7ae9.png"},5344:function(e,t,n){t.Z=n.p+"assets/images/cloudpos5-98886b5a16ad2faeeeebf8dffa1cf62a.png"}}]);