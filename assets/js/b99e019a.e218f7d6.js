"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[145],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>v});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),d=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=d(e.components);return i.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=d(t),v=r,p=f["".concat(c,".").concat(v)]||f[v]||u[v]||o;return t?i.createElement(p,a(a({ref:n},l),{},{components:t})):i.createElement(p,a({ref:n},l))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var d=2;d<o;d++)a[d]=t[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1190:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=t(7462),r=(t(7294),t(3905));const o={sidebar_position:6,id:"iossdkprocessing"},a="SDK integration example",s={unversionedId:"iossdkprocessing",id:"version-iOS SDK 4.0.0/iossdkprocessing",title:"SDK integration example",description:"HandpointModule header",source:"@site/ios_versioned_docs/version-iOS SDK 4.0.0/iossdkprocessing.md",sourceDirName:".",slug:"/iossdkprocessing",permalink:"/ios/iOS SDK 4.0.0/iossdkprocessing",draft:!1,tags:[],version:"iOS SDK 4.0.0",sidebarPosition:6,frontMatter:{sidebar_position:6,id:"iossdkprocessing"},sidebar:"version-iOS SDK 4.0.0/tutorialSidebar",previous:{title:"Processing Payments Simulation",permalink:"/ios/iOS SDK 4.0.0/iosprocessing"},next:{title:"Transactions",permalink:"/ios/iOS SDK 4.0.0/iostransactions"}},c={},d=[{value:"HandpointModule header",id:"handpointmodule-header",level:2},{value:"HandpointModule",id:"handpointmodule",level:2}],l={toc:d};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sdk-integration-example"},"SDK integration example"),(0,r.kt)("h2",{id:"handpointmodule-header"},"HandpointModule header"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"HandpointModule.h")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'#import "HandpointAll.h"\n\n@interface HandpointModule : NSObject <HeftDiscoveryDelegate, HeftStatusReportDelegate>\n\n- (instancetype)initWithSharedSecret:(NSString *)sharedSecret;\n\n- (void)saleWithAmount:(NSInteger)amount\n                currency:(NSString *)currency;\n\n- (void)refundWithAmount:(NSInteger)amount\n                currency:(NSString *)currency;\n\n- (void)saleReversalWithAmount:(NSInteger)amount\n                        currency:(NSString *)currency\n            originalTransactionID:(NSString *)originalTransactionID;\n\n- (void)refundReversalWithAmount:(NSInteger)amount\n                        currency:(NSString *)currency\n            originalTransactionID:(NSString *)originalTransactionID;\n\n- (void)connectToAddress:(NSString *)address;\n\n- (void)setLogLevel:(eLogLevel)logLevel;\n\n- (void)getDeviceLogs;\n\n- (void)getPendingTransaction;\n\n- (void)update;\n\n- (void)listDevices;\n\n@end \n')),(0,r.kt)("h2",{id:"handpointmodule"},"HandpointModule"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"HandpointModule.m")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'#import "<Foundation/Foundation.h>"\n#import "HandpointModule.h"\n#import "HeftRemoteDevice+SendableDevice.h"\n#import "SDKEvent.h"\n#import "ConnectionStatus.h"\n#import "Currency.h"\n#import "CDVInvokedUrlCommand+Arguments.h"\n#import "StatusInfo.h"\n#import "TransactionResult.h"\n\ntypedef NS_ENUM(NSInteger, ConnectionStatus)\n{\n    ConnectionStatusNotConfigured,\n    ConnectionStatusConnected,\n    ConnectionStatusConnecting,\n    ConnectionStatusDisconnected,\n    ConnectionStatusDisconnecting,\n    ConnectionStatusInitializing\n};\n\n@interface HandpointModule ()\n\n@property (nonatomic) HeftManager* manager;\n@property (nonatomic, strong) id<HeftClient> api;\n@property (nonatomic) NSString *ssk;\n@property (nonatomic) HeftRemoteDevice* preferredDevice;\n@property (nonatomic) NSString *eventHandlerCallbackId;\n@property (nonatomic) NSMutableDictionary *devices;\n\n@end\n\n@implementation HandpointModule\n\n- (instancetype)initWithSharedSecret:(NSString *)sharedSecret\n{\n    NSLog(@"\\n\\tpluginInitialize");\n    self.manager = [HeftManager sharedManager];\n    self.manager.delegate = self;\n    self.devices = [@{} mutableCopy];\n    \n    [self fillDevicesFromConnectedCardReaders];\n    \n    self.ssk = sharedSecret;\n}\n\n- (void)saleWithAmount:(NSInteger)amount\n                currency:(NSString *)currency\n{\n    BOOL result = [self.api saleWithAmount:amount\n                                    currency:currency\n                                cardholder:YES];\n\n    if (result == false)\n    {\n        //Do something\n    }\n}\n\n- (void)refundWithAmount:(NSInteger)amount\n                currency:(NSString *)currency\n{\n    BOOL result = [self.api refundWithAmount:amount\n                                    currency:currency\n                                    cardholder:YES]\n\n    if (result == false)\n    {\n        //Do something\n    }\n}\n\n- (void)saleReversalWithAmount:(NSInteger)amount\n                        currency:(NSString *)currency\n            originalTransactionID:(NSString *)originalTransactionID\n{\n    BOOL result = [self.api saleVoidWithAmount:amount\n                                        currency:currency\n                                    cardholder:YES\n                                    transaction:originalTransactionID];\n\n    if (result == false)\n    {\n        //Do something\n    }\n}\n\n- (void)refundReversalWithAmount:(NSInteger)amount\n                        currency:(NSString *)currency\n            originalTransactionID:(NSString *)originalTransactionID\n{\n    BOOL result = [self.api refundVoidWithAmount:amount\n                                    currency:currency\n                                cardholder:YES\n                                transaction:originalTransactionID];\n\n    if (result == false)\n    {\n        //Do something\n    }\n}\n\n#pragma mark - Device Management\n\n- (void)connectToAddress:(NSString *)address\n{\n    HeftRemoteDevice *remoteDevice = self.devices[address];\n\n    if (remoteDevice)\n    {\n        BOOL isRemoteDeviceSameAsPreferred = self.preferredDevice &&\n                [self.preferredDevice.address isEqualToString:remoteDevice.address];\n\n        // If we are already connected to this device, update shared secret\n        if (self.api && isRemoteDeviceSameAsPreferred)\n        {\n            // Already connected to device\n        }\n        else\n        {\n            self.preferredDevice = remoteDevice;\n\n            [self.manager clientForDevice:remoteDevice\n                                sharedSecret:self.ssk\n                                    delegate:self];\n        }\n\n        [self connectionStatusChanged:ConnectionStatusConnecting];\n    }\n    else\n    {\n        NSLog(@"Can\'t connect. No device available. Have you searched?");\n    }\n}\n    \n- (void)setLogLevel:(eLogLevel)logLevel\n{\n    [self.api logSetLevel:logLevel];\n}\n\n- (void)getDeviceLogs\n{\n    [self.api logGetInfo];\n}\n\n- (void)getPendingTransaction\n{\n    BOOL success = NO;\n\n    if ([self.api isTransactionResultPending])\n    {\n        success = [self.api retrievePendingTransaction];\n    }\n\n    if (success)\n    {\n        //...\n    }\n    else\n    {\n        //...\n    }\n}\n\n- (void)update\n{\n    [self.api financeInit];\n}\n\n- (void)listDevices\n{\n    NSArray* devices = [self.manager connectedCardReaders];\n\n    /**\n        * A device can have four levels of connection: unpaired, paired,\n        * connected and connected in the SDK.\n        *\n        * Due to the nature of the iOS ExternalAccessory framework,\n        * devices that are already connected at an iOS level will not appear in a normal search,\n        * as they already appear through the "connectedCardReaders" array in the manager\n        * (Yeah, I know)\n        *\n        * So the "if" takes care of differentiating those two cases\n        *\n        * If we have device(s) connected we just go for those, otherwise, search.\n        */\n\n    if(devices.count)\n    {\n        //We have device(s) already connected, we skip the search.\n        for (HeftRemoteDevice *device in devices)\n        {\n            [self addDevice:device];\n        }\n\n        [self didDiscoverFinished];\n    }\n    else\n    {\n        //We search and wait...\n        [self.manager startDiscovery];\n    }\n}\n\n# pragma mark - Callbacks\n    \n- (void)didFindAccessoryDevice:(HeftRemoteDevice*)newDevice\n{\n    [self addDevice:newDevice];\n}\n\n- (void)didLostAccessoryDevice:(HeftRemoteDevice *)oldDevice\n{\n    [self removeDevice:oldDevice];\n    \n    if(self.preferredDevice && self.preferredDevice.address == oldDevice.address)\n    {\n        [self connectionStatusChanged:ConnectionStatusDisconnected];\n        \n        self.preferredDevice = nil;\n    }\n}\n\n- (void)didDiscoverFinished\n{\n    [self fillDevicesFromConnectedCardReaders];\n\n    for (NSString *key in [self.devices allKeys])\n    {\n        HeftRemoteDevice *device = self.devices[key];\n        \n        if ([device.address isEqualToString:<my_saved_mac_address>])\n        {\n            //Do something with the device if it\'s the same one you expect.\n            break;\n        }\n    }\n}\n\n- (void)didConnect:(id <HeftClient>)client\n{\n    if(client)\n    {\n        self.api = client;\n        \n        [self connectionStatusChanged:ConnectionStatusConnected];\n    }\n}\n\n- (void)connectionStatusChanged:(ConnectionStatus)status\n{\n    //Here you get notified of connection status changes\n}\n\n- (NSString *)stringFromConnectionStatus:(ConnectionStatus)status\n{\n    switch(status)\n    {\n        case ConnectionStatusNotConfigured:\n            return @"NotConfigured";\n        case ConnectionStatusConnected:\n            return @"Connected";\n        case ConnectionStatusConnecting:\n            return @"Connecting";\n        case ConnectionStatusDisconnected:\n            return @"Disconnected";\n        case ConnectionStatusDisconnecting:\n            return @"Diconnecting";\n        case ConnectionStatusInitializing:\n            return @"Initializing";\n    }\n}\n\n- (void)responseStatus:(id <ResponseInfo>)info\n{\n    //Here you\'ll get status updates during the transaction\n}\n\n- (void)responseError:(id <ResponseInfo>)info\n{\n    //Here if something went wrong\n}\n\n- (void)responseFinanceStatus:(id <FinanceResponseInfo>)info\n{\n    //Here\'s the result of your transaction\n}\n\n- (void)responseLogInfo:(id <LogInfo>)info\n{\n    NSLog(@"\\n\\tresponseLogInfo: %@", info.status);\n}\n\n- (void)requestSignature:(NSString *)receipt\n{\n    [self.api acceptSignature:YES];\n}\n\n- (void)addDevice:(HeftRemoteDevice *)device\n{\n    self.devices[device.address] = device;\n}\n\n- (void)removeDevice:(HeftRemoteDevice *)device\n{\n    if (self.devices[device.address])\n    {\n        [self.devices removeObjectForKey:device.address];\n    }\n}\n\n- (void)fillDevicesFromConnectedCardReaders\n{\n    for (HeftRemoteDevice *device in [self.manager connectedCardReaders])\n    {\n        [self addDevice:device];\n    }\n}\n    \n@end\n')))}u.isMDXComponent=!0}}]);