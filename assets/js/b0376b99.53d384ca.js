"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8087],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=i,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return t?a.createElement(h,r(r({ref:n},p),{},{components:t})):a.createElement(h,r({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},42565:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=t(87462),i=(t(67294),t(3905));const o={sidebar_position:4,id:"androidintegrationguide"},r="Integration Guides",s={unversionedId:"androidintegrationguide",id:"version-Android SDK 7.1002.0/androidintegrationguide",title:"Integration Guides",description:"The SDK supports the following connection methods:",source:"@site/android_versioned_docs/version-Android SDK 7.1002.0/androidintegrationguide.md",sourceDirName:".",slug:"/androidintegrationguide",permalink:"/android/Android SDK 7.1002.0/androidintegrationguide",draft:!1,tags:[],version:"Android SDK 7.1002.0",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"androidintegrationguide"},sidebar:"tutorialSidebar",previous:{title:"Trigger Amounts",permalink:"/android/Android SDK 7.1002.0/androidapioverview"},next:{title:"Transaction Types",permalink:"/android/Android SDK 7.1002.0/androidtransactions"}},l={},d=[{value:"Android Native Integration (PAX/Telpo)",id:"8",level:2},{value:"Bluetooth Integration (HiLite)",id:"9",level:2}],p={toc:d};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"integration-guides"},"Integration Guides"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The SDK supports the following connection methods:")," "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#8"},"Android Native (PAX/Telpo)"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#9"},"Bluetooth (HiLite)")))),(0,i.kt)("h2",{id:"8"},"Android Native Integration (PAX/Telpo)"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"Introduction")),(0,i.kt)("p",null,"This tutorial is guiding you through all the required steps to create a basic payment application for Android Payment devices such as PAX and Telpo."),(0,i.kt)("p",null,"The new generation of Handpoint SDK's is designed to make your life easier. Simple and created for humans, it does not require any specific knowledge of the payment industry to be able to start accepting card payments."),(0,i.kt)("p",null,"At Handpoint we take care of securing every transaction so you don\xb4t have to worry about it while creating your application. We encrypt data from the payment terminal to the bank with our point-to-point encryption solution. Our platform is always up to the latest PCI security requirements."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Please, start an operation (sale,refund etc.) ONLY if you have received the ",(0,i.kt)("strong",{parentName:"p"},"InitialisationComplete")," message from the ",(0,i.kt)("strong",{parentName:"p"},"currentTransactionStatus")," method")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Let's start programming!")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1. Modify the AndroidManifest.xml")),(0,i.kt)("p",null,"We ",(0,i.kt)("strong",{parentName:"p"},"strongly")," recommend you add the following to your ",(0,i.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Inside the tag ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"<application>"))," -> ",(0,i.kt)("inlineCode",{parentName:"li"},'android:extractNativeLibs:"true"'))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<application\n    android:extractNativeLibs:"true"\n    ...\n    ...\n    ...>    \n</application>   \n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Inside the tag ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"<activity>"))," -> ",(0,i.kt)("inlineCode",{parentName:"li"},'android:launchMode="singleTask"'),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<activity android:name=".MainActivity"\n    android:launchMode="singleTask">\n    ...\n    ...\n</activity>    \n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2. SDK distribution")," "),(0,i.kt)("p",null,"The Handpoint Android SDK is available on Maven central as well as the Handpoint internal Nexus server. Maven central contains the ",(0,i.kt)("strong",{parentName:"p"},"production builds")," while Nexus contains ",(0,i.kt)("strong",{parentName:"p"},"development snapshots")," of the SDK."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you are integrating your software with a ",(0,i.kt)("strong",{parentName:"li"},"PAX debug terminal")," you will need to get the SDK from ",(0,i.kt)("strong",{parentName:"li"},"Nexus"),". "),(0,i.kt)("li",{parentName:"ul"},"If you are integrating your software with a ",(0,i.kt)("strong",{parentName:"li"},"PAX production terminal")," you will need to get the SDK from ",(0,i.kt)("strong",{parentName:"li"},"Maven Central"),". "),(0,i.kt)("li",{parentName:"ul"},"If you are integrating your software with an HiLite terminal you will need to get the SDK from ",(0,i.kt)("strong",{parentName:"li"},"Maven Central"),". ")),(0,i.kt)("p",null,"The Handpoint Android SDK is compatible with Android version 5.1.1 ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/about/versions/lollipop/android-5.1"},"(API level 22)")," and up.\nThe latest version is compiled with java ",(0,i.kt)("strong",{parentName:"p"},"1.8")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Gradle Settings")),(0,i.kt)("p",null,"For production terminals (Maven):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"}," //Handpoint Production SDK (Production terminals)\n implementation 'com.handpoint.api:sdk:7.x.x'\n")),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"gradle.build")," (Top-level build file) for production terminals (Maven):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"      allprojects {     //Handpoint Production SDK (Production terminals)\n        repositories {\n           google()\n           mavenCentral()\n           maven { url 'https://jitpack.io' }\n            }\n      }\n")),(0,i.kt)("p",null,"For debug terminals (Nexus):  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"}," //Handpoint Staging/Development SDK (Debug terminals)\n implementation 'com.handpoint.api:sdk:7.x.x-RC.x-SNAPSHOT'\n")),(0,i.kt)("p",null,"   In the ",(0,i.kt)("inlineCode",{parentName:"p"},"gradle.build")," (Top-level build file) for debug terminals (Nexus):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"      allprojects {   //Handpoint Staging/Development SDK (Debug terminals)\n        repositories {\n          google()\n          mavenCentral()\n          maven {\n            name = \"Handpoint Nexus\"\n            url = uri(\"urlProvided\") //URL provided by Handpoint once you order a dev kit \n            credentials { //Credentials provided by Handpoint once you order a dev kit \n              username = 'usernameProvided' \n              password = 'passwordProvided' \n           }\n          }\n        }\n      }\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Some considerations to keep in mind when using gradle (for both production and debug terminals)"),(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"gradle.build")," (app module) add the following packaging options:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"android {\n    defaultConfig {\n        minSdkVersion 22 //Required to support all PAX & Telpo models\n        targetSdkVersion 29 //If using version targetSdkVersion 30 or higher, please note that you will need \n                            //to add android:exported=\"true\" or android:exported=\"false\" in your activities\n        multiDexEnabled true\n        ndk {\n             abiFilters  \"arm64-v8a\", \"armeabi-v7a\", \"x86\", \"x86_64\"\n        }\n    }\n\n    packagingOptions {\n        pickFirst '**/*.so'\n        exclude 'META-INF/*'\n        exclude '**/anim/*.xml'\n        exclude '**/layout/*.xml'\n        exclude 'resources.arsc'\n        exclude 'AndroidManifest.xml'\n        exclude '**/animator/*.xml'\n    }\n }\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Maven Settings")),(0,i.kt)("p",null,"For production terminals: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"    <dependency>\n      <groupId>com.handpoint.api</groupId>\n      <artifactId>sdk</artifactId>\n      <version>[7.1001.0,)</version>\n      <type>aar</type>\n    </dependency>\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If using AndroidX you will need to switch the following flags to true:",(0,i.kt)("br",null),"\nandroid.enableJetifier=true",(0,i.kt)("br",null),"\nandroid.useAndroidX=true")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3. Create a Java class")),(0,i.kt)("p",null,"Create a new java class called ",(0,i.kt)("inlineCode",{parentName:"p"},"HandpointDelegate.java")," and include ",(0,i.kt)("inlineCode",{parentName:"p"},"com.handpoint.api.*")," as a dependency:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package com.yourpackage.name;\n\nimport com.handpoint.api.HandpointCredentials;\nimport com.handpoint.api.Hapi;\nimport com.handpoint.api.HapiFactory;\nimport com.handpoint.api.shared.ConnectionMethod;\nimport com.handpoint.api.shared.ConnectionStatus;\nimport com.handpoint.api.shared.Currency;\nimport com.handpoint.api.shared.Device;\nimport com.handpoint.api.shared.Events;\nimport com.handpoint.api.shared.SignatureRequest;\nimport com.handpoint.api.shared.StatusInfo;\nimport com.handpoint.api.shared.TipConfiguration;\nimport com.handpoint.api.shared.TransactionResult;\nimport com.handpoint.api.shared.agreements.Acquirer;\nimport com.handpoint.api.shared.agreements.Credential;\nimport com.handpoint.api.shared.agreements.MerchantAuth;\nimport com.handpoint.api.shared.options.SaleOptions;\n\nimport java.math.BigInteger;\nimport java.util.Arrays;\nimport java.util.List;\n\n//Check all the events available in the Events interface.\n//If you want to subscribe to more events, just add to the list of implemented interfaces.\npublic class HandpointDelegate implements Events.SmartposRequired, Events.CurrentTransactionStatus, Events.ConnectionStatusChanged, Events.EndOfTransaction, Events.TransactionResultReady {\n\n    private Hapi api;\n\n    public HandpointDelegate(Context context) {\n        initApi(context);\n    }\n\n    public void initApi(Context context) {\n        String sharedSecret = "0102030405060708091011121314151617181920212223242526272829303132";\n        HandpointCredentials handpointCredentials = new HandpointCredentials(sharedSecret);\n        this.api = HapiFactory.getAsyncInterface(this, context, handpointCredentials);\n        // The api is now initialized. Yay! we\'ve even set default credentials.\n        // The shared secret is a unique string shared between the payment terminal and your application, it is unique per merchant.\n        // You should replace this default shared secret with the one sent by the Handpoint support team.\n\n        //Since we\'re running inside the terminal, we can create a device ourselves and connect to it\n        Device device = new Device("some name", "address", "", ConnectionMethod.ANDROID_PAYMENT);\n        this.api.connect(device);\n    }\n\n    @Override\n    public void connectionStatusChanged(ConnectionStatus status, Device device) {\n        if (status == ConnectionStatus.Connected) {\n            //Connection Status connected\n\n        }\n    }\n\n    public OperationStartResult pay() {\n        return this.api.sale(new BigInteger("1000"), Currency.GBP);\n        // Let\xb4s start our first payment of 10.00 pounds\n        // Use the currency of the country in which you will be deploying terminals\n    }\n\n    public OperationStartResult payWithOptions() {\n        SaleOptions options = new SaleOptions();\n\n        // Adding tipping\n        TipConfiguration config = new TipConfiguration();\n        //Optionally\n        config.setHeaderName("HEADER");\n        //Optionally\n        config.setFooter("FOOTER");\n        //Optionally\n        config.setEnterAmountEnabled(true);\n        //Optionally\n        config.setSkipEnabled(true);\n        //Optionally\n        config.setTipPercentages(Arrays.asList(5, 10, 15, 20));\n        options.setTipConfiguration(config);\n\n        // Adding Multi MID / Custom merchant Authentication\n        MerchantAuth auth = new MerchantAuth();\n        Credential credential = new Credential();\n        //Optionally\n        credential.setAcquirer(Acquirer.SANDBOX);\n        //Optionally\n        credential.setMid("mid");\n        //Optionally\n        credential.setTid("tid");\n        //Add as many credentials as Acquirers your merchant have agreements with\n        auth.add(credential);\n        options.setMerchantAuth(auth);\n\n        //Add a customer reference\n        options.setCustomerReference("Your customer reference");\n\n        //Enable pin bypass\n        options.setPinBypass(true);\n\n        //Enable signature bypass\n        options.setSignatureBypass(true);\n\n        //Define a budget number\n        options.setBudgetNumber("YOUR_BUDGET_NUMBER");\n\n        return this.api.sale(new BigInteger("1000"),Currency.GBP, options);\n        // Let\xb4s start our first payment of 10.00 pounds\n        // Use the currency of the country in which you will be deploying terminals\n    }\n\n    public boolean getTrxStatus() {\n        //Allows you to know the status of a transaction by providing the transactionReference.\n        //The transactionReference must be a unique identifier (UUID v4).\n        //This functionality is only available for SmartPos devices (PAX)\n        return api.getTransactionStatus("00000000-0000-0000-0000-000000000000");\n        //You will receive the TransactionResult object of this operation in transactionResultReady event\n    }\n\n    @Override\n    public void currentTransactionStatus(StatusInfo statusInfo, Device device) {\n        if (statusInfo.getStatus() == StatusInfo.Status.InitialisationComplete) {\n            // The StatusInfo object holds the different transaction statuses like reading card, pin entry, etc.\n            // Let\'s launch a payment\n            pay();\n        }\n    }\n\n    @Override\n    public void endOfTransaction(TransactionResult transactionResult, Device device) {\n        // The TransactionResult object holds details about the transaction as well as the receipts\n        // Useful information can be accessed through this object like the transaction ID, the amount, etc.\n    }\n\n    @Override\n    public void transactionResultReady(TransactionResult transactionResult, Device device) {\n        // Pending TransactionResult objects will be received through this event if the EndOfTransaction\n        // event was not delivered during the transaction, for example because of a network issue.\n        // Here you are also going to receive a TransactionResult object after making a query to getTransactionStatus\n    }\n\n    public void disconnect(){\n        this.api.disconnect();\n        //This disconnects the connection\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"We're done!")),(0,i.kt)("p",null,"Sort of. With the above tutorial you've done a basic integration that can perform sale transactions."),(0,i.kt)("p",null,"Explore the rest of the documentation to see more transaction types supported and possibilities."),(0,i.kt)("h2",{id:"9"},"Bluetooth Integration (HiLite)"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"Introduction")),(0,i.kt)("p",null,"This tutorial is guiding you through all the required steps to create a basic payment application for Android devices integrated with an HiLite payment terminal."),(0,i.kt)("p",null,"The new generation of Handpoint SDK's is designed to make your life easier. Simple and created for humans, it does not require any specific knowledge of the payment industry to be able to start accepting credit/debit card transactions."),(0,i.kt)("p",null,"At Handpoint we take care of securing every transaction so you don\xb4t have to worry about it while creating your application. We encrypt data from the payment terminal to the bank with our point-to-point encryption solution. Our platform is always up to the latest PCI-DSS security requirements."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Please, start an operation (sale,refund etc.) ONLY if you have received the ",(0,i.kt)("strong",{parentName:"p"},"InitialisationComplete")," message from the ",(0,i.kt)("strong",{parentName:"p"},"currentTransactionStatus")," method")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Let's start programming!")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1. Modify the AndroidManifest.xml")),(0,i.kt)("p",null,"We ",(0,i.kt)("strong",{parentName:"p"},"strongly")," recommend you add the following to your ",(0,i.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Inside the tag ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"<application>"))," -> ",(0,i.kt)("inlineCode",{parentName:"li"},'android:extractNativeLibs:"true"'))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<application\n    android:extractNativeLibs:"true"\n    ...\n    ...\n    ...>    \n</application>   \n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Inside the tag ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"<activity>"))," -> ",(0,i.kt)("inlineCode",{parentName:"li"},'android:launchMode="singleTask"'),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<activity android:name=".MainActivity"\n    android:launchMode="singleTask">\n    ...\n    ...\n</activity>    \n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2.1 In the gradle.build (app module)")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"android {\n    defaultConfig {\n        minSdkVersion 22 //Required to support all PAX & Telpo models\n        targetSdkVersion 29 //If using version targetSdkVersion 30 or higher, please note that you will need \n                            //to add android:exported=\"true\" or android:exported=\"false\" in your activities\n        multiDexEnabled true\n    }\n\n    packagingOptions {\n        pickFirst '**/*.so'\n        exclude 'META-INF/*'\n        exclude '**/anim/*.xml'\n        exclude '**/layout/*.xml'\n        exclude 'resources.arsc'\n        exclude 'AndroidManifest.xml'\n        exclude '**/animator/*.xml'\n    }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n\n    //Handpoint Production SDK (Production devices)\n    implementation 'com.handpoint.api:sdk:7.x.x'\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2.2 In the gradle.build (Top-level build file)")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"allprojects {     //Handpoint Production SDK\n    repositories {\n        google()\n        mavenCentral()\n        maven { url 'https://jitpack.io' }\n    }\n}\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"During the build process, a DEX error may appear."),(0,i.kt)("p",{parentName:"admonition"},"To be able to build, we recommend adding the following lines to the ",(0,i.kt)("inlineCode",{parentName:"p"},"gradle.properties")," file:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"org.gradle.jvmargs = -Xmx4096m -XX:MaxPermSize=4096m -XX:+HeapDumpOnOutOfMemoryError\norg.gradle.daemon = true\norg.gradle.parallel = true\norg.gradle.configureondemand = true\n"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3. Create a Java class")),(0,i.kt)("p",null,"Create a new java class called ",(0,i.kt)("inlineCode",{parentName:"p"},"HandpointDelegate.java")," and include ",(0,i.kt)("inlineCode",{parentName:"p"},"com.handpoint.api.*")," as a dependency:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package com.yourpackage.name;\n\nimport android.content.Context;\n\nimport com.handpoint.api.HandpointCredentials;\nimport com.handpoint.api.Hapi;\nimport com.handpoint.api.HapiFactory;\nimport com.handpoint.api.shared.ConnectionMethod;\nimport com.handpoint.api.shared.ConnectionStatus;\nimport com.handpoint.api.shared.Currency;\nimport com.handpoint.api.shared.Device;\nimport com.handpoint.api.shared.Events;\nimport com.handpoint.api.shared.SignatureRequest;\nimport com.handpoint.api.shared.StatusInfo;\nimport com.handpoint.api.shared.TransactionResult;\n\nimport java.math.BigInteger;\nimport java.util.List;\n\n//Check all the events available in the Events interface.\n//If you want to subscribe to more events, just add to the list of implemented interfaces.\npublic class HandpointDelegate implements Events.MposRequired, Events.ConnectionStatusChanged, Events.CurrentTransactionStatus, Events.SignatureRequired, Events.EndOfTransaction, Events.DeviceDiscoveryFinished, Events.TransactionResultReady {\n\n    private Hapi api;\n\n\n    public HandpointDelegate(Context context) {\n        initApi(context);\n    }\n\n    public void initApi(Context context) {\n        String sharedSecret = "0102030405060708091011121314151617181920212223242526272829303132";\n        HandpointCredentials handpointCredentials = new HandpointCredentials(sharedSecret);\n        this.api = HapiFactory.getAsyncInterface(this, context, handpointCredentials);\n        // The api is now initialized. Yay! we\'ve even set a shared secret!\n        // The shared secret is a unique string shared between the card reader and your mobile application\n        // It prevents other people to connect to your card reader\n        // You have to replace this default shared secret by the one sent by our support team\n        // The shared secret is unique per merchant (not per terminal)\n\n        //Now we need to find our device and connect to it\n        discoverDevices();\n    }\n\n    // Now  we need to connect to a device to start taking payments.\n    // Let\'s search for them:\n    public void discoverDevices() {\n        this.api.searchDevices(ConnectionMethod.BLUETOOTH);\n        // This triggers the asynchronous search for all the devices around that haven\'t been paired.\n        // You could, alternatively, search for the already paired devices\n        // List<Device> devices = this.api.getPairedDevices(ConnectionMethod.BLUETOOTH);\n        // Now:\n        // selectDeviceAndConnect(devices);\n        // You\'ll receive the devices found through deviceDiscoveryFinished method.\n        // See: https://handpoint.com/docs/device/Android/#elem_eventsDeviceDiscoveryFinished\n    }\n\n    @Override\n    public void deviceDiscoveryFinished(List<Device> devices) {\n        selectDeviceAndConnect(devices);\n    }\n\n    private void selectDeviceAndConnect(List<Device> devices) {\n        for (Device device : devices) {\n            if (device.getName() != null) {\n                // All the devices here are datecs devices\n                if (/* Fill your logic here */) {\n                    this.api.connect(device);\n                    // Now take a look at connectionStatusChanged method\n                    break;\n                }\n            }\n        }\n    }\n\n    //Potentially, if you know the MAC address of the device you want to connect to, you can skip the search and do it this way\n    public void connect() {\n        Device device = new Device("PP0513901435", "68:AA:D2:00:D5:27", "", ConnectionMethod.BLUETOOTH);\n        //The Address always has to be written in UPPER CASE\n        //new Device("name", "address", "port", ConnectionMethod.BLUETOOTH);\n        this.api.connect(device);\n    }\n\n    @Override\n    public void connectionStatusChanged(ConnectionStatus status, Device device) {\n        if (status == ConnectionStatus.Connected) {\n            // Connected to device\n        }\n    }\n\n    public OperationStartResult pay() {\n        return this.api.sale(new BigInteger("1000"), Currency.GBP);\n        // Let\xb4s start our first payment of 10.00 pounds\n        // Use the currency of the country in which you will be deploying terminals\n    }\n\n    @Override\n    public void currentTransactionStatus(StatusInfo statusInfo, Device device) {\n        if (statusInfo.getStatus() == StatusInfo.Status.InitialisationComplete) {\n            // The StatusInfo object holds the different transaction statuses like reading card, pin entry, etc.\n            // Let\'s launch a payment\n            pay();\n        }\n    }\n\n    @Override\n    public void signatureRequired(SignatureRequest signatureRequest, Device device) {\n        // You\'ll be notified here if a sale process needs a signature verification\n        // A signature verification is needed if the cardholder uses an MSR or a chip & signature card\n        // This method will not be invoked if a transaction is made with a Chip & PIN card\n        // At this step, you are supposed to display the merchant receipt to the cardholder on the android device\n        // The cardholder must have the possibility to accept or decline the transaction\n        // If the cardholder clicks on decline, the transaction is VOID\n        // If the cardholder clicks on accept he is then asked to sign electronically the receipt\n        this.api.signatureResult(true);\n        // This line means that the cardholder ALWAYS accepts to sign the receipt\n        // For this sample app we are not going to implement the whole signature process\n    }\n\n    @Override\n    public void endOfTransaction(TransactionResult transactionResult, Device device) {\n        // The object TransactionResult stores the different receipts\n        // Other information can be accessed through this object like the transaction ID, the amount...\n    }\n\n    @Override\n    public void transactionResultReady(TransactionResult transactionResult, Device device) {\n        // Pending TransactionResult objects will be received through this event if the EndOfTransaction\n        // event was not delivered during the transaction, for example because of a network issue.\n        // For this sample app we are not going to implement this event.\n    }\n\n    public void disconnect() {\n        this.api.disconnect();\n        //This disconnects the connection\n    }\n}\n                \n\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Note about reconnections:")," By default, the SDK will automatically reconnect to the last known device when the connection is lost.If you want to change this behaviour set the property Settings.AutomaticReconnection in HapiManager to ",(0,i.kt)("strong",{parentName:"p"},"false"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"We're done!")),(0,i.kt)("p",null,"Sort of. With the above tutorial you've done a basic integration that can perform sale transactions."),(0,i.kt)("p",null,"Explore the rest of the documentation to see more transaction types supported and possibilities."))}c.isMDXComponent=!0}}]);