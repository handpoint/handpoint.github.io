"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1740],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),c=a,b=m["".concat(o,".").concat(c)]||m[c]||u[c]||l;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6197:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:7,id:"androideventsubscribers"},i="Events Subscribers",s={unversionedId:"androideventsubscribers",id:"version-Android SDK 6.7.4/androideventsubscribers",title:"Events Subscribers",description:"Register events delegate",source:"@site/android_versioned_docs/version-Android SDK 6.7.4/androideventsubscribers.md",sourceDirName:".",slug:"/androideventsubscribers",permalink:"/android/androideventsubscribers",draft:!1,tags:[],version:"Android SDK 6.7.4",sidebarPosition:7,frontMatter:{sidebar_position:7,id:"androideventsubscribers"},sidebar:"tutorialSidebar",previous:{title:"Terminal Management",permalink:"/android/androiddevicemanagement"},next:{title:"Events Listeners",permalink:"/android/androideventlisteners"}},o={},d=[{value:"Register events delegate",id:"register-events-delegate",level:2},{value:"Unregister events delegate",id:"unregister-events-delegate",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"events-subscribers"},"Events Subscribers"),(0,a.kt)("h2",{id:"register-events-delegate"},"Register events delegate"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"registerEventsDelegate")," ",(0,a.kt)("span",{class:"badge badge--info"},"Method")),(0,a.kt)("p",null,"Registers a delegate for the SDK events."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"listener")," ",(0,a.kt)("span",{class:"badge badge--primary"},"Required")," ",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Object")),(0,a.kt)("td",{parentName:"tr",align:null},"Any object implementing one or more of the available delegate interfaces.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class ObjectHelper implements Events.Required, Events.Status, Events.Log, Events.PendingResults, Events.TransactionStarted {\n    ...\n    private void setEventsHandler() {\n        // Register this class as listener for events\n        this.api.registerEventsDelegate(this);\n        ...\n    }\n\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"True")," if the new delegate was added successfully.")))),(0,a.kt)("h2",{id:"unregister-events-delegate"},"Unregister events delegate"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"unregisterEventsDelegate")," ",(0,a.kt)("span",{class:"badge badge--info"},"Method")),(0,a.kt)("p",null,"Unregisters an object from SDK events."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"listener")," ",(0,a.kt)("span",{class:"badge badge--primary"},"Required")," ",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Object")),(0,a.kt)("td",{parentName:"tr",align:null},"Any object implementing one or more of the available delegate interfaces.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class ObjectHelper implements Events.Required, Events.Status, Events.Log, Events.PendingResults, Events.TransactionStarted {\n    ...\n    private void unsubscribeEventsDelegate() {\n    // Stop receiving events\n    this.api.unregisterEventsDelegate(this);\n    ...\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"True")," if the new delegate was removed successfully.")))))}u.isMDXComponent=!0}}]);