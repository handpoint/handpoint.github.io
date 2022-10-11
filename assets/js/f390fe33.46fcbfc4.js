"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6119],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:8,id:"windowsevents"},l="Events Listeners",o={unversionedId:"windowsevents",id:"version-Windows SDK 3.2.4/windowsevents",title:"Events Listeners",description:"Transaction Result Recovery over CLOUD connection",source:"@site/windows_versioned_docs/version-Windows SDK 3.2.4/windowsevents.md",sourceDirName:".",slug:"/windowsevents",permalink:"/windows/Windows SDK 3.2.4/windowsevents",draft:!1,tags:[],version:"Windows SDK 3.2.4",sidebarPosition:8,frontMatter:{sidebar_position:8,id:"windowsevents"},sidebar:"tutorialSidebar",previous:{title:"Events Subscribers",permalink:"/windows/Windows SDK 3.2.4/windowseventssubscribers"},next:{title:"Objects",permalink:"/windows/Windows SDK 3.2.4/windowobjects"}},s={},d=[{value:"Transaction Result Recovery over CLOUD connection",id:"transaction-result-recovery-over-cloud-connection",level:2},{value:"Device discovery finished",id:"13",level:2},{value:"Parameters",id:"parameters",level:5},{value:"Signature required",id:"5",level:2},{value:"Parameters",id:"parameters-1",level:4},{value:"End of transaction",id:"6",level:2},{value:"Parameters",id:"parameters-2",level:4},{value:"Connection status changed",id:"7",level:2},{value:"Parameters",id:"parameters-3",level:4},{value:"Current transaction status",id:"4",level:2},{value:"Parameters",id:"parameters-4",level:4},{value:"Message logged",id:"message-logged",level:2},{value:"Parameters",id:"parameters-5",level:4},{value:"Device Logs ready",id:"WinDeviceLogsReady",level:2},{value:"Parameters",id:"parameters-6",level:4},{value:"Pending transaction result",id:"pending-transaction-result",level:2},{value:"Parameters",id:"parameters-7",level:4},{value:"Transaction result ready",id:"11",level:2},{value:"Parameters",id:"parameters-8",level:4}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"events-listeners"},"Events Listeners"),(0,r.kt)("h2",{id:"transaction-result-recovery-over-cloud-connection"},"Transaction Result Recovery over CLOUD connection"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CloudTransactionResultRecovery")," ",(0,r.kt)("span",{class:"badge badge--info"},"Method")),(0,r.kt)("p",null,"The terminal has a transaction recovery loop to automatically send back the pending ",(0,r.kt)("a",{parentName:"p",href:"/windows/Windows%20SDK%203.2.4/windowobjects#14"},"Transaction Result")," to the point of sale in case it becomes unreachable (network issue or other).\nFor the first 100 seconds after a transaction is completed, a background thread will attempt to deliver the result every 5 seconds. If the point of sale is still unreachable after the first 100 seconds, the retry loop turns into an exponential increment to the power of 2 (8s-16s-32s etc\u2026).\nThe recovery loop is reinitialized every time the Handpoint application is restarted.The ",(0,r.kt)("a",{parentName:"p",href:"/windows/Windows%20SDK%203.2.4/windowobjects#14"},"Transaction Result")," received through the transaction recovery loop will have the recoveredTransaction field set to true."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important information: The point of sale must be successfully connected to a terminal in order to receive the pending transactions.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/windows/Windows%20SDK%203.2.4/windowsevents#11"},(0,r.kt)("em",{parentName:"a"},"Transaction Result Ready Event")))),(0,r.kt)("p",null,"Event containing the pending ",(0,r.kt)("a",{parentName:"p",href:"/windows/Windows%20SDK%203.2.4/windowobjects#14"},"Transaction Result"),"."),(0,r.kt)("h2",{id:"13"},"Device discovery finished"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"deviceDiscoveryFinished")),(0,r.kt)("p",null,"The deviceDiscoveryFinished event gets called when the payment terminal search has finished, it returns a list of devices."),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"device")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/windows/Windows%20SDK%203.2.4/windowobjects#2"},(0,r.kt)("em",{parentName:"a"},"Device"))),(0,r.kt)("td",{parentName:"tr",align:null},"The payment terminal invoking the event.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"//Receiving a list of connectable devices\nList<Device> myListOfDevices = new List<Device>();\npublic void deviceDiscoveryFinished(List<Device> devices)\n{\n    foreach(Device device in devices)\n    {\n        myListOfDevices.Add(device);\n    }\n}\n")),(0,r.kt)("h2",{id:"5"},"Signature required"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SignatureRequired")," ",(0,r.kt)("span",{class:"badge badge--info"},"Method")),(0,r.kt)("p",null,"The SignatureRequired event gets called when the card issuer requires a signature. This event is only required for an Hilite integration, PAX and Telpo terminals automatically prompt for signature capture on the payment terminal."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"request")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/windows/Windows%20SDK%203.2.4/windowobjects#17"},(0,r.kt)("em",{parentName:"a"},"SignatureRequest"))),(0,r.kt)("td",{parentName:"tr",align:null},"Holds the signature request object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"device")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/windows/Windows%20SDK%203.2.4/windowobjects#2"},(0,r.kt)("em",{parentName:"a"},"Device"))),(0,r.kt)("td",{parentName:"tr",align:null},"The payment terminal invoking the event.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"//Receiving a SignatureRequest from the SDK.\npublic void SignatureRequired(SignatureRequest signatureRequest, Device device)\n{\n    //You might want to print out the receipt or ask the customer to sign the receipt on your device\n    DisplayReceiptInUI(signatureRequest.MerchantReceipt)\n    //If you accept the signature\n    api.SignatureResult(true);\n}\n")),(0,r.kt)("h2",{id:"6"},"End of transaction"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"EndOfTransaction")," ",(0,r.kt)("span",{class:"badge badge--info"},"Method")),(0,r.kt)("p",null,"The EndOfTransaction event gets called at the end of each transaction and has two parameters, result and device."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"result")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/windows/Windows%20SDK%203.2.4/windowobjects#14"},(0,r.kt)("em",{parentName:"a"},"TransactionResult"))),(0,r.kt)("td",{parentName:"tr",align:null},"Holds the result and receipts for the transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"device")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/windows/Windows%20SDK%203.2.4/windowobjects#2"},(0,r.kt)("em",{parentName:"a"},"Device"))),(0,r.kt)("td",{parentName:"tr",align:null},"The payment terminal invoking the event.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"//Receiving a TransactionResult from the SDK.\npublic void EndOfTransaction(TransactionResult transactionResult, Device device)\n{\n    //You might want to display this information in the UI\n    postTransactionResultToUI(transactionResult);\n}\n")),(0,r.kt)("h2",{id:"7"},"Connection status changed"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ConnectionStatusChanged")),(0,r.kt)("p",null,"The ConnectionStatusChanged event gets called when the state of a payment terminal connection changes."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"status")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/windows/Windows%20SDK%203.2.4/windowobjects#18"},(0,r.kt)("em",{parentName:"a"},"ConnectionStatus"))),(0,r.kt)("td",{parentName:"tr",align:null},"An enum containing the status code for the connection.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"device")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/windows/Windows%20SDK%203.2.4/windowobjects#2"},(0,r.kt)("em",{parentName:"a"},"Device"))),(0,r.kt)("td",{parentName:"tr",align:null},"The payment terminal invoking the event.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"//Receiving a new ConnectionStatus from the SDK\npublic void ConnectionStatusChanged(ConnectionStatus connectionStatus, Device device)\n{\n    //You might want to display this information in the UI\n    postNewStatusToUI(connectionStatus);\n}\n")),(0,r.kt)("h2",{id:"4"},"Current transaction status"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CurrentTransactionStatus")," ",(0,r.kt)("span",{class:"badge badge--info"},"Method")),(0,r.kt)("p",null,"The currentTransactionStatus event gets called when the state of an ongoing transaction changes."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"statusInfo")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/windows/Windows%20SDK%203.2.4/windowobjects#statusInfo"},(0,r.kt)("em",{parentName:"a"},"StatusInfo"))),(0,r.kt)("td",{parentName:"tr",align:null},"An object containing information about the current transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"device")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/windows/Windows%20SDK%203.2.4/windowobjects#2"},(0,r.kt)("em",{parentName:"a"},"Device"))),(0,r.kt)("td",{parentName:"tr",align:null},"The payment terminal invoking the event.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"//Receiving a transaction status from the SDK.\npublic void currentTransactionStatus(StatusInfo statusInfo, Device device)\n{\n    //You might want to display some of this information in the UI\n    DisplayTransactionStatusInUI(statusInfo)\n}\n")),(0,r.kt)("h2",{id:"message-logged"},"Message logged"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"OnMessageLogged")," ",(0,r.kt)("span",{class:"badge badge--info"},"Method")),(0,r.kt)("p",null,"The OnMessageLogged event gets called for each and every message logged by the SDK. This function is only intended for debugging."),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"logLevel")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/windows/Windows%20SDK%203.2.4/windowobjects#9"},(0,r.kt)("em",{parentName:"a"},"LogLevel"))),(0,r.kt)("td",{parentName:"tr",align:null},"An enum containing the log level.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"message")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"A String containing the current log message.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"//Receiving a log from the SDK\npublic void OnMessageLogged(LogLevel logLevel, String message)\n{\n    //You do not want to display this information in the UI\n    Debug.WriteLine(message);\n}\n")),(0,r.kt)("h2",{id:"WinDeviceLogsReady"},"Device Logs ready"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DeviceLogsReady")," ",(0,r.kt)("span",{class:"badge badge--info"},"Method")),(0,r.kt)("p",null,"The DeviceLogsReady event gets called when the payment terminal logs are ready to be delivered (in response to a request to getDeviceLogs()). This Event is useful if case of a communication error between the payment terminal and the API (e.g : Bluetooth communication lost). After reconnecting, you can then fetch the card reader logs to the API."),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"logs")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"String containing the current log.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"device")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/windows/Windows%20SDK%203.2.4/windowobjects#2"},(0,r.kt)("em",{parentName:"a"},"Device"))),(0,r.kt)("td",{parentName:"tr",align:null},"The payment terminal invoking the event.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"//Receiving a log from the device\npublic void DeviceLogsReady(string logs, Device device)\n{\n    //You might want to save this information\n    WriteLogsToDisk(logs);\n}\n")),(0,r.kt)("h2",{id:"pending-transaction-result"},"Pending transaction result"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PendingTransactionResult")," ",(0,r.kt)("span",{class:"badge badge--info"},"Method")),(0,r.kt)("p",null,"In case of a communication failure between the payment terminal and your application a TransactionResult might have not been delivered to the SDK. This event is invoked when the device has a pending TransactionResult. This event might be invoked when reconnecting to a device after a communication failure during a transaction. This event will not be called if HapiManager.Settings.AutoRecoverTransactionResult is set to true."),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"device")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/windows/Windows%20SDK%203.2.4/windowobjects#2"},(0,r.kt)("em",{parentName:"a"},"Device"))),(0,r.kt)("td",{parentName:"tr",align:null},"The payment terminal invoking the event.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"@Override\npublic void PendingTransactionResult(Device device){\n    //Here you might want to call api.GetPendingTransaction(); to receive the TransactionResult\n}\n")),(0,r.kt)("h2",{id:"11"},"Transaction result ready"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TransactionResultReady")," ",(0,r.kt)("span",{class:"badge badge--info"},"Method")),(0,r.kt)("p",null,"In case of a communication failure between the device and your application a TransactionResult might have not been delivered to the SDJ. This event will be invoked after using hapi.GetPendingTransaction();. When there is no pending transaction the TransactionResult will contain default/error fields and no receipts. This event is called if HapiManager.Settings.AutoRecoverTransactionResult is set to true."),(0,r.kt)("h4",{id:"parameters-8"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"result")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/windows/Windows%20SDK%203.2.4/windowobjects#14"},(0,r.kt)("em",{parentName:"a"},"TransactionResult"))),(0,r.kt)("td",{parentName:"tr",align:null},"Holds the results for the transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"device")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/windows/Windows%20SDK%203.2.4/windowobjects#2"},(0,r.kt)("em",{parentName:"a"},"Device"))),(0,r.kt)("td",{parentName:"tr",align:null},"The payment terminal invoking the event.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"@Override\npublic void TransactionResultReady(TransactionResult transactionResult, Device device){\n    //Here you might want to do stuff to the transactionResult\n}\n")))}c.isMDXComponent=!0}}]);