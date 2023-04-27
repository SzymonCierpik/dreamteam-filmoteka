var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};window.addEventListener("load",(()=>{const e=document.querySelector(".loader");e.classList.add("loader-hidden"),e.addEventListener("transitionend",(()=>{}))}));const t=document.querySelector("body"),n=document.querySelector(".fa-regular"),r=document.querySelector("#toggle__checkbox"),i=document.querySelector(".footer");r.addEventListener("click",(()=>{t.classList.toggle("dark__theme"),n.classList.toggle("fa-sun"),n.classList.toggle("fa-moon"),i.classList.toggle("dark__theme")}));document.querySelector(".films-cards-set"),document.querySelector("#wrongSearch");const s=e=>e.map((e=>{let t;return t=null===e.poster_path?"https://www.more-kino.info/drama/hide-2/hide-2.jpg":`https://image.tmdb.org/t/p/w500/${e.poster_path}`,`\n        <div class="film-card" data-id="${e.id}">\n        <img class="film-img" src="${t}" alt="${e.title}" loading="lazy" srcset="https://image.tmdb.org/t/p/original/${e.poster_path} 2x" /> \n        <div class="info">\n        <p class="info-title">${e.original_title}</p>\n        <p class="info-text">${e.genres.map((e=>e.name)).join(", ")} | ${e.release_date.substring(0,4)} <span class="info-rating">${String(e.vote_average).slice(0,3)}</span></p>\n        </div>\n        </div>\n        `})).join(" ");function o(e,t){return function(){return e.apply(t,arguments)}}const{toString:a}=Object.prototype,{getPrototypeOf:c}=Object,u=(l=Object.create(null),e=>{const t=a.call(e);return l[t]||(l[t]=t.slice(8,-1).toLowerCase())});var l;const h=e=>(e=e.toLowerCase(),t=>u(t)===e),d=e=>t=>typeof t===e,{isArray:f}=Array,p=d("undefined");const m=h("ArrayBuffer");const g=d("string"),y=d("function"),v=d("number"),w=e=>null!==e&&"object"==typeof e,E=e=>{if("object"!==u(e))return!1;const t=c(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},b=h("Date"),I=h("File"),T=h("Blob"),_=h("FileList"),S=h("URLSearchParams");function A(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,i;if("object"!=typeof e&&(e=[e]),f(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let o;for(r=0;r<s;r++)o=i[r],t.call(null,e[o],o,e)}}function C(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,i=n.length;for(;i-- >0;)if(r=n[i],t===r.toLowerCase())return r;return null}const k="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:e,N=e=>!p(e)&&e!==k;const R=(O="undefined"!=typeof Uint8Array&&c(Uint8Array),e=>O&&e instanceof O);var O;const D=h("HTMLFormElement"),L=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),P=h("RegExp"),M=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};A(n,((n,i)=>{!1!==t(n,i,e)&&(r[i]=n)})),Object.defineProperties(e,r)},x={DIGIT:"0123456789",ALPHA:"abcdefghijklmnopqrstuvwxyz",ALPHA_DIGIT:"abcdefghijklmnopqrstuvwxyz"+"abcdefghijklmnopqrstuvwxyz".toUpperCase()+"0123456789"};var U={isArray:f,isArrayBuffer:m,isBuffer:function(e){return null!==e&&!p(e)&&null!==e.constructor&&!p(e.constructor)&&y(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||y(e.append)&&("formdata"===(t=u(e))||"object"===t&&y(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&m(e.buffer),t},isString:g,isNumber:v,isBoolean:e=>!0===e||!1===e,isObject:w,isPlainObject:E,isUndefined:p,isDate:b,isFile:I,isBlob:T,isRegExp:P,isFunction:y,isStream:e=>w(e)&&y(e.pipe),isURLSearchParams:S,isTypedArray:R,isFileList:_,forEach:A,merge:function e(){const{caseless:t}=N(this)&&this||{},n={},r=(r,i)=>{const s=t&&C(n,i)||i;E(n[s])&&E(r)?n[s]=e(n[s],r):E(r)?n[s]=e({},r):f(r)?n[s]=r.slice():n[s]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&A(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(A(t,((t,r)=>{n&&y(t)?e[r]=o(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let i,s,o;const a={};if(t=t||{},null==e)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)o=i[s],r&&!r(o,e,t)||a[o]||(t[o]=e[o],a[o]=!0);e=!1!==n&&c(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:u,kindOfTest:h,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(f(e))return e;let t=e.length;if(!v(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:D,hasOwnProperty:L,hasOwnProp:L,reduceDescriptors:M,freezeMethods:e=>{M(e,((t,n)=>{if(y(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];y(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return f(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:C,global:k,isContextDefined:N,ALPHABET:x,generateString:(e=16,t=x.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&y(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(w(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const i=f(e)?[]:{};return A(e,((e,t)=>{const s=n(e,r+1);!p(s)&&(i[t]=s)})),t[r]=void 0,i}}return e};return n(e,0)}};function F(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}U.inherits(F,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:U.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const V=F.prototype,B={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{B[e]={value:e}})),Object.defineProperties(F,B),Object.defineProperty(V,"isAxiosError",{value:!0}),F.from=(e,t,n,r,i,s)=>{const o=Object.create(V);return U.toFlatObject(e,o,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),F.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};var j,q,$,z=F;q=function(e){var t,n,r=Z(e),i=r[0],s=r[1],o=new Q(function(e,t,n){return 3*(t+n)/4-n}(0,i,s)),a=0,c=s>0?i-4:i;for(n=0;n<c;n+=4)t=W[e.charCodeAt(n)]<<18|W[e.charCodeAt(n+1)]<<12|W[e.charCodeAt(n+2)]<<6|W[e.charCodeAt(n+3)],o[a++]=t>>16&255,o[a++]=t>>8&255,o[a++]=255&t;2===s&&(t=W[e.charCodeAt(n)]<<2|W[e.charCodeAt(n+1)]>>4,o[a++]=255&t);1===s&&(t=W[e.charCodeAt(n)]<<10|W[e.charCodeAt(n+1)]<<4|W[e.charCodeAt(n+2)]>>2,o[a++]=t>>8&255,o[a++]=255&t);return o},$=function(e){for(var t,n=e.length,r=n%3,i=[],s=16383,o=0,a=n-r;o<a;o+=s)i.push(ee(e,o,o+s>a?a:o+s));1===r?(t=e[n-1],i.push(G[t>>2]+G[t<<4&63]+"==")):2===r&&(t=(e[n-2]<<8)+e[n-1],i.push(G[t>>10]+G[t>>4&63]+G[t<<2&63]+"="));return i.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var H,K,G=[],W=[],Q="undefined"!=typeof Uint8Array?Uint8Array:Array,J="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Y=0,X=J.length;Y<X;++Y)G[Y]=J[Y],W[J.charCodeAt(Y)]=Y;function Z(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function ee(e,t,n){for(var r,i,s=[],o=t;o<n;o+=3)r=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]),s.push(G[(i=r)>>18&63]+G[i>>12&63]+G[i>>6&63]+G[63&i]);return s.join("")}W["-".charCodeAt(0)]=62,W["_".charCodeAt(0)]=63,H=function(e,t,n,r,i){var s,o,a=8*i-r-1,c=(1<<a)-1,u=c>>1,l=-7,h=n?i-1:0,d=n?-1:1,f=e[t+h];for(h+=d,s=f&(1<<-l)-1,f>>=-l,l+=a;l>0;s=256*s+e[t+h],h+=d,l-=8);for(o=s&(1<<-l)-1,s>>=-l,l+=r;l>0;o=256*o+e[t+h],h+=d,l-=8);if(0===s)s=1-u;else{if(s===c)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,r),s-=u}return(f?-1:1)*o*Math.pow(2,s-r)},K=function(e,t,n,r,i,s){var o,a,c,u=8*s-i-1,l=(1<<u)-1,h=l>>1,d=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=r?0:s-1,p=r?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=l):(o=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-o))<1&&(o--,c*=2),(t+=o+h>=1?d/c:d*Math.pow(2,1-h))*c>=2&&(o++,c/=2),o+h>=l?(a=0,o=l):o+h>=1?(a=(t*c-1)*Math.pow(2,i),o+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,i),o=0));i>=8;e[n+f]=255&a,f+=p,a/=256,i-=8);for(o=o<<i|a,u+=i;u>0;e[n+f]=255&o,f+=p,o/=256,u-=8);e[n+f-p]|=128*m};const te="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;j=re;function ne(e){if(e>2147483647)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,re.prototype),t}function re(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return oe(e)}return ie(e,t,n)}function ie(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!re.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|le(e,t);let r=ne(n);const i=r.write(e,t);i!==n&&(r=r.slice(0,i));return r}(e,t);if(ArrayBuffer.isView(e))return function(e){if($e(e,Uint8Array)){const t=new Uint8Array(e);return ce(t.buffer,t.byteOffset,t.byteLength)}return ae(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if($e(e,ArrayBuffer)||e&&$e(e.buffer,ArrayBuffer))return ce(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&($e(e,SharedArrayBuffer)||e&&$e(e.buffer,SharedArrayBuffer)))return ce(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return re.from(r,t,n);const i=function(e){if(re.isBuffer(e)){const t=0|ue(e.length),n=ne(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||ze(e.length)?ne(0):ae(e);if("Buffer"===e.type&&Array.isArray(e.data))return ae(e.data)}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return re.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function se(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function oe(e){return se(e),ne(e<0?0:0|ue(e))}function ae(e){const t=e.length<0?0:0|ue(e.length),n=ne(t);for(let r=0;r<t;r+=1)n[r]=255&e[r];return n}function ce(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,re.prototype),r}function ue(e){if(e>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|e}function le(e,t){if(re.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||$e(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Be(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return je(e).length;default:if(i)return r?-1:Be(e).length;t=(""+t).toLowerCase(),i=!0}}function he(e,t,n){let r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return _e(this,t,n);case"utf8":case"utf-8":return be(this,t,n);case"ascii":return Ie(this,t,n);case"latin1":case"binary":return Te(this,t,n);case"base64":return Ee(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Se(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function de(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function fe(e,t,n,r,i){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),ze(n=+n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof t&&(t=re.from(t,r)),re.isBuffer(t))return 0===t.length?-1:pe(e,t,n,r,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):pe(e,[t],n,r,i);throw new TypeError("val must be string, number or Buffer")}function pe(e,t,n,r,i){let s,o=1,a=e.length,c=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;o=2,a/=2,c/=2,n/=2}function u(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){let r=-1;for(s=n;s<a;s++)if(u(e,s)===u(t,-1===r?0:s-r)){if(-1===r&&(r=s),s-r+1===c)return r*o}else-1!==r&&(s-=s-r),r=-1}else for(n+c>a&&(n=a-c),s=n;s>=0;s--){let n=!0;for(let r=0;r<c;r++)if(u(e,s+r)!==u(t,r)){n=!1;break}if(n)return s}return-1}function me(e,t,n,r){n=Number(n)||0;const i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;const s=t.length;let o;for(r>s/2&&(r=s/2),o=0;o<r;++o){const r=parseInt(t.substr(2*o,2),16);if(ze(r))return o;e[n+o]=r}return o}function ge(e,t,n,r){return qe(Be(t,e.length-n),e,n,r)}function ye(e,t,n,r){return qe(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function ve(e,t,n,r){return qe(je(t),e,n,r)}function we(e,t,n,r){return qe(function(e,t){let n,r,i;const s=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=e.charCodeAt(o),r=n>>8,i=n%256,s.push(i),s.push(r);return s}(t,e.length-n),e,n,r)}function Ee(e,t,n){return 0===t&&n===e.length?$(e):$(e.slice(t,n))}function be(e,t,n){n=Math.min(e.length,n);const r=[];let i=t;for(;i<n;){const t=e[i];let s=null,o=t>239?4:t>223?3:t>191?2:1;if(i+o<=n){let n,r,a,c;switch(o){case 1:t<128&&(s=t);break;case 2:n=e[i+1],128==(192&n)&&(c=(31&t)<<6|63&n,c>127&&(s=c));break;case 3:n=e[i+1],r=e[i+2],128==(192&n)&&128==(192&r)&&(c=(15&t)<<12|(63&n)<<6|63&r,c>2047&&(c<55296||c>57343)&&(s=c));break;case 4:n=e[i+1],r=e[i+2],a=e[i+3],128==(192&n)&&128==(192&r)&&128==(192&a)&&(c=(15&t)<<18|(63&n)<<12|(63&r)<<6|63&a,c>65535&&c<1114112&&(s=c))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|1023&s),r.push(s),i+=o}return function(e){const t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=4096));return n}(r)}re.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),re.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(re.prototype,"parent",{enumerable:!0,get:function(){if(re.isBuffer(this))return this.buffer}}),Object.defineProperty(re.prototype,"offset",{enumerable:!0,get:function(){if(re.isBuffer(this))return this.byteOffset}}),re.poolSize=8192,re.from=function(e,t,n){return ie(e,t,n)},Object.setPrototypeOf(re.prototype,Uint8Array.prototype),Object.setPrototypeOf(re,Uint8Array),re.alloc=function(e,t,n){return function(e,t,n){return se(e),e<=0?ne(e):void 0!==t?"string"==typeof n?ne(e).fill(t,n):ne(e).fill(t):ne(e)}(e,t,n)},re.allocUnsafe=function(e){return oe(e)},re.allocUnsafeSlow=function(e){return oe(e)},re.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==re.prototype},re.compare=function(e,t){if($e(e,Uint8Array)&&(e=re.from(e,e.offset,e.byteLength)),$e(t,Uint8Array)&&(t=re.from(t,t.offset,t.byteLength)),!re.isBuffer(e)||!re.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,r=t.length;for(let i=0,s=Math.min(n,r);i<s;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0},re.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},re.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return re.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const r=re.allocUnsafe(t);let i=0;for(n=0;n<e.length;++n){let t=e[n];if($e(t,Uint8Array))i+t.length>r.length?(re.isBuffer(t)||(t=re.from(t)),t.copy(r,i)):Uint8Array.prototype.set.call(r,t,i);else{if(!re.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(r,i)}i+=t.length}return r},re.byteLength=le,re.prototype._isBuffer=!0,re.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)de(this,t,t+1);return this},re.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)de(this,t,t+3),de(this,t+1,t+2);return this},re.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)de(this,t,t+7),de(this,t+1,t+6),de(this,t+2,t+5),de(this,t+3,t+4);return this},re.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?be(this,0,e):he.apply(this,arguments)},re.prototype.toLocaleString=re.prototype.toString,re.prototype.equals=function(e){if(!re.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===re.compare(this,e)},re.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},te&&(re.prototype[te]=re.prototype.inspect),re.prototype.compare=function(e,t,n,r,i){if($e(e,Uint8Array)&&(e=re.from(e,e.offset,e.byteLength)),!re.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&t>=n)return 0;if(r>=i)return-1;if(t>=n)return 1;if(this===e)return 0;let s=(i>>>=0)-(r>>>=0),o=(n>>>=0)-(t>>>=0);const a=Math.min(s,o),c=this.slice(r,i),u=e.slice(t,n);for(let e=0;e<a;++e)if(c[e]!==u[e]){s=c[e],o=u[e];break}return s<o?-1:o<s?1:0},re.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},re.prototype.indexOf=function(e,t,n){return fe(this,e,t,n,!0)},re.prototype.lastIndexOf=function(e,t,n){return fe(this,e,t,n,!1)},re.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}const i=this.length-t;if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let s=!1;for(;;)switch(r){case"hex":return me(this,e,t,n);case"utf8":case"utf-8":return ge(this,e,t,n);case"ascii":case"latin1":case"binary":return ye(this,e,t,n);case"base64":return ve(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return we(this,e,t,n);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},re.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Ie(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}function Te(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function _e(e,t,n){const r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);let i="";for(let r=t;r<n;++r)i+=He[e[r]];return i}function Se(e,t,n){const r=e.slice(t,n);let i="";for(let e=0;e<r.length-1;e+=2)i+=String.fromCharCode(r[e]+256*r[e+1]);return i}function Ae(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function Ce(e,t,n,r,i,s){if(!re.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<s)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function ke(e,t,n,r,i){xe(t,r,i,e,n,7);let s=Number(t&BigInt(4294967295));e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function Ne(e,t,n,r,i){xe(t,r,i,e,n,7);let s=Number(t&BigInt(4294967295));e[n+7]=s,s>>=8,e[n+6]=s,s>>=8,e[n+5]=s,s>>=8,e[n+4]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}function Re(e,t,n,r,i,s){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Oe(e,t,n,r,i){return t=+t,n>>>=0,i||Re(e,0,n,4),K(e,t,n,r,23,4),n+4}function De(e,t,n,r,i){return t=+t,n>>>=0,i||Re(e,0,n,8),K(e,t,n,r,52,8),n+8}re.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const r=this.subarray(e,t);return Object.setPrototypeOf(r,re.prototype),r},re.prototype.readUintLE=re.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||Ae(e,t,this.length);let r=this[e],i=1,s=0;for(;++s<t&&(i*=256);)r+=this[e+s]*i;return r},re.prototype.readUintBE=re.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||Ae(e,t,this.length);let r=this[e+--t],i=1;for(;t>0&&(i*=256);)r+=this[e+--t]*i;return r},re.prototype.readUint8=re.prototype.readUInt8=function(e,t){return e>>>=0,t||Ae(e,1,this.length),this[e]},re.prototype.readUint16LE=re.prototype.readUInt16LE=function(e,t){return e>>>=0,t||Ae(e,2,this.length),this[e]|this[e+1]<<8},re.prototype.readUint16BE=re.prototype.readUInt16BE=function(e,t){return e>>>=0,t||Ae(e,2,this.length),this[e]<<8|this[e+1]},re.prototype.readUint32LE=re.prototype.readUInt32LE=function(e,t){return e>>>=0,t||Ae(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},re.prototype.readUint32BE=re.prototype.readUInt32BE=function(e,t){return e>>>=0,t||Ae(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},re.prototype.readBigUInt64LE=Ke((function(e){Ue(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Fe(e,this.length-8);const r=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,i=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(r)+(BigInt(i)<<BigInt(32))})),re.prototype.readBigUInt64BE=Ke((function(e){Ue(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Fe(e,this.length-8);const r=t*2**24+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)})),re.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||Ae(e,t,this.length);let r=this[e],i=1,s=0;for(;++s<t&&(i*=256);)r+=this[e+s]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*t)),r},re.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||Ae(e,t,this.length);let r=t,i=1,s=this[e+--r];for(;r>0&&(i*=256);)s+=this[e+--r]*i;return i*=128,s>=i&&(s-=Math.pow(2,8*t)),s},re.prototype.readInt8=function(e,t){return e>>>=0,t||Ae(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},re.prototype.readInt16LE=function(e,t){e>>>=0,t||Ae(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},re.prototype.readInt16BE=function(e,t){e>>>=0,t||Ae(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},re.prototype.readInt32LE=function(e,t){return e>>>=0,t||Ae(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},re.prototype.readInt32BE=function(e,t){return e>>>=0,t||Ae(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},re.prototype.readBigInt64LE=Ke((function(e){Ue(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Fe(e,this.length-8);const r=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),re.prototype.readBigInt64BE=Ke((function(e){Ue(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Fe(e,this.length-8);const r=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(r)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),re.prototype.readFloatLE=function(e,t){return e>>>=0,t||Ae(e,4,this.length),H(this,e,!0,23,4)},re.prototype.readFloatBE=function(e,t){return e>>>=0,t||Ae(e,4,this.length),H(this,e,!1,23,4)},re.prototype.readDoubleLE=function(e,t){return e>>>=0,t||Ae(e,8,this.length),H(this,e,!0,52,8)},re.prototype.readDoubleBE=function(e,t){return e>>>=0,t||Ae(e,8,this.length),H(this,e,!1,52,8)},re.prototype.writeUintLE=re.prototype.writeUIntLE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){Ce(this,e,t,n,Math.pow(2,8*n)-1,0)}let i=1,s=0;for(this[t]=255&e;++s<n&&(i*=256);)this[t+s]=e/i&255;return t+n},re.prototype.writeUintBE=re.prototype.writeUIntBE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){Ce(this,e,t,n,Math.pow(2,8*n)-1,0)}let i=n-1,s=1;for(this[t+i]=255&e;--i>=0&&(s*=256);)this[t+i]=e/s&255;return t+n},re.prototype.writeUint8=re.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||Ce(this,e,t,1,255,0),this[t]=255&e,t+1},re.prototype.writeUint16LE=re.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Ce(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},re.prototype.writeUint16BE=re.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Ce(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},re.prototype.writeUint32LE=re.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Ce(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},re.prototype.writeUint32BE=re.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Ce(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},re.prototype.writeBigUInt64LE=Ke((function(e,t=0){return ke(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),re.prototype.writeBigUInt64BE=Ke((function(e,t=0){return Ne(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),re.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);Ce(this,e,t,n,r-1,-r)}let i=0,s=1,o=0;for(this[t]=255&e;++i<n&&(s*=256);)e<0&&0===o&&0!==this[t+i-1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+n},re.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);Ce(this,e,t,n,r-1,-r)}let i=n-1,s=1,o=0;for(this[t+i]=255&e;--i>=0&&(s*=256);)e<0&&0===o&&0!==this[t+i+1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+n},re.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||Ce(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},re.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Ce(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},re.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Ce(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},re.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Ce(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},re.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Ce(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},re.prototype.writeBigInt64LE=Ke((function(e,t=0){return ke(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),re.prototype.writeBigInt64BE=Ke((function(e,t=0){return Ne(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),re.prototype.writeFloatLE=function(e,t,n){return Oe(this,e,t,!0,n)},re.prototype.writeFloatBE=function(e,t,n){return Oe(this,e,t,!1,n)},re.prototype.writeDoubleLE=function(e,t,n){return De(this,e,t,!0,n)},re.prototype.writeDoubleBE=function(e,t,n){return De(this,e,t,!1,n)},re.prototype.copy=function(e,t,n,r){if(!re.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);const i=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),i},re.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!re.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===e.length){const t=e.charCodeAt(0);("utf8"===r&&t<128||"latin1"===r)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let i;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(i=t;i<n;++i)this[i]=e;else{const s=re.isBuffer(e)?e:re.from(e,r),o=s.length;if(0===o)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<n-t;++i)this[i+t]=s[i%o]}return this};const Le={};function Pe(e,t,n){Le[e]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function Me(e){let t="",n=e.length;const r="-"===e[0]?1:0;for(;n>=r+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function xe(e,t,n,r,i,s){if(e>n||e<t){const r="bigint"==typeof t?"n":"";let i;throw i=s>3?0===t||t===BigInt(0)?`>= 0${r} and < 2${r} ** ${8*(s+1)}${r}`:`>= -(2${r} ** ${8*(s+1)-1}${r}) and < 2 ** ${8*(s+1)-1}${r}`:`>= ${t}${r} and <= ${n}${r}`,new Le.ERR_OUT_OF_RANGE("value",i,e)}!function(e,t,n){Ue(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||Fe(t,e.length-(n+1))}(r,i,s)}function Ue(e,t){if("number"!=typeof e)throw new Le.ERR_INVALID_ARG_TYPE(t,"number",e)}function Fe(e,t,n){if(Math.floor(e)!==e)throw Ue(e,n),new Le.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new Le.ERR_BUFFER_OUT_OF_BOUNDS;throw new Le.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}Pe("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),Pe("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),Pe("ERR_OUT_OF_RANGE",(function(e,t,n){let r=`The value of "${e}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>2**32?i=Me(String(n)):"bigint"==typeof n&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=Me(i)),i+="n"),r+=` It must be ${t}. Received ${i}`,r}),RangeError);const Ve=/[^+/0-9A-Za-z-_]/g;function Be(e,t){let n;t=t||1/0;const r=e.length;let i=null;const s=[];for(let o=0;o<r;++o){if(n=e.charCodeAt(o),n>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&s.push(239,191,189);continue}if(o+1===r){(t-=3)>-1&&s.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function je(e){return q(function(e){if((e=(e=e.split("=")[0]).trim().replace(Ve,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function qe(e,t,n,r){let i;for(i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}function $e(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function ze(e){return e!=e}const He=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const r=16*n;for(let i=0;i<16;++i)t[r+i]=e[n]+e[i]}return t}();function Ke(e){return"undefined"==typeof BigInt?Ge:e}function Ge(){throw new Error("BigInt not supported")}var We=j;function Qe(e){return U.isPlainObject(e)||U.isArray(e)}function Je(e){return U.endsWith(e,"[]")?e.slice(0,-2):e}function Ye(e,t,n){return e?e.concat(t).map((function(e,t){return e=Je(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const Xe=U.toFlatObject(U,{},null,(function(e){return/^is[A-Z]/.test(e)}));var Ze=function(e,t,n){if(!U.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=U.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!U.isUndefined(t[e])}))).metaTokens,i=n.visitor||u,s=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&U.isSpecCompliantForm(t);if(!U.isFunction(i))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(U.isDate(e))return e.toISOString();if(!a&&U.isBlob(e))throw new z("Blob is not supported. Use a Buffer instead.");return U.isArrayBuffer(e)||U.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):We.from(e):e}function u(e,n,i){let a=e;if(e&&!i&&"object"==typeof e)if(U.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(U.isArray(e)&&function(e){return U.isArray(e)&&!e.some(Qe)}(e)||(U.isFileList(e)||U.endsWith(n,"[]"))&&(a=U.toArray(e)))return n=Je(n),a.forEach((function(e,r){!U.isUndefined(e)&&null!==e&&t.append(!0===o?Ye([n],r,s):null===o?n:n+"[]",c(e))})),!1;return!!Qe(e)||(t.append(Ye(i,n,s),c(e)),!1)}const l=[],h=Object.assign(Xe,{defaultVisitor:u,convertValue:c,isVisitable:Qe});if(!U.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!U.isUndefined(n)){if(-1!==l.indexOf(n))throw Error("Circular reference detected in "+r.join("."));l.push(n),U.forEach(n,(function(n,s){!0===(!(U.isUndefined(n)||null===n)&&i.call(t,n,U.isString(s)?s.trim():s,r,h))&&e(n,r?r.concat(s):[s])})),l.pop()}}(e),t};function et(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function tt(e,t){this._pairs=[],e&&Ze(e,this,t)}const nt=tt.prototype;nt.append=function(e,t){this._pairs.push([e,t])},nt.toString=function(e){const t=e?function(t){return e.call(this,t,et)}:et;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var rt=tt;function it(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function st(e,t,n){if(!t)return e;const r=n&&n.encode||it,i=n&&n.serialize;let s;if(s=i?i(t,n):U.isURLSearchParams(t)?t.toString():new rt(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}var ot=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){U.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},at={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var ct={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:rt,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function ut(e,t){return Ze(e,new ct.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return ct.isNode&&U.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}var lt=function(e){function t(e,n,r,i){let s=e[i++];const o=Number.isFinite(+s),a=i>=e.length;if(s=!s&&U.isArray(r)?r.length:s,a)return U.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!o;r[s]&&U.isObject(r[s])||(r[s]=[]);return t(e,n,r[s],i)&&U.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],t[s]=e[s];return t}(r[s])),!o}if(U.isFormData(e)&&U.isFunction(e.entries)){const n={};return U.forEachEntry(e,((e,r)=>{t(function(e){return U.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null};const ht={"Content-Type":void 0};const dt={transitional:at,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,i=U.isObject(e);i&&U.isHTMLForm(e)&&(e=new FormData(e));if(U.isFormData(e))return r&&r?JSON.stringify(lt(e)):e;if(U.isArrayBuffer(e)||U.isBuffer(e)||U.isStream(e)||U.isFile(e)||U.isBlob(e))return e;if(U.isArrayBufferView(e))return e.buffer;if(U.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return ut(e,this.formSerializer).toString();if((s=U.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Ze(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||r?(t.setContentType("application/json",!1),function(e,t,n){if(U.isString(e))try{return(t||JSON.parse)(e),U.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||dt.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&U.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw z.from(e,z.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ct.classes.FormData,Blob:ct.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};U.forEach(["delete","get","head"],(function(e){dt.headers[e]={}})),U.forEach(["post","put","patch"],(function(e){dt.headers[e]=U.merge(ht)}));var ft=dt;const pt=U.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var mt=e=>{const t={};let n,r,i;return e&&e.split("\n").forEach((function(e){i=e.indexOf(":"),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!n||t[n]&&pt[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t};const gt=Symbol("internals");function yt(e){return e&&String(e).trim().toLowerCase()}function vt(e){return!1===e||null==e?e:U.isArray(e)?e.map(vt):String(e)}function wt(e,t,n,r,i){return U.isFunction(r)?r.call(this,t,n):(i&&(t=n),U.isString(t)?U.isString(r)?-1!==t.indexOf(r):U.isRegExp(r)?r.test(t):void 0:void 0)}class Et{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function i(e,t,n){const i=yt(t);if(!i)throw new Error("header name must be a non-empty string");const s=U.findKey(r,i);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=vt(e))}const s=(e,t)=>U.forEach(e,((e,n)=>i(e,n,t)));return U.isPlainObject(e)||e instanceof this.constructor?s(e,t):U.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?s(mt(e),t):null!=e&&i(t,e,n),this}get(e,t){if(e=yt(e)){const n=U.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(U.isFunction(t))return t.call(this,e,n);if(U.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=yt(e)){const n=U.findKey(this,e);return!(!n||void 0===this[n]||t&&!wt(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function i(e){if(e=yt(e)){const i=U.findKey(n,e);!i||t&&!wt(0,n[i],i,t)||(delete n[i],r=!0)}}return U.isArray(e)?e.forEach(i):i(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const i=t[n];e&&!wt(0,this[i],i,e,!0)||(delete this[i],r=!0)}return r}normalize(e){const t=this,n={};return U.forEach(this,((r,i)=>{const s=U.findKey(n,i);if(s)return t[s]=vt(r),void delete t[i];const o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(i):String(i).trim();o!==i&&delete t[i],t[o]=vt(r),n[o]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return U.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&U.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[gt]=this[gt]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=yt(e);t[r]||(!function(e,t){const n=U.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})}))}(n,e),t[r]=!0)}return U.isArray(e)?e.forEach(r):r(e),this}}Et.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),U.freezeMethods(Et.prototype),U.freezeMethods(Et);var bt=Et;function It(e,t){const n=this||ft,r=t||n,i=bt.from(r.headers);let s=r.data;return U.forEach(e,(function(e){s=e.call(n,s,i.normalize(),t?t.status:void 0)})),i.normalize(),s}function Tt(e){return!(!e||!e.__CANCEL__)}function _t(e,t,n){z.call(this,null==e?"canceled":e,z.ERR_CANCELED,t,n),this.name="CanceledError"}U.inherits(_t,z,{__CANCEL__:!0});var St=_t;function At(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new z("Request failed with status code "+n.status,[z.ERR_BAD_REQUEST,z.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var Ct=ct.isStandardBrowserEnv?{write:function(e,t,n,r,i,s){const o=[];o.push(e+"="+encodeURIComponent(t)),U.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),U.isString(r)&&o.push("path="+r),U.isString(i)&&o.push("domain="+i),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function kt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Nt(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?kt(e,t):t}var Rt=ct.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=U.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function Ot(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}var Dt=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i,s=0,o=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[o];i||(i=c),n[s]=a,r[s]=c;let l=o,h=0;for(;l!==s;)h+=n[l++],l%=e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const d=u&&c-u;return d?Math.round(1e3*h/d):void 0}};function Lt(e,t){let n=0;const r=Dt(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,c=r(a);n=s;const u={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&s<=o?(o-s)/c:void 0,event:i};u[t?"download":"upload"]=!0,e(u)}}const Pt={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const i=bt.from(e.headers).normalize(),s=e.responseType;let o;function a(){e.cancelToken&&e.cancelToken.unsubscribe(o),e.signal&&e.signal.removeEventListener("abort",o)}U.isFormData(r)&&(ct.isStandardBrowserEnv||ct.isStandardBrowserWebWorkerEnv)&&i.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(t+":"+n))}const u=Nt(e.baseURL,e.url);function l(){if(!c)return;const r=bt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());At((function(e){t(e),a()}),(function(e){n(e),a()}),{data:s&&"text"!==s&&"json"!==s?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),st(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(n(new z("Request aborted",z.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new z("Network Error",z.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||at;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new z(t,r.clarifyTimeoutError?z.ETIMEDOUT:z.ECONNABORTED,e,c)),c=null},ct.isStandardBrowserEnv){const t=(e.withCredentials||Rt(u))&&e.xsrfCookieName&&Ct.read(e.xsrfCookieName);t&&i.set(e.xsrfHeaderName,t)}void 0===r&&i.setContentType(null),"setRequestHeader"in c&&U.forEach(i.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),U.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&"json"!==s&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",Lt(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",Lt(e.onUploadProgress)),(e.cancelToken||e.signal)&&(o=t=>{c&&(n(!t||t.type?new St(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(o),e.signal&&(e.signal.aborted?o():e.signal.addEventListener("abort",o)));const h=Ot(u);h&&-1===ct.protocols.indexOf(h)?n(new z("Unsupported protocol "+h+":",z.ERR_BAD_REQUEST,e)):c.send(r||null)}))}};U.forEach(Pt,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var Mt={getAdapter:e=>{e=U.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=U.isString(n)?Pt[n.toLowerCase()]:n));i++);if(!r){if(!1===r)throw new z(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(U.hasOwnProp(Pt,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!U.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Pt};function xt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new St(null,e)}function Ut(e){xt(e),e.headers=bt.from(e.headers),e.data=It.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Mt.getAdapter(e.adapter||ft.adapter)(e).then((function(t){return xt(e),t.data=It.call(e,e.transformResponse,t),t.headers=bt.from(t.headers),t}),(function(t){return Tt(t)||(xt(e),t&&t.response&&(t.response.data=It.call(e,e.transformResponse,t.response),t.response.headers=bt.from(t.response.headers))),Promise.reject(t)}))}const Ft=e=>e instanceof bt?e.toJSON():e;function Vt(e,t){t=t||{};const n={};function r(e,t,n){return U.isPlainObject(e)&&U.isPlainObject(t)?U.merge.call({caseless:n},e,t):U.isPlainObject(t)?U.merge({},t):U.isArray(t)?t.slice():t}function i(e,t,n){return U.isUndefined(t)?U.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!U.isUndefined(t))return r(void 0,t)}function o(e,t){return U.isUndefined(t)?U.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,i,s){return s in t?r(n,i):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(e,t)=>i(Ft(e),Ft(t),!0)};return U.forEach(Object.keys(e).concat(Object.keys(t)),(function(r){const s=c[r]||i,o=s(e[r],t[r],r);U.isUndefined(o)&&s!==a||(n[r]=o)})),n}const Bt={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Bt[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const jt={};Bt.transitional=function(e,t,n){function r(e,t){return"[Axios v1.3.6] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,i,s)=>{if(!1===e)throw new z(r(i," has been removed"+(t?" in "+t:"")),z.ERR_DEPRECATED);return t&&!jt[i]&&(jt[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,s)}};var qt={assertOptions:function(e,t,n){if("object"!=typeof e)throw new z("options must be an object",z.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const s=r[i],o=t[s];if(o){const t=e[s],n=void 0===t||o(t,s,e);if(!0!==n)throw new z("option "+s+" must be "+n,z.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new z("Unknown option "+s,z.ERR_BAD_OPTION)}},validators:Bt};const $t=qt.validators;class zt{constructor(e){this.defaults=e,this.interceptors={request:new ot,response:new ot}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Vt(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:i}=t;let s;void 0!==n&&qt.assertOptions(n,{silentJSONParsing:$t.transitional($t.boolean),forcedJSONParsing:$t.transitional($t.boolean),clarifyTimeoutError:$t.transitional($t.boolean)},!1),null!=r&&(U.isFunction(r)?t.paramsSerializer={serialize:r}:qt.assertOptions(r,{encode:$t.function,serialize:$t.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase(),s=i&&U.merge(i.common,i[t.method]),s&&U.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete i[e]})),t.headers=bt.concat(s,i);const o=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,h=0;if(!a){const e=[Ut.bind(this),void 0];for(e.unshift.apply(e,o),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);h<l;)u=u.then(e[h++],e[h++]);return u}l=o.length;let d=t;for(h=0;h<l;){const e=o[h++],t=o[h++];try{d=e(d)}catch(e){t.call(this,e);break}}try{u=Ut.call(this,d)}catch(e){return Promise.reject(e)}for(h=0,l=c.length;h<l;)u=u.then(c[h++],c[h++]);return u}getUri(e){return st(Nt((e=Vt(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}U.forEach(["delete","get","head","options"],(function(e){zt.prototype[e]=function(t,n){return this.request(Vt(n||{},{method:e,url:t,data:(n||{}).data}))}})),U.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(Vt(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}zt.prototype[e]=t(),zt.prototype[e+"Form"]=t(!0)}));var Ht=zt;class Kt{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,i){n.reason||(n.reason=new St(e,r,i),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new Kt((function(t){e=t})),cancel:e}}}var Gt=Kt;const Wt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Wt).forEach((([e,t])=>{Wt[t]=e}));var Qt=Wt;const Jt=function e(t){const n=new Ht(t),r=o(Ht.prototype.request,n);return U.extend(r,Ht.prototype,n,{allOwnKeys:!0}),U.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Vt(t,n))},r}(ft);Jt.Axios=Ht,Jt.CanceledError=St,Jt.CancelToken=Gt,Jt.isCancel=Tt,Jt.VERSION="1.3.6",Jt.toFormData=Ze,Jt.AxiosError=z,Jt.Cancel=Jt.CanceledError,Jt.all=function(e){return Promise.all(e)},Jt.spread=function(e){return function(t){return e.apply(null,t)}},Jt.isAxiosError=function(e){return U.isObject(e)&&!0===e.isAxiosError},Jt.mergeConfig=Vt,Jt.AxiosHeaders=bt,Jt.formToJSON=e=>lt(U.isHTMLForm(e)?new FormData(e):e),Jt.HttpStatusCode=Qt,Jt.default=Jt;var Yt=Jt;const{Axios:Xt,AxiosError:Zt,CanceledError:en,isCancel:tn,CancelToken:nn,VERSION:rn,all:sn,Cancel:on,isAxiosError:an,spread:cn,toFormData:un,AxiosHeaders:ln,HttpStatusCode:hn,formToJSON:dn,mergeConfig:fn}=Yt;async function pn(e){const t=e.map((async e=>await Yt.get(`https://api.themoviedb.org/3//movie/${e}?api_key=b118f38ec77100db6763b4cc83604589&language=en-US`).then((e=>e.data)).catch((e=>console.log(e)))));return await Promise.all(t)}var mn,gn,yn,vn=mn={};function wn(){throw new Error("setTimeout has not been defined")}function En(){throw new Error("clearTimeout has not been defined")}function bn(e){if(gn===setTimeout)return setTimeout(e,0);if((gn===wn||!gn)&&setTimeout)return gn=setTimeout,setTimeout(e,0);try{return gn(e,0)}catch(t){try{return gn.call(null,e,0)}catch(t){return gn.call(this,e,0)}}}!function(){try{gn="function"==typeof setTimeout?setTimeout:wn}catch(e){gn=wn}try{yn="function"==typeof clearTimeout?clearTimeout:En}catch(e){yn=En}}();var In,Tn=[],_n=!1,Sn=-1;function An(){_n&&In&&(_n=!1,In.length?Tn=In.concat(Tn):Sn=-1,Tn.length&&Cn())}function Cn(){if(!_n){var e=bn(An);_n=!0;for(var t=Tn.length;t;){for(In=Tn,Tn=[];++Sn<t;)In&&In[Sn].run();Sn=-1,t=Tn.length}In=null,_n=!1,function(e){if(yn===clearTimeout)return clearTimeout(e);if((yn===En||!yn)&&clearTimeout)return yn=clearTimeout,clearTimeout(e);try{yn(e)}catch(t){try{return yn.call(null,e)}catch(t){return yn.call(this,e)}}}(e)}}function kn(e,t){this.fun=e,this.array=t}function Nn(){}vn.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];Tn.push(new kn(e,t)),1!==Tn.length||_n||bn(Cn)},kn.prototype.run=function(){this.fun.apply(null,this.array)},vn.title="browser",vn.browser=!0,vn.env={},vn.argv=[],vn.version="",vn.versions={},vn.on=Nn,vn.addListener=Nn,vn.once=Nn,vn.off=Nn,vn.removeListener=Nn,vn.removeAllListeners=Nn,vn.emit=Nn,vn.prependListener=Nn,vn.prependOnceListener=Nn,vn.listeners=function(e){return[]},vn.binding=function(e){throw new Error("process.binding is not supported")},vn.cwd=function(){return"/"},vn.chdir=function(e){throw new Error("process.chdir is not supported")},vn.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rn=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},On={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,u=i>>2,l=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Rn(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw new Dn;const c=i<<2|s>>4;if(r.push(c),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ln=function(e){return function(e){const t=Rn(e);return On.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Pn=function(e){try{return On.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Mn=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,xn=()=>{try{return Mn()||(()=>{if(void 0===mn||void 0===mn.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&Pn(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},Un=e=>{var t,n;return null===(n=null===(t=xn())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},Fn=e=>{const t=Un(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Vn=e=>{var t;return null===(t=xn())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Ln(JSON.stringify({alg:"none",type:"JWT"})),Ln(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function $n(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function zn(){const e=qn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Hn(){try{return"object"==typeof indexedDB}catch(e){return!1}}function Kn(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function Gn(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qn.prototype.create)}}class Qn{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(Jn,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new Wn(r,o,n)}}const Jn=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Xn(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(Zn(n)&&Zn(s)){if(!Xn(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function Zn(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function er(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function tr(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function nr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(e,t){const n=new ir(e,t);return n.subscribe.bind(n)}class ir{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=sr),void 0===r.error&&(r.error=sr),void 0===r.complete&&(r.complete=sr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function sr(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(e,t=1e3,n=2){const r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ar(e){return e&&e._delegate?e._delegate:e}class cr{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ur{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Bn;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class lr{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ur(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=[];var dr,fr;(fr=dr||(dr={}))[fr.DEBUG=0]="DEBUG",fr[fr.VERBOSE=1]="VERBOSE",fr[fr.INFO=2]="INFO",fr[fr.WARN=3]="WARN",fr[fr.ERROR=4]="ERROR",fr[fr.SILENT=5]="SILENT";const pr={debug:dr.DEBUG,verbose:dr.VERBOSE,info:dr.INFO,warn:dr.WARN,error:dr.ERROR,silent:dr.SILENT},mr=dr.INFO,gr={[dr.DEBUG]:"log",[dr.VERBOSE]:"log",[dr.INFO]:"info",[dr.WARN]:"warn",[dr.ERROR]:"error"},yr=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=gr[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class vr{constructor(e){this.name=e,this._logLevel=mr,this._logHandler=yr,this._userLogHandler=null,hr.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in dr))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?pr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,dr.DEBUG,...e),this._logHandler(this,dr.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,dr.VERBOSE,...e),this._logHandler(this,dr.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,dr.INFO,...e),this._logHandler(this,dr.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,dr.WARN,...e),this._logHandler(this,dr.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,dr.ERROR,...e),this._logHandler(this,dr.ERROR,...e)}}let wr,Er;const br=new WeakMap,Ir=new WeakMap,Tr=new WeakMap,_r=new WeakMap,Sr=new WeakMap;let Ar={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Ir.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Tr.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nr(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Cr(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Er||(Er=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Rr(this),t),Nr(br.get(this))}:function(...t){return Nr(e.apply(Rr(this),t))}:function(t,...n){const r=e.call(Rr(this),t,...n);return Tr.set(r,t.sort?t.sort():[t]),Nr(r)}}function kr(e){return"function"==typeof e?Cr(e):(e instanceof IDBTransaction&&function(e){if(Ir.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));Ir.set(e,t)}(e),t=e,(wr||(wr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Ar):e);var t}function Nr(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(Nr(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&br.set(t,e)})).catch((()=>{})),Sr.set(t,e),t}(e);if(_r.has(e))return _r.get(e);const t=kr(e);return t!==e&&(_r.set(e,t),Sr.set(t,e)),t}const Rr=e=>Sr.get(e);function Or(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Nr(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Nr(o.result),e.oldVersion,e.newVersion,Nr(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const Dr=["get","getKey","getAll","getAllKeys","count"],Lr=["put","add","delete","clear"],Pr=new Map;function Mr(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Pr.get(t))return Pr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Lr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Dr.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return Pr.set(t,s),s}Ar=(e=>({...e,get:(t,n,r)=>Mr(t,n)||e.get(t,n,r),has:(t,n)=>!!Mr(t,n)||e.has(t,n)}))(Ar);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Ur=new vr("@firebase/app"),Fr={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Vr=new Map,Br=new Map;function jr(e,t){try{e.container.addComponent(t)}catch(n){Ur.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function qr(e){const t=e.name;if(Br.has(t))return Ur.debug(`There were multiple attempts to register component ${t}.`),!1;Br.set(t,e);for(const t of Vr.values())jr(t,e);return!0}function $r(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zr=new Qn("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hr{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new cr("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zr.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw zr.create("bad-app-name",{appName:String(i)});var s;if(n||(n=null===(s=xn())||void 0===s?void 0:s.config),!n)throw zr.create("no-options");const o=Vr.get(i);if(o){if(Xn(n,o.options)&&Xn(r,o.config))return o;throw zr.create("duplicate-app",{appName:i})}const a=new lr(i);for(const e of Br.values())a.addComponent(e);const c=new Hr(n,r,a);return Vr.set(i,c),c}function Gr(e="[DEFAULT]"){const t=Vr.get(e);if(!t&&"[DEFAULT]"===e)return Kr();if(!t)throw zr.create("no-app",{appName:e});return t}function Wr(e,t,n){var r;let i=null!==(r=Fr[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ur.warn(e.join(" "))}qr(new cr(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}let Qr=null;function Jr(){return Qr||(Qr=Or("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw zr.create("idb-open",{originalErrorMessage:e.message})}))),Qr}async function Yr(e,t){try{const n=(await Jr()).transaction("firebase-heartbeat-store","readwrite"),r=n.objectStore("firebase-heartbeat-store");return await r.put(t,Xr(e)),n.done}catch(e){if(e instanceof Wn)Ur.warn(e.message);else{const t=zr.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Ur.warn(t.message)}}}function Xr(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ti(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=ei();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=ei(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),ni(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ni(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Ln(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ei(){return(new Date).toISOString().substring(0,10)}class ti{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Hn()&&Kn().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await Jr()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Xr(e))}catch(e){if(e instanceof Wn)Ur.warn(e.message);else{const t=zr.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Ur.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Yr(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Yr(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ni(e){return Ln(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ri;ri="",qr(new cr("platform-logger",(e=>new xr(e)),"PRIVATE")),qr(new cr("heartbeat",(e=>new Zr(e)),"PRIVATE")),Wr("@firebase/app","0.9.7",ri),Wr("@firebase/app","0.9.7","esm2017"),Wr("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Wr("firebase","9.19.1","app");const ii=new Qn("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function si(e){return e instanceof Wn&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function ai(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function ci(e,t){const n=(await t.json()).error;return ii.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function ui({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function li(e,{refreshToken:t}){const n=ui(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),n}async function hi(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fi=/^[cdef][\w-]{21}$/;function pi(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);return fi.test(t)?t:""}catch(e){return""}}function mi(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=new Map;function yi(e,t){const n=mi(e);vi(n,t),function(e,t){const n=Ei();n&&n.postMessage({key:e,fid:t});bi()}(n,t)}function vi(e,t){const n=gi.get(e);if(n)for(const e of n)e(t)}let wi=null;function Ei(){return!wi&&"BroadcastChannel"in self&&(wi=new BroadcastChannel("[Firebase] FID Change"),wi.onmessage=e=>{vi(e.data.key,e.data.fid)}),wi}function bi(){0===gi.size&&wi&&(wi.close(),wi=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ii=null;function Ti(){return Ii||(Ii=Or("firebase-installations-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-installations-store")}})),Ii}async function _i(e,t){const n=mi(e),r=(await Ti()).transaction("firebase-installations-store","readwrite"),i=r.objectStore("firebase-installations-store"),s=await i.get(n);return await i.put(t,n),await r.done,s&&s.fid===t.fid||yi(e,t.fid),t}async function Si(e){const t=mi(e),n=(await Ti()).transaction("firebase-installations-store","readwrite");await n.objectStore("firebase-installations-store").delete(t),await n.done}async function Ai(e,t){const n=mi(e),r=(await Ti()).transaction("firebase-installations-store","readwrite"),i=r.objectStore("firebase-installations-store"),s=await i.get(n),o=t(s);return void 0===o?await i.delete(n):await i.put(o,n),await r.done,!o||s&&s.fid===o.fid||yi(e,o.fid),o}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(e){let t;const n=await Ai(e.appConfig,(n=>{const r=function(e){return Ri(e||{fid:pi(),registrationStatus:0})}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(ii.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=oi(e),i=ui(e),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const o={fid:n,authVersion:"FIS_v2",appId:e.appId,sdkVersion:"w:0.6.4"},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await hi((()=>fetch(r,a)));if(c.ok){const e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:ai(e.authToken)}}throw await ci("Create Installation",c)}(e,t);return _i(e.appConfig,n)}catch(n){throw si(n)&&409===n.customData.serverCode?await Si(e.appConfig):await _i(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:ki(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function ki(e){let t=await Ni(e.appConfig);for(;1===t.registrationStatus;)await di(100),t=await Ni(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await Ci(e);return n||t}return t}function Ni(e){return Ai(e,(e=>{if(!e)throw ii.create("installation-not-found");return Ri(e)}))}function Ri(e){return 1===(t=e).registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}async function Oi({appConfig:e,heartbeatServiceProvider:t},n){const r=function(e,{fid:t}){return`${oi(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,n),i=li(e,n),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const o={installation:{sdkVersion:"w:0.6.4",appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await hi((()=>fetch(r,a)));if(c.ok){return ai(await c.json())}throw await ci("Generate Auth Token",c)}async function Di(e,t=!1){let n;const r=await Ai(e.appConfig,(r=>{if(!Pi(r))throw ii.create("not-registered");const i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(e)}(i))return r;if(1===i.requestStatus)return n=async function(e,t){let n=await Li(e.appConfig);for(;1===n.authToken.requestStatus;)await di(100),n=await Li(e.appConfig);const r=n.authToken;return 0===r.requestStatus?Di(e,t):r}(e,t),r;{if(!navigator.onLine)throw ii.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await Oi(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await _i(e.appConfig,r),n}catch(n){if(!si(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await _i(e.appConfig,n)}else await Si(e.appConfig);throw n}}(e,t),t}}));return n?await n:r.authToken}function Li(e){return Ai(e,(e=>{if(!Pi(e))throw ii.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}))}function Pi(e){return void 0!==e&&2===e.registrationStatus}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Mi(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await Ci(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n);return(await Di(n,t)).token}function xi(e){return ii.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=e=>{const t=$r(e.getProvider("app").getImmediate(),"installations").getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await Ci(t);return r?r.catch(console.error):Di(t).catch(console.error),n.fid}(t),getToken:e=>Mi(t,e)}};qr(new cr("installations",(e=>{const t=e.getProvider("app").getImmediate(),n=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){if(!e||!e.options)throw xi("App Configuration");if(!e.name)throw xi("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw xi(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:$r(t,"heartbeat"),_delete:()=>Promise.resolve()}}),"PUBLIC")),qr(new cr("installations-internal",Ui,"PRIVATE")),Wr("@firebase/installations","0.6.4"),Wr("@firebase/installations","0.6.4","esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fi=new vr("@firebase/analytics"),Vi=new Qn("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Bi(e){if(!e.startsWith("https://www.googletagmanager.com/gtag/js")){const t=Vi.create("invalid-gtag-resource",{gtagURL:e});return Fi.warn(t.message),""}return e}function ji(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function qi(e,t){const n=function(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}("firebase-js-sdk-policy",{createScriptURL:Bi}),r=document.createElement("script"),i=`https://www.googletagmanager.com/gtag/js?l=${e}&id=${t}`;r.src=n?null==n?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function $i(e,t,n,r){return async function(i,s,o){try{"event"===i?await async function(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);const r=await ji(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),i=e&&t[e.appId];if(!i){s=[];break}s.push(i)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(e){Fi.error(e)}}(e,t,n,s,o):"config"===i?await async function(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const e=(await ji(n)).find((e=>e.measurementId===i));e&&await t[e.appId]}}catch(e){Fi.error(e)}e("config",i,s)}(e,t,n,r,s,o):"consent"===i?e("consent","update",o):e("set",s)}catch(e){Fi.error(e)}}}const zi=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function Hi(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Ki(e,t=zi,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Vi.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Vi.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Wi;return setTimeout((async()=>{a.abort()}),void 0!==n?n:6e4),Gi({appId:r,apiKey:i,measurementId:s},o,a,t)}async function Gi(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=zi){var s;const{appId:o,measurementId:a}=e;try{await function(e,t){return new Promise(((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener((()=>{clearTimeout(s),r(Vi.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(r,t)}catch(e){if(a)return Fi.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:o,measurementId:a};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:Hi(r)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(s,i);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw Vi.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}(e);return i.deleteThrottleMetadata(o),t}catch(t){const c=t;if(!function(e){if(!(e instanceof Wn&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(c)){if(i.deleteThrottleMetadata(o),a)return Fi.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==c?void 0:c.message}]`),{appId:o,measurementId:a};throw t}const u=503===Number(null===(s=null==c?void 0:c.customData)||void 0===s?void 0:s.httpStatus)?or(n,i.intervalMillis,30):or(n,i.intervalMillis),l={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,l),Fi.debug(`Calling attemptFetch again in ${u} millis`),Gi(e,l,r,i)}}class Wi{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qi,Ji;function Yi(e){Ji=e}function Xi(e){Qi=e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zi(e,t,n,r,i,s,o){var a;const c=Ki(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Fi.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>Fi.error(e))),t.push(c);const u=async function(){if(!Hn())return Fi.warn(Vi.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await Kn()}catch(e){return Fi.warn(Vi.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}().then((e=>e?r.getId():void 0)),[l,h]=await Promise.all([c,u]);(function(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes("https://www.googletagmanager.com/gtag/js")&&n.src.includes(e))return n;return null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(s)||qi(s,l.measurementId),Ji&&(i("consent","default",Ji),Yi(void 0)),i("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=h&&(d.firebase_id=h),i("config",l.measurementId,d),Qi&&(i("set",Qi),Xi(void 0)),l.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.app=e}_delete(){return delete ts[this.app.options.appId],Promise.resolve()}}let ts={},ns=[];const rs={};let is,ss,os="dataLayer",as="gtag",cs=!1;function us(e,t,n){!function(){const e=[];if($n()&&e.push("This is a browser extension environment."),Gn()||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=Vi.create("invalid-analytics-context",{errorInfo:t});Fi.warn(n.message)}}();const r=e.options.appId;if(!r)throw Vi.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Vi.create("no-api-key");Fi.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=ts[r])throw Vi.create("already-exists",{id:r});if(!cs){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(os);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,i){let s=function(...e){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(s=window[i]),window[i]=$i(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}(ts,ns,rs,os,as);ss=e,is=t,cs=!0}ts[r]=Zi(e,ns,rs,t,is,os,n);return new es(e)}function ls(e,t,n,r){e=ar(e),async function(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}(ss,ts[e.app.options.appId],t,n,r).catch((e=>Fi.error(e)))}qr(new cr("analytics",((e,{options:t})=>us(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),qr(new cr("analytics-internal",(function(e){try{const t=e.getProvider("analytics").getImmediate();return{logEvent:(e,n,r)=>ls(t,e,n,r)}}catch(e){throw Vi.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),Wr("@firebase/analytics","0.9.5"),Wr("@firebase/analytics","0.9.5","esm2017");function hs(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function ds(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fs=ds,ps=new Qn("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),ms={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized"},gs=new vr("@firebase/auth");function ys(e,...t){gs.logLevel<=dr.ERROR&&gs.error(`Auth (9.19.1): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(e,...t){throw bs(e,...t)}function ws(e,...t){return bs(e,...t)}function Es(e,t,n){const r=Object.assign(Object.assign({},fs()),{[t]:n});return new Qn("auth","Firebase",r).create(t,{appName:e.name})}function bs(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return ps.create(e,...t)}function Is(e,t,...n){if(!e)throw bs(t,...n)}function Ts(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ys(t),new Error(t)}function _s(e,t){e||Ts(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new Map;function As(e){_s(e instanceof Function,"Expected a class definition");let t=Ss.get(e);return t?(_s(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ss.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Cs(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function ks(){return"http:"===Ns()||"https:"===Ns()}function Ns(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rs{constructor(e,t){this.shortDelay=e,this.longDelay=t,_s(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qn())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(ks()||$n()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(e,t){_s(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Ts("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Ts("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Ts("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Ps=new Rs(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function xs(e,t,n,r,i={}){return Us(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=er(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Ds.fetch()(Vs(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Us(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ls),t);try{const t=new Bs(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw js(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw js(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw js(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw js(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Es(e,a,o);vs(e,a)}}catch(t){if(t instanceof Wn)throw t;vs(e,"network-request-failed",{message:String(t)})}}async function Fs(e,t,n,r,i={}){const s=await xs(e,t,n,r,i);return"mfaPendingCredential"in s&&vs(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Vs(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Os(e.config,i):`${e.config.apiScheme}://${i}`}class Bs{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(ws(this.auth,"network-request-failed"))),Ps.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function js(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ws(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qs(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(e){return 1e3*Number(e)}function zs(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return ys("JWT malformed, contained fewer than 3 sections"),null;try{const e=Pn(n);return e?JSON.parse(e):(ys("Failed to decode base64 JWT payload"),null)}catch(e){return ys("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Hs(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Wn&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Ks{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=qs(this.lastLoginAt),this.creationTime=qs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ws(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Hs(e,async function(e,t){return xs(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));Is(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=hs(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,u=o,[...c.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var c,u;const l=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!l&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Gs(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Is(e.idToken,"internal-error"),Is(void 0!==e.idToken,"internal-error"),Is(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=zs(e);return Is(t,"internal-error"),Is(void 0!==t.exp,"internal-error"),Is(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Is(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await Us(e,{},(async()=>{const n=er({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Vs(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Ds.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Qs;return n&&(Is("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(Is("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(Is("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qs,this.toJSON())}_performRefresh(){return Ts("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(e,t){Is("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Ys{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=hs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ks(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Gs(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Hs(this,this.stsTokenManager.getToken(this.auth,e));return Is(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=ar(e),r=await n.getIdToken(t),i=zs(r);Is(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:qs($s(i.auth_time)),issuedAtTime:qs($s(i.iat)),expirationTime:qs($s(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=ar(e);await Ws(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Is(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ys(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Is(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Ws(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Hs(this,async function(e,t){return xs(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:E,providerData:b,stsTokenManager:I}=t;Is(v&&I,e,"internal-error");const T=Qs.fromJSON(this.name,I);Is("string"==typeof v,e,"internal-error"),Js(l,e.name),Js(h,e.name),Is("boolean"==typeof w,e,"internal-error"),Is("boolean"==typeof E,e,"internal-error"),Js(d,e.name),Js(f,e.name),Js(p,e.name),Js(m,e.name),Js(g,e.name),Js(y,e.name);const _=new Ys({uid:v,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:E,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:y});return b&&Array.isArray(b)&&(_.providerData=b.map((e=>Object.assign({},e)))),m&&(_._redirectEventId=m),_}static async _fromIdTokenResponse(e,t,n=!1){const r=new Qs;r.updateFromServerResponse(t);const i=new Ys({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Ws(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Xs.type="NONE";const Zs=Xs;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(e,t,n){return`firebase:${e}:${t}:${n}`}class to{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=eo(this.userKey,r.apiKey,i),this.fullPersistenceKey=eo("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ys._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new to(As(Zs),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||As(Zs);const s=eo(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=Ys._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new to(i,e,n)):new to(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(oo(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ro(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(co(t))return"Blackberry";if(uo(t))return"Webos";if(io(t))return"Safari";if((t.includes("chrome/")||so(t))&&!t.includes("edge/"))return"Chrome";if(ao(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function ro(e=qn()){return/firefox\//i.test(e)}function io(e=qn()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function so(e=qn()){return/crios\//i.test(e)}function oo(e=qn()){return/iemobile/i.test(e)}function ao(e=qn()){return/android/i.test(e)}function co(e=qn()){return/blackberry/i.test(e)}function uo(e=qn()){return/webos/i.test(e)}function lo(e=qn()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ho(){return zn()&&10===document.documentMode}function fo(e=qn()){return lo(e)||ao(e)||uo(e)||co(e)||/windows phone/i.test(e)||oo(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function po(e,t=[]){let n;switch(e){case"Browser":n=no(qn());break;case"Worker":n=`${no(qn())}-${e}`;break;default:n=e}return`${n}/JsCore/9.19.1/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vo(this),this.idTokenSubscription=new vo(this),this.beforeStateQueue=new mo(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ps,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=As(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await to.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Is(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ws(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ar(e):null;return t&&Is(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Is(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(As(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qn("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&As(e)||this._popupRedirectResolver;Is(t,this,"argument-error"),this.redirectPersistenceManager=await to.create(this,[As(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Is(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Is(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=po(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function yo(e){return ar(e)}class vo{constructor(e){this.auth=e,this.observer=null,this.addObserver=rr((e=>this.observer=e))}get next(){return Is(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function wo(e,t,n){const r=yo(e);Is(r._canInitEmulator,r,"emulator-config-failed"),Is(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=Eo(t),{host:o,port:a}=function(e){const t=Eo(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:bo(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:bo(t)}}}(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Eo(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function bo(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Io{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ts("not implemented")}_getIdTokenResponse(e){return Ts("not implemented")}_linkToIdToken(e,t){return Ts("not implemented")}_getReauthenticationResolver(e){return Ts("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function To(e,t){return xs(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _o extends Io{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new _o(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new _o(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Fs(e,"POST","/v1/accounts:signInWithPassword",Ms(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Fs(e,"POST","/v1/accounts:signInWithEmailLink",Ms(e,t))}(e,{email:this._email,oobCode:this._password});default:vs(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return To(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Fs(e,"POST","/v1/accounts:signInWithEmailLink",Ms(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:vs(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(e,t){return Fs(e,"POST","/v1/accounts:signInWithIdp",Ms(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends Io{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ao(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):vs("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=hs(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Ao(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return So(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,So(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,So(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=er(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ko extends Io{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ko({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ko({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Fs(e,"POST","/v1/accounts:signInWithPhoneNumber",Ms(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Fs(e,"POST","/v1/accounts:signInWithPhoneNumber",Ms(e,t));if(n.temporaryProof)throw js(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Fs(e,"POST","/v1/accounts:signInWithPhoneNumber",Ms(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Co)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new ko({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){var t,n,r,i,s,o;const a=tr(nr(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,l=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);Is(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=tr(nr(e)).link,n=t?tr(nr(t)).deep_link_id:null,r=tr(nr(e)).deep_link_id;return(r?tr(nr(r)).link:null)||r||n||t||e}(e);try{return new No(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ro{constructor(){this.providerId=Ro.PROVIDER_ID}static credential(e,t){return _o._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=No.parseLink(t);return Is(n,"argument-error"),_o._fromEmailAndCode(e,n.code,n.tenantId)}}Ro.PROVIDER_ID="password",Ro.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ro.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do extends Oo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lo extends Do{constructor(){super("facebook.com")}static credential(e){return Ao._fromParams({providerId:Lo.PROVIDER_ID,signInMethod:Lo.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lo.credentialFromTaggedObject(e)}static credentialFromError(e){return Lo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Lo.credential(e.oauthAccessToken)}catch(e){return null}}}Lo.FACEBOOK_SIGN_IN_METHOD="facebook.com",Lo.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Po extends Do{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ao._fromParams({providerId:Po.PROVIDER_ID,signInMethod:Po.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Po.credentialFromTaggedObject(e)}static credentialFromError(e){return Po.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Po.credential(t,n)}catch(e){return null}}}Po.GOOGLE_SIGN_IN_METHOD="google.com",Po.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mo extends Do{constructor(){super("github.com")}static credential(e){return Ao._fromParams({providerId:Mo.PROVIDER_ID,signInMethod:Mo.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mo.credentialFromTaggedObject(e)}static credentialFromError(e){return Mo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Mo.credential(e.oauthAccessToken)}catch(e){return null}}}Mo.GITHUB_SIGN_IN_METHOD="github.com",Mo.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xo extends Do{constructor(){super("twitter.com")}static credential(e,t){return Ao._fromParams({providerId:xo.PROVIDER_ID,signInMethod:xo.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return xo.credentialFromTaggedObject(e)}static credentialFromError(e){return xo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return xo.credential(t,n)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Uo(e,t){return Fs(e,"POST","/v1/accounts:signUp",Ms(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xo.TWITTER_SIGN_IN_METHOD="twitter.com",xo.PROVIDER_ID="twitter.com";class Fo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Ys._fromIdTokenResponse(e,n,r),s=Vo(n);return new Fo({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Vo(n);return new Fo({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Vo(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bo extends Wn{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Bo.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Bo(e,t,n,r)}}function jo(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Bo._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qo(e,t,n=!1){const r=await Hs(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Fo._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function $o(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Hs(e,jo(r,i,t,e),n);Is(s.idToken,r,"internal-error");const o=zs(s.idToken);Is(o,r,"internal-error");const{sub:a}=o;return Is(e.uid===a,r,"user-mismatch"),Fo._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&vs(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(e,t,n=!1){const r="signIn",i=await jo(e,r,t),s=await Fo._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Ho(e,t){return zo(yo(e),t)}async function Ko(e,t,n){const r=yo(e),i=await Uo(r,{returnSecureToken:!0,email:t,password:n}),s=await Fo._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Go(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=ar(e),i={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await Hs(r,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){return xs(e,"POST","/v1/accounts:update",t)}(r.auth,i));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const o=r.providerData.find((({providerId:e})=>"password"===e));o&&(o.displayName=r.displayName,o.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wo{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo extends Wo{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=qn();return io(e)||lo(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=fo(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);ho()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qo.type="LOCAL";const Jo=Qo;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo extends Wo{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Yo.type="SESSION";const Xo=Yo;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Zo(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ea(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zo.receivers=[];class ta{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=ea("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ra(){return void 0!==na().WorkerGlobalScope&&"function"==typeof na().importScripts}class ia{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function sa(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function oa(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new ia(e).toPromise()}(),t(await oa()))}))}))}async function aa(e,t,n){const r=sa(e,!0).put({fbase_key:t,value:n});return new ia(r).toPromise()}function ca(e,t){const n=sa(e,!0).delete(t);return new ia(n).toPromise()}class ua{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await oa()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ra()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zo._getInstance(ra()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new ta(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await oa();return await aa(e,"__sak","1"),await ca(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>aa(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=sa(e,!1).get(t),r=await new ia(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>ca(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=sa(e,!1).getAll();return new ia(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ua.type="LOCAL";const la=ua;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(e){return new Promise(((t,n)=>{const r=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=ws("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function da(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
da("rcb"),new Rs(3e4,6e4);async function fa(e,t,n){var r;const i=await n.verify();try{let s;if(Is("string"==typeof i,e,"argument-error"),Is("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){Is("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return xs(e,"POST","/v2/accounts/mfaEnrollment:start",Ms(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{Is("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;Is(n,e,"missing-multi-factor-info");const o=await function(e,t){return xs(e,"POST","/v2/accounts/mfaSignIn:start",Ms(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return xs(e,"POST","/v1/accounts:sendVerificationCode",Ms(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pa{constructor(e){this.providerId=pa.PROVIDER_ID,this.auth=yo(e)}verifyPhoneNumber(e,t){return fa(this.auth,e,ar(t))}static credential(e,t){return ko._fromVerification(e,t)}static credentialFromResult(e){const t=e;return pa.credentialFromTaggedObject(t)}static credentialFromError(e){return pa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?ko._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ma(e,t){return t?As(t):(Is(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pa.PROVIDER_ID="phone",pa.PHONE_SIGN_IN_METHOD="phone";class ga extends Io{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return So(e,this._buildIdpRequest())}_linkToIdToken(e,t){return So(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return So(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ya(e){return zo(e.auth,new ga(e),e.bypassAuthState)}function va(e){const{auth:t,user:n}=e;return Is(n,t,"internal-error"),$o(n,new ga(e),e.bypassAuthState)}async function wa(e){const{auth:t,user:n}=e;return Is(n,t,"internal-error"),qo(n,new ga(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ya;case"linkViaPopup":case"linkViaRedirect":return wa;case"reauthViaPopup":case"reauthViaRedirect":return va;default:vs(this.auth,"internal-error")}}resolve(e){_s(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_s(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba=new Rs(2e3,1e4);class Ia extends Ea{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Ia.currentPopupAction&&Ia.currentPopupAction.cancel(),Ia.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Is(e,this.auth,"internal-error"),e}async onExecution(){_s(1===this.filter.length,"Popup operations only handle one event");const e=ea();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(ws(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(ws(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ia.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(ws(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,ba.get())};e()}}Ia.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ta=new Map;class _a extends Ea{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Ta.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Ca(t),r=Aa(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Ta.set(this.auth._key(),e)}return this.bypassAuthState||Ta.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Sa(e,t){Ta.set(e._key(),t)}function Aa(e){return As(e._redirectPersistence)}function Ca(e){return eo("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ka(e,t,n=!1){const r=yo(e),i=ma(r,t),s=new _a(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class Na{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Oa(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Oa(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(ws(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ra(e))}saveEventToCache(e){this.cachedEventUids.add(Ra(e)),this.lastProcessedEventTime=Date.now()}}function Ra(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Oa({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Da=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,La=/^https?/;async function Pa(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return xs(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Ma(e))return}catch(e){}vs(e,"unauthorized-domain")}function Ma(e){const t=Cs(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!La.test(n))return!1;if(Da.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa=new Rs(3e4,6e4);function Ua(){const e=na().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Fa=null;function Va(e){return Fa=Fa||function(e){return new Promise(((t,n)=>{var r,i,s;function o(){Ua(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ua(),n(ws(e,"network-request-failed"))},timeout:xa.get()})}if(null===(i=null===(r=na().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=na().gapi)||void 0===s?void 0:s.load)){const t=da("iframefcb");return na()[t]=()=>{gapi.load?o():n(ws(e,"network-request-failed"))},ha(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Fa=null,e}))}(e),Fa}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=new Rs(5e3,15e3),ja={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qa=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $a(e){const t=e.config;Is(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Os(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.19.1"},i=qa.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${er(r).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const za={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Ha{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Ka(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},za),{width:r.toString(),height:i.toString(),top:s,left:o}),u=qn().toLowerCase();n&&(a=so(u)?"_blank":n),ro(u)&&(t=t||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=qn()){var t;return lo(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new Ha(null);const h=window.open(t||"",a,l);Is(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Ha(h)}function Ga(e,t,n,r,i,s){Is(e.config.authDomain,e,"auth-domain-config-required"),Is(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.19.1",eventId:i};if(t instanceof Oo){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Yn(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Do){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?Os(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${er(a).slice(1)}`}const Wa=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xo,this._completeRedirectFn=ka,this._overrideRedirectResult=Sa}async _openPopup(e,t,n,r){var i;_s(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Ka(e,Ga(e,t,n,Cs(),r),ea())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=Ga(e,t,n,Cs(),r),na().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(_s(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Va(e),n=na().gapi;return Is(n,e,"internal-error"),t.open({where:document.body,url:$a(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ja,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=ws(e,"network-request-failed"),s=na().setTimeout((()=>{r(i)}),Ba.get());function o(){na().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}(e),n=new Na(e);return t.register("authEvent",(t=>{Is(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),vs(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Pa(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return fo()||io()||lo()}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qa{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Is(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ja=Vn("authIdTokenMaxAge")||300;let Ya=null;var Xa;Xa="Browser",qr(new cr("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:s}=n.options;return((e,n)=>{Is(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),Is(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:s,clientPlatform:Xa,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:po(Xa)},o=new go(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(As);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),qr(new cr("auth-internal",(e=>{const t=yo(e.getProvider("auth").getImmediate());return new Qa(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Wr("@firebase/auth","0.22.0",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Xa)),Wr("@firebase/auth","0.22.0","esm2017");var Za,ec="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},tc={},nc=nc||{},rc=ec||self;function ic(){}function sc(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function oc(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var ac="closure_uid_"+(1e9*Math.random()>>>0),cc=0;function uc(e,t,n){return e.call.apply(e.bind,arguments)}function lc(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function hc(e,t,n){return(hc=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?uc:lc).apply(null,arguments)}function dc(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function fc(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function pc(){this.s=this.s,this.o=this.o}pc.prototype.s=!1,pc.prototype.na=function(){var e;!this.s&&(this.s=!0,this.M(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,ac)&&e[ac]||(e[ac]=++cc))},pc.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const mc=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function gc(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function yc(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(sc(n)){const t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function vc(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}vc.prototype.h=function(){this.defaultPrevented=!0};var wc=function(){if(!rc.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{rc.addEventListener("test",ic,t),rc.removeEventListener("test",ic,t)}catch(e){}return e}();function Ec(e){return/^[\s\xa0]*$/.test(e)}var bc=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Ic(e,t){return e<t?-1:e>t?1:0}function Tc(){var e=rc.navigator;return e&&(e=e.userAgent)?e:""}function _c(e){return-1!=Tc().indexOf(e)}function Sc(e){return Sc[" "](e),e}Sc[" "]=ic;var Ac,Cc,kc=_c("Opera"),Nc=_c("Trident")||_c("MSIE"),Rc=_c("Edge"),Oc=Rc||Nc,Dc=_c("Gecko")&&!(-1!=Tc().toLowerCase().indexOf("webkit")&&!_c("Edge"))&&!(_c("Trident")||_c("MSIE"))&&!_c("Edge"),Lc=-1!=Tc().toLowerCase().indexOf("webkit")&&!_c("Edge");function Pc(){var e=rc.document;return e?e.documentMode:void 0}e:{var Mc="",xc=(Cc=Tc(),Dc?/rv:([^\);]+)(\)|;)/.exec(Cc):Rc?/Edge\/([\d\.]+)/.exec(Cc):Nc?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Cc):Lc?/WebKit\/(\S+)/.exec(Cc):kc?/(?:Version)[ \/]?(\S+)/.exec(Cc):void 0);if(xc&&(Mc=xc?xc[1]:""),Nc){var Uc=Pc();if(null!=Uc&&Uc>parseFloat(Mc)){Ac=String(Uc);break e}}Ac=Mc}var Fc,Vc={};function Bc(){return function(e){var t=Vc;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=bc(String(Ac)).split("."),n=bc("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=Ic(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||Ic(0==i[2].length,0==s[2].length)||Ic(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(rc.document&&Nc){var jc=Pc();Fc=jc||(parseInt(Ac,10)||void 0)}else Fc=void 0;var qc=Fc;function $c(e,t){if(vc.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Dc){e:{try{Sc(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:zc[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&$c.X.h.call(this)}}fc($c,vc);var zc={2:"touch",3:"pen",4:"mouse"};$c.prototype.h=function(){$c.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Hc="closure_listenable_"+(1e6*Math.random()|0),Kc=0;function Gc(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++Kc,this.ba=this.ea=!1}function Wc(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Qc(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Jc(e){const t={};for(const n in e)t[n]=e[n];return t}const Yc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xc(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<Yc.length;t++)n=Yc[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Zc(e){this.src=e,this.g={},this.h=0}function eu(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=mc(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Wc(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function tu(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}Zc.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=tu(e,t,r,i);return-1<o?(t=e[o],n||(t.ea=!1)):((t=new Gc(t,this.src,s,!!r,i)).ea=n,e.push(t)),t};var nu="closure_lm_"+(1e6*Math.random()|0),ru={};function iu(e,t,n,r,i){if(r&&r.once)return ou(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)iu(e,t[s],n,r,i);return null}return n=fu(n),e&&e[Hc]?e.N(t,n,oc(r)?!!r.capture:!!r,i):su(e,t,n,!1,r,i)}function su(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=oc(i)?!!i.capture:!!i,a=hu(e);if(a||(e[nu]=a=new Zc(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=lu;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)wc||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(uu(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ou(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ou(e,t[s],n,r,i);return null}return n=fu(n),e&&e[Hc]?e.O(t,n,oc(r)?!!r.capture:!!r,i):su(e,t,n,!0,r,i)}function au(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)au(e,t[s],n,r,i);else r=oc(r)?!!r.capture:!!r,n=fu(n),e&&e[Hc]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=tu(s=e.g[t],n,r,i))&&(Wc(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=hu(e))&&(t=e.g[t.toString()],e=-1,t&&(e=tu(t,n,r,i)),(n=-1<e?t[e]:null)&&cu(n))}function cu(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[Hc])eu(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(uu(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=hu(t))?(eu(n,e),0==n.h&&(n.src=null,t[nu]=null)):Wc(e)}}}function uu(e){return e in ru?ru[e]:ru[e]="on"+e}function lu(e,t){if(e.ba)e=!0;else{t=new $c(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&cu(e),e=n.call(r,t)}return e}function hu(e){return(e=e[nu])instanceof Zc?e:null}var du="__closure_events_fn_"+(1e9*Math.random()>>>0);function fu(e){return"function"==typeof e?e:(e[du]||(e[du]=function(t){return e.handleEvent(t)}),e[du])}function pu(){pc.call(this),this.i=new Zc(this),this.P=this,this.I=null}function mu(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new vc(t,e);else if(t instanceof vc)t.target=t.target||e;else{var i=t;Xc(t=new vc(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=gu(o,r,!0,t)&&i}if(i=gu(o=t.g=e,r,!0,t)&&i,i=gu(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=gu(o=t.g=n[s],r,!1,t)&&i}function gu(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&eu(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}fc(pu,pc),pu.prototype[Hc]=!0,pu.prototype.removeEventListener=function(e,t,n,r){au(this,e,t,n,r)},pu.prototype.M=function(){if(pu.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Wc(n[r]);delete t.g[e],t.h--}}this.I=null},pu.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},pu.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var yu=rc.JSON.stringify;function vu(){var e=Su;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var wu,Eu=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new bu),(e=>e.reset()));class bu{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Iu(e){rc.setTimeout((()=>{throw e}),0)}function Tu(e,t){wu||function(){var e=rc.Promise.resolve(void 0);wu=function(){e.then(Au)}}(),_u||(wu(),_u=!0),Su.add(e,t)}var _u=!1,Su=new class{constructor(){this.h=this.g=null}add(e,t){const n=Eu.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function Au(){for(var e;e=vu();){try{e.h.call(e.g)}catch(e){Iu(e)}var t=Eu;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}_u=!1}function Cu(e,t){pu.call(this),this.h=e||1,this.g=t||rc,this.j=hc(this.lb,this),this.l=Date.now()}function ku(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function Nu(e,t,n){if("function"==typeof e)n&&(e=hc(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=hc(e.handleEvent,e)}return 2147483647<Number(t)?-1:rc.setTimeout(e,t||0)}function Ru(e){e.g=Nu((()=>{e.g=null,e.i&&(e.i=!1,Ru(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}fc(Cu,pu),(Za=Cu.prototype).ca=!1,Za.R=null,Za.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),mu(this,"tick"),this.ca&&(ku(this),this.start()))}},Za.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Za.M=function(){Cu.X.M.call(this),ku(this),delete this.g};class Ou extends pc{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ru(this)}M(){super.M(),this.g&&(rc.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Du(e){pc.call(this),this.h=e,this.g={}}fc(Du,pc);var Lu=[];function Pu(e,t,n,r){Array.isArray(n)||(n&&(Lu[0]=n.toString()),n=Lu);for(var i=0;i<n.length;i++){var s=iu(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Mu(e){Qc(e.g,(function(e,t){this.g.hasOwnProperty(t)&&cu(e)}),e),e.g={}}function xu(){this.g=!0}function Uu(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return yu(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}Du.prototype.M=function(){Du.X.M.call(this),Mu(this)},Du.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},xu.prototype.Aa=function(){this.g=!1},xu.prototype.info=function(){};var Fu={},Vu=null;function Bu(){return Vu=Vu||new pu}function ju(e){vc.call(this,Fu.Pa,e)}function qu(e){const t=Bu();mu(t,new ju(t))}function $u(e,t){vc.call(this,Fu.STAT_EVENT,e),this.stat=t}function zu(e){const t=Bu();mu(t,new $u(t,e))}function Hu(e,t){vc.call(this,Fu.Qa,e),this.size=t}function Ku(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return rc.setTimeout((function(){e()}),t)}Fu.Pa="serverreachability",fc(ju,vc),Fu.STAT_EVENT="statevent",fc($u,vc),Fu.Qa="timingevent",fc(Hu,vc);var Gu={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Wu={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Qu(){}function Ju(e){return e.h||(e.h=e.i())}function Yu(){}Qu.prototype.h=null;var Xu,Zu={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function el(){vc.call(this,"d")}function tl(){vc.call(this,"c")}function nl(){}function rl(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new Du(this),this.O=sl,e=Oc?125:void 0,this.T=new Cu(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new il}function il(){this.i=null,this.g="",this.h=!1}fc(el,vc),fc(tl,vc),fc(nl,Qu),nl.prototype.g=function(){return new XMLHttpRequest},nl.prototype.i=function(){return{}},Xu=new nl;var sl=45e3,ol={},al={};function cl(e,t,n){e.K=1,e.v=Cl(Il(t)),e.s=n,e.P=!0,ul(e,null)}function ul(e,t){e.F=Date.now(),fl(e),e.A=Il(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),Bl(n.i,"t",r),e.C=0,n=e.l.H,e.h=new il,e.g=Vh(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Ou(hc(e.La,e,e.g),e.N)),Pu(e.S,e.g,"readystatechange",e.ib),t=e.H?Jc(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),qu(),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.U,e.s)}function ll(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function hl(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=dl(e,n),r==al){4==t&&(e.o=4,zu(14),i=!1),Uu(e.j,e.m,null,"[Incomplete Response]");break}if(r==ol){e.o=4,zu(15),Uu(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Uu(e.j,e.m,r,null),vl(e,r)}ll(e)&&r!=al&&r!=ol&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,zu(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Oh(t),t.K=!0,zu(11))):(Uu(e.j,e.m,n,"[Invalid Chunked Response]"),yl(e),gl(e))}function dl(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?al:(n=Number(t.substring(n,r)),isNaN(n)?ol:(r+=1)+n>t.length?al:(t=t.substr(r,n),e.C=r+n,t))}function fl(e){e.V=Date.now()+e.O,pl(e,e.O)}function pl(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Ku(hc(e.gb,e),t)}function ml(e){e.B&&(rc.clearTimeout(e.B),e.B=null)}function gl(e){0==e.l.G||e.I||Ph(e.l,e)}function yl(e){ml(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,ku(e.T),Mu(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function vl(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||Kl(n.h,e)))if(!e.J&&Kl(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Lh(n),Th(n)}Rh(n),zu(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=Ku(hc(n.cb,n),6e3));if(1>=Hl(n.h)&&n.ja){try{n.ja()}catch(e){}n.ja=void 0}}else xh(n,11)}else if((e.J||n.g==e)&&Lh(n),!Ec(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const t=u[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const i=u[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Gl(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.za=e,Al(r.F,r.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=e;if((r=n).sa=Fh(r,r.H?r.ka:null,r.V),o.J){Wl(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(ml(a),fl(a)),r.g=o}else Nh(r);0<n.i.length&&Sh(n)}else"stop"!=u[0]&&"close"!=u[0]||xh(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?xh(n,7):Ih(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}qu()}catch(e){}}function wl(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(sc(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(sc(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(sc(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}(Za=rl.prototype).setTimeout=function(e){this.O=e},Za.ib=function(e){e=e.target;const t=this.L;t&&3==gh(e)?t.l():this.La(e)},Za.La=function(e){try{if(e==this.g)e:{const l=gh(this.g);var t=this.g.Ea();this.g.aa();if(!(3>l)&&(3!=l||Oc||this.g&&(this.h.h||this.g.fa()||yh(this.g)))){this.I||4!=l||7==t||qu(),ml(this);var n=this.g.aa();this.Y=n;t:if(ll(this)){var r=yh(this.g);e="";var i=r.length,s=4==gh(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){yl(this),gl(this);var o="";break t}this.h.i=new rc.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ec(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,zu(12),yl(this),gl(this);break e}Uu(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,vl(this,n)}this.P?(hl(this,l,o),Oc&&this.i&&3==l&&(Pu(this.S,this.T,"tick",this.hb),this.T.start())):(Uu(this.j,this.m,o,null),vl(this,o)),4==l&&yl(this),this.i&&!this.I&&(4==l?Ph(this.l,this):(this.i=!1,fl(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,zu(12)):(this.o=0,zu(13)),yl(this),gl(this)}}}catch(e){}},Za.hb=function(){if(this.g){var e=gh(this.g),t=this.g.fa();this.C<t.length&&(ml(this),hl(this,e,t),this.i&&4!=e&&fl(this))}},Za.cancel=function(){this.I=!0,yl(this)},Za.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(qu(),zu(17)),yl(this),this.o=2,gl(this)):pl(this,this.V-e)};var El=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bl(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof bl){this.h=void 0!==t?t:e.h,Tl(this,e.j),this.s=e.s,this.g=e.g,_l(this,e.m),this.l=e.l,t=e.i;var n=new xl;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Sl(this,n),this.o=e.o}else e&&(n=String(e).match(El))?(this.h=!!t,Tl(this,n[1]||"",!0),this.s=kl(n[2]||""),this.g=kl(n[3]||"",!0),_l(this,n[4]),this.l=kl(n[5]||"",!0),Sl(this,n[6]||"",!0),this.o=kl(n[7]||"")):(this.h=!!t,this.i=new xl(null,this.h))}function Il(e){return new bl(e)}function Tl(e,t,n){e.j=n?kl(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function _l(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Sl(e,t,n){t instanceof xl?(e.i=t,function(e,t){t&&!e.j&&(Ul(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Fl(this,t),Bl(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=Nl(t,Pl)),e.i=new xl(t,e.h))}function Al(e,t,n){e.i.set(t,n)}function Cl(e){return Al(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function kl(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Nl(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Rl),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Rl(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}bl.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Nl(t,Ol,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Nl(t,Ol,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Nl(n,"/"==n.charAt(0)?Ll:Dl,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Nl(n,Ml)),e.join("")};var Ol=/[#\/\?@]/g,Dl=/[#\?:]/g,Ll=/[#\?]/g,Pl=/[#\?@]/g,Ml=/#/g;function xl(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ul(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Fl(e,t){Ul(e),t=jl(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Vl(e,t){return Ul(e),t=jl(e,t),e.g.has(t)}function Bl(e,t,n){Fl(e,t),0<n.length&&(e.i=null,e.g.set(jl(e,t),gc(n)),e.h+=n.length)}function jl(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(Za=xl.prototype).add=function(e,t){Ul(this),this.i=null,e=jl(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Za.forEach=function(e,t){Ul(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},Za.oa=function(){Ul(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},Za.W=function(e){Ul(this);let t=[];if("string"==typeof e)Vl(this,e)&&(t=t.concat(this.g.get(jl(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},Za.set=function(e,t){return Ul(this),this.i=null,Vl(this,e=jl(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Za.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},Za.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function ql(e){this.l=e||$l,rc.PerformanceNavigationTiming?e=0<(e=rc.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(rc.g&&rc.g.Ga&&rc.g.Ga()&&rc.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var $l=10;function zl(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Hl(e){return e.h?1:e.g?e.g.size:0}function Kl(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Gl(e,t){e.g?e.g.add(t):e.h=t}function Wl(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Ql(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return gc(e.i)}function Jl(){}function Yl(){this.g=new Jl}function Xl(e,t,n){const r=n||"";try{wl(e,(function(e,n){let i=e;oc(e)&&(i=yu(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function Zl(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function eh(e){this.l=e.ac||null,this.j=e.jb||!1}function th(e,t){pu.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=nh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ql.prototype.cancel=function(){if(this.i=Ql(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Jl.prototype.stringify=function(e){return rc.JSON.stringify(e,void 0)},Jl.prototype.parse=function(e){return rc.JSON.parse(e,void 0)},fc(eh,Qu),eh.prototype.g=function(){return new th(this.l,this.j)},eh.prototype.i=function(e){return function(){return e}}({}),fc(th,pu);var nh=0;function rh(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function ih(e){e.readyState=4,e.l=null,e.j=null,e.A=null,sh(e)}function sh(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(Za=th.prototype).open=function(e,t){if(this.readyState!=nh)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,sh(this)},Za.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||rc).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},Za.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ih(this)),this.readyState=nh},Za.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,sh(this)),this.g&&(this.readyState=3,sh(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==rc.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;rh(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},Za.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ih(this):sh(this),3==this.readyState&&rh(this)}},Za.Va=function(e){this.g&&(this.response=this.responseText=e,ih(this))},Za.Ua=function(e){this.g&&(this.response=e,ih(this))},Za.ga=function(){this.g&&ih(this)},Za.setRequestHeader=function(e,t){this.v.append(e,t)},Za.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Za.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(th.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var oh=rc.JSON.parse;function ah(e){pu.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ch,this.K=this.L=!1}fc(ah,pu);var ch="",uh=/^https?$/i,lh=["POST","PUT"];function hh(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,dh(e),ph(e)}function dh(e){e.D||(e.D=!0,mu(e,"complete"),mu(e,"error"))}function fh(e){if(e.h&&void 0!==nc&&(!e.C[1]||4!=gh(e)||2!=e.aa()))if(e.v&&4==gh(e))Nu(e.Ha,0,e);else if(mu(e,"readystatechange"),4==gh(e)){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.H).match(El)[1]||null;if(!i&&rc.self&&rc.self.location){var s=rc.self.location.protocol;i=s.substr(0,s.length-1)}r=!uh.test(i?i.toLowerCase():"")}n=r}if(n)mu(e,"complete"),mu(e,"success");else{e.m=6;try{var o=2<gh(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.aa()+"]",dh(e)}}finally{ph(e)}}}function ph(e,t){if(e.g){mh(e);const n=e.g,r=e.C[0]?ic:null;e.g=null,e.C=null,t||mu(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function mh(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(rc.clearTimeout(e.A),e.A=null)}function gh(e){return e.g?e.g.readyState:0}function yh(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case ch:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function vh(e){let t="";return Qc(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function wh(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=vh(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Al(e,t,n))}function Eh(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function bh(e){this.Ca=0,this.i=[],this.j=new xu,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Eh("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Eh("baseRetryDelayMs",5e3,e),this.bb=Eh("retryDelaySeedMs",1e4,e),this.$a=Eh("forwardChannelMaxRetries",2,e),this.ta=Eh("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new ql(e&&e.concurrentRequestLimit),this.Fa=new Yl,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Ih(e){if(_h(e),3==e.G){var t=e.U++,n=Il(e.F);Al(n,"SID",e.I),Al(n,"RID",t),Al(n,"TYPE","terminate"),Ch(e,n),(t=new rl(e,e.j,t,void 0)).K=2,t.v=Cl(Il(n)),n=!1,rc.navigator&&rc.navigator.sendBeacon&&(n=rc.navigator.sendBeacon(t.v.toString(),"")),!n&&rc.Image&&((new Image).src=t.v,n=!0),n||(t.g=Vh(t.l,null),t.g.da(t.v)),t.F=Date.now(),fl(t)}Uh(e)}function Th(e){e.g&&(Oh(e),e.g.cancel(),e.g=null)}function _h(e){Th(e),e.u&&(rc.clearTimeout(e.u),e.u=null),Lh(e),e.h.cancel(),e.m&&("number"==typeof e.m&&rc.clearTimeout(e.m),e.m=null)}function Sh(e){zl(e.h)||e.m||(e.m=!0,Tu(e.Ja,e),e.C=0)}function Ah(e,t){var n;n=t?t.m:e.U++;const r=Il(e.F);Al(r,"SID",e.I),Al(r,"RID",n),Al(r,"AID",e.T),Ch(e,r),e.o&&e.s&&wh(r,e.o,e.s),n=new rl(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=kh(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),Gl(e.h,n),cl(n,r,t)}function Ch(e,t){e.ia&&Qc(e.ia,(function(e,n){Al(t,n,e)})),e.l&&wl({},(function(e,n){Al(t,n,e)}))}function kh(e,t,n){n=Math.min(e.i.length,n);var r=e.l?hc(e.l.Ra,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{Xl(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function Nh(e){e.g||e.u||(e.Z=1,Tu(e.Ia,e),e.A=0)}function Rh(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=Ku(hc(e.Ia,e),Mh(e,e.A)),e.A++,!0)}function Oh(e){null!=e.B&&(rc.clearTimeout(e.B),e.B=null)}function Dh(e){e.g=new rl(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=Il(e.sa);Al(t,"RID","rpc"),Al(t,"SID",e.I),Al(t,"CI",e.L?"0":"1"),Al(t,"AID",e.T),Al(t,"TYPE","xmlhttp"),Ch(e,t),e.o&&e.s&&wh(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Cl(Il(t)),n.s=null,n.P=!0,ul(n,e)}function Lh(e){null!=e.v&&(rc.clearTimeout(e.v),e.v=null)}function Ph(e,t){var n=null;if(e.g==t){Lh(e),Oh(e),e.g=null;var r=2}else{if(!Kl(e.h,t))return;n=t.D,Wl(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;mu(r=Bu(),new Hu(r,n)),Sh(e)}else Nh(e);else if(3==(i=t.o)||0==i&&0<e.pa||!(1==r&&function(e,t){return!(Hl(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.C>=(e.Za?0:e.$a)||(e.m=Ku(hc(e.Ja,e,t),Mh(e,e.C)),e.C++,0)))}(e,t)||2==r&&Rh(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:xh(e,5);break;case 4:xh(e,10);break;case 3:xh(e,6);break;default:xh(e,2)}}function Mh(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function xh(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=hc(e.kb,e);n||(n=new bl("//www.google.com/images/cleardot.gif"),rc.location&&"http"==rc.location.protocol||Tl(n,"https"),Cl(n)),function(e,t){const n=new xu;if(rc.Image){const r=new Image;r.onload=dc(Zl,n,r,"TestLoadImage: loaded",!0,t),r.onerror=dc(Zl,n,r,"TestLoadImage: error",!1,t),r.onabort=dc(Zl,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=dc(Zl,n,r,"TestLoadImage: timeout",!1,t),rc.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else zu(2);e.G=0,e.l&&e.l.va(t),Uh(e),_h(e)}function Uh(e){if(e.G=0,e.la=[],e.l){const t=Ql(e.h);0==t.length&&0==e.i.length||(yc(e.la,t),yc(e.la,e.i),e.h.i.length=0,gc(e.i),e.i.length=0),e.l.ua()}}function Fh(e,t,n){var r=n instanceof bl?Il(n):new bl(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),_l(r,r.m);else{var i=rc.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new bl(null,void 0);r&&Tl(s,r),t&&(s.g=t),i&&_l(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.za,n&&t&&Al(r,n,t),Al(r,"VER",e.ma),Ch(e,r),r}function Vh(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Da&&!e.ra?new ah(new eh({jb:!0})):new ah(e.ra)).Ka(e.H),t}function Bh(){}function jh(){if(Nc&&!(10<=Number(qc)))throw Error("Environmental error: no available transport.")}function qh(e,t){pu.call(this),this.g=new bh(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!Ec(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Ec(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Hh(this)}function $h(e){el.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function zh(){tl.call(this),this.status=1}function Hh(e){this.g=e}(Za=ah.prototype).Ka=function(e){this.L=e},Za.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Xu.g(),this.C=this.u?Ju(this.u):Ju(Xu),this.g.onreadystatechange=hc(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void hh(this,e)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=rc.FormData&&e instanceof rc.FormData,!(0<=mc(lh,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{mh(this),0<this.B&&((this.K=function(e){return Nc&&Bc()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=hc(this.qa,this)):this.A=Nu(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){hh(this,e)}},Za.qa=function(){void 0!==nc&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,mu(this,"timeout"),this.abort(8))},Za.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,mu(this,"complete"),mu(this,"abort"),ph(this))},Za.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ph(this,!0)),ah.X.M.call(this)},Za.Ha=function(){this.s||(this.F||this.v||this.l?fh(this):this.fb())},Za.fb=function(){fh(this)},Za.aa=function(){try{return 2<gh(this)?this.g.status:-1}catch(e){return-1}},Za.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},Za.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),oh(t)}},Za.Ea=function(){return this.m},Za.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Za=bh.prototype).ma=8,Za.G=1,Za.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new rl(this,this.j,e,void 0);let s=this.s;if(this.S&&(s?(s=Jc(s),Xc(s,this.S)):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=kh(this,i,t),Al(n=Il(this.F),"RID",e),Al(n,"CVER",22),this.D&&Al(n,"X-HTTP-Session-Id",this.D),Ch(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(vh(s)))+"&"+t:this.o&&wh(n,this.o,s)),Gl(this.h,i),this.Ya&&Al(n,"TYPE","init"),this.O?(Al(n,"$req",t),Al(n,"SID","null"),i.Z=!0,cl(i,n,null)):cl(i,n,t),this.G=2}}else 3==this.G&&(e?Ah(this,e):0==this.i.length||zl(this.h)||Ah(this))},Za.Ia=function(){if(this.u=null,Dh(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Ku(hc(this.eb,this),e)}},Za.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,zu(10),Th(this),Dh(this))},Za.cb=function(){null!=this.v&&(this.v=null,Th(this),Rh(this),zu(19))},Za.kb=function(e){e?(this.j.info("Successfully pinged google.com"),zu(2)):(this.j.info("Failed to ping google.com"),zu(1))},(Za=Bh.prototype).xa=function(){},Za.wa=function(){},Za.va=function(){},Za.ua=function(){},Za.Ra=function(){},jh.prototype.g=function(e,t){return new qh(e,t)},fc(qh,pu),qh.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;zu(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Fh(e,null,e.V),Sh(e)},qh.prototype.close=function(){Ih(this.g)},qh.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=yu(e),e=n);t.i.push(new class{constructor(e,t){this.h=e,this.g=t}}(t.ab++,e)),3==t.G&&Sh(t)},qh.prototype.M=function(){this.g.l=null,delete this.j,Ih(this.g),delete this.g,qh.X.M.call(this)},fc($h,el),fc(zh,tl),fc(Hh,Bh),Hh.prototype.xa=function(){mu(this.g,"a")},Hh.prototype.wa=function(e){mu(this.g,new $h(e))},Hh.prototype.va=function(e){mu(this.g,new zh)},Hh.prototype.ua=function(){mu(this.g,"b")},jh.prototype.createWebChannel=jh.prototype.g,qh.prototype.send=qh.prototype.u,qh.prototype.open=qh.prototype.m,qh.prototype.close=qh.prototype.close,Gu.NO_ERROR=0,Gu.TIMEOUT=8,Gu.HTTP_ERROR=6,Wu.COMPLETE="complete",Yu.EventType=Zu,Zu.OPEN="a",Zu.CLOSE="b",Zu.ERROR="c",Zu.MESSAGE="d",pu.prototype.listen=pu.prototype.N,ah.prototype.listenOnce=ah.prototype.O,ah.prototype.getLastError=ah.prototype.Oa,ah.prototype.getLastErrorCode=ah.prototype.Ea,ah.prototype.getStatus=ah.prototype.aa,ah.prototype.getResponseJson=ah.prototype.Sa,ah.prototype.getResponseText=ah.prototype.fa,ah.prototype.send=ah.prototype.da,ah.prototype.setWithCredentials=ah.prototype.Ka;var Kh=tc.createWebChannelTransport=function(){return new jh},Gh=tc.getStatEventTarget=function(){return Bu()},Wh=tc.ErrorCode=Gu,Qh=tc.EventType=Wu,Jh=tc.Event=Fu,Yh=tc.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Xh=tc.FetchXmlHttpFactory=eh,Zh=tc.WebChannel=Yu,ed=tc.XhrIo=ah;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class td{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}td.UNAUTHENTICATED=new td(null),td.GOOGLE_CREDENTIALS=new td("google-credentials-uid"),td.FIRST_PARTY=new td("first-party-uid"),td.MOCK_USER=new td("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let nd="9.19.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=new vr("@firebase/firestore");function id(){return rd.logLevel}function sd(e,...t){if(rd.logLevel<=dr.DEBUG){const n=t.map(cd);rd.debug(`Firestore (${nd}): ${e}`,...n)}}function od(e,...t){if(rd.logLevel<=dr.ERROR){const n=t.map(cd);rd.error(`Firestore (${nd}): ${e}`,...n)}}function ad(e,...t){if(rd.logLevel<=dr.WARN){const n=t.map(cd);rd.warn(`Firestore (${nd}): ${e}`,...n)}}function cd(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(e="Unexpected state"){const t=`FIRESTORE (${nd}) INTERNAL ASSERTION FAILED: `+e;throw od(t),new Error(t)}function ld(e,t){e||ud()}function hd(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fd extends Wn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(td.UNAUTHENTICATED)))}shutdown(){}}class yd{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class vd{constructor(e){this.t=e,this.currentUser=td.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new pd;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new pd,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{sd("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(sd("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new pd)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(sd("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(ld("string"==typeof t.accessToken),new md(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ld(null===e||"string"==typeof e),new td(e)}}class wd{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=td.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Ed{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new wd(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(td.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class bd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Id{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=e=>{null!=e.error&&sd("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,sd("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{sd("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?r(e):sd("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(ld("string"==typeof e.token),this.T=e.token,new bd(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Td(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Td(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Sd(e,t){return e<t?-1:e>t?1:0}function Ad(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cd{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new fd(dd.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new fd(dd.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new fd(dd.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fd(dd.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Cd.fromMillis(Date.now())}static fromDate(e){return Cd.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Cd(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Sd(this.nanoseconds,e.nanoseconds):Sd(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e){this.timestamp=e}static fromTimestamp(e){return new kd(e)}static min(){return new kd(new Cd(0,0))}static max(){return new kd(new Cd(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,t,n){void 0===t?t=0:t>e.length&&ud(),void 0===n?n=e.length-t:n>e.length-t&&ud(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Nd.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Nd?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Rd extends Nd{construct(e,t,n){return new Rd(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new fd(dd.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Rd(t)}static emptyPath(){return new Rd([])}}const Od=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dd extends Nd{construct(e,t,n){return new Dd(e,t,n)}static isValidIdentifier(e){return Od.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dd.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Dd(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new fd(dd.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new fd(dd.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new fd(dd.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new fd(dd.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dd(t)}static emptyPath(){return new Dd([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e){this.path=e}static fromPath(e){return new Ld(Rd.fromString(e))}static fromName(e){return new Ld(Rd.fromString(e).popFirst(5))}static empty(){return new Ld(Rd.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Rd.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Rd.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ld(new Rd(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}Pd.UNKNOWN_ID=-1;function Md(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=kd.fromTimestamp(1e9===r?new Cd(n+1,0):new Cd(n,r));return new Ud(i,Ld.empty(),t)}function xd(e){return new Ud(e.readTime,e.key,-1)}class Ud{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Ud(kd.min(),Ld.empty(),-1)}static max(){return new Ud(kd.max(),Ld.empty(),-1)}}function Fd(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Ld.comparator(e.documentKey,t.documentKey),0!==n?n:Sd(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jd(e){if(e.code!==dd.FAILED_PRECONDITION||e.message!==Vd)throw e;sd("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ud(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new qd(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof qd?t:qd.resolve(t)}catch(e){return qd.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):qd.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):qd.reject(t)}static resolve(e){return new qd(((t,n)=>{t(e)}))}static reject(e){return new qd(((t,n)=>{n(e)}))}static waitFor(e){return new qd(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=qd.resolve(!1);for(const n of e)t=t.next((e=>e?qd.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new qd(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new qd(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}function Hd(e){return null==e}function Kd(e){return 0===e&&1/e==-1/0}function Gd(e){return"number"==typeof e&&Number.isInteger(e)&&!Kd(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zd.ct=-1;const Wd=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Qd=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Jd=Qd;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yd(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Xd(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Zd(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,t){this.comparator=e,this.root=t||nf.EMPTY}insert(e,t){return new ef(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,nf.BLACK,null,null))}remove(e){return new ef(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nf.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tf(this.root,e,this.comparator,!1)}getReverseIterator(){return new tf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tf(this.root,e,this.comparator,!0)}}class tf{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nf{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:nf.RED,this.left=null!=r?r:nf.EMPTY,this.right=null!=i?i:nf.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new nf(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return nf.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return nf.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nf.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nf.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ud();if(this.right.isRed())throw ud();const e=this.left.check();if(e!==this.right.check())throw ud();return e+(this.isRed()?0:1)}}nf.EMPTY=null,nf.RED=!0,nf.BLACK=!1,nf.EMPTY=new class{constructor(){this.size=0}get key(){throw ud()}get value(){throw ud()}get color(){throw ud()}get left(){throw ud()}get right(){throw ud()}copy(e,t,n,r,i){return this}insert(e,t,n){return new nf(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rf{constructor(e){this.comparator=e,this.data=new ef(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new sf(this.data.getIterator())}getIteratorFrom(e){return new sf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof rf))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new rf(this.comparator);return t.data=e,t}}class sf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class of{constructor(e){this.fields=e,e.sort(Dd.comparator)}static empty(){return new of([])}unionWith(e){let t=new rf(Dd.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new of(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ad(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cf{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new af("Invalid base64 string: "+e):e}}(e);return new cf(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new cf(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Sd(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}cf.EMPTY_BYTE_STRING=new cf("");const uf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function lf(e){if(ld(!!e),"string"==typeof e){let t=0;const n=uf.exec(e);if(ld(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:hf(e.seconds),nanos:hf(e.nanos)}}function hf(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function df(e){return"string"==typeof e?cf.fromBase64String(e):cf.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function pf(e){const t=e.mapValue.fields.__previous_value__;return ff(t)?pf(t):t}function mf(e){const t=lf(e.mapValue.fields.__local_write_time__.timestampValue);return new Cd(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class yf{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new yf("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof yf&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function wf(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ff(e)?4:Df(e)?9007199254740991:10:ud()}function Ef(e,t){if(e===t)return!0;const n=wf(e);if(n!==wf(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return mf(e).isEqual(mf(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=lf(e.timestampValue),r=lf(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,df(e.bytesValue).isEqual(df(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return hf(e.geoPointValue.latitude)===hf(t.geoPointValue.latitude)&&hf(e.geoPointValue.longitude)===hf(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return hf(e.integerValue)===hf(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=hf(e.doubleValue),r=hf(t.doubleValue);return n===r?Kd(n)===Kd(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Ad(e.arrayValue.values||[],t.arrayValue.values||[],Ef);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Yd(n)!==Yd(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!Ef(n[e],r[e])))return!1;return!0}(e,t);default:return ud()}var r}function bf(e,t){return void 0!==(e.values||[]).find((e=>Ef(e,t)))}function If(e,t){if(e===t)return 0;const n=wf(e),r=wf(t);if(n!==r)return Sd(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Sd(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=hf(e.integerValue||e.doubleValue),r=hf(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Tf(e.timestampValue,t.timestampValue);case 4:return Tf(mf(e),mf(t));case 5:return Sd(e.stringValue,t.stringValue);case 6:return function(e,t){const n=df(e),r=df(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=Sd(n[e],r[e]);if(0!==t)return t}return Sd(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Sd(hf(e.latitude),hf(t.latitude));return 0!==n?n:Sd(hf(e.longitude),hf(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=If(n[e],r[e]);if(t)return t}return Sd(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===vf.mapValue&&t===vf.mapValue)return 0;if(e===vf.mapValue)return 1;if(t===vf.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){const t=Sd(r[e],s[e]);if(0!==t)return t;const o=If(n[r[e]],i[s[e]]);if(0!==o)return o}return Sd(r.length,s.length)}(e.mapValue,t.mapValue);default:throw ud()}}function Tf(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Sd(e,t);const n=lf(e),r=lf(t),i=Sd(n.seconds,r.seconds);return 0!==i?i:Sd(n.nanos,r.nanos)}function _f(e){return Sf(e)}function Sf(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=lf(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?df(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Ld.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Sf(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Sf(e.fields[i])}`;return n+"}"}(e.mapValue):ud()}function Af(e){return!!e&&"integerValue"in e}function Cf(e){return!!e&&"arrayValue"in e}function kf(e){return!!e&&"nullValue"in e}function Nf(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Rf(e){return!!e&&"mapValue"in e}function Of(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Xd(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Of(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Of(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Df(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lf{constructor(e){this.value=e}static empty(){return new Lf({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Rf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Of(t)}setAll(e){let t=Dd.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Of(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Rf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ef(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Rf(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Xd(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new Lf(Of(this.value))}}function Pf(e){const t=[];return Xd(e.fields,((e,n)=>{const r=new Dd([e]);if(Rf(n)){const e=Pf(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new of(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Mf{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Mf(e,0,kd.min(),kd.min(),kd.min(),Lf.empty(),0)}static newFoundDocument(e,t,n,r){return new Mf(e,1,t,kd.min(),n,r,0)}static newNoDocument(e,t){return new Mf(e,2,t,kd.min(),kd.min(),Lf.empty(),0)}static newUnknownDocument(e,t){return new Mf(e,3,t,kd.min(),kd.min(),Lf.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(kd.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Lf.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Lf.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=kd.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Mf&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mf(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,t){this.position=e,this.inclusive=t}}function Uf(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Ld.comparator(Ld.fromName(o.referenceValue),n.key):If(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Ff(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Ef(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,t="asc"){this.field=e,this.dir=t}}function Bf(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{}class qf extends jf{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Jf(e,t,n):"array-contains"===t?new ep(e,n):"in"===t?new tp(e,n):"not-in"===t?new np(e,n):"array-contains-any"===t?new rp(e,n):new qf(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Yf(e,n):new Xf(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(If(t,this.value)):null!==t&&wf(this.value)===wf(t)&&this.matchesComparison(If(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ud()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class $f extends jf{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new $f(e,t)}matches(e){return zf(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt((e=>e.isInequality()));return null!==e?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function zf(e){return"and"===e.op}function Hf(e){return Kf(e)&&zf(e)}function Kf(e){for(const t of e.filters)if(t instanceof $f)return!1;return!0}function Gf(e){if(e instanceof qf)return e.field.canonicalString()+e.op.toString()+_f(e.value);if(Hf(e))return e.filters.map((e=>Gf(e))).join(",");{const t=e.filters.map((e=>Gf(e))).join(",");return`${e.op}(${t})`}}function Wf(e,t){return e instanceof qf?(n=e,(r=t)instanceof qf&&n.op===r.op&&n.field.isEqual(r.field)&&Ef(n.value,r.value)):e instanceof $f?function(e,t){return t instanceof $f&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&Wf(n,t.filters[r])),!0)}(e,t):void ud();var n,r}function Qf(e){return e instanceof qf?`${(t=e).field.canonicalString()} ${t.op} ${_f(t.value)}`:e instanceof $f?function(e){return e.op.toString()+" {"+e.getFilters().map(Qf).join(" ,")+"}"}(e):"Filter";var t}class Jf extends qf{constructor(e,t,n){super(e,t,n),this.key=Ld.fromName(n.referenceValue)}matches(e){const t=Ld.comparator(e.key,this.key);return this.matchesComparison(t)}}class Yf extends qf{constructor(e,t){super(e,"in",t),this.keys=Zf("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Xf extends qf{constructor(e,t){super(e,"not-in",t),this.keys=Zf("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Zf(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Ld.fromName(e.referenceValue)))}class ep extends qf{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Cf(t)&&bf(t.arrayValue,this.value)}}class tp extends qf{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&bf(this.value.arrayValue,t)}}class np extends qf{constructor(e,t){super(e,"not-in",t)}matches(e){if(bf(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!bf(this.value.arrayValue,t)}}class rp extends qf{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Cf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>bf(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ft=null}}function sp(e,t=null,n=[],r=[],i=null,s=null,o=null){return new ip(e,t,n,r,i,s,o)}function op(e){const t=hd(e);if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Gf(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),Hd(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>_f(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>_f(e))).join(",")),t.ft=e}return t.ft}function ap(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Bf(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Wf(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ff(e.startAt,t.startAt)&&Ff(e.endAt,t.endAt)}function cp(e){return Ld.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class up{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this.wt=null,this.startAt,this.endAt}}function lp(e,t,n,r,i,s,o,a){return new up(e,t,n,r,i,s,o,a)}function hp(e){return new up(e)}function dp(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function fp(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function pp(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function mp(e){return null!==e.collectionGroup}function gp(e){const t=hd(e);if(null===t.dt){t.dt=[];const e=pp(t),n=fp(t);if(null!==e&&null===n)e.isKeyField()||t.dt.push(new Vf(e)),t.dt.push(new Vf(Dd.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new Vf(Dd.keyField(),e))}}}return t.dt}function yp(e){const t=hd(e);if(!t.wt)if("F"===t.limitType)t.wt=sp(t.path,t.collectionGroup,gp(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of gp(t)){const t="desc"===n.dir?"asc":"desc";e.push(new Vf(n.field,t))}const n=t.endAt?new xf(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new xf(t.startAt.position,t.startAt.inclusive):null;t.wt=sp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.wt}function vp(e,t,n){return new up(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function wp(e,t){return ap(yp(e),yp(t))&&e.limitType===t.limitType}function Ep(e){return`${op(yp(e))}|lt:${e.limitType}`}function bp(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Qf(e))).join(", ")}]`),Hd(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>_f(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>_f(e))).join(",")),`Target(${t})`}(yp(e))}; limitType=${e.limitType})`}function Ip(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Ld.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of gp(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=Uf(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,gp(n),r)||n.endAt&&!function(e,t,n){const r=Uf(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,gp(n),r)));var n,r}function Tp(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function _p(e){return(t,n)=>{let r=!1;for(const i of gp(e)){const e=Sp(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Sp(e,t,n){const r=e.field.isKeyField()?Ld.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?If(r,i):ud()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return ud()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Xd(this.inner,((t,n)=>{for(const[t,r]of n)e(t,r)}))}isEmpty(){return Zd(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp=new ef(Ld.comparator);function kp(){return Cp}const Np=new ef(Ld.comparator);function Rp(...e){let t=Np;for(const n of e)t=t.insert(n.key,n);return t}function Op(e){let t=Np;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Dp(){return Pp()}function Lp(){return Pp()}function Pp(){return new Ap((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Mp=new ef(Ld.comparator),xp=new rf(Ld.comparator);function Up(...e){let t=xp;for(const n of e)t=t.add(n);return t}const Fp=new rf(Sd);function Vp(){return Fp}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kd(t)?"-0":t}}function jp(e){return{integerValue:""+e}}function qp(e,t){return Gd(t)?jp(t):Bp(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(){this._=void 0}}function zp(e,t,n){return e instanceof Gp?Wp(e,t):e instanceof Qp?Jp(e,t):n}function Hp(e,t){var n,r;return e instanceof Yp?Af(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null}class Kp extends $p{}class Gp extends $p{constructor(e){super(),this.elements=e}}function Wp(e,t){const n=Zp(t);for(const t of e.elements)n.some((e=>Ef(e,t)))||n.push(t);return{arrayValue:{values:n}}}class Qp extends $p{constructor(e){super(),this.elements=e}}function Jp(e,t){let n=Zp(t);for(const t of e.elements)n=n.filter((e=>!Ef(e,t)));return{arrayValue:{values:n}}}class Yp extends $p{constructor(e,t){super(),this.serializer=e,this._t=t}}function Xp(e){return hf(e.integerValue||e.doubleValue)}function Zp(e){return Cf(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,t){this.field=e,this.transform=t}}class tm{constructor(e,t){this.version=e,this.transformResults=t}}class nm{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new nm}static exists(e){return new nm(void 0,e)}static updateTime(e){return new nm(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rm(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class im{}function sm(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new mm(e.key,nm.none()):new lm(e.key,e.data,nm.none());{const n=e.data,r=Lf.empty();let i=new rf(Dd.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new hm(e.key,r,new of(i.toArray()),nm.none())}}function om(e,t,n){var r;e instanceof lm?function(e,t,n){const r=e.value.clone(),i=fm(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof hm?function(e,t,n){if(!rm(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=fm(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(dm(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function am(e,t,n,r){return e instanceof lm?function(e,t,n,r){if(!rm(e.precondition,t))return n;const i=e.value.clone(),s=pm(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof hm?function(e,t,n,r){if(!rm(e.precondition,t))return n;const i=pm(e.fieldTransforms,r,t),s=t.data;return s.setAll(dm(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):(i=t,s=n,rm(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):s);var i,s}function cm(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Hp(r.transform,e||null);null!=i&&(null===n&&(n=Lf.empty()),n.set(r.field,i))}return n||null}function um(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&Ad(n,r,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof Gp&&r instanceof Gp||n instanceof Qp&&r instanceof Qp?Ad(n.elements,r.elements,Ef):n instanceof Yp&&r instanceof Yp?Ef(n._t,r._t):n instanceof Kp&&r instanceof Kp);var n,r}(e,t)))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,r}class lm extends im{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class hm extends im{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function dm(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function fm(e,t,n){const r=new Map;ld(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,zp(o,a,n[i]))}return r}function pm(e,t,n){const r=new Map;for(const a of e){const e=a.transform,c=n.data.field(a.field);r.set(a.field,(s=c,o=t,(i=e)instanceof Kp?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(o,s):i instanceof Gp?Wp(i,s):i instanceof Qp?Jp(i,s):function(e,t){const n=Hp(e,t),r=Xp(n)+Xp(e._t);return Af(n)&&Af(e._t)?jp(r):Bp(e.serializer,r)}(i,s)))}var i,s,o;return r}class mm extends im{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gm extends im{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&om(r,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=am(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=am(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Lp();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=sm(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(kd.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Up())}isEqual(e){return this.batchId===e.batchId&&Ad(this.mutations,e.mutations,((e,t)=>um(e,t)))&&Ad(this.baseMutations,e.baseMutations,((e,t)=>um(e,t)))}}class vm{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){ld(e.mutations.length===n.length);let r=Mp;const i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new vm(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Em{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bm,Im;function Tm(e){switch(e){default:return ud();case dd.CANCELLED:case dd.UNKNOWN:case dd.DEADLINE_EXCEEDED:case dd.RESOURCE_EXHAUSTED:case dd.INTERNAL:case dd.UNAVAILABLE:case dd.UNAUTHENTICATED:return!1;case dd.INVALID_ARGUMENT:case dd.NOT_FOUND:case dd.ALREADY_EXISTS:case dd.PERMISSION_DENIED:case dd.FAILED_PRECONDITION:case dd.ABORTED:case dd.OUT_OF_RANGE:case dd.UNIMPLEMENTED:case dd.DATA_LOSS:return!0}}function _m(e){if(void 0===e)return od("GRPC error has no .code"),dd.UNKNOWN;switch(e){case bm.OK:return dd.OK;case bm.CANCELLED:return dd.CANCELLED;case bm.UNKNOWN:return dd.UNKNOWN;case bm.DEADLINE_EXCEEDED:return dd.DEADLINE_EXCEEDED;case bm.RESOURCE_EXHAUSTED:return dd.RESOURCE_EXHAUSTED;case bm.INTERNAL:return dd.INTERNAL;case bm.UNAVAILABLE:return dd.UNAVAILABLE;case bm.UNAUTHENTICATED:return dd.UNAUTHENTICATED;case bm.INVALID_ARGUMENT:return dd.INVALID_ARGUMENT;case bm.NOT_FOUND:return dd.NOT_FOUND;case bm.ALREADY_EXISTS:return dd.ALREADY_EXISTS;case bm.PERMISSION_DENIED:return dd.PERMISSION_DENIED;case bm.FAILED_PRECONDITION:return dd.FAILED_PRECONDITION;case bm.ABORTED:return dd.ABORTED;case bm.OUT_OF_RANGE:return dd.OUT_OF_RANGE;case bm.UNIMPLEMENTED:return dd.UNIMPLEMENTED;case bm.DATA_LOSS:return dd.DATA_LOSS;default:return ud()}}(Im=bm||(bm={}))[Im.OK=0]="OK",Im[Im.CANCELLED=1]="CANCELLED",Im[Im.UNKNOWN=2]="UNKNOWN",Im[Im.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Im[Im.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Im[Im.NOT_FOUND=5]="NOT_FOUND",Im[Im.ALREADY_EXISTS=6]="ALREADY_EXISTS",Im[Im.PERMISSION_DENIED=7]="PERMISSION_DENIED",Im[Im.UNAUTHENTICATED=16]="UNAUTHENTICATED",Im[Im.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Im[Im.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Im[Im.ABORTED=10]="ABORTED",Im[Im.OUT_OF_RANGE=11]="OUT_OF_RANGE",Im[Im.UNIMPLEMENTED=12]="UNIMPLEMENTED",Im[Im.INTERNAL=13]="INTERNAL",Im[Im.UNAVAILABLE=14]="UNAVAILABLE",Im[Im.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sm{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Am}static getOrCreateInstance(){return null===Am&&(Am=new Sm),Am}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}}let Am=null;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,km.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Cm(kd.min(),r,Vp(),kp(),Up())}}class km{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new km(n,t,Up(),Up(),Up())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,t,n,r){this.It=e,this.removedTargetIds=t,this.key=n,this.Tt=r}}class Rm{constructor(e,t){this.targetId=e,this.Et=t}}class Om{constructor(e,t,n=cf.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Dm{constructor(){this.At=0,this.Rt=Mm(),this.vt=cf.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return 0!==this.At}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=Up(),t=Up(),n=Up();return this.Rt.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:ud()}})),new km(this.vt,this.bt,e,t,n)}xt(){this.Pt=!1,this.Rt=Mm()}Nt(e,t){this.Pt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class Lm{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=kp(),this.qt=Pm(),this.Ut=new rf(Sd)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}zt(e){this.forEachTarget(e,(t=>{const n=this.jt(t);switch(e.state){case 0:this.Wt(t)&&n.Dt(e.resumeToken);break;case 1:n.$t(),n.Vt||n.xt(),n.Dt(e.resumeToken);break;case 2:n.$t(),n.Vt||this.removeTarget(t);break;case 3:this.Wt(t)&&(n.Mt(),n.Dt(e.resumeToken));break;case 4:this.Wt(t)&&(this.Ht(t),n.Dt(e.resumeToken));break;default:ud()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach(((e,n)=>{this.Wt(n)&&t(n)}))}Jt(e){var t;const n=e.targetId,r=e.Et.count,i=this.Yt(n);if(i){const s=i.target;if(cp(s))if(0===r){const e=new Ld(s.path);this.Qt(n,e,Mf.newNoDocument(e,kd.min()))}else ld(1===r);else{const i=this.Zt(n);i!==r&&(this.Ht(n),this.Ut=this.Ut.add(n),null===(t=Sm.instance)||void 0===t||t.notifyOnExistenceFilterMismatch({localCacheCount:i,existenceFilterCount:e.Et.count}))}}}Xt(e){const t=new Map;this.Bt.forEach(((n,r)=>{const i=this.Yt(r);if(i){if(n.current&&cp(i.target)){const t=new Ld(i.target.path);null!==this.Lt.get(t)||this.te(r,t)||this.Qt(r,t,Mf.newNoDocument(t,e))}n.St&&(t.set(r,n.Ct()),n.xt())}}));let n=Up();this.qt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Yt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Lt.forEach(((t,n)=>n.setReadTime(e)));const r=new Cm(e,t,this.Ut,this.Lt,n);return this.Lt=kp(),this.qt=Pm(),this.Ut=new rf(Sd),r}Gt(e,t){if(!this.Wt(e))return;const n=this.te(e,t.key)?2:0;this.jt(e).Nt(t.key,n),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,n){if(!this.Wt(e))return;const r=this.jt(e);this.te(e,t)?r.Nt(t,1):r.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),n&&(this.Lt=this.Lt.insert(t,n))}removeTarget(e){this.Bt.delete(e)}Zt(e){const t=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let t=this.Bt.get(e);return t||(t=new Dm,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new rf(Sd),this.qt=this.qt.insert(e,t)),t}Wt(e){const t=null!==this.Yt(e);return t||sd("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Dm),this.Ft.getRemoteKeysForTarget(e).forEach((t=>{this.Qt(e,t,null)}))}te(e,t){return this.Ft.getRemoteKeysForTarget(e).has(t)}}function Pm(){return new ef(Ld.comparator)}function Mm(){return new ef(Ld.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm={asc:"ASCENDING",desc:"DESCENDING"},Um={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Fm={and:"AND",or:"OR"};class Vm{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Bm(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function jm(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function qm(e,t){return Bm(e,t.toTimestamp())}function $m(e){return ld(!!e),kd.fromTimestamp(function(e){const t=lf(e);return new Cd(t.seconds,t.nanos)}(e))}function zm(e,t){return(n=e,new Rd(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function Hm(e){const t=Rd.fromString(e);return ld(lg(t)),t}function Km(e,t){return zm(e.databaseId,t.path)}function Gm(e,t){const n=Hm(t);if(n.get(1)!==e.databaseId.projectId)throw new fd(dd.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new fd(dd.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Ld(Ym(n))}function Wm(e,t){return zm(e.databaseId,t)}function Qm(e){const t=Hm(e);return 4===t.length?Rd.emptyPath():Ym(t)}function Jm(e){return new Rd(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Ym(e){return ld(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Xm(e,t,n){return{name:Km(e,t),fields:n.value.mapValue.fields}}function Zm(e,t){let n;if(t instanceof lm)n={update:Xm(e,t.key,t.value)};else if(t instanceof mm)n={delete:Km(e,t.key)};else if(t instanceof hm)n={update:Xm(e,t.key,t.data),updateMask:ug(t.fieldMask)};else{if(!(t instanceof gm))return ud();n={verify:Km(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Kp)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Gp)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Qp)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Yp)return{fieldPath:t.field.canonicalString(),increment:n._t};throw ud()}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:qm(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:ud())),n;var r,i}function eg(e,t){return{documents:[Wm(e,t.path)]}}function tg(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Wm(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Wm(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return cg($f.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>{return{field:og((t=e).field),direction:ig(t.dir)};var t}))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=(a=e,c=t.limit,a.useProto3Json||Hd(c)?c:{value:c});var a,c,u;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(u=t.startAt).inclusive,values:u.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function ng(e){let t=Qm(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ld(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=rg(e);return t instanceof $f&&Hf(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>{return new Vf(ag((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Hd(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new xf(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new xf(n,t)}(n.endAt)),lp(t,i,o,s,a,"F",c,u)}function rg(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=ag(e.unaryFilter.field);return qf.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=ag(e.unaryFilter.field);return qf.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ag(e.unaryFilter.field);return qf.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ag(e.unaryFilter.field);return qf.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ud()}}(e):void 0!==e.fieldFilter?(n=e,qf.create(ag(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ud()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==e.compositeFilter?(t=e,$f.create(t.compositeFilter.filters.map((e=>rg(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return ud()}}(t.compositeFilter.op))):ud();var t,n}function ig(e){return xm[e]}function sg(e){return Um[e]}function og(e){return{fieldPath:e.canonicalString()}}function ag(e){return Dd.fromServerFormat(e.fieldPath)}function cg(e){return e instanceof qf?function(e){if("=="===e.op){if(Nf(e.value))return{unaryFilter:{field:og(e.field),op:"IS_NAN"}};if(kf(e.value))return{unaryFilter:{field:og(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Nf(e.value))return{unaryFilter:{field:og(e.field),op:"IS_NOT_NAN"}};if(kf(e.value))return{unaryFilter:{field:og(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:og(e.field),op:sg(e.op),value:e.value}}}(e):e instanceof $f?function(e){const t=e.getFilters().map((e=>cg(e)));return 1===t.length?t[0]:{compositeFilter:{op:(n=e.op,Fm[n]),filters:t}};var n}(e):ud()}function ug(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function lg(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,t,n,r,i=kd.min(),s=kd.min(),o=cf.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new hg(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new hg(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new hg(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e){this.se=e}}function fg(e){const t=ng({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?vp(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(){}oe(e,t){this.ue(e,t),t.ce()}ue(e,t){if("nullValue"in e)this.ae(t,5);else if("booleanValue"in e)this.ae(t,10),t.he(e.booleanValue?1:0);else if("integerValue"in e)this.ae(t,15),t.he(hf(e.integerValue));else if("doubleValue"in e){const n=hf(e.doubleValue);isNaN(n)?this.ae(t,13):(this.ae(t,15),Kd(n)?t.he(0):t.he(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ae(t,20),"string"==typeof n?t.le(n):(t.le(`${n.seconds||""}`),t.he(n.nanos||0))}else if("stringValue"in e)this.fe(e.stringValue,t),this.de(t);else if("bytesValue"in e)this.ae(t,30),t.we(df(e.bytesValue)),this.de(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ae(t,45),t.he(n.latitude||0),t.he(n.longitude||0)}else"mapValue"in e?Df(e)?this.ae(t,Number.MAX_SAFE_INTEGER):(this.me(e.mapValue,t),this.de(t)):"arrayValue"in e?(this.ge(e.arrayValue,t),this.de(t)):ud()}fe(e,t){this.ae(t,25),this.ye(e,t)}ye(e,t){t.le(e)}me(e,t){const n=e.fields||{};this.ae(t,55);for(const e of Object.keys(n))this.fe(e,t),this.ue(n[e],t)}ge(e,t){const n=e.values||[];this.ae(t,50);for(const e of n)this.ue(e,t)}_e(e,t){this.ae(t,37),Ld.fromName(e).path.forEach((e=>{this.ae(t,60),this.ye(e,t)}))}ae(e,t){e.he(t)}de(e){e.he(2)}}pg.pe=new pg;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mg{constructor(){this.He=new gg}addToCollectionParentIndex(e,t){return this.He.add(t),qd.resolve()}getCollectionParents(e,t){return qd.resolve(this.He.getEntries(t))}addFieldIndex(e,t){return qd.resolve()}deleteFieldIndex(e,t){return qd.resolve()}getDocumentsMatchingTarget(e,t){return qd.resolve(null)}getIndexType(e,t){return qd.resolve(0)}getFieldIndexes(e,t){return qd.resolve([])}getNextCollectionGroupToUpdate(e){return qd.resolve(null)}getMinOffset(e,t){return qd.resolve(Ud.min())}getMinOffsetFromCollectionGroup(e,t){return qd.resolve(Ud.min())}updateCollectionGroup(e,t,n){return qd.resolve()}updateIndexEntries(e,t){return qd.resolve()}}class gg{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new rf(Rd.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new rf(Rd.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class yg{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new yg(e,yg.DEFAULT_COLLECTION_PERCENTILE,yg.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yg.DEFAULT_COLLECTION_PERCENTILE=10,yg.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yg.DEFAULT=new yg(41943040,yg.DEFAULT_COLLECTION_PERCENTILE,yg.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yg.DISABLED=new yg(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vg{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new vg(0)}static bn(){return new vg(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wg{constructor(){this.changes=new Ap((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Mf.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?qd.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eg{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&am(n.mutation,e,of.empty(),Cd.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Up()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Up()){const r=Dp();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Rp();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Dp();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Up())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=kp();const s=Pp(),o=Pp();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof hm)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),am(o.mutation,t,o.mutation.getFieldMask(),Cd.now())):s.set(t.key,of.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Eg(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Pp();let r=new ef(((e,t)=>e-t)),i=Up();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||of.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||Up()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Lp();c.forEach((e=>{if(!i.has(e)){const r=sm(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return qd.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return r=t,Ld.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):mp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n);var r}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):qd.resolve(Dp());let o=-1,a=i;return s.next((t=>qd.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?qd.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,Up()))).next((e=>({batchId:o,changes:Op(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ld(t)).next((e=>{let t=Rp();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=Rp();return this.indexManager.getCollectionParents(e,r).next((s=>qd.forEach(s,(s=>{const o=(a=t,c=s.child(r),new up(c,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,c;return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r)))).next((e=>{r.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,Mf.newInvalidDocument(r)))}));let n=Rp();return e.forEach(((e,i)=>{const s=r.get(e);void 0!==s&&am(s.mutation,i,of.empty(),Cd.now()),Ip(t,i)&&(n=n.insert(e,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return qd.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:$m(n.createTime)}),qd.resolve()}getNamedQuery(e,t){return qd.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,{name:(n=t).name,query:fg(n.bundledQuery),readTime:$m(n.readTime)}),qd.resolve();var n}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(){this.overlays=new ef(Ld.comparator),this.ts=new Map}getOverlay(e,t){return qd.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Dp();return qd.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.re(e,t,r)})),qd.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.ts.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.ts.delete(n)),qd.resolve()}getOverlaysForCollection(e,t,n){const r=Dp(),i=t.length+1,s=new Ld(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return qd.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new ef(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Dp(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Dp(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=r)););return qd.resolve(o)}re(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.ts.get(r.largestBatchId).delete(n.key);this.ts.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new wm(t,n));let i=this.ts.get(t);void 0===i&&(i=Up(),this.ts.set(t,i)),this.ts.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(){this.es=new rf(Sg.ns),this.ss=new rf(Sg.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,t){const n=new Sg(e,t);this.es=this.es.add(n),this.ss=this.ss.add(n)}os(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.us(new Sg(e,t))}cs(e,t){e.forEach((e=>this.removeReference(e,t)))}hs(e){const t=new Ld(new Rd([])),n=new Sg(t,e),r=new Sg(t,e+1),i=[];return this.ss.forEachInRange([n,r],(e=>{this.us(e),i.push(e.key)})),i}ls(){this.es.forEach((e=>this.us(e)))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const t=new Ld(new Rd([])),n=new Sg(t,e),r=new Sg(t,e+1);let i=Up();return this.ss.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Sg(e,0),n=this.es.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Sg{constructor(e,t){this.key=e,this.ds=t}static ns(e,t){return Ld.comparator(e.key,t.key)||Sd(e.ds,t.ds)}static rs(e,t){return Sd(e.ds,t.ds)||Ld.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this._s=new rf(Sg.ns)}checkEmpty(e){return qd.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new ym(i,t,n,r);this.mutationQueue.push(s);for(const t of r)this._s=this._s.add(new Sg(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return qd.resolve(s)}lookupMutationBatch(e,t){return qd.resolve(this.gs(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ys(n),i=r<0?0:r;return qd.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return qd.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return qd.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Sg(t,0),r=new Sg(t,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([n,r],(e=>{const t=this.gs(e.ds);i.push(t)})),qd.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new rf(Sd);return t.forEach((e=>{const t=new Sg(e,0),r=new Sg(e,Number.POSITIVE_INFINITY);this._s.forEachInRange([t,r],(e=>{n=n.add(e.ds)}))})),qd.resolve(this.ps(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Ld.isDocumentKey(i)||(i=i.child(""));const s=new Sg(new Ld(i),0);let o=new rf(Sd);return this._s.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.ds)),!0)}),s),qd.resolve(this.ps(o))}ps(e){const t=[];return e.forEach((e=>{const n=this.gs(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){ld(0===this.Is(t.batchId,"removed")),this.mutationQueue.shift();let n=this._s;return qd.forEach(t.mutations,(r=>{const i=new Sg(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this._s=n}))}En(e){}containsKey(e,t){const n=new Sg(t,0),r=this._s.firstAfterOrEqual(n);return qd.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,qd.resolve()}Is(e,t){return this.ys(e)}ys(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}gs(e){const t=this.ys(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e){this.Ts=e,this.docs=new ef(Ld.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Ts(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return qd.resolve(n?n.document.mutableCopy():Mf.newInvalidDocument(t))}getEntries(e,t){let n=kp();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Mf.newInvalidDocument(e))})),qd.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=kp();const s=t.path,o=new Ld(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||Fd(xd(o),n)<=0||(r.has(o.key)||Ip(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return qd.resolve(i)}getAllFromCollectionGroup(e,t,n,r){ud()}Es(e,t){return qd.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new kg(this)}getSize(e){return qd.resolve(this.size)}}class kg extends wg{constructor(e){super(),this.Jn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Jn.addEntry(e,r)):this.Jn.removeEntry(n)})),qd.waitFor(t)}getFromCache(e,t){return this.Jn.getEntry(e,t)}getAllFromCache(e,t){return this.Jn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e){this.persistence=e,this.As=new Ap((e=>op(e)),ap),this.lastRemoteSnapshotVersion=kd.min(),this.highestTargetId=0,this.Rs=0,this.vs=new _g,this.targetCount=0,this.bs=vg.vn()}forEachTarget(e,t){return this.As.forEach(((e,n)=>t(n))),qd.resolve()}getLastRemoteSnapshotVersion(e){return qd.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return qd.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),qd.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Rs&&(this.Rs=t),qd.resolve()}Sn(e){this.As.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.bs=new vg(t),this.highestTargetId=t),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,t){return this.Sn(t),this.targetCount+=1,qd.resolve()}updateTargetData(e,t){return this.Sn(t),qd.resolve()}removeTargetData(e,t){return this.As.delete(t.target),this.vs.hs(t.targetId),this.targetCount-=1,qd.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.As.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.As.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),qd.waitFor(i).next((()=>r))}getTargetCount(e){return qd.resolve(this.targetCount)}getTargetData(e,t){const n=this.As.get(t)||null;return qd.resolve(n)}addMatchingKeys(e,t,n){return this.vs.os(t,n),qd.resolve()}removeMatchingKeys(e,t,n){this.vs.cs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),qd.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.vs.hs(t),qd.resolve()}getMatchingKeysForTargetId(e,t){const n=this.vs.fs(t);return qd.resolve(n)}containsKey(e,t){return qd.resolve(this.vs.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e,t){this.Ps={},this.overlays={},this.Vs=new zd(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new Ng(this),this.indexManager=new mg,this.remoteDocumentCache=new Cg((e=>this.referenceDelegate.Cs(e))),this.serializer=new dg(t),this.xs=new Ig(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Tg,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Ps[e.toKey()];return n||(n=new Ag(t,this.referenceDelegate),this.Ps[e.toKey()]=n),n}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,t,n){sd("MemoryPersistence","Starting transaction:",e);const r=new Og(this.Vs.next());return this.referenceDelegate.Ns(),n(r).next((e=>this.referenceDelegate.ks(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Os(e,t){return qd.or(Object.values(this.Ps).map((n=>()=>n.containsKey(e,t))))}}class Og extends Bd{constructor(e){super(),this.currentSequenceNumber=e}}class Dg{constructor(e){this.persistence=e,this.$s=new _g,this.Ms=null}static Fs(e){return new Dg(e)}get Bs(){if(this.Ms)return this.Ms;throw ud()}addReference(e,t,n){return this.$s.addReference(n,t),this.Bs.delete(n.toString()),qd.resolve()}removeReference(e,t,n){return this.$s.removeReference(n,t),this.Bs.add(n.toString()),qd.resolve()}markPotentiallyOrphaned(e,t){return this.Bs.add(t.toString()),qd.resolve()}removeTarget(e,t){this.$s.hs(t.targetId).forEach((e=>this.Bs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Bs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Ns(){this.Ms=new Set}ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return qd.forEach(this.Bs,(n=>{const r=Ld.fromPath(n);return this.Ls(e,r).next((e=>{e||t.removeEntry(r,kd.min())}))})).next((()=>(this.Ms=null,t.apply(e))))}updateLimboDocument(e,t){return this.Ls(e,t).next((e=>{e?this.Bs.delete(t.toString()):this.Bs.add(t.toString())}))}Cs(e){return 0}Ls(e,t){return qd.or([()=>qd.resolve(this.$s.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Os(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lg{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Vi=n,this.Si=r}static Di(e,t){let n=Up(),r=Up();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new Lg(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(){this.Ci=!1}initialize(e,t){this.xi=e,this.indexManager=t,this.Ci=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ni(e,t).next((i=>i||this.ki(e,t,r,n))).next((n=>n||this.Oi(e,t)))}Ni(e,t){if(dp(t))return qd.resolve(null);let n=yp(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=vp(t,null,"F"),n=yp(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=Up(...r);return this.xi.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.$i(t,r);return this.Mi(t,s,i,n.readTime)?this.Ni(e,vp(t,null,"F")):this.Fi(e,s,t,n)}))))})))))}ki(e,t,n,r){return dp(t)||r.isEqual(kd.min())?this.Oi(e,t):this.xi.getDocuments(e,n).next((i=>{const s=this.$i(t,i);return this.Mi(t,s,n,r)?this.Oi(e,t):(id()<=dr.DEBUG&&sd("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),bp(t)),this.Fi(e,s,t,Md(r,-1)))}))}$i(e,t){let n=new rf(_p(e));return t.forEach(((t,r)=>{Ip(e,r)&&(n=n.add(r))})),n}Mi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,t){return id()<=dr.DEBUG&&sd("QueryEngine","Using full collection scan to execute query:",bp(t)),this.xi.getDocumentsMatchingQuery(e,t,Ud.min())}Fi(e,t,n,r){return this.xi.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,t,n,r){this.persistence=e,this.Bi=t,this.serializer=r,this.Li=new ef(Sd),this.qi=new Ap((e=>op(e)),ap),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(n)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bg(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Li)))}}function xg(e,t,n,r){return new Mg(e,t,n,r)}async function Ug(e,t){const n=hd(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.Gi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=Up();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({Qi:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function Fg(e){const t=hd(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Ds.getLastRemoteSnapshotVersion(e)))}function Vg(e,t,n){let r=Up(),i=Up();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=kp();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(kd.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):sd("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{zi:r,ji:i}}))}function Bg(e,t){const n=hd(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function jg(e,t){const n=hd(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Ds.getTargetData(e,t).next((i=>i?(r=i,qd.resolve(r)):n.Ds.allocateTargetId(e).next((i=>(r=new hg(t,i,0,e.currentSequenceNumber),n.Ds.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Li.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(e.targetId,e),n.qi.set(t,e.targetId)),e}))}async function qg(e,t,n){const r=hd(e),i=r.Li.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!$d(e))throw e;sd("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Li=r.Li.remove(t),r.qi.delete(i.target)}function $g(e,t,n){const r=hd(e);let i=kd.min(),s=Up();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=hd(e),i=r.qi.get(n);return void 0!==i?qd.resolve(r.Li.get(i)):r.Ds.getTargetData(t,n)}(r,e,yp(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Ds.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Bi.getDocumentsMatchingQuery(e,t,n?i:kd.min(),n?s:Up()))).next((e=>(zg(r,Tp(t),e),{documents:e,Wi:s})))))}function zg(e,t,n){let r=e.Ui.get(t)||kd.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Ui.set(t,r)}class Hg{constructor(){this.activeTargetIds=Vp()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Kg{constructor(){this.Br=new Hg,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,t,n){this.Lr[e]=t}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Hg,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{qr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){sd("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){sd("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qg=null;function Jg(){return null===Qg?Qg=268435456+Math.round(2147483648*Math.random()):Qg++,"0x"+Qg.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Yg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.ro=t+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,t,n,r,i){const s=Jg(),o=this.ao(e,t);sd("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={};return this.ho(a,r,i),this.lo(e,o,a,n).then((t=>(sd("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw ad("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}fo(e,t,n,r,i,s){return this.co(e,t,n,r,i)}ho(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+nd,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ao(e,t){const n=Yg[e];return`${this.ro}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,t,n,r){const i=Jg();return new Promise(((s,o)=>{const a=new ed;a.setWithCredentials(!0),a.listenOnce(Qh.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Wh.NO_ERROR:const t=a.getResponseJson();sd("WebChannelConnection",`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case Wh.TIMEOUT:sd("WebChannelConnection",`RPC '${e}' ${i} timed out`),o(new fd(dd.DEADLINE_EXCEEDED,"Request time out"));break;case Wh.HTTP_ERROR:const n=a.getStatus();if(sd("WebChannelConnection",`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(dd).indexOf(t)>=0?t:dd.UNKNOWN}(t.status);o(new fd(e,t.message))}else o(new fd(dd.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new fd(dd.UNAVAILABLE,"Connection failed."));break;default:ud()}}finally{sd("WebChannelConnection",`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(r);sd("WebChannelConnection",`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)}))}wo(e,t,n){const r=Jg(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Kh(),o=Gh(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Xh({})),this.ho(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const c=i.join("");sd("WebChannelConnection",`Creating RPC '${e}' stream ${r}: ${c}`,a);const u=s.createWebChannel(c,a);let l=!1,h=!1;const d=new Xg({Wr:t=>{h?sd("WebChannelConnection",`Not sending because RPC '${e}' stream ${r} is closed:`,t):(l||(sd("WebChannelConnection",`Opening RPC '${e}' stream ${r} transport.`),u.open(),l=!0),sd("WebChannelConnection",`RPC '${e}' stream ${r} sending:`,t),u.send(t))},Hr:()=>u.close()}),f=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return f(u,Zh.EventType.OPEN,(()=>{h||sd("WebChannelConnection",`RPC '${e}' stream ${r} transport opened.`)})),f(u,Zh.EventType.CLOSE,(()=>{h||(h=!0,sd("WebChannelConnection",`RPC '${e}' stream ${r} transport closed`),d.so())})),f(u,Zh.EventType.ERROR,(t=>{h||(h=!0,ad("WebChannelConnection",`RPC '${e}' stream ${r} transport errored:`,t),d.so(new fd(dd.UNAVAILABLE,"The operation could not be completed")))})),f(u,Zh.EventType.MESSAGE,(t=>{var n;if(!h){const i=t.data[0];ld(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){sd("WebChannelConnection",`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=bm[e];if(void 0!==t)return _m(t)}(t),i=o.message;void 0===n&&(n=dd.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),h=!0,d.so(new fd(n,i)),u.close()}else sd("WebChannelConnection",`RPC '${e}' stream ${r} received:`,i),d.io(i)}})),f(o,Jh.STAT_EVENT,(t=>{t.stat===Yh.PROXY?sd("WebChannelConnection",`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===Yh.NOPROXY&&sd("WebChannelConnection",`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{d.no()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(e){return new Vm(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Ws=e,this.timerId=t,this._o=n,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const t=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),r=Math.max(0,t-n);r>0&&sd("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,(()=>(this.To=Date.now(),e()))),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,t,n,r,i,s,o,a){this.Ws=e,this.bo=n,this.Po=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new ny(e,t)}xo(){return 1===this.state||5===this.state||this.No()}No(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&null===this.So&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,(()=>this.Mo())))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,t){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,4!==e?this.Co.reset():t&&t.code===dd.RESOURCE_EXHAUSTED?(od(t.toString()),od("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):t&&t.code===dd.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),t=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Vo===t&&this.Ko(e,n)}),(t=>{e((()=>{const e=new fd(dd.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Go(e)}))}))}Ko(e,t){const n=this.Uo(this.Vo);this.stream=this.Qo(e,t),this.stream.Jr((()=>{n((()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,(()=>(this.No()&&(this.state=3),Promise.resolve()))),this.listener.Jr())))})),this.stream.Zr((e=>{n((()=>this.Go(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}ko(){this.state=5,this.Co.Ao((async()=>{this.state=0,this.start()}))}Go(e){return sd("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return t=>{this.Ws.enqueueAndForget((()=>this.Vo===e?t():(sd("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class iy extends ry{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}Qo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Co.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:ud(),s=t.targetChange.targetIds||[],o=function(e,t){return e.useProto3Json?(ld(void 0===t||"string"==typeof t),cf.fromBase64String(t||"")):(ld(void 0===t||t instanceof Uint8Array),cf.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(e){const t=void 0===e.code?dd.UNKNOWN:_m(e.code);return new fd(t,e.message||"")}(a);n=new Om(i,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Gm(e,r.document.name),s=$m(r.document.updateTime),o=r.document.createTime?$m(r.document.createTime):kd.min(),a=new Lf({mapValue:{fields:r.document.fields}}),c=Mf.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Nm(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Gm(e,r.document),s=r.readTime?$m(r.readTime):kd.min(),o=Mf.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Nm([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Gm(e,r.document),s=r.removedTargetIds||[];n=new Nm([],s,i,null)}else{if(!("filter"in t))return ud();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new Em(r),s=e.targetId;n=new Rm(s,i)}}var r;return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return kd.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?kd.min():t.readTime?$m(t.readTime):kd.min()}(e);return this.listener.zo(t,n)}jo(e){const t={};t.database=Jm(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;return n=cp(r)?{documents:eg(e,r)}:{query:tg(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=jm(e,t.resumeToken):t.snapshotVersion.compareTo(kd.min())>0&&(n.readTime=Bm(e,t.snapshotVersion.toTimestamp())),n}(this.serializer,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ud()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.Fo(t)}Wo(e){const t={};t.database=Jm(this.serializer),t.removeTarget=e,this.Fo(t)}}class sy extends ry{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(ld(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(ld(void 0!==n),t.map((e=>function(e,t){let n=e.updateTime?$m(e.updateTime):$m(t);return n.isEqual(kd.min())&&(n=$m(t)),new tm(n,e.transformResults||[])}(e,n)))):[]),i=$m(e.commitTime);return this.listener.Zo(i,r)}var t,n;return ld(!e.writeResults||0===e.writeResults.length),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Jm(this.serializer),this.Fo(e)}Yo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Zm(this.serializer,e)))};this.Fo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new fd(dd.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,n){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.co(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===dd.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new fd(dd.UNKNOWN,e.toString())}))}fo(e,t,n,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.fo(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===dd.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new fd(dd.UNKNOWN,e.toString())}))}terminate(){this.eu=!0}}class ay{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){0===this.su&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve()))))}au(e){"Online"===this.state?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,"Online"===e&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(od(t),this.ru=!1):sd("OnlineStateTracker",t)}hu(){null!==this.iu&&(this.iu.cancel(),this.iu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr((e=>{n.enqueueAndForget((async()=>{yy(this)&&(sd("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=hd(e);t.du.add(4),await ly(t),t.mu.set("Unknown"),t.du.delete(4),await uy(t)}(this))}))})),this.mu=new ay(n,r)}}async function uy(e){if(yy(e))for(const t of e.wu)await t(!0)}async function ly(e){for(const t of e.wu)await t(!1)}function hy(e,t){const n=hd(e);n.fu.has(t.targetId)||(n.fu.set(t.targetId,t),gy(n)?my(n):My(n).No()&&fy(n,t))}function dy(e,t){const n=hd(e),r=My(n);n.fu.delete(t),r.No()&&py(n,t),0===n.fu.size&&(r.No()?r.$o():yy(n)&&n.mu.set("Unknown"))}function fy(e,t){e.gu.Ot(t.targetId),My(e).jo(t)}function py(e,t){e.gu.Ot(t),My(e).Wo(t)}function my(e){e.gu=new Lm({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.fu.get(t)||null}),My(e).start(),e.mu.ou()}function gy(e){return yy(e)&&!My(e).xo()&&e.fu.size>0}function yy(e){return 0===hd(e).du.size}function vy(e){e.gu=void 0}async function wy(e){e.fu.forEach(((t,n)=>{fy(e,t)}))}async function Ey(e,t){vy(e),gy(e)?(e.mu.au(t),my(e)):e.mu.set("Unknown")}async function by(e,t,n){if(e.mu.set("Online"),t instanceof Om&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.fu.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.fu.delete(r),e.gu.removeTarget(r))}(e,t)}catch(n){sd("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Iy(e,n)}else if(t instanceof Nm?e.gu.Kt(t):t instanceof Rm?e.gu.Jt(t):e.gu.zt(t),!n.isEqual(kd.min()))try{const t=await Fg(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.gu.Xt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.fu.get(r);i&&e.fu.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.fu.get(t);if(!n)return;e.fu.set(t,n.withResumeToken(cf.EMPTY_BYTE_STRING,n.snapshotVersion)),py(e,t);const r=new hg(n.target,t,1,n.sequenceNumber);fy(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){sd("RemoteStore","Failed to raise snapshot:",t),await Iy(e,t)}}async function Iy(e,t,n){if(!$d(t))throw t;e.du.add(1),await ly(e),e.mu.set("Offline"),n||(n=()=>Fg(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{sd("RemoteStore","Retrying IndexedDB access"),await n(),e.du.delete(1),await uy(e)}))}function Ty(e,t){return t().catch((n=>Iy(e,n,t)))}async function _y(e){const t=hd(e),n=xy(t);let r=t.lu.length>0?t.lu[t.lu.length-1].batchId:-1;for(;Sy(t);)try{const e=await Bg(t.localStore,r);if(null===e){0===t.lu.length&&n.$o();break}r=e.batchId,Ay(t,e)}catch(e){await Iy(t,e)}Cy(t)&&ky(t)}function Sy(e){return yy(e)&&e.lu.length<10}function Ay(e,t){e.lu.push(t);const n=xy(e);n.No()&&n.Jo&&n.Yo(t.mutations)}function Cy(e){return yy(e)&&!xy(e).xo()&&e.lu.length>0}function ky(e){xy(e).start()}async function Ny(e){xy(e).tu()}async function Ry(e){const t=xy(e);for(const n of e.lu)t.Yo(n.mutations)}async function Oy(e,t,n){const r=e.lu.shift(),i=vm.from(r,t,n);await Ty(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await _y(e)}async function Dy(e,t){t&&xy(e).Jo&&await async function(e,t){if(Tm(n=t.code)&&n!==dd.ABORTED){const n=e.lu.shift();xy(e).Oo(),await Ty(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await _y(e)}var n}(e,t),Cy(e)&&ky(e)}async function Ly(e,t){const n=hd(e);n.asyncQueue.verifyOperationInProgress(),sd("RemoteStore","RemoteStore received new credentials");const r=yy(n);n.du.add(3),await ly(n),r&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.du.delete(3),await uy(n)}async function Py(e,t){const n=hd(e);t?(n.du.delete(2),await uy(n)):t||(n.du.add(2),await ly(n),n.mu.set("Unknown"))}function My(e){return e.yu||(e.yu=function(e,t,n){const r=hd(e);return r.nu(),new iy(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Jr:wy.bind(null,e),Zr:Ey.bind(null,e),zo:by.bind(null,e)}),e.wu.push((async t=>{t?(e.yu.Oo(),gy(e)?my(e):e.mu.set("Unknown")):(await e.yu.stop(),vy(e))}))),e.yu}function xy(e){return e.pu||(e.pu=function(e,t,n){const r=hd(e);return r.nu(),new sy(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Jr:Ny.bind(null,e),Zr:Dy.bind(null,e),Xo:Ry.bind(null,e),Zo:Oy.bind(null,e)}),e.wu.push((async t=>{t?(e.pu.Oo(),await _y(e)):(await e.pu.stop(),e.lu.length>0&&(sd("RemoteStore",`Stopping write stream with ${e.lu.length} pending writes`),e.lu=[]))}))),e.pu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Uy{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new pd,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Uy(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new fd(dd.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fy(e,t){if(od("AsyncQueue",`${t}: ${e}`),$d(e))return new fd(dd.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Ld.comparator(t.key,n.key):(e,t)=>Ld.comparator(e.key,t.key),this.keyedMap=Rp(),this.sortedSet=new ef(this.comparator)}static emptySet(e){return new Vy(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Vy))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Vy;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(){this.Iu=new ef(Ld.comparator)}track(e){const t=e.doc.key,n=this.Iu.get(t);n?0!==e.type&&3===n.type?this.Iu=this.Iu.insert(t,e):3===e.type&&1!==n.type?this.Iu=this.Iu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Iu=this.Iu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Iu=this.Iu.remove(t):1===e.type&&2===n.type?this.Iu=this.Iu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):ud():this.Iu=this.Iu.insert(t,e)}Tu(){const e=[];return this.Iu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class jy{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new jy(e,t,Vy.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wp(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(){this.Eu=void 0,this.listeners=[]}}class $y{constructor(){this.queries=new Ap((e=>Ep(e)),wp),this.onlineState="Unknown",this.Au=new Set}}async function zy(e,t){const n=hd(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new qy),i)try{s.Eu=await n.onListen(r)}catch(e){const n=Fy(e,`Initialization of query '${bp(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.Ru(n.onlineState),s.Eu&&t.vu(s.Eu)&&Wy(n)}async function Hy(e,t){const n=hd(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Ky(e,t){const n=hd(e);let r=!1;for(const e of t){const t=e.query,i=n.queries.get(t);if(i){for(const t of i.listeners)t.vu(e)&&(r=!0);i.Eu=e}}r&&Wy(n)}function Gy(e,t,n){const r=hd(e),i=r.queries.get(t);if(i)for(const e of i.listeners)e.onError(n);r.queries.delete(t)}function Wy(e){e.Au.forEach((e=>{e.next()}))}class Qy{constructor(e,t,n){this.query=e,this.bu=t,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=n||{}}vu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new jy(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),t=!0):this.Du(e,this.onlineState)&&(this.Cu(e),t=!0),this.Vu=e,t}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),t=!0),t}Du(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.xu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Su(e){if(e.docChanges.length>0)return!0;const t=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Cu(e){e=jy.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jy{constructor(e){this.key=e}}class Yy{constructor(e){this.key=e}}class Xy{constructor(e,t){this.query=e,this.Lu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=Up(),this.mutatedKeys=Up(),this.Ku=_p(e),this.Gu=new Vy(this.Ku)}get Qu(){return this.Lu}zu(e,t){const n=t?t.ju:new By,r=t?t.Gu:this.Gu;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=Ip(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Wu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Ku(l,a)>0||c&&this.Ku(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Gu:s,ju:n,Mi:o,mutatedKeys:i}}Wu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.ju.Tu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ud()}};return n(e)-n(t)}(e.type,t.type)||this.Ku(e.doc,t.doc))),this.Hu(n);const s=t?this.Ju():[],o=0===this.Uu.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==i.length||a?{snapshot:new jy(this.query,e.Gu,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Yu:s}:{Yu:s}}Ru(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new By,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach((e=>this.Lu=this.Lu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Lu=this.Lu.delete(e))),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=Up(),this.Gu.forEach((e=>{this.Zu(e.key)&&(this.Uu=this.Uu.add(e.key))}));const t=[];return e.forEach((e=>{this.Uu.has(e)||t.push(new Yy(e))})),this.Uu.forEach((n=>{e.has(n)||t.push(new Jy(n))})),t}Xu(e){this.Lu=e.Wi,this.Uu=Up();const t=this.zu(e.documents);return this.applyChanges(t,!0)}tc(){return jy.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class Zy{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class ev{constructor(e){this.key=e,this.ec=!1}}class tv{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.nc={},this.sc=new Ap((e=>Ep(e)),wp),this.ic=new Map,this.rc=new Set,this.oc=new ef(Ld.comparator),this.uc=new Map,this.cc=new _g,this.ac={},this.hc=new Map,this.lc=vg.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}async function nv(e,t){const n=Ev(e);let r,i;const s=n.sc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const e=await jg(n.localStore,yp(t));n.isPrimaryClient&&hy(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await rv(n,t,r,"current"===s,e.resumeToken)}return i}async function rv(e,t,n,r,i){e.dc=(t,n,r)=>async function(e,t,n,r){let i=t.view.zu(n);i.Mi&&(i=await $g(e.localStore,t.query,!1).then((({documents:e})=>t.view.zu(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return pv(e,t.targetId,o.Yu),o.snapshot}(e,t,n,r);const s=await $g(e.localStore,t,!0),o=new Xy(t,s.Wi),a=o.zu(s.documents),c=km.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);pv(e,n,u.Yu);const l=new Zy(t,n,o);return e.sc.set(t,l),e.ic.has(n)?e.ic.get(n).push(t):e.ic.set(n,[t]),u.snapshot}async function iv(e,t){const n=hd(e),r=n.sc.get(t),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter((e=>!wp(e,t)))),void n.sc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await qg(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),dy(n.remoteStore,r.targetId),dv(n,r.targetId)})).catch(jd)):(dv(n,r.targetId),await qg(n.localStore,r.targetId,!0))}async function sv(e,t){const n=hd(e);try{const e=await function(e,t){const n=hd(e),r=t.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Ds.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Ds.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);var l,h,d;t.targetMismatches.has(a)?u=u.withResumeToken(cf.EMPTY_BYTE_STRING,kd.min()).withLastLimboFreeSnapshotVersion(kd.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),h=u,d=s,(0===(l=c).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Ds.updateTargetData(e,u))}));let a=kp(),c=Up();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(Vg(e,s,t.documentUpdates).next((e=>{a=e.zi,c=e.ji}))),!r.isEqual(kd.min())){const t=n.Ds.getLastRemoteSnapshotVersion(e).next((t=>n.Ds.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return qd.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.Li=i,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.uc.get(t);r&&(ld(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.ec=!0:e.modifiedDocuments.size>0?ld(r.ec):e.removedDocuments.size>0&&(ld(r.ec),r.ec=!1))})),await yv(n,e,t)}catch(e){await jd(e)}}function ov(e,t,n){const r=hd(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.sc.forEach(((n,r)=>{const i=r.view.Ru(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=hd(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.Ru(t)&&(r=!0)})),r&&Wy(n)}(r.eventManager,t),e.length&&r.nc.zo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function av(e,t,n){const r=hd(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.uc.get(t),s=i&&i.key;if(s){let e=new ef(Ld.comparator);e=e.insert(s,Mf.newNoDocument(s,kd.min()));const n=Up().add(s),i=new Cm(kd.min(),new Map,new rf(Sd),e,n);await sv(r,i),r.oc=r.oc.remove(s),r.uc.delete(t),gv(r)}else await qg(r.localStore,t,!1).then((()=>dv(r,t,n))).catch(jd)}async function cv(e,t){const n=hd(e),r=t.batch.batchId;try{const e=await function(e,t){const n=hd(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Ki.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=qd.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);ld(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Up();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(n.localStore,t);hv(n,r,null),lv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await yv(n,e)}catch(e){await jd(e)}}async function uv(e,t,n){const r=hd(e);try{const e=await function(e,t){const n=hd(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(ld(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);hv(r,t,n),lv(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await yv(r,e)}catch(e){await jd(e)}}function lv(e,t){(e.hc.get(t)||[]).forEach((e=>{e.resolve()})),e.hc.delete(t)}function hv(e,t,n){const r=hd(e);let i=r.ac[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.ac[r.currentUser.toKey()]=i}}function dv(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ic.get(t))e.sc.delete(r),n&&e.nc.wc(r,n);e.ic.delete(t),e.isPrimaryClient&&e.cc.hs(t).forEach((t=>{e.cc.containsKey(t)||fv(e,t)}))}function fv(e,t){e.rc.delete(t.path.canonicalString());const n=e.oc.get(t);null!==n&&(dy(e.remoteStore,n),e.oc=e.oc.remove(t),e.uc.delete(n),gv(e))}function pv(e,t,n){for(const r of n)r instanceof Jy?(e.cc.addReference(r.key,t),mv(e,r)):r instanceof Yy?(sd("SyncEngine","Document no longer in limbo: "+r.key),e.cc.removeReference(r.key,t),e.cc.containsKey(r.key)||fv(e,r.key)):ud()}function mv(e,t){const n=t.key,r=n.path.canonicalString();e.oc.get(n)||e.rc.has(r)||(sd("SyncEngine","New document in limbo: "+n),e.rc.add(r),gv(e))}function gv(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){const t=e.rc.values().next().value;e.rc.delete(t);const n=new Ld(Rd.fromString(t)),r=e.lc.next();e.uc.set(r,new ev(n)),e.oc=e.oc.insert(n,r),hy(e.remoteStore,new hg(yp(hp(n.path)),r,2,zd.ct))}}async function yv(e,t,n){const r=hd(e),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach(((e,a)=>{o.push(r.dc(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=Lg.Di(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.nc.zo(i),await async function(e,t){const n=hd(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>qd.forEach(t,(t=>qd.forEach(t.Vi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>qd.forEach(t.Si,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!$d(e))throw e;sd("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Li.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Li=n.Li.insert(t,i)}}}(r.localStore,s))}async function vv(e,t){const n=hd(e);if(!n.currentUser.isEqual(t)){sd("SyncEngine","User change. New user:",t.toKey());const e=await Ug(n.localStore,t);n.currentUser=t,(r=n).hc.forEach((e=>{e.forEach((e=>{e.reject(new fd(dd.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.hc.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await yv(n,e.Qi)}var r}function wv(e,t){const n=hd(e),r=n.uc.get(t);if(r&&r.ec)return Up().add(r.key);{let e=Up();const r=n.ic.get(t);if(!r)return e;for(const t of r){const r=n.sc.get(t);e=e.unionWith(r.view.Qu)}return e}}function Ev(e){const t=hd(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=sv.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=wv.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=av.bind(null,t),t.nc.zo=Ky.bind(null,t.eventManager),t.nc.wc=Gy.bind(null,t.eventManager),t}function bv(e){const t=hd(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=cv.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=uv.bind(null,t),t}class Iv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ty(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return xg(this.persistence,new Pg,e.initialUser,this.serializer)}createPersistence(e){return new Rg(Dg.Fs,this.serializer)}createSharedClientState(e){return new Kg}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Tv{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>ov(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=vv.bind(null,this.syncEngine),await Py(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new $y}createDatastore(e){const t=ty(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Zg(r));var r,i,s;return i=e.authCredentials,s=e.appCheckCredentials,new oy(i,s,n,t)}createRemoteStore(e){var t,n,r,i,s;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>ov(this.syncEngine,e,0),s=Wg.D()?new Wg:new Gg,new cy(t,n,r,i,s)}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new tv(e,t,n,r,i,s);return o&&(a.fc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=hd(e);sd("RemoteStore","RemoteStore shutting down."),t.du.add(5),await ly(t),t._u.shutdown(),t.mu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _v{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):od("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sv{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=td.UNAUTHENTICATED,this.clientId=_d.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{sd("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(sd("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new fd(dd.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pd;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Fy(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Av(e,t){e.asyncQueue.verifyOperationInProgress(),sd("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await Ug(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Cv(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Nv(e);sd("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>Ly(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Ly(t.remoteStore,n))),e._onlineComponents=t}function kv(e){return"FirebaseError"===e.name?e.code===dd.FAILED_PRECONDITION||e.code===dd.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Nv(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){sd("FirestoreClient","Using user provided OfflineComponentProvider");try{await Av(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!kv(n))throw n;ad("Error using user provided cache. Falling back to memory cache: "+n),await Av(e,new Iv)}}else sd("FirestoreClient","Using default OfflineComponentProvider"),await Av(e,new Iv);return e._offlineComponents}async function Rv(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(sd("FirestoreClient","Using user provided OnlineComponentProvider"),await Cv(e,e._uninitializedComponentsProvider._online)):(sd("FirestoreClient","Using default OnlineComponentProvider"),await Cv(e,new Tv))),e._onlineComponents}function Ov(e){return Rv(e).then((e=>e.syncEngine))}async function Dv(e){const t=await Rv(e),n=t.eventManager;return n.onListen=nv.bind(null,t.syncEngine),n.onUnlisten=iv.bind(null,t.syncEngine),n}function Lv(e,t,n={}){const r=new pd;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new _v({next:s=>{t.enqueueAndForget((()=>Hy(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new fd(dd.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new fd(dd.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Qy(hp(n.path),s,{includeMetadataChanges:!0,xu:!0});return zy(e,o)}(await Dv(e),e.asyncQueue,t,n,r))),r.promise}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pv=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(e,t,n){if(!n)throw new fd(dd.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function xv(e){if(!Ld.isDocumentKey(e))throw new fd(dd.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Uv(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":ud()}function Fv(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new fd(dd.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Uv(e);throw new fd(dd.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vv{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new fd(dd.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new fd(dd.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new fd(dd.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new fd(dd.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new fd(dd.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vv(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new gd;switch(e.type){case"firstParty":return new Ed(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new fd(dd.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Pv.get(e);t&&(sd("ComponentProvider","Removing Datastore"),Pv.delete(e),t.terminate())}(this),Promise.resolve()}}function jv(e,t,n,r={}){var i;const s=(e=Fv(e,Bv))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&ad("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=td.MOCK_USER;else{t=jn(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new fd(dd.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new td(s)}e._authCredentials=new yd(new md(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zv(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qv(this.firestore,e,this._key)}}class $v{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new $v(this.firestore,e,this._query)}}class zv extends $v{constructor(e,t,n){super(e,t,hp(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qv(this.firestore,null,new Ld(e))}withConverter(e){return new zv(this.firestore,e,this._path)}}function Hv(e,t,...n){if(e=ar(e),1===arguments.length&&(t=_d.A()),Mv("doc","path",t),e instanceof Bv){const r=Rd.fromString(t,...n);return xv(r),new qv(e,null,new Ld(r))}{if(!(e instanceof qv||e instanceof zv))throw new fd(dd.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Rd.fromString(t,...n));return xv(r),new qv(e.firestore,e instanceof zv?e.converter:null,new Ld(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kv{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new ny(this,"async_queue_retry"),this.qc=()=>{const e=ey();e&&sd("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Co.vo()};const e=ey();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const t=ey();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise((()=>{}));const t=new pd;return this.Kc((()=>this.Oc&&this.Bc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.kc.push(e),this.Gc())))}async Gc(){if(0!==this.kc.length){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!$d(e))throw e;sd("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao((()=>this.Gc()))}}Kc(e){const t=this.Nc.then((()=>(this.Fc=!0,e().catch((e=>{this.Mc=e,this.Fc=!1;throw od("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.Fc=!1,e))))));return this.Nc=t,t}enqueueAfterDelay(e,t,n){this.Uc(),this.Lc.indexOf(e)>-1&&(t=0);const r=Uy.createAndSchedule(this,e,t,n,(e=>this.Qc(e)));return this.$c.push(r),r}Uc(){this.Mc&&ud()}verifyOperationInProgress(){}async zc(){let e;do{e=this.Nc,await e}while(e!==this.Nc)}jc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Wc(e){return this.zc().then((()=>{this.$c.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.$c)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.zc()}))}Hc(e){this.Lc.push(e)}Qc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}}class Gv extends Bv{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Kv,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Qv(this),this._firestoreClient.terminate()}}function Wv(e){return e._firestoreClient||Qv(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Qv(e){var t,n,r;const i=e._freezeSettings(),s=(o=e._databaseId,a=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",c=e._persistenceKey,new gf(o,a,c,(u=i).host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams));var o,a,c,u;e._firestoreClient=new Sv(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jv{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jv(cf.fromBase64String(e))}catch(e){throw new fd(dd.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Jv(cf.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new fd(dd.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dd(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xv{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new fd(dd.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new fd(dd.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Sd(this._lat,e._lat)||Sd(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew=/^__.*__$/;class tw{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new hm(e,this.data,this.fieldMask,t,this.fieldTransforms):new lm(e,this.data,t,this.fieldTransforms)}}class nw{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new hm(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function rw(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ud()}}class iw{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new iw(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Zc({path:n,ta:!1});return r.ea(e),r}na(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Zc({path:n,ta:!1});return r.Jc(),r}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return Ew(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(0===e.length)throw this.ia("Document fields must not be empty");if(rw(this.Yc)&&ew.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class sw{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||ty(e)}ua(e,t,n,r=!1){return new iw({Yc:e,methodName:t,oa:n,path:Dd.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ow(e){const t=e._freezeSettings(),n=ty(e._databaseId);return new sw(e._databaseId,!!t.ignoreUndefinedProperties,n)}function aw(e,t,n,r,i,s={}){const o=e.ua(s.merge||s.mergeFields?2:0,t,n,i);gw("Data must be an object, but it was:",o,r);const a=pw(r,o);let c,u;if(s.merge)c=new of(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=yw(t,r,n);if(!o.contains(i))throw new fd(dd.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);bw(e,i)||e.push(i)}c=new of(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new tw(new Lf(a),c,u)}class cw extends Xv{_toFieldTransform(e){if(2!==e.Yc)throw 1===e.Yc?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof cw}}function uw(e,t,n){return new iw({Yc:3,oa:t.settings.oa,methodName:e._methodName,ta:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class lw extends Xv{constructor(e,t){super(e),this.ca=t}_toFieldTransform(e){const t=uw(this,e,!0),n=this.ca.map((e=>fw(e,t))),r=new Gp(n);return new em(e.path,r)}isEqual(e){return this===e}}function hw(e,t,n,r){const i=e.ua(1,t,n);gw("Data must be an object, but it was:",i,r);const s=[],o=Lf.empty();Xd(r,((e,r)=>{const a=ww(t,e,n);r=ar(r);const c=i.na(a);if(r instanceof cw)s.push(a);else{const e=fw(r,c);null!=e&&(s.push(a),o.set(a,e))}}));const a=new of(s);return new nw(o,a,i.fieldTransforms)}function dw(e,t,n,r,i,s){const o=e.ua(1,t,n),a=[yw(t,r,n)],c=[i];if(s.length%2!=0)throw new fd(dd.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)a.push(yw(t,s[e])),c.push(s[e+1]);const u=[],l=Lf.empty();for(let e=a.length-1;e>=0;--e)if(!bw(u,a[e])){const t=a[e];let n=c[e];n=ar(n);const r=o.na(t);if(n instanceof cw)u.push(t);else{const e=fw(n,r);null!=e&&(u.push(t),l.set(t,e))}}const h=new of(u);return new nw(l,h,o.fieldTransforms)}function fw(e,t){if(mw(e=ar(e)))return gw("Unsupported field value:",t,e),pw(e,t);if(e instanceof Xv)return function(e,t){if(!rw(t.Yc))throw t.ia(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ia(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ta&&4!==t.Yc)throw t.ia("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=fw(i,t.sa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=ar(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return qp(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Cd.fromDate(e);return{timestampValue:Bm(t.serializer,n)}}if(e instanceof Cd){const n=new Cd(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Bm(t.serializer,n)}}if(e instanceof Zv)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Jv)return{bytesValue:jm(t.serializer,e._byteString)};if(e instanceof qv){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:zm(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ia(`Unsupported field value: ${Uv(e)}`)}(e,t)}function pw(e,t){const n={};return Zd(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Xd(e,((e,r)=>{const i=fw(r,t.Xc(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function mw(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Cd||e instanceof Zv||e instanceof Jv||e instanceof qv||e instanceof Xv)}function gw(e,t,n){if(!mw(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=Uv(n);throw"an object"===r?t.ia(e+" a custom object"):t.ia(e+" "+r)}var r}function yw(e,t,n){if((t=ar(t))instanceof Yv)return t._internalPath;if("string"==typeof t)return ww(e,t);throw Ew("Field path arguments must be of type string or ",e,!1,void 0,n)}const vw=new RegExp("[~\\*/\\[\\]]");function ww(e,t,n){if(t.search(vw)>=0)throw Ew(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Yv(...t.split("."))._internalPath}catch(r){throw Ew(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Ew(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new fd(dd.INVALID_ARGUMENT,a+e+c)}function bw(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new qv(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Tw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(_w("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Tw extends Iw{data(){return super.data()}}function _w(e,t){return"string"==typeof t?ww(e,t):t instanceof Yv?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{convertValue(e,t="none"){switch(wf(e)){case 0:return null;case 1:return e.booleanValue;case 2:return hf(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(df(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw ud()}}convertObject(e,t){const n={};return Xd(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Zv(hf(e.latitude),hf(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=pf(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(mf(e));default:return null}}convertTimestamp(e){const t=lf(e);return new Cd(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Rd.fromString(e);ld(lg(n));const r=new yf(n.get(1),n.get(3)),i=new Ld(n.popFirst(5));return r.isEqual(t)||od(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cw{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kw extends Iw{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Nw(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(_w("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Nw extends kw{data(e={}){return super.data(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rw(e){e=Fv(e,qv);const t=Fv(e.firestore,Gv);return Lv(Wv(t),e._key).then((n=>Mw(t,e,n)))}class Ow extends Sw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jv(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new qv(this.firestore,null,t)}}function Dw(e,t,n){e=Fv(e,qv);const r=Fv(e.firestore,Gv),i=Aw(e.converter,t,n);return Pw(r,[aw(ow(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,nm.none())])}function Lw(e,t,n,...r){e=Fv(e,qv);const i=Fv(e.firestore,Gv),s=ow(i);let o;return o="string"==typeof(t=ar(t))||t instanceof Yv?dw(s,"updateDoc",e._key,t,n,r):hw(s,"updateDoc",e._key,t),Pw(i,[o.toMutation(e._key,nm.exists(!0))])}function Pw(e,t){return function(e,t){const n=new pd;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const r=bv(e);try{const e=await function(e,t){const n=hd(e),r=Cd.now(),i=t.reduce(((e,t)=>e.add(t.key)),Up());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=kp(),c=Up();return n.Ki.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=cm(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new hm(e.key,t,Pf(t.value.mapValue),nm.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Op(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.ac[e.currentUser.toKey()];r||(r=new ef(Sd)),r=r.insert(t,n),e.ac[e.currentUser.toKey()]=r}(r,e.batchId,n),await yv(r,e.changes),await _y(r.remoteStore)}catch(e){const t=Fy(e,"Failed to persist write");n.reject(t)}}(await Ov(e),t,n))),n.promise}(Wv(e),t)}function Mw(e,t,n){const r=n.docs.get(t._key),i=new Ow(e);return new kw(e,i,t._key,r,new Cw(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xw(...e){return new lw("arrayUnion",e)}!function(e,t=!0){nd="9.19.1",qr(new cr("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Gv(new vd(e.getProvider("auth-internal")),new Id(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new fd(dd.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yf(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),Wr("@firebase/firestore","3.10.0",e),Wr("@firebase/firestore","3.10.0","esm2017")}();const Uw=document.querySelector(".auth-menu__signup-button"),Fw=document.querySelector(".auth-menu__login-button"),Vw=document.querySelector(".menu"),Bw=document.querySelector(".auth-menu"),jw=document.querySelector(".auth-menu-logout"),qw=document.querySelector(".auth-menu-logout__user-name"),$w=document.querySelector(".auth-menu-open-btn"),zw=document.querySelector(".singup-backdrop"),Hw=document.querySelector(".login-backdrop");function Kw(){Vw.classList.toggle("is-hidden")}function Gw(e){e.currentTarget===e.target&&(zw.classList.add("is-hidden"),zw.removeEventListener("click",Gw))}function Ww(e){"Escape"===e.code&&(zw.classList.add("is-hidden"),window.removeEventListener("keydown",Ww))}function Qw(e){e.currentTarget===e.target&&(Hw.classList.add("is-hidden"),Hw.removeEventListener("click",Qw))}function Jw(e){"Escape"===e.code&&(Hw.classList.add("is-hidden"),window.removeEventListener("keydown",Jw))}$w.addEventListener("click",(e=>{e.preventDefault(),Vw.classList.contains("is-hidden")?(Kw(),DE?(jw.classList.toggle("menu-is-hidden"),qw.innerHTML=OE):Bw.classList.toggle("menu-is-hidden")):(DE?(jw.classList.toggle("menu-is-hidden"),qw.innerHTML=OE):Bw.classList.toggle("menu-is-hidden"),setTimeout(Kw,300))})),Uw.addEventListener("click",(function(){Bw.classList.toggle("menu-is-hidden"),setTimeout(Kw,300),zw.classList.remove("is-hidden"),zw.addEventListener("click",Gw),window.addEventListener("keydown",Ww)})),Fw.addEventListener("click",(function(){Bw.classList.toggle("menu-is-hidden"),setTimeout(Kw,300),Hw.classList.remove("is-hidden"),Hw.addEventListener("click",Qw),window.addEventListener("keydown",Jw)}));const Yw=document.querySelector(".singup-form"),Xw=Yw.querySelector(".email-field"),Zw=document.querySelector(".email"),eE=Yw.querySelector(".user-name-field"),tE=document.querySelector(".user-name"),nE=Yw.querySelector(".create-password"),rE=document.querySelector(".password"),iE=Yw.querySelector(".confirm-password"),sE=document.querySelector(".cPassword"),oE=document.querySelector(".singup-info-error");function aE(){if(!Zw.value.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/))return Xw.classList.add("invalid");Xw.classList.remove("invalid")}function cE(){let e=tE.value.length;if(!(4<=e&&e<=20))return eE.classList.add("invalid");eE.classList.remove("invalid")}function uE(){if(!rE.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/))return nE.classList.add("invalid");nE.classList.remove("invalid")}function lE(){if(rE.value!==sE.value||""===sE.value)return iE.classList.add("invalid");iE.classList.remove("invalid")}document.querySelectorAll(".show-hide").forEach((e=>{e.addEventListener("click",(()=>{const t=e.parentElement.querySelector("input");if("password"===t.type)return e.classList.replace("bx-hide","bx-show"),t.type="text";e.classList.replace("bx-show","bx-hide"),t.type="password"}))})),Yw.addEventListener("submit",(e=>{e.preventDefault(),aE(),uE(),lE(),cE(),Zw.addEventListener("keyup",aE),rE.addEventListener("keyup",uE),sE.addEventListener("keyup",lE),tE.addEventListener("keyup",cE),Xw.classList.contains("invalid")||nE.classList.contains("invalid")||iE.classList.contains("invalid")||eE.classList.contains("invalid")||zw.classList.add("is-hidden")}));const hE=document.querySelector(".login-form"),dE=hE.querySelector(".email"),fE=dE.querySelector("input"),pE=hE.querySelector(".password"),mE=pE.querySelector("input"),gE=document.querySelector(".login-info-error");let yE;function vE(){try{let e=localStorage.getItem("guest");yE=JSON.parse(e)}catch(e){console.log(e)}}function wE(e){try{yE.watched.includes(e)||(yE.watched.push(e),localStorage.setItem("guest",JSON.stringify(yE)),vE())}catch(e){console.log(e)}}function EE(e){try{yE.queue.includes(e)||(yE.queue.push(e),localStorage.setItem("guest",JSON.stringify(yE)),vE())}catch(e){console.log(e)}}hE.addEventListener("submit",(e=>{function t(){if(fE.value.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/))dE.classList.remove("error"),dE.classList.add("valid");else{dE.classList.add("error"),dE.classList.remove("valid");let e=dE.querySelector(".error-txt");""!=fE.value?e.innerText="Enter a valid email address":e.innerText="Email can't be blank"}}function n(){""==mE.value?(pE.classList.add("error"),pE.classList.remove("valid")):(pE.classList.remove("error"),pE.classList.add("valid"))}e.preventDefault(),""==fE.value?dE.classList.add("shake","error"):t(),""==mE.value?pE.classList.add("shake","error"):n(),setTimeout((()=>{dE.classList.remove("shake"),pE.classList.remove("shake")}),500),fE.addEventListener("keyup",t),mE.addEventListener("keyup",n),dE.classList.contains("error")||pE.classList.contains("error")||Hw.classList.add("is-hidden")}));document.querySelector("#wrongSearch"),document.querySelector("[data-input]");function bE({title:e,original_title:t,overview:n,popularity:r,poster_path:i,id:s,vote_average:o,vote_count:a,genres:c}){i||(poster="https://live.staticflickr.com/65535/52673964597_7ac974f3b4_k.jpg");return`\n \n\n      <img\n        class="movie-detail__image"\n        src="https://image.tmdb.org/t/p/w500//${i}" srcset="https://image.tmdb.org/t/p/original/${i} 2x"\n      />\n      <div class="modal__content">\n        <h2 class="modal__title">${e}</h2>\n        <ul class="modal__list">\n          <li class="modal__item">\n            <p class="modal__item--label">Vote / Votes</p>\n            <div class="modal__item--vote">\n              <p class="modal__item--value modal__item--value--vote">\n                <span class="modal__item--average">${o.toFixed(1)}</span>\n                /<span class="modal__item--count">${a}</span>\n              </p>\n            </div>\n          </li>\n          <li class="modal__item">\n            <p class="modal__item--label">Popularity</p>\n            <p class="modal__item--value">${r.toFixed(1)}</p>\n          </li>\n          <li class="modal__item">\n            <p class="modal__item--label">Original Title</p>\n            <p class="modal__item--value big">${t}</p>\n          </li>\n          <li class="modal__item">\n            <p class="modal__item--label">Genre</p>\n            <p class="modal__item--value">\n  ${c.map((e=>e.name)).join(", ")}\n</p>\n          </li>\n        </ul>\n        <div class="modal__overview">\n          <h3 class="modal__overview--about">ABOUT</h3>\n          <p class="modal__overview--overview">${n}</p>\n        </div>\n        <div class="modal__buttons">\n          <button id="watched" class="modal__button modal__button--watched" data-id="${s}">\n            Add to watched\n          </button>\n          <button id="queue" class="modal__button modal__button--queue" data-id="${s}">\n            Add to queue\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>`}async function IE(e){const t=`https://api.themoviedb.org/3/movie/${e}?api_key=b118f38ec77100db6763b4cc83604589`;return await Yt.get(t)}const TE=document.querySelector(".movie-info-content"),_E={openModalBtn:document.querySelector(".films-cards-set"),closeModalBtn:document.querySelector(".modal__cross-btn"),modal:document.querySelector(".backdrop")};function SE(){_E.modal.classList.toggle("is-hidden")}_E.closeModalBtn.addEventListener("click",SE);_E.modal.addEventListener("click",(e=>{e.target===_E.modal&&SE()})),window.addEventListener("keydown",(e=>{"Escape"!==e.key||_E.modal.classList.add("is-hidden")}));const AE=document.querySelector(".auth-menu-logout__logout-button"),CE=Kr({apiKey:"AIzaSyDWPLJhw8gzRksSLpE290fp-GQpT7FpHaY",authDomain:"moviedreamteam-filmoteka.firebaseapp.com",projectId:"moviedreamteam-filmoteka",storageBucket:"moviedreamteam-filmoteka.appspot.com",messagingSenderId:"18944533513",appId:"1:18944533513:web:be1f6bf81a57a82ccc84d8",measurementId:"G-LPXTQ4NYCN"}),kE=(function(e=Gr()){const t=$r(e=ar(e),"analytics");t.isInitialized()?t.getImmediate():function(e,t={}){const n=$r(e,"analytics");if(n.isInitialized()){const e=n.getImmediate();if(Xn(t,n.getOptions()))return e;throw Vi.create("already-initialized")}n.initialize({options:t})}(e)}(CE),function(e=Gr()){const t=$r(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=$r(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Xn(n.getOptions(),null!=t?t:{}))return e;vs(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Wa,persistence:[la,Jo,Xo]}),r=Vn("authTokenSyncURL");if(r){const e=(i=r,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Ja)return;const r=null==t?void 0:t.token;Ya!==r&&(Ya=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){ar(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,r){ar(e).onIdTokenChanged(t,n,r)}(n,(t=>e(t)))}var i;const s=Un("auth");return s&&wo(n,`http://${s}`),n}(CE)),NE=function(e,t){const n="string"==typeof e?e:t||"(default)",r=$r("object"==typeof e?e:Gr(),"firestore").getImmediate({identifier:n});if(!r._initialized){const e=Fn("firestore");e&&jv(r,...e)}return r}(CE);let RE,OE,DE;const LE=async()=>{const e=fE.value,t=mE.value;try{await(n=kE,r=e,i=t,Ho(ar(n),Ro.credential(r,i)))}catch(e){gE.style.display="block",e.code==ms.INVALID_PASSWORD?gE.innerHTML='<i class="error error-icon fas fa-exclamation-circle"></i>Wrong pasword. Try again':gE.innerHTML=`<i class="error error-icon fas fa-exclamation-circle"></i>${e.message}`,console.log(e)}var n,r,i;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */};hE.addEventListener("submit",(e=>{e.preventDefault(),dE.classList.contains("error")||pE.classList.contains("error")||LE()}));const PE=async()=>{const e=Zw.value,t=rE.value,n=tE.value;try{const r=await Ko(kE,e,t);await Go(kE.currentUser,{displayName:n});const i=Hv(NE,"users",`${r.user.uid}`);await Dw(i,{watched:[],queue:[]})}catch(e){oE.style.display="block",oE.innerHTML=`<i class="bx bx-error-circle singup-error-icon"></i>${e.message}`,console.log(e)}};Yw.addEventListener("submit",(e=>{e.preventDefault(),PE(),Xw.classList.contains("invalid")||nE.classList.contains("invalid")||iE.classList.contains("invalid")||eE.classList.contains("invalid")||PE()}));(async()=>{var e,t,n;e=e=>{e?(RE=e.uid,OE=e.displayName,DE=!0,Yw.reset(),hE.reset()):(DE=!1,vE(),null===yE&&localStorage.setItem("guest",JSON.stringify({watched:[],queue:[]})))},ar(kE).onAuthStateChanged(e,t,n)})();const ME=async()=>{var e;await(e=kE,ar(e).signOut())};AE.addEventListener("click",(()=>{ME(),jw.classList.toggle("menu-is-hidden"),setTimeout(Kw,300)}));const xE=async()=>{const e=await Rw(Hv(NE,"users",`${RE}`));if(e.exists()){return e.data()}console.log("No such document!")};function UE(e){DE?(async e=>{await Lw(Hv(NE,"users",`${RE}`),{watched:xw(`${e}`)})})(e):wE(e)}function FE(e){DE?(async e=>{await Lw(Hv(NE,"users",`${RE}`),{queue:xw(`${e}`)})})(e):EE(e)}function VE(){const e=TE.querySelector("#watched"),t=TE.querySelector("#queue");e.addEventListener("click",(e=>{UE(e.currentTarget.dataset.id)})),t.addEventListener("click",(e=>{FE(e.currentTarget.dataset.id)}))}const BE=document.querySelector(".films-cards-set");let jE;document.querySelector("[data-watched]").addEventListener("click",(()=>{DE?xE().then((e=>{jE=e,BE.innerHTML="",pn(jE.watched).then((e=>{BE.insertAdjacentHTML("beforeend",s(e));document.querySelectorAll(".film-card").forEach((e=>{e.addEventListener("click",(e=>{IE(e.currentTarget.dataset.id).then((e=>e.data)).then((e=>{TE.innerHTML=bE(e),SE(),VE()})).catch((e=>{throw new Error(e)}))}))}))}))})):(vE(),BE.innerHTML="",pn(yE.watched).then((e=>{BE.insertAdjacentHTML("beforeend",s(e));document.querySelectorAll(".film-card").forEach((e=>{e.addEventListener("click",(e=>{IE(e.currentTarget.dataset.id).then((e=>e.data)).then((e=>{TE.innerHTML=bE(e),SE(),VE()})).catch((e=>{throw new Error(e)}))}))}))})))}));document.querySelector("[data-queue]").addEventListener("click",(()=>{DE?xE().then((e=>{jE=e,BE.innerHTML="",pn(jE.queue).then((e=>{BE.insertAdjacentHTML("beforeend",s(e));document.querySelectorAll(".film-card").forEach((e=>{e.addEventListener("click",(e=>{IE(e.currentTarget.dataset.id).then((e=>e.data)).then((e=>{TE.innerHTML=bE(e),SE(),VE()})).catch((e=>{throw new Error(e)}))}))}))}))})):(vE(),BE.innerHTML="",pn(yE.queue).then((e=>{BE.insertAdjacentHTML("beforeend",s(e));document.querySelectorAll(".film-card").forEach((e=>{e.addEventListener("click",(e=>{IE(e.currentTarget.dataset.id).then((e=>e.data)).then((e=>{TE.innerHTML=bE(e),SE(),VE()})).catch((e=>{throw new Error(e)}))}))}))})))}));const qE=document.querySelector(".backdrop--flex");document.querySelector(".footer__font").addEventListener("click",(e=>{e.preventDefault(),qE.classList.remove("is-hidden")}));
//# sourceMappingURL=library.1aaf294e.js.map
