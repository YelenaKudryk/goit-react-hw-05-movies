"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{1616:function(n,e,t){t.d(e,{Z:function(){return i}});var r,u=t(168),a=t(3081).Z.h4(r||(r=(0,u.Z)(["\n  margin-top: ",";\n  text-align: center;\n  color: ",";\n  font-size: ",";\n"])),(function(n){return n.theme.spacing(5)}),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.fontSizes.l})),c=t(184),i=function(){return(0,c.jsx)("div",{children:(0,c.jsx)(a,{children:"Something went wrong. Try reloading the page"})})}},9779:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,u,a=t(5861),c=t(9439),i=t(4687),o=t.n(i),s=t(2791),f=t(7689),p=t(4390),h=t(168),l=t(3081),d=l.Z.ul(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n"])),(function(n){return n.theme.spacing(5)})),v=l.Z.p(u||(u=(0,h.Z)(["\n  font-weight: ",";\n  margin-bottom: ",";\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.spacing(2)})),m=t(1616),g=t(7275),x=t(184),w=function(){var n=(0,f.UO)().movieId,e=(0,s.useState)([]),t=(0,c.Z)(e,2),r=t[0],u=t[1],i=(0,s.useState)(!1),h=(0,c.Z)(i,2),l=h[0],w=h[1],Z=(0,s.useState)(null),b=(0,c.Z)(Z,2),k=b[0],y=b[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,a.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),e.next=4,(0,p.Oy)(n);case 4:t=e.sent,u(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),y(e.t0.message);case 11:return e.prev=11,w(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,x.jsxs)(x.Fragment,{children:[k&&(0,x.jsx)(m.Z,{}),l&&(0,x.jsx)(g.Z,{}),0===r.length&&!l&&(0,x.jsx)("p",{children:"There is nothing here yet"}),(null===r||void 0===r?void 0:r.length)>0&&(0,x.jsx)(d,{children:r.map((function(n){var e=n.id,t=n.author,r=n.content;return(0,x.jsxs)("li",{children:[(0,x.jsxs)(v,{children:["Autor: ",t]}),(0,x.jsxs)("p",{children:["Reviews: ",r]})]},e)}))})]})}},4390:function(n,e,t){t.d(e,{Df:function(){return i},Oy:function(){return p},Pg:function(){return s},S:function(){return f},gH:function(){return o}});var r=t(5861),u=t(4687),a=t.n(u),c=t(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"4fbbe6209ef8b6b30e6151d4478e9f78",language:"en-US",page:1,include_adult:!1}}),i=function(){var n=(0,r.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/trending/movie/day");case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/search/movie?",{params:{query:e}});case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(e,"?"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(e,"/credits?"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(e,"/reviews?"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=779.a38d2a9a.chunk.js.map