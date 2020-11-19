(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{18:function(n,r,o){},24:function(n,r,o){"use strict";o.r(r);var t=o(1),e=(o(18),o(15)),c=o(4),a=o(0),i=o.n(a),u={name:"light",textColor:"black",backgroundColor:"rgba(249, 200, 132, 1)",gridColor:"rgba(249, 200, 132, 0.5)",boadBackgroundColor:"rgba(252, 122, 30, 1)",xColor:"rgba(160, 10, 10, 1)",oColor:"rgba(225, 230, 220, 1)",fontAwesomeClass:"fas fa-sun",iconColor:"black"},l={name:"dark",textColor:"rgba(0, 80, 158, 1)",backgroundColor:"rgba(0, 20, 40, 1)",gridColor:"rgba(0, 20, 40, 0.8)",boadBackgroundColor:"rgba(224, 225, 222, 1)",xColor:"rgba(2, 2, 20, 1)",oColor:"rgba(4, 4, 86, 1)",fontAwesomeClass:"fas fa-moon",iconColor:"white"},b=Object(a.createContext)(u),s=function(){return Object(a.useContext)(b)},d=function(n){var r=n.children,o=Object(a.useState)(u),e=Object(c.a)(o,2),i=e[0],s=e[1],d=Object(a.useState)(!1),f=Object(c.a)(d,2),j=f[0],g=f[1];return Object(t.jsx)(b.Provider,{value:{theme:i,toggleTheme:function(){j?(s(u),g(!1)):(s(l),g(!0))}},children:r})},f=o(2),j=o(3);function g(){var n=Object(f.a)(["\n  font-size: 112px;\n  color: ",";\n"]);return g=function(){return n},n}function x(){var n=Object(f.a)(["\n  background-color: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 118px;\n  width: 118px;\n  cursor: pointer;\n  color: transparent;\n"]);return x=function(){return n},n}var h=j.b.div(x(),(function(n){return n.backgroundColor})),O=j.b.span(g(),(function(n){return n.color})),p=function(n){var r=n.id,o=n.onClick,e=n.value,c=s().theme,a="X"===e?c.xColor:c.oColor;return Object(t.jsx)(h,{onClick:o,id:r,backgroundColor:c.boadBackgroundColor,children:Object(t.jsx)(O,{className:"size150",color:a,children:e})})};function C(){var n=Object(f.a)(["\n  background-color: ",";\n\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  grid-gap: 20px;\n  margin-top: 40px;\n  max-width: fit-content;\n  user-select: none;\n"]);return C=function(){return n},n}var v=j.b.div(C(),(function(n){return n.backgroundColor})),m=function(n){var r=n.board,o=n.onClick,e=s().theme;return Object(t.jsx)(v,{backgroundColor:e.gridColor,children:r.map((function(n,r){return Object(t.jsx)(p,{id:r,value:n,onClick:function(){return o(r)}},r)}))})};function k(){var n=Object(f.a)(["\n  background-color: ",";\n  color: ",";\n  outline: none;\n  border: none;\n  border-radius: 4px;\n  margin: 8px 16px;\n  padding: 8px 16px;\n\n  &:hover,\n  &:active,\n  &:focus {\n    outline: none;\n    border: none;\n  }\n"]);return k=function(){return n},n}var w=j.b.button(k(),(function(n){return n.backgroundColor}),(function(n){return n.color})),y=function(n){var r=n.reset,o=n.winner,e=s().theme;return Object(t.jsx)(w,{backgroundColor:e.backgroundColor,color:e.iconColor,disabled:o,onClick:r,variant:"secondary",children:"RESET"})};function S(){var n=Object(f.a)(["\n  background-color: ",";\n  margin: 0;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  height: 2px;\n"]);return S=function(){return n},n}function T(){var n=Object(f.a)(["\n  background-color: ",";\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-flow: wrap;\n  font-family: sans-serif;\n  justify-content: center;\n  transition: all 0.6s ease;\n"]);return T=function(){return n},n}function N(){var n=Object(f.a)(["\n  color: ",";\n"]);return N=function(){return n},n}function B(){var n=Object(f.a)(["\n  text-align: center;\n  font-weight: 900;\n  font-family: Roboto;\n  color: ",";\n"]);return B=function(){return n},n}function z(){var n=Object(f.a)(["\n  background-color: ",";\n  margin: 40px;\n  padding: 20px;\n  border-radius: 25px;\n  margin-bottom: 70px;\n  position: absolute;\n  max-width: fit-content;\n  max-height: fit-content;\n"]);return z=function(){return n},n}var A=j.b.div(z(),(function(n){return n.backgroundColor})),F=j.b.h1(B(),(function(n){return n.color})),D=j.b.span(N(),(function(n){return n.color})),E=j.b.div(T(),(function(n){return n.backgroundColor})),I=j.b.div(S(),(function(n){return n.color})),P=function(n){var r=n.board,o=n.xIsNext,e=n.resetGame,c=n.winner,a=n.handleClick,i=s().theme;return Object(t.jsx)(E,{backgroundColor:i.backgroundColor,children:Object(t.jsxs)(A,{backgroundColor:i.boadBackgroundColor,children:[Object(t.jsxs)(F,{color:i.xColor,children:["Tic ",Object(t.jsx)(D,{color:i.oColor,children:"Tac"})," Toe"]}),Object(t.jsx)(I,{color:i.backgroundColor}),Object(t.jsxs)("div",{className:"text-center row justify-content-around",children:[Object(t.jsx)("h1",{className:"m-0 p-2",children:c?null:"Next player: "+(o?"X":"O")}),Object(t.jsx)(y,{reset:e,winner:c})]}),Object(t.jsx)(I,{color:i.backgroundColor}),Object(t.jsx)(m,{board:r,onClick:a})]})})};function X(){var n=Object(f.a)(["\n      color: ",";\n    "]);return X=function(){return n},n}function G(){var n=Object(f.a)(["\n  position: fixed;\n  top: 20px;\n  right: 40px;\n  font-size: 50px;\n  transition: all 0.8s ease;\n  z-index: 2;\n\n  ",";\n"]);return G=function(){return n},n}var J=j.b.div(G(),(function(n){var r=n.color;return r&&Object(j.a)(X(),r)})),L=function(){var n=Object(a.useContext)(b),r=n.theme,o=n.toggleTheme;return Object(t.jsx)(J,{onClick:o,color:r.iconColor,children:Object(t.jsx)("i",{className:r.fontAwesomeClass})})};function R(){var n=Object(f.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  display: ",";\n  place-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  backdrop-filter: blur(10px);\n\n  & > h3 {\n    color: white;\n    font-size: 80px;\n    user-select: none;\n  }\n"]);return R=function(){return n},n}var M=j.b.div(R(),(function(n){return n.show?"none":"grid"})),W=function(n){var r=n.winner,o=n.reset,e=!r;return n.isDraw&&console.log("Dwaw"),Object(t.jsx)(M,{show:e,onClick:o,children:Object(t.jsxs)("h3",{children:["Winner: ",r]})})};var q=function(){var n=Object(a.useState)(Array(9).fill(null)),r=Object(c.a)(n,2),o=r[0],i=r[1],u=Object(a.useState)(!0),l=Object(c.a)(u,2),b=l[0],f=l[1],j=Object(a.useState)(!1),g=Object(c.a)(j,2),x=g[0],h=g[1],O=s().theme,p=function(n){for(var r=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],o=0;o<r.length;o++){var t=Object(c.a)(r[o],3),e=t[0],a=t[1],i=t[2];if(n[e]&&n[e]===n[a]&&n[e]===n[i])return n[e]}return null}(o);Object(a.useEffect)((function(){p||-1!==o.indexOf(null)||h(!0)}),[p,o,x]);var C=function(){i(Array(9).fill(null)),h(!0)};return console.log(O),Object(t.jsx)(d,{children:Object(t.jsxs)(a.Fragment,{children:[Object(t.jsx)(P,{board:o,xIsNext:b,resetGame:C,winner:p,handleClick:function(n){var r=Object(e.a)(o);p||r[n]||(r[n]=b?"X":"O",i(r),f(!b))}}),Object(t.jsx)(W,{winner:p,isDraw:x,reset:C}),Object(t.jsx)(L,{})]})})},H=o(14),K=function(n){n&&n instanceof Function&&o.e(3).then(o.bind(null,25)).then((function(r){var o=r.getCLS,t=r.getFID,e=r.getFCP,c=r.getLCP,a=r.getTTFB;o(n),t(n),e(n),c(n),a(n)}))};o.n(H).a.render(Object(t.jsx)(i.a.StrictMode,{children:Object(t.jsx)(q,{})}),document.getElementById("root")),K()}},[[24,1,2]]]);
//# sourceMappingURL=main.8231e3a3.chunk.js.map