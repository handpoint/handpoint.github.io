"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2956],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(r),m=a,f=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},33374:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:4,id:"androidapioverview"},i="Trigger Amounts",s={unversionedId:"androidapioverview",id:"version-Android SDK 7.0.1/androidapioverview",title:"Trigger Amounts",description:"Your test payments are sent against a test server on the Handpoint side which simulates the behavior of an acquiring bank. Funds are not moved and sensitive data from the card is fully encrypted. You can use trigger amounts to generate some specific responses from our servers:",source:"@site/android_versioned_docs/version-Android SDK 7.0.1/androidapioverview.md",sourceDirName:".",slug:"/androidapioverview",permalink:"/android/Android SDK 7.0.1/androidapioverview",draft:!1,tags:[],version:"Android SDK 7.0.1",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"androidapioverview"},sidebar:"tutorialSidebar",previous:{title:"Migration from 6.X to 7.X",permalink:"/android/Android SDK 7.0.1/androidmigrationguide"},next:{title:"Integration Guides",permalink:"/android/Android SDK 7.0.1/androidintegrationguide"}},d={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"trigger-amounts"},"Trigger Amounts"),(0,a.kt)("p",null,"Your test payments are sent against a test server on the Handpoint side which simulates the behavior of an acquiring bank. Funds are not moved and sensitive data from the card is fully encrypted. You can use trigger amounts to generate some specific responses from our servers:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Sale amounts")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Amount"),(0,a.kt)("th",{parentName:"tr",align:null},"Behaviour"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"37.79"),(0,a.kt)("td",{parentName:"tr",align:null},"Issuer response code = 01 (Refer to issuer)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"37.84"),(0,a.kt)("td",{parentName:"tr",align:null},"Issuer response code = 05 (Not authorized)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"37.93"),(0,a.kt)("td",{parentName:"tr",align:null},"Issuer response code = 04 (Pick up card)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"37.57"),(0,a.kt)("td",{parentName:"tr",align:null},"Request is partially approved")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"37.68"),(0,a.kt)("td",{parentName:"tr",align:null},"Request timeout")))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Supporting partial approval is ",(0,a.kt)("strong",{parentName:"p"},"mandatory")," for the US market. Partial authorization occurs when a payment card authorization is attempted for a transaction and there are not enough funds available in the account to cover the full amount. The issuer returns an authorization for the amount available in the account, leaving you to obtain an additional form of payment from the customer for the balance.")))}u.isMDXComponent=!0}}]);