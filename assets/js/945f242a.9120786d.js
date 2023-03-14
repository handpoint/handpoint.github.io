"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1761],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:2,id:"windowsreleasenotes"},i="Release Notes",l={unversionedId:"windowsreleasenotes",id:"version-Windows SDK 3.4.0/windowsreleasenotes",title:"Release Notes",description:"Do not miss any news from Handpoint releases. Subscribe to our Handpoint Newsletter!",source:"@site/windows_versioned_docs/version-Windows SDK 3.4.0/windowsreleasenotes.md",sourceDirName:".",slug:"/windowsreleasenotes",permalink:"/windows/windowsreleasenotes",draft:!1,tags:[],version:"Windows SDK 3.4.0",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"windowsreleasenotes"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/windows/windowsintroduction"},next:{title:"Trigger Amounts",permalink:"/windows/windowsapioverview"}},s={},u=[{value:"3.4.0",id:"340",level:2},{value:"3.3.0",id:"330",level:2},{value:"3.2.6",id:"326",level:2},{value:"3.2.5",id:"325",level:2},{value:"3.2.4",id:"324",level:2},{value:"3.2.3",id:"323",level:2},{value:"3.2.1",id:"321",level:2},{value:"3.2.0",id:"320",level:2},{value:"3.1.7",id:"317",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"release-notes"},"Release Notes"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Do not miss any news from Handpoint releases. ",(0,r.kt)("a",{parentName:"p",href:"https://handpoint.us6.list-manage.com/subscribe?u=4d9dff9e7edb7e57a67a7b252&id=0a2179241e"},"Subscribe")," to our Handpoint Newsletter!")),(0,r.kt)("h2",{id:"340"},"3.4.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Features")),(0,r.kt)("p",null,"We are introducing a new feature called ",(0,r.kt)("a",{parentName:"p",href:"/windows/windowobjects#metadata"},(0,r.kt)("strong",{parentName:"a"},"Transaction Metadata")),". This new feature helps the customer to persist and echo back some data that belongs to the customer business domain at transaction time. The Transaction Metadata is sent in the request and echoed back in the response from the gateway. In addition, customers will be able to use the Transaction Metadata to search matching transactions from our Transaction Feed API.",(0,r.kt)("strong",{parentName:"p"},"*")),(0,r.kt)("p",null,"The Transaction Metadata feature will be available when the Handpoint Payments app ",(0,r.kt)("strong",{parentName:"p"},"v4.1.0")," or higher is used. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"*Please note"),": Transactions will be available in TXN Feed API only if the request has reached the gateway."),(0,r.kt)("h2",{id:"330"},"3.3.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Features:")),(0,r.kt)("p",null,"We are introducing a new feature called duplicate payment check. Looking back at our data we have seen that when a merchant is not 100% sure of the transaction outcome, they will reprocess the transaction leading to the cardholder being charged twice. In order to avoid this scenario, we are now flagging the duplicate transaction and prompting a menu to the cardholder/merchant to confirm/cancel the 2nd charge. This menu will automatically be prompted on the payment terminal if a suspicious charge is detected. We are only prompting the duplicate menu in case the same card is used twice in a row to process a transaction for the same amount within a 5 minutes timeframe. "),(0,r.kt)("p",null,"The duplicate payment check feature will be ",(0,r.kt)("strong",{parentName:"p"},"enabled by default")," when the Handpoint Payments app ",(0,r.kt)("strong",{parentName:"p"},"v4.0.0.")," or higher is used. You do not need to update to v3.3.0 to benefit from this new feature. v3.3.0 will only allow you to disable the duplicate payment check feature if you wish to not support it. "),(0,r.kt)("p",null,"Here is an example showing how to disable the duplicate payment check functionality:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'Dictionary <string, string> options = new Dictionary<string, string>();\noptions.Add(XmlTag.DuplicateCheck.Tag(), "0");\nhapi.Sale(amount, currency, options);\n')),(0,r.kt)("h2",{id:"326"},"3.2.6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cloud dependencies update (NewtonSoft Lib)")),(0,r.kt)("h2",{id:"325"},"3.2.5"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nullpointer Exception on Cloud connect without network connection."),(0,r.kt)("li",{parentName:"ul"},"Cloud dependencies update."),(0,r.kt)("li",{parentName:"ul"},"Connection handling on transitions states: Connecting and Disconnecting."),(0,r.kt)("li",{parentName:"ul"},"Automatic Cloud reconnection handling."),(0,r.kt)("li",{parentName:"ul"},"Unable to manually disconnect during a transaction.")),(0,r.kt)("h2",{id:"324"},"3.2.4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SignatureResult")," method. Signature result is always true no matter what is passed to the method.")),(0,r.kt)("h2",{id:"323"},"3.2.3"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Crash on signature result (DATECS)")),(0,r.kt)("h2",{id:"321"},"3.2.1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Improved SDK reconnection logic in case of network unstability. ")),(0,r.kt)("h2",{id:"320"},"3.2.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CLOUD Features:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mail Order/Telephone Order (MoTo)."),(0,r.kt)("li",{parentName:"ul"},"StopCurrentTransaction operation.")),(0,r.kt)("h2",{id:"317"},"3.1.7"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CLOUD: Improved initial retry mechanism for triggering transactions."),(0,r.kt)("li",{parentName:"ul"},"CLOUD: Increased initial timeout for triggering transactions.")))}c.isMDXComponent=!0}}]);