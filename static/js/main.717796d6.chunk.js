(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{183:function(e,t,c){},184:function(e,t,c){},502:function(e,t,c){},507:function(e,t,c){"use strict";c.r(t);var n=c(52),i=c(0),s=c.n(i),r=c(10),a=c.n(r),j=(c(183),c(46)),o=(c(184),c(515)),d=c(516),l=c(514),b=c(513),h=c(178),O=[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4}],u=c(512),x=c(83),p=c(3);var m,f,g=Object(x.b)((function(e){return console.log(e),{state:e.reducer,alert:e.reducer2}}))((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsxs)(u.a,{striped:!0,bordered:!0,hover:!0,children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"#"}),Object(p.jsx)("th",{children:"First Name"}),Object(p.jsx)("th",{children:"Last Name"}),Object(p.jsx)("th",{children:"Username"})]})}),Object(p.jsx)("tbody",{children:e.state.map((function(t,c){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:t.id}),Object(p.jsx)("td",{children:t.id}),Object(p.jsx)("td",{children:t.name}),Object(p.jsx)("td",{children:t.quan}),Object(p.jsxs)("td",{children:[Object(p.jsx)("button",{onClick:function(){e.dispatch({type:"\uc218\ub7c9\uc99d\uac00"})},children:"+"}),Object(p.jsx)("button",{onClick:function(){e.dispatch({type:"\uc218\ub7c9\uac10\uc18c"})},children:"-"})]})]},c)}))})]}),!0===e.alert?Object(p.jsxs)("div",{className:"my-alert",children:[Object(p.jsx)("p",{children:"\uc9c0\uae08 \uad6c\ub9e4\ud558\uba74 \uc2e0\uaddc\ud560\uc778 20%"}),Object(p.jsx)("button",{onClick:function(){e.dispatch({type:"alert\ub2eb\uae30"})},children:"\ub2eb\uae30"})]}):null]})})),v=(c(189),c(110)),N=c(108),y=c.n(N),k=c(8),C=c(111),S=(c(502),C.a.div(m||(m=Object(v.a)(["\n  padding: 20px;\n"])))),w=C.a.h4(f||(f=Object(v.a)(["\n  font-size: 25px;\n  color: ",";\n"])),(function(e){return e.\uc0c9\uc0c1}));function B(e){return Object(p.jsxs)("p",{children:["\uc7ac\uace0 :",e.\uc7ac\uace0]})}var F=function(e){var t=Object(i.useState)(!0),c=Object(j.a)(t,2),n=c[0],s=c[1],r=Object(i.useState)(""),a=Object(j.a)(r,2),o=a[0],d=a[1],l=Object(i.useState)(),b=Object(j.a)(l,2);b[0],b[1],Object(i.useEffect)((function(){var e=setTimeout((function(){s(!1)}),2e3);return console.log("\uc548\ub155"),function(){clearTimeout(e)}}),[n]);var h=Object(k.f)().id,O=e.shoes.find((function(e){return e.id==h})),u=Object(k.e)();return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(S,{children:Object(p.jsx)(w,{className:"red",children:"\uc0c1\uc138\ud398\uc774\uc9c0"})}),Object(p.jsx)("input",{onChange:function(e){d(e.target.value)}}),o,Object(p.jsx)("div",{className:"my-alert",children:Object(p.jsx)("p",{children:"\uc7ac\uace0 \uc5bc\ub9c8 \uc548\ub0a8\uc74c"})}),!0===n?Object(p.jsx)("div",{className:"my-alert2",children:Object(p.jsx)("p",{children:"\uc7ac\uace0 \uc5bc\ub9c8 \uc548\ub0a8\uc74c"})}):null,Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-md-6",children:Object(p.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes1.jpg",width:"100%"})}),Object(p.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(p.jsx)("h4",{className:"pt-5",children:O.title}),Object(p.jsx)("p",{children:O.content}),Object(p.jsxs)("p",{children:[O.price,"\uc6d0"]}),Object(p.jsx)(B,{"\uc7ac\uace0":e.\uc7ac\uace0}),Object(p.jsx)("button",{className:"btn btn-danger",onClick:function(){e.\uc7ac\uace0\ubcc0\uacbd(e.\uc7ac\uace0-1)},children:"\uc8fc\ubb38\ud558\uae30"}),Object(p.jsx)("button",{className:"btn btn-danger",onClick:function(){u.goBack()},children:"\ub4a4\ub85c\uac00\uae30"})]})]})]})},I=c(67);function L(e){return Object(p.jsxs)("div",{className:"col-md-4",children:[Object(p.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(e.i+1)+".jpg",width:"100%"}),Object(p.jsx)("h4",{children:e.shoes.title}),Object(p.jsxs)("p",{children:[e.shoes.content," ",e.price]})]})}var T=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{style:{widows:"500px",height:"200px",background:"#ccc"},children:Object(p.jsx)("h1",{children:"\ub85c\ub529\uc911"})})})},q=function(){var e=Object(i.useState)(O),t=Object(j.a)(e,2),c=t[0],s=t[1],r=Object(i.useState)(11),a=Object(j.a)(r,2),u=a[0],x=a[1];return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)(o.a,{bg:"light",expand:"lg",children:[Object(p.jsx)(o.a.Brand,{href:"#home",children:"cat shop"}),Object(p.jsx)(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsx)(o.a.Collapse,{id:"basic-navbar-nav",children:Object(p.jsxs)(d.a,{className:"ml-auto",children:[Object(p.jsx)(d.a.Link,{as:I.b,to:"/",children:"Home"}),Object(p.jsx)(d.a.Link,{as:I.b,to:"/detail",children:"\ub514\ud14c\uc77c"}),Object(p.jsxs)(l.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(p.jsx)(l.a.Item,{href:"#action/3.1",children:"Action"}),Object(p.jsx)(l.a.Item,{href:"#action/3.2",children:"Another action"}),Object(p.jsx)(l.a.Item,{href:"#action/3.3",children:"Something"}),Object(p.jsx)(l.a.Divider,{}),Object(p.jsx)(l.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]}),Object(p.jsxs)(k.a,{exact:!0,path:"/",children:[Object(p.jsxs)(b.a,{className:"background",children:[Object(p.jsx)("h1",{children:"20% season Off"}),Object(p.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(p.jsx)("p",{children:Object(p.jsx)(h.a,{variant:"primary",children:"Learn more"})})]}),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("div",{className:"row",children:c.map((function(e,t){return Object(p.jsx)(L,{shoes:c[t],i:t},t)}))}),Object(p.jsx)("button",{className:"btn btn-primary",onClick:function(){y.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){console.log(e.data),s([].concat(Object(n.a)(c),Object(n.a)(e.data)))})).catch((function(e){console.log(e)}))},children:"\ub354\ubcf4\uae30"}),Object(p.jsx)(T,{})]})]}),Object(p.jsx)(k.a,{path:"/detail/:id",children:Object(p.jsx)(F,{shoes:c,"\uc7ac\uace0":u,"\uc7ac\uace0\ubcc0\uacbd":x})}),Object(p.jsx)(k.a,{path:"/cart",children:Object(p.jsx)(g,{})})]})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,517)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),s(e),r(e)}))},D=c(65);var E=[{id:0,name:"\uba4b\uc9c4\uc2e0\ubc1c",quan:2},{id:1,name:"\uc608\uc05c\uc2e0\ubc1c",quan:2}];var J=Object(D.c)(Object(D.b)({reducer:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,c=0;c<=E.length;c++){if("\uc218\ub7c9\uc99d\uac00"===t.type){var i=Object(n.a)(e);return i[c].quan++,i}if("\uc218\ub7c9\uac10\uc18c"===t.type){var s=Object(n.a)(e);return s[c].quan--,s}return e}},reducer2:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;return"alert\ub2eb\uae30"===t.type?e=!1:e}}));a.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(I.a,{children:Object(p.jsx)(x.a,{store:J,children:Object(p.jsx)(q,{})})})}),document.getElementById("root")),A()}},[[507,1,2]]]);
//# sourceMappingURL=main.717796d6.chunk.js.map