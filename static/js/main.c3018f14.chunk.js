(this.webpackJsonptodo_react_application=this.webpackJsonptodo_react_application||[]).push([[0],{267:function(e,t,a){e.exports=a(416)},272:function(e,t,a){},273:function(e,t,a){},277:function(e,t,a){},278:function(e,t,a){},280:function(e,t,a){},281:function(e,t,a){},282:function(e,t,a){},283:function(e,t,a){},413:function(e,t,a){},414:function(e,t,a){},415:function(e,t,a){},416:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(40),o=a.n(l),c=(a(272),a(228)),s=a(11),i=a(16),m=a.n(i),u=a(458),d=a(451),p=a(456),f=a(453);a(273);var h=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),l=a[0],o=a[1];return r.a.createElement(p.a,{className:"navbar--my-tasks-app",expand:"sm",fixed:"top",expanded:l},r.a.createElement(p.a.Brand,{className:"brand--my-tasks-app"},"My Tasks App"),r.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav",onClick:function(){return o(!l&&"expanded")}}),r.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(f.a,{onClick:function(){return o(!1)}},r.a.createElement(f.a.Link,{className:"px-3 navlink--my-tasks-app",href:"#",onClick:function(){return e.setPage("Tasks")}},"Tasks"),r.a.createElement(f.a.Link,{className:"px-3 navlink--my-tasks-app",href:"#",onClick:function(){return e.setPage("Graph")}},"Graph"))))},E=a(214),v=a(446),g=a(457),k=a(211);a(277);var b=function(e){return r.a.createElement("button",{className:"simple-button-".concat(e.variant," simple-button btn btn-block mt-3"),onClick:e.onClick},e.children)};var C=function(e){return r.a.createElement(k.a,{in:!0===e.cardOpen},r.a.createElement(g.a.Body,{tabIndex:"0"},!e.completed&&r.a.createElement(v.a,null,r.a.createElement(E.a,{xs:6},r.a.createElement("h5",null,"Start: ",m()(e.startDate).format("DD/MM/YYYY"))),r.a.createElement(E.a,{xs:6,className:"col-6 text-right"},r.a.createElement("h5",null,"Due: ",m()(e.endDate).format("DD/MM/YYYY")))),e.completed&&r.a.createElement("h5",null,"Completed: ",m()(e.completeDate).format("DD/MM/YYYY")),r.a.createElement(v.a,null,r.a.createElement(E.a,null,r.a.createElement("h6",null,e.taskDetails))),e.repeats&&r.a.createElement(v.a,null,r.a.createElement(E.a,null,r.a.createElement("h6",null,"This task repeats ",e.repeatAfterCompletionFrequency," ",e.repeatAfterCompletionFrequencyType," after being completed."))),r.a.createElement(v.a,null,!e.completed&&r.a.createElement(E.a,{xs:6},r.a.createElement(b,{onClick:e.handleCompleteClick,variant:"complete"},"Complete task")),r.a.createElement(E.a,null,r.a.createElement(b,{onClick:e.handleDeleteClick,variant:"delete"},"Delete task")))))},y=a(112),D=a(447),O=a(454),w=a(448);a(278);function Y(e){return r.a.createElement("svg",{className:"bi bi-check-box",width:e.squareHeight,height:e.squareHeight,viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z",clipRule:"evenodd"}),r.a.createElement("path",{fillRule:"evenodd",d:"M1.5 13A1.5 1.5 0 003 14.5h10a1.5 1.5 0 001.5-1.5V8a.5.5 0 00-1 0v5a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V3a.5.5 0 01.5-.5h8a.5.5 0 000-1H3A1.5 1.5 0 001.5 3v10z",clipRule:"evenodd"}))}function x(e){return r.a.createElement("svg",{className:"bi bi-x-square",width:e.squareHeight,height:e.squareHeight,viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z",clipRule:"evenodd"}),r.a.createElement("path",{fillRule:"evenodd",d:"M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z",clipRule:"evenodd"}),r.a.createElement("path",{fillRule:"evenodd",d:"M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z",clipRule:"evenodd"}))}function j(e){return r.a.createElement("svg",{className:"bi bi-plus-circle",width:e.squareHeight,height:e.squareHeight,viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z",clipRule:"evenodd"}),r.a.createElement("path",{fillRule:"evenodd",d:"M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z",clipRule:"evenodd"}),r.a.createElement("path",{fillRule:"evenodd",d:"M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z",clipRule:"evenodd"}))}function N(e){return r.a.createElement("svg",{className:"bi bi-arrow-clockwise",width:e.squareHeight,height:e.squareHeight,viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M3.17 6.706a5 5 0 017.103-3.16.5.5 0 10.454-.892A6 6 0 1013.455 5.5a.5.5 0 00-.91.417 5 5 0 11-9.375.789z",clipRule:"evenodd"}),r.a.createElement("path",{fillRule:"evenodd",d:"M8.147.146a.5.5 0 01.707 0l2.5 2.5a.5.5 0 010 .708l-2.5 2.5a.5.5 0 11-.707-.708L10.293 3 8.147.854a.5.5 0 010-.708z",clipRule:"evenodd"}))}var M=function(e){return r.a.createElement("button",Object.assign({},e,{className:"btn"}),e.children)};var T=function(e){var t=e.percentageCompletion;return r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:function(e){var t={};return e<5&&(e=5),t.backgroundImage="linear-gradient(to right,".concat(function(e){var t,a,n;if(e<=50){var r=128+127*e/50;t="rgb(".concat(255*e/50,",").concat(r,",0)"),n="".concat("rgb(0,128,0)",",").concat(t)}if(e>=50){var l=128+127*e/100;t="rgb(".concat(255*e/100,",").concat(l,",0)"),a="rgb(255,".concat(255-255*(e-50)/50,",0)"),n="".concat("rgb(0,128,0)",",").concat(t,",").concat(a)}return n}(e),")"),t.width="".concat(e,"%"),t}(t),"aria-valuenow":e.percentageCompletion,"aria-valuemin":"0","aria-valuemax":"100","aria-label":"Percentage of way through time allocated for task"}))};var R=function(e){var t;return r.a.createElement(g.a.Header,{className:"h4","aria-controls":"task-item-contents","aria-expanded":e.open},r.a.createElement(v.a,null,r.a.createElement(E.a,(t={xs:8,style:{textDecoration:e.completed?"line-through":""},tabIndex:"0"},Object(y.a)(t,"style",{cursor:"pointer"}),Object(y.a)(t,"onClick",(function(){e.openTaskCard(e.id)})),Object(y.a)(t,"onKeyPress",(function(t){return 13===t.charCode?e.openTaskCard(e.id):null})),t),e.repeats&&r.a.createElement(N,{squareHeight:"1.2em"})," ",e.name),r.a.createElement(E.a,{xs:4},r.a.createElement(D.a,{className:"float-right"},!e.completed&&r.a.createElement(O.a,{placement:"top",overlay:r.a.createElement(w.a,null,"Mark as complete")},r.a.createElement(M,{onClick:e.handleCompleteClick,"aria-label":"Mark as complete"},r.a.createElement(Y,{squareHeight:"1.5em"}))),r.a.createElement(O.a,{placement:"top",overlay:r.a.createElement(w.a,null,"Delete")},r.a.createElement(M,{onClick:e.handleDeleteClick,"aria-label":"Delete"},r.a.createElement(x,{squareHeight:"1.3em"})))))),!e.completed&&r.a.createElement(v.a,null,r.a.createElement(E.a,null,r.a.createElement(T,{percentageCompletion:e.percentageCompletion}))))};a(280);var A=function(e){function t(){e.deleteTask(e.id)}function a(){e.completeTask(e.id)}return r.a.createElement(g.a,{className:"task-item",style:{backgroundColor:e.completed?"rgba(130, 138, 146, 0.74)":"#BADEC6"}},r.a.createElement(R,Object.assign({},e,{open:e.open,setOpen:e.setOpen,handleCompleteClick:a,handleDeleteClick:t,openTaskCard:e.openTaskCard})),r.a.createElement(C,Object.assign({},e,{open:e.open,handleDeleteClick:t,handleCompleteClick:a})))},S=a(452);a(48);var q=function(e){return r.a.createElement(g.a.Header,{tabIndex:"0",as:"h4","aria-controls":"add-task-contents","aria-expanded":e.open,style:{cursor:"pointer"},onClick:function(){return e.setOpen(!e.open)},onKeyPress:function(t){return 13===t.charCode?e.setOpen(!e.open):null}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 align-self-center"},"Add Task"),r.a.createElement("div",{className:"col-2"},r.a.createElement("div",{className:"float-right"},r.a.createElement(j,{squareHeight:"1.2em"})))))};var F=function(e){return r.a.createElement(S.a.Group,{controlId:"formTaskName"},r.a.createElement(S.a.Control,{type:"text",placeholder:e.errors.name?"Input a name for your task":"Name your next task",onChange:function(t){return e.setName(t.target.value)},style:e.errors.name?{backgroundColor:"yellow"}:null}))};var H=function(e){return r.a.createElement(S.a.Group,{controlId:"formTaskDetails"},r.a.createElement(S.a.Control,{type:"text",placeholder:"Enter details about your task",onChange:function(t){return e.setTaskDetails(t.target.value)}}))};var B=function(e){return r.a.createElement(S.a.Row,null,r.a.createElement(S.a.Group,{as:E.a,controlId:"formStartDate"},r.a.createElement(S.a.Label,null,"When should you start this task?"),r.a.createElement(S.a.Control,{type:"date",onChange:function(t){return e.setStartDate(t.target.value)}})),r.a.createElement(S.a.Group,{as:E.a,controlId:"formEndDate"},r.a.createElement(S.a.Label,null,"When do you need to finish this task?"),r.a.createElement(S.a.Control,{type:"date",onChange:function(t){return e.setEndDate(t.target.value)}})))};var z=function(e){return r.a.createElement(r.a.Fragment,null,e.errors.repeats&&r.a.createElement("span",{className:"error"},"Select whether this task repeats"),r.a.createElement(S.a.Row,{className:"customRow"},r.a.createElement(S.a.Check,{defaultChecked:!0,type:"radio",name:"repeatChoice",className:"align-self-center",value:"doesNotRepeat",onChange:e.handleRadioButton}),r.a.createElement("div",{className:"col align-self-center"},r.a.createElement(S.a.Label,{className:"noBottonMargin"},"Does not repeat"))))};var L=function(e){return r.a.createElement(S.a.Row,{className:"customRow"},r.a.createElement(S.a.Check,{type:"radio",name:"repeatChoice",className:"align-self-center",value:"repeatsAfterCompletion",onChange:e.handleRadioButton}),r.a.createElement("div",{className:"col-4 col-md-2 align-self-center"},r.a.createElement(S.a.Label,{className:"noBottonMargin"},"Repeats every")),r.a.createElement("div",{className:"col-3 col-md-1"},r.a.createElement(S.a.Control,{type:"number",onChange:function(t){return e.setRepeatAfterCompletionFrequency(t.target.value)},placeholder:e.errors.repeatAfterCompletionFrequency?"?":null,style:e.errors.repeatAfterCompletionFrequency?{backgroundColor:"yellow"}:null})),r.a.createElement("div",{className:"col-4 col-md-2"},r.a.createElement(S.a.Control,{as:"select",custom:!0,onChange:function(t){return e.setRepeatAfterCompletionFrequencyType(t.target.value)}},r.a.createElement("option",null,"days"),r.a.createElement("option",null,"weeks"),r.a.createElement("option",null,"months"),r.a.createElement("option",null,"years"))),r.a.createElement("div",{className:"col-12 col-md-6 align-self-center"},r.a.createElement(S.a.Label,{className:"noBottonMargin"},"after the task has been completed")))};var I=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)(""),i=Object(s.a)(c,2),u=i[0],d=i[1],p=Object(n.useState)(""),f=Object(s.a)(p,2),h=f[0],E=f[1],v=Object(n.useState)(m()().format("YYYY-MM-DD")),C=Object(s.a)(v,2),y=C[0],D=C[1],O=Object(n.useState)(m()().format("YYYY-MM-DD")),w=Object(s.a)(O,2),Y=w[0],x=w[1],j=Object(n.useState)(!1),N=Object(s.a)(j,2),M=N[0],T=N[1],R=Object(n.useState)(null),A=Object(s.a)(R,2),I=A[0],G=A[1],P=Object(n.useState)(null),V=Object(s.a)(P,2),W=V[0],_=V[1],$=Object(n.useState)("days"),J=Object(s.a)($,2),K=J[0],X=J[1],Q=Object(n.useState)(null),U=Object(s.a)(Q,2),Z=U[0],ee=(U[1],Object(n.useState)([!1,!1,!1,!1,!1,!1,!1])),te=Object(s.a)(ee,2),ae=te[0],ne=(te[1],Object(n.useState)({name:!1,repeatAfterCompletionFrequency:!1})),re=Object(s.a)(ne,2),le=re[0],oe=re[1];function ce(e){"repeatsAfterCompletion"===e.target.value?(T(!0),G("repeatsAfterCompletion")):"repeatsRegularDays"===e.target.value?(T(!0),G("repeatsRegularDays")):"doesNotRepeat"===e.target.value&&T(!1)}return r.a.createElement(g.a,{className:"add-task"},r.a.createElement(q,{open:l,setOpen:o}),r.a.createElement(k.a,{in:l},r.a.createElement(g.a.Body,null,r.a.createElement(S.a,null,r.a.createElement(F,{setName:d,errors:le}),r.a.createElement(H,{setTaskDetails:E}),r.a.createElement(B,{setStartDate:D,setEndDate:x}),r.a.createElement(z,{errors:le,handleRadioButton:ce}),r.a.createElement(L,{errors:le,handleRadioButton:ce,setRepeatAfterCompletionFrequency:_,setRepeatAfterCompletionFrequencyType:X})),r.a.createElement(b,{variant:"add-task",onClick:function(){if(""===u||null===M||"repeatsAfterCompletion"===I&&null===W){var t=Object.assign({},le);t.name=""===u,t.repeatAfterCompletionFrequency="repeatsAfterCompletion"===I&&null===W,oe(t)}else e.addTask(u,h,y,Y,M,I,W,K,Z,ae)}},"Submit Task"))))};a(281);var G=function(e){var t=e.tasks.filter((function(e){return e.endDate===m()().format("YYYY-MM-DD")})).length,a=e.tasks.filter((function(e){return!1===e.completed})).length;return r.a.createElement(g.a.Header,{className:"intro",tabIndex:"0"},r.a.createElement("h4",null,"You have ",t," task",1===t?"":"s"," to complete today out of ",a," unfinished task",1===a?"":"s"))};a(282);var P=function(e){var t=Object(n.useState)(Object(u.a)()),a=Object(s.a)(t,2),l=a[0],o=a[1];return r.a.createElement(E.a,null,r.a.createElement(v.a,{className:"my-2"},r.a.createElement(G,{tasks:e.tasks})),r.a.createElement(v.a,{className:"my-2"},r.a.createElement(I,{key:l,addTask:function(t,a,n,r,l,c,s,i,m,d){o(Object(u.a)()),e.addTask(t,a,n,r,l,c,s,i,m,d)},tasks:e.tasks})),e.tasks.sort((function(e,t){return!0===e.completed||e.endDate>t.endDate?1:e.startDate<t.startDate?-1:0})).map((function(t){return r.a.createElement(v.a,{key:t.id,className:"my-2"},r.a.createElement(A,Object.assign({completeTask:e.completeTask,deleteTask:e.deleteTask,openTaskCard:e.openTaskCard},t)))})))};a(283);var V=function(){return r.a.createElement("footer",{className:"block-quote footer"},r.a.createElement("div",{className:"container"},r.a.createElement("span",null,r.a.createElement("cite",null,"Saoirse Bryar, 2020"))))},W=a(215),_=(a(413),a(227)),$=a.n(_);var J=function(e){return r.a.createElement("div",{className:"tooltip--container",style:{backgroundColor:"".concat($()(e.point.serieColor).lighten(15).toString())}},e.point.data.y," ",r.a.createElement("br",null),e.point.id.endsWith("0")&&"Start: ",e.point.id.endsWith("1")&&"Due: ",m()(e.point.data.x).format("MMM DD"))};a(414);var K=function(e){var t=e.tasks.filter((function(e){return!1===e.completed})).map((function(e){var t={};t.id=e.id;var a={};a.x=e.startDate,a.y=e.name;var n={};return n.x=e.endDate,n.y=e.name,t.data=[a,n],t}));return r.a.createElement(W.a,{className:"graph",style:{cursor:"crosshair"},data:t,margin:{top:70,right:20,bottom:70,left:150},xScale:{type:"time",format:"%Y-%m-%d"},xFormat:"time:%Y-%m-%d",yScale:{type:"point"},axisTop:null,axisRight:null,axisLeft:{renderTick:function(e){var t=e.textAnchor,a=e.textBaseline,n=e.value,l=e.x,o=e.y,c=new RegExp("^(.{".concat(29,"}[^\\w]*).*")),s=new RegExp("([^\\s].{0,".concat(16,"}(?=[\\s\\W]|$))"),"gm"),i=n.replace(c,"$1...").match(s).slice(0,2).map((function(e,t){return r.a.createElement("tspan",{key:e,dy:16*t,x:-15,style:{fontFamily:"Verdana, Arial, sans-serif",fontSize:"14px"}},e)}));return r.a.createElement("g",{transform:"translate(".concat(l,",").concat(o,")")},r.a.createElement("text",{alignmentBaseline:a,textAnchor:t},i))}},axisBottom:{format:"%b %d",tickRotation:-45,tickPadding:15},theme:{fontSize:14,fontFamily:"Verdana, Arial, sans-serif"},colors:{scheme:"accent"},lineWidth:20,pointSize:20,enableGridX:!0,enableGridY:!0,tooltip:J,useMesh:!0,onClick:function(t){var a=t.id.slice(0,-2);e.setPage("Tasks"),e.openFromGraphId(a)},enableCrosshair:!1})};a(415);var X=function(){document.body.addEventListener("mousedown",(function(){document.body.classList.add("using-mouse")})),document.body.addEventListener("keydown",(function(e){9===e.keyCode&&document.body.classList.remove("using-mouse")}));var e=Object(n.useState)([{id:Object(u.a)(),name:"Tidying",taskDetails:"Sort through paperwork",startDate:"2020-06-06",endDate:"2020-06-11",percentageCompletion:20,completed:!1,repeats:!1,cardOpen:!1},{id:Object(u.a)(),name:"Cleaning",taskDetails:"Clean bathrooms",startDate:"2020-06-05",endDate:"2020-06-10",percentageCompletion:60,completed:!1,repeats:!0,repeatType:"repeatsAfterCompletion",repeatAfterCompletionFrequency:7,repeatAfterCompletionFrequencyType:"days",cardOpen:!1},{id:Object(u.a)(),name:"Hoovering",taskDetails:"Downstairs",startDate:"2020-06-03",endDate:"2020-06-04",percentageCompletion:80,completed:!0,completeDate:"2020-04-26",repeats:!1,cardOpen:!1},{id:Object(u.a)(),name:"Post Letter",taskDetails:"Return to sender",startDate:"2020-06-03",endDate:"2020-06-10",percentageCompletion:30,completed:!1,repeats:!1,cardOpen:!1},{id:Object(u.a)(),name:"Tesco Order",startDate:"2020-06-01",endDate:"2020-06-03",percentageCompletion:0,completed:!1,repeats:!1,cardOpen:!1},{id:Object(u.a)(),name:"Today's Task",startDate:m()().format("YYYY-MM-DD"),endDate:m()().format("YYYY-MM-DD"),percentageCompletion:100,completed:!1,repeats:!1,cardOpen:!1}]),t=Object(s.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)("Tasks"),i=Object(s.a)(o,2),p=i[0],f=i[1];function E(e,t){var a=m()().valueOf(),n=m()(e,"YYYY-MM-DD").valueOf(),r=(a-n)/(m()(t,"YYYY-MM-DD").valueOf()-n)*100;return r<0?0:isFinite(r)?r:100}function v(e){var t=a.map((function(t){return t.id===e?t.cardOpen=!0:t.cardOpen=!1,t}));l(t)}return r.a.createElement("div",{className:"App"},r.a.createElement(h,{setPage:f}),"Tasks"===p&&r.a.createElement(d.a,{fluid:"lg"},r.a.createElement(P,{addTask:function(e,t,n,r,o,s,i,m,d,p){var f={id:Object(u.a)(),name:e,taskDetails:t,startDate:n,endDate:r,repeats:o,repeatType:s,repeatAfterCompletionFrequency:i,repeatAfterCompletionFrequencyType:m,repeatRegularDaysFrequency:d,repeatRegularDaysArrayDays:p,completed:!1,percentageCompletion:E(n,r),cardOpen:!1},h=[].concat(Object(c.a)(a),[f]);l(h)},completeTask:function(e){var t=a.map((function(t){return t.id===e&&(!1===t.repeats?(t.completed=!0,t.completeDate=m()().format("YYYY-MM-DD")):"repeatsAfterCompletion"===t.repeatType&&(t.endDate=m()().add(t.repeatAfterCompletionFrequency,t.repeatAfterCompletionFrequencyType).format("YYYY-MM-DD"),t.startDate=m()().format("YYYY-MM-DD"))),t}));l(t)},deleteTask:function(e){var t=a.filter((function(t){return t.id!==e}));l(t)},tasks:a,openFromGraphId:v,openTaskCard:function(e){var t=a.map((function(t){return t.id===e&&(t.cardOpen=!t.cardOpen),t}));l(t)}})),"Graph"===p&&r.a.createElement(d.a,{fluid:"lg",style:{height:window.innerHeight-125<600?window.innerHeight-125:600}},r.a.createElement(K,{tasks:a,setPage:f,openFromGraphId:v})),r.a.createElement(V,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},48:function(e,t,a){}},[[267,1,2]]]);
//# sourceMappingURL=main.c3018f14.chunk.js.map