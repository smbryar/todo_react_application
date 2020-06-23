(this.webpackJsonptodo_react_application=this.webpackJsonptodo_react_application||[]).push([[0],{271:function(e,t,a){e.exports=a(438)},276:function(e,t,a){},293:function(e,t,a){},294:function(e,t,a){},298:function(e,t,a){},301:function(e,t,a){},302:function(e,t,a){},303:function(e,t,a){},304:function(e,t,a){},434:function(e,t,a){},435:function(e,t,a){},436:function(e,t,a){e.exports=a.p+"static/media/Example_Task_Graph.879d9a8f.jpg"},437:function(e,t,a){},438:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(99),o=a.n(l),c=(a(276),a(156)),s=a(11),i=a(18),u=a.n(i),m=a(62),d=a(16),p=a(38),f=a.n(p),h=a(466),E=a(467),g=a(216),v=a(472);a(293);var k=function(e){return r.a.createElement("button",{className:"simple-button-".concat(e.variant," simple-button btn btn-block mt-3 ").concat(e.disabled?"disabled":""),onClick:e.onClick},e.children)};a(294);var b=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)(""),i=Object(s.a)(c,2),u=i[0],m=i[1],d=Object(n.useState)(!1),p=Object(s.a)(d,2),b=p[0],y=p[1],C=Object(n.useState)(!1),D=Object(s.a)(C,2),w=D[0],x=D[1];return r.a.createElement(h.a,{className:"authentication"},r.a.createElement(E.a,{className:"authentication-row px-2"},r.a.createElement(g.a,{xs:12,lg:6,className:"m-auto py-2"},r.a.createElement(v.a,{className:"login p-3 pb-4 rounded"},r.a.createElement("h1",{class:"h3 mb-3 font-weight-normal"},"Sign in"),r.a.createElement(v.a.Group,{controlId:"username"},r.a.createElement(v.a.Control,{autoFocus:!0,required:!0,type:"text",placeholder:"Username",value:l,onChange:function(e){o(e.target.value),0===e.target.value.length?y(!0):y(!1)}}),b&&r.a.createElement(v.a.Text,{style:{color:"red"}},"Please enter a valid username.")),r.a.createElement(k,{variant:"login",type:"submit",onClick:function(t){t.preventDefault(),0===l.length?y(!0):f.a.get("https://3f77y34kad.execute-api.eu-west-2.amazonaws.com/dev/users?username=".concat(l)).then((function(t){1===t.data.user.length?e.setUserID(t.data.user[0].userID):y(!0)})).catch((function(e){console.log("Error fetching data",e)}))}},"Go"))),r.a.createElement(g.a,{xs:12,lg:6,className:"m-auto py-2"},r.a.createElement(v.a,{className:"new-user p-3 pb-4 rounded"},r.a.createElement("h1",{class:"h3 mb-3 font-weight-normal"},"Create new user"),r.a.createElement(v.a.Group,{controlId:"new-username"},r.a.createElement(v.a.Control,{autoFocus:!0,required:!0,type:"text",placeholder:"New Username",value:u,onChange:function(e){m(e.target.value),0===e.target.value.length?x(!0):x(!1)}}),w&&r.a.createElement(v.a.Text,{style:{color:"red"}},"Please enter a valid and unique username.")),r.a.createElement(k,{variant:"new-user",type:"submit",onClick:function(t){if(t.preventDefault(),0===u.length)x(!0);else{var a={username:u};f.a.get("https://3f77y34kad.execute-api.eu-west-2.amazonaws.com/dev/users?username=".concat(u)).then((function(e){if(e.data.user.length>0)throw x(!0),new Error("User already exists in database, usernames must be unique.");return f.a.post("https://3f77y34kad.execute-api.eu-west-2.amazonaws.com/dev/users",a)})).then((function(t){var a=t.data.newUser[0].userID;e.setUserID(a)})).catch((function(e){console.log("Error fetching data",e)}))}}},"Go")))))},y=a(475),C=a(473);a(298);var D=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),l=a[0],o=a[1];return r.a.createElement(y.a,{className:"navbar--my-tasks-app",expand:"sm",fixed:"top",expanded:l},r.a.createElement(y.a.Brand,{className:"brand--my-tasks-app"},"My Tasks App"),r.a.createElement(y.a.Toggle,{"aria-controls":"basic-navbar-nav",onClick:function(){return o(!l&&"expanded")}}),r.a.createElement(y.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(C.a,{onClick:function(){return o(!1)}},r.a.createElement(m.b,{className:"px-3 navlink--my-tasks-app",to:"/todo_react_application/"},"Tasks"),r.a.createElement(m.b,{className:"px-3 navlink--my-tasks-app",to:"/todo_react_application/graph"},"Graph")),e.userID&&r.a.createElement(C.a,{className:"ml-auto"},r.a.createElement(k,{variant:"logout",onClick:e.handleLogOut},"Log Out"))))},w=a(477),x=a(476),O=a(235);var Y=function(e){return r.a.createElement(O.a,{in:e.cardOpen},r.a.createElement(x.a.Body,{tabIndex:"0"},!e.completed&&r.a.createElement(E.a,null,r.a.createElement(g.a,{xs:6},r.a.createElement("h5",null,"Start: ",u()(e.startDate).format("DD/MM/YYYY"))),r.a.createElement(g.a,{xs:6,className:"col-6 text-right"},r.a.createElement("h5",null,"Due: ",u()(e.endDate).format("DD/MM/YYYY")))),!!e.completed&&r.a.createElement("h5",null,"Completed: ",u()(e.completeDate).format("DD/MM/YYYY")),r.a.createElement(E.a,null,r.a.createElement(g.a,null,r.a.createElement("h6",null,e.taskDetails))),!!e.repeats&&r.a.createElement(E.a,null,r.a.createElement(g.a,null,r.a.createElement("h6",null,"This task repeats ",e.repeatAfterCompletionFrequency," ",1===e.repeatAfterCompletionFrequency?e.repeatAfterCompletionFrequencyType.substring(0,e.repeatAfterCompletionFrequencyType.length-1):e.repeatAfterCompletionFrequencyType," after being completed."))),r.a.createElement(E.a,null,!e.completed&&r.a.createElement(g.a,{xs:6},r.a.createElement(k,{onClick:e.handleCompleteClick,variant:"complete"},"Complete task")),r.a.createElement(g.a,null,r.a.createElement(k,{onClick:e.handleDeleteClick,variant:"delete"},"Delete task")))))},N=a(468);a(301);function j(e){return r.a.createElement("svg",{className:"bi bi-check-box",width:e.squareHeight,height:e.squareHeight,viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z",clipRule:"evenodd"}),r.a.createElement("path",{fillRule:"evenodd",d:"M1.5 13A1.5 1.5 0 003 14.5h10a1.5 1.5 0 001.5-1.5V8a.5.5 0 00-1 0v5a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V3a.5.5 0 01.5-.5h8a.5.5 0 000-1H3A1.5 1.5 0 001.5 3v10z",clipRule:"evenodd"}))}function M(e){return r.a.createElement("svg",{className:"bi bi-x-square",width:e.squareHeight,height:e.squareHeight,viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z",clipRule:"evenodd"}),r.a.createElement("path",{fillRule:"evenodd",d:"M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z",clipRule:"evenodd"}),r.a.createElement("path",{fillRule:"evenodd",d:"M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z",clipRule:"evenodd"}))}function T(e){return r.a.createElement("svg",{className:"bi bi-plus-circle",width:e.squareHeight,height:e.squareHeight,viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z",clipRule:"evenodd"}),r.a.createElement("path",{fillRule:"evenodd",d:"M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z",clipRule:"evenodd"}),r.a.createElement("path",{fillRule:"evenodd",d:"M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z",clipRule:"evenodd"}))}function R(e){return r.a.createElement("svg",{className:"bi bi-arrow-clockwise",width:e.squareHeight,height:e.squareHeight,viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M3.17 6.706a5 5 0 017.103-3.16.5.5 0 10.454-.892A6 6 0 1013.455 5.5a.5.5 0 00-.91.417 5 5 0 11-9.375.789z",clipRule:"evenodd"}),r.a.createElement("path",{fillRule:"evenodd",d:"M8.147.146a.5.5 0 01.707 0l2.5 2.5a.5.5 0 010 .708l-2.5 2.5a.5.5 0 11-.707-.708L10.293 3 8.147.854a.5.5 0 010-.708z",clipRule:"evenodd"}))}var I=function(e){return r.a.createElement("button",Object.assign({},e,{className:"btn"}),e.children)};var A=function(e){var t=e.percentageCompletion;return r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:function(e){var t={};return e<5&&(e=5),t.backgroundImage="linear-gradient(to right,".concat(function(e){var t,a,n;if(e<=50){var r=128+127*e/50;t="rgb(".concat(255*e/50,",").concat(r,",0)"),n="".concat("rgb(0,128,0)",",").concat(t)}if(e>=50){var l=128+127*e/100;t="rgb(".concat(255*e/100,",").concat(l,",0)"),a="rgb(255,".concat(255-255*(e-50)/50,",0)"),n="".concat("rgb(0,128,0)",",").concat(t,",").concat(a)}return n}(e),")"),t.width="".concat(e,"%"),t}(t),"aria-valuenow":e.percentageCompletion,"aria-valuemin":"0","aria-valuemax":"100","aria-label":"Percentage of way through time allocated for task"}))};var S=function(e){return r.a.createElement(x.a.Header,{className:"h4","aria-controls":"task-item-contents","aria-expanded":e.open},r.a.createElement(E.a,null,r.a.createElement(g.a,{xs:8,style:{textDecoration:e.completed?"line-through":"",cursor:"pointer"},tabIndex:"0",onClick:function(){e.openTaskCard(e.taskID)},onKeyPress:function(t){return 13===t.charCode?e.openTaskCard(e.taskID):null}},1===e.repeats&&r.a.createElement(R,{squareHeight:"1.2em"})," ",e.name),r.a.createElement(g.a,{xs:4},r.a.createElement(N.a,{className:"float-right"},!e.completed&&r.a.createElement(I,{onClick:e.handleCompleteClick,"aria-label":"Mark as complete"},r.a.createElement(j,{squareHeight:"1.5em"})),r.a.createElement(I,{onClick:e.handleDeleteClick,"aria-label":"Delete"},r.a.createElement(M,{squareHeight:"1.3em"}))))),!e.completed&&r.a.createElement(E.a,null,r.a.createElement(g.a,null,r.a.createElement(A,{percentageCompletion:e.percentageCompletion}))))};a(302);var q=function(e){function t(){e.deleteTask(e.taskID)}function a(){e.completeTask(e.taskID)}return r.a.createElement(x.a,{className:"task-item",style:{backgroundColor:e.completed?"rgba(130, 138, 146, 0.74)":"#BADEC6"}},r.a.createElement(S,Object.assign({},e,{open:e.open,setOpen:e.setOpen,handleCompleteClick:a,handleDeleteClick:t,openTaskCard:e.openTaskCard})),r.a.createElement(Y,Object.assign({},e,{open:e.open,handleDeleteClick:t,handleCompleteClick:a})))};a(50);var F=function(e){return r.a.createElement(x.a.Header,{tabIndex:"0",as:"h4","aria-controls":"add-task-contents","aria-expanded":e.open,style:{cursor:"pointer"},onClick:function(){return e.setOpen(!e.open)},onKeyPress:function(t){return 13===t.charCode?e.setOpen(!e.open):null}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 align-self-center"},"Add Task"),r.a.createElement("div",{className:"col-2"},r.a.createElement("div",{className:"float-right"},r.a.createElement(T,{squareHeight:"1.2em"})))))};var H=function(e){return r.a.createElement(v.a.Group,{controlId:"formTaskName"},r.a.createElement(v.a.Control,{type:"text",placeholder:e.errors.name?"Input a name for your task":"Name your next task",onChange:function(t){return e.setName(t.target.value)},style:e.errors.name?{backgroundColor:"yellow"}:null}))};var z=function(e){return r.a.createElement(v.a.Group,{controlId:"formTaskDetails"},r.a.createElement(v.a.Control,{type:"text",placeholder:"Enter details about your task",onChange:function(t){return e.setTaskDetails(t.target.value)}}))};var B=function(e){return r.a.createElement(v.a.Row,null,r.a.createElement(v.a.Group,{as:g.a,controlId:"formStartDate"},r.a.createElement(v.a.Label,null,"When should you start this task?"),r.a.createElement(v.a.Control,{type:"date",onChange:function(t){return e.setStartDate(t.target.value)}})),r.a.createElement(v.a.Group,{as:g.a,controlId:"formEndDate"},r.a.createElement(v.a.Label,null,"When do you need to finish this task?"),r.a.createElement(v.a.Control,{type:"date",onChange:function(t){return e.setEndDate(t.target.value)}})))};var _=function(e){return r.a.createElement(r.a.Fragment,null,e.errors.repeats&&r.a.createElement("span",{className:"error"},"Select whether this task repeats"),r.a.createElement(v.a.Row,{className:"customRow"},r.a.createElement(v.a.Check,{defaultChecked:!0,type:"radio",name:"repeatChoice",className:"align-self-center",value:"doesNotRepeat",onChange:e.handleRadioButton}),r.a.createElement("div",{className:"col align-self-center"},r.a.createElement(v.a.Label,{className:"noBottonMargin"},"Does not repeat"))))};var G=function(e){return r.a.createElement(v.a.Row,{className:"customRow"},r.a.createElement(v.a.Check,{type:"radio",name:"repeatChoice",className:"align-self-center",value:"repeatsAfterCompletion",onChange:e.handleRadioButton}),r.a.createElement("div",{className:"col-4 col-md-2 align-self-center"},r.a.createElement(v.a.Label,{className:"noBottonMargin"},"Repeats every")),r.a.createElement("div",{className:"col-3 col-md-1"},r.a.createElement(v.a.Control,{type:"number",onChange:function(t){return e.setRepeatAfterCompletionFrequency(t.target.value)},placeholder:e.errors.repeatAfterCompletionFrequency?"?":null,style:e.errors.repeatAfterCompletionFrequency?{backgroundColor:"yellow"}:null})),r.a.createElement("div",{className:"col-4 col-md-2"},r.a.createElement(v.a.Control,{as:"select",custom:!0,onChange:function(t){return e.setRepeatAfterCompletionFrequencyType(t.target.value)}},r.a.createElement("option",null,"days"),r.a.createElement("option",null,"weeks"),r.a.createElement("option",null,"months"),r.a.createElement("option",null,"years"))),r.a.createElement("div",{className:"col-12 col-md-6 align-self-center"},r.a.createElement(v.a.Label,{className:"noBottonMargin"},"after the task has been completed")))};var L=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)(""),i=Object(s.a)(c,2),m=i[0],d=i[1],p=Object(n.useState)(""),f=Object(s.a)(p,2),h=f[0],E=f[1],g=Object(n.useState)(u()().format("YYYY-MM-DD")),b=Object(s.a)(g,2),y=b[0],C=b[1],D=Object(n.useState)(u()().format("YYYY-MM-DD")),w=Object(s.a)(D,2),Y=w[0],N=w[1],j=Object(n.useState)(!1),M=Object(s.a)(j,2),T=M[0],R=M[1],I=Object(n.useState)(null),A=Object(s.a)(I,2),S=A[0],q=A[1],L=Object(n.useState)(null),V=Object(s.a)(L,2),W=V[0],U=V[1],P=Object(n.useState)("days"),$=Object(s.a)(P,2),J=$[0],K=$[1],X=Object(n.useState)({name:!1,repeatAfterCompletionFrequency:!1}),Q=Object(s.a)(X,2),Z=Q[0],ee=Q[1];function te(e){"repeatsAfterCompletion"===e.target.value?(R(!0),q("repeatsAfterCompletion")):"repeatsRegularDays"===e.target.value?(R(!0),q("repeatsRegularDays")):"doesNotRepeat"===e.target.value&&R(!1)}return r.a.createElement(x.a,{className:"add-task"},r.a.createElement(F,{open:l,setOpen:o}),r.a.createElement(O.a,{in:l},r.a.createElement(x.a.Body,null,r.a.createElement(v.a,null,r.a.createElement(H,{setName:d,errors:Z}),r.a.createElement(z,{setTaskDetails:E}),r.a.createElement(B,{setStartDate:C,setEndDate:N}),r.a.createElement(_,{errors:Z,handleRadioButton:te}),r.a.createElement(G,{errors:Z,handleRadioButton:te,setRepeatAfterCompletionFrequency:U,setRepeatAfterCompletionFrequencyType:K})),r.a.createElement(k,{variant:"add-task",onClick:function(){if(""===m||null===T||"repeatsAfterCompletion"===S&&null===W){var t=Object.assign({},Z);t.name=""===m,t.repeatAfterCompletionFrequency="repeatsAfterCompletion"===S&&null===W,ee(t)}else e.addTask(m,h,y,Y,T,S,W,J)}},"Submit Task"))))};a(303);var V=function(e){var t=e.tasks&&e.tasks.filter((function(e){return e.endDate.substring(0,10)===u()().format("YYYY-MM-DD")})).length,a=e.tasks&&e.tasks.filter((function(e){return 0===e.completed})).length;return r.a.createElement(x.a.Header,{className:"intro",tabIndex:"0"},r.a.createElement("h4",null,"You have ",t," task",1===t?"":"s"," to complete today out of ",a," unfinished task",1===a?"":"s"))};a(304);var W=function(e){var t=Object(n.useState)(Object(w.a)()),a=Object(s.a)(t,2),l=a[0],o=a[1];return r.a.createElement(h.a,{fluid:"lg"},r.a.createElement(g.a,null,r.a.createElement(E.a,{className:"my-2"},r.a.createElement(V,{tasks:e.tasks})),r.a.createElement(E.a,{className:"my-2"},r.a.createElement(L,{key:l,addTask:function(t,a,n,r,l,c,s,i,u,m){o(Object(w.a)()),e.addTask(t,a,n,r,l,c,s,i,u,m)},tasks:e.tasks})),e.tasks&&e.tasks.sort((function(e,t){return e.completed?1:e.completed?e.endDate>t.endDate?1:e.startDate<t.startDate?-1:0:-1})).map((function(t){return r.a.createElement(E.a,{key:t.taskID,id:t.taskID,className:"my-2"},r.a.createElement(q,Object.assign({completeTask:e.completeTask,deleteTask:e.deleteTask,openTaskCard:e.openTaskCard},t)))}))))},U=a(222),P=(a(434),a(234)),$=a.n(P);var J=function(e){return r.a.createElement("div",{className:"tooltip--container",style:{backgroundColor:"".concat($()(e.point.serieColor).lighten(15).toString())}},e.point.data.y," ",r.a.createElement("br",null),e.point.id.endsWith("0")&&"Start: ",e.point.id.endsWith("1")&&"Due: ",u()(e.point.data.x).format("MMM DD"))};a(435);var K=Object(d.f)((function(e){var t=e.tasks.filter((function(e){return!e.completed})).map((function(e){var t={};t.id=e.taskID;var a={};a.x=u()(e.startDate).format("YYYY-MM-DD"),a.y=e.name;var n={};return n.x=u()(e.endDate).format("YYYY-MM-DD"),n.y=e.name,t.data=[a,n],t}));return r.a.createElement(h.a,{fluid:"lg",style:{height:window.innerHeight-125<600?window.innerHeight-125:600}},r.a.createElement(U.a,{className:"graph",style:{cursor:"crosshair"},data:t,margin:{top:70,right:20,bottom:70,left:150},xScale:{type:"time",format:"%Y-%m-%d"},xFormat:"time:%Y-%m-%d",yScale:{type:"point"},axisTop:null,axisRight:null,axisLeft:{renderTick:function(e){var t=e.textAnchor,a=e.textBaseline,n=e.value,l=e.x,o=e.y,c=new RegExp("^(.{".concat(29,"}[^\\w]*).*")),s=new RegExp("([^\\s].{0,".concat(16,"}(?=[\\s\\W]|$))"),"gm"),i=n.replace(c,"$1...").match(s).slice(0,2).map((function(e,t){return r.a.createElement("tspan",{key:e,dy:16*t,x:-15,style:{fontFamily:"Verdana, Arial, sans-serif",fontSize:"14px"}},e)}));return r.a.createElement("g",{transform:"translate(".concat(l,",").concat(o,")")},r.a.createElement("text",{alignmentBaseline:a,textAnchor:t},i))}},axisBottom:{format:"%b %d",tickRotation:-45,tickPadding:15},theme:{fontSize:14,fontFamily:"Verdana, Arial, sans-serif"},colors:{scheme:"accent"},lineWidth:20,pointSize:20,enableGridX:!0,enableGridY:!0,tooltip:J,useMesh:!0,onClick:function(t){var a=t.id.slice(0,-2);e.openFromGraphId(a),e.history.push("/todo_react_application/")},enableCrosshair:!1}))})),X=a(471);var Q=function(e){return r.a.createElement(h.a,{fluid:"lg"},r.a.createElement("h3",{style:{textAlign:"center"}},"Start adding tasks to see them displayed here, like the example below."),r.a.createElement(X.a,{src:a(436),fluid:!0}))};a(437);var Z=function(){document.body.addEventListener("mousedown",(function(){document.body.classList.add("using-mouse")})),document.body.addEventListener("keydown",(function(e){9===e.keyCode&&document.body.classList.remove("using-mouse")}));var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(null),i=Object(s.a)(o,2),p=i[0],h=i[1];function E(e,t){var a=u()().valueOf(),n=u()(e,"YYYY-MM-DD").valueOf(),r=(a-n)/(u()(t,"YYYY-MM-DD").valueOf()-n)*100;return r<0?0:isFinite(r)?r:100}function g(e){var t=a.map((function(t){return t.taskID.toString()===e?t.cardOpen=!0:t.cardOpen=!1,t}));l(t)}return Object(n.useEffect)((function(){f.a.get("https://3f77y34kad.execute-api.eu-west-2.amazonaws.com/dev/tasks?userID=".concat(p)).then((function(e){var t=e.data.tasks.map((function(e){return e.percentageCompletion=E(e.startDate,e.endDate),e.cardOpen=!1,e}));l(t)})).catch((function(e){console.log("Error fetching data",e)}))}),[p]),console.log(a),r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(D,{handleLogOut:function(){h(null)},userID:p}),r.a.createElement(d.c,null,p?r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{path:"/todo_react_application/graph"},a&&a.length>0?r.a.createElement(K,{tasks:a,openFromGraphId:g}):r.a.createElement(Q,null)),r.a.createElement(d.a,{exact:!0,path:"/todo_react_application/"},r.a.createElement(W,{userID:p,addTask:function(e,t,n,r,o,s,i,u){var m={userID:p,name:e,taskDetails:t,startDate:n,endDate:r,repeats:o,repeatType:s,repeatAfterCompletionFrequency:i,repeatAfterCompletionFrequencyType:u,completed:!1,percentageCompletion:E(n,r),cardOpen:!1};f.a.post("https://3f77y34kad.execute-api.eu-west-2.amazonaws.com/dev/tasks",m).then((function(e){m.taskID=e.data.newTask[0].taskID;var t=[].concat(Object(c.a)(a),[m]);l(t)})).catch((function(e){console.log("Error fetching data",e)}))},completeTask:function(e){var t=a.find((function(t){return t.taskID===e}));t.repeats?"repeatsAfterCompletion"===t.repeatType&&(t.endDate=u()().add(t.repeatAfterCompletionFrequency,t.repeatAfterCompletionFrequencyType).format("YYYY-MM-DD"),t.startDate=u()().format("YYYY-MM-DD"),t.percentageCompletion=E(t.startDate,t.endDate)):(t.completed=!0,t.completeDate=u()().format("YYYY-MM-DD")),f.a.put("https://3f77y34kad.execute-api.eu-west-2.amazonaws.com/dev/tasks/".concat(e),t).then((function(n){var r=Object(c.a)(a).map((function(a){return a.taskID===e?t:a}));l(r)})).catch((function(e){console.log("Error fetching data",e)}))},deleteTask:function(e){f.a.delete("https://3f77y34kad.execute-api.eu-west-2.amazonaws.com/dev/tasks/".concat(e)).then((function(t){var n=a.filter((function(t){return t.taskID!==e}));l(n)})).catch((function(e){console.log("Error fetching data",e)}))},tasks:a,openFromGraphId:g,openTaskCard:function(e){var t=a.map((function(t){return t.taskID===e&&(t.cardOpen=!t.cardOpen),t}));l(t)}}))," "):r.a.createElement(b,{setUserID:h}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},50:function(e,t,a){}},[[271,1,2]]]);
//# sourceMappingURL=main.10916375.chunk.js.map