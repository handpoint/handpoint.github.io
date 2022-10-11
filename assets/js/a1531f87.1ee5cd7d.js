"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5952],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(f,i(i({ref:t},l),{},{components:r})):a.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3786:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:3,id:"javascriptprocessingpayments"},i="Trigger Amounts",s={unversionedId:"javascriptprocessingpayments",id:"version-JavaScript SDK 6.1.0/javascriptprocessingpayments",title:"Trigger Amounts",description:"Your test payments are sent against a test server on the Handpoint side which simulates the behavior of an acquiring bank. Funds are not moved and sensitive data from the card is fully encrypted. You can use trigger amounts to generate some specific responses from our servers:",source:"@site/javascript_versioned_docs/version-JavaScript SDK 6.1.0/javascriptprocessingpayments.md",sourceDirName:".",slug:"/javascriptprocessingpayments",permalink:"/javascript/JavaScript SDK 6.1.0/javascriptprocessingpayments",draft:!1,tags:[],version:"JavaScript SDK 6.1.0",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"javascriptprocessingpayments"},sidebar:"tutorialSidebar",previous:{title:"Release Notes",permalink:"/javascript/JavaScript SDK 6.1.0/javascriptreleasenotes"},next:{title:"Integration Guide",permalink:"/javascript/JavaScript SDK 6.1.0/javascriptquickintegration"}},p={},c=[],l={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"trigger-amounts"},"Trigger Amounts"),(0,n.kt)("p",null,"Your test payments are sent against a test server on the Handpoint side which simulates the behavior of an acquiring bank. Funds are not moved and sensitive data from the card is fully encrypted. You can use trigger amounts to generate some specific responses from our servers:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Sale amounts")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Amount"),(0,n.kt)("th",{parentName:"tr",align:null},"Behaviour"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"37.79"),(0,n.kt)("td",{parentName:"tr",align:null},"Issuer response code = 01 (Refer to issuer)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"37.84"),(0,n.kt)("td",{parentName:"tr",align:null},"Issuer response code = 05 (Not authorized)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"37.93"),(0,n.kt)("td",{parentName:"tr",align:null},"Issuer response code = 04 (Pick up card)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"37.57"),(0,n.kt)("td",{parentName:"tr",align:null},"Request is partially approved")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"37.68"),(0,n.kt)("td",{parentName:"tr",align:null},"Request timeout")))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Supporting partial approval is ",(0,n.kt)("strong",{parentName:"p"},"mandatory")," for the US market. Partial authorization occurs when a payment card authorization is attempted for a transaction and there are not enough funds available in the account to cover the full amount. The issuer returns an authorization for the amount available in the account, leaving you to obtain an additional form of payment from the customer for the balance.")))}u.isMDXComponent=!0}}]);