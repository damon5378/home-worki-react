(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,function(e,a,t){e.exports={btn_wrapper:"Affairs_btn_wrapper__RLE2x",btn_priority:"Affairs_btn_priority__2erWW",btn_all:"Affairs_btn_all__3-TVf",btn_high:"Affairs_btn_high__22djm",btn_middle:"Affairs_btn_middle__2COy3",btn_low:"Affairs_btn_low__y57C1"}},function(e,a,t){e.exports={wrapper:"Message_wrapper__3fHC-",avatar:"Message_avatar__1K-1n",name:"Message_name__1UJIF",message:"Message_message__oZ3gS",time:"Message_time__1jps2"}},function(e,a,t){e.exports={affair_name:"Affair_affair_name__3DpJK",btn_delete:"Affair_btn_delete__1S4u-",affair_wrapper:"Affair_affair_wrapper__Eu_9a",affair_id:"Affair_affair_id__lsFmS",sd:"Affair_sd__2SqFE"}},,,,function(e,a,t){e.exports={App:"App_App__2DsUU"}},function(e,a,t){e.exports=t(14)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),i=t(6),l=t.n(i),c=(t(13),t(2)),o=t.n(c);var f=function(e){return n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("img",{src:e.avatar,alt:"avatar",className:o.a.avatar})),n.a.createElement("div",{className:o.a.wrapper},n.a.createElement("div",{className:o.a.name},e.name),n.a.createElement("div",{className:o.a.message},e.message),n.a.createElement("div",{className:o.a.time},e.time)))},s="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",m="Constantine",_="\u041f\u0440\u0438\u0432\u0435\u0442! \u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043f\u043e\u043d\u0438\u043c\u0430\u044e))",u="22:00";var d=function(){return n.a.createElement("div",null,n.a.createElement("hr",null),"homeworks 1",n.a.createElement(f,{avatar:s,name:m,message:_,time:u}),n.a.createElement("hr",null),n.a.createElement("hr",null))},p=t(4),h=t(3),E=t.n(h);var b=function(e){return n.a.createElement("div",{className:E.a.affair_wrapper},n.a.createElement("span",{className:E.a.affair_id},e.affair._id),n.a.createElement("span",{className:E.a.affair_name},e.affair.name),n.a.createElement("button",{onClick:function(){return a=e.affair._id,void e.deleteAffairCallback(a);var a},className:E.a.btn_delete},"DEL"))},v=t(1),w=t.n(v);var A=function(e){var a=e.data.map((function(a){return n.a.createElement(b,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback,defaultAffairs:e.defaultAffairs})}));return n.a.createElement("div",null,a,n.a.createElement("div",{className:w.a.btn_wrapper},n.a.createElement("button",{className:"".concat(w.a.btn_priority," + ").concat(w.a.btn_all),onClick:function(){e.filterAffairs("all")}},"All"),n.a.createElement("button",{className:"".concat(w.a.btn_priority," + ").concat(w.a.btn_high),onClick:function(){e.filterAffairs("high")}},"High"),n.a.createElement("button",{className:"".concat(w.a.btn_priority," + ").concat(w.a.btn_middle),onClick:function(){e.filterAffairs("middle")}},"Middle"),n.a.createElement("button",{className:"".concat(w.a.btn_priority," + ").concat(w.a.btn_low),onClick:function(){e.filterAffairs("low")}},"Low")))},g=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var k=function(){var e=Object(r.useState)(g),a=Object(p.a)(e,2),t=a[0],i=a[1],l=Object(r.useState)("all"),c=Object(p.a)(l,2),o=c[0],f=c[1],s=function(e,a){var t=e;return"high"===a?t=e.filter((function(e){return"high"===e.priority})):"middle"===a?t=e.filter((function(e){return"middle"===e.priority})):"low"===a&&(t=e.filter((function(e){return"low"===e.priority}))),t}(t,o);return n.a.createElement("div",null,n.a.createElement("hr",null),"homeworks 2",n.a.createElement(A,{data:s,setFilter:f,deleteAffairCallback:function(e){i(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))},defaultAffairs:g,filterAffairs:function(e){f(e)}}),n.a.createElement("hr",null),n.a.createElement("hr",null))},y=t(7),N=t.n(y);var C=function(){return n.a.createElement("div",{className:N.a.App},n.a.createElement("div",null,"react homeworks:"),n.a.createElement(d,null),n.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.4216bc26.chunk.js.map