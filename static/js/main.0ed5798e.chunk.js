(this.webpackJsonptodo_react_application=this.webpackJsonptodo_react_application||[]).push([[0],{37:function(e,a,t){e.exports=t(60)},42:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},53:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),c=t.n(r),o=(t(42),t(33)),s=t(7),m=t(6),i=t.n(m),d=t(70);t(44);var u=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark fixed-top"},l.a.createElement("h1",{className:"navbar-brand title"},"My Tasks"))};t(45),t(46);function p(e){return l.a.createElement("svg",{className:"bi bi-check-box",width:e.squareHeight,height:e.squareHeight,viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z",clipRule:"evenodd"}),l.a.createElement("path",{fillRule:"evenodd",d:"M1.5 13A1.5 1.5 0 003 14.5h10a1.5 1.5 0 001.5-1.5V8a.5.5 0 00-1 0v5a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V3a.5.5 0 01.5-.5h8a.5.5 0 000-1H3A1.5 1.5 0 001.5 3v10z",clipRule:"evenodd"}))}function E(e){return l.a.createElement("svg",{className:"bi bi-x-square",width:e.squareHeight,height:e.squareHeight,viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z",clipRule:"evenodd"}),l.a.createElement("path",{fillRule:"evenodd",d:"M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z",clipRule:"evenodd"}),l.a.createElement("path",{fillRule:"evenodd",d:"M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z",clipRule:"evenodd"}))}function v(e){return l.a.createElement("svg",{className:"bi bi-plus-circle",width:e.squareHeight,height:e.squareHeight,viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z",clipRule:"evenodd"}),l.a.createElement("path",{fillRule:"evenodd",d:"M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z",clipRule:"evenodd"}),l.a.createElement("path",{fillRule:"evenodd",d:"M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z",clipRule:"evenodd"}))}function f(e){return l.a.createElement("svg",{className:"bi bi-arrow-clockwise",width:e.squareHeight,height:e.squareHeight,viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M3.17 6.706a5 5 0 017.103-3.16.5.5 0 10.454-.892A6 6 0 1013.455 5.5a.5.5 0 00-.91.417 5 5 0 11-9.375.789z",clipRule:"evenodd"}),l.a.createElement("path",{fillRule:"evenodd",d:"M8.147.146a.5.5 0 01.707 0l2.5 2.5a.5.5 0 010 .708l-2.5 2.5a.5.5 0 11-.707-.708L10.293 3 8.147.854a.5.5 0 010-.708z",clipRule:"evenodd"}))}var h=function(e){return l.a.createElement("button",Object.assign({},e,{className:"btn"}),e.children)};t(47);var g=function(e){var a,t,n,r=e.percentageCompletion;if(r<=50){var c=128+127*r/50;a="rgb(".concat(255*r/50,",").concat(c,",0)"),n="".concat("rgb(0,128,0)",",").concat(a)}if(r>=50){var o=128+127*r/100;a="rgb(".concat(255*r/100,",").concat(o,",0)"),t="rgb(255,".concat(255-255*(r-50)/50,",0)"),n="".concat("rgb(0,128,0)",",").concat(a,",").concat(t)}return l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{backgroundImage:"linear-gradient(to right,".concat(n,")"),width:"".concat(r,"%")},"aria-valuenow":e.percentageCompletion,"aria-valuemin":"0","aria-valuemax":"100","aria-label":"Percentage of way through time allocated for task"}))};t(48);var k=function(e){return l.a.createElement("div",{className:"task-body"},!e.completed&&l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement("h5",null,"Start: ",i()(e.startDate).format("DD/MM/YYYY"))),l.a.createElement("div",{className:"col-6 text-right"},l.a.createElement("h5",null,"Due: ",i()(e.endDate).format("DD/MM/YYYY")))),e.completed&&l.a.createElement("h5",null,"Completed: ",i()(e.completeDate).format("DD/MM/YYYY")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("h6",null,e.taskDetails))),e.repeats&&l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("h6",null,"This task repeats every ",e.repeatFrequency," ",e.repeatFrequencyType,"."))))},b=t(69),N=t(68),D=t(66),w=t(71);t(49);var y=function(e){var a=l.a.useState(!1),t=Object(s.a)(a,2),n=t[0],r=t[1];return l.a.createElement(b.a,{className:"task-item",style:{backgroundColor:e.completed?"rgba(130, 138, 146, 0.74)":"#BADEC6"}},l.a.createElement(b.a.Header,{tabIndex:"0",className:"h4",onClick:function(){return r(!n)},onKeyPress:function(e){return 13===e.charCode?r(!n):null},"aria-controls":"task-item-contents","aria-expanded":n},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-8",style:{textDecoration:e.completed?"line-through":""}},e.repeats&&l.a.createElement(f,{squareHeight:"1.2em"})," ",e.name),l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"btn-group float-right"},!e.completed&&l.a.createElement(N.a,{placement:"top",overlay:l.a.createElement(D.a,null,"Mark as complete")},l.a.createElement(h,{onClick:function(){e.completeTask(e.id)},"aria-label":"Mark as complete"},l.a.createElement(p,{squareHeight:"1.5em"}))),l.a.createElement(N.a,{placement:"top",overlay:l.a.createElement(D.a,null,"Delete")},l.a.createElement(h,{onClick:function(){e.deleteTask(e.id)},"aria-label":"Delete"},l.a.createElement(E,{squareHeight:"1.3em"})))))),!e.completed&&l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement(g,{percentageCompletion:e.percentageCompletion})))),l.a.createElement(w.a,{in:n},l.a.createElement(b.a.Body,{tabIndex:"0"},l.a.createElement(k,e))))},Y=t(67);t(53);var C=function(e){var a=l.a.useState(!1),t=Object(s.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(""),m=Object(s.a)(o,2),d=m[0],u=m[1],p=Object(n.useState)(""),E=Object(s.a)(p,2),f=E[0],g=E[1],k=Object(n.useState)(i()().format("YYYY-MM-DD")),y=Object(s.a)(k,2),C=y[0],M=y[1],R=Object(n.useState)(i()().format("YYYY-MM-DD")),x=Object(s.a)(R,2),T=x[0],j=x[1],H=Object(n.useState)(!1),O=Object(s.a)(H,2),q=O[0],S=O[1];function B(e){"doesRepeat"===e.target.value?S(!0):"doesNotRepeat"===e.target.value&&S(!1)}return l.a.createElement(b.a,{className:"add-task"},l.a.createElement(b.a.Header,{tabIndex:"0",as:"h4",onClick:function(){return c(!r)},onKeyPress:function(e){return 13===e.charCode?c(!r):null},"aria-controls":"add-task-contents","aria-expanded":r},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10 align-self-center"},"Add Task"),l.a.createElement("div",{className:"col-2"},l.a.createElement("div",{className:"float-right"},l.a.createElement(N.a,{placement:"left",overlay:l.a.createElement(D.a,null,"Add task")},l.a.createElement(h,{type:"submit","aria-label":"Add task",onClick:function(){e.addTask(d,f,C,T,q)}},l.a.createElement(v,{squareHeight:"2em"}))))))),l.a.createElement(w.a,{in:r},l.a.createElement(b.a.Body,null,l.a.createElement("div",{id:"add-task-contents"},l.a.createElement(Y.a,null,l.a.createElement(Y.a.Group,{controlId:"formTaskName"},l.a.createElement(Y.a.Control,{type:"text",placeholder:"Name your next task",onChange:function(e){return u(e.target.value)}}))),l.a.createElement(Y.a,null,l.a.createElement(Y.a.Group,{controlId:"formTaskDetails"},l.a.createElement(Y.a.Control,{type:"text",placeholder:"Enter details about your task",onChange:function(e){return g(e.target.value)}}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement(Y.a,null,l.a.createElement(Y.a.Group,{controlId:"formStartDate"},l.a.createElement(Y.a.Label,null,"Start date"),l.a.createElement(Y.a.Control,{type:"date",onChange:function(e){return M(e.target.value)}})))),l.a.createElement("div",{className:"col-6"},l.a.createElement(Y.a,null,l.a.createElement(Y.a.Group,{controlId:"formEndDate"},l.a.createElement(Y.a.Label,null,"End date"),l.a.createElement(Y.a.Control,{type:"date",onChange:function(e){return j(e.target.value)}})))))),l.a.createElement(Y.a,null,l.a.createElement(Y.a.Row,{className:"customRow"},l.a.createElement(Y.a.Check,{type:"radio",name:"repeatChoice",className:"align-self-center",value:"doesNotRepeat",onChange:B}),l.a.createElement("div",{className:"col align-self-center"},l.a.createElement(Y.a.Label,{className:"noBottonMargin"},"Does not repeat"))),l.a.createElement(Y.a.Row,{className:"customRow"},l.a.createElement(Y.a.Check,{type:"radio",name:"repeatChoice",className:"align-self-center",value:"doesRepeat",onChange:B}),l.a.createElement("div",{className:"col-4 col-md-2 align-self-center"},l.a.createElement(Y.a.Label,{className:"noBottonMargin"},"Repeats every")),l.a.createElement("div",{className:"col-3 col-md-1"},l.a.createElement(Y.a.Control,{type:"number"})),l.a.createElement("div",{className:"col-4 col-md-2"},l.a.createElement(Y.a.Control,{as:"select",custom:!0},l.a.createElement("option",null,"days"),l.a.createElement("option",null,"weeks"),l.a.createElement("option",null,"months"),l.a.createElement("option",null,"years"))),l.a.createElement("div",{className:"col-12 col-md-6 align-self-center"},l.a.createElement(Y.a.Label,{className:"noBottonMargin"},"after the task has been completed")))))))};t(55);var M=function(e){var a=e.tasks.filter((function(e){return e.endDate===i()().format("YYYY-MM-DD")})).length,t=e.tasks.filter((function(e){return!1===e.completed})).length;return l.a.createElement("div",{className:"card-header rounded intro",tabIndex:"0"},l.a.createElement("h4",null,"You have ",a," task",1===a?"":"s"," to complete today out of ",t," unfinished task",1===t?"":"s","."))};t(56);var R=function(e){return l.a.createElement("div",{className:"col-12 col-lg-8"},l.a.createElement("div",{className:"mx-2"},l.a.createElement("div",{className:"row my-2 d-lg-none"},l.a.createElement(M,{tasks:e.tasks})),l.a.createElement("div",{className:"row my-2"},l.a.createElement(C,{addTask:e.addTask,tasks:e.tasks})),e.tasks.sort((function(e,a){return!0===e.completed||e.startDate>i()().format("YYYY-MM-DD")||e.endDate>a.endDate?1:e.endDate<a.endDate||e.startDate<a.startDate?-1:0})).map((function(a){return l.a.createElement("div",{key:a.id,className:"row my-2"},l.a.createElement(y,Object.assign({completeTask:e.completeTask,deleteTask:e.deleteTask},a)))}))))};t(57);var x=function(e){return l.a.createElement("div",{className:"d-none d-lg-block col-lg-4 "},l.a.createElement("div",{className:"mx-2"},l.a.createElement("div",{className:"row my-2"},l.a.createElement(M,{tasks:e.tasks})),l.a.createElement("div",{className:"row my-2"},l.a.createElement("div",{className:"card-header rounded detail-display"},l.a.createElement("h4",null,"Side detail display.")))))};var T=function(e){return l.a.createElement("main",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement(R,{addTask:e.addTask,completeTask:e.completeTask,deleteTask:e.deleteTask,tasks:e.tasks}),l.a.createElement(x,{tasks:e.tasks})))};t(58);var j=function(){return l.a.createElement("footer",{className:"block-quote footer"},l.a.createElement("div",{className:"container"},l.a.createElement("span",null,"\xa9"," ",l.a.createElement("cite",null,"Saoirse Bryar, 2020"))))};t(59);var H=function(){var e=Object(n.useState)([{id:Object(d.a)(),name:"Tidying",taskDetails:"Sort through paperwork",startDate:"2020-05-06",endDate:"2020-08-11",percentageCompletion:20,completed:!1,repeats:!1},{id:Object(d.a)(),name:"Cleaning",taskDetails:"Clean bathrooms",startDate:"2020-05-05",endDate:"2020-08-11",percentageCompletion:60,completed:!1,repeats:!0,repeatFrequency:7,repeatFrequencyType:"days"},{id:Object(d.a)(),name:"Hoovering",taskDetails:"Downstairs",startDate:"2020-04-03",endDate:"2020-05-01",percentageCompletion:80,completed:!0,completeDate:"2020-04-26",repeats:!1}]),a=Object(s.a)(e,2),t=a[0],r=a[1];return l.a.createElement("div",{className:"App"},l.a.createElement(u,null),l.a.createElement(T,{addTask:function(e,a,n,l,c,s,m,i){var u={id:Object(d.a)(),name:e,taskDetails:a,startDate:n,endDate:l,completed:!1,repeats:s},p=[].concat(Object(o.a)(t),[u]);r(p)},completeTask:function(e){var a=t.map((function(a){return a.id===e&&(!1===a.repeats?(a.completed=!0,a.completeDate=i()().format("YYYY-MM-DD")):!0===a.repeats&&(a.endDate=i()(a.endDate).add(a.repeatFrequency,a.repeatFrequencyType).format("YYYY-MM-DD"),a.startDate=i()().format("YYYY-MM-DD"))),a}));r(a)},deleteTask:function(e){var a=t.filter((function(a){return a.id!==e}));r(a)},tasks:t}),l.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.0ed5798e.chunk.js.map