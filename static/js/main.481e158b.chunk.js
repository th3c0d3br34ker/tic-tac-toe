(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{10:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var c=t(0),r=(t(10),t(7)),i=t(3),s=t(1),a=t.n(s),l=function(e){var n=e.id,t=e.onClick,r=e.value,i="game-cell ".concat(null===r?null:"X"===r?"x":"o");return Object(c.jsx)("div",{className:i,onClick:t,id:n,children:Object(c.jsx)("span",{className:"size150",children:r})})},o=function(e){var n=e.board,t=e.onClick;return Object(c.jsx)("div",{className:"game-grid",children:n.map((function(e,n){return Object(c.jsx)(l,{id:n,value:e,onClick:function(){return t(n)}},n)}))})},j=function(e){var n=e.reset,t=e.winner;return Object(c.jsx)("button",{disabled:t,className:"m-2 p-2",onClick:n,variant:"secondary",children:"RESET"})},u=function(e){var n=e.winner,t=e.reset;return Object(c.jsx)("div",{className:"winner",hidden:!n,onClick:t,children:Object(c.jsxs)("h3",{children:["Winner: ",n]})})};var d=function(){var e=Object(s.useState)(Array(9).fill(null)),n=Object(i.a)(e,2),t=n[0],a=n[1],l=Object(s.useState)(!0),d=Object(i.a)(l,2),b=d[0],O=d[1],h=function(e){for(var n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<n.length;t++){var c=Object(i.a)(n[t],3),r=c[0],s=c[1],a=c[2];if(e[r]&&e[r]===e[s]&&e[r]===e[a])return e[r]}return null}(t);Object(s.useEffect)((function(){h&&console.log("Winner: ",h)}),[h]);var x=function(){console.log("called!"),a(Array(9).fill(null))};return Object(c.jsxs)(s.Fragment,{children:[Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{className:"text-center",children:Object(c.jsxs)("strong",{children:["Tic ",Object(c.jsx)("span",{className:"text-white",children:"Tac"})," Toe"]})}),Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:"text-center row justify-content-around",children:[Object(c.jsx)("h1",{className:"m-0 p-2",children:h?null:"Next player: "+(b?"X":"O")}),Object(c.jsx)(j,{reset:x,winner:h})]}),Object(c.jsx)("hr",{}),Object(c.jsx)(o,{board:t,onClick:function(e){var n=Object(r.a)(t);h||n[e]||(n[e]=b?"X":"O",a(n),O(!b))}})]}),Object(c.jsx)(u,{winner:h,reset:x})]})},b=t(6),O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,15)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,i=n.getLCP,s=n.getTTFB;t(e),c(e),r(e),i(e),s(e)}))};t.n(b).a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root")),O()}},[[14,1,2]]]);
//# sourceMappingURL=main.481e158b.chunk.js.map