"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1418],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),l=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:e},p),{},{components:n})):a.createElement(h,o({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50427:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:1,id:"javascriptintroduction"},o="Introduction",s={unversionedId:"javascriptintroduction",id:"version-JavaScript SDK 6.3.0/javascriptintroduction",title:"Introduction",description:"javascriptIntro}",source:"@site/javascript_versioned_docs/version-JavaScript SDK 6.3.0/javascriptintroduction.md",sourceDirName:".",slug:"/javascriptintroduction",permalink:"/javascript/javascriptintroduction",draft:!1,tags:[],version:"JavaScript SDK 6.3.0",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"javascriptintroduction"},sidebar:"tutorialSidebar",next:{title:"Release Notes",permalink:"/javascript/javascriptreleasenotes"}},c={},l=[{value:"API Overview",id:"api-overview",level:2}],p={toc:l};function d(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"javascriptIntro"},"Introduction"),(0,r.kt)("div",{class:"card-demo",align:"middle"},(0,r.kt)("div",{class:"card card-background"},(0,r.kt)("div",{class:"card__header"},(0,r.kt)("h3",null,"JavaScript SDK")),(0,r.kt)("div",{class:"card__body"},(0,r.kt)("a",{href:"https://hpoint-cr-binaries-prod.s3.amazonaws.com/cloud/sdk/wrappers/js/6.3.0/handpoint-6.3.0.js"},(0,r.kt)("img",{src:"https://handpoint.imgix.net/ballicons/small/cloud.png"}))),(0,r.kt)("div",{class:"card__footer"},(0,r.kt)("a",{class:"button button--primary",href:"https://hpoint-cr-binaries-prod.s3.amazonaws.com/cloud/sdk/wrappers/js/6.3.0/handpoint-6.3.0.js"},"Get the latest JavaScript SDK!")))),(0,r.kt)("br",null),(0,r.kt)("p",null,"Download the Handpoint JavaScript SDK to integrate leading smartpos terminals with your cloud based software. The Handpoint JavaScript SDK is a simple javascript interface running in your web application which acts as a bridge between ",(0,r.kt)("strong",{parentName:"p"},"the web browser and the payment terminal"),", while shielding your software from handling card data. It is seamless to integrate, keeps your software out of PCI scope, and allows you to use the best Android terminals on the market."),(0,r.kt)("p",null,"Complete your integration in just three steps, initialize the interface, choose a terminal and start a sale. It is as simple as it sounds. The only thing you need is a valid API key to communicate with the payment terminal. As part of the initialize step you will get back a list of terminals with which you can connect. Simply execute the financial operation, and within seconds you\u2019ll get back the transaction result and receipt in your software, all while you monitor the transaction status. The Handpoint Javascript SDK seamlessly starts and manages the entire point to point encrypted transaction with the payment terminal, minimizing hassle for you and maximizing reliability, security, and control."),(0,r.kt)("p",null,"For your merchants, the terminal setup is easier than a standalone. A merchant connects the terminal to their network, just like a smartphone, authenticates his/her account, and it simply works. Your software then control the terminal from anywhere in the world, and your merchants have secure, reliable and intuitive payments."),(0,r.kt)("h2",{id:"api-overview"},"API Overview"),(0,r.kt)("p",null,"The following transaction flow shows how easy it is to add card present payments to your web based application. The interaction between your cloud application and the Handpoint Javascript SDK is simple and streamlined. The Handpoint Javascript SDK takes care of the communication with the payment terminal. The status messages are received in your web application via the callback function defined in the financial operation requests call. That\u2019s it."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sandbox logo",src:n(28906).Z,width:"1292",height:"790"})))}d.isMDXComponent=!0},28906:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/jsoverview-0d173a620f42ffb7043652fc40c8570d.png"}}]);