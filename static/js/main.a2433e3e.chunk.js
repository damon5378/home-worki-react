(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,function(e,a,t){e.exports={btn_wrapper:"Affairs_btn_wrapper__RLE2x",btn_priority:"Affairs_btn_priority__2erWW",btn_all:"Affairs_btn_all__3-TVf",btn_high:"Affairs_btn_high__22djm",btn_middle:"Affairs_btn_middle__2COy3",btn_low:"Affairs_btn_low__y57C1"}},function(e,a,t){e.exports={wrapper:"Message_wrapper__3fHC-",avatar:"Message_avatar__1K-1n",name:"Message_name__1UJIF",message:"Message_message__oZ3gS",time:"Message_time__1jps2",hw1:"Message_hw1__1ZpwQ",message__general:"Message_message__general__1UH9n"}},function(e,a,t){e.exports={someClass:"Greeting_someClass__EBwkK",error:"Greeting_error__zlJxe",greetings__error:"Greeting_greetings__error__2puIA",hw3:"Greeting_hw3__2mIDb",add__greetings:"Greeting_add__greetings__ZD-1r",greetings__counter:"Greeting_greetings__counter__We9hR",addInputClass:"Greeting_addInputClass__3VHq7",input__wrapper:"Greeting_input__wrapper__3xQ6S"}},function(e,a,t){e.exports={affair_name:"Affair_affair_name__3DpJK",btn_delete:"Affair_btn_delete__1S4u-",affair_wrapper:"Affair_affair_wrapper__Eu_9a",affair_id:"Affair_affair_id__lsFmS",sd:"Affair_sd__2SqFE",hw2:"Affair_hw2__2BIdz"}},,,function(e,a,t){e.exports={App:"App_App__2DsUU",App__title:"App_App__title__1Ajqf"}},,,function(e,a,t){e.exports=t.p+"static/media/close.6fc74fc7.svg"},,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(10),i=t.n(l),c=(t(18),t(3)),s=t.n(c);var _=function(e){return r.a.createElement("div",{className:s.a.message__general},r.a.createElement("div",null,r.a.createElement("img",{src:e.avatar,alt:"avatar",className:s.a.avatar})),r.a.createElement("div",{className:s.a.wrapper},r.a.createElement("div",{className:s.a.name},e.name),r.a.createElement("div",{className:s.a.message},e.message),r.a.createElement("div",{className:s.a.time},e.time)))},o="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",m="Constantine",f="\u041f\u0440\u0438\u0432\u0435\u0442! \u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043f\u043e\u043d\u0438\u043c\u0430\u044e))",u="22:00";var d=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("span",{className:s.a.hw1},"homeworks 1"),r.a.createElement(_,{avatar:o,name:m,message:f,time:u}),r.a.createElement("hr",null),r.a.createElement("hr",null))},p=t(1),g=t(5),E=t.n(g);var h=function(e){return r.a.createElement("div",{className:E.a.affair_wrapper},r.a.createElement("span",{className:E.a.affair_id},e.affair._id),r.a.createElement("span",{className:E.a.affair_name},e.affair.name),r.a.createElement("button",{onClick:function(){return a=e.affair._id,void e.deleteAffairCallback(a);var a},className:E.a.btn_delete},"DEL"))},b=t(2),v=t.n(b);var w=function(e){var a=e.data.map((function(a){return r.a.createElement(h,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback,defaultAffairs:e.defaultAffairs})}));return r.a.createElement("div",null,a,r.a.createElement("div",{className:v.a.btn_wrapper},r.a.createElement("button",{className:"".concat(v.a.btn_priority," + ").concat(v.a.btn_all),onClick:function(){e.filterAffairs("all")}},"All"),r.a.createElement("button",{className:"".concat(v.a.btn_priority," + ").concat(v.a.btn_high),onClick:function(){e.filterAffairs("high")}},"High"),r.a.createElement("button",{className:"".concat(v.a.btn_priority," + ").concat(v.a.btn_middle),onClick:function(){e.filterAffairs("middle")}},"Middle"),r.a.createElement("button",{className:"".concat(v.a.btn_priority," + ").concat(v.a.btn_low),onClick:function(){e.filterAffairs("low")}},"Low")))},A=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var N=function(){var e=Object(n.useState)(A),a=Object(p.a)(e,2),t=a[0],l=a[1],i=Object(n.useState)("all"),c=Object(p.a)(i,2),s=c[0],_=c[1],o=function(e,a){var t=e;return"high"===a?t=e.filter((function(e){return"high"===e.priority})):"middle"===a?t=e.filter((function(e){return"middle"===e.priority})):"low"===a&&(t=e.filter((function(e){return"low"===e.priority}))),t}(t,s);return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("span",{className:E.a.hw2},"homeworks 2"),r.a.createElement(w,{data:o,setFilter:_,deleteAffairCallback:function(e){l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))},defaultAffairs:A,filterAffairs:function(e){_(e)}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},k=t(12),C=t(4),y=t.n(C),O=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,i=e.totalUsers,c=l?y.a.error:"";return r.a.createElement("div",null,r.a.createElement("div",{className:y.a.input__wrapper},r.a.createElement("input",{value:a,onChange:t,className:"".concat(c," ").concat(y.a.addInputClass)}),r.a.createElement("button",{onClick:n,className:y.a.add__greetings},"Add"),r.a.createElement("span",{className:y.a.greetings__counter},i)),r.a.createElement("span",{className:y.a.greetings__error},l))},j=(t(19),t(11)),S=t.n(j),x=function(e){var a=e.modal,t=e.isOpen,n=e.onCancel;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement("div",{className:"modal__wrapper"},r.a.createElement("h1",{className:"modal__title"},a),r.a.createElement("img",{src:S.a,alt:"close",className:"modal__close",onClick:n})):r.a.createElement("div",{className:"displayNone"}))},U=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),i=Object(p.a)(l,2),c=i[0],s=i[1],_=Object(n.useState)(""),o=Object(p.a)(_,2),m=o[0],f=o[1],u=Object(n.useState)(!1),d=Object(p.a)(u,2),g=d[0],E=d[1],h=Object(n.useState)(""),b=Object(p.a)(h,2),v=b[0],w=b[1],A=function(e){f(null),s(e.currentTarget.value)},N=a.length;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{name:c,setNameCallback:A,addUser:function(){""!==c.trim()?(w("Hello, ".concat(c,"!")),s(""),t(c)):f("\u26a0 Field should be fill \u26a0"),g||E(!0)},error:m,totalUsers:N}),r.a.createElement(x,{modal:v,name:c,setNameCallback:A,isOpen:g,onCancel:function(){E(!1)}}))};var G=function(){var e=Object(n.useState)([]),a=Object(p.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("span",{className:y.a.hw3},"homeworks 3"),r.a.createElement(U,{users:t,addUserCallback:function(e){l([].concat(Object(k.a)(t),[{_id:"3",name:e}]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},M=t(8),F=t.n(M);var I=function(){return r.a.createElement("div",{className:F.a.App},r.a.createElement("div",{className:F.a.App__title},"react homeworks:"),r.a.createElement(d,null),r.a.createElement(N,null),r.a.createElement(G,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.a2433e3e.chunk.js.map