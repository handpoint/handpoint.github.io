"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3811],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||l;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1739:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={sidebar_position:8,id:"iosdevicemanagement"},s="Device management",p={unversionedId:"iosdevicemanagement",id:"version-iOS SDK 4.0.0/iosdevicemanagement",title:"Device management",description:"Shared Manager",source:"@site/ios_versioned_docs/version-iOS SDK 4.0.0/iosdevicemanagement.md",sourceDirName:".",slug:"/iosdevicemanagement",permalink:"/ios/iOS SDK 4.0.0/iosdevicemanagement",tags:[],version:"iOS SDK 4.0.0",sidebarPosition:8,frontMatter:{sidebar_position:8,id:"iosdevicemanagement"},sidebar:"version-iOS SDK 4.0.0/tutorialSidebar",previous:{title:"Transactions",permalink:"/ios/iOS SDK 4.0.0/iostransactions"},next:{title:"Events",permalink:"/ios/iOS SDK 4.0.0/iosevents"}},d={},c=[{value:"Shared Manager",id:"11",level:2},{value:"Client for device (NSString)",id:"12",level:2},{value:"Start Discovery",id:"32",level:2},{value:"Set log level",id:"33",level:2},{value:"Fetch logs",id:"34",level:2},{value:"Reset logs",id:"35",level:2},{value:"Enable scanner",id:"36",level:2},{value:"Disable scanner",id:"disable-scanner",level:2},{value:"financeInit",id:"47",level:2},{value:"Get SDK version",id:"get-sdk-version",level:2},{value:"Get SDK build number",id:"get-sdk-build-number",level:2}],m={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"device-management"},"Device management"),(0,l.kt)("h2",{id:"11"},"Shared Manager"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sharedManager")),(0,l.kt)("p",null,"Provides access to the heftManager. The heft manager is used for discovering devices and creating a HeftClient with a connection to selected device."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"//SharedManager\n//Provides access to the heftManager\n\n//Create an instance of the shared manager at set it's delegate\nHeftManager* heftManager = [HeftManager sharedManager];\nheftManager.delegate = self;\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/ios/iOS%20SDK%204.0.0/iosobjects#19"},(0,l.kt)("strong",{parentName:"a"},"HeftManager"))),(0,l.kt)("td",{parentName:"tr",align:null},"The heftManager instance")))),(0,l.kt)("h2",{id:"12"},"Client for device (NSString)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"clientForDevice")),(0,l.kt)("p",null,"Creates a HeftClient object. If a connection is successful the HeftClient object is returned in the didConnect event. All transactions are done using the heftClient."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"device")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"NSInteger")),(0,l.kt)("td",{parentName:"tr",align:null},"The device to connect to.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"sharedSecret")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"NSString")),(0,l.kt)("td",{parentName:"tr",align:null},"Shared secret only known by the merchant and Handpoint.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"aDelegate")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"BOOL")),(0,l.kt)("td",{parentName:"tr",align:null},"The HeftStatusReportDelegate for the HeftClient to report to.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},'//clientForDevice:sharedSecretString:delegate:\n//Creates a HeftClient object(connection to device)\nNSString* sharedSecret = @"0102030405060708091011121314151617181920212223242526272829303132";\n-(void)connectToFirstCardReaderWith:(NSString*)sharedSecret;\n{\n    //Try to connect to first device in devices array\n    [heftManager clientForDevice:[[heftManager devicesCopy] objectAtIndex:0] sharedSecretString:sharedSecret delegate:self];\n    //Client calls the didConnect delegate function if successful \n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Events invoked")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ios/iOS%20SDK%204.0.0/iosevents#20"},(0,l.kt)("strong",{parentName:"a"},"didConnect"))),(0,l.kt)("p",null,"Called when a connection to specified device was created."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"YES if operation starts successfully")))),(0,l.kt)("h2",{id:"32"},"Start Discovery"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"startDiscovery")),(0,l.kt)("p",null,"Displays a list of available accessory devices in a modal window."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"//startDiscovery\n//Starts the BT discovery process\n-(void)startDiscovery; \n{\n    [heftManager startDiscovery];\n    //Start search activity indicator or other desired functions\n}\n")),(0,l.kt)("h2",{id:"33"},"Set log level"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"logSetLevel")),(0,l.kt)("p",null,"Sets the log level of the card reader. There are for levels of logging for the device: none, info, full, debug. Setting the log level means that relevant information concerning the application operation will be stored."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"level")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/ios/iOS%20SDK%204.0.0/iosobjects#13"},"eLogLevel")),(0,l.kt)("td",{parentName:"tr",align:null},"eLogLevel available types: eLogNone, eLogInfo, eLogFull, eLogDebug")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"//logSetLevel:\n//Sets the log level of the card reader.\n-(void)disableCardReaderLogs\n{\n    [heftClient logSetLevel:eLogNone];\n}\n-(void)enableCardReaderDebugLogs\n{\n    [heftClient logSetLevel:eLogDebug];\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"This method always returns YES")))),(0,l.kt)("h2",{id:"34"},"Fetch logs"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"logGetInfo")),(0,l.kt)("p",null,"Retrieves the logging info. Returns them in the responseLogInfo event."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"//logGetInfo\n//Retrieves the logging info.\n-(void)getLogsFromCardReader\n{\n    [heftClient logGetInfo];\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"This method always returns YES")))),(0,l.kt)("h2",{id:"35"},"Reset logs"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"logReset")),(0,l.kt)("p",null,"Clears the logging information stored so far."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"//logReset\n//Clears the logging information stored so far\n-(void)clearLogs\n{\n    [heftClient logReset];\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"This method always returns YES")))),(0,l.kt)("h2",{id:"36"},"Enable scanner"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"enableScanner")),(0,l.kt)("p",null,"Places the card reader in a scan mode. Only if the card reader supports it. To cancel/stop scan mode call the cancel method of the heft client."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"multiScan"),"  ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes ","[default]"," to activate multiScan mode - No to activate singleScan mode. Multi-scan mode allows the user to scan until scan operation is canceled or timeout occurs, single-scan mode is active until one scan has occurred then it disables the scan mode.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"buttonMode"),"  ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes ","[default]"," if buttonMode is on - No otherwise. If button mode is on then the operator needs to press the scan buttons to activate the scanner(during scan mode).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"timeoutSeconds"),"  ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"NSInteger")),(0,l.kt)("td",{parentName:"tr",align:null},"0 ","[default]"," - card reader will determine when scanning should time out. x - the scanner will time out if x seconds of inactivity occur.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"//enableScanner:multiScan:buttonMode:timeoutSeconds\n//Places the card reader in a scan only mode. \n//To cancel/stop scan mode call cancel function.\n-(IBAction)startScan \n{\n    [heftClient enableScanner];\n}\n-(IBAction)startMultiScan\n{\n    [heftClient enableScannerWithMultiScan:YES];\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Events invoked")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ios/iOS%20SDK%204.0.0/iosevents#41"},(0,l.kt)("strong",{parentName:"a"},"responseScannerEvent"))),(0,l.kt)("p",null,"Called to inform that a scan has been performed, several calls can be expected. Several calls to this method happen after a scan action has been performed to inform about scan information operation. The info object contains scanCode, status and a dictionary (xml)."),(0,l.kt)("h2",{id:"disable-scanner"},"Disable scanner"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"disableScanner")),(0,l.kt)("p",null,"Disables the scanner if possible"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"//disableScanner\n//Disable the scanner\n    -(IBAction)disableScanner\n{\n[heftClient disableScanner];\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Events invoked")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ios/iOS%20SDK%204.0.0/iosevents#42"},(0,l.kt)("strong",{parentName:"a"},"responseScannerDisabled"))),(0,l.kt)("p",null,"Called to inform that a scan has been performed, several calls can be expected. Several calls to this method happen after a scan action has been performed to inform about scan information operation. The info object contains scanCode, status and a dictionary (xml)."),(0,l.kt)("h2",{id:"47"},"financeInit"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"financeInit")),(0,l.kt)("p",null,"The update operation checks for update to the card reader and initiates an update if needed. The update can either be a software update or a configuration update."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"//financeInit\n//Initializes the card reader and updates config.\n-(IBAction)updateCardReader\n{\n    [heftClient financeInit];\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Events invoked")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ios/iOS%20SDK%204.0.0/iosevents#14"},(0,l.kt)("strong",{parentName:"a"},"responseStatus"))),(0,l.kt)("p",null,"Invoked while during transaction with different statuses from card reader"),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ios/iOS%20SDK%204.0.0/iosevents#15"},(0,l.kt)("strong",{parentName:"a"},"responseError"))),(0,l.kt)("p",null,"Invoked to inform when an error response happens."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ios/iOS%20SDK%204.0.0/iosevents#16"},(0,l.kt)("strong",{parentName:"a"},"responseFinanceStatus"))),(0,l.kt)("p",null,"Invoked when the card reader finishes processing the transaction"),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"This method always returns YES")))),(0,l.kt)("h2",{id:"get-sdk-version"},"Get SDK version"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"getSDKVersion")),(0,l.kt)("p",null,"Returns the current SDK version number in string format"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},'//getSDKVersion\n//Log SDK version number\n    NSLOG(@"SDK version: %@", [heftManager getSDKVersion];\n')),(0,l.kt)("h2",{id:"get-sdk-build-number"},"Get SDK build number"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"getSDKBuildNumber")),(0,l.kt)("p",null,"Returns the current SDK build number in string format"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},'//getSDKBuildNumber\n//Log SDK build number\n    NSLOG(@"SDK build: %@", [heftManager getSDKBuildNumber];\n')))}u.isMDXComponent=!0}}]);