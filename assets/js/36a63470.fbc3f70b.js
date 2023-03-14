"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7476],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,w=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return n?o.createElement(w,i(i({ref:t},p),{},{components:n})):o.createElement(w,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},16040:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(87462),r=(n(67294),n(3905));const a={sidebar_position:1,id:"windowsintroduction"},i="Introduction",s={unversionedId:"windowsintroduction",id:"version-Windows SDK 3.2.0/windowsintroduction",title:"Introduction",description:"Windows SDK",source:"@site/windows_versioned_docs/version-Windows SDK 3.2.0/windowsintroduction.md",sourceDirName:".",slug:"/windowsintroduction",permalink:"/windows/Windows SDK 3.2.0/windowsintroduction",draft:!1,tags:[],version:"Windows SDK 3.2.0",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"windowsintroduction"},sidebar:"tutorialSidebar",next:{title:"Release Notes",permalink:"/windows/Windows SDK 3.2.0/windowsreleasenotes"}},l={},d=[],p={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("div",{class:"card-demo",align:"middle"},(0,r.kt)("div",{class:"card card-background"},(0,r.kt)("div",{class:"card__header"},(0,r.kt)("h3",null,"Windows SDK"),(0,r.kt)("p",null,"version 3.2.0")),(0,r.kt)("div",{class:"card__body"},(0,r.kt)("a",{href:"https://www.nuget.org/packages/HandpointSDK/"},(0,r.kt)("img",{src:"https://handpoint.imgix.net/ballicons/small/macbook.png"}))),(0,r.kt)("div",{class:"card__footer"},(0,r.kt)("a",{class:"button button--primary",href:"https://www.nuget.org/packages/HandpointSDK/"},"Get the SDK!")))),(0,r.kt)("br",null),(0,r.kt)("p",null,"The new generation of Handpoint APIs and SDKs are engineered to make your life simpler, happier."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Awesomely simple")),(0,r.kt)("p",null,"Created for humans, coders, geeks, no need of dark and complex knowledge of the payment industry."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Superly secure")),(0,r.kt)("p",null,"We take care of the PCI side so you don't have to spend months becoming compliant.\nThe Handpoint card reader encrypts all sensitive cardholder data so your app does not have to deal with it."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Working with the SDK")),(0,r.kt)("p",null,"The Handpoint Windows SDK is compatible with .NET Framework Version 4.6.1."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the SDK."),(0,r.kt)("li",{parentName:"ol"},"Create a new windows form project in Visual Studio 2010 (or above) using .Net Framework Version 4.6.1."),(0,r.kt)("li",{parentName:"ol"},"Add the ",(0,r.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/HandpointSDK/"},"HandpointSDK NuGet Package")," to your project.\nIf you have a DEBUG device ",(0,r.kt)("a",{parentName:"li",href:"https://handpoint.atlassian.net/wiki/spaces/PD/pages/1578401793/How+to+Identify+Between+Development+and+Production+Terminals"},"(How to identify DEBUG devices)")," please use the package version -beta (prerelease): Example 3.0.0-beta"),(0,r.kt)("li",{parentName:"ol"},"Follow the getting started guide, to get you up and running or dive into the documentation.")),(0,r.kt)("p",null,"If you have any questions, do not hesitate to ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@handpoint.com"},"contact us"),"."))}c.isMDXComponent=!0}}]);