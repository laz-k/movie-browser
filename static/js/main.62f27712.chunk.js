(this["webpackJsonpmovie-browser"]=this["webpackJsonpmovie-browser"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(15),r=c.n(n),i=(c(21),c(7)),o=(c(22),c(2)),l=c(8),j=c(0),d=function(e){e.searchText;var t=e.setSearchText,c=e.inputText,a=e.setInputText,s=Object(o.f)();return Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light py-4",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)(l.b,{className:"navbar-brand",to:"/",children:"Movie Browser"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(j.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{className:"nav-link",to:"/about",children:"About"})})]}),Object(j.jsxs)("form",{className:"d-flex",children:[Object(j.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search for a movie","aria-label":"Search",value:c,onChange:function(e){a(e.target.value)}}),Object(j.jsx)("button",{className:"btn btn-outline-success",type:"submit",onClick:function(e){e.preventDefault(),s.push("/search"),t(c),a("")},children:"Search"})]})]})]})})},b=function(e){var t=e.text,c=e.backdrop;return Object(j.jsxs)("header",{className:"bg-dark text-white p-5 hero-container",children:[Object(j.jsx)("h1",{className:"hero-text",children:t}),c&&Object(j.jsx)("div",{className:"hero-backdrop",style:{backgroundImage:"url(".concat(c,")")}})]})},h=c.p+"static/media/missing-poster.0befac59.jpg",u=function(e){var t=e.movie,c="https://image.tmdb.org/t/p/w500".concat(t.poster_path),a="/movies/".concat(t.id);return Object(j.jsx)("div",{className:"col-lg-3 col-md-4  my-4",children:Object(j.jsxs)("div",{className:"card h-100",children:[Object(j.jsx)("img",{src:null!==t.poster_path?c:h,className:"card-img-top",alt:t.original_title}),Object(j.jsxs)("div",{className:"card-body d-flex flex-column",children:[Object(j.jsxs)("h5",{className:"card-title",children:["Title: ",t.original_title]}),Object(j.jsxs)("h6",{className:"card-text",children:["Release date: ",void 0!==t.release_date?t.release_date.split("-").reverse().join("-"):"Unknown"]}),Object(j.jsx)(l.b,{to:a,className:"btn btn-primary align-self-center mt-auto w-75  ",children:"Show Details"})]})]})})},m=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1];Object(a.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat("710437c9cb1116e26668fd17ebebce85","&language=en-US&page=1&region=GB")).then((function(e){return e.json()})).then((function(e){s(e.results)}))}),[]);var n=c.map((function(e,t){return Object(j.jsx)(u,{movie:e},t)}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{text:"Welcome to Movie Browser"}),n&&Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"text-center my-5",children:"Popular Movies"}),Object(j.jsx)("div",{className:"row",children:n})]})]})},x=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{text:"About Movie Browser"}),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-lg-8 offset-lg-2 my-5",children:Object(j.jsx)("p",{children:'This project is part of "Section 15: React 201" of "The Ultimate 2021 Fullstack Web Development Bootcamp" on Udemy. We\'ve learned about useState & useEffect and we\'ve used TMDB\'s API to fetch movie data. Final assignment was to implement some new features to the site e.g add a 404 page, handle missing poster images, handle no search results and adding functionality to search button. I have also added popular movies on home page and more information in detailed view.'})})})})]})},O=function(e){var t=e.keyword,c=e.searchResults,a="You have searched for the movie: ".concat(t,"."),s=c.map((function(e,t){return Object(j.jsx)(u,{movie:e},t)}));return Object(j.jsxs)(j.Fragment,{children:[t?Object(j.jsx)(b,{text:a}):Object(j.jsx)(b,{text:"Search for a movie"}),s&&t?Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:s})}):Object(j.jsx)(j.Fragment,{}),0===s.length&&t?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("h2",{className:"text-center",children:['No movie titles match your query "',t,'".']}),Object(j.jsx)("h2",{className:"text-center",children:"Please try again."})]}):Object(j.jsx)(j.Fragment,{})]})};var p=function(){var e=Object(o.g)().id,t=Object(a.useState)({}),c=Object(i.a)(t,2),s=c[0],n=c[1],r=Object(a.useState)([]),l=Object(i.a)(r,2),d=l[0],h=l[1],u=Object(a.useState)([]),m=Object(i.a)(u,2),x=m[0],O=m[1],p=Object(a.useState)(!0),g=Object(i.a)(p,2),v=g[0],f=g[1];return Object(a.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat("710437c9cb1116e26668fd17ebebce85","&language=en-US")).then((function(e){return e.json()})).then((function(e){n(e),f(!1)}))}),[e]),Object(a.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat("710437c9cb1116e26668fd17ebebce85","&language=en-US")).then((function(e){return e.json()})).then((function(e){h(e.cast),O(e.crew),f(!1)}))}),[e]),function(){var e=d.map((function(e){return e.name})),t=x.filter((function(e){return"Director"===e.job})).map((function(e){return e.name}));if(v)return Object(j.jsx)(b,{text:"Loading..."});if(s){var c="https://image.tmdb.org/t/p/w500/".concat(s.poster_path),a="https://image.tmdb.org/t/p/original/".concat(s.backdrop_path);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{text:s.original_title,backdrop:a}),Object(j.jsx)("div",{className:"container my-5",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-3",children:Object(j.jsx)("img",{src:null!==s.poster_path?c:"/images/missing-poster.jpg",alt:"movie poster",className:"img-fluid shadow rounded"})}),Object(j.jsxs)("div",{className:"col-md-9",children:[Object(j.jsxs)("h2",{children:[s.original_title," (",s.release_date.substr(0,4),")"," "]}),Object(j.jsxs)("p",{className:"lead",children:['"',s.tagline,'"']}),Object(j.jsx)("p",{className:"lead",children:s.overview}),Object(j.jsxs)("h6",{className:"lead",children:[Object(j.jsx)("strong",{children:"Director:"})," ",t]}),Object(j.jsxs)("h6",{className:"lead",children:[Object(j.jsx)("strong",{children:"Actors:"})," ",e.slice(0,4).toString().split(",").join(", "),"."]}),Object(j.jsxs)("h6",{className:"lead",children:[Object(j.jsx)("strong",{children:"Status:"})," ",s.status]}),Object(j.jsxs)("h6",{className:"lead",children:[Object(j.jsx)("strong",{children:"Budget:"})," $ ",s.budget.toFixed().replace(/\d(?=(\d{3})+$)/g,"$&,")]}),Object(j.jsxs)("h6",{className:"lead",children:[Object(j.jsx)("strong",{children:"Revenue:"})," $ ",s.revenue.toFixed().replace(/\d(?=(\d{3})+$)/g,"$&,")]}),Object(j.jsxs)("h6",{className:"lead",children:[Object(j.jsx)("strong",{children:"Rating:"})," ",s.vote_average]})]})]})})]})}}()};var g=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{text:"Ooops! Code 404"}),Object(j.jsx)("h4",{className:"text-center my-5",children:"The page you're looking for doesn't exist."})]})},v=function(){return Object(j.jsx)("div",{className:"footer-container",children:Object(j.jsx)("footer",{class:"footer text-center",children:Object(j.jsx)("span",{class:"text-white",children:"Laz-K 2021"})})})};var f=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),r=Object(i.a)(n,2),l=r[0],b=r[1],h=Object(a.useState)(""),u=Object(i.a)(h,2),f=u[0],N=u[1];return Object(a.useEffect)((function(){l&&fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("710437c9cb1116e26668fd17ebebce85","&language=en-US&query=").concat(l,"&page=1&include_adult=false")).then((function(e){return e.json()})).then((function(e){0!==e.results&&s(e.results)}))}),[l]),Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{searchText:l,setSearchText:b,inputText:f,setInputText:N}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",children:Object(j.jsx)(m,{})}),Object(j.jsxs)(o.a,{exact:!0,path:"/about",children:[" ",Object(j.jsx)(x,{}),"  "]}),Object(j.jsx)(o.a,{exact:!0,path:"/search",children:Object(j.jsx)(O,{keyword:l,searchResults:c})}),Object(j.jsxs)(o.a,{exact:!0,path:"/movies/:id",children:[" ",Object(j.jsx)(p,{})," "]}),Object(j.jsxs)(o.a,{path:"",children:[" ",Object(j.jsx)(g,{})," "]})]}),Object(j.jsx)(v,{})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,33)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(l.a,{children:Object(j.jsx)(f,{})})}),document.getElementById("root")),N()}},[[32,1,2]]]);
//# sourceMappingURL=main.62f27712.chunk.js.map