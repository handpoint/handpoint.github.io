"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8942],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=i,v=c["".concat(d,".").concat(m)]||c[m]||p[m]||r;return t?a.createElement(v,o(o({ref:n},u),{},{components:t})):a.createElement(v,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=c;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},92084:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=t(87462),i=(t(67294),t(3905)),r=t(65488),o=t(85162);const l={sidebar_position:3,id:"androidmigrationguide"},d="Migration from 6.X to 7.X",s={unversionedId:"androidmigrationguide",id:"version-Android SDK 7.0.2/androidmigrationguide",title:"Migration from 6.X to 7.X",description:"1}",source:"@site/android_versioned_docs/version-Android SDK 7.0.2/androidmigrationguide.md",sourceDirName:".",slug:"/androidmigrationguide",permalink:"/android/Android SDK 7.0.2/androidmigrationguide",draft:!1,tags:[],version:"Android SDK 7.0.2",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"androidmigrationguide"},sidebar:"tutorialSidebar",previous:{title:"Release Notes",permalink:"/android/Android SDK 7.0.2/androidreleasenotes"},next:{title:"Trigger Amounts",permalink:"/android/Android SDK 7.0.2/androidapioverview"}},u={},p=[{value:"1. New Interfaces",id:"1-new-interfaces",level:2},{value:"Interface SmartposRequired",id:"interface-smartposrequired",level:4},{value:"Interface MposRequired",id:"interface-mposrequired",level:4},{value:"Interface PosRequired",id:"interface-posrequired",level:4},{value:"Android Native Integration (PAX)",id:"android-native-integration-pax",level:3},{value:"Older Implementation (Android SDK 6.X)",id:"older-implementation-android-sdk-6x",level:4},{value:"Current Implementation (Android SDK 7.X)",id:"current-implementation-android-sdk-7x",level:4},{value:"Bluetooth Integration (HiLite)",id:"bluetooth-integration-hilite",level:3},{value:"Older Implementation (Android SDK 6.X)",id:"older-implementation-android-sdk-6x-1",level:4},{value:"Current Implementation (Android SDK 7.X)",id:"current-implementation-android-sdk-7x-1",level:4},{value:"Bluetooth and Android Native Integration (PAX &amp; HiLite)",id:"bluetooth-and-android-native-integration-pax--hilite",level:3},{value:"Older Implementation (Android SDK 6.X)",id:"older-implementation-android-sdk-6x-2",level:4},{value:"Current Implementation (Android SDK 7.X)",id:"current-implementation-android-sdk-7x-2",level:4},{value:"2. All financial operations are now returning an OperationStartResult object instead of a boolean",id:"3",level:2},{value:"3. Disabling the duplicate payment check service",id:"4",level:2},{value:"4. The <code>deviceCapabilities</code> event has been renamed to <code>supportedCardBrands</code>",id:"4-the-devicecapabilities-event-has-been-renamed-to-supportedcardbrands",level:2},{value:"5. The <code>saleAndTokenize</code> method has been removed. Since Android SDK 7.0.0, a <code>saleAndTokenizeOptions</code> object needs to be passed in &#39;options&#39; parameter of financial operations methods like <code>sale</code>",id:"5-the-saleandtokenize-method-has-been-removed-since-android-sdk-700-a-saleandtokenizeoptions-object-needs-to-be-passed-in-options-parameter-of-financial-operations-methods-like-sale",level:2}],c={toc:p};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1"},"Migration from 6.X to 7.X"),(0,i.kt)("p",null,"The new version 7.X.X of our Android SDK introduces the following changes: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"We removed the ",(0,i.kt)("inlineCode",{parentName:"li"},"Events.Required")," interface and divided it into ",(0,i.kt)("a",{parentName:"li",href:"/android/Android%20SDK%207.0.2/androidmigrationguide#1-new-integration-interfaces"},"3 different interfaces")," for a simpler and smoother integration."),(0,i.kt)("li",{parentName:"ol"},"All ",(0,i.kt)("a",{parentName:"li",href:"/android/Android%20SDK%207.0.2/androidmigrationguide#3"},"financial operations")," will now be returning an ",(0,i.kt)("a",{parentName:"li",href:"/android/Android%20SDK%207.0.2/androidobjects#operation-start-result"},"OperationStartResult")," object instead of a boolean to indicate that the operation was successfully sent to the payment terminal: ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The MAIN reason why we are now returning an object is because we want to give you access to the ",(0,i.kt)("inlineCode",{parentName:"li"},"transactionReference")," field inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"OperationStartResult")," object. The ",(0,i.kt)("inlineCode",{parentName:"li"},"transactionReference")," field is a unique identifier for the transaction that you will receive immediately after sending the transaction request to the terminal. If for any reason you do not receive the ",(0,i.kt)("inlineCode",{parentName:"li"},"TransactionResult")," object at the end of the transaction you will now be able to use the ",(0,i.kt)("inlineCode",{parentName:"li"},"transactionReference")," to directly query our Gateway and know instantly if the transaction for which you do not know the outcome was approved or declined."))),(0,i.kt)("li",{parentName:"ol"},"We are introducing a new feature called ",(0,i.kt)("strong",{parentName:"li"},"duplicate payment check"),". Looking back at our data we have seen that when a merchant is not 100% sure of the transaction outcome, they will reprocess the transaction leading to the cardholder being charged twice. In order to avoid this scenario, we are now flagging the duplicate transaction and prompting a menu to the cardholder/merchant to confirm/cancel the 2nd charge, this menu is pushed by our SDK and will automatically be displayed on top of your own UI when required. We are only prompting the duplicate menu in case the same card is used twice in a row to process a transaction for the same amount within a 5 minutes timeframe. The duplicate payment check feature will be ",(0,i.kt)("strong",{parentName:"li"},"enabled by default")," in the Android sdk 7.0.0 and can be disabled by passing a false value as part of the sale options ",(0,i.kt)("a",{parentName:"li",href:"/android/Android%20SDK%207.0.2/androidmigrationguide#4"},(0,i.kt)("inlineCode",{parentName:"a"},"saleOptions.setCheckDuplicates(false);")),"."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"deviceCapabilities")," event has been renamed to ",(0,i.kt)("inlineCode",{parentName:"li"},"supportedCardBrands"),"."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("a",{parentName:"li",href:"androidtransactions#3"},(0,i.kt)("inlineCode",{parentName:"a"},"saleAndTokenize"))," method has been removed. Since Android SDK 7.0.0, a ",(0,i.kt)("inlineCode",{parentName:"li"},"saleAndTokenizeOptions")," object needs to be passed in 'options' parameter of financial operations methods like ",(0,i.kt)("inlineCode",{parentName:"li"},"sale"),".")),(0,i.kt)("h2",{id:"1-new-interfaces"},"1. New Interfaces"),(0,i.kt)("p",null,"For an easier integration with our SDK we removed the ",(0,i.kt)("inlineCode",{parentName:"p"},"Events.Required")," interface and divided it into 3 different interfaces:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Events.SmartposRequired")," which are the mandatory events to subscribe to for a PAX integration."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Events.MposRequired")," which are the mandatory events to subscribe to for an HiLite integration."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Events.PosRequired")," which are the mandatory events to subscribe to if you are doing both a PAX AND HiLite integration.")),(0,i.kt)("p",null,"Here is the list of events being part of each interface: "),(0,i.kt)("h4",{id:"interface-smartposrequired"},"Interface SmartposRequired"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Events.PendingResults")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Events.ConnectionStatusChanged")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Events.CurrentTransactionStatus")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Events.EndOfTransaction"))),(0,i.kt)("h4",{id:"interface-mposrequired"},"Interface MposRequired"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Events.PendingResults")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Events.ConnectionStatusChanged")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Events.CurrentTransactionStatus")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Events.EndOfTransaction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Events.DeviceDiscoveryFinished")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Events.SignatureRequired"))),(0,i.kt)("h4",{id:"interface-posrequired"},"Interface PosRequired"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Events.PendingResults")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Events.ConnectionStatusChanged")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Events.CurrentTransactionStatus")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Events.EndOfTransaction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Events.DeviceDiscoveryFinished")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Events.SignatureRequired"))),(0,i.kt)("p",null,"The changes required for each of the above scenarios is described below."),(0,i.kt)("h3",{id:"android-native-integration-pax"},"Android Native Integration (PAX)"),(0,i.kt)("h4",{id:"older-implementation-android-sdk-6x"},"Older Implementation (Android SDK 6.X)"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class HandpointDelegate implements \n    Events.Required,\n    Events.CurrentTransactionStatus,\n    Events.ConnectionStatusChanged,\n    Events.EndOfTransaction,\n    Events.TransactionResultReady {\n"))),(0,i.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"class KotlinClient: \n    Events.Required,\n    Events.CurrentTransactionStatus,\n    Events.ConnectionStatusChanged {\n")))),(0,i.kt)("h4",{id:"current-implementation-android-sdk-7x"},"Current Implementation (Android SDK 7.X)"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class HandpointDelegate implements\n    Events.SmartposRequired,\n    Events.CurrentTransactionStatus,\n    Events.ConnectionStatusChanged,\n    Events.EndOfTransaction,\n    Events.TransactionResultReady {\n"))),(0,i.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"class KotlinClient: Events.SmartposRequired {\n")))),(0,i.kt)("h3",{id:"bluetooth-integration-hilite"},"Bluetooth Integration (HiLite)"),(0,i.kt)("h4",{id:"older-implementation-android-sdk-6x-1"},"Older Implementation (Android SDK 6.X)"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class HandpointDelegate implements \n    Events.Required, \n    Events.ConnectionStatusChanged, \n    Events.CurrentTransactionStatus,\n    Events.SignatureRequired,\n    Events.EndOfTransaction,\n    Events.DeviceDiscoveryFinished,\n    Events.TransactionResultReady {\n"))),(0,i.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"class KotlinClient: \n    Events.Required, \n    Events.ConnectionStatusChanged, \n    Events.CurrentTransactionStatus {\n")))),(0,i.kt)("h4",{id:"current-implementation-android-sdk-7x-1"},"Current Implementation (Android SDK 7.X)"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class JavaClient implements\n    Events.MposRequired,\n    Events.ConnectionStatusChanged, \n    Events.CurrentTransactionStatus,\n    Events.SignatureRequired,\n    Events.EndOfTransaction,\n    Events.DeviceDiscoveryFinished,\n    Events.TransactionResultReady {\n"))),(0,i.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"class KotlinClient: Events.MposRequired {\n")))),(0,i.kt)("h3",{id:"bluetooth-and-android-native-integration-pax--hilite"},"Bluetooth and Android Native Integration (PAX & HiLite)"),(0,i.kt)("h4",{id:"older-implementation-android-sdk-6x-2"},"Older Implementation (Android SDK 6.X)"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class HandpointDelegate implements \n    Events.Required, \n    Events.ConnectionStatusChanged, \n    Events.CurrentTransactionStatus,\n    Events.SignatureRequired,\n    Events.EndOfTransaction,\n    Events.DeviceDiscoveryFinished,\n    Events.TransactionResultReady {\n"))),(0,i.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"class KotlinClient: \n    Events.Required, \n    Events.ConnectionStatusChanged, \n    Events.CurrentTransactionStatus {\n")))),(0,i.kt)("h4",{id:"current-implementation-android-sdk-7x-2"},"Current Implementation (Android SDK 7.X)"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class JavaClient implements\n    Events.PosRequired,\n    Events.ConnectionStatusChanged, \n    Events.CurrentTransactionStatus,\n    Events.SignatureRequired,\n    Events.EndOfTransaction,\n    Events.DeviceDiscoveryFinished,\n    Events.TransactionResultReady  {\n"))),(0,i.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"class KotlinClient: Events.PosRequired {\n")))),(0,i.kt)("h2",{id:"3"},"2. All financial operations are now returning an ",(0,i.kt)("a",{parentName:"h2",href:"/android/Android%20SDK%207.0.2/androidobjects#operation-start-result"},"OperationStartResult")," object instead of a boolean"),(0,i.kt)("p",null,"The methods affected by this change are the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/android/Android%20SDK%207.0.2/androidtransactions#2"},"Sale")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/android/Android%20SDK%207.0.2/androidtransactions#4"},"SaleReversal")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/android/Android%20SDK%207.0.2/androidtransactions#5"},"Refund")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/android/Android%20SDK%207.0.2/androidtransactions#6"},"RefundReversal")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/android/Android%20SDK%207.0.2/androidtransactions#7"},"MotoSale")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/android/Android%20SDK%207.0.2/androidtransactions#8"},"MotoRefund")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/android/Android%20SDK%207.0.2/androidtransactions#9"},"MotoReversal")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/android/Android%20SDK%207.0.2/androidtransactions#12"},"TokenizeCard")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/android/Android%20SDK%207.0.2/androidtransactions#13"},"CardPan"))),(0,i.kt)("h2",{id:"4"},"3. Disabling the duplicate payment check service"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"This functionality is only available for SmartPos devices (PAX).")),(0,i.kt)("p",null,"By default, the duplicate payment check service is enabled. If you want to manually disable this service you will need to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"checkDuplicate")," field to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," using the ",(0,i.kt)("inlineCode",{parentName:"p"},"SaleOptions")," parameter. Here is an example: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public void pay(BigInteger amount, Currency currency) {\n    SaleOptions saleOptions = new SaleOptions();\n    saleOptions.setCheckDuplicates(false);\n    this.api.sale(amount, currency, saleOptions);\n}\n")),(0,i.kt)("p",null,"You can disable the duplicate check functionality for the following financial operations: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/android/Android%20SDK%207.0.2/androidtransactions#2"},"Sale")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/android/Android%20SDK%207.0.2/androidtransactions#3"},"Sale and Tokenize")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/android/Android%20SDK%207.0.2/androidtransactions#5"},"Refund"))),(0,i.kt)("h2",{id:"4-the-devicecapabilities-event-has-been-renamed-to-supportedcardbrands"},"4. The ",(0,i.kt)("inlineCode",{parentName:"h2"},"deviceCapabilities")," event has been renamed to ",(0,i.kt)("inlineCode",{parentName:"h2"},"supportedCardBrands")),(0,i.kt)("p",null," Check out the ",(0,i.kt)("a",{parentName:"p",href:"/android/Android%20SDK%207.0.2/androideventlisteners#cardBrandDisplay"},"card brand display")," object."),(0,i.kt)("h2",{id:"5-the-saleandtokenize-method-has-been-removed-since-android-sdk-700-a-saleandtokenizeoptions-object-needs-to-be-passed-in-options-parameter-of-financial-operations-methods-like-sale"},"5. The ",(0,i.kt)("inlineCode",{parentName:"h2"},"saleAndTokenize")," method has been removed. Since Android SDK 7.0.0, a ",(0,i.kt)("inlineCode",{parentName:"h2"},"saleAndTokenizeOptions")," object needs to be passed in 'options' parameter of financial operations methods like ",(0,i.kt)("inlineCode",{parentName:"h2"},"sale")),(0,i.kt)("p",null,"Check out the ",(0,i.kt)("a",{parentName:"p",href:"/android/Android%20SDK%207.0.2/androidtransactions#3"},"Sale and Tokenize Card")," section."))}m.isMDXComponent=!0},85162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(67294),i=t(86010);const r="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(87462),i=t(67294),r=t(86010),o=t(72389),l=t(67392),d=t(7094),s=t(12466);const u="tabList__CuJ",p="tabItem_LNqP";function c(e){var n;const{lazy:t,block:o,defaultValue:c,values:m,groupId:v,className:k}=e,h=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??h.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),b=(0,l.l)(f,((e,n)=>e.value===n.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===c?c:c??(null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)??h[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:y}=(0,d.U)(),[C,T]=(0,i.useState)(g),E=[],{blockElementScrollPositionUntilNextRender:S}=(0,s.o5)();if(null!=v){const e=N[v];null!=e&&e!==C&&f.some((n=>n.value===e))&&T(e)}const w=e=>{const n=e.currentTarget,t=E.indexOf(n),a=f[t].value;a!==C&&(S(n),T(a),null!=v&&y(v,String(a)))},D=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;t=E[n]??E[0];break}case"ArrowLeft":{const n=E.indexOf(e.currentTarget)-1;t=E[n]??E[E.length-1];break}}null==(n=t)||n.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},k)},f.map((e=>{let{value:n,label:t,attributes:o}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:e=>E.push(e),onKeyDown:D,onFocus:w,onClick:w},o,{className:(0,r.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":C===n})}),t??n)}))),t?(0,i.cloneElement)(h.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==C})))))}function m(e){const n=(0,o.Z)();return i.createElement(c,(0,a.Z)({key:String(n)},e))}}}]);