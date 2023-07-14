"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1819],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},44838:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:2,id:"javascriptreleasenotes"},o="Release Notes",s={unversionedId:"javascriptreleasenotes",id:"version-JavaScript SDK 6.3.0/javascriptreleasenotes",title:"Release Notes",description:"Do not miss any news from Handpoint releases. Subscribe to our Handpoint Newsletter!",source:"@site/javascript_versioned_docs/version-JavaScript SDK 6.3.0/javascriptreleasenotes.md",sourceDirName:".",slug:"/javascriptreleasenotes",permalink:"/javascript/JavaScript SDK 6.3.0/javascriptreleasenotes",draft:!1,tags:[],version:"JavaScript SDK 6.3.0",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"javascriptreleasenotes"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/javascript/JavaScript SDK 6.3.0/javascriptintroduction"},next:{title:"Trigger Amounts",permalink:"/javascript/JavaScript SDK 6.3.0/javascriptprocessingpayments"}},l={},p=[{value:"6.3.0",id:"630",level:2},{value:"6.2.1",id:"621",level:2},{value:"6.2.0",id:"620",level:2},{value:"6.1.0",id:"610",level:2},{value:"6.0.1",id:"601",level:2},{value:"6.0.0",id:"600",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"release-notes"},"Release Notes"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Do not miss any news from Handpoint releases. ",(0,r.kt)("a",{parentName:"p",href:"https://handpoint.us6.list-manage.com/subscribe?u=4d9dff9e7edb7e57a67a7b252&id=0a2179241e"},"Subscribe")," to our Handpoint Newsletter!")),(0,r.kt)("h2",{id:"630"},"6.3.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Features"),":"),(0,r.kt)("p",null,"We are introducing a new feature called ",(0,r.kt)("a",{parentName:"p",href:"/javascript/JavaScript%20SDK%206.3.0/javascriptobjects#metadata"},(0,r.kt)("strong",{parentName:"a"},"Transaction Metadata")),". This new feature helps the customer to persist and echo back some data that belongs to the customer business domain at transaction time. The Transaction Metadata is sent in the request and echoed back in the response from the gateway. In addition, customers will be able to use the Transaction Metadata to search matching transactions from our Transaction Feed API.",(0,r.kt)("strong",{parentName:"p"},"*")),(0,r.kt)("p",null,"The Transaction Metadata feature will be available when the Handpoint Payments app ",(0,r.kt)("strong",{parentName:"p"},"v4.1.0")," or higher is used."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"*Please note"),": Transactions will be available in TXN Feed API only if the request has reached the gateway."),(0,r.kt)("h2",{id:"621"},"6.2.1"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fixes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reconnection management.")),(0,r.kt)("h2",{id:"620"},"6.2.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Features"),":"),(0,r.kt)("p",null,"We are introducing a new feature called duplicate payment check. Looking back at our data we have seen that when a merchant is not 100% sure of the transaction outcome, they will reprocess the transaction leading to the cardholder being charged twice. In order to avoid this scenario, we are now flagging the duplicate transaction and prompting a menu to the cardholder/merchant to confirm/cancel the 2nd charge. This menu will automatically be prompted on the payment terminal if a suspicious charge is detected. We are only prompting the duplicate menu in case the same card is used twice in a row to process a transaction for the same amount within a 5 minutes timeframe. "),(0,r.kt)("p",null,"The duplicate payment check feature will be ",(0,r.kt)("strong",{parentName:"p"},"enabled by default")," when the Handpoint Payments app ",(0,r.kt)("strong",{parentName:"p"},"v4.0.0.")," or higher is used. You do not need to update to v6.2.0 to benefit from this new feature. v6.2.0 will only allow you to disable the duplicate payment check feature if you wish to not support it. "),(0,r.kt)("p",null,"The new ",(0,r.kt)("inlineCode",{parentName:"p"},"duplicate_check")," parameter is available under the ",(0,r.kt)("a",{parentName:"p",href:"/javascript/JavaScript%20SDK%206.3.0/javascriptobjects#23"},"SaleOptions")," and ",(0,r.kt)("a",{parentName:"p",href:"/javascript/JavaScript%20SDK%206.3.0/javascriptobjects#24"},"RefundOptions"),"."),(0,r.kt)("h2",{id:"610"},"6.1.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Features"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mail order/Telephone order (MoTo)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fixes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Duplications on recovered transactions")),(0,r.kt)("h2",{id:"601"},"6.0.1"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Features"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Internal variable handling")),(0,r.kt)("h2",{id:"600"},"6.0.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BREAKING CHANGE:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The recovery function in the init method was added to make sure that ALL transaction results are received by the POS, even in case of an unstable network connection. The recovery function passed as third parameter in the init method MUST return a promise. The resolution of the promise will send a message to the payment terminal acknowledging the reception of the transaction result.")))}u.isMDXComponent=!0}}]);