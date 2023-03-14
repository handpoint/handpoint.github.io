"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4573],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:4,id:"javascriptquickintegration"},o="Integration Guide",c={unversionedId:"javascriptquickintegration",id:"version-JavaScript SDK 6.1.0/javascriptquickintegration",title:"Integration Guide",description:"Pre-requisite: request your test credentials (API key) and test payment terminal from Handpoint.",source:"@site/javascript_versioned_docs/version-JavaScript SDK 6.1.0/javascriptquickintegration.md",sourceDirName:".",slug:"/javascriptquickintegration",permalink:"/javascript/JavaScript SDK 6.1.0/javascriptquickintegration",draft:!1,tags:[],version:"JavaScript SDK 6.1.0",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"javascriptquickintegration"},sidebar:"tutorialSidebar",previous:{title:"Trigger Amounts",permalink:"/javascript/JavaScript SDK 6.1.0/javascriptprocessingpayments"},next:{title:"Handpoint Sandbox",permalink:"/javascript/JavaScript SDK 6.1.0/javascriptsandbox"}},s={},l=[],p={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"integration-guide"},"Integration Guide"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Pre-requisite: request your test credentials (API key) and test payment terminal from Handpoint. ")),(0,a.kt)("p",null,"The following example shows how you can integrate your web application with the Handpoint javascript SDK to perform a sale transaction in four easy steps:"),(0,a.kt)("p",null,"1) Download the ",(0,a.kt)("a",{parentName:"p",href:"/javascript/JavaScript%20SDK%206.1.0/javascriptintroduction#javascriptIntro"},"handpoint.js")," SDK."),(0,a.kt)("p",null,"2) In the same directory, copy both handpoint.js and the code below in an html file."),(0,a.kt)("p",null,"3) In the code below, replace the variable apiKey with your test api key and replace the variable deviceName with the concatenation of your terminal serial number and model, for example 0821032395-PAXA920. If your payment terminal shows the debug watermark on the screen when it is on, then keep the variable environmentIsDevelopment to true otherwise change it to false. "),(0,a.kt)("p",null,"4)Open the html file in the browser and see the test transaction immediately."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SIMPLE, FAST, and EASY")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<!doctype html>\n<html>\n\n<head>\n  <title>Handpoint SDK Trial Integration</title>\n  <script src=\"handpoint.js\"><\/script>\n</head>\n\n<body>\n  <script>\n      var hp = new Handpoint()\n      //************* Test configuration *************//\n      var apiKey = 'YourApiKey';\n      var deviceName = '082245-Device';\n      var environmentIsDevelopment = true;\n      //*********************************************//\n      hp.init(apiKey, environmentIsDevelopment, (pendingEoT) => {\n        console.log('Recovered Transaction -> ' + JSON.stringify(pendingEoT));\n      }).then(\n        response1 => {\n          console.log('Successful initialization')\n          //document.writeln('Successful initialization<br />')\n          hp.connect(deviceName).then(\n            response2 => {\n              console.log('Successful Connection to device [' + deviceName + ']');\n              //document.writeln('Successful Connection to device [' + deviceName + ']<br />')\n              console.log('Executing sale');\n              //document.writeln('Executing sale<br />')\n              hp.sale('10', 'EUR').then(\n                response3 => {\n                  console.log('Successful sale');\n                  //document.writeln('Successful sale<br />');\n                  hp.disconnect(deviceName).then(\n                    response3 => {\n                      console.log('Successful disconnection from device [' + deviceName + ']')\n                      //document.writeln('Successful disconnection from device [' + deviceName + ']<br />')\n                    }\n                  ).catch(\n                    error => console.log('Disconnection from device [' + deviceName + '] Failed -> ' + JSON.stringify(error))\n                  );\n                }\n              ).catch(\n                error => console.log('Sale Failed -> ' + JSON.stringify(error))\n              );\n            }\n          ).catch(\n            error => console.log('Connection to device [' + deviceName + '] Failed -> ' + JSON.stringify(error))\n          );\n        }\n      ).catch(\n        error => console.log('Initialization Failed -> ' + JSON.stringify(error))\n      );\n  <\/script>\n</body>\n\n</html>\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Maintain the connection with the terminal at all times:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"To be able to recover a transaction result through the callback passed in the ",(0,a.kt)("a",{parentName:"li",href:"/javascript/JavaScript%20SDK%206.1.0/javascriptterminalmanagement#1"},(0,a.kt)("em",{parentName:"a"},"init"))," method, the point of sale and the terminal ",(0,a.kt)("strong",{parentName:"li"},"MUST")," be connected and online. For that reason, we recommend to connect to the target terminal and maintain the connection alive at all times instead of connecting and disconnecting for every transaction."),(0,a.kt)("li",{parentName:"ul"},"Using the same connection, the user may perform as many transactions as desired. The SDK is in charge of maintaining the secure channel between the point of sale and the terminal. No connection and disconnection between transactions is required. The silent connected periods will provide the possibility for the device to deliver any pending transaction result in case of a network issue.")),(0,a.kt)("p",{parentName:"admonition"},"How Transaction Recovery Works:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The terminal has a transaction recovery loop to automatically send back the pending ",(0,a.kt)("a",{parentName:"li",href:"/javascript/JavaScript%20SDK%206.1.0/javascriptobjects#18"},(0,a.kt)("em",{parentName:"a"},"Transaction Result"))," to the Point of sale in case it becomes unreachable (network issue or other). For the first 100 seconds after a transaction is completed, a background thread will attempt to deliver the result every 5 seconds. If the point of sale is still unreachable after the first 100 seconds, the retry loop turns into an exponential increment to the power of 2 (8s-16s-32s etc\u2026). The recovery loop is reinitialized every time the Handpoint application is restarted or anytime the startRecovery method is used."))))}d.isMDXComponent=!0}}]);