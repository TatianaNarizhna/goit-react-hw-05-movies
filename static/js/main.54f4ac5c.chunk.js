(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[0],{30:function(e,t,n){e.exports={container:"Container_container__3tdqe"}},32:function(e,t,n){e.exports={header:"AppBar_header__2m1Az"}},34:function(e,t,n){e.exports={title:"PageHeading_title__1WCTh"}},66:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(29),s=n.n(i),r=n(9),o=n(2),j=n(30),l=n.n(j),d=n(1);function v(e){var t=e.children;return Object(d.jsx)("div",{className:l.a.container,children:t})}var x=n(8),b=n.n(x),u=function(){return Object(d.jsxs)("nav",{children:[Object(d.jsx)(r.b,{exact:!0,to:"/",className:b.a.link,activeClassName:b.a.activeLink,children:"HomePage"}),Object(d.jsx)(r.b,{exact:!0,to:"/movies",className:b.a.link,activeClassName:b.a.activeLink,children:"MoviesPage"}),Object(d.jsx)(r.b,{exact:!0,to:"/movies/:movieId",className:b.a.link,activeClassName:b.a.activeLink,children:"MovieDetailsPage"}),Object(d.jsx)(r.b,{exact:!0,to:"/movies/:movieId/cast",className:b.a.link,activeClassName:b.a.activeLink,children:"Cast"}),Object(d.jsx)(r.b,{exact:!0,to:"/movies/:movieId/reviews",className:b.a.link,activeClassName:b.a.activeLink,children:"Reviews"})]})},h=n(32),m=n.n(h);function O(){return Object(d.jsx)("header",{className:m.a.header,children:Object(d.jsx)(u,{})})}var f=n(35),p=n(36),k=n(18),g=n.n(k),_=n(33),N=n(19),w=n.n(N),L="https://developers.themoviedb.org/3",C="a746c25728fd41f4fba1ed9293c9d732";function y(){return I.apply(this,arguments)}function I(){return(I=Object(_.a)(g.a.mark((function e(){var t,n,a,c,i=arguments;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"",n=i.length>1&&void 0!==i[1]?i[1]:{},e.next=4,w.a.get(t,n);case 4:if(a=e.sent,c=a.data,console.log(c.results),!c.ok){e.next=13;break}return e.next=10,c.json();case 10:e.t0=e.sent,e.next=14;break;case 13:e.t0=Promise.reject(new Error("Movie not found"));case 14:return e.abrupt("return",e.t0);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}w.a.defaults.baseURL=L;var P=n(34),M=n.n(P);function z(e){var t=e.text;return Object(d.jsx)("h1",{className:M.a.title,children:t})}function E(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=(t[0],t[1]);return Object(a.useEffect)((function(){y("".concat(L,"/trending/all/day?api_key=").concat(C)).then((function(e){return n({movies:Object(f.a)(e)})}))}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(z,{text:"Trending today"})})}function A(){return Object(d.jsx)("h2",{children:"movie"})}function B(){return Object(d.jsx)("h2",{children:"detail"})}function H(){return Object(d.jsxs)(v,{children:[Object(d.jsx)(O,{}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/",exact:!0,children:Object(d.jsx)(E,{})}),Object(d.jsx)(o.a,{path:"/movies",exact:!0,children:Object(d.jsx)(A,{})}),Object(d.jsx)(o.a,{path:"/movies/:movieId",exact:!0,children:Object(d.jsx)(B,{})}),Object(d.jsx)(o.a,{children:Object(d.jsx)(E,{})})]})]})}n(66),n(67);s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(r.a,{children:Object(d.jsx)(H,{})})}),document.getElementById("root"))},8:function(e,t,n){e.exports={link:"Navigation_link__2xbz8",activeLink:"Navigation_activeLink__1f5LI Navigation_link__2xbz8"}}},[[68,1,2]]]);
//# sourceMappingURL=main.54f4ac5c.chunk.js.map