"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5264],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=p(n),k=r,c=m["".concat(s,".").concat(k)]||m[k]||d[k]||l;return n?a.createElement(c,i(i({ref:e},u),{},{components:n})):a.createElement(c,i({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3593:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:7,id:"iostransactions"},s="Transaction Types",p={unversionedId:"iostransactions",id:"version-iOS SDK 4.0.1/iostransactions",title:"Transaction Types",description:"Sale",source:"@site/ios_versioned_docs/version-iOS SDK 4.0.1/iostransactions.md",sourceDirName:".",slug:"/iostransactions",permalink:"/ios/iostransactions",tags:[],version:"iOS SDK 4.0.1",sidebarPosition:7,frontMatter:{sidebar_position:7,id:"iostransactions"},sidebar:"version-iOS SDK 4.0.1/tutorialSidebar",previous:{title:"Integration Example",permalink:"/ios/iossdkprocessing"},next:{title:"Terminal Management",permalink:"/ios/iosdevicemanagement"}},u={},d=[{value:"Sale",id:"2",level:2},{value:"Sale And Tokenize Card",id:"4",level:2},{value:"Sale Reversal",id:"3",level:2},{value:"Refund",id:"5",level:2},{value:"Refund reversal",id:"6",level:2},{value:"Tokenize Card",id:"10",level:2},{value:"Accept signature",id:"7",level:2},{value:"Retrieve Pending Transaction",id:"8",level:2},{value:"Tip Adjustment",id:"9",level:2}],m={toc:d};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"transaction-types"},"Transaction Types"),(0,l.kt)("h2",{id:"2"},"Sale"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"saleWithAmount")," ",(0,l.kt)("span",{class:"badge badge--info"},"Method")),(0,l.kt)("p",null,"A sale initiates a payment operation to the card reader. In it's simplest form you only have to pass the ",(0,l.kt)("strong",{parentName:"p"},"amount")," and ",(0,l.kt)("strong",{parentName:"p"},"currency")," but it also accepts a map with optional parameters."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"amount")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"NSInteger")),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"currency ")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required")," ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"NSString")),(0,l.kt)("td",{parentName:"tr",align:null},"3 letter currency code in accordance to ISO4217")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"options")," ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"SaleOptions")),(0,l.kt)("td",{parentName:"tr",align:null},"An object to store all the customization options for a sale.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},'//If you just need a plain vanilla sale:\n[api saleWithAmount:100\n           currency:Currency.EUR.alpha];\n\n//But you can customize your sale:\nSaleOptions *options = [SaleOptions new];\n//Optionally\noptions.customerReference = @"Your customer reference";\n//If you need Multi MID / Custom merchant Authentication:\nMerchantAuth *auth = [MerchantAuth new];\nCredential *cred = [Credential new];\n//Optionally\ncred.acquirer = [Credential getAcquirerFromString:@"acquirer"];\n//Optionally\ncred.mid = @"mid";\n//Optionally\ncred.tid = @"tid";\n//Add as many credentials as Acquirers your merchant have agreements with\n[auth add:cred];\noptions.merchantAuth = auth;\n//If you want to specify the budget period\n//Only available for SureSwipe/Altech\n//Here it\'s 3 months\noptions.divideByMonths = @"3";\n\n[api saleWithAmount:100\n           currency:Currency.EUR.alpha\n            options:options];\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Events invoked")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ios/iosevents#14"},(0,l.kt)("strong",{parentName:"a"},"responseStatus"))),(0,l.kt)("p",null,"Invoked during a transaction with different statuses from the payment terminal."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ios/iosevents#15"},(0,l.kt)("strong",{parentName:"a"},"responseError"))),(0,l.kt)("p",null,"Invoked when an error response happens."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ios/iosevents#17"},(0,l.kt)("strong",{parentName:"a"},"requestSignature"))),(0,l.kt)("p",null,"Invoked if card verification requires signature."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ios/iosevents#16"},(0,l.kt)("strong",{parentName:"a"},"responseFinanceStatus "))),(0,l.kt)("p",null,"Invoked when the payment terminal finishes processing the transaction."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"YES")," if operation starts successfully.")))),(0,l.kt)("h2",{id:"4"},"Sale And Tokenize Card"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"saleAndTokenizeCardWithAmount")," ",(0,l.kt)("span",{class:"badge badge--info"},"Method")),(0,l.kt)("p",null,"A sale and tokenize operation initiates a payment operation with the payment terminal."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"amount")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"NSInteger")),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"currency")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required")," ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"NSString")),(0,l.kt)("td",{parentName:"tr",align:null},"3 letter currency code in accordance to ISO4217")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"options")," ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"SaleOptions")),(0,l.kt)("td",{parentName:"tr",align:null},"An object to store all the customization options for a sale.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},'//If you just need a plain vanilla sale tokenization:\n[api saleAndTokenizeWithAmount:100\n                      currency:Currency.EUR.alpha];\n\n//But you can customize your sale:\nSaleOptions *options = [SaleOptions new];\n//Optionally\noptions.customerReference = @"Your customer reference";\n//If you need Multi MID / Custom merchant Authentication:\nMerchantAuth *auth = [MerchantAuth new];\nCredential *cred = [Credential new];\n//Optionally\ncred.acquirer = [Credential getAcquirerFromString:@"acquirer"];\n//Optionally\ncred.mid = @"mid";\n//Optionally\ncred.tid = @"tid";\n//Add as many credentials as Acquirers your merchant have agreements with\n[auth add:cred];\noptions.merchantAuth = auth;\n//If you want to specify the budget period\n//Only available for SureSwipe/Altech\n//Here it\'s 3 months\noptions.divideByMonths = @"3";\n\n[api saleAndTokenizeWithAmount:100\n                      currency:Currency.EUR.alpha\n                       options:options];\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Events invoked")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ios/iosevents#14"},(0,l.kt)("strong",{parentName:"a"},"responseStatus"))),(0,l.kt)("p",null,"Invoked during a transaction with different statuses from the payment terminal."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ios/iosevents#15"},(0,l.kt)("strong",{parentName:"a"},"responseError"))),(0,l.kt)("p",null,"Invoked when an error response happens."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ios/iosevents#17"},(0,l.kt)("strong",{parentName:"a"},"requestSignature"))),(0,l.kt)("p",null,"Invoked if card verification requires signature."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ios/iosevents#16"},(0,l.kt)("strong",{parentName:"a"},"responseFinanceStatus"))),(0,l.kt)("p",null,"Invoked when the payment terminal finishes processing the transaction."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"YES")," if operation starts successfully.")))),(0,l.kt)("h2",{id:"3"},"Sale Reversal"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"saleVoidWithAmount")," ",(0,l.kt)("span",{class:"badge badge--info"},"Method")),(0,l.kt)("p",null,"Request a void of a previous sale transaction. Amount, currency and transactionID of the original sale must be sent as parameters. This operation reverts (if possible) a specific sale identified with a transaction id. Note that transactions can only be reversed the same day as when the transaction was made."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"amount")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"NSInteger")),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"currency")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required")," ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"NSString")),(0,l.kt)("td",{parentName:"tr",align:null},"3 letter currency code in accordance to ISO4217")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"transaction")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required")," ",(0,l.kt)("br",null)," ",(0,l.kt)("em",{parentName:"td"},"NSString")),(0,l.kt)("td",{parentName:"tr",align:null},"TransactionID of the sale transaction to be voided")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"options")," ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"Options")),(0,l.kt)("td",{parentName:"tr",align:null},"An object to store all the customization options for this operation.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},'//If you just need a plain vanilla sale reversal:\n[api saleReversalWithAmount:100\n                   currency:Currency.EUR.alpha\n              transactionId:originalTransactionID\n                    options:options];\n\n//But you can customize your reversal:\nOptions *options = [Options new];\n//Optionally\noptions.customerReference = @"Your customer reference";\n\n[api saleReversalWithAmount:100\n                   currency:Currency.EUR.alpha\n              transactionId:@"00000000-0000-0000-0000-000000000000"\n                    options:options];\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Events invoked")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ios/iosevents#14"},(0,l.kt)("strong",{parentName:"a"},"responseStatus"))),(0,l.kt)("p",null,"Invoked during a transaction with different statuses from the payment terminal."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ios/iosevents#15"},(0,l.kt)("strong",{parentName:"a"},"responseError "))),(0,l.kt)("p",null,"Invoked when an error response happens."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ios/iosevents#16"},(0,l.kt)("strong",{parentName:"a"},"responseFinanceStatus"))),(0,l.kt)("p",null,"Invoked when the payment terminal finishes processing the transaction."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"YES")," if operation starts successfully.")))),(0,l.kt)("h2",{id:"5"},"Refund"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"refundWithAmount")," ",(0,l.kt)("span",{class:"badge badge--info"},"Method")),(0,l.kt)("p",null,"A refund initiates a refund operation with the payment terminal. This operation moves funds from the merchant account to the cardholder's card."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"amount")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"NSInteger")),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"currency")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required")," ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"NSString")),(0,l.kt)("td",{parentName:"tr",align:null},"Currency of the charge")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"transaction")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required")," ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"NSString")),(0,l.kt)("td",{parentName:"tr",align:null},"If present it links the refund with a previous sale. It effectively limits the maximum amount refunded to that of the original transaction.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"options")," ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"MerchantAuthOptions")),(0,l.kt)("td",{parentName:"tr",align:null},"An object to store all the customization options for a refund.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},'//If you just need a plain vanilla refund:\n[api refundWithAmount:100\n             currency:Currency.EUR.alpha\n          transaction:@"00000000-0000-0000-0000-000000000000"];\n\n//But you can customize your sale:\nMerchantAuthOptions *options = [MerchantAuthOptions new];\n//Optionally\noptions.customerReference = @"Your customer reference";\n//If you need Multi MID / Custom merchant Authentication:\nMerchantAuth *auth = [MerchantAuth new];\nCredential *cred = [Credential new];\n//Optionally\ncred.acquirer = [Credential getAcquirerFromString:@"acquirer"];\n//Optionally\ncred.mid = @"mid";\n//Optionally\ncred.tid = @"tid";\n//Add as many credentials as Acquirers your merchant have agreements with\n[auth add:cred];\noptions.merchantAuth = auth;\n\n[api refundWithAmount:100\n             currency:Currency.EUR.alpha\n          transaction:@"00000000-0000-0000-0000-000000000000"\n              options:options];\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Events invoked")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ios/iosevents#14"},(0,l.kt)("strong",{parentName:"a"},"responseStatus"))),(0,l.kt)("p",null,"Invoked during a transaction with different statuses from the payment terminal."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ios/iosevents#15"},(0,l.kt)("strong",{parentName:"a"},"responseError"))),(0,l.kt)("p",null,"Invoked when an error response happens."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ios/iosevents#16"},(0,l.kt)("strong",{parentName:"a"},"responseFinanceStatus"))),(0,l.kt)("p",null,"Invoked when the payment terminal finishes processing the transaction."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"YES")," if operation starts successfully.")))),(0,l.kt)("h2",{id:"6"},"Refund reversal"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"refundVoidWithAmount")," ",(0,l.kt)("span",{class:"badge badge--info"},"Method")),(0,l.kt)("p",null,"Request a void of a previous refund transaction. Amount, currency and transactionID of the original refund must be sent as parameters. This operation reverts (if possible) a specific refund identified with a transaction id. Note that transactions can only be reversed the same day as when the transaction was made."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"amount")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"NSInteger")),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"currency")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required")," ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"NSString")),(0,l.kt)("td",{parentName:"tr",align:null},"3 letter currency code in accordance to ISO4217")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"transaction")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required")," ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"NSString")),(0,l.kt)("td",{parentName:"tr",align:null},"TransactionID of the refund transaction to be voided")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"options")," ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"Options")),(0,l.kt)("td",{parentName:"tr",align:null},"An object to store all the customization options for this operation.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},'//If you just need a plain vanilla refund reversal:\n[api refundReversalWithAmount:100\n                    currency:Currency.EUR.alpha\n               transactionId:originalTransactionID\n                     options:options];\n\n//But you can customize your sale:\nOptions *options = [Options new];\n//Optionally\noptions.customerReference = @"Your customer reference";\n\n[api refundReversalWithAmount:100\n                     currency:Currency.EUR.alpha\n                transactionId:@"00000000-0000-0000-0000-000000000000"\n                      options:options];\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Events invoked")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ios/iosevents#14"},(0,l.kt)("strong",{parentName:"a"},"responseStatus"))),(0,l.kt)("p",null,"Invoked during a transaction with different statuses from the payment terminal."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ios/iosevents#15"},(0,l.kt)("strong",{parentName:"a"},"responseError"))),(0,l.kt)("p",null,"Invoked when an error response happens."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ios/iosevents#16"},(0,l.kt)("strong",{parentName:"a"},"responseFinanceStatus"))),(0,l.kt)("p",null,"Invoked when the payment terminal finishes processing the transaction."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"YES")," if the operation was successfully sent to device.")))),(0,l.kt)("h2",{id:"10"},"Tokenize Card"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"tokenizeCard")," ",(0,l.kt)("span",{class:"badge badge--info"},"Method")),(0,l.kt)("p",null,"Initiates a card tokenization operation with the payment terminal (not available for all acquirers, please check with Handpoint to know if tokenization is supported for your acquirer of choice)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"reference")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"NSString")),(0,l.kt)("td",{parentName:"tr",align:null},"string for customer reference")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"//Initiates a card tokenization operation.\n[heftClient tokenizeCard];\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Events invoked")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ios/iosevents#14"},(0,l.kt)("strong",{parentName:"a"},"responseStatus"))),(0,l.kt)("p",null,"Invoked during a transaction with different statuses from the payment terminal."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ios/iosevents#15"},(0,l.kt)("strong",{parentName:"a"},"responseError"))),(0,l.kt)("p",null,"Invoked when an error response happens."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ios/iosevents#17"},(0,l.kt)("strong",{parentName:"a"},"requestSignature"))),(0,l.kt)("p",null,"Invoked if card verification requires signature."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ios/iosevents#44"},(0,l.kt)("strong",{parentName:"a"},"responseRecoveredTransactionStatus"))),(0,l.kt)("p",null,"Invoked when the card reader finishes processing the transaction."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"YES")," if operation starts successfully.")))),(0,l.kt)("h2",{id:"7"},"Accept signature"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"acceptSignature")," ",(0,l.kt)("span",{class:"badge badge--info"},"Method")),(0,l.kt)("p",null,"A ",(0,l.kt)("a",{parentName:"p",href:"/ios/iosevents#17"},(0,l.kt)("em",{parentName:"a"},"requestSignature"))," event is invoked during a transaction if signature verification is needed. The merchant is required to ask the cardholder for signature and approve (or decline) the signature. signatureRequired lets the payment terminal know if the signature was approved (by passing YES to the function) or declined by the merchant (by passing NO to the function)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flag")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"YES if signature is valid, NO otherwise")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"//acceptSignature:\n//Inform the card reader if signature is valid or not\n-(IBAction)accept\n{\n    [heftClient acceptSignature:YES];\n}\n-(IBAction)decline\n{\n    [heftClient acceptSignature:NO];\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Events invoked")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ios/iosevents#14"},(0,l.kt)("strong",{parentName:"a"},"responseStatus"))),(0,l.kt)("p",null,"Invoked during a transaction with different statuses from the payment terminal."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ios/iosevents#15"},(0,l.kt)("strong",{parentName:"a"},"responseError"))),(0,l.kt)("p",null,"Invoked when an error response happens."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ios/iosevents#16"},(0,l.kt)("strong",{parentName:"a"},"responseFinanceStatus"))),(0,l.kt)("p",null,"Invoked when the payment terminal finishes processing the transaction."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"8"},"Retrieve Pending Transaction"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"retrievePendingTransaction")," ",(0,l.kt)("span",{class:"badge badge--info"},"Method")),(0,l.kt)("p",null,"Retrieving a pending transaction fetches a transaction result that was lost due to an unexpected disconnection between the payment terminal and the associated application."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"//retrievePendingTransaction:\n//Called when a pending transaction is discovered upon connecting to a specific card reader\n- (void)didConnect:(id<HeftClient>)client{\n    heftClient = client;\n\n    if(heftClient){\n        if([heftClient isTransactionResultPending] == YES) {\n            // a pending transaction has been detected ...\n            // ... so, lets get it\n            [heftClient retrievePendingTransaction];\n        }\n    }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Events invoked")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ios/iosevents#14"},(0,l.kt)("strong",{parentName:"a"},"responseStatus"))),(0,l.kt)("p",null,"Invoked during a transaction with different statuses from the payment terminal."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ios/iosevents#15"},(0,l.kt)("strong",{parentName:"a"},"responseError"))),(0,l.kt)("p",null,"Invoked when an error response happens."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ios/iosevents#44"},(0,l.kt)("strong",{parentName:"a"},"responseRecoveredTransactionStatus"))),(0,l.kt)("p",null,"Invoked when the card reader has returned a recovered transaction."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"YES")," if operation starts successfully.")))),(0,l.kt)("br",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Notes")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"On starting a new transaction"))),(0,l.kt)("p",null,"If a new transaction is started without fetching first a pending transaction result, then the pending transaction result will be discarded."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"User notifications while a transaction result is pending"))),(0,l.kt)("p",null,"The payment terminal will not give any visible indication that a transaction result is pending."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"User notifications when fetching a pending transaction result"))),(0,l.kt)("p",null,"The payment terminal will briefly display a message when a pending transaction result is recovered."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"9"},"Tip Adjustment"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"tipAdjustment")," ",(0,l.kt)("span",{class:"badge badge--info"},"Method")),(0,l.kt)("p",null,"A tip adjustment operation allows merchants to adjust the tip amount of a sale transaction before the batch of transactions is settled by the processor at the end of the day.\nThe tip adjustment method does not rely on a card reader and is therefore a separate method that must be initialized with a shared secret. The function is defined in the file HapiRemoteService.h\nNote: This functionality is only available for the restaurant industry in the United States and the processors currently supporting this functionality are TSYS and VANTIV. This functionality is limited to HiLite terminals."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tipAmount")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"NSInteger")),(0,l.kt)("td",{parentName:"tr",align:null},"Tip amount added to the original (base) transaction amount - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"transaction")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required")," ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"NSString")),(0,l.kt)("td",{parentName:"tr",align:null},"TransactionID (GUID) of the original sale transaction to be adjusted")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},'//First, you need to include the following dependency\n#include "HapiRemoteService.h"\n\n//Second, the shared secret needs to be initialized\nNSString* shared_secret = @"0102030405060708091011121314151617181920212223242526272829303132";\nBOOL result = setupHandpointApiConnection(shared_secret);\n\n//Third, you need to retrieve the unique transaction id of the original sale transaction you want to adjust. The below GUID is only an example and will result in a decline from the host if used for tip adjustment\nNSString* transaction = @"d50af540-a1b0-11e6-85e6-07b2a5f091ec";\n\n//Fourth, let\'s tip adjust a transaction for $10.00!\n-(IBAction)tipAdjustment:(UIButton*) sender\n{\n    BOOL result = tipAdjustment(transaction, 1000, ^(TipAdjustmentStatus status)\n    {\n        if(status == TipAdjustmentAuthorised) {\n\n            //Successfully adjusted!\n\n        }\n\n        else if(status == TipAdjustmentDeclined) {\n\n            //Declined!\n\n        }\n\n        else if(status == TipAdjustmentFailed) {\n\n            //Timeout!\n\n        }\n    });\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",null,"Result of the tip adjustment transaction, possible values :"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"status")),(0,l.kt)("td",{parentName:"tr",align:null},"- ",(0,l.kt)("strong",{parentName:"td"},"TipAdjustmentAuthorised")," (tip adjustment approved by the processor) ",(0,l.kt)("br",null),"- ",(0,l.kt)("strong",{parentName:"td"},"TipAdjustmentFailed")," (system error or timeout) ",(0,l.kt)("br",null)," - ",(0,l.kt)("strong",{parentName:"td"},"TipAdjustmentDeclined")," (tip adjustment declined by the processor)")))),(0,l.kt)("p",null,"If two tip adjustments are sent for the same sale transaction, the second tip adjustment will override the first one. In case the transaction fails (not declined) we recommend that you prompt the user of the POS to retry the adjustment."))}k.isMDXComponent=!0}}]);