(this.webpackJsonptodo_react_application=this.webpackJsonptodo_react_application||[]).push([[0],{273:function(e,a,t){e.exports=t(440)},278:function(e,a,t){},295:function(e,a,t){},296:function(e,a,t){},302:function(e,a,t){},303:function(e,a,t){},304:function(e,a,t){},305:function(e,a,t){},306:function(e,a,t){},436:function(e,a,t){},437:function(e,a,t){},438:function(e,a,t){e.exports=t.p+"static/media/Example_Task_Graph.879d9a8f.jpg"},439:function(e,a,t){},440:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(101),c=t.n(r),o=(t(278),t(56)),s=t(11),i=t(13),m=t.n(i),u=t(46),d=t(17),p=t(28),f=t.n(p),h=t(39),E=t.n(h);var g=function(e){return e.sort((function(e,a){return e.completed&&!a.completed?1:!e.completed&&a.completed?-1:m()(e.endDate).isAfter(a.endDate)?1:m()(a.endDate).isAfter(e.endDate)?-1:0}))};var k=function(e,a){var t=m()().valueOf(),n=m()(e,"YYYY-MM-DD").valueOf(),l=(t-n)/(m()(a,"YYYY-MM-DD").valueOf()-n)*100;return l<0?0:isFinite(l)?l:100},L=t(469),v=t(470),y=t(217),C=t(475);t(295);var b=function(e){return l.a.createElement("button",{className:"simple-button-".concat(e.variant," simple-button btn btn-block mt-3 ").concat(e.disabled?"disabled":""),onClick:e.onClick},e.children)};t(296);var D=Object(d.f)((function(e){var a=Object(n.useState)(""),t=Object(s.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(""),i=Object(s.a)(o,2),m=i[0],u=i[1],d=Object(n.useState)(!1),p=Object(s.a)(d,2),h=p[0],g=p[1],k=Object(n.useState)(!1),D=Object(s.a)(k,2),w=D[0],x=D[1];return l.a.createElement(L.a,{className:"authentication"},l.a.createElement(v.a,{className:"authentication-row px-2"},l.a.createElement(y.a,{xs:12,lg:6,className:"m-auto py-2"},l.a.createElement(C.a,{className:"login p-3 pb-4 rounded"},l.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Sign in"),l.a.createElement(C.a.Group,{controlId:"username"},l.a.createElement(C.a.Control,{autoFocus:!0,type:"text",placeholder:"Username",value:r,onChange:function(e){c(e.target.value),0===e.target.value.length?g(!0):g(!1)}}),h&&l.a.createElement(C.a.Text,{style:{color:"red"}},"Please enter a valid username.")),l.a.createElement(b,{variant:"login",type:"submit",onClick:function(a){a.preventDefault(),0===r.length?g(!0):(f.a.get("https://3f77y34kad.execute-api.eu-west-2.amazonaws.com/dev/users?username=".concat(r)).then((function(a){if(1===a.data.user.length){var t=a.data.user[0].userID;E.a.set("userID",t,{expires:7}),e.setLoggedIn(!0)}else g(!0)})).catch((function(e){console.log("Error fetching data",e)})),e.history.push("/todo_react_application/"))}},"Go"))),l.a.createElement(y.a,{xs:12,lg:6,className:"m-auto py-2"},l.a.createElement(C.a,{className:"new-user p-3 pb-4 rounded"},l.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Create new user"),l.a.createElement(C.a.Group,{controlId:"new-username"},l.a.createElement(C.a.Control,{type:"text",placeholder:"New Username",value:m,onChange:function(e){u(e.target.value),0===e.target.value.length?x(!0):x(!1)}}),w&&l.a.createElement(C.a.Text,{style:{color:"red"}},"Please enter a valid and unique username.")),l.a.createElement(b,{variant:"new-user",type:"submit",onClick:function(a){if(a.preventDefault(),0===m.length)x(!0);else{var t={username:m};f.a.get("https://3f77y34kad.execute-api.eu-west-2.amazonaws.com/dev/users?username=".concat(m)).then((function(e){if(e.data.user.length>0)throw x(!0),new Error("User already exists in database, usernames must be unique.");return f.a.post("https://3f77y34kad.execute-api.eu-west-2.amazonaws.com/dev/users",t)})).then((function(a){var t=a.data.newUser[0].userID;E.a.set("userID",t,{expires:7}),e.setLoggedIn(!0)})).catch((function(e){console.log("Error fetching data",e)})),e.history.push("/todo_react_application/")}}},"Go")))))})),w=t(478),x=t(476);t(302);var O=Object(d.f)((function(e){var a=Object(n.useState)(!1),t=Object(s.a)(a,2),r=t[0],c=t[1];return l.a.createElement(w.a,{className:"navbar--my-tasks-app",expand:"sm",fixed:"top",expanded:r},l.a.createElement(w.a.Brand,{className:"brand--my-tasks-app"},"My Tasks App"),l.a.createElement(w.a.Toggle,{"aria-controls":"basic-navbar-nav",onClick:function(){return c(!r&&"expanded")}}),l.a.createElement(w.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(x.a,{onClick:function(){return c(!1)}},l.a.createElement(u.b,{className:"px-3 navlink--my-tasks-app",to:"/todo_react_application/"},"Tasks"),l.a.createElement(u.b,{className:"px-3 navlink--my-tasks-app",to:"/todo_react_application/graph"},"Graph"),l.a.createElement(u.b,{className:"px-3 navlink--my-tasks-app",to:"/todo_react_application/day-plan"},"Day Plan")),e.loggedIn&&l.a.createElement(x.a,{className:"ml-auto"},l.a.createElement(b,{variant:"logout",onClick:function(){e.history.push("/todo_react_application/"),e.handleLogOut()}},"Log Out"))))}));t(303);var N=function(){return l.a.createElement("footer",{className:"block-quote footer"},l.a.createElement("div",{className:"container"},l.a.createElement("span",null,l.a.createElement("cite",null,"Saoirse Bryar, 2020"))))},T=t(480),I=t(479),M=t(236);var Y=function(e){return l.a.createElement(M.a,{in:e.cardOpen},l.a.createElement(I.a.Body,{tabIndex:"0"},!e.completed&&l.a.createElement(v.a,null,l.a.createElement(y.a,{xs:6},l.a.createElement("h5",null,"Start: ",m()(e.startDate).format("DD/MM/YYYY"))),l.a.createElement(y.a,{xs:6,className:"col-6 text-right"},l.a.createElement("h5",null,"Due: ",m()(e.endDate).format("DD/MM/YYYY")))),!!e.completed&&l.a.createElement("h5",null,"Completed: ",m()(e.completeDate).format("DD/MM/YYYY")),l.a.createElement(v.a,null,l.a.createElement(y.a,null,l.a.createElement("h6",null,e.taskDetails))),!!e.repeats&&l.a.createElement(v.a,null,l.a.createElement(y.a,null,l.a.createElement("h6",null,"This task repeats ",e.repeatAfterCompletionFrequency," ",1===e.repeatAfterCompletionFrequency?e.repeatAfterCompletionFrequencyType.substring(0,e.repeatAfterCompletionFrequencyType.length-1):e.repeatAfterCompletionFrequencyType," after being completed."))),l.a.createElement(v.a,null,!e.completed&&l.a.createElement(y.a,null,l.a.createElement(b,{onClick:e.handleCompleteClick,variant:"complete"},"Complete task")),l.a.createElement(y.a,null,l.a.createElement(b,{onClick:e.handleDeleteClick,variant:"delete"},"Delete task")),e.dayPlanListPage&&l.a.createElement(y.a,null,l.a.createElement(b,{onClick:e.handleListDeleteClick,variant:"remove-from-plan"},"Remove from plan")))))},R=t(471),j=t(237);var A=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",Object.assign({},e,{className:"btn","data-tip":!0,"data-for":e.tooltip}),e.children),l.a.createElement(j.a,{id:e.tooltip,effect:"solid"},e.tooltip))};function S(e){return l.a.createElement("svg",{className:"bi bi-check-box",width:e.squareHeight,height:e.squareHeight,viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z",clipRule:"evenodd"}),l.a.createElement("path",{fillRule:"evenodd",d:"M1.5 13A1.5 1.5 0 003 14.5h10a1.5 1.5 0 001.5-1.5V8a.5.5 0 00-1 0v5a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V3a.5.5 0 01.5-.5h8a.5.5 0 000-1H3A1.5 1.5 0 001.5 3v10z",clipRule:"evenodd"}))}function q(e){return l.a.createElement("svg",{className:"bi bi-x-square",width:e.squareHeight,height:e.squareHeight,viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z",clipRule:"evenodd"}),l.a.createElement("path",{fillRule:"evenodd",d:"M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z",clipRule:"evenodd"}),l.a.createElement("path",{fillRule:"evenodd",d:"M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z",clipRule:"evenodd"}))}function H(e){return l.a.createElement("svg",{className:"bi bi-plus-circle",width:e.squareHeight,height:e.squareHeight,viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z",clipRule:"evenodd"}),l.a.createElement("path",{fillRule:"evenodd",d:"M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z",clipRule:"evenodd"}),l.a.createElement("path",{fillRule:"evenodd",d:"M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z",clipRule:"evenodd"}))}function F(e){return l.a.createElement("svg",{className:"bi bi-arrow-clockwise",width:e.squareHeight,height:e.squareHeight,viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M3.17 6.706a5 5 0 017.103-3.16.5.5 0 10.454-.892A6 6 0 1013.455 5.5a.5.5 0 00-.91.417 5 5 0 11-9.375.789z",clipRule:"evenodd"}),l.a.createElement("path",{fillRule:"evenodd",d:"M8.147.146a.5.5 0 01.707 0l2.5 2.5a.5.5 0 010 .708l-2.5 2.5a.5.5 0 11-.707-.708L10.293 3 8.147.854a.5.5 0 010-.708z",clipRule:"evenodd"}))}function z(e){return l.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 226.772 226.772",width:e.squareHeight,height:e.squareHeight},l.a.createElement("defs",null,l.a.createElement("path",{d:"M176.72 13.87L177.51 13.95L178.29 14.06L179.06 14.2L179.82 14.37L180.57 14.57L181.3 14.8L182.03 15.05L182.73 15.34L183.43 15.65L184.11 15.98L184.77 16.35L185.42 16.73L186.06 17.14L186.67 17.57L187.27 18.03L187.85 18.51L188.41 19.01L188.95 19.53L189.47 20.07L189.97 20.63L190.45 21.21L190.91 21.81L191.34 22.43L191.75 23.06L192.14 23.71L192.5 24.37L192.83 25.05L193.14 25.75L193.43 26.46L193.68 27.18L193.91 27.91L194.11 28.66L194.28 29.42L194.42 30.19L194.54 30.97L194.62 31.76L194.66 32.56L194.68 33.36L194.68 117.72L193.67 117.12L191.74 116.07L189.77 115.1L187.76 114.2L185.7 113.38L183.61 112.63L181.48 111.97L179.32 111.39L177.12 110.89L174.89 110.48L172.63 110.16L170.35 109.93L168.03 109.79L165.7 109.74L163.36 109.79L161.05 109.93L158.77 110.16L156.51 110.48L154.28 110.89L152.08 111.39L149.92 111.97L147.79 112.63L145.69 113.38L143.64 114.2L141.63 115.1L139.65 116.07L137.73 117.12L135.85 118.24L134.01 119.43L132.23 120.68L130.49 122.01L128.81 123.39L127.19 124.84L125.62 126.35L124.11 127.92L122.66 129.55L121.27 131.23L119.95 132.96L118.69 134.75L117.51 136.58L116.39 138.46L115.34 140.39L114.36 142.36L113.46 144.37L112.64 146.43L111.9 148.52L111.24 150.65L110.66 152.82L110.16 155.01L109.75 157.24L109.43 159.5L109.19 161.79L109.05 164.1L109.01 166.43L109.05 168.77L109.19 171.08L109.43 173.37L109.75 175.62L110.16 177.85L110.66 180.05L111.24 182.22L111.9 184.34L112.64 186.44L113.46 188.49L114.36 190.51L115.34 192.48L116.06 193.8L34.24 193.8L33.44 193.78L32.64 193.74L31.85 193.66L31.07 193.54L30.3 193.4L29.54 193.23L28.79 193.03L28.06 192.8L27.34 192.55L26.63 192.26L25.93 191.95L25.25 191.62L24.59 191.26L23.94 190.87L23.3 190.46L22.69 190.03L22.09 189.57L21.51 189.09L20.95 188.59L20.41 188.07L19.89 187.53L19.39 186.97L18.91 186.39L18.45 185.79L18.02 185.18L17.61 184.54L17.23 183.89L16.86 183.23L16.53 182.55L16.22 181.85L15.93 181.15L15.68 180.42L15.45 179.69L15.25 178.94L15.08 178.18L14.94 177.41L14.83 176.63L14.75 175.84L14.7 175.05L14.68 174.24L14.68 33.36L14.7 32.56L14.75 31.76L14.83 30.97L14.94 30.19L15.08 29.42L15.25 28.66L15.45 27.91L15.68 27.18L15.93 26.46L16.22 25.75L16.53 25.05L16.86 24.37L17.23 23.71L17.61 23.06L18.02 22.43L18.45 21.81L18.91 21.21L19.39 20.63L19.89 20.07L20.41 19.53L20.95 19.01L21.51 18.51L22.09 18.03L22.69 17.57L23.3 17.14L23.94 16.73L24.59 16.35L25.25 15.98L25.93 15.65L26.63 15.34L27.34 15.05L28.06 14.8L28.79 14.57L29.54 14.37L30.3 14.2L31.07 14.06L31.85 13.95L32.64 13.87L33.44 13.82L34.24 13.8L175.12 13.8L175.93 13.82L176.72 13.87Z",id:"b92DkvElzO"}),l.a.createElement("path",{d:"M58.09 62.42C58.09 67.94 53.6 72.42 48.09 72.42C42.57 72.42 38.09 67.94 38.09 62.42C38.09 56.9 42.57 52.42 48.09 52.42C53.6 52.42 58.09 56.9 58.09 62.42Z",id:"b4FGfu3EoI"}),l.a.createElement("path",{d:"M58.09 97.42C58.09 102.94 53.6 107.42 48.09 107.42C42.57 107.42 38.09 102.94 38.09 97.42C38.09 91.9 42.57 87.42 48.09 87.42C53.6 87.42 58.09 91.9 58.09 97.42Z",id:"dmgZhuvUK"}),l.a.createElement("path",{d:"M58.09 132.42C58.09 137.94 53.6 142.42 48.09 142.42C42.57 142.42 38.09 137.94 38.09 132.42C38.09 126.9 42.57 122.42 48.09 122.42C53.6 122.42 58.09 126.9 58.09 132.42Z",id:"a1DOKA8Ibz"}),l.a.createElement("path",{d:"M150.66 57.42C153.3 57.42 155.45 59.56 155.45 62.21C155.45 63.17 155.45 61.25 155.45 62.21C155.45 64.85 153.3 67 150.66 67C135.62 67 95.28 67 80.23 67C77.59 67 75.45 64.85 75.45 62.21C75.45 61.25 75.45 63.17 75.45 62.21C75.45 59.56 77.59 57.42 80.23 57.42C95.28 57.42 135.62 57.42 150.66 57.42Z",id:"c28AxDqoQo"}),l.a.createElement("path",{d:"M140.66 92.42C143.3 92.42 145.45 94.56 145.45 97.21C145.45 98.17 145.45 96.25 145.45 97.21C145.45 99.85 143.3 102 140.66 102C127.62 102 93.28 102 80.23 102C77.59 102 75.45 99.85 75.45 97.21C75.45 96.25 75.45 98.17 75.45 97.21C75.45 94.56 77.59 92.42 80.23 92.42C93.28 92.42 127.62 92.42 140.66 92.42Z",id:"bqYnaTyHU"}),l.a.createElement("path",{d:"M107.91 127.42C109.31 127.42 110.45 128.56 110.45 129.96C110.45 131.37 110.45 133.05 110.45 134.45C110.45 135.86 109.31 136.99 107.91 136.99C101.41 136.99 84.48 136.99 77.99 136.99C76.58 136.99 75.45 135.86 75.45 134.45C75.45 133.05 75.45 131.37 75.45 129.96C75.45 128.56 76.58 127.42 77.99 127.42C84.48 127.42 101.41 127.42 107.91 127.42Z",id:"a71ceKizCq"}),l.a.createElement("path",{d:"M192.71 188.56C194.84 190.68 194.84 194.13 192.71 196.25C191.64 197.32 192.28 196.68 191.22 197.75C189.09 199.87 185.64 199.87 183.52 197.75C173.68 187.91 148.02 162.25 138.18 152.41C136.06 150.29 136.06 146.84 138.18 144.72C139.25 143.65 138.61 144.29 139.68 143.22C141.8 141.1 145.25 141.1 147.38 143.22C157.21 153.06 182.87 178.72 192.71 188.56Z",id:"aOXryVz0X"}),l.a.createElement("path",{d:"M220.45 166.68C220.45 196.98 195.8 221.59 165.45 221.59C135.09 221.59 110.45 196.98 110.45 166.68C110.45 136.37 135.09 111.77 165.45 111.77C195.8 111.77 220.45 136.37 220.45 166.68Z",id:"a2MuRFIqIR"}),l.a.createElement("path",{d:"M147.38 197.75C145.25 199.87 141.8 199.87 139.68 197.75C138.61 196.68 139.25 197.32 138.18 196.25C136.06 194.13 136.06 190.68 138.18 188.56C148.02 178.72 173.68 153.06 183.52 143.22C185.64 141.1 189.09 141.1 191.22 143.22C192.28 144.29 191.64 143.65 192.71 144.72C194.84 146.84 194.84 150.29 192.71 152.41C182.87 162.25 157.21 187.91 147.38 197.75Z",id:"cnNdDSLRO"})),l.a.createElement("g",null,l.a.createElement("g",null,l.a.createElement("g",null,l.a.createElement("use",{xlinkHref:"#b92DkvElzO",opacity:"1",fill:"#000000",fillOpacity:"0"}),l.a.createElement("g",null,l.a.createElement("use",{xlinkHref:"#b92DkvElzO",opacity:"1",fillOpacity:"0",stroke:"#000000",strokeWidth:"10",strokeOpacity:"1"}))),l.a.createElement("g",null,l.a.createElement("use",{xlinkHref:"#b4FGfu3EoI",opacity:"1",fill:"#000000",fillOpacity:"0.99"})),l.a.createElement("g",null,l.a.createElement("use",{xlinkHref:"#dmgZhuvUK",opacity:"1",fill:"#000000",fillOpacity:"0.99"})),l.a.createElement("g",null,l.a.createElement("use",{xlinkHref:"#a1DOKA8Ibz",opacity:"1",fill:"#000000",fillOpacity:"0.99"})),l.a.createElement("g",null,l.a.createElement("use",{xlinkHref:"#c28AxDqoQo",opacity:"1",fill:"#000000",fillOpacity:"1"})),l.a.createElement("g",null,l.a.createElement("use",{xlinkHref:"#bqYnaTyHU",opacity:"1",fill:"#000000",fillOpacity:"1"})),l.a.createElement("g",null,l.a.createElement("use",{xlinkHref:"#a71ceKizCq",opacity:"1",fill:"#000000",fillOpacity:"1"})),l.a.createElement("g",null,l.a.createElement("use",{xlinkHref:"#aOXryVz0X",opacity:"1",fill:"#000000",fillOpacity:"1"})),l.a.createElement("g",null,l.a.createElement("g",null,l.a.createElement("filter",{id:"shadow5582260",x:"101.45",y:"102.77",width:"129",height:"128.82",filterUnits:"userSpaceOnUse",primitiveUnits:"userSpaceOnUse"},l.a.createElement("feFlood",null),l.a.createElement("feComposite",{in2:"SourceAlpha",operator:"in"}),l.a.createElement("feGaussianBlur",{stdDeviation:"1"}),l.a.createElement("feOffset",{dx:"1",dy:"1",result:"afterOffset"}),l.a.createElement("feFlood",{floodColor:"#000000",floodOpacity:"0.5"}),l.a.createElement("feComposite",{in2:"afterOffset",operator:"in"}),l.a.createElement("feMorphology",{operator:"dilate",radius:"1"}),l.a.createElement("feComposite",{in2:"SourceAlpha",operator:"out"})),l.a.createElement("path",{d:"M220.45 166.68C220.45 196.98 195.8 221.59 165.45 221.59C135.09 221.59 110.45 196.98 110.45 166.68C110.45 136.37 135.09 111.77 165.45 111.77C195.8 111.77 220.45 136.37 220.45 166.68Z",id:"cobvpoTIR",fill:"white",fillOpacity:"1",filter:"url(#shadow5582260)"})),l.a.createElement("use",{xlinkHref:"#a2MuRFIqIR",opacity:"1",fill:"#000000",fillOpacity:"0"}),l.a.createElement("g",null,l.a.createElement("use",{xlinkHref:"#a2MuRFIqIR",opacity:"1",fillOpacity:"0",stroke:"#000000",strokeWidth:"10",strokeOpacity:"1"}))),l.a.createElement("g",null,l.a.createElement("use",{xlinkHref:"#cnNdDSLRO",opacity:"1",fill:"#000000",fillOpacity:"1"})))))}var _=function(e){var a=e.percentageCompletion;return l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar",role:"progressbar",style:function(e){var a={};return e<5&&(e=5),a.backgroundImage="linear-gradient(to right,".concat(function(e){var a,t,n;if(e<=50){var l=128+127*e/50;a="rgb(".concat(255*e/50,",").concat(l,",0)"),n="".concat("rgb(0,128,0)",",").concat(a)}if(e>=50){var r=128+127*e/100;a="rgb(".concat(255*e/100,",").concat(r,",0)"),t="rgb(255,".concat(255-255*(e-50)/50,",0)"),n="".concat("rgb(0,128,0)",",").concat(a,",").concat(t)}return n}(e),")"),a.width="".concat(e,"%"),a}(a),"aria-valuenow":e.percentageCompletion,"aria-valuemin":"0","aria-valuemax":"100","aria-label":"Percentage of way through time allocated for task"}))};var P=function(e){return l.a.createElement(I.a.Header,{className:"h4","aria-controls":"task-item-contents","aria-expanded":e.open},l.a.createElement(v.a,null,l.a.createElement(y.a,{xs:8,style:{textDecoration:e.completed?"line-through":"",cursor:"pointer"},tabIndex:"0",onClick:function(){e.openTaskCard(e.taskID)},onKeyPress:function(a){return 13===a.charCode?e.openTaskCard(e.taskID):null}},!!e.repeats&&l.a.createElement(F,{squareHeight:"1.2em"})," ",e.name),l.a.createElement(y.a,{xs:4},l.a.createElement(R.a,{className:"float-right"},!e.completed&&l.a.createElement(A,{onClick:e.handleCompleteClick,"aria-label":"Mark as complete",tooltip:"Mark as complete"},l.a.createElement(S,{squareHeight:"1.5em"})),l.a.createElement(A,{onClick:e.handleDeleteClick,"aria-label":"Delete",tooltip:"Delete"},l.a.createElement(q,{squareHeight:"1.3em"})),e.dayPlanListPage&&l.a.createElement(A,{onClick:e.handleListDeleteClick,"aria-label":"Remove from day plan",tooltip:"Remove from day plan"},l.a.createElement(z,{squareHeight:"1.5em"}))))),!e.completed&&l.a.createElement(v.a,null,l.a.createElement(y.a,null,l.a.createElement(_,{percentageCompletion:e.percentageCompletion}))))};t(304);var G=function(e){function a(){e.deleteTask(e.taskID)}function t(){e.completeTask(e.taskID)}function n(){e.deleteDayPlanTask(e.taskID)}return l.a.createElement(I.a,{className:"task-item",style:{backgroundColor:e.completed?"rgba(130, 138, 146, 0.74)":"#BADEC6"}},l.a.createElement(P,Object.assign({},e,{handleListDeleteClick:n,handleCompleteClick:t,handleDeleteClick:a})),l.a.createElement(Y,Object.assign({},e,{handleListDeleteClick:n,handleDeleteClick:a,handleCompleteClick:t})))};t(52);var B=function(e){return l.a.createElement(I.a.Header,{tabIndex:"0",as:"h4","aria-controls":"add-task-contents","aria-expanded":e.open,style:{cursor:"pointer"},onClick:function(){return e.setOpen(!e.open)},onKeyPress:function(a){return 13===a.charCode?e.setOpen(!e.open):null}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10 align-self-center"},"Add Task"),l.a.createElement("div",{className:"col-2"},l.a.createElement("div",{className:"float-right"},l.a.createElement(H,{squareHeight:"1.2em"})))))};var Z=function(e){return l.a.createElement(C.a.Group,{controlId:"formTaskName"},l.a.createElement(C.a.Control,{type:"text",placeholder:e.errors.name?"Input a name for your task":"Name your next task",onChange:function(a){return e.setName(a.target.value)},style:e.errors.name?{backgroundColor:"yellow"}:null}))};var U=function(e){return l.a.createElement(C.a.Group,{controlId:"formTaskDetails"},l.a.createElement(C.a.Control,{type:"text",placeholder:"Enter details about your task",onChange:function(a){return e.setTaskDetails(a.target.value)}}))};var V=function(e){return l.a.createElement(C.a.Row,null,l.a.createElement(C.a.Group,{as:y.a,controlId:"formStartDate"},l.a.createElement(C.a.Label,null,"When should you start this task?"),l.a.createElement(C.a.Control,{type:"date",onChange:function(a){return e.setStartDate(a.target.value)}})),l.a.createElement(C.a.Group,{as:y.a,controlId:"formEndDate"},l.a.createElement(C.a.Label,null,"When do you need to finish this task?"),l.a.createElement(C.a.Control,{type:"date",onChange:function(a){return e.setEndDate(a.target.value)}})))};var W=function(e){return l.a.createElement(l.a.Fragment,null,e.errors.repeats&&l.a.createElement("span",{className:"error"},"Select whether this task repeats"),l.a.createElement(C.a.Row,{className:"customRow"},l.a.createElement(C.a.Check,{defaultChecked:!0,type:"radio",name:"repeatChoice",className:"align-self-center",id:"doesNotRepeat",value:"doesNotRepeat",onChange:function(a){e.handleRepeatType(a.target.value)}}),l.a.createElement("div",{className:"col align-self-center"},l.a.createElement(C.a.Label,{className:"noBottonMargin"},"Does not repeat"))))};var K=function(e){return l.a.createElement(C.a.Row,{className:"customRow"},l.a.createElement(C.a.Check,{type:"radio",name:"repeatChoice",className:"align-self-center",id:"repeatsAfterCompletion",value:"repeatsAfterCompletion",onChange:function(a){e.handleRepeatType(a.target.value)}}),l.a.createElement("div",{className:"col-4 col-md-2 align-self-center"},l.a.createElement(C.a.Label,{className:"noBottonMargin"},"Repeats every")),l.a.createElement("div",{className:"col-3 col-md-1"},l.a.createElement(C.a.Control,{type:"number",onChange:function(a){""===a.target.value?(document.getElementById("doesNotRepeat").checked=!0,e.handleRepeatType("doesNotRepeat")):(document.getElementById("repeatsAfterCompletion").checked=!0,e.handleRepeatType("repeatsAfterCompletion")),e.setRepeatAfterCompletionFrequency(a.target.value)},placeholder:e.errors.repeatAfterCompletionFrequency?"?":null,style:e.errors.repeatAfterCompletionFrequency?{backgroundColor:"yellow"}:null})),l.a.createElement("div",{className:"col-4 col-md-2"},l.a.createElement(C.a.Control,{as:"select",custom:!0,onChange:function(a){return e.setRepeatAfterCompletionFrequencyType(a.target.value)}},l.a.createElement("option",null,"days"),l.a.createElement("option",null,"weeks"),l.a.createElement("option",null,"months"),l.a.createElement("option",null,"years"))),l.a.createElement("div",{className:"col-12 col-md-6 align-self-center"},l.a.createElement(C.a.Label,{className:"noBottonMargin"},"after the task has been completed")))};var X=function(e){var a=Object(n.useState)(!1),t=Object(s.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(""),i=Object(s.a)(o,2),u=i[0],d=i[1],p=Object(n.useState)(""),f=Object(s.a)(p,2),h=f[0],E=f[1],g=Object(n.useState)(m()().format("YYYY-MM-DD")),k=Object(s.a)(g,2),L=k[0],y=k[1],D=Object(n.useState)(m()().format("YYYY-MM-DD")),w=Object(s.a)(D,2),x=w[0],O=w[1],N=Object(n.useState)(!1),T=Object(s.a)(N,2),Y=T[0],R=T[1],j=Object(n.useState)(null),A=Object(s.a)(j,2),S=A[0],q=A[1],H=Object(n.useState)(null),F=Object(s.a)(H,2),z=F[0],_=F[1],P=Object(n.useState)("days"),G=Object(s.a)(P,2),X=G[0],$=G[1],J=Object(n.useState)({name:!1,repeatAfterCompletionFrequency:!1}),Q=Object(s.a)(J,2),ee=Q[0],ae=Q[1];function te(e){"repeatsAfterCompletion"===e?(R(!0),q("repeatsAfterCompletion")):R(!1)}return l.a.createElement(v.a,{className:"my-2"},l.a.createElement(I.a,{className:"add-task"},l.a.createElement(B,{open:r,setOpen:c}),l.a.createElement(M.a,{in:r},l.a.createElement(I.a.Body,null,l.a.createElement(C.a,null,l.a.createElement(Z,{setName:d,errors:ee}),l.a.createElement(U,{setTaskDetails:E}),l.a.createElement(V,{setStartDate:y,setEndDate:O}),l.a.createElement(W,{errors:ee,handleRepeatType:te}),l.a.createElement(K,{errors:ee,handleRepeatType:te,setRepeatAfterCompletionFrequency:_,setRepeatAfterCompletionFrequencyType:$}),l.a.createElement(b,{variant:"add-task",type:"submit",onClick:function(a){if(a.preventDefault(),""===u||null===Y||"repeatsAfterCompletion"===S&&null===z){var t=Object.assign({},ee);t.name=""===u,t.repeatAfterCompletionFrequency="repeatsAfterCompletion"===S&&null===z,ae(t)}else e.addTask(u,h,L,x,Y,S,z,X)}},"Submit Task"))))))};t(305);var $=function(e){var a=e.tasks&&e.tasks.filter((function(e){return!e.completed&&e.endDate.substring(0,10)===m()().format("YYYY-MM-DD")})).length,t=e.tasks&&e.tasks.filter((function(e){return 0===e.completed})).length;return l.a.createElement(v.a,{className:"my-2"},l.a.createElement(I.a.Header,{className:"intro",tabIndex:"0"},l.a.createElement("h4",null,"Hello ",e.userGreeting,", you have ",a," task",1===a?"":"s"," due today out of ",t," incomplete task",1===t?"":"s")))};t(306);var J=function(e){var a=Object(n.useState)(Object(T.a)()),t=Object(s.a)(a,2),r=t[0],c=t[1];return e.userGreeting&&l.a.createElement(L.a,{fluid:"lg"},l.a.createElement(y.a,null,l.a.createElement($,{tasks:e.tasks,userGreeting:e.userGreeting}),l.a.createElement(X,{key:r,addTask:function(a,t,n,l,r,o,s,i,m,u){c(Object(T.a)()),e.addTask(a,t,n,l,r,o,s,i,m,u)},tasks:e.tasks}),e.tasks&&e.tasks.map((function(a){return l.a.createElement(v.a,{key:a.taskID,id:a.taskID,className:"my-2"},l.a.createElement(G,Object.assign({completeTask:e.completeTask,deleteTask:e.deleteTask,openTaskCard:e.openTaskCard},a)))}))))},Q=t(223),ee=(t(436),t(235)),ae=t.n(ee);var te=function(e){return l.a.createElement("div",{className:"tooltip--container",style:{backgroundColor:"".concat(ae()(e.point.serieColor).lighten(15).toString())}},e.point.data.y," ",l.a.createElement("br",null),e.point.id.endsWith("0")&&"Start: ",e.point.id.endsWith("1")&&"Due: ",m()(e.point.data.x).format("MMM DD"))};var ne=function(e){var a=[{id:"Today",data:[{x:m()().format("YYYY-MM-DD"),y:"Today"},{x:m()().format("YYYY-MM-DD"),y:"Today"}]}];return a.push.apply(a,Object(o.a)(e.filter((function(e){return!e.completed})).map((function(e){var a={};a.id=e.taskID;var t={};t.x=m()(e.startDate).format("YYYY-MM-DD"),t.y=e.name;var n={};return n.x=m()(e.endDate).format("YYYY-MM-DD"),n.y=e.name,a.data=[t,n],a})))),a},le=function(e){var a=e.textAnchor,t=e.textBaseline,n=e.value,r=e.x,c=e.y,o=new RegExp("^(.{".concat(29,"}[^\\w]*).*")),s=new RegExp("([^\\s].{0,".concat(16,"}(?=[\\s\\W]|$))"),"gm"),i=n.replace(o,"$1...").match(s).slice(0,2).map((function(e,a){return l.a.createElement("tspan",{key:e,dy:16*a,x:-15,style:{fontFamily:"Verdana, Arial, sans-serif",fontSize:"14px"}},e)}));return l.a.createElement("g",{transform:"translate(".concat(r,",").concat(c,")")},l.a.createElement("text",{alignmentBaseline:t,textAnchor:a},i))};t(437);var re=Object(d.f)((function(e){return l.a.createElement(L.a,{fluid:"lg",style:{height:window.innerHeight-125<600?window.innerHeight-125:600}},l.a.createElement(Q.a,{className:"graph",style:{cursor:"crosshair"},data:ne(e.tasks),margin:{top:70,right:20,bottom:70,left:150},xScale:{type:"time",format:"%Y-%m-%d"},xFormat:"time:%Y-%m-%d",yScale:{type:"point"},axisTop:null,axisRight:null,axisLeft:{renderTick:le},axisBottom:{format:"%b %d",tickRotation:-45,tickPadding:15},theme:{fontSize:14,fontFamily:"Verdana, Arial, sans-serif"},colors:{scheme:"accent"},lineWidth:20,pointSize:20,enableGridX:!0,enableGridY:!0,tooltip:te,useMesh:!0,onClick:function(a){var t=a.id.slice(0,-2);"Today"===t?e.history.push("/todo_react_application/day-plan"):(e.openFromGraphId(t),e.history.push("/todo_react_application/"))},enableCrosshair:!1}))})),ce=t(474);var oe=function(e){return l.a.createElement(L.a,{fluid:"lg"},l.a.createElement("h3",{style:{textAlign:"center"}},"Start adding tasks to see them displayed here, like the example below."),l.a.createElement(ce.a,{src:t(438),fluid:!0}))};var se=function(e){var a=e.tasks&&e.tasks.filter((function(e){return!e.completed&&!e.dayPlan}));return l.a.createElement(y.a,{xs:12,lg:4,className:"py-2"},l.a.createElement(C.a,{className:"choose-tasks"},l.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Select Tasks"),l.a.createElement(C.a.Group,{controlId:"choose-tasks"},l.a.createElement(C.a.Control,{as:"select",onChange:function(a){var t=a.target.value;e.addToDayPlan(t)},placeholder:"Choose from tasks"},l.a.createElement("option",null,"Choose task"),a&&a.map((function(e){return l.a.createElement("option",{key:e.taskID,value:e.taskID},e.name)}))))))};var ie=function(e){return l.a.createElement(y.a,{xs:12,lg:8,className:"py-2"},l.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Today's Task Plan"),e.tasks&&e.tasks.filter((function(e){return!!e.dayPlan})).map((function(a){return l.a.createElement(v.a,{key:a.taskID,id:a.taskID,className:"my-2"},l.a.createElement(G,Object.assign({dayPlanListPage:!0,deleteDayPlanTask:e.deleteDayPlanTask,completeTask:e.completeTask,deleteTask:e.deleteTask,openTaskCard:e.openTaskCard},a)))})))};var me=function(e){return l.a.createElement(y.a,{xs:12,lg:8,className:"py-2"},l.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Today's Task Plan"),l.a.createElement("h2",{className:"h5 font-weight-normal"},"Select tasks to start building your day plan"))};var ue=function(e){return l.a.createElement(L.a,{className:"day-plan"},l.a.createElement(v.a,{className:"px-2"},l.a.createElement(se,e),e.tasks&&e.tasks.some((function(e){return!!e.dayPlan}))?l.a.createElement(ie,e):l.a.createElement(me,null)))};t(439);var de=function(){document.body.addEventListener("mousedown",(function(){document.body.classList.add("using-mouse")})),document.body.addEventListener("keydown",(function(e){9===e.keyCode&&document.body.classList.remove("using-mouse")}));var e=Object(n.useState)(),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),i=Object(s.a)(c,2),p=i[0],h=i[1],L=Object(n.useState)(""),v=Object(s.a)(L,2),y=v[0],C=v[1];function b(e){f.a.delete("https://3f77y34kad.execute-api.eu-west-2.amazonaws.com/dev/tasks/".concat(e)).then((function(a){var n=t.filter((function(a){return a.taskID!==e}));r(n)})).catch((function(e){console.log("Error fetching data",e)}))}function w(e){var a=t.find((function(a){return a.taskID===e}));if(a.repeats){if("repeatsAfterCompletion"===a.repeatType){var n=m()(a.endDate).diff(m()(a.startDate),"days");a.startDate=m()().add(a.repeatAfterCompletionFrequency,a.repeatAfterCompletionFrequencyType).format("YYYY-MM-DD"),a.endDate=m()(a.startDate).add(n,"days").format("YYYY-MM-DD"),a.percentageCompletion=k(a.startDate,a.endDate)}}else a.completed=!0,a.completeDate=m()().format("YYYY-MM-DD");f.a.put("https://3f77y34kad.execute-api.eu-west-2.amazonaws.com/dev/tasks/".concat(e),a).then((function(n){var l=Object(o.a)(t).map((function(t){return t.taskID===e?a:t})),c=g(l);r(c)})).catch((function(e){console.log("Error fetching data",e)}))}function x(e){var a=t.map((function(a){return a.taskID===e&&(a.cardOpen=!a.cardOpen),a}));r(a)}function T(e){var a=t.map((function(a){return a.taskID.toString()===e?a.cardOpen=!0:a.cardOpen=!1,a}));r(a)}return Object(n.useEffect)((function(){h(!!E.a.get("userID")),p&&(f.a.get("https://3f77y34kad.execute-api.eu-west-2.amazonaws.com/dev/tasks?userID=".concat(E.a.get("userID"))).then((function(e){var a=e.data.tasks.map((function(e){return e.percentageCompletion=k(e.startDate,e.endDate),e.cardOpen=!1,e})),t=g(a);r(t)})).catch((function(e){console.log("Error fetching data",e)})),f.a.get("https://3f77y34kad.execute-api.eu-west-2.amazonaws.com/dev/users?userID=".concat(E.a.get("userID"))).then((function(e){var a=e.data.user[0].username;C(a)})).catch((function(e){console.log("Error fetching data",e)})))}),[p]),l.a.createElement(u.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(O,{loggedIn:p,handleLogOut:function(){E.a.remove("userID"),h(!1)}}),l.a.createElement(d.c,null,p?l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{path:"/todo_react_application/graph"},t&&t.length>0?l.a.createElement(re,{tasks:t,openFromGraphId:T}):l.a.createElement(oe,null)),l.a.createElement(d.a,{exact:!0,path:"/todo_react_application/day-plan"},l.a.createElement(ue,{tasks:t,addToDayPlan:function(e){var a=t.find((function(a){return a.taskID.toString()===e}));a.dayPlan=1,f.a.put("https://3f77y34kad.execute-api.eu-west-2.amazonaws.com/dev/tasks/".concat(e),a).then((function(n){var l=Object(o.a)(t).map((function(t){return t.taskID===e?a:t})),c=g(l);r(c)})).catch((function(e){console.log("Error fetching data",e)}))},deleteDayPlanTask:function(e){var a=t.find((function(a){return a.taskID===e}));a.dayPlan=0,f.a.put("https://3f77y34kad.execute-api.eu-west-2.amazonaws.com/dev/tasks/".concat(e),a).then((function(n){var l=Object(o.a)(t).map((function(t){return t.taskID===e?a:t})),c=g(l);r(c)})).catch((function(e){console.log("Error fetching data",e)}))},completeTask:w,deleteTask:b,openTaskCard:x})),l.a.createElement(d.a,{exact:!0,path:"/todo_react_application/"},l.a.createElement(J,{userGreeting:y,addTask:function(e,a,n,l,c,s,i,m){var u={userID:E.a.get("userID"),name:e,taskDetails:a,startDate:n,endDate:l,repeats:c,repeatType:s,repeatAfterCompletionFrequency:i,repeatAfterCompletionFrequencyType:m,completed:!1,dayPlan:0,percentageCompletion:k(n,l),cardOpen:!1};f.a.post("https://3f77y34kad.execute-api.eu-west-2.amazonaws.com/dev/tasks",u).then((function(e){u.taskID=e.data.newTask[0].taskID;var a=[].concat(Object(o.a)(t),[u]),n=g(a);r(n)})).catch((function(e){console.log("Error fetching data",e)}))},completeTask:w,deleteTask:b,tasks:t,openFromGraphId:T,openTaskCard:x}))," "):l.a.createElement(D,{setLoggedIn:h})),l.a.createElement(N,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},52:function(e,a,t){}},[[273,1,2]]]);
//# sourceMappingURL=main.ff070b1d.chunk.js.map