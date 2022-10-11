"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4413],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,w=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(w,o(o({ref:t},p),{},{components:n})):r.createElement(w,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2,id:"windowsreleasenotes"},o="Release Notes",l={unversionedId:"windowsreleasenotes",id:"version-Windows SDK 3.3.0/windowsreleasenotes",title:"Release Notes",description:"Do not miss any news from Handpoint releases. Subscribe to our Handpoint Newsletter!",source:"@site/windows_versioned_docs/version-Windows SDK 3.3.0/windowsreleasenotes.md",sourceDirName:".",slug:"/windowsreleasenotes",permalink:"/windows/windowsreleasenotes",draft:!1,tags:[],version:"Windows SDK 3.3.0",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"windowsreleasenotes"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/windows/windowsintroduction"},next:{title:"Trigger Amounts",permalink:"/windows/windowsapioverview"}},s={},u=[{value:"3.3.0",id:"330",level:2},{value:"3.2.6",id:"326",level:2},{value:"3.2.5",id:"325",level:2},{value:"3.2.4",id:"324",level:2},{value:"3.2.3",id:"323",level:2},{value:"3.2.1",id:"321",level:2},{value:"3.2.0",id:"320",level:2},{value:"3.1.7",id:"317",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"release-notes"},"Release Notes"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Do not miss any news from Handpoint releases. ",(0,a.kt)("a",{parentName:"p",href:"https://handpoint.us6.list-manage.com/subscribe?u=4d9dff9e7edb7e57a67a7b252&id=0a2179241e"},"Subscribe")," to our Handpoint Newsletter!")),(0,a.kt)("h2",{id:"330"},"3.3.0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Features:")),(0,a.kt)("p",null,"We are introducing a new feature called duplicate payment check. Looking back at our data we have seen that when a merchant is not 100% sure of the transaction outcome, they will reprocess the transaction leading to the cardholder being charged twice. In order to avoid this scenario, we are now flagging the duplicate transaction and prompting a menu to the cardholder/merchant to confirm/cancel the 2nd charge. This menu will automatically be prompted on the payment terminal if a suspicious charge is detected. We are only prompting the duplicate menu in case the same card is used twice in a row to process a transaction for the same amount within a 5 minutes timeframe. "),(0,a.kt)("p",null,"The duplicate payment check feature will be ",(0,a.kt)("strong",{parentName:"p"},"enabled by default")," when the Handpoint Payments app ",(0,a.kt)("strong",{parentName:"p"},"v4.0.0.")," or higher is used. You do not need to update to v3.3.0 to benefit from this new feature. v3.3.0 will only allow you to disable the duplicate payment check feature if you wish to not support it. "),(0,a.kt)("p",null,"Here is an example showing how to disable the duplicate payment check functionality:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'Dictionary <string, string> options = new Dictionary<string, string>();\noptions.Add(XmlTag.DuplicateCheck.Tag(), "0");\nhapi.Sale(amount, currency, options);\n')),(0,a.kt)("h2",{id:"326"},"3.2.6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cloud dependencies update (NewtonSoft Lib)")),(0,a.kt)("h2",{id:"325"},"3.2.5"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Fixes:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Nullpointer Exception on Cloud connect without network connection."),(0,a.kt)("li",{parentName:"ul"},"Cloud dependencies update."),(0,a.kt)("li",{parentName:"ul"},"Connection handling on transitions states: Connecting and Disconnecting."),(0,a.kt)("li",{parentName:"ul"},"Automatic Cloud reconnection handling."),(0,a.kt)("li",{parentName:"ul"},"Unable to manually disconnect during a transaction.")),(0,a.kt)("h2",{id:"324"},"3.2.4"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Fixes:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SignatureResult")," method. Signature result is always true no matter what is passed to the method.")),(0,a.kt)("h2",{id:"323"},"3.2.3"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Fixes:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Crash on signature result (DATECS)")),(0,a.kt)("h2",{id:"321"},"3.2.1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Improved SDK reconnection logic in case of network unstability. ")),(0,a.kt)("h2",{id:"320"},"3.2.0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"CLOUD Features:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mail Order/Telephone Order (MoTo)."),(0,a.kt)("li",{parentName:"ul"},"StopCurrentTransaction operation.")),(0,a.kt)("h2",{id:"317"},"3.1.7"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Fixes:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CLOUD: Improved initial retry mechanism for triggering transactions."),(0,a.kt)("li",{parentName:"ul"},"CLOUD: Increased initial timeout for triggering transactions.")))}c.isMDXComponent=!0}}]);