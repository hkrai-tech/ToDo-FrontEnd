(this.webpackJsonpreactthapaapp=this.webpackJsonpreactthapaapp||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),i=c(7),s=c.n(i),r=c(2),d=(c(13),c(0)),j=c(8),o=c(6),l=(c(15),function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(function(){var e=localStorage.getItem("mytoDoList");return e?JSON.parse(e):[]}()),s=Object(r.a)(i,2),l=s[0],u=s[1],b=Object(a.useState)(""),f=Object(r.a)(b,2),m=f[0],O=f[1],h=Object(a.useState)(!1),x=Object(r.a)(h,2),v=x[0],p=x[1],g=function(){if(c)if(c&&v)u(l.map((function(e){return e.id===m?Object(o.a)(Object(o.a)({},e),{},{name:c}):e}))),n(""),O(""),p(!1);else{var e={id:(new Date).getTime().toString(),name:c};u([].concat(Object(j.a)(l),[e])),n("")}else alert("please give the ToDo")};return Object(a.useEffect)((function(){localStorage.setItem("mytoDoList",JSON.stringify(l))}),[l]),Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"main-div",children:Object(d.jsxs)("div",{className:"child-div",children:[Object(d.jsxs)("figure",{children:[Object(d.jsx)("img",{src:"./images/todo.svg",alt:"images"}),Object(d.jsx)("figcaption",{children:"Add your list here"})]}),Object(d.jsxs)("div",{className:"addItems",children:[Object(d.jsx)("input",{type:"text",placeholder:"Add inputs",className:"form-control",value:c,onChange:function(e){return n(e.target.value)}}),v?Object(d.jsx)("i",{className:"fa fa-edit add-btn",onClick:g}):Object(d.jsx)("i",{className:"fa fa-plus add-btn",onClick:g})]}),Object(d.jsx)("div",{className:"showItems",children:l.map((function(e){return Object(d.jsxs)("div",{className:"eachItem",children:[Object(d.jsx)("h3",{children:e.name}),Object(d.jsxs)("div",{className:"todo-btn",children:[Object(d.jsx)("i",{className:"far fa-edit add-btn",onClick:function(){return function(e){var t=l.find((function(t){return t.id===e}));n(t.name),O(e),p(!0)}(e.id)}}),Object(d.jsx)("i",{className:"far fa-trash-alt add-btn",onClick:function(){return function(e){var t=l.filter((function(t){return t.id!==e}));u(t)}(e.id)}})]})]},e.id)}))}),Object(d.jsx)("div",{className:"showItems",children:Object(d.jsx)("button",{className:"btn effect04","data-sm-link-text":"Remove All",onClick:function(){return u([]),void n("")},children:Object(d.jsx)("span",{children:"CheckList"})})})]})})})}),u=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(l,{})})};s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.f2e3091a.chunk.js.map