"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9202],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,b=m["".concat(o,".").concat(c)]||m[c]||u[c]||s;return n?r.createElement(b,l(l({ref:t},d),{},{components:n})):r.createElement(b,l({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<s;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15411:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const s={sidebar_position:7,id:"windowseventssubscribers"},l="Events Subscribers",i={unversionedId:"windowseventssubscribers",id:"version-Windows SDK 3.2.5/windowseventssubscribers",title:"Events Subscribers",description:"Register events delegate",source:"@site/windows_versioned_docs/version-Windows SDK 3.2.5/windowseventsubscribers.md",sourceDirName:".",slug:"/windowseventssubscribers",permalink:"/windows/Windows SDK 3.2.5/windowseventssubscribers",draft:!1,tags:[],version:"Windows SDK 3.2.5",sidebarPosition:7,frontMatter:{sidebar_position:7,id:"windowseventssubscribers"},sidebar:"tutorialSidebar",previous:{title:"Terminal Management",permalink:"/windows/Windows SDK 3.2.5/windowsdevicemanagement"},next:{title:"Events Listeners",permalink:"/windows/Windows SDK 3.2.5/windowsevents"}},o={},p=[{value:"Register events delegate",id:"register-events-delegate",level:2},{value:"Parameters",id:"parameters",level:5},{value:"Unregister events delegate",id:"unregister-events-delegate",level:2},{value:"Parameters",id:"parameters-1",level:4}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"events-subscribers"},"Events Subscribers"),(0,a.kt)("h2",{id:"register-events-delegate"},"Register events delegate"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"RegisterEventsDelegate")," ",(0,a.kt)("span",{class:"badge badge--info"},"Method")),(0,a.kt)("p",null,"Registers a delegate for the SDK events. The method getAsyncInterface in HapiFactory executes internally this subscription."),(0,a.kt)("h5",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"listener")," ",(0,a.kt)("span",{class:"badge badge--primary"},"Required"),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Object")),(0,a.kt)("td",{parentName:"tr",align:null},"Any Object implementing one or more of the available delegate interfaces")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public class ObjectHelper : Events.Required, Events.Status, Events.Log {\n    ...\n    private void RegisterEventHandler() {\n        // Register this class as listener for events \n        this.api.RegisterEventsDelegate(this);\n        ...\n    }\n\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"True")," if the new delegate was added successfully.")))),(0,a.kt)("h2",{id:"unregister-events-delegate"},"Unregister events delegate"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"UnregisterEventsDelegate")," ",(0,a.kt)("span",{class:"badge badge--info"},"Method")),(0,a.kt)("p",null,"Unregisters an object from SDK events."),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"listener")," ",(0,a.kt)("span",{class:"badge badge--primary"},"Required"),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Object")),(0,a.kt)("td",{parentName:"tr",align:null},"Any Object implementing one or more of the available delegate interfaces")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public class ObjectHelper : Events.Required, Events.Status, Events.Log {\n    ...\n    private void Unsubscribe() {\n    // Stop receiving events\n    this.api.UnregisterEventsDelegate(this);\n    ...\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"True")," if the new delegate was removedded successfully.")))))}u.isMDXComponent=!0}}]);