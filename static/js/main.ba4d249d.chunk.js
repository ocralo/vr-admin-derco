(this["webpackJsonpweb-admin"]=this["webpackJsonpweb-admin"]||[]).push([[0],{32:function(e,a,t){e.exports=t(55)},37:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(29),o=t.n(r),c=(t(37),t(13)),m=t(3),s=(t(38),t(39),t(12)),i=t(5),u=t(10),d=t.n(u);function E(){var e=Object(n.useState)({userName:"",password:""}),a=Object(i.a)(e,2),t=a[0],r=a[1],o=Object(m.f)();var c=function(){u.auth().signInWithEmailAndPassword(t.userName,t.password).then((function(e){console.log(e.user.email),localStorage.setItem("email",e.user.email),o.push("/home")})).catch((function(e){alert("No se pudo iniciar sesion")}))};function d(e){var a=e.target.name,n=e.target.value;r("userName"===a?Object(s.a)(Object(s.a)({},t),{},{userName:n}):Object(s.a)(Object(s.a)({},t),{},{password:n}))}return l.a.createElement("div",{className:"container-fluid vh-100"},l.a.createElement("div",{className:"row justify-content-center h-100"},l.a.createElement("div",{className:"col-md-6 d-flex align-items-center"},l.a.createElement("div",{className:"card shadow w-100",style:{height:"35em"}},l.a.createElement("div",{className:"card-header d-flex flex-column align-items-center justify-content-center bg-white border-bottom-0"},l.a.createElement("img",{src:"".concat(".","/img/kaleidolab.jpg"),alt:"",width:"300"}),l.a.createElement("h3",null,"Assessment VR (administrador)"),l.a.createElement("p",{className:"text-center"},"La experiencia de realidad virtual para desarrollar y aplicar evaluaciones de comportamientos ante situaciones inesperadas")),l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c()}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"usuario"},"Usuario"),l.a.createElement("input",{type:"text",className:"form-control",id:"usuario","aria-describedby":"emailHelp",name:"userName",onChange:d})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"Password"},"Contrase\xf1a"),l.a.createElement("input",{type:"password",className:"form-control",name:"password",id:"Password",onChange:d})),l.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block mb-2"},"Ingresar")))))))}function p(){var e=Object(m.f)();return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},l.a.createElement(c.b,{className:"navbar-brand",to:"/home"},l.a.createElement("img",{src:"".concat(".","/img/kaleidolab.jpg"),alt:"",width:"120"})),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},l.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement(c.b,{className:"nav-link",to:"/home"},"Calificacion de usuario ",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item active"},l.a.createElement(c.b,{className:"nav-link",to:"/rate"},"Calificar video ",l.a.createElement("span",{className:"sr-only"},"(current)")))),l.a.createElement("div",{className:"dropdown"},l.a.createElement("button",{className:"btn btn-secondary dropdown-toggle my-2 my-lg-0",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},localStorage.getItem("email")),l.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},l.a.createElement(c.b,{className:"dropdown-item",to:"",onClick:function(){u.auth().signOut().then((function(){e.push("/")})).catch((function(e){}))}},"Cerrar sesion")))))}function b(e){var a=e.userData,t=e.questions,r=Object(n.useState)(a),o=Object(i.a)(r,2),c=o[0],m=o[1];return Object(n.useEffect)((function(){console.log(a),m(a)}),[a]),l.a.createElement("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"".concat(null===c||void 0===c?void 0:c.name," ").concat(null===c||void 0===c?void 0:c.lastName)),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body overflow-auto"},l.a.createElement("h3",null,"Preguntas de seleccion multiple"),l.a.createElement("ul",null,Object.values(null===c||void 0===c?void 0:c.answers).map((function(e,a){return l.a.createElement("li",{key:"li"+a},a+1,"-"," ",Array.isArray(t)?t[a+1].question:"",l.a.createElement("br",null),l.a.createElement("p",null,"Puntuacion:"," ",l.a.createElement("b",null,(null===e||void 0===e?void 0:e.rating)?"".concat(null===e||void 0===e?void 0:e.rating):"0"),l.a.createElement("br",null),(null===e||void 0===e?void 0:e.url)?l.a.createElement("video",{className:"w-100",controls:!0,key:null===e||void 0===e?void 0:e.url},console.log(null===e||void 0===e?void 0:e.url),l.a.createElement("source",{src:(null===e||void 0===e?void 0:e.url)||"https://media.w3.org/2010/05/sintel/trailer_hd.mp4",type:"video/webm"}),"Your browser does not support the video tag."):"",e.rating>0?l.a.createElement("p",null,"Comentarios: ",l.a.createElement("b",null,null===e||void 0===e?void 0:e.comments)):""))})))))))}function f(e){var a=e.UsersData,t=e.questions,r=Object(n.useState)({lastName:"",name:"",answers:[{rating:0,option:""}]}),o=Object(i.a)(r,2),c=o[0],m=o[1];Object(n.useEffect)((function(){console.log("hola")}),[c]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,{userData:c,questions:t}),l.a.createElement("div",{className:"table-responsive-lg"},l.a.createElement("table",{className:"table"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"Nombre"),l.a.createElement("th",{scope:"col"},"Apellido"),l.a.createElement("th",{scope:"col"},"Calificacion"),l.a.createElement("th",{scope:"col"}))),l.a.createElement("tbody",null,Object.values(a).map((function(e,a){return l.a.createElement("tr",{key:"tr-"+a},l.a.createElement("th",{scope:"row"},a+1),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.lastName),l.a.createElement("td",null,(t=e.answers,Object.values(t).map((function(e){return e})).map((function(e){return e.rating})).reduce((function(e,a){return e+a?a:0})))),l.a.createElement("td",null,l.a.createElement("button",{type:"button",className:"btn btn-secondary btn-sm","data-toggle":"modal","data-target":"#exampleModal",onClick:function(){console.log(e),m(e)}},"Ver mas")));var t}))))))}function v(){var e=Object(n.useState)({}),a=Object(i.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)({}),c=Object(i.a)(o,2),m=c[0],s=c[1];return Object(n.useEffect)((function(){var e=u.database().ref();e.child("users").on("value",(function(e){r(e.val())})),e.child("questions").on("value",(function(e){s(e.val())}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(p,null),l.a.createElement("div",{className:"container mt-4"},l.a.createElement("h3",null,"Calificaciones de usuarios"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement(f,{UsersData:t,questions:m})))))}var g=t(21),N=t(31);function h(e){var a=e.userData;Object(n.useEffect)((function(){}),[a]);var t=Object(n.useState)([]),r=Object(i.a)(t,2),o=r[0],c=r[1],m=Object(n.useState)(1),u=Object(i.a)(m,2),E=(u[0],u[1],d.a.database()),p=function(e,t){e.preventDefault();var n=Object(s.a)({},null===a||void 0===a?void 0:a.answers);n[t].rating=Object.values(o[t-1]).reduce((function(e,a,n,l){return Object.values(o[t-1]).length-1!==n?parseInt(e)+parseInt(a):parseInt(e)}))/4,n[t].comments=o[t-1][Object.values(o[t-1]).length],E.ref("users/".concat(a.name,"123456")).update({answers:n},(function(e){e?alert("Ocurri\xf3 un error al guardar la respuesta"):alert("Se ha guardado la respuesta con \xe9xito")}))},b=function(e,a){var t=e.target.name,n=e.target.value,l=Object(N.a)(o);l[a]=Object(s.a)(Object(s.a)({},l[a]),{},Object(g.a)({},t,n)),c(l)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"modal fade bd-example-modal-xl",id:"videoModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog modal-xl",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"".concat(null===a||void 0===a?void 0:a.name," ").concat(null===a||void 0===a?void 0:a.lastName)),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body overflow-auto"},l.a.createElement("h3",null,"Preguntas de video"),l.a.createElement("div",{className:"accordion",id:"accordionExample"},null===a||void 0===a?void 0:a.answers.map((function(e,a){return l.a.createElement(l.a.Fragment,null,!(null===e||void 0===e?void 0:e.url)||l.a.createElement("div",{className:"card",key:"userAcordion-".concat(a)},l.a.createElement("div",{className:"card-header",id:"headingOne"},l.a.createElement("h2",{className:"mb-0"},l.a.createElement("button",{className:"btn btn-link",type:"button","data-toggle":"collapse","data-target":"#collapse".concat(a),"aria-expanded":"true","aria-controls":"collapse".concat(a)},"Video #",a))),l.a.createElement("div",{id:"collapse".concat(a),className:1==a?"collapse show":"collapse","aria-labelledby":"headingOne","data-parent":"#accordionExample"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("video",{className:"w-100",controls:!0,key:null===e||void 0===e?void 0:e.url},l.a.createElement("source",{src:(null===e||void 0===e?void 0:e.url)||"https://media.w3.org/2010/05/sintel/trailer_hd.mp4",type:"video/webm"}),"Your browser does not support the video tag.")),l.a.createElement("div",{className:"col-md-6"},function(e){switch(e){case 1:return l.a.createElement("form",{onSubmit:function(a){return p(a,e)}},l.a.createElement("h3",null,"Realiza una breve presentaci\xf3n sobre ti"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"fluides"},"COMUNICACI\xd3N"),l.a.createElement("select",{className:"form-control",id:"fluides",name:"1",onChange:function(a){return b(a,e-1)},required:!0},l.a.createElement("option",null),l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleFormControlTextarea1"},"OBSERVACIONES"),l.a.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",name:"2",onChange:function(a){return b(a,e-1)},rows:"3",required:!0})),l.a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg btn-block"},"Guardar"));case 2:return l.a.createElement("form",{onSubmit:function(a){return p(a,e)}},l.a.createElement("h3",null,"Teniendo en cuenta el cargo al cual te estas postulando, \xbfcuales ser\xedan tus estrategias para apalancar el crecimiento de la compa\xf1\xeda?"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"fluides"},"ENFOQUE ESTRAT\xc9GICO"),l.a.createElement("select",{className:"form-control",id:"fluides",name:"1",onChange:function(a){return b(a,e-1)},required:!0},l.a.createElement("option",null),l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"fluides"},"CREDIBILIDAD Y CONOCIMIENTO"),l.a.createElement("select",{className:"form-control",id:"fluides",name:"2",onChange:function(a){return b(a,e-1)},required:!0},l.a.createElement("option",null),l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleFormControlTextarea1"},"OBSERVACIONES"),l.a.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",name:"3",onChange:function(a){return b(a,e-1)},rows:"3",required:!0})),l.a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg btn-block"},"Guardar"));case 3:return l.a.createElement("form",{onSubmit:function(a){return p(a,e)}},l.a.createElement("h3",null,"\xbfComo describes tu estilo de liderazgo y que elementos consideras que lo hacen exitoso?"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"fluides"},"LIDERAZGO"),l.a.createElement("select",{className:"form-control",id:"fluides",name:"1",onChange:function(a){return b(a,e-1)},required:!0},l.a.createElement("option",null),l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"fluides"},"RESPETO"),l.a.createElement("select",{className:"form-control",id:"fluides",name:"2",onChange:function(a){return b(a,e-1)},required:!0},l.a.createElement("option",null),l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"fluides"},"SEGUIMIENTO"),l.a.createElement("select",{className:"form-control",id:"fluides",name:"3",onChange:function(a){return b(a,e-1)},required:!0},l.a.createElement("option",null),l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleFormControlTextarea1"},"OBSERVACIONES"),l.a.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",name:"4",onChange:function(a){return b(a,e-1)},rows:"3",required:!0})),l.a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg btn-block"},"Guardar"));case 4:return l.a.createElement("form",{onSubmit:function(a){return p(a,e)}},l.a.createElement("h3",null,"\xbfComo logras que tu equipo de trabajo este alineado con los objetivos del \xe1rea y de la compa\xf1\xeda?"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"fluides"},"ORIENTACION A RESULTADO"),l.a.createElement("select",{className:"form-control",id:"fluides",name:"1",onChange:function(a){return b(a,e-1)},required:!0},l.a.createElement("option",null),l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"fluides"},"PLANEACION"),l.a.createElement("select",{className:"form-control",id:"fluides",name:"2",onChange:function(a){return b(a,e-1)},required:!0},l.a.createElement("option",null),l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"fluides"},"SEGUIMIENTO Y RETROALIMENTACION"),l.a.createElement("select",{className:"form-control",id:"fluides",name:"3",onChange:function(a){return b(a,e-1)},required:!0},l.a.createElement("option",null),l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleFormControlTextarea1"},"OBSERVACIONES"),l.a.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",name:"4",onChange:function(a){return b(a,e-1)},rows:"3",required:!0})),l.a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg btn-block"},"Guardar"));case 5:return l.a.createElement("form",{onSubmit:function(a){return p(a,e)}},l.a.createElement("h3",null,"\xbfEn tu experiencia como identificas y gestionas oportunidades de desarrollo en tu equipo?"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"fluides"},"DESARROLLO DE EQUIPO"),l.a.createElement("select",{className:"form-control",id:"fluides",name:"1",onChange:function(a){return b(a,e-1)},required:!0},l.a.createElement("option",null),l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleFormControlTextarea1"},"OBSERVACIONES"),l.a.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",name:"2",onChange:function(a){return b(a,e-1)},rows:"3",required:!0})),l.a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg btn-block"},"Guardar"));default:return l.a.createElement("form",{onSubmit:function(a){return p(a,e)}},l.a.createElement("h3",null,"\xbfQue aspectos identificas para continuar en el desarrollo de tu rol de L\xedder?"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"fluides"},"AUTO CONCIENCIA"),l.a.createElement("select",{className:"form-control",id:"fluides",name:"1",onChange:function(a){return b(a,e-1)},required:!0},l.a.createElement("option",null),l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleFormControlTextarea1"},"OBSERVACIONES"),l.a.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",name:"2",onChange:function(a){return b(a,e-1)},rows:"3",required:!0})),l.a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg btn-block"},"Guardar"))}}(a))))))))}))))))))}function O(e){var a=e.UsersData,t=(e.questions,Object(n.useState)({lastName:"",name:"",answers:[{rating:0,option:""}]})),r=Object(i.a)(t,2),o=r[0],c=r[1],m=Object(n.useState)(0),s=Object(i.a)(m,2),u=s[0],d=s[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,{userData:o,numberQuestion:u}),l.a.createElement("div",{className:"table-responsive-lg"},l.a.createElement("table",{className:"table"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"Nombre"),l.a.createElement("th",{scope:"col"},"Apellido"),l.a.createElement("th",{scope:"col"},"Calificacion"),l.a.createElement("th",{scope:"col"}))),l.a.createElement("tbody",null,Object.values(a).map((function(e,a){return l.a.createElement("tr",{key:"userRow".concat(a)},l.a.createElement("th",{scope:"row"},a+1),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.lastName),l.a.createElement("td",null,(t=e.answers,Object.values(t).map((function(e){return e})).map((function(e){return e.rating})).reduce((function(e,a){return e+a?a:0})))),l.a.createElement("td",null,l.a.createElement("button",{type:"button",className:"btn btn-secondary btn-sm","data-toggle":"modal","data-target":"#videoModal",onClick:function(){!function(e,a){c(e),d(a)}(e,a)}},"Calificar Video")));var t}))))))}function C(){var e=Object(n.useState)({}),a=Object(i.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)({}),c=Object(i.a)(o,2),m=c[0],s=c[1];return Object(n.useEffect)((function(){var e=u.database().ref();e.child("users").on("value",(function(e){r(e.val())})),e.child("questions").on("value",(function(e){s(e.val())}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(p,null),l.a.createElement("div",{className:"container mt-4"},l.a.createElement("h3",null,"Calificaciones de usuarios"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement(O,{UsersData:t,questions:m})))))}var w=function(){return Object(n.useEffect)((function(){fetch("https://vr-web-admin.firebaseio.com/questions.json")}),[]),l.a.createElement(c.a,null,l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/home"},l.a.createElement(v,null)),l.a.createElement(m.a,{exact:!0,path:"/rate"},l.a.createElement(C,null)),l.a.createElement(m.a,{exact:!0,path:"/"},l.a.createElement(E,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.initializeApp({apiKey:"AIzaSyAMCRd5n-be6H3TmUdwZAUnstxAXRn6I_4",authDomain:"vr-derco-admin.firebaseapp.com",databaseURL:"https://vr-derco-admin.firebaseio.com",projectId:"vr-derco-admin",storageBucket:"vr-derco-admin.appspot.com",messagingSenderId:"480451728887",appId:"1:480451728887:web:511444325186c793684af2"}),o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.ba4d249d.chunk.js.map