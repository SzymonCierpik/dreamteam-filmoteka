var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o),o("9ZgJb"),o("iFGks");var r={};r=function e(n,t,o){function r(a,l){if(!t[a]){if(!n[a]){var c=void 0;if(!l&&c)return c(a,!0);if(i)return i(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var u=t[a]={exports:{}};n[a][0].call(u.exports,(function(e){return r(n[a][1][e]||e)}),u,u.exports,e,n,t,o)}return t[a].exports}for(var i=void 0,a=0;a<o.length;a++)r(o[a]);return r}({1:[function(e,n,t){Object.defineProperty(t,"__esModule",{value:!0}),t.create=t.visible=void 0;var o=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=document.createElement("div");return t.innerHTML=e.trim(),!0===n?t.children:t.firstChild},r=function(e,n){var t=e.children;return 1===t.length&&t[0].tagName===n},i=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};t.visible=i,t.create=function(e,n){var t=function(e,n){var t=o('\n\t\t<div class="basicLightbox '.concat(n.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=t.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return i.appendChild(e)}));var a=r(i,"IMG"),l=r(i,"VIDEO"),c=r(i,"IFRAME");return!0===a&&t.classList.add("basicLightbox--img"),!0===l&&t.classList.add("basicLightbox--video"),!0===c&&t.classList.add("basicLightbox--iframe"),t}(e=function(e){var n="string"==typeof e,t=e instanceof HTMLElement==1;if(!1===n&&!1===t)throw new Error("Content must be a DOM element/node or string");return!0===n?Array.from(o(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(n)),a=function(e){return!1!==n.onClose(l)&&function(e,n){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(e)||e.parentElement.removeChild(e),n()}),410),!0}(t,(function(){if("function"==typeof e)return e(l)}))};!0===n.closable&&t.addEventListener("click",(function(e){e.target===t&&a()}));var l={element:function(){return t},visible:function(){return i(t)},show:function(e){return!1!==n.onShow(l)&&function(e,n){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),n()}))}),10),!0}(t,(function(){if("function"==typeof e)return e(l)}))},close:a};return l}},{}]},{},[1])(1);const i=document.querySelector(".footer__font");i.addEventListener("click",(function(e){e.preventDefault();const n=r.create('\n  <iframe src="https://player.vimeo.com/video/820849980?h=af82c37f95&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="filmoteka"></iframe>\n  ',{onClose:e=>{i.removeEventListener("keydown",t)}});n.show();const t=e=>{"Escape"===e.code&&n.close()};i.addEventListener("keydown",t)})),o("gghTW"),o("h2oT2"),o("kskxa"),o("19SXr");
//# sourceMappingURL=library.883bcd77.js.map
