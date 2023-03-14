"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2732],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,y=m["".concat(p,".").concat(d)]||m[d]||l[d]||o;return n?r.createElement(y,s(s({ref:t},u),{},{components:n})):r.createElement(y,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74421:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:4,id:"expresscustomurl"},s="Custom URL",i={unversionedId:"expresscustomurl",id:"version-Express SDK 1.3/expresscustomurl",title:"Custom URL",description:"To initiate an Express client transaction from your application, you have to open a URL with the following format//express/v1/?data=",source:"@site/express_versioned_docs/version-Express SDK 1.3/expresscustomurl.md",sourceDirName:".",slug:"/expresscustomurl",permalink:"/express/expresscustomurl",draft:!1,tags:[],version:"Express SDK 1.3",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"expresscustomurl"},sidebar:"version-Express SDK 1.3/tutorialSidebar",previous:{title:"Express Sandbox",permalink:"/express/expresssandbox"},next:{title:"Json Request",permalink:"/express/expressjsonrequest"}},p={},c=[],u={toc:c};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-url"},"Custom URL"),(0,a.kt)("p",null,"To initiate an Express client transaction from your application, you have to open a URL with the following format: ",(0,a.kt)("inlineCode",{parentName:"p"},"handpoint://express/v1/?data=<url_encoded_data>")," "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For web apps, you can open this URL just as you would any other URL on a webpage."),(0,a.kt)("li",{parentName:"ul"},"For native iOS apps, you use the openURL: method of UIApplication.\nThe query parameter in the URL, data, is a percent-encoded JSON object that contains information the Express client needs to process the transaction request.")),(0,a.kt)("p",null,"For example, a valid unencoded JSON object looks like this (replace CLIENT_ID with your application's ID, and SHARED_SECRET_KEY with the device activation key you received from the Handpoint support team): If you're opening this URL from a native app, you can use your own app custom scheme as a callback: ",(0,a.kt)("inlineCode",{parentName:"p"},'"myapp-url-scheme://payment-complete"')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "action": {\n        "type": "sale",\n        "parameters": {\n            "amount": 1500,\n            "currency": "USD"\n        },\n        "extraParameters": {\n            "your custom field" : "custom value"\n        }\n    },\n    "client": {\n        "clientId": "CLIENT_ID",\n        "ssk": "SHARED_SECRET_KEY",\n        "autoReturn": true,\n        "autoReturnTimeout": 0\n    },\n    "callbackUrl": "http://yourbackend.com/payment-result"\n}\n')),(0,a.kt)("p",null,"If you're developing a web application, this Javascript sample demonstrates encoding a Register API URL and directing the merchant's browser to open it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<script>\nvar dataParameter = {\n    "action": {\n        "type": "sale",\n        "parameters": {\n            "amount": 1500,\n            "currency": "USD"\n        },\n        "extraParameters": {\n            "your custom field" : "custom value"\n        }\n    },\n    "client": {\n        "clientId": "CLIENT_ID",\n        "ssk": "SHARED_SECRET_KEY",\n        "autoReturn": true,\n        "autoReturnTimeout": 0\n    },\n    "callbackUrl": "http://yourbackend.com/payment-result"\n};\nwindow.location = "handpoint://express/v1/?data=" + encodeURIComponent(JSON.stringify(dataParameter));\n<\/script>\n')))}l.isMDXComponent=!0}}]);