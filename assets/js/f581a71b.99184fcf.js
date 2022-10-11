"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3237],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),l=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=l(a),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(h,o(o({ref:e},p),{},{components:a})):n.createElement(h,o({ref:e},p))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5777:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:1,id:"javascriptintroduction"},o="Introduction",s={unversionedId:"javascriptintroduction",id:"version-JavaScript SDK 6.1.0/javascriptintroduction",title:"Introduction",description:"javascriptIntro}",source:"@site/javascript_versioned_docs/version-JavaScript SDK 6.1.0/javascriptintroduction.md",sourceDirName:".",slug:"/javascriptintroduction",permalink:"/javascript/JavaScript SDK 6.1.0/javascriptintroduction",draft:!1,tags:[],version:"JavaScript SDK 6.1.0",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"javascriptintroduction"},sidebar:"tutorialSidebar",next:{title:"Release Notes",permalink:"/javascript/JavaScript SDK 6.1.0/javascriptreleasenotes"}},c={},l=[{value:"API Overview",id:"api-overview",level:2}],p={toc:l};function d(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"javascriptIntro"},"Introduction"),(0,r.kt)("div",{class:"card-demo",align:"middle"},(0,r.kt)("div",{class:"card card-background"},(0,r.kt)("div",{class:"card__header"},(0,r.kt)("h3",null,"JavaScript SDK")),(0,r.kt)("div",{class:"card__body"},(0,r.kt)("a",{href:"https://hpoint-cr-binaries-prod.s3.amazonaws.com/cloud/sdk/wrappers/js/6.1.0/handpoint-6.1.0.js"},(0,r.kt)("img",{src:"https://handpoint.imgix.net/ballicons/small/cloud.png"}))),(0,r.kt)("div",{class:"card__footer"},(0,r.kt)("a",{class:"button button--primary",href:"https://hpoint-cr-binaries-prod.s3.amazonaws.com/cloud/sdk/wrappers/js/6.1.0/handpoint-6.1.0.js"},"Get the latest JavaScript SDK!")))),(0,r.kt)("br",null),(0,r.kt)("p",null,"Download the Handpoint JavaScript SDK to integrate leading smartpos terminals with your cloud based software. The Handpoint JavaScript SDK is a simple javascript interface running in your web application which acts as a bridge between ",(0,r.kt)("strong",{parentName:"p"},"the web browser and the payment terminal"),", while shielding your software from handling card data. It is seamless to integrate, keeps your software out of PCI scope, and allows you to use the best Android terminals on the market."),(0,r.kt)("p",null,"Complete your integration in just three steps, initialize the interface, choose a terminal and start a sale. It is as simple as it sounds. The only thing you need is a valid API key to communicate with the payment terminal. As part of the initialize step you will get back a list of terminals with which you can connect. Simply execute the financial operation, and within seconds you\u2019ll get back the transaction result and receipt in your software, all while you monitor the transaction status. The Handpoint Javascript SDK seamlessly starts and manages the entire point to point encrypted transaction with the payment terminal, minimizing hassle for you and maximizing reliability, security, and control."),(0,r.kt)("p",null,"For your merchants, the terminal setup is easier than a standalone. A merchant connects the terminal to their network, just like a smartphone, authenticates his/her account, and it simply works. Your software then control the terminal from anywhere in the world, and your merchants have secure, reliable and intuitive payments."),(0,r.kt)("h2",{id:"api-overview"},"API Overview"),(0,r.kt)("p",null,"The following transaction flow shows how easy it is to add card present payments to your web based application. The interaction between your cloud application and the Handpoint Javascript SDK is simple and streamlined. The Handpoint Javascript SDK takes care of the communication with the payment terminal. The status messages are received in your web application via the callback function defined in the financial operation requests call. That\u2019s it."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sandbox logo",src:a(8906).Z,width:"1292",height:"790"})))}d.isMDXComponent=!0},8906:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/jsoverview-0d173a620f42ffb7043652fc40c8570d.png"}}]);