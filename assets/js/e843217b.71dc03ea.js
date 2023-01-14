"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[64],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8196:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2,id:"restreleasenotes"},i="Release Notes",s={unversionedId:"restreleasenotes",id:"version-REST API 2.10.0/restreleasenotes",title:"Release Notes",description:"Do not miss any news from Handpoint releases. Subscribe to our Handpoint Newsletter!",source:"@site/restapi_versioned_docs/version-REST API 2.10.0/restreleasenotes.md",sourceDirName:".",slug:"/restreleasenotes",permalink:"/restapi/REST API 2.10.0/restreleasenotes",draft:!1,tags:[],version:"REST API 2.10.0",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"restreleasenotes"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/restapi/REST API 2.10.0/restintroduction"},next:{title:"Trigger Amounts",permalink:"/restapi/REST API 2.10.0/restprocessingpayments"}},l={},p=[{value:"2.10.0",id:"2100",level:2},{value:"2.7.1",id:"271",level:2},{value:"2.7.0",id:"270",level:2},{value:"2.6.0",id:"260",level:2},{value:"2.4.0",id:"240",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"release-notes"},"Release Notes"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Do not miss any news from Handpoint releases. ",(0,a.kt)("a",{parentName:"p",href:"https://handpoint.us6.list-manage.com/subscribe?u=4d9dff9e7edb7e57a67a7b252&id=0a2179241e"},"Subscribe")," to our Handpoint Newsletter!")),(0,a.kt)("h2",{id:"2100"},"2.10.0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Features:")),(0,a.kt)("p",null,"We are introducing a new feature called duplicate payment check. Looking back at our data we have seen that when a merchant is not 100% sure of the transaction outcome, they will reprocess the transaction leading to the cardholder being charged twice. In order to avoid this scenario, we are now flagging the duplicate transaction and prompting a menu to the cardholder/merchant to confirm/cancel the 2nd charge. This menu will automatically be prompted on the payment terminal if a suspicious charge is detected. We are only prompting the duplicate menu in case the same card is used twice in a row to process a transaction for the same amount within a 5 minutes timeframe."),(0,a.kt)("p",null,"The duplicate payment check feature will be ",(0,a.kt)("strong",{parentName:"p"},"enabled by default")," when the Handpoint Payments app ",(0,a.kt)("strong",{parentName:"p"},"v4.0.0.")," or higher is used. V2.10.0 of the REST API only allows you to disable the duplicate payment check feature if you wish to not support it."),(0,a.kt)("p",null,"The new ",(0,a.kt)("inlineCode",{parentName:"p"},"duplicate_check")," parameter is available under the ",(0,a.kt)("a",{parentName:"p",href:"/restapi/REST%20API%202.10.0/restobjects#transactionRequest"},"Transaction Request Object"),". "),(0,a.kt)("h2",{id:"271"},"2.7.1"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Features:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"New endpoint to create, get and delete API keys for Merchants")),(0,a.kt)("h2",{id:"270"},"2.7.0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Features:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mail/Telephone Order functionality"),(0,a.kt)("li",{parentName:"ul"},"Retry logic for transaction triggering")),(0,a.kt)("h2",{id:"260"},"2.6.0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Features:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Endpoints for virtual terminals")),(0,a.kt)("h2",{id:"240"},"2.4.0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Features:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Transaction result retrieval through API endpoint GET .../transaction-result/{transactionResultId}")))}u.isMDXComponent=!0}}]);