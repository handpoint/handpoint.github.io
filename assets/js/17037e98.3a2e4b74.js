"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1960],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=a,g=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=c;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},56109:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const o={sidebar_position:1,id:"androidintroduction"},i="Introduction",l={unversionedId:"androidintroduction",id:"version-Android SDK 7.1004.1/androidintroduction",title:"Introduction",description:"Android SDK",source:"@site/android_versioned_docs/version-Android SDK 7.1004.1/androidintroduction.md",sourceDirName:".",slug:"/androidintroduction",permalink:"/android/Android SDK 7.1004.1/androidintroduction",draft:!1,tags:[],version:"Android SDK 7.1004.1",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"androidintroduction"},sidebar:"tutorialSidebar",next:{title:"Release Notes",permalink:"/android/Android SDK 7.1004.1/androidreleasenotes"}},d={},s=[{value:"SDK distribution",id:"sdk-distribution",level:3},{value:"AndroidManifest.xml",id:"androidmanifestxml",level:3},{value:"Gradle Settings",id:"gradle-settings",level:3},{value:"For production terminals (Maven):",id:"for-production-terminals-maven",level:4},{value:"For debug terminals (Nexus) Only applies to PAX/Telpo devices:",id:"for-debug-terminals-nexus-only-applies-to-paxtelpo-devices",level:4},{value:"Maven Settings",id:"maven-settings",level:3}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("div",{class:"card-demo",align:"middle"},(0,a.kt)("div",{class:"card card-background"},(0,a.kt)("div",{class:"card__header"},(0,a.kt)("h3",null,"Android SDK")),(0,a.kt)("div",{class:"card__body"},(0,a.kt)("a",{href:"https://search.maven.org/artifact/com.handpoint.api/sdk/"},(0,a.kt)("img",{src:"https://handpoint.imgix.net/ballicons/small/android.png"}))),(0,a.kt)("div",{class:"card__footer"},(0,a.kt)("a",{class:"button button--primary",href:"https://search.maven.org/artifact/com.handpoint.api/sdk/"},"Get the latest Android SDK!")))),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you are currently using 6.x of the Android SDK, take a look at the ",(0,a.kt)("a",{parentName:"p",href:"/android/Android%20SDK%207.1004.1/androidmigrationguide"},"migration guide")," to 7.x")),(0,a.kt)("p",null,"The new generation of Handpoint APIs and SDKs are engineered to make your life simpler and happier."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Awesomely simple")),(0,a.kt)("p",null,"Created for humans, coders, geeks, no need of a dark and complex knowledge of the payment industry."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Super secure")),(0,a.kt)("p",null,"We take care of PCI compliance so you can be kept out of PCI scope. The Handpoint terminals encrypt all sensitive cardholder data so your app does not have to deal with it."),(0,a.kt)("h3",{id:"sdk-distribution"},"SDK distribution"),(0,a.kt)("p",null,"The Handpoint Android SDK is available on Maven central as well as the Handpoint internal Nexus server. Maven central contains the ",(0,a.kt)("strong",{parentName:"p"},"production builds")," while Nexus contains ",(0,a.kt)("strong",{parentName:"p"},"development snapshots")," of the SDK."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you are integrating your software with a ",(0,a.kt)("strong",{parentName:"li"},"PAX debug terminal")," you will need to get the SDK from ",(0,a.kt)("strong",{parentName:"li"},"Nexus"),". "),(0,a.kt)("li",{parentName:"ul"},"If you are integrating your software with a ",(0,a.kt)("strong",{parentName:"li"},"PAX production terminal")," you will need to get the SDK from ",(0,a.kt)("strong",{parentName:"li"},"Maven Central"),". "),(0,a.kt)("li",{parentName:"ul"},"If you are integrating your software with an HiLite terminal you will need to get the SDK from ",(0,a.kt)("strong",{parentName:"li"},"Maven Central"),". ")),(0,a.kt)("p",null,"The Handpoint Android SDK is compatible with Android version 5.1.1 ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/about/versions/lollipop/android-5.1"},"(API level 22)")," and up.\nThe latest version is compiled with java ",(0,a.kt)("strong",{parentName:"p"},"1.8")),(0,a.kt)("h3",{id:"androidmanifestxml"},"AndroidManifest.xml"),(0,a.kt)("p",null,"We ",(0,a.kt)("strong",{parentName:"p"},"strongly")," recommend you add the following to your ",(0,a.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Inside the tag ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"<application>"))," -> ",(0,a.kt)("inlineCode",{parentName:"li"},'android:extractNativeLibs:"true"'))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<application\n    android:extractNativeLibs:"true"\n    ...\n    ...\n    ...>    \n</application>   \n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Inside the tag ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"<activity>"))," -> ",(0,a.kt)("inlineCode",{parentName:"li"},'android:launchMode="singleTask"'),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<activity android:name=".MainActivity"\n    android:launchMode="singleTask">\n    ...\n    ...\n</activity>    \n')),(0,a.kt)("h3",{id:"gradle-settings"},"Gradle Settings"),(0,a.kt)("h4",{id:"for-production-terminals-maven"},"For production terminals (Maven):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"}," //Handpoint Production SDK (Production terminals)\n implementation 'com.handpoint.api:sdk:7.x.x'\n")),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"gradle.build")," (Top-level build file) for production terminals (Maven):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"      allprojects {     //Handpoint Production SDK (Production terminals)\n        repositories {\n           google()\n           mavenCentral()\n           maven { url 'https://jitpack.io' }\n            }\n      }\n")),(0,a.kt)("h4",{id:"for-debug-terminals-nexus-only-applies-to-paxtelpo-devices"},"For debug terminals (Nexus) ","[Only applies to PAX/Telpo devices]",":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"}," //Handpoint Staging/Development SDK (Debug terminals)\n implementation 'com.handpoint.api:sdk:7.x.x-RC.x-SNAPSHOT'\n")),(0,a.kt)("p",null,"   In the ",(0,a.kt)("inlineCode",{parentName:"p"},"gradle.build")," (Top-level build file) for debug terminals (Nexus) ","[Only applies to PAX/Telpo devices]",":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"      allprojects {   //Handpoint Staging/Development SDK (Debug terminals)\n        repositories {\n          google()\n          mavenCentral()\n          maven {\n            name = \"Handpoint Nexus\"\n            url = uri(\"urlProvided\") //URL provided by Handpoint once you order a dev kit \n            credentials { //Credentials provided by Handpoint once you order a dev kit \n              username = 'usernameProvided' \n              password = 'passwordProvided' \n           }\n          }\n        }\n      }\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Some considerations to keep in mind when using gradle (for both production and debug terminals)"),(0,a.kt)("p",{parentName:"li"}," In the ",(0,a.kt)("inlineCode",{parentName:"p"},"gradle.build")," (app module) add the following packaging options:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"android {\n  defaultConfig {\n      minSdkVersion 22 //Required to support all PAX & Telpo models\n      targetSdkVersion 29 //If using version targetSdkVersion 30 or higher, please note that you will need \n                          //to add android:exported=\"true\" or android:exported=\"false\" in your activities\n      multiDexEnabled true\n      ndk {\n          abiFilters \"arm64-v8a\", \"armeabi-v7a\", \"x86\", \"x86_64\"\n      }\n  }\n\n  packagingOptions {\n      pickFirst '**/*.so'\n      exclude 'META-INF/*'\n      exclude '**/anim/*.xml'\n      exclude '**/layout/*.xml'\n      exclude 'resources.arsc'\n      exclude 'AndroidManifest.xml'\n      exclude '**/animator/*.xml'\n  }\n}\n")))),(0,a.kt)("h3",{id:"maven-settings"},"Maven Settings"),(0,a.kt)("p",null,"For production terminals: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"    <dependency>\n      <groupId>com.handpoint.api</groupId>\n      <artifactId>sdk</artifactId>\n      <version>[7.1001.0,)</version>\n      <type>aar</type>\n    </dependency>\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If using AndroidX you will need to switch the following flags to true:",(0,a.kt)("br",null),"\nandroid.enableJetifier=true",(0,a.kt)("br",null),"\nandroid.useAndroidX=true")),(0,a.kt)("p",null,"It is time to visit our ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"androidintegrationguide"},"Integration Guides"))," section."),(0,a.kt)("p",null,"If you have any questions, do not hesitate to ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"mailto:support@handpoint.com"},"Contact Us")),"."))}u.isMDXComponent=!0}}]);