(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),i=c(16),n=c.n(i),o=(c(24),c(25),c(0));var l=function(){return Object(o.jsxs)("div",{className:"navbar",children:[Object(o.jsx)("img",{className:"logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png",alt:"Netflix logo"}),Object(o.jsxs)("div",{className:"left-side",children:[Object(o.jsx)("h7",{children:"Home"}),Object(o.jsx)("h7",{children:"Tv Show"}),Object(o.jsx)("h7",{children:"Movies"}),Object(o.jsx)("h7",{children:"Recentely Added"}),Object(o.jsx)("h7",{children:"My List"})]}),Object(o.jsxs)("div",{className:"right-side",children:[Object(o.jsx)("i",{class:"fa fa-search","aria-hidden":"true"}),Object(o.jsx)("h7",{children:" "}),Object(o.jsx)("h7",{children:"KIDS"}),Object(o.jsx)("h7",{children:"DVD"}),Object(o.jsx)("i",{class:"fa fa-bell","aria-hidden":"true"}),Object(o.jsx)("img",{className:"avatar",src:"https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png",alt:"avatar"}),Object(o.jsx)("i",{class:"fa fa-caret-down","aria-hidden":"true"})]})]})},r=c(4),d=c(17),j="0f199869de67e35b8c9b9681de05dddf",h="https://image.tmdb.org/t/p/original",b=c.n(d).a.create({baseURL:"https://api.themoviedb.org/3"}),u=c(5);c(57);var m=function(){var e=Object(a.useState)(),t=Object(r.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(""),n=Object(r.a)(i,2),l=n[0],d=n[1];return Object(a.useEffect)((function(){b.get("trending/all/week?api_key=".concat(j,"&language=en-US")).then((function(e){s(e.data.results[0]),console.log(e.data.results)}))}),[]),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{style:{backgroundImage:"url(".concat(c?h+c.backdrop_path:"",")")},className:"banner",children:[Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("h1",{className:"title",children:c?c.title:""}),Object(o.jsxs)("div",{className:"banner_buttons",children:[Object(o.jsx)("button",{className:"button",onClick:function(){return e=c.id,console.log(e),void b.get("/movie/".concat(e,"/videos?api_key=").concat(j,"&language=en-US")).then((function(e){0!==e.data.results.length?d(e.data.results[0]):console.log("trailer empty")}));var e},children:"Play"}),Object(o.jsx)("button",{className:"button",children:"My List"})]}),Object(o.jsx)("h1",{className:"description",children:c?c.overview:""})]}),Object(o.jsx)("div",{className:"fade_bottom"})]}),l&&Object(o.jsx)(u.a,{videoId:l.key,opts:{height:"450",width:"100%",playerVars:{autoplay:1}},onStateChange:function(e){0===e.data&&d("")}})]})};c(58);var g=function(e){var t=Object(a.useState)([]),c=Object(r.a)(t,2),s=c[0],i=c[1],n=Object(a.useState)(""),l=Object(r.a)(n,2),d=l[0],m=l[1];return Object(a.useEffect)((function(){b.get(e.url).then((function(e){console.log(e.data),i(e.data.results)}))}),[]),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("h2",{children:e.title}),Object(o.jsx)("div",{className:"posters",children:s.map((function(t){return Object(o.jsx)("img",{onClick:function(){return e=t.id,console.log(e),void b.get("/movie/".concat(e,"/videos?api_key=").concat(j,"&language=en-US")).then((function(e){0!==e.data.results.length?m(e.data.results[0]):console.log("trailer empty")}));var e},className:e.isSmall?"smallPoster":"poster",src:"".concat(h+t.backdrop_path),alt:"poster"})}))}),d&&Object(o.jsx)(u.a,{videoId:d.key,opts:{height:"390",width:"100%",playerVars:{autoplay:1}},onStateChange:function(e){0===e.data&&m("")}})]})},v="discover/tv?api_key=".concat(j,"&with_networks=213"),O="discover/movie?api_key=".concat(j,"&with_genres=28"),p="https://api.themoviedb.org/3/discover/movie?api_key=".concat(j,"&with_genres=35"),x="https://api.themoviedb.org/3/discover/movie?api_key=".concat(j,"&with_genres=27"),f="https://api.themoviedb.org/3/discover/movie?api_key=".concat(j,"&with_genres=10749"),y="https://api.themoviedb.org/3/discover/movie?api_key=".concat(j,"&with_genres=99");var _=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(l,{}),Object(o.jsx)(m,{}),Object(o.jsx)(g,{url:v,title:"Netflix orginals"}),Object(o.jsx)(g,{url:O,title:"Action",isSmall:!0}),Object(o.jsx)(g,{url:p,title:"Comedy",isSmall:!0}),Object(o.jsx)(g,{url:x,title:"Horror",isSmall:!0}),Object(o.jsx)(g,{url:f,title:"Romance",isSmall:!0}),Object(o.jsx)(g,{url:y,title:"Documentaries",isSmall:!0})]})};n.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(_,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.400a78b5.chunk.js.map