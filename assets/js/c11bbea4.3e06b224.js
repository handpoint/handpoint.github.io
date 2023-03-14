"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6600],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=d(n),c=r,u=k["".concat(s,".").concat(c)]||k[c]||m[c]||i;return n?a.createElement(u,l(l({ref:t},p),{},{components:n})):a.createElement(u,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},94853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:6,id:"windowsdevicemanagement"},l="Terminal Management",o={unversionedId:"windowsdevicemanagement",id:"version-Windows SDK 3.3.0/windowsdevicemanagement",title:"Terminal Management",description:"Connect",source:"@site/windows_versioned_docs/version-Windows SDK 3.3.0/windowsdevicemanagement.md",sourceDirName:".",slug:"/windowsdevicemanagement",permalink:"/windows/Windows SDK 3.3.0/windowsdevicemanagement",draft:!1,tags:[],version:"Windows SDK 3.3.0",sidebarPosition:6,frontMatter:{sidebar_position:6,id:"windowsdevicemanagement"},sidebar:"tutorialSidebar",previous:{title:"Transaction Types",permalink:"/windows/Windows SDK 3.3.0/windowstransactions"},next:{title:"Events Subscribers",permalink:"/windows/Windows SDK 3.3.0/windowseventssubscribers"}},s={},d=[{value:"Connect",id:"connect",level:2},{value:"Parameters",id:"parameters",level:4},{value:"Events invoked",id:"events-invoked",level:4},{value:"Disconnect",id:"disconnect",level:2},{value:"Parameters",id:"parameters-1",level:4},{value:"Events invoked",id:"events-invoked-1",level:4},{value:"Set shared secret",id:"set-shared-secret",level:2},{value:"Parameters",id:"parameters-2",level:4},{value:"Events invoked",id:"events-invoked-2",level:4},{value:"Set parameter",id:"set-parameter",level:2},{value:"Parameters",id:"parameters-3",level:4},{value:"Events invoked",id:"events-invoked-3",level:4},{value:"Set logging level",id:"set-logging-level",level:2},{value:"Parameters",id:"parameters-4",level:4},{value:"Events invoked",id:"events-invoked-4",level:4},{value:"Request device logs",id:"request-device-logs",level:2},{value:"Parameters",id:"parameters-5",level:4},{value:"Events invoked",id:"events-invoked-5",level:4},{value:"Request pending transaction results",id:"request-pending-transaction-results",level:2},{value:"Parameters",id:"parameters-6",level:4},{value:"Events invoked",id:"events-invoked-6",level:4},{value:"Update device",id:"update-device",level:2},{value:"Parameters",id:"parameters-7",level:4},{value:"Events invoked",id:"events-invoked-7",level:4},{value:"List Devices (search)",id:"list-devices-search",level:2},{value:"Parameters",id:"parameters-8",level:4},{value:"Events invoked",id:"events-invoked-8",level:4},{value:"Start monitoring connections",id:"start-monitoring-connections",level:2},{value:"Events invoked",id:"events-invoked-9",level:4},{value:"Stop monitoring connections",id:"stop-monitoring-connections",level:2},{value:"Events invoked",id:"events-invoked-10",level:4}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"terminal-management"},"Terminal Management"),(0,r.kt)("h2",{id:"connect"},"Connect"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Connect")," ",(0,r.kt)("span",{class:"badge badge--info"},"Method")),(0,r.kt)("p",null,"Configures the device as the preferred device and tries to connect to it. Everytime a new connection is started the SDK will make 3 attempts to re-establish the connection. If those attempts fail, the connection is considered dead."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"device")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/windows/Windows%20SDK%203.3.0/windowobjects#2"},(0,r.kt)("em",{parentName:"a"},"Device"))),(0,r.kt)("td",{parentName:"tr",align:null},"This parameter specifies to the sdk which payment terminal should be used.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'//Connect to a CLOUD device (PAX/Telpo)\nDevice device = new Device("CloudDevice", "9822032398-PAXA920", "", ConnectionMethod.Cloud);\n// The address is the composition of the serial number and model ot the target device.\n//Example for a PAX A920 device: serial_number - model  -> 9822032398-PAXA920\napi.UseDevice(device);\n\n//Connect to a BLUETOOTH device (HiLite)\nDevice device = new Device("CardReader7", "08:00:69:02:01:FC", "1", ConnectionMethod.BLUETOOTH);\napi.UseDevice(device);\n')),(0,r.kt)("h4",{id:"events-invoked"},"Events invoked"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/windows/Windows%20SDK%203.3.0/windowsevents#7"},(0,r.kt)("em",{parentName:"a"},"ConnectionStatusChanged")))," "),(0,r.kt)("p",null,"Each time the card reader state changes (ex : going from Connected to Disconnected) the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/windows/Windows%20SDK%203.3.0/windowsevents#7"},(0,r.kt)("em",{parentName:"a"},"ConnectionStatusChanged")))," event is called. It causes the connection manager to invoke this event with the appropriate information."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")," if the operation was successful.")))),(0,r.kt)("h2",{id:"disconnect"},"Disconnect"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Disconnect")," ",(0,r.kt)("span",{class:"badge badge--info"},"Method")),(0,r.kt)("p",null,"Disconnect will stop the active connection (and reconnection process). Please note that the method does NOT ignore the current state of the payment terminal. This means that if a disconnect is attempted during a transaction it will not be successful and the method will return ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". If a transaction is not in progress, the disconnect will take 1-3 seconds to successfully finish and will then return ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"device")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/windows/Windows%20SDK%203.3.0/windowobjects#2"},(0,r.kt)("em",{parentName:"a"},"Device"))),(0,r.kt)("td",{parentName:"tr",align:null},"This parameter specifies to the sdk which payment terminal should be used. If none is supplied the system will attempt to use a default device, if any.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"//Disconnect from current device\napi.Disconnect();\n")),(0,r.kt)("h4",{id:"events-invoked-1"},"Events invoked"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/windows/Windows%20SDK%203.3.0/windowsevents#7"},(0,r.kt)("em",{parentName:"a"},"ConnectionStatusChanged")))," "),(0,r.kt)("p",null,"Each time the card reader state changes (ex : going from Connected to Disconnected) the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/windows/Windows%20SDK%203.3.0/windowsevents#7"},(0,r.kt)("em",{parentName:"a"},"ConnectionStatusChanged")))," event is called. It causes the connection manager to invoke this event with the appropriate information."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")," if the operation was succesful")))),(0,r.kt)("h2",{id:"set-shared-secret"},"Set shared secret"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SetSharedSecret")," ",(0,r.kt)("span",{class:"badge badge--info"},"Method")),(0,r.kt)("p",null,"Validates your application for this session, thus enabling financial transactions."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sharedSecret")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"The shared secret is a an authentication key provided by Handpoint, it is unique per merchant (not per terminal).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"device")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/windows/Windows%20SDK%203.3.0/windowobjects#2"},(0,r.kt)("em",{parentName:"a"},"Device"))),(0,r.kt)("td",{parentName:"tr",align:null},"This parameter specifies to the sdk which payment terminal should be used. If none is supplied the system will attempt to use a default device, if any.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'//Sets the shared secret\napi.SetSharedSecret("0102030405060708091011121314151617181920212223242526272829303132");\n')),(0,r.kt)("h4",{id:"events-invoked-2"},"Events invoked"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"None")),(0,r.kt)("p",null,"No events invoked."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")," if the operation was successfully sent to the payment terminal.")))),(0,r.kt)("h2",{id:"set-parameter"},"Set parameter"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SetParameter")," ",(0,r.kt)("span",{class:"badge badge--info"},"Method")),(0,r.kt)("p",null,"Allows developers to optionally change several internal parameters of the payment terminal. "),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"param")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/windows/Windows%20SDK%203.3.0/windowobjects#8"},(0,r.kt)("em",{parentName:"a"},"DeviceParameter"))),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the parameter to change.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"New value of the parameter.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"device")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/windows/Windows%20SDK%203.3.0/windowobjects#2"},(0,r.kt)("em",{parentName:"a"},"Device"))),(0,r.kt)("td",{parentName:"tr",align:null},"This parameter specifies to the sdk which payment terminal should be used. If none is supplied the system will attempt to use a default device, if any.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'//Changes the bluetooth name of card reader\napi.SetParameter(DeviceParameter.BluetoothName, "OrangeCardReader");\n')),(0,r.kt)("h4",{id:"events-invoked-3"},"Events invoked"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"None")),(0,r.kt)("p",null,"No events are invoked."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")," if the operation was successfully sent to the payment terminal.")))),(0,r.kt)("h2",{id:"set-logging-level"},"Set logging level"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SetLogLevel")," ",(0,r.kt)("span",{class:"badge badge--info"},"Method")),(0,r.kt)("p",null,"Sets the log level (info, debug etc.) for both the payment terminal and the API."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"level")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/windows/Windows%20SDK%203.3.0/windowobjects#9"},(0,r.kt)("em",{parentName:"a"},"LogLevel"))),(0,r.kt)("td",{parentName:"tr",align:null},"The desired log level. Possible values are ",(0,r.kt)("inlineCode",{parentName:"td"},"LogLevel.None"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"LogLevel.Info"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"LogLevel.Full"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"LogLevel.Debug"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"device")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/windows/Windows%20SDK%203.3.0/windowobjects#2"},(0,r.kt)("em",{parentName:"a"},"Device"))),(0,r.kt)("td",{parentName:"tr",align:null},"This parameter specifies to the sdk which payment terminal should be used. If none is supplied the system will attempt to use a default device, if any.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"//Sets the log level to info\napi.SetLogLevel(LogLevel.info);\n")),(0,r.kt)("h4",{id:"events-invoked-4"},"Events invoked"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"None")),(0,r.kt)("p",null,"No events are invoked."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")," if the operation was successfully sent to the payment terminal.")))),(0,r.kt)("h2",{id:"request-device-logs"},"Request device logs"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GetDeviceLogs")," ",(0,r.kt)("span",{class:"badge badge--info"},"Method")),(0,r.kt)("p",null,"Fetches the logs from the payment terminal and reports them to the ",(0,r.kt)("a",{parentName:"p",href:"/windows/Windows%20SDK%203.3.0/windowsevents#WinDeviceLogsReady"},"DeviceLogsReady")," event."),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"device")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/windows/Windows%20SDK%203.3.0/windowobjects#2"},(0,r.kt)("em",{parentName:"a"},"Device"))),(0,r.kt)("td",{parentName:"tr",align:null},"This parameter specifies to the sdk which payment terminal should be used. If none is supplied the system will attempt to use a default device, if any.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"//Downloads logs from device\napi.GetDeviceLogs();\n")),(0,r.kt)("h4",{id:"events-invoked-5"},"Events invoked"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/windows/Windows%20SDK%203.3.0/windowsevents#WinDeviceLogsReady"},(0,r.kt)("em",{parentName:"a"},"DeviceLogsReady")))),(0,r.kt)("p",null,"Invoked when the SDK has finished downloading logs from the payment terminal."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")," if the operation was successfully sent to the payment terminal.")))),(0,r.kt)("h2",{id:"request-pending-transaction-results"},"Request pending transaction results"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GetPendingTransaction")," ",(0,r.kt)("span",{class:"badge badge--info"},"Method")),(0,r.kt)("p",null,"In the case of a communication failure between the device and the SDK a TransactionResult might have not been delivered to the API. This function fetches a pending TransactionResult (which contains receipts) from the payment terminal, if any. If no TransactionResult was pending a result will be delivered containing default fields. In order to receive only valid TransactionResults this function should only be called when PendingTransactionResult event is invoked or when HapiManager.IsTransactionResultPending() is true. To receive events when a TransactionResult is pending on the device please add the Events.PendingResults listener."),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"device")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/windows/Windows%20SDK%203.3.0/windowobjects#2"},(0,r.kt)("em",{parentName:"a"},"Device"))),(0,r.kt)("td",{parentName:"tr",align:null},"This parameter specifies to the sdk which payment terminal should be used. If none is supplied the system will attempt to use a default device, if any.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"//Fetches a pending TransactionResult from a device\napi.GetPendingTransaction();\n")),(0,r.kt)("h4",{id:"events-invoked-6"},"Events invoked"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/windows/Windows%20SDK%203.3.0/windowsevents#11"},(0,r.kt)("em",{parentName:"a"},"TransactionResultReady")))),(0,r.kt)("p",null,"Invoked when the SDK has finished fetching a TransactionResult from the payment terminal."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")," if the operation was successfully sent to the payment terminal.")))),(0,r.kt)("h2",{id:"update-device"},"Update device"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Update")," ",(0,r.kt)("span",{class:"badge badge--info"},"Method")),(0,r.kt)("p",null,"The update operation checks for available software or configuration update. If an update is pending it will be downloaded and installed by the payment terminal. "),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"device")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/windows/Windows%20SDK%203.3.0/windowobjects#2"},(0,r.kt)("em",{parentName:"a"},"Device"))),(0,r.kt)("td",{parentName:"tr",align:null},"This parameter specifies to the sdk which payment terminal should be used. If none is supplied the system will attempt to use a default device, if any.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"//Check for card reader update\napi.Update();\n")),(0,r.kt)("h4",{id:"events-invoked-7"},"Events invoked"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"None")),(0,r.kt)("p",null,"Information about this process should be available at the device's screen."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")," if the operation was successfully sent to the payment terminal.")))),(0,r.kt)("h2",{id:"list-devices-search"},"List Devices (search)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ListDevices")," ",(0,r.kt)("span",{class:"badge badge--info"},"Method")),(0,r.kt)("p",null,"Starts the search for payment terminals to connect to. "),(0,r.kt)("h4",{id:"parameters-8"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"method")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/windows/Windows%20SDK%203.3.0/windowobjects#12"},(0,r.kt)("em",{parentName:"a"},"ConnectionMethod"))),(0,r.kt)("td",{parentName:"tr",align:null},"The connection type to the payment terminal (Bluetooth or Cloud)")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"//Search for Bluetooth devices\napi.ListDevices(ConnectionMethod.BLUETOOTH);\n\n//Search for Cloud devices\napi.ListDevices(ConnectionMethod.CLOUD);\n")),(0,r.kt)("h4",{id:"events-invoked-8"},"Events invoked"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/windows/Windows%20SDK%203.3.0/windowsevents#13"},(0,r.kt)("em",{parentName:"a"},"deviceDiscoveryFinished")))),(0,r.kt)("p",null,"Returns a list of available payment terminals."),(0,r.kt)("h2",{id:"start-monitoring-connections"},"Start monitoring connections"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"StartMonitoringConnections")," ",(0,r.kt)("span",{class:"badge badge--info"},"Method")),(0,r.kt)("p",null,"Starts a connection monitoring service. The service listens to events sent by the operating system about the connected hardware. If the service notices that a previously connected device suddenly disconnects on the hardware layer it attempts to reconnect to that particular device. Since this is a service it is necessary that the service is turned off before the application ends its life-time. This means that, if the service was running, stopMonitoringConnections() has to be called before the application is exited completely. Note that the service currently only works with USB. In the case of USB the service will only disconnect from the device and when it notices that it has been plugged in again it will connect to it."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"//Starts the connection monitoring service\n//app starts it's life-time\napi.StartMonitoringConnections();\n...\n//app ends its life-time\napi.StopMonitoringConnections();\n")),(0,r.kt)("h4",{id:"events-invoked-9"},"Events invoked"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/windows/Windows%20SDK%203.3.0/windowsevents#7"},(0,r.kt)("em",{parentName:"a"},"ConnectionStatusChanged")))),(0,r.kt)("p",null,"Invoked when the status of the connection with the payment terminal changes. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"None")),(0,r.kt)("td",{parentName:"tr",align:null},"No information is returned.")))),(0,r.kt)("h2",{id:"stop-monitoring-connections"},"Stop monitoring connections"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"StopMonitoringConnections")," ",(0,r.kt)("span",{class:"badge badge--info"},"Method")),(0,r.kt)("p",null,"Stops a connection monitoring service. The service listens to events sent by the operating system about the connected hardware. If the service notices that a previously connected device suddenly disconnects on the hardware layer it attempts to reconnect to that particular device. Since this is a service it is necessary that the service is turned off before the application ends its life-time. This means that, if the service was running, stopMonitoringConnections() has to be called before the application is exited completely. Note that the service currently only works with USB. In the case of USB the service will only disconnect from the device and when it notices that it has been plugged in again it will connect to it."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"//Starts the connection monitoring service\n//app starts it's life-time\napi.StartMonitoringConnections();\n...\n//app ends its life-time\napi.StopMonitoringConnections();\n")),(0,r.kt)("h4",{id:"events-invoked-10"},"Events invoked"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/windows/Windows%20SDK%203.3.0/windowsevents#7"},(0,r.kt)("em",{parentName:"a"},"ConnectionStatusChanged")))),(0,r.kt)("p",null,"Invoked when the status of the connection with the payment terminal changes."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"None")),(0,r.kt)("td",{parentName:"tr",align:null},"No information is returned.")))))}m.isMDXComponent=!0}}]);