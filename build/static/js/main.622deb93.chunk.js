(this["webpackJsonphello-world"]=this["webpackJsonphello-world"]||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(5),s=a.n(n),r=a(3),i=a.n(r),j=a(6),l=a(4),o=(a(12),a(0)),u=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)("Mumbai"),r=Object(l.a)(s,2),u=r[0],b=r[1];return Object(c.useEffect)((function(){(function(){var e=Object(j.a)(i.a.mark((function e(){var t,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://api.openweathermap.org/data/2.5/weather?q=".concat(u,"&units=metric&appid=f96235e70b6711a73ae95e4f89371b9a"),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,n(c.main);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("div",{className:"inputData",children:Object(o.jsx)("input",{type:"search",className:"inputField",onChange:function(e){b(e.target.value)}})}),a?Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"info",children:[Object(o.jsxs)("h2",{className:"location",children:[Object(o.jsx)("i",{className:"fas fa-street-view"}),u]}),Object(o.jsxs)("h1",{className:"temp",children:[" ",a.temp,"\xb0C"]}),Object(o.jsxs)("h3",{className:"tempmin_max",children:[" Min : ",a.temp,"\xb0C | Max : ",a.temp,"\xb0C "]})]}),Object(o.jsx)("div",{className:"wave -one"}),Object(o.jsx)("div",{className:"wave -two"}),Object(o.jsx)("div",{className:"wave -three"})]}):Object(o.jsx)("h1",{children:"No data found"})]})})},b=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(u,{})})};s.a.render(Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(b,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.622deb93.chunk.js.map