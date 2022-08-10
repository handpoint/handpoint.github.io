"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7730],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8505:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:9,id:"iosevents"},i="Events",l={unversionedId:"iosevents",id:"version-iOS SDK 4.0.1/iosevents",title:"Events",description:"didConnect",source:"@site/ios_versioned_docs/version-iOS SDK 4.0.1/iosevents.md",sourceDirName:".",slug:"/iosevents",permalink:"/ios/iosevents",draft:!1,tags:[],version:"iOS SDK 4.0.1",sidebarPosition:9,frontMatter:{sidebar_position:9,id:"iosevents"},sidebar:"version-iOS SDK 4.0.1/tutorialSidebar",previous:{title:"Terminal Management",permalink:"/ios/iosdevicemanagement"},next:{title:"Objects",permalink:"/ios/iosobjects"}},s={},d=[{value:"didConnect",id:"20",level:3},{value:"didDiscoverFinished",id:"37",level:3},{value:"didFindAccessoryDevice",id:"38",level:3},{value:"didLostAccessoryDevice",id:"39",level:3},{value:"responseStatus",id:"14",level:3},{value:"responseFinanceStatus",id:"16",level:3},{value:"responseError",id:"15",level:3},{value:"requestSignature",id:"17",level:3},{value:"cancelSignature",id:"40",level:3},{value:"responseScannerEvent",id:"41",level:3},{value:"responseScannerDisabled",id:"42",level:3},{value:"responseLogInfo",id:"43",level:3},{value:"responseRecoveredTransactionStatus",id:"44",level:3}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"events"},"Events"),(0,r.kt)("h3",{id:"20"},"didConnect"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"didConnect")," ",(0,r.kt)("span",{class:"badge badge--info"},"Method")),(0,r.kt)("p",null,"Called when a connection to the client has been established through the method clientForDevice."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"client")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/ios/iosobjects#22"},"HeftClient")),(0,r.kt)("td",{parentName:"tr",align:null},"The client object, used to perform transactions and communicate with the payment terminal.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"//didConnect:\n//Called when a connection to specified device was created.\n-(void)didConnect:(id<HeftClient>)client \n{\n    // connected successfully to a device\n    // assign the client to our heftClient property\n    heftClient = client;\n}\n")),(0,r.kt)("h3",{id:"37"},"didDiscoverFinished"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"didDiscoverFinished")," ",(0,r.kt)("span",{class:"badge badge--info"},"Method")),(0,r.kt)("p",null,"When the modal window from startDiscovery is closed then this event is called."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'//didDiscoverFinished\n// This function gets called when discovery is finished\n- (void)didDiscoverFinished;\n{\n    NSLog(@"Discover finished"); \n    //Stop search activity indicator or other desired functions \n}\n')),(0,r.kt)("h3",{id:"38"},"didFindAccessoryDevice"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"didFindAccessoryDevice")," ",(0,r.kt)("span",{class:"badge badge--info"},"Method")),(0,r.kt)("p",null,"Notifies that a new accessory device was found. When a payment terminal is detected this delegate is called. You can take the newDevice object and create a new heft client for that particular terminal or store it in memory to connect to it later."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"newDevice")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/ios/iosobjects#23"},"HeftRemoteDevice")),(0,r.kt)("td",{parentName:"tr",align:null},"An object containing a reference to the accessory device.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'//didFindAccessoryDevice\n//Delegate which notifies that a new accessory device was found.\n- (void)didFindAccessoryDevice:(HeftRemoteDevice*)newDevice\n{\n    NSLog(@"Found new device");\n    //Connect to device or store found device for later.\n}\n')),(0,r.kt)("h3",{id:"39"},"didLostAccessoryDevice"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"didLostAccessoryDevice")," ",(0,r.kt)("span",{class:"badge badge--info"},"Method")),(0,r.kt)("p",null,"Notifies that the accessory device was disconnected."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"oldDevice")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/ios/iosobjects#23"},"HeftRemoteDevice")),(0,r.kt)("td",{parentName:"tr",align:null},"An object containing a reference to the accessory device.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'//didLostAccessoryDevice\n//Delegate which notifies that an accessory device was disconnected\n- (void)didLostAccessoryDevice:(HeftRemoteDevice*)oldDevice\n{\n    NSLog(@"Device disconnected");\n    //Remove device from devices array\n    [heftManager.devicesCopy removeObject:oldDevice];\n    //Do some cleanup after disconnecting if necessary \n    \n} \n')),(0,r.kt)("h3",{id:"14"},"responseStatus"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"responseStatus")," ",(0,r.kt)("span",{class:"badge badge--info"},"Method")),(0,r.kt)("p",null,"Called to inform about the status of the transaction, several calls can be expected. Several calls to this method happen after a transaction is initiated from the HeftClient to inform about the status of operation. The info object contains a string (status) and a dictionary (xml)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"info")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/ios/iosobjects#24"},"ResponseInfo")),(0,r.kt)("td",{parentName:"tr",align:null},"Includes status code, status text and detailed xml.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"//responseStatus:\n//Called to inform about the status of the transaction\n-(void)esponseStatus:(id<ResponseInfo>)info\n{\n    NSLog(info.status);\n    NSLog(info.xml.description);\n}\n")),(0,r.kt)("h3",{id:"16"},"responseFinanceStatus"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"responseFinanceStatus")," ",(0,r.kt)("span",{class:"badge badge--info"},"Method")),(0,r.kt)("p",null,"Notifies that the transaction has completed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"info")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/ios/iosobjects#25"},"FinanceResponseInfo")),(0,r.kt)("td",{parentName:"tr",align:null},"Information about current transaction status.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"//responseFinanceStatus:\n//Called at the end of a transaction to inform about the result of the operation.\n-(void)responseFinanceStatus:(id<FinanceResponseInfo>)info\n{\n    NSLog(info.status);\n    NSLog(info.customerReceipt);\n    //print receipts\n}\n")),(0,r.kt)("h3",{id:"15"},"responseError"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"responseError")," ",(0,r.kt)("span",{class:"badge badge--info"},"Method")),(0,r.kt)("p",null,"Called to inform about the status of the transaction, several calls can be expected. Several calls to this method happen after a transaction is initiated from the HeftClient to inform about the status of operation. The info object contains a string (status) and a dictionary (xml)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"info")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/ios/iosobjects#24"},"ResponseInfo")),(0,r.kt)("td",{parentName:"tr",align:null},"The info object contains a string (status) and a dictionary (xml).")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"//responseError:\n//Called when an error happens.\n-(void)responseError:(id<ResponseInfo>)info\n{\n    NSLog(info.status);\n    NSLog(info.xml.description);\n}\n")),(0,r.kt)("h3",{id:"17"},"requestSignature"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"requestSignature")," ",(0,r.kt)("span",{class:"badge badge--info"},"Method")),(0,r.kt)("p",null,"Called during a financial operation if a signature from the customer is needed. The requestSignature delegate should be implemented to print out or display the receipt for the customer to sign."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"receipt")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"NSString")),(0,r.kt)("td",{parentName:"tr",align:null},"The receipt is a html formatted string containing a receipt for the customer to sign.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'//requestSignature:\n//Is called if a signature from the customer is needed.\n-(void)requestSignature:(NSString*)receipt\n{\n    NSLog(receipt);\n    //Display buttons to accept or decline customer signature\n    UIAlertView* alert = [[UIAlertView alloc] initWithTitle:@"" message:@"sign?" delegate:self cancelButtonTitle:@"No" otherButtonTitles:@"Yes", nil];\n    [alert show];\n}\n')),(0,r.kt)("h3",{id:"40"},"cancelSignature"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cancelSignature")," ",(0,r.kt)("span",{class:"badge badge--info"},"Method")),(0,r.kt)("p",null,"Called if the signature request times out. If the payment terminal does not receive an approval for the signature within a certain timeframe, it cancels the transaction and sends a notification to the app."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'//cancelSignature\n//Called if the signature request times out.\n-(void)cancelSignature\n{\n    NSLog(@"Signature request timed out");\n}\n')),(0,r.kt)("h3",{id:"41"},"responseScannerEvent"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"responseScannerEvent")," ",(0,r.kt)("span",{class:"badge badge--info"},"Method")),(0,r.kt)("p",null,"Called to inform that a scan has been performed, several calls can be expected."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"info")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/ios/iosobjects#26"},"ScannerEventResponseInfo")),(0,r.kt)("td",{parentName:"tr",align:null},"The info object contains scanCode, status and a dictionary (xml).")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"//responseScannerEvent:\n//Called to inform that a scan has been performed\n-(void)responseScannerEvent:(id<ScannerEventResponseInfo>)info\n{\n    NSLog(info.scanCode); //barcode scanned\n    NSLog(info.xml.description);\n}\n")),(0,r.kt)("h3",{id:"42"},"responseScannerDisabled"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"responseScannerDisabled")," ",(0,r.kt)("span",{class:"badge badge--info"},"Method")),(0,r.kt)("p",null,"Called to notify that the scanner has been disabled."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"info")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/ios/iosobjects#27"},"ScannerDisabledResponseInfo")),(0,r.kt)("td",{parentName:"tr",align:null},"The info object contains information about the scanner operation.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"//responseScannerDisabled:\n//Called to notify that the scanner has been disabled. \n-(void)responseScannerDisabled:(id<ScannerDisabledResponseInfo>)info\n{\n    NSLog(info.status);\n}\n")),(0,r.kt)("h3",{id:"43"},"responseLogInfo"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"responseLogInfo")," ",(0,r.kt)("span",{class:"badge badge--info"},"Method")),(0,r.kt)("p",null,"Called when logs have been downloaded from the payment terminal by using the logGetInfo method."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"info")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/ios/iosobjects#28"},"LogInfo")),(0,r.kt)("td",{parentName:"tr",align:null},"The info object has the string property log which holds the log info in text with carriage returns.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"//responseLogInfo:\n//Called when logs have been downloaded from the card reader by using the logGetInfo method.\n-(void)responseLogInfo:(id<LogInfo>)info\n{\n    NSLog(info.log);\n    //write to log file\n}\n")),(0,r.kt)("h3",{id:"44"},"responseRecoveredTransactionStatus"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"responseRecoveredTransactionStatus")," ",(0,r.kt)("span",{class:"badge badge--info"},"Method")),(0,r.kt)("p",null,"Notifies that a transaction has been recovered."),(0,r.kt)("p",null,"This method is ",(0,r.kt)("strong",{parentName:"p"},"OPTIONAL")," and only required if retrievePendingTransaction is called."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"info")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/ios/iosobjects#25"},(0,r.kt)("em",{parentName:"a"},"FinanceResponseInfo"))),(0,r.kt)("td",{parentName:"tr",align:null},"Information about the recovered transaction status.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"If an attempt was made to recover a transaction when none was pending then this parameter WILL be nil."))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"//responseRecoveredTransactionStatus:\n//Called when a pending transaction result has been recovered from the payment terminal.\n- (void)responseRecoveredTransactionStatus:(id<FinanceResponseInfo>)info{\n    if(info != nil) {\n        if(info.statusCode == EFT_PP_STATUS_SUCCESS) {\n            NSLog(info.status);\n            NSLog(info.customerReceipt);\n            NSLog(info.merchantReceipt);\n            // print receipts and/or save receipts in the transaction log.\n\n            if(info.financialResult == EFT_FINANC_STATUS_TRANS_APPROVED){\n                // Process to recover an authorized transaction result.\n            } else if(info.financialResult == EFT_FINANC_STATUS_TRANS_DECLINED) {\n                // Process to recover a declined transaction result.\n            }\n        } else if(info.statusCode != EFT_PP_STATUS_NO_DATA_AVAILABLE) {\n            // some other error was detected while waiting for a pending transaction result.\n        }\n    }\n    // else a pending transaction result was not found. \n}\n")))}c.isMDXComponent=!0}}]);