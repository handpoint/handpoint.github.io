"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[425],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(a),c=r,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},72199:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={sidebar_position:2,id:"androidreleasenotes"},i="Release Notes",o={unversionedId:"androidreleasenotes",id:"version-Android SDK 6.7.2/androidreleasenotes",title:"Release Notes",description:"Do not miss any news from Handpoint releases. Subscribe to our Handpoint Newsletter!",source:"@site/android_versioned_docs/version-Android SDK 6.7.2/androidreleasenotes.md",sourceDirName:".",slug:"/androidreleasenotes",permalink:"/android/Android SDK 6.7.2/androidreleasenotes",draft:!1,tags:[],version:"Android SDK 6.7.2",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"androidreleasenotes"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/android/Android SDK 6.7.2/androidintroduction"},next:{title:"Migration from 5.X",permalink:"/android/Android SDK 6.7.2/androidmigrationguide"}},p={},s=[{value:"6.7.2",id:"672",level:2},{value:"6.7.0",id:"670",level:2},{value:"6.6.7",id:"667",level:2},{value:"6.6.3",id:"663",level:2},{value:"6.6.0",id:"660",level:2},{value:"6.5.0",id:"650",level:2},{value:"6.4.1",id:"641",level:2},{value:"6.4.0",id:"640",level:2},{value:"6.3.0",id:"630",level:2},{value:"6.2.2",id:"622",level:2},{value:"6.2.1",id:"621",level:2},{value:"6.2.0",id:"620",level:2},{value:"6.1.1",id:"611",level:2},{value:"6.1.0",id:"610",level:2}],u={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"release-notes"},"Release Notes"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Do not miss any news from Handpoint releases. ",(0,r.kt)("a",{parentName:"p",href:"https://handpoint.us6.list-manage.com/subscribe?u=4d9dff9e7edb7e57a67a7b252&id=0a2179241e"},"Subscribe")," to our Handpoint Newsletter!")),(0,r.kt)("h2",{id:"672"},"6.7.2"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fixes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MOTO: Retry token and configuration download if missing for MoTo transactions"),(0,r.kt)("li",{parentName:"ul"},"CLOUD: device status moving terminals between merchants"),(0,r.kt)("li",{parentName:"ul"},"CLOUD: REST-API transaction result delivery"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"requestedAmount")," field in Transaction Result correctly populated")),(0,r.kt)("h2",{id:"670"},"6.7.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Features")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A35 support added"),(0,r.kt)("li",{parentName:"ul"},"Swedish language support"),(0,r.kt)("li",{parentName:"ul"},"Field customerReference added to TransactionResult")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fixes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Cloud client shows "Unable to process your request" while the request reach the device'),(0,r.kt)("li",{parentName:"ul"},"Contactless card tokenization fixed"),(0,r.kt)("li",{parentName:"ul"},"CVM fixed in receipts for MOTO transactions"),(0,r.kt)("li",{parentName:"ul"},"Amount fields are now populated in case of FAILURE and DECLINE"),(0,r.kt)("li",{parentName:"ul"},"Interact/AMEX certification fixes"),(0,r.kt)("li",{parentName:"ul"},"Fix minor issues and app crashes")),(0,r.kt)("h2",{id:"667"},"6.6.7"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fixes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SCA scenarios on PAX A80"),(0,r.kt)("li",{parentName:"ul"},"CLOUD: receipt printing"),(0,r.kt)("li",{parentName:"ul"},"Deadman mechanism for not completed trx. App dies in the middle of a trx, will be auto cancelled in the restart")),(0,r.kt)("h2",{id:"663"},"6.6.3"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fixes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DATECS: Stop reconnection loop on api.disconnect()")),(0,r.kt)("h2",{id:"660"},"6.6.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Features"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MoTo (Mail Order Telephone Order)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fixes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CLOUD: Connection stability."),(0,r.kt)("li",{parentName:"ul"},"AID parsing for Discover cards."),(0,r.kt)("li",{parentName:"ul"},"PIN input on physical keyboards.")),(0,r.kt)("h2",{id:"650"},"6.5.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Features"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Card brand display: 2 new events deviceCapabilities (supportedCardBrands) and readCard to show the supported card brands and card used during a transaction respectively."),(0,r.kt)("li",{parentName:"ul"},"Update webview for devices that do not support co-branding.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fixes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Correct handling of stopCurrentTransaction operation result for cloud operations."),(0,r.kt)("li",{parentName:"ul"},"Pin bypass for contactless transactions."),(0,r.kt)("li",{parentName:"ul"},"Automatic reconnection logic for android Datecs devices.")),(0,r.kt)("h2",{id:"641"},"6.4.1"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fixes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Automatic Cancellation parameters.")),(0,r.kt)("h2",{id:"640"},"6.4.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Features"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Populate operation timeout on CLOUD operations."),(0,r.kt)("li",{parentName:"ul"},"Max attempts on Cancellation retries."),(0,r.kt)("li",{parentName:"ul"},"Generic screen to show text messages.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fixes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Base amount handling in TipDialog"),(0,r.kt)("li",{parentName:"ul"},"Cancellation service max retry window"),(0,r.kt)("li",{parentName:"ul"},"Verification method on transaction result object"),(0,r.kt)("li",{parentName:"ul"},"Correct population of MessageReasonCode"),(0,r.kt)("li",{parentName:"ul"},"Error message multi-language translation"),(0,r.kt)("li",{parentName:"ul"},"Cardholder name for contact operations"),(0,r.kt)("li",{parentName:"ul"},"Amount presentation in transactions report"),(0,r.kt)("li",{parentName:"ul"},"Analytics and Cloud services stability moving terminals between merchants")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Refactor"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deprecated jcenter repository"),(0,r.kt)("li",{parentName:"ul"},"Improved structure of cryptography module"),(0,r.kt)("li",{parentName:"ul"},"Legacy code removal")),(0,r.kt)("h2",{id:"630"},"6.3.0"),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Features"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Print Report v2."),(0,r.kt)("li",{parentName:"ul"},"PAXA80 physical keyboard full support."),(0,r.kt)("li",{parentName:"ul"},"Deadman mechanism for not completed trx."),(0,r.kt)("li",{parentName:"ul"},"Addition of customer reference on transaction result for cancelled of timed out trx")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fixes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Certification scenarios.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Unification of sdk dialogs styles.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Card reading during tokenizations.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Contactless light thread handling.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Xml parsing.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Printing html using uncommon characters.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Monospace font for printing.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SCA cases on contact.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"PAX A80 Pin bypass handling.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Receipts for partial approvals.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Correct message on empty config update."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Refactor"),":")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Internal Emv Classes to improve performance."))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"622"},"6.2.2"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fixes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Compatibility issues with Android 11 devices."),(0,r.kt)("li",{parentName:"ul"},"CLOUD: Improved logic to wake up device and start trx during device sleep mode.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"621"},"6.2.1"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fixes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Improved bluetooth connection logic (Datecs)")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"620"},"6.2.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Features"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"New Tip Dialog."),(0,r.kt)("li",{parentName:"ul"},"Multi-mid Phase 2."),(0,r.kt)("li",{parentName:"ul"},"Physical Keyboard PAX-A80."),(0,r.kt)("li",{parentName:"ul"},"Visa debit US app selection."),(0,r.kt)("li",{parentName:"ul"},"cardHolderName filed in Transaction Result object")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fixes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Temporarily block during consecutive operations (Datecs devices)."),(0,r.kt)("li",{parentName:"ul"},"Translations."),(0,r.kt)("li",{parentName:"ul"},"Compatibility with Android 11.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"611"},"6.1.1"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fixes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Translations")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"610"},"6.1.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Features"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"End of the day report."),(0,r.kt)("li",{parentName:"ul"},"New printing framework."),(0,r.kt)("li",{parentName:"ul"},"Transaction limit exceeds event."),(0,r.kt)("li",{parentName:"ul"},"Multi-language in Status and End of Transaction \u2192 Transaction Result new fields: multiLanguageStatusMessages and multiLanguageErrorMessages."),(0,r.kt)("li",{parentName:"ul"},"Support for MerchantAuth and Bypass options for Cloud + REST-API.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fixes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Receipt adjustments for mobile wallets."),(0,r.kt)("li",{parentName:"ul"},"Receipt adjustments for empty tags."),(0,r.kt)("li",{parentName:"ul"},"Fields in TransactionResult."),(0,r.kt)("li",{parentName:"ul"},"Contactless lights after card reading error."),(0,r.kt)("li",{parentName:"ul"},"REST-API ACK."),(0,r.kt)("li",{parentName:"ul"},"Translations"),(0,r.kt)("li",{parentName:"ul"},"Error handling prior connecting to device")))}d.isMDXComponent=!0}}]);