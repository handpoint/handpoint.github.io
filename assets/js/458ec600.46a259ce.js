"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1547],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:2,id:"windowsreleasenotes"},i="Release Notes",s={unversionedId:"windowsreleasenotes",id:"version-Windows SDK 4.0.0/windowsreleasenotes",title:"Release Notes",description:"Do not miss any news from Handpoint releases. Subscribe to our Handpoint Newsletter!",source:"@site/windows_versioned_docs/version-Windows SDK 4.0.0/windowsreleasenotes.md",sourceDirName:".",slug:"/windowsreleasenotes",permalink:"/windows/windowsreleasenotes",draft:!1,tags:[],version:"Windows SDK 4.0.0",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"windowsreleasenotes"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/windows/windowsintroduction"},next:{title:"Trigger Amounts",permalink:"/windows/windowsapioverview"}},l={},u=[{value:"4.0.0",id:"400",level:2},{value:"3.4.0",id:"340",level:2},{value:"3.3.0",id:"330",level:2},{value:"3.2.6",id:"326",level:2},{value:"3.2.5",id:"325",level:2},{value:"3.2.4",id:"324",level:2},{value:"3.2.3",id:"323",level:2},{value:"3.2.1",id:"321",level:2},{value:"3.2.0",id:"320",level:2},{value:"3.1.7",id:"317",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"release-notes"},"Release Notes"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Do not miss any news from Handpoint releases. ",(0,r.kt)("a",{parentName:"p",href:"https://handpoint.us6.list-manage.com/subscribe?u=4d9dff9e7edb7e57a67a7b252&id=0a2179241e"},"Subscribe")," to our Handpoint Newsletter!")),(0,r.kt)("h2",{id:"400"},"4.0.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BREAKING CHANGE:")),(0,r.kt)("p",null,"We are introducing a new feature called ",(0,r.kt)("a",{parentName:"p",href:"/windows/windowsdevicemanagement#get-transaction-status"},"Get Transaction Status"),". This new feature allows you to query the Handpoint Gateway for the status of a transaction at any given time. For example, in case of an app crash, timeout, or connection problem, you are now able to use the ",(0,r.kt)("a",{parentName:"p",href:"/windows/windowobjects#OperationStartResult"},"transaction reference")," returned at the start of a financial operation to get the status of a transaction in real time. You can use this feature to track the progress of your payments and troubleshoot any issues that may arise. This feature is available for all payment methods and currencies. "),(0,r.kt)("p",null,"All financial operations will now be returning an ",(0,r.kt)("a",{parentName:"p",href:"/windows/windowobjects#OperationStartResult"},"OperationStartResult")," object instead of a boolean to indicate that the operation was successfully sent to the payment terminal:\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"transactionReference")," field is a unique identifier for the transaction that you will receive immediately after sending the transaction request to the terminal. If for any reason you do not receive the ",(0,r.kt)("a",{parentName:"p",href:"/windows/windowobjects#14"},"TransactionResult")," object at the end of the transaction you will now be able to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"transactionReference")," to directly query our Gateway and know instantly if the transaction for which you do not know the outcome was approved or declined."),(0,r.kt)("h2",{id:"340"},"3.4.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Features")),(0,r.kt)("p",null,"We are introducing a new feature called ",(0,r.kt)("a",{parentName:"p",href:"/windows/windowobjects#metadata"},"Transaction Metadata"),". This new feature helps the customer to persist and echo back some data that belongs to the customer business domain at transaction time. The Transaction Metadata is sent in the request and echoed back in the response from the gateway. In addition, customers will be able to use the Transaction Metadata to search matching transactions from our Transaction Feed API.",(0,r.kt)("strong",{parentName:"p"},"*")),(0,r.kt)("p",null,"The Transaction Metadata feature will be available when the Handpoint Payments app ",(0,r.kt)("strong",{parentName:"p"},"v4.1.0")," or higher is used. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"*Please note"),": Transactions will be available in TXN Feed API only if the request has reached the gateway."),(0,r.kt)("h2",{id:"330"},"3.3.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Features:")),(0,r.kt)("p",null,"We are introducing a new feature called duplicate payment check. Looking back at our data we have seen that when a merchant is not 100% sure of the transaction outcome, they will reprocess the transaction leading to the cardholder being charged twice. In order to avoid this scenario, we are now flagging the duplicate transaction and prompting a menu to the cardholder/merchant to confirm/cancel the 2nd charge. This menu will automatically be prompted on the payment terminal if a suspicious charge is detected. We are only prompting the duplicate menu in case the same card is used twice in a row to process a transaction for the same amount within a 5 minutes timeframe. "),(0,r.kt)("p",null,"The duplicate payment check feature will be ",(0,r.kt)("strong",{parentName:"p"},"enabled by default")," when the Handpoint Payments app ",(0,r.kt)("strong",{parentName:"p"},"v4.0.0.")," or higher is used. You do not need to update to v3.3.0 to benefit from this new feature. v3.3.0 will only allow you to disable the duplicate payment check feature if you wish to not support it. "),(0,r.kt)("p",null,"Here is an example showing how to disable the duplicate payment check functionality:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'Dictionary <string, string> options = new Dictionary<string, string>();\noptions.Add(XmlTag.DuplicateCheck.Tag(), "0");\nhapi.Sale(amount, currency, options);\n')),(0,r.kt)("h2",{id:"326"},"3.2.6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cloud dependencies update (NewtonSoft Lib)")),(0,r.kt)("h2",{id:"325"},"3.2.5"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nullpointer Exception on Cloud connect without network connection."),(0,r.kt)("li",{parentName:"ul"},"Cloud dependencies update."),(0,r.kt)("li",{parentName:"ul"},"Connection handling on transitions states: Connecting and Disconnecting."),(0,r.kt)("li",{parentName:"ul"},"Automatic Cloud reconnection handling."),(0,r.kt)("li",{parentName:"ul"},"Unable to manually disconnect during a transaction.")),(0,r.kt)("h2",{id:"324"},"3.2.4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SignatureResult")," method. Signature result is always true no matter what is passed to the method.")),(0,r.kt)("h2",{id:"323"},"3.2.3"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Crash on signature result (DATECS)")),(0,r.kt)("h2",{id:"321"},"3.2.1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Improved SDK reconnection logic in case of network unstability. ")),(0,r.kt)("h2",{id:"320"},"3.2.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CLOUD Features:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mail Order/Telephone Order (MoTo)."),(0,r.kt)("li",{parentName:"ul"},"StopCurrentTransaction operation.")),(0,r.kt)("h2",{id:"317"},"3.1.7"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CLOUD: Improved initial retry mechanism for triggering transactions."),(0,r.kt)("li",{parentName:"ul"},"CLOUD: Increased initial timeout for triggering transactions.")))}p.isMDXComponent=!0}}]);