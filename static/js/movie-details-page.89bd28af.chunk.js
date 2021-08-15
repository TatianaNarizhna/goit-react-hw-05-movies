(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[5],{37:function(e,t,n){"use strict";n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return d}));var c=n(40),i=n.n(c),a="https://api.themoviedb.org/3",r="a746c25728fd41f4fba1ed9293c9d732";function o(){return i.a.get("".concat(a,"/trending/all/day?api_key=").concat(r)).then((function(e){return e.data.results}))}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return i.a.get("".concat(a,"/search/movie?api_key=").concat(r,"&query=").concat(e,"&page=").concat(t,"include_adult=false")).then((function(e){return e.data}))}function s(e){return i.a.get("".concat(a,"/movie/").concat(e,"?api_key=").concat(r,"&language=en-US")).then((function(e){return e.data}))}function u(e){return i.a.get("".concat(a,"/movie/").concat(e,"/credits?api_key=").concat(r,"&language=en-US")).then((function(e){return e.data}))}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return i.a.get("".concat(a,"/movie/").concat(e,"/reviews?api_key=").concat(r,"&language=en-US&page=").concat(t)).then((function(e){return e.data}))}},75:function(e,t,n){e.exports={details:"MovieDetails_details__3t0-p",detailsDescription:"MovieDetails_detailsDescription__2IWbP"}},99:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var c=n(39),i=n(2),a=n(0),r=n(8),o=n(96),l=n(37),s=n(75),u=n.n(s),d=n(1);function v(e){var t=e.poster_path,n=e.title,c=e.overview,a=e.genres,r=e.vote_average,o=Object(i.h)();return console.log(o),Object(d.jsxs)("div",{className:u.a.details,children:[Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(t),alt:n}),Object(d.jsxs)("div",{className:u.a.detailsDescription,children:[Object(d.jsx)("h2",{children:n}),Object(d.jsxs)("p",{children:["User Score: ",Object(d.jsxs)("span",{children:[10*r,"%"]})]}),Object(d.jsx)("h3",{children:"Overview"}),"Overview:",Object(d.jsx)("span",{children:c}),Object(d.jsx)("h4",{children:"Genres"}),Object(d.jsx)("ul",{children:a&&a.map((function(e){return Object(d.jsx)("li",{children:e.name},e.id)}))})]})]})}var h=Object(a.lazy)((function(){return n.e(1).then(n.bind(null,100))})),j=Object(a.lazy)((function(){return n.e(2).then(n.bind(null,95))}));function b(){var e,t,n,s,u,b,p=Object(i.i)().movieId,f=Object(i.j)(),O=Object(i.h)(),g=Object(i.g)();console.log(g);var x=Object(a.useState)({poster_path:null,title:null,overview:null,vote_average:null,genres:null,id:null}),m=Object(c.a)(x,2),_=m[0],w=m[1];Object(a.useEffect)((function(){l.b(p).then((function(e){var t=e.poster_path,n=e.title,c=e.overview,i=e.vote_average,a=e.genres,r=e.id;return w({poster_path:t,title:n,overview:c,genres:a,vote_average:i,id:r})})).catch(console.log(Error))}),[p]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o.a,{type:"button",onClick:function(){var e,t,n,c;if(null===O||void 0===O||null===(e=O.state)||void 0===e?void 0:e.search)return g.push("?query=".concat(null===O||void 0===O||null===(c=O.state)||void 0===c?void 0:c.search));g.push(null!==(t=null===O||void 0===O||null===(n=O.state)||void 0===n?void 0:n.from)&&void 0!==t?t:"/")},variant:"outlined",color:"primary",children:"Go back"}),_&&Object(d.jsx)(v,{poster_path:_.poster_path,title:_.title,overview:_.overview,genres:_.genres,vote_average:_.vote_average,id:_.movieId}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Additional information"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(r.c,{to:{pathname:"".concat(f.url,"/cast"),state:{from:null!==(e=null===O||void 0===O||null===(t=O.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",search:null===O||void 0===O||null===(n=O.state)||void 0===n?void 0:n.search}},children:"Cast"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.c,{to:{pathname:"".concat(f.url,"/reviews"),state:{from:null!==(s=null===O||void 0===O||null===(u=O.state)||void 0===u?void 0:u.from)&&void 0!==s?s:"/",search:null===O||void 0===O||null===(b=O.state)||void 0===b?void 0:b.search}},children:"Reviews"})})]})]}),Object(d.jsx)("hr",{}),Object(d.jsxs)(a.Suspense,{fallback:Object(d.jsx)("h1",{children:"Loading..."}),children:[Object(d.jsx)(i.b,{path:"".concat(f.path,"/cast"),children:Object(d.jsx)(h,{})}),Object(d.jsx)(i.b,{path:"".concat(f.path,"/reviews"),children:Object(d.jsx)(j,{})})]})]})}}}]);
//# sourceMappingURL=movie-details-page.89bd28af.chunk.js.map