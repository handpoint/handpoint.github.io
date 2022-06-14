"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7925],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2040:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:5,id:"iosintegration"},s="Integration Guide",c={unversionedId:"iosintegration",id:"version-iOS SDK 4.0.1/iosintegration",title:"Integration Guide",description:"The SDK supports the following connection methods:",source:"@site/ios_versioned_docs/version-iOS SDK 4.0.1/iosintegration.md",sourceDirName:".",slug:"/iosintegration",permalink:"/ios/iosintegration",draft:!1,tags:[],version:"iOS SDK 4.0.1",sidebarPosition:5,frontMatter:{sidebar_position:5,id:"iosintegration"},sidebar:"version-iOS SDK 4.0.1/tutorialSidebar",previous:{title:"SDK Installation",permalink:"/ios/iosinstallation"},next:{title:"Integration Example",permalink:"/ios/iossdkprocessing"}},p={},d=[{value:"Files in iOS SDK",id:"filesiniOSSDK",level:2},{value:"If you&#39;re using the library/Cocoapods:",id:"if-youre-using-the-librarycocoapods",level:3},{value:"If you&#39;re using the framework/Carthage:",id:"if-youre-using-the-frameworkcarthage",level:3},{value:"Development settings for the SDK",id:"development-settings-for-the-sdk",level:2},{value:"Usage summary",id:"usage-summary",level:2},{value:"Usage details",id:"usage-details",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"integration-guide"},"Integration Guide"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The SDK supports the following connection methods:")," "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#filesiniOSSDK"},"Bluetooth (HiLite)"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#filesiniOSSDK"},"Lightning (HiPro)")))),(0,i.kt)("h2",{id:"filesiniOSSDK"},"Files in iOS SDK"),(0,i.kt)("h3",{id:"if-youre-using-the-librarycocoapods"},"If you're using the library/Cocoapods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"HandpointAll.h"),": #import this header file into your classes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"libheft.a"),": The SDK library.")),(0,i.kt)("h3",{id:"if-youre-using-the-frameworkcarthage"},"If you're using the framework/Carthage:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"}," HandpointSDK.h"),": #import this header file into your classes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"HandpointSDK.framework"),": The SDK library.")),(0,i.kt)("p",null,"The SDK also includes a simulator, a library configured to simulate a payment terminal - intended for early development of an user interface. To use it, just link the libheft.a file in the HeftSimulatorLibrary folder, instead of the actual SDK library."),(0,i.kt)("h2",{id:"development-settings-for-the-sdk"},"Development settings for the SDK"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Dependencies"),":The Heft library depends on the",(0,i.kt)("inlineCode",{parentName:"p"}," ExternalAccessory")," and ",(0,i.kt)("inlineCode",{parentName:"p"}," libc++.dylib")," frameworks included with the iOS SDK. These frameworks and the ",(0,i.kt)("strong",{parentName:"p"},"libheft.a")," SDK library itself need to be linked to your project for the Handpoint interface to work properly.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Communication protocol"),": Your application needs to support the card reader communication protocol. For this reason, the ",(0,i.kt)("inlineCode",{parentName:"p"},"com.datecs.pinpad")," string needs to be added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Supported external accessory protocols")," in the ",(0,i.kt)("strong",{parentName:"p"},".plist file"),":"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"    <key>UISupportedExternalAccessoryProtocols</key>\n    <array>\n        <string>com.datecs.pinpad</string>\n    </array>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Background mode support"),': Your application needs to support connection to external devices when in the background. For this reason, in the "Capabilities" section of the project settings, the ',(0,i.kt)("strong",{parentName:"li"},"Background Modes")," profile needs to be ON, and the ",(0,i.kt)("inlineCode",{parentName:"li"},"External accessory communication ")," option must be checked. This is equivalent to adding the following entry in the .plist file:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"    <key>UIBackgroundModes</key>\n    <array>\n        <string>external-accessory</string>\n    </array>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"C++ linker flag"),": A part of the library is written in c++ therefore the ",(0,i.kt)("strong",{parentName:"li"},"-lc++ linker flag"),' needs to be set. Add it under "Other Linker Flags" under the "Linking" section of your projects settings "Build Settings" tab.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Other settings"),': To prevent the warning "file was built for archive which is not the architecture being linked (armv7s)", ',(0,i.kt)("strong",{parentName:"li"},"set Build Active Architecture Only")," to YES.")),(0,i.kt)("h2",{id:"usage-summary"},"Usage summary"),(0,i.kt)("p",null,"Any application using the Handpoint SDK should follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Define a class that implements the",(0,i.kt)("strong",{parentName:"li"}," HeftDiscoveryDelegate "),"protocol.\nThis class defines the behavior of the app when discovery related events are received from the SDK."),(0,i.kt)("li",{parentName:"ol"},"Define a class that implements the ",(0,i.kt)("strong",{parentName:"li"},"HeftStatusReportDelegate")," protocol (it can be the same as above).\nThis class defines the behavior of the app when connection and transaction related events are received from the SDK"),(0,i.kt)("li",{parentName:"ol"},"Get a reference to the HeftManager singleton and assign your HeftDiscoveryDelegate instance as delegate."),(0,i.kt)("li",{parentName:"ol"},"If device is available through BT connection, start the discovery process by calling the",(0,i.kt)("strong",{parentName:"li"}," startDiscovery")," function of the HeftManager and recover a list of the discovered devices by calling the ",(0,i.kt)("strong",{parentName:"li"},"connectedCardReaders "),"function of the HeftManager."),(0,i.kt)("li",{parentName:"ol"},"If device is using a Lightning connector (HiPro devices), recover the device by directly calling the ",(0,i.kt)("strong",{parentName:"li"},"connectedCardReaders")," function of the HeftManager."),(0,i.kt)("li",{parentName:"ol"},"Connect to a device by calling the ",(0,i.kt)("strong",{parentName:"li"},"clientForDevice")," function of the HeftManager."),(0,i.kt)("li",{parentName:"ol"},"If connection is successful, the ",(0,i.kt)("strong",{parentName:"li"},"didConnect")," function of the HeftStatusReportDelegate instance will be invoked."),(0,i.kt)("li",{parentName:"ol"},"From this point, start processing transactions and have fun!")),(0,i.kt)("h2",{id:"usage-details"},"Usage details"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Define a class that implements the ",(0,i.kt)("strong",{parentName:"li"}," HeftDiscoveryDelegate "),"protocol.\nThis class will define the behavior of the application when discovery related events are received from the SDK.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objectivec"},"    @interface MyDiscoveryDelegate () <HeftDiscoveryDelegate>\n    @implementation MyDiscoveryDelegate\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Define a class that implements the",(0,i.kt)("strong",{parentName:"li"}," HeftStatusReportDelegate "),"protocol (it can be the same as above).\nThis class will define the behavior of the application when connection and transaction related events are received from the SDK.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objectivec"},"    @interface MyStatusReportDelegate () <HeftStatusReportDelegate>\n    @implementation MyStatusReportDelegate\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Get a reference to the HeftManager singleton in SDK by calling the ",(0,i.kt)("strong",{parentName:"li"},"sharedManager")," class method.\nAssign your HeftDiscoveryDelegate instance as delegate of the manager.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objectivec"},"    MyDiscoveryDelegate* myDiscoveryDelegate = [[alloc MyDiscoveryDelegate] init];\n    HeftManager* manager = [HeftManager sharedManager];\n    manager.delegate = myDiscoveryDelegate;\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"If device is available through BT connection, start the discovery process by calling the ",(0,i.kt)("strong",{parentName:"li"},"startDiscovery")," function of the HeftManager.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objectivec"},"    [manager startDiscovery];\n")),(0,i.kt)("p",null,"When a device is selected by the user in the \u201cSelect device\u201d popup window, the ",(0,i.kt)("strong",{parentName:"p"},"didFindAccessoryDevice")," function of the HeftDiscoveryDelegate is invoked."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objectivec"},'    - (void)didFindAccessoryDevice:(HeftRemoteDevice*)newDevice\n    {\n        NSLog(@"Found new device");\n        //Connect to found device or store it for later\n    } \n')),(0,i.kt)("p",null,"When the discovery process is finished, the ",(0,i.kt)("strong",{parentName:"p"},"didDiscoverFinished")," function of the HeftDiscoveryDelegate instance will be invoked. Recover a list of all the discovered devices by calling the ",(0,i.kt)("strong",{parentName:"p"},"connectedCardReaders")," function of the HeftManager."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objectivec"},"    - (void)didDiscoverFinished\n    {\n        NSMutableDictionary *discoveredDevices = [self.manager connectedCardReaders];\n    }\n")),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"If device is using a Lightning connection (HiPro devices), skip the previous step and recover the device by directly calling the ",(0,i.kt)("strong",{parentName:"li"},"connectedCardReaders")," function of the HeftManager.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objectivec"},"HeftRemoteDevice *lightningDevice = [[self.manager connectedCardReaders] firstObject];\n")),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Connect to a device by calling the ",(0,i.kt)("strong",{parentName:"li"},"clientForDevice")," function of the HeftManager.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Expected parameters of this function are:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A discovered device (HeftRemoteDevice object).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A shared secret. The shared secret is a unique identifier. It is a used to link a merchant with his readers. Each one of your merchants will be assigned a different shared secret so it needs to be a configurable value in your application or backend. If you received a development kit with a card reader, our support team probably sent you a shared secret via email already.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A HeftStatusReportDelegate instance, which will be notified of all the events related with the device."))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objectivec"},'    // Declare the shared secret (below SS is an example, please put the one sent by our support team)\n    NSString *sharedSecret =@"0102030405060708091011121314151617181920212223242526272829303132";\n    // Connect to reader\n    [manager clientForDevice:device\n            sharedSecret:mySharedSecret\n            delegate:myStatusReportDelegate];\n')),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"If connection is successful, the ",(0,i.kt)("strong",{parentName:"li"},"didConnect")," function of the HeftStatusReportDelegate instance will be invoked. Function receives as parameter a HeftClient object, whose reference must be stored since it is the communication bridge to the device we have connected to.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objectivec"},"    - (void)didConnect:(id <HeftClient>)client\n    {\n        self.heftClient = client;\n    }\n")),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"Once connected to the card reader, transactions can be started through the HeftClient object. For example, the next code starts a sale of 100 GBP:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objectivec"},'[self.heftClient saleWithAmount:100 currency:@"GBP" cardholder:YES];\n')),(0,i.kt)("ol",{start:9},(0,i.kt)("li",{parentName:"ol"},"When a transaction has been initiated (f.ex saleWithAmount), the HeftClient alerts the HeftStatusReportDelegate object by invoking ",(0,i.kt)("strong",{parentName:"li"},"responseStatus")," during the process and ",(0,i.kt)("strong",{parentName:"li"},"responceFinanceStatus")," when the process has finished.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objectivec"},'    - (void)responseStatus:(id<ResponseInfo>)info\n    {\n        NSLog(@"responseStatus:");\n        NSLog(info.status);\n        NSLog(info.xml.description);\n    }\n    \n    - (void)responseFinanceStatus:(id<FinanceResponseInfo>)info\n    {\n        NSLog(@"responseFinanceStatus:");\n        NSLog(info.status);\n        NSLog(info.customerReceipt);\n        NSLog(info.xml.description);\n    }\n')),(0,i.kt)("ol",{start:10},(0,i.kt)("li",{parentName:"ol"},"In case you are using the ",(0,i.kt)("strong",{parentName:"li"},"SDK simulator"),", the behavior changes according to the amount of the transaction:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Amount")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Behavior")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1000"),(0,i.kt)("td",{parentName:"tr",align:null},"Declined transaction")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2000"),(0,i.kt)("td",{parentName:"tr",align:null},"User Cancelled")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3000"),(0,i.kt)("td",{parentName:"tr",align:null},"Signature Requested")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Other  amount"),(0,i.kt)("td",{parentName:"tr",align:null},"Approved transaction")))))}m.isMDXComponent=!0}}]);