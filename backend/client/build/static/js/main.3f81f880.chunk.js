(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{33:function(e,t,n){e.exports=n(73)},38:function(e,t,n){},66:function(e,t){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(30),o=n.n(r),s=(n(38),n(32)),i=n(12),l=n(31),u=n.n(l);n(69);var m=function(e){var t=e.message,n=t.owner,a=t.description,r=t.timestamp;return c.a.createElement("div",{className:"".concat(n,"-container")},c.a.createElement("li",{className:n},c.a.createElement("div",null,a,c.a.createElement("div",{className:"message-hour"},r))))},f=(n(70),function(e){var t=e.messages,n=Object(a.useRef)(null);return Object(a.useEffect)((function(){n.current.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})}),[t]),c.a.createElement("ul",{className:"messagesList"},t.map((function(e){return c.a.createElement(m,{message:e})})),c.a.createElement("div",{ref:n}))}),v=(n(71),u.a.connect("https://glacial-crag-75504.herokuapp.com/"));var d=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)([]),l=Object(i.a)(o,2),u=l[0],m=l[1];return Object(a.useEffect)((function(){v.on("message",(function(e){Object.assign(e,{owner:e.id===v.id?"own-message":"other-message"}),m((function(t){return[].concat(Object(s.a)(t),[e])}))}))}),[]),c.a.createElement("div",{className:"App"},c.a.createElement("head",null,c.a.createElement("title",null,"Socket.IO chat")),c.a.createElement("body",null,c.a.createElement("div",{className:"chat-container"},c.a.createElement("div",{className:"chat"},c.a.createElement(f,{messages:u}),c.a.createElement("div",{className:"chat-actions"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r(""),v.emit("message",n)}},c.a.createElement("input",{onChange:function(e){e.persist();var t=e.target.value;r(t)},value:n}),c.a.createElement("button",null,"Send")))))))};n(72);var E=function(){return c.a.createElement(d,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.3f81f880.chunk.js.map