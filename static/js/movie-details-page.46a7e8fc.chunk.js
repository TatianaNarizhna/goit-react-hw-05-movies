(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[5],{37:function(e,t,n){"use strict";n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return d}));var c=n(40),r=n.n(c),a="https://api.themoviedb.org/3",i="a746c25728fd41f4fba1ed9293c9d732";function o(){return r.a.get("".concat(a,"/trending/all/day?api_key=").concat(i)).then((function(e){return e.data.results}))}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r.a.get("".concat(a,"/search/movie?api_key=").concat(i,"&query=").concat(e,"&page=").concat(t,"include_adult=false")).then((function(e){return e.data}))}function l(e){return r.a.get("".concat(a,"/movie/").concat(e,"?api_key=").concat(i,"&language=en-US")).then((function(e){return e.data}))}function u(e){return r.a.get("".concat(a,"/movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US")).then((function(e){return e.data}))}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r.a.get("".concat(a,"/movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=").concat(t)).then((function(e){return e.data}))}},75:function(e,t,n){e.exports={details:"MovieDetails_details__3t0-p",detailsDescription:"MovieDetails_detailsDescription__2IWbP"}},99:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var c=n(39),r=n(2),a=n(0),i=n(8),o=n(96),s=n(37),l=n(75),u=n.n(l),d=n(1);function j(e){var t=e.poster_path,n=e.title,c=e.overview,r=e.genres,a=e.vote_average;return Object(d.jsxs)("div",{className:u.a.details,children:[Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(t),alt:n}),Object(d.jsxs)("div",{className:u.a.detailsDescription,children:[Object(d.jsx)("h2",{children:n}),Object(d.jsxs)("p",{children:["User Score: ",Object(d.jsxs)("span",{children:[10*a,"%"]})]}),Object(d.jsx)("h3",{children:"Overview"}),"Overview:",Object(d.jsx)("span",{children:c}),Object(d.jsx)("h4",{children:"Genres"}),Object(d.jsx)("ul",{children:r&&r.map((function(e){return Object(d.jsx)("li",{children:e.name},e.id)}))})]})]})}var h="/movies",v=Object(a.lazy)((function(){return n.e(1).then(n.bind(null,100))})),b=Object(a.lazy)((function(){return n.e(2).then(n.bind(null,95))}));function p(){var e=Object(r.i)().movieId,t=Object(r.j)(),n=Object(r.h)(),l=Object(r.g)();console.log(l);var u=Object(a.useState)({poster_path:null,title:null,overview:null,vote_average:null,genres:null,id:null}),p=Object(c.a)(u,2),O=p[0],f=p[1];Object(a.useEffect)((function(){s.b(e).then((function(e){var t=e.poster_path,n=e.title,c=e.overview,r=e.vote_average,a=e.genres,i=e.id;return f({poster_path:t,title:n,overview:c,genres:a,vote_average:r,id:i})})).catch(console.log(Error))}),[e]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o.a,{type:"button",onClick:function(){if(n.state&&n.state.from)return l.push(n.state.from);l.push(h)},variant:"outlined",color:"primary",children:"Go back"}),O&&Object(d.jsx)(j,{poster_path:O.poster_path,title:O.title,overview:O.overview,genres:O.genres,vote_average:O.vote_average,id:O.movieId}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Additional information"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(i.c,{to:{pathname:"".concat(t.url,"/cast")},children:"Cast"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.c,{to:{pathname:"".concat(t.url,"/reviews")},children:"Reviews"})})]})]}),Object(d.jsx)("hr",{}),Object(d.jsxs)(a.Suspense,{fallback:Object(d.jsx)("h1",{children:"Loading..."}),children:[Object(d.jsx)(r.b,{path:"".concat(t.path,"/cast"),children:Object(d.jsx)(v,{})}),Object(d.jsx)(r.b,{path:"".concat(t.path,"/reviews"),children:Object(d.jsx)(b,{})})]})]})}}}]);
//# sourceMappingURL=movie-details-page.46a7e8fc.chunk.js.map