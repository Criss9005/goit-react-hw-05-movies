"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{544:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var i=n(439),r=n(324),c=n(791),o=n(689),a=n(87),h=n(184);function s(){r.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDU3YzgxMzRhZjE3MWM3YTk3NjA3Mjk2MWUyOWY1MSIsInN1YiI6IjY1NzNhZGNmZDQwMGYzMDBjOTIwOTJhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q1IdNqN9HcQoVWvkk0GsmzK0OberDk5bdp3RCC_tmBE";var e=(0,o.TH)(),t=(0,c.useState)([]),n=(0,i.Z)(t,2),s=n[0],d=n[1];return(0,c.useEffect)((function(){r.Z.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US").then((function(e){var t=e.data.results;d(t)})).catch((function(e){console.log(e)}))}),[]),(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:"Trending Today"}),(0,h.jsx)("ul",{children:s.map((function(t){return(0,h.jsx)("li",{children:(0,h.jsx)(a.rU,{to:"movies/".concat(t.id),state:{from:e},children:(0,h.jsx)("p",{children:t.title})})},t.id)}))})]})}}}]);
//# sourceMappingURL=544.c82e5d01.chunk.js.map