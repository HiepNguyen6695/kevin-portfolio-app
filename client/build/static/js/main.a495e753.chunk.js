(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),i=n.n(a),r=n(19),o=n.n(r),s=n(7),l=n(8),j=n(10),h=n(9),u=n(13),b=(n(27),n(28),function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=(new Date).getFullYear();return Object(c.jsx)("div",{className:"Footer",children:Object(c.jsx)("div",{className:"footer-container",children:Object(c.jsxs)("p",{className:"copyright",children:["Copyright \xa9 2020-",e,". All Rights Reserved."]})})})}}]),n}(a.Component)),d=(n(29),n.p+"static/media/bear-logo-original-white.fd710398.png"),m=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).capitalize=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=["home","project","about","contact"].map((function(t){return Object(c.jsx)("li",{className:"list-container-item",children:Object(c.jsx)("div",{className:"list-container-wrapper",children:Object(c.jsx)("a",{className:"nav-link",href:"/",children:e.capitalize("".concat(t))})})})})),n=["facebook","instagram","linkedin","youtube"].map((function(e){return Object(c.jsx)("div",{className:"".concat(e)})}));return Object(c.jsxs)("nav",{className:"nav",children:[Object(c.jsx)("img",{className:"logo-image",src:d}),Object(c.jsx)("ul",{className:"list-container",children:t}),Object(c.jsx)("div",{className:"media-list",children:Object(c.jsx)("a",{href:"/",children:n})})]})}}]),n}(a.Component),O=(n(30),n(31),function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this,e)).getRandomPosition=function(e){var t=window.innerWidth,n=window.innerHeight,c=10*Math.random()+30*e,a=1400*Math.random()+Math.floor(30*Math.random()*e),i=700*Math.random()+Math.floor(30*Math.random()*e);return a>0&&a<t-c/2-100&&i>0&&i<2*n-100?{width:"".concat(c/2,"px"),height:"".concat(c/2,"px"),top:"".concat(i,"px"),left:"".concat(a,"px")}:{}},c.getRandomPosition=c.getRandomPosition.bind(Object(u.a)(c)),c}return Object(l.a)(n,[{key:"render",value:function(){for(var e=[],t=1;t<=10;t++)e.push(Object(c.jsx)("div",{className:"bubbles bubble".concat(t),style:this.getRandomPosition(t)}));return Object(c.jsxs)("div",{className:"home-container",children:[Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(m,{}),Object(c.jsx)(b,{})]}),e]})}}]),n}(a.Component)),p=(n(40),n(20)),f=n(2),v=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsx)(p.a,{children:Object(c.jsx)("div",{className:"App",children:Object(c.jsx)("div",{children:Object(c.jsx)(f.a,{exact:!0,path:"/",component:O})})})})}}]),n}(a.Component),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),x()}},[[39,1,2]]]);
//# sourceMappingURL=main.a495e753.chunk.js.map