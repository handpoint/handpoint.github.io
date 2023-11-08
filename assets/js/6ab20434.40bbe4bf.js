"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3353],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),d=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(h,s(s({ref:e},p),{},{components:n})):a.createElement(h,s({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:r,s[1]=o;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82401:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:6,id:"restendpoints"},s="REST API Endpoints",o={unversionedId:"restendpoints",id:"version-REST API 2.14.0/restendpoints",title:"REST API Endpoints",description:"/initialize",source:"@site/restapi_versioned_docs/version-REST API 2.14.0/restendpoints.md",sourceDirName:".",slug:"/restendpoints",permalink:"/restapi/REST API 2.14.0/restendpoints",draft:!1,tags:[],version:"REST API 2.14.0",sidebarPosition:6,frontMatter:{sidebar_position:6,id:"restendpoints"},sidebar:"tutorialSidebar",previous:{title:"Handpoint Sandbox",permalink:"/restapi/REST API 2.14.0/restsandbox"},next:{title:"Objects",permalink:"/restapi/REST API 2.14.0/restobjects"}},l={},d=[{value:"/initialize",id:"initialize",level:2},{value:"/transactions",id:"transactions",level:2},{value:"/transaction-result/{transactionResultId}",id:"transaction-resulttransactionresultid",level:2},{value:"/transactions/{guid}/tip-adjustment",id:"transactionsguidtip-adjustment",level:2},{value:"Transaction Result Recovery",id:"transaction-result-recovery",level:2},{value:"/transactions/{transactionReference}/status",id:"transactionstransactionreferencestatus",level:2}],p={toc:d};function c(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rest-api-endpoints"},"REST API Endpoints"),(0,r.kt)("h2",{id:"initialize"},"/initialize"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Initialize")),(0,r.kt)("p",null,"Initializes the REST API client and returns the list of payment terminals associated with the merchant account. We recommend that you display the list of available payment terminals to the merchant in your software. Each API key is unique per merchant and needs to be configurable in your backend. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Header: ApiKeyCloud")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),"    ",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Api key used to authenticate the merchant.")))),(0,r.kt)("p",null,"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Devices"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"List of ",(0,r.kt)("a",{parentName:"td",href:"/restapi/REST%20API%202.14.0/restobjects#deviceObject"},"Device")," object.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'Operation executed using CLI tool CURL:\n\nREQUEST:\n  curl -X GET \\\n   -H "ApiKeyCLoud: MeRcHaNt-ApIkEy" \\\n   "https://cloud.handpoint.com/initialize" (production)\n   "https://cloud.handpoint.io/initialize" (development)\n\nRESPONSE:\n Code 200 -> Body:\n  [\n    {\n      "merchant_id_alpha": "merchantID",\n      "serial_number": "082104578",\n      "customerReference": "op15248",\n      "terminal_type": "PAXA920"\n    }\n  ]\n')),(0,r.kt)("h2",{id:"transactions"},"/transactions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Transactions")),(0,r.kt)("p",null,"POST endpoint used to send a financial operation to the payment terminal. The transaction type to be executed (sale, refund etc.) is defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"operation")," field of the request body. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Header: ApiKeyCloud")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),"   ",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Api key used to authenticate the merchant.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Request Body: Transaction Request")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/restapi/REST%20API%202.14.0/restobjects#transactionRequest"},"TransactionRequest")),(0,r.kt)("td",{parentName:"tr",align:null},"Object containing the transaction request information.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Response"),(0,r.kt)("th",{parentName:"tr",align:null},"Response Code"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Transaction Accepted")),(0,r.kt)("td",{parentName:"tr",align:null},"The response code 202 is received from the API if the transaction was successfully sent to the payment terminal.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"BadRequest DeviceIsBusy Error")),(0,r.kt)("td",{parentName:"tr",align:null},"The response code 400 with error 1001 is received from the API if the payment terminal is already processing a transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"BadRequest DeviceNotResponding Error")),(0,r.kt)("td",{parentName:"tr",align:null},"The response code 400 with error 1002 is received from the API if the payment terminal is offline.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"BadRequest CancelOperationNotAllowed Error")),(0,r.kt)("td",{parentName:"tr",align:null},"The response code 400 with error 1003 is received from the API if the stopCurrentTransaction operation cannot be executed. A transaction can only be cancelled at specific steps of the transaction, while waiting for the card to be inserted or on PIN screen.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'Operation executed using CLI tool CURL:\nREQUEST:\n    curl -X POST \\\\\n     -H"ApiKeyCLoud: MeRcHaNt-ApIkEy" \\\\\n     -H"Content-Type: application/json" \\\\\nTransaction Request without callbackUrl and token\n     -d \'{\n         "operation":"sale",\n         "amount":"10000",\n         "currency":"EUR",\n         "terminal_type":"PAXA920",\n         "serial_number":"1547854757",\n         "customerReference":"op15248",\n         "transactionReference": "2bfde1fc-23b1-4c67-93d9-1d4a557f4d4f"\n          }\' \\\\\nTransaction Request with callbackUrl and token\n     -d \'{\n         "operation":"sale",\n         "amount":"10000",\n         "currency":"EUR",\n         "terminal_type":"PAXA920",\n         "serial_number":"1547854757",\n         "customerReference":"op15248",\n         "callbackUrl":"https://url.where.the.result.is.served.com",\n         "token":"123456789",\n         "transactionReference": "2bfde1fc-23b1-4c67-93d9-1d4a557f4d4f"\n          }\' \\\\  \n   "https://cloud.handpoint.com/transactions" (production)\n   "https://cloud.handpoint.io/transactions" (development)\n\nRESPONSES:\n  Code 202\nTransaction Request without callbackUrl\n    {\n      "transactionResultId": "0821032398-1628774190395",\n      "statusMessage": "Operation Accepted",\n      "transactionReference":"00000000-0000-0000-0000-000000000000"\n    }\n \nTransaction Request with callbackUrl and token\n    {\n      "statusMessage": "Operation Accepted",\n      "transactionReference":"00000000-0000-0000-0000-000000000000"\n    }\n\n  Code 400 Ex:DeviceIsBusy\n    {\n    "error": {\n      "statusCode": 400,\n      "name":"BadRequestError",\n      "message": {\n          "error": 1001,\n          "message":"The device is busy"\n        }\n      }\n    }\n')),(0,r.kt)("h2",{id:"transaction-resulttransactionresultid"},"/transaction-result/{transactionResultId}"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TransactionResultRetrieval")),(0,r.kt)("p",null,"GET endpoint used to retrieve transaction results from the payment terminal. In case you do not provide a callbackURL and token in the transaction request, the terminal will post the transaction result to an Handpoint internal API which can be queried in order for your software to fetch the transaction result. If you are running a server to receive results and pass a callback URL and token as part of the transaction request you do not need to query this endpoint.  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Header: ApiKeyCloud")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),"   ",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Api key used to authenticate the merchant.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Path parameter: transactionResultId")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),"   ",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"The transactionResultId is a unique transaction id delivered immediately as a response to your transaction request. It can be used to query for a transaction result.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Response"),(0,r.kt)("th",{parentName:"tr",align:null},"Response Code"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"No Content")),(0,r.kt)("td",{parentName:"tr",align:null},"Response code 204. The transactionResultId was found in the database but there is no transaction result associated yet. This status will be retrieved while the transaction is ongoing and the transaction result has not been delivered yet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"OK")),(0,r.kt)("td",{parentName:"tr",align:null},"Response code 200 + Transaction Result. The transactionResultId was found in the database and the associated Transaction Result object is delivered.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Not Found")),(0,r.kt)("td",{parentName:"tr",align:null},"Response code 404. The transactionResultId was not found in the database.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'Operation executed using CLI tool CURL:\nREQUEST:\n    curl -X GET \\\\\n      -H"ApiKeyCLoud: MeRcHaNt-ApIkEy" \\\\\n      "https://cloud.handpoint.com/transaction-result/0821032398-1628774190395" (production)\n      "https://cloud.handpoint.io/transaction-result/0821032398-1628774190395" (development)\n\nRESPONSE:\n{\n  "aid": "A0000000041010",\n  "arc": "0000",\n  "authorisationCode": "123456",\n  "balance": null,\n  "budgetNumber": "",\n  "cardEntryType": "UNDEFINED",\n  "cardLanguagePreference": "",\n  "cardSchemeName": "MasterCard",\n  "cardToken": "",\n  "chipTransactionReport": "",\n  "currency": "USD",\n  "customerReceipt": "https://s3.[...]/customerReceipt.html",\n  "customerReference": "",\n  "deviceStatus": {\n      "applicationName": "ClientApp",\n      "applicationVersion": "20.1.0",\n      "batteryCharging": "Not Charging",\n      "batteryStatus": "100",\n      "batterymV": "4126",\n      "bluetoothName": "PAXA920",\n      "externalPower": "USB",\n      "serialNumber": "0821032398",\n      "statusMessage": "Approved or completed successfully"\n  },\n  "dueAmount": 0,\n  "errorMessage": "",\n  "expiryDateMMYY": "0422",\n  "finStatus": "AUTHORISED",\n  "iad": "0210A000002A0000000000000000000000FF",\n  "issuerResponseCode": "00",\n  "maskedCardNumber": "************1456",\n  "merchantAddress": "Plaza Soledad Torres Acosta 1 28013 Madrid",\n  "merchantName": "Hago la cama",\n  "merchantReceipt": "https://s3.[...]/merchantReceipt.html",\n  "mid": "",\n  "originalEFTTransactionID": "",\n  "paymentScenario": "CHIPCONTACTLESS",\n  "rrn": "",\n  "signatureUrl": "",\n  "statusMessage": "Approved or completed successfully",\n  "tenderType": "CREDIT",\n  "tid": "ACQUIRER_TID",\n  "tipAmount": 0,\n  "totalAmount": 100,\n  "transactionID": "01236fc0-8192-11eb-9aca-ad4b0e95f241",\n  "tsi": "0000",\n  "tvr": "0400008001",\n  "type": "SALE",\n  "unMaskedPan": "",\n  "verificationMethod": "UNDEFINED",\n  "efttimestamp": 1615374961000,\n  "efttransactionID": "01236fc0-8192-11eb-9aca-ad4b0e95f241",\n  "requestedAmount": 100,\n  "tipPercentage": 0,\n  "recoveredTransaction": false,\n  "cardHolderName": "cardholder name"\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"signatureUrl"),": In case the signature can not be updated to the Handpoint servers and an URL is not generated, the terminal will send back the image binary in base64 format to your software. It is important to be able to support both the URL and the image binary format."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"customerReceipt")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"merchantReceipt"),": The receipts are usually received as URLs in the transaction result from the terminal. Please note that if the terminal is not able to upload the receipt to the Handpoint cloud servers and an URL is not generated then the HTML formatted receipt will be delivered to your software. It is important to be able to manage both formats.")),(0,r.kt)("h2",{id:"transactionsguidtip-adjustment"},"/transactions/{guid}/tip-adjustment"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TipAdjustment")),(0,r.kt)("p",null,"POST endpoint used to execute a tip adjustment operation. "),(0,r.kt)("p",null,"A tip adjustment operation allows merchants to adjust the tip amount of a sale transaction before the batch of transactions is settled by the processor at the end of the day. Note: This functionality is only available for the restaurant industry in the United States and the processors currently supporting this functionality are TSYS and VANTIV. "),(0,r.kt)("p",null,"Note: If two tip adjustments are sent for the same original transaction, only the second one will be taken into account. Each new tip adjustment will override the previous one. A tip adjustment will be rejected if the original transaction has already been batched out by the acquirer."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Header: ApiKeyCloud")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),"   ",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Api key used to authenticate the merchant.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Path parameter: guid")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),"   ",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"The guid of the transaction to be adjusted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Request Body: Tip Adjustment")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/restapi/REST%20API%202.14.0/restobjects#tip-adjustment"},"TipAdjustment")),(0,r.kt)("td",{parentName:"tr",align:null},"Object containing the amount and currency of the tip adjustment.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Response"),(0,r.kt)("th",{parentName:"tr",align:null},"Response Code"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"OK")),(0,r.kt)("td",{parentName:"tr",align:null},"Response code 200.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"BadRequest")),(0,r.kt)("td",{parentName:"tr",align:null},"Response code 400.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'Operation executed using CLI tool CURL:\nREQUEST:\n    curl --location --request POST \'https://cloud.handpoint.com/transactions/ff6da784-8b57-11ed-9891-ebe2a88ff071/tip-adjustment\' (production)\\\n    curl --location --request POST \'https://cloud.handpoint.io/transactions/ff6da784-8b57-11ed-9891-ebe2a88ff071/tip-adjustment\' (development)\\\n          --header \'ApiKeyCloud: MeRcHaNt-ApI-KeY\' \\\n          --header \'Content-Type: application/json\' \\\n          --data-raw \'{\n              "amount": 5.25\n          }\'\n\nRESPONSE code 200:\n{\n    "statusMessage": "tip adjusted"\n}\n\nError example response (using invalid guid):\n{\n    "error": {\n        "statusCode": 400,\n        "name": "BadRequestError",\n        "message": "Invalid guid [fake-guid]"\n    }\n}\n')),(0,r.kt)("h2",{id:"transaction-result-recovery"},"Transaction Result Recovery"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TransactionResultRecovery")),(0,r.kt)("p",null," The terminal has a transaction recovery loop to automatically send back the pending TransactionResult to the callback URL in case it becomes unreachable (network issue or server down)."),(0,r.kt)("p",null," For the first 100 seconds after a transaction is completed, a background thread will attempt to deliver the result every 5 seconds. If the server is still unreachable after the first 100 seconds, the retry loop turns into an exponential increment to the power of 2 (8s-16s-32s etc\u2026).\nThe recovery loop is reinitialized every time the Handpoint application is restarted or the startRecovery method is triggered. The Transaction Result received through the transaction recovery loop will have the ",(0,r.kt)("strong",{parentName:"p"},"recoveredTransaction")," field set to ",(0,r.kt)("strong",{parentName:"p"},"true"),"."),(0,r.kt)("p",null," All 2XXs http response codes from the callbackUrl are valid to notify the payment terminal of a successful delivery of the result."),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/restapi/REST%20API%202.14.0/restobjects#transaction-result-object"},"Transaction Result")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("a",{parentName:"td",href:"/restapi/REST%20API%202.14.0/restobjects#transaction-result-object"},"Transaction Result")," is delivered to the callback URL from the ",(0,r.kt)("a",{parentName:"td",href:"/restapi/REST%20API%202.14.0/restobjects#transaction-request-object"},"Transaction Request"),".")))),(0,r.kt)("h2",{id:"transactionstransactionreferencestatus"},"/transactions/{transactionReference}/status"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"This endpoint does not use ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://cloud.handpoint.(io/com)/"},"https://cloud.handpoint.(io/com)/"))," as a base URL, it uses ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://transactions.handpoint.(io/com)/"},"https://transactions.handpoint.(io/com)/")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"https://transactions.handpoint.com/transactions/{transactionReference}/status")," endpoint is a RESTful API endpoint designed to retrieve the current status of a transaction based on its unique reference. It accepts the transaction reference as a path parameter and returns the current status of the transaction in the response. The ",(0,r.kt)("inlineCode",{parentName:"p"},"transactionReference")," is a unique value that you need to generate and pass in the original ",(0,r.kt)("a",{parentName:"p",href:"/restapi/REST%20API%202.14.0/restobjects#transactionRequest"}," transaction request"),"."),(0,r.kt)("p",null,"The main transaction result ",(0,r.kt)("a",{parentName:"p",href:"/restapi/REST%20API%202.14.0/restobjects#financialStatus"},(0,r.kt)("em",{parentName:"a"},"FinancialStatus"))," that can be returned as a response to this method are the following ones: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AUTHORISED - Transaction was successful."),(0,r.kt)("li",{parentName:"ul"},"DECLINED - Transaction was declined."),(0,r.kt)("li",{parentName:"ul"},"UNDEFINED (NOT FOUND) -  The transaction does not exist in the Handpoint gateway. If this status is returned within 90s of the start of a transaction, there could be a chance that the cardholder has not inserted, swiped or tapped his card yet on the terminal and the Handpoint gateway might soon receive the transaction. If the ",(0,r.kt)("inlineCode",{parentName:"li"},"UNDEFINED")," status is returned after 90s, it means that the transaction processed has not reached the Handpoint gateway and it will NOT be charged."),(0,r.kt)("li",{parentName:"ul"},"IN_PROGRESS - The transaction has been received by the gateway but the outcome is not known yet, try again after a few seconds."),(0,r.kt)("li",{parentName:"ul"},"REFUNDED - Transaction was refunded.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"getTrxStatusEndpoint",src:n(58921).Z,width:"671",height:"611"})," "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Header: ApiKeyCloud")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),"   ",(0,r.kt)("em",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Api key used to authenticate the merchant.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Path parameter: transactionReference")," ",(0,r.kt)("span",{class:"badge badge--primary"},"Required"),"   ",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"transactionReference")," is a unique ",(0,r.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_(random)"},"UUID v4")," generated by you and added as a parameter to the initial financial request. It can then be used to query the transaction status endpoint.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Response"),(0,r.kt)("th",{parentName:"tr",align:null},"Response Code"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"OK")),(0,r.kt)("td",{parentName:"tr",align:null},"Response code ",(0,r.kt)("strong",{parentName:"td"},"200")," + ",(0,r.kt)("a",{parentName:"td",href:"/restapi/REST%20API%202.14.0/restobjects#transaction-result-object"},"Transaction Result"),". ",(0,r.kt)("br",null),(0,r.kt)("br",null)," There are two possible outcomes:",(0,r.kt)("br",null)," - The ",(0,r.kt)("inlineCode",{parentName:"td"},"transactionReference")," was found in the database and the associated ",(0,r.kt)("a",{parentName:"td",href:"/restapi/REST%20API%202.14.0/restobjects#transaction-result-object"},"Transaction Result")," object is delivered. By checking the ",(0,r.kt)("a",{parentName:"td",href:"/restapi/REST%20API%202.14.0/restobjects#financialStatus"},"financial status")," field you will be able to know the status of the transaction at the time of the query. ",(0,r.kt)("br",null)," - The ",(0,r.kt)("inlineCode",{parentName:"td"},"transactionReference")," was not found in the Handpoint gateway. The ",(0,r.kt)("a",{parentName:"td",href:"/restapi/REST%20API%202.14.0/restobjects#financialStatus"},"financial status")," received in this case will be ",(0,r.kt)("inlineCode",{parentName:"td"},"UNDEFINED")," (NOT FOUND)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Unauthorized")),(0,r.kt)("td",{parentName:"tr",align:null},"Response code ",(0,r.kt)("strong",{parentName:"td"},"401"),". The client request has not been completed because it lacks valid authentication credentials for the requested resource. Please check your API Key is correct for this ",(0,r.kt)("inlineCode",{parentName:"td"},"transactionReference"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Forbidden")),(0,r.kt)("td",{parentName:"tr",align:null},"Response code ",(0,r.kt)("strong",{parentName:"td"},"403"),". Authentication was unsuccessful. Please check your API Key is valid.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'Operation executed using CLI tool CURL:\nREQUEST:\n    curl -X GET \\\\\n      -H"ApiKeyCLoud: MeRcHaNt-ApIkEy" \\\\\n      "https://transactions.handpoint.com/transactions/3e665342-a95b-49c1-b6fe-b3f102305a76/status" (production)\n      "https://transactions.handpoint.io/transactions/3e665342-a95b-49c1-b6fe-b3f102305a76/status" (development)\n\nRESPONSE:\n{\n    "aid": "A0000000031010",\n    "arc": "00",\n    "iad": "06011103A00000",\n    "tsi": "0000",\n    "tvr": "0000000000",\n    "cardEntryType": "ICC",\n    "cardLanguagePreference": "",\n    "currency": "USD",\n    "type": "SALE",\n    "tipAmount": 0,\n    "totalAmount": 100,\n    "requestedAmount": 100,\n    "dueAmount": 0,\n    "tipPercentage": 0,\n    "efttimestamp": "20230511110113006",\n    "originalEFTTransactionID": "",\n    "paymentScenario": "CHIPCONTACTLESS",\n    "verificationMethod": "UNDEFINED",\n    "authorisationCode": "123456",\n    "cardSchemeName": "Visa",\n    "cardToken": "",\n    "maskedCardNumber": "************5733",\n    "cardTypeId": "",\n    "customerReference": "",\n    "efttransactionID": "66d94f20-efda-11ed-929c-47fffda5f9b5",\n    "transactionID": "66d94f20-efda-11ed-929c-47fffda5f9b5",\n    "errorMessage": "",\n    "expiryDateMMYY": "0924",\n    "issuerResponseCode": "00",\n    "rrn": "0000511573740",\n    "tenderType": "CREDIT",\n    "unMaskedPan": "",\n    "merchantAddress": "Navalaosa 48770 Madrid",\n    "merchantName": "Hago la cama 2",\n    "mid": "",\n    "cardHolderName": "",\n    "chipTransactionReport": "",\n    "customerReceipt": "",\n    "merchantReceipt": "",\n    "signatureUrl": "",\n    "statusMessage": "",\n    "tid": "",\n    "transactionReference": "3e665342-a95b-49c1-b6fe-b3f102305a76",\n    "transactionOrigin": "",\n    "finStatus": "AUTHORISED"\n}\n')))}c.isMDXComponent=!0},58921:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/getTransactionStatusEndpoint.drawio-c446aeef53cce796e297b0f95ff8318a.png"}}]);