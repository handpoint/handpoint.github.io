"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9132],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1705:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2,id:"restreleasenotes"},i="Release Notes",s={unversionedId:"restreleasenotes",id:"version-REST API 2.12.0/restreleasenotes",title:"Release Notes",description:"Do not miss any news from Handpoint releases. Subscribe to our Handpoint Newsletter!",source:"@site/restapi_versioned_docs/version-REST API 2.12.0/restreleasenotes.md",sourceDirName:".",slug:"/restreleasenotes",permalink:"/restapi/restreleasenotes",draft:!1,tags:[],version:"REST API 2.12.0",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"restreleasenotes"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/restapi/restintroduction"},next:{title:"Trigger Amounts",permalink:"/restapi/restprocessingpayments"}},l={},p=[{value:"2.12.0",id:"2120",level:2},{value:"2.10.0",id:"2100",level:2},{value:"2.7.1",id:"271",level:2},{value:"2.7.0",id:"270",level:2},{value:"2.6.0",id:"260",level:2},{value:"2.4.0",id:"240",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"release-notes"},"Release Notes"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Do not miss any news from Handpoint releases. ",(0,a.kt)("a",{parentName:"p",href:"https://handpoint.us6.list-manage.com/subscribe?u=4d9dff9e7edb7e57a67a7b252&id=0a2179241e"},"Subscribe")," to our Handpoint Newsletter!")),(0,a.kt)("h2",{id:"2120"},"2.12.0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Features:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"New endpoint ",(0,a.kt)("a",{parentName:"li",href:"/restapi/restendpoints#transactionsguidtip-adjustment"},"Tip-Adjustment"),". ")),(0,a.kt)("p",null,"A tip adjustment operation allows merchants to adjust the tip amount of a sale transaction before the batch of transactions is settled by the processor at the end of the day."),(0,a.kt)("h2",{id:"2100"},"2.10.0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Features:")),(0,a.kt)("p",null,"We are introducing a new feature called duplicate payment check. Looking back at our data we have seen that when a merchant is not 100% sure of the transaction outcome, they will reprocess the transaction leading to the cardholder being charged twice. In order to avoid this scenario, we are now flagging the duplicate transaction and prompting a menu to the cardholder/merchant to confirm/cancel the 2nd charge. This menu will automatically be prompted on the payment terminal if a suspicious charge is detected. We are only prompting the duplicate menu in case the same card is used twice in a row to process a transaction for the same amount within a 5 minutes timeframe."),(0,a.kt)("p",null,"The duplicate payment check feature will be ",(0,a.kt)("strong",{parentName:"p"},"enabled by default")," when the Handpoint Payments app ",(0,a.kt)("strong",{parentName:"p"},"v4.0.0.")," or higher is used. V2.10.0 of the REST API only allows you to disable the duplicate payment check feature if you wish to not support it."),(0,a.kt)("p",null,"The new ",(0,a.kt)("inlineCode",{parentName:"p"},"duplicate_check")," parameter is available under the ",(0,a.kt)("a",{parentName:"p",href:"/restapi/restobjects#transactionRequest"},"Transaction Request Object"),". "),(0,a.kt)("h2",{id:"271"},"2.7.1"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Features:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"New endpoint to create, get and delete API keys for Merchants")),(0,a.kt)("h2",{id:"270"},"2.7.0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Features:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mail/Telephone Order functionality"),(0,a.kt)("li",{parentName:"ul"},"Retry logic for transaction triggering")),(0,a.kt)("h2",{id:"260"},"2.6.0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Features:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Endpoints for virtual terminals")),(0,a.kt)("h2",{id:"240"},"2.4.0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Features:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Transaction result retrieval through API endpoint GET .../transaction-result/{transactionResultId}")))}c.isMDXComponent=!0}}]);