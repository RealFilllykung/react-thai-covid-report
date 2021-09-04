(this["webpackJsonpthai-covid-report"]=this["webpackJsonpthai-covid-report"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),j=c(19),r=c.n(j),s=(c(26),c(27),c(28),c(51)),i=c(49),d=c(50),b=c(4),O=c(0);var l=function(e){return Object(O.jsxs)(s.a,{children:[Object(O.jsx)(s.a.Header,{children:e.header}),Object(O.jsxs)(s.a.Body,{children:[Object(O.jsx)(s.a.Title,{children:e.title}),Object(O.jsx)(s.a.Text,{children:e.text})]})]})},o=c(21),x=c.n(o);var h=function(e,t){x.a.get("https://covid19.ddc.moph.go.th/api/Cases/today-cases-all").then((function(c){var n=c.data[0];t(n[e])}))};var u=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){h("new_case",a)}),[]),Object(O.jsx)(l,{header:"Infected Case",title:"New Infected (\u0e08\u0e33\u0e19\u0e27\u0e19\u0e1c\u0e39\u0e49\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e43\u0e2b\u0e21\u0e48)",text:c})};var f=function(e){return Object(O.jsx)(s.a,{children:Object(O.jsxs)(s.a.Body,{children:[Object(O.jsx)(s.a.Title,{children:e.title}),Object(O.jsx)(s.a.Text,{children:e.text})]})})};var v=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){h("total_case",a)}),[]),Object(O.jsx)(s.a,{children:Object(O.jsx)(f,{title:"Total Infected (\u0e08\u0e33\u0e19\u0e27\u0e19\u0e1c\u0e39\u0e49\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14)",text:c})})};var p=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){h("new_death",a)}),[]),Object(O.jsx)(l,{header:"Death Case",title:"New Death (\u0e08\u0e33\u0e19\u0e27\u0e19\u0e1c\u0e39\u0e49\u0e40\u0e2a\u0e35\u0e22\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e43\u0e2b\u0e21\u0e48)",text:c})};var m=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){h("total_death",a)}),[]),Object(O.jsx)(f,{title:"Total Death (\u0e08\u0e33\u0e19\u0e27\u0e19\u0e1c\u0e39\u0e49\u0e40\u0e2a\u0e35\u0e22\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14)",text:c})};var T=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){h("new_recovered",a)}),[]),Object(O.jsx)(l,{header:"Recovered Case",title:"New Recovered (\u0e08\u0e33\u0e19\u0e27\u0e19\u0e1c\u0e39\u0e49\u0e2b\u0e32\u0e22\u0e1b\u0e48\u0e27\u0e22\u0e43\u0e2b\u0e21\u0e48)",text:c})};var g=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){h("total_recovered",a)}),[]),Object(O.jsx)(f,{title:"Total Recovered (\u0e08\u0e33\u0e19\u0e27\u0e19\u0e1c\u0e39\u0e49\u0e2b\u0e32\u0e22\u0e1b\u0e48\u0e27\u0e22\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14)",text:c})};var w=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Thailand's Covid Report"}),Object(O.jsxs)(s.a,{className:"text-dark",children:[Object(O.jsx)(i.a,{children:Object(O.jsx)(d.a,{children:Object(O.jsx)(u,{})})}),Object(O.jsx)(i.a,{children:Object(O.jsx)(d.a,{children:Object(O.jsx)(v,{})})}),Object(O.jsx)(i.a,{className:"mt-3",children:Object(O.jsx)(d.a,{children:Object(O.jsx)(T,{})})}),Object(O.jsx)(i.a,{children:Object(O.jsx)(d.a,{children:Object(O.jsx)(g,{})})}),Object(O.jsx)(i.a,{className:"mt-3",children:Object(O.jsx)(d.a,{children:Object(O.jsx)(p,{})})}),Object(O.jsx)(i.a,{children:Object(O.jsx)(d.a,{children:Object(O.jsx)(m,{})})})]})]})};var C=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)("header",{className:"App-header",children:Object(O.jsx)(w,{})})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,52)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,j=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),j(e),r(e)}))};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(C,{})}),document.getElementById("root")),N()}},[[48,1,2]]]);
//# sourceMappingURL=main.8259aae8.chunk.js.map