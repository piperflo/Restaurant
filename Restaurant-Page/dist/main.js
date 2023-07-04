(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(81),o=n.n(r),a=n(645),i=n.n(a),c=n(667),d=n.n(c),s=new URL(n(470),n.b),p=i()(o()),l=d()(s);p.push([e.id,`body{\n    margin: 0;\n    \n}\n.homePage{\n    display: flex;\n    width: 100vw;\n    height: 100vh;\n    flex-wrap: nowrap;\n    justify-content: center;\n}\n.side-bar {\n    background-image: url(${l});\n    width: 180%;\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: cover;\n    display: flex;\n    \n}\n.main{\n    display: flex;\n    justify-content:center;\n    gap: 35px;\n}\n.header {\n    padding-top: 40px;\n    display: flex;\n    font-size: 30px;\n    gap: 35px;\n    color: rgb(70, 29, 11);\n    background-color: #e7e7ee;\n    width: 100%;\n    flex-direction: column;\n}\n.body{\n    padding-top: 100px;\n    padding-left: 40px;\n}\n.button{\n    font-size: 25px;\n}\nbutton{\n    width: 180px;\n    height: 70px;\n    background-color: rgb(70, 29, 11);\n    color: white;\n    box-shadow: 0 4px 8px 0 rgba(14, 13, 13, 0.2), 0 6px 20px 0 rgba(17, 15, 15, 0.2);\n    border-radius: 15px;\n    -webkit-border-radius: 15px;\n    -moz-border-radius: 15px;\n    -ms-border-radius: 15px;\n    -o-border-radius: 15px;\n}\n\n.main > div{\n    border-bottom: 1px solid rgb(70, 29, 11);\n}\n.main > div:hover{\n    cursor: pointer;\n    border-bottom: 5px solid rgb(70, 29, 11);\n}\nbutton:hover{\n    cursor: pointer;\n    background-color: rgb(51, 19, 5);;\n}\n@media screen and (max-width: 550px) {\n    .homePage{\n        display: flex;\n        flex-direction: column;\n        height: 100vh;\n        flex-wrap: nowrap;\n        \n    }\n    .side-bar{\n        padding-top: 300px;\n        width: 100%;\n        height: 30vh;\n        display: flex;\n    }\n    .header{\n        width: 100%;\n        display: flex;\n    }\n    p{\n        font-size: medium;\n    }\n    h2{\n        font-size: 29px;\n    }\n\n  }`,""]);const u=p},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var p=[].concat(e[s]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),t.push(p))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],p=a[s]||0,l="".concat(s," ").concat(p);a[s]=p+1;var u=n(l),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var d=r(e,o),s=0;s<a.length;s++){var p=n(a[s]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},470:(e,t,n)=>{e.exports=n.p+"3d35262a4b521ee4476a.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{function e(){const e=document.createElement("div");e.setAttribute("class","homePage");const t=function(){const e=document.createElement("div");e.setAttribute("class","main");const t=document.createElement("div");t.setAttribute("class","header");const n=document.createElement("div");n.setAttribute("class","home"),n.textContent="Home";const r=document.createElement("div");r.setAttribute("class","menu"),r.textContent="Menu";const o=document.createElement("div");o.setAttribute("class","contact"),o.textContent="Contact",e.appendChild(n),e.appendChild(r),e.appendChild(o);const a=document.createElement("div");a.setAttribute("class","body");const i=document.createElement("h2");i.textContent="Welcome To Good Burger, Home to the Good burger";const c=document.createElement("button");return c.setAttribute("class","button"),c.textContent="Order Now",a.appendChild(i),a.appendChild(c),t.appendChild(e),t.appendChild(a),t}(),n=document.createElement("div");return n.setAttribute("class","side-bar"),e.appendChild(t),e.appendChild(n),e}var t=n(379),r=n.n(t),o=n(795),a=n.n(o),i=n(569),c=n.n(i),d=n(565),s=n.n(d),p=n(216),l=n.n(p),u=n(589),m=n.n(u),h=n(426),f={};f.styleTagTransform=m(),f.setAttributes=s(),f.insert=c().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),r()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const v=document.getElementById("content");v.appendChild(e()),document.addEventListener("click",(t=>{const n=t.target.innerText;"Home"===n&&v.replaceChildren(...e),"Menu"===n&&(v.replaceChildren(),v.appendChild(function(){const e=document.createElement("div");e.setAttribute("class","menuPage");const t=document.createElement("div"),n=document.createElement("h3"),r=document.createElement("div");r.setAttribute("class","burgerOne");const o=document.createElement("div");o.setAttribute("class","burgerTwo"),t.appendChild(n),t.appendChild(r),t.appendChild(o);const a=document.createElement("div"),i=document.createElement("h3"),c=document.createElement("div");c.setAttribute("class","hotDogOne");const d=document.createElement("div");d.setAttribute("class","hotDogTwo"),a.appendChild(i),a.appendChild(c),a.appendChild(d);const s=document.createElement("div"),p=document.createElement("h3"),l=document.createElement("div");l.setAttribute("class","curlyFries");const u=document.createElement("div");u.setAttribute("class","cajunFries"),s.appendChild(p),s.appendChild(l),s.appendChild(u);const m=document.createElement("div"),h=document.createElement("h3"),f=document.createElement("div");f.setAttribute("class","sprite");const v=document.createElement("div");return v.setAttribute("class","pepsi"),m.appendChild(h),m.appendChild(f),m.appendChild(v),e.appendChild(t),e.appendChild(s),e.appendChild(a),e.appendChild(m),e}()))}))})()})();