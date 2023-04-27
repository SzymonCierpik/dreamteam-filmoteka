var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(t){return t&&t.__esModule?t.default:t}function n(t,e){return function(){return t.apply(e,arguments)}}window.addEventListener("load",(()=>{const t=document.querySelector(".loader");t.classList.add("loader-hidden"),t.addEventListener("transitionend",(()=>{}))}));const{toString:r}=Object.prototype,{getPrototypeOf:i}=Object,s=(o=Object.create(null),t=>{const e=r.call(t);return o[e]||(o[e]=e.slice(8,-1).toLowerCase())});var o;const a=t=>(t=t.toLowerCase(),e=>s(e)===t),c=t=>e=>typeof e===t,{isArray:u}=Array,l=c("undefined");const h=a("ArrayBuffer");const d=c("string"),f=c("function"),p=c("number"),g=t=>null!==t&&"object"==typeof t,m=t=>{if("object"!==s(t))return!1;const e=i(t);return!(null!==e&&e!==Object.prototype&&null!==Object.getPrototypeOf(e)||Symbol.toStringTag in t||Symbol.iterator in t)},y=a("Date"),v=a("File"),w=a("Blob"),b=a("FileList"),E=a("URLSearchParams");function _(t,e,{allOwnKeys:n=!1}={}){if(null==t)return;let r,i;if("object"!=typeof t&&(t=[t]),u(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),s=i.length;let o;for(r=0;r<s;r++)o=i[r],e.call(null,t[o],o,t)}}function I(t,e){e=e.toLowerCase();const n=Object.keys(t);let r,i=n.length;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const T="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,S=t=>!l(t)&&t!==T;const A=(C="undefined"!=typeof Uint8Array&&i(Uint8Array),t=>C&&t instanceof C);var C;const N=a("HTMLFormElement"),O=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),k=a("RegExp"),R=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};_(n,((n,i)=>{!1!==e(n,i,t)&&(r[i]=n)})),Object.defineProperties(t,r)},D={DIGIT:"0123456789",ALPHA:"abcdefghijklmnopqrstuvwxyz",ALPHA_DIGIT:"abcdefghijklmnopqrstuvwxyz"+"abcdefghijklmnopqrstuvwxyz".toUpperCase()+"0123456789"};var L={isArray:u,isArrayBuffer:h,isBuffer:function(t){return null!==t&&!l(t)&&null!==t.constructor&&!l(t.constructor)&&f(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{let e;return t&&("function"==typeof FormData&&t instanceof FormData||f(t.append)&&("formdata"===(e=s(t))||"object"===e&&f(t.toString)&&"[object FormData]"===t.toString()))},isArrayBufferView:function(t){let e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&h(t.buffer),e},isString:d,isNumber:p,isBoolean:t=>!0===t||!1===t,isObject:g,isPlainObject:m,isUndefined:l,isDate:y,isFile:v,isBlob:w,isRegExp:k,isFunction:f,isStream:t=>g(t)&&f(t.pipe),isURLSearchParams:E,isTypedArray:A,isFileList:b,forEach:_,merge:function t(){const{caseless:e}=S(this)&&this||{},n={},r=(r,i)=>{const s=e&&I(n,i)||i;m(n[s])&&m(r)?n[s]=t(n[s],r):m(r)?n[s]=t({},r):u(r)?n[s]=r.slice():n[s]=r};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&_(arguments[t],r);return n},extend:(t,e,r,{allOwnKeys:i}={})=>(_(e,((e,i)=>{r&&f(e)?t[i]=n(e,r):t[i]=e}),{allOwnKeys:i}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},toFlatObject:(t,e,n,r)=>{let s,o,a;const c={};if(e=e||{},null==t)return e;do{for(s=Object.getOwnPropertyNames(t),o=s.length;o-- >0;)a=s[o],r&&!r(a,t,e)||c[a]||(e[a]=t[a],c[a]=!0);t=!1!==n&&i(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},kindOf:s,kindOfTest:a,endsWith:(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return-1!==r&&r===n},toArray:t=>{if(!t)return null;if(u(t))return t;let e=t.length;if(!p(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},forEachEntry:(t,e)=>{const n=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=n.next())&&!r.done;){const n=r.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let n;const r=[];for(;null!==(n=t.exec(e));)r.push(n);return r},isHTMLForm:N,hasOwnProperty:O,hasOwnProp:O,reduceDescriptors:R,freezeMethods:t=>{R(t,((e,n)=>{if(f(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=t[n];f(r)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(t,e)=>{const n={},r=t=>{t.forEach((t=>{n[t]=!0}))};return u(t)?r(t):r(String(t).split(e)),n},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(t,e,n){return e.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(t,e)=>(t=+t,Number.isFinite(t)?t:e),findKey:I,global:T,isContextDefined:S,ALPHABET:D,generateString:(t=16,e=D.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n},isSpecCompliantForm:function(t){return!!(t&&f(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{const e=new Array(10),n=(t,r)=>{if(g(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[r]=t;const i=u(t)?[]:{};return _(t,((t,e)=>{const s=n(t,r+1);!l(s)&&(i[e]=s)})),e[r]=void 0,i}}return t};return n(t,0)}};function P(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}L.inherits(P,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:L.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const x=P.prototype,M={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{M[t]={value:t}})),Object.defineProperties(P,M),Object.defineProperty(x,"isAxiosError",{value:!0}),P.from=(t,e,n,r,i,s)=>{const o=Object.create(x);return L.toFlatObject(t,o,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),P.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};var U,F,B,V=P;F=function(t){var e,n,r=J(t),i=r[0],s=r[1],o=new z(function(t,e,n){return 3*(e+n)/4-n}(0,i,s)),a=0,c=s>0?i-4:i;for(n=0;n<c;n+=4)e=H[t.charCodeAt(n)]<<18|H[t.charCodeAt(n+1)]<<12|H[t.charCodeAt(n+2)]<<6|H[t.charCodeAt(n+3)],o[a++]=e>>16&255,o[a++]=e>>8&255,o[a++]=255&e;2===s&&(e=H[t.charCodeAt(n)]<<2|H[t.charCodeAt(n+1)]>>4,o[a++]=255&e);1===s&&(e=H[t.charCodeAt(n)]<<10|H[t.charCodeAt(n+1)]<<4|H[t.charCodeAt(n+2)]>>2,o[a++]=e>>8&255,o[a++]=255&e);return o},B=function(t){for(var e,n=t.length,r=n%3,i=[],s=16383,o=0,a=n-r;o<a;o+=s)i.push(Q(t,o,o+s>a?a:o+s));1===r?(e=t[n-1],i.push(q[e>>2]+q[e<<4&63]+"==")):2===r&&(e=(t[n-2]<<8)+t[n-1],i.push(q[e>>10]+q[e>>4&63]+q[e<<2&63]+"="));return i.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var j,$,q=[],H=[],z="undefined"!=typeof Uint8Array?Uint8Array:Array,G="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",K=0,W=G.length;K<W;++K)q[K]=G[K],H[G.charCodeAt(K)]=K;function J(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=e),[n,n===e?0:4-n%4]}function Q(t,e,n){for(var r,i,s=[],o=e;o<n;o+=3)r=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(255&t[o+2]),s.push(q[(i=r)>>18&63]+q[i>>12&63]+q[i>>6&63]+q[63&i]);return s.join("")}H["-".charCodeAt(0)]=62,H["_".charCodeAt(0)]=63,j=function(t,e,n,r,i){var s,o,a=8*i-r-1,c=(1<<a)-1,u=c>>1,l=-7,h=n?i-1:0,d=n?-1:1,f=t[e+h];for(h+=d,s=f&(1<<-l)-1,f>>=-l,l+=a;l>0;s=256*s+t[e+h],h+=d,l-=8);for(o=s&(1<<-l)-1,s>>=-l,l+=r;l>0;o=256*o+t[e+h],h+=d,l-=8);if(0===s)s=1-u;else{if(s===c)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,r),s-=u}return(f?-1:1)*o*Math.pow(2,s-r)},$=function(t,e,n,r,i,s){var o,a,c,u=8*s-i-1,l=(1<<u)-1,h=l>>1,d=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=r?0:s-1,p=r?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,o=l):(o=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-o))<1&&(o--,c*=2),(e+=o+h>=1?d/c:d*Math.pow(2,1-h))*c>=2&&(o++,c/=2),o+h>=l?(a=0,o=l):o+h>=1?(a=(e*c-1)*Math.pow(2,i),o+=h):(a=e*Math.pow(2,h-1)*Math.pow(2,i),o=0));i>=8;t[n+f]=255&a,f+=p,a/=256,i-=8);for(o=o<<i|a,u+=i;u>0;t[n+f]=255&o,f+=p,o/=256,u-=8);t[n+f-p]|=128*g};const X="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;U=Z;function Y(t){if(t>2147483647)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,Z.prototype),e}function Z(t,e,n){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return nt(t)}return tt(t,e,n)}function tt(t,e,n){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!Z.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const n=0|ot(t,e);let r=Y(n);const i=r.write(t,e);i!==n&&(r=r.slice(0,i));return r}(t,e);if(ArrayBuffer.isView(t))return function(t){if(Bt(t,Uint8Array)){const e=new Uint8Array(t);return it(e.buffer,e.byteOffset,e.byteLength)}return rt(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(Bt(t,ArrayBuffer)||t&&Bt(t.buffer,ArrayBuffer))return it(t,e,n);if("undefined"!=typeof SharedArrayBuffer&&(Bt(t,SharedArrayBuffer)||t&&Bt(t.buffer,SharedArrayBuffer)))return it(t,e,n);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const r=t.valueOf&&t.valueOf();if(null!=r&&r!==t)return Z.from(r,e,n);const i=function(t){if(Z.isBuffer(t)){const e=0|st(t.length),n=Y(e);return 0===n.length||t.copy(n,0,0,e),n}if(void 0!==t.length)return"number"!=typeof t.length||Vt(t.length)?Y(0):rt(t);if("Buffer"===t.type&&Array.isArray(t.data))return rt(t.data)}(t);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return Z.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function et(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function nt(t){return et(t),Y(t<0?0:0|st(t))}function rt(t){const e=t.length<0?0:0|st(t.length),n=Y(e);for(let r=0;r<e;r+=1)n[r]=255&t[r];return n}function it(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return r=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n),Object.setPrototypeOf(r,Z.prototype),r}function st(t){if(t>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|t}function ot(t,e){if(Z.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||Bt(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const n=t.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let i=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Mt(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Ut(t).length;default:if(i)return r?-1:Mt(t).length;e=(""+e).toLowerCase(),i=!0}}function at(t,e,n){let r=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return bt(this,e,n);case"utf8":case"utf-8":return yt(this,e,n);case"ascii":return vt(this,e,n);case"latin1":case"binary":return wt(this,e,n);case"base64":return mt(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Et(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function ct(t,e,n){const r=t[e];t[e]=t[n],t[n]=r}function ut(t,e,n,r,i){if(0===t.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Vt(n=+n)&&(n=i?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(i)return-1;n=t.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof e&&(e=Z.from(e,r)),Z.isBuffer(e))return 0===e.length?-1:lt(t,e,n,r,i);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):lt(t,[e],n,r,i);throw new TypeError("val must be string, number or Buffer")}function lt(t,e,n,r,i){let s,o=1,a=t.length,c=e.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1;o=2,a/=2,c/=2,n/=2}function u(t,e){return 1===o?t[e]:t.readUInt16BE(e*o)}if(i){let r=-1;for(s=n;s<a;s++)if(u(t,s)===u(e,-1===r?0:s-r)){if(-1===r&&(r=s),s-r+1===c)return r*o}else-1!==r&&(s-=s-r),r=-1}else for(n+c>a&&(n=a-c),s=n;s>=0;s--){let n=!0;for(let r=0;r<c;r++)if(u(t,s+r)!==u(e,r)){n=!1;break}if(n)return s}return-1}function ht(t,e,n,r){n=Number(n)||0;const i=t.length-n;r?(r=Number(r))>i&&(r=i):r=i;const s=e.length;let o;for(r>s/2&&(r=s/2),o=0;o<r;++o){const r=parseInt(e.substr(2*o,2),16);if(Vt(r))return o;t[n+o]=r}return o}function dt(t,e,n,r){return Ft(Mt(e,t.length-n),t,n,r)}function ft(t,e,n,r){return Ft(function(t){const e=[];for(let n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(e),t,n,r)}function pt(t,e,n,r){return Ft(Ut(e),t,n,r)}function gt(t,e,n,r){return Ft(function(t,e){let n,r,i;const s=[];for(let o=0;o<t.length&&!((e-=2)<0);++o)n=t.charCodeAt(o),r=n>>8,i=n%256,s.push(i),s.push(r);return s}(e,t.length-n),t,n,r)}function mt(t,e,n){return 0===e&&n===t.length?B(t):B(t.slice(e,n))}function yt(t,e,n){n=Math.min(t.length,n);const r=[];let i=e;for(;i<n;){const e=t[i];let s=null,o=e>239?4:e>223?3:e>191?2:1;if(i+o<=n){let n,r,a,c;switch(o){case 1:e<128&&(s=e);break;case 2:n=t[i+1],128==(192&n)&&(c=(31&e)<<6|63&n,c>127&&(s=c));break;case 3:n=t[i+1],r=t[i+2],128==(192&n)&&128==(192&r)&&(c=(15&e)<<12|(63&n)<<6|63&r,c>2047&&(c<55296||c>57343)&&(s=c));break;case 4:n=t[i+1],r=t[i+2],a=t[i+3],128==(192&n)&&128==(192&r)&&128==(192&a)&&(c=(15&e)<<18|(63&n)<<12|(63&r)<<6|63&a,c>65535&&c<1114112&&(s=c))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|1023&s),r.push(s),i+=o}return function(t){const e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t);let n="",r=0;for(;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=4096));return n}(r)}Z.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),Z.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(Z.prototype,"parent",{enumerable:!0,get:function(){if(Z.isBuffer(this))return this.buffer}}),Object.defineProperty(Z.prototype,"offset",{enumerable:!0,get:function(){if(Z.isBuffer(this))return this.byteOffset}}),Z.poolSize=8192,Z.from=function(t,e,n){return tt(t,e,n)},Object.setPrototypeOf(Z.prototype,Uint8Array.prototype),Object.setPrototypeOf(Z,Uint8Array),Z.alloc=function(t,e,n){return function(t,e,n){return et(t),t<=0?Y(t):void 0!==e?"string"==typeof n?Y(t).fill(e,n):Y(t).fill(e):Y(t)}(t,e,n)},Z.allocUnsafe=function(t){return nt(t)},Z.allocUnsafeSlow=function(t){return nt(t)},Z.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==Z.prototype},Z.compare=function(t,e){if(Bt(t,Uint8Array)&&(t=Z.from(t,t.offset,t.byteLength)),Bt(e,Uint8Array)&&(e=Z.from(e,e.offset,e.byteLength)),!Z.isBuffer(t)||!Z.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let n=t.length,r=e.length;for(let i=0,s=Math.min(n,r);i<s;++i)if(t[i]!==e[i]){n=t[i],r=e[i];break}return n<r?-1:r<n?1:0},Z.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Z.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return Z.alloc(0);let n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;const r=Z.allocUnsafe(e);let i=0;for(n=0;n<t.length;++n){let e=t[n];if(Bt(e,Uint8Array))i+e.length>r.length?(Z.isBuffer(e)||(e=Z.from(e)),e.copy(r,i)):Uint8Array.prototype.set.call(r,e,i);else{if(!Z.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(r,i)}i+=e.length}return r},Z.byteLength=ot,Z.prototype._isBuffer=!0,Z.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)ct(this,e,e+1);return this},Z.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)ct(this,e,e+3),ct(this,e+1,e+2);return this},Z.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)ct(this,e,e+7),ct(this,e+1,e+6),ct(this,e+2,e+5),ct(this,e+3,e+4);return this},Z.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?yt(this,0,t):at.apply(this,arguments)},Z.prototype.toLocaleString=Z.prototype.toString,Z.prototype.equals=function(t){if(!Z.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===Z.compare(this,t)},Z.prototype.inspect=function(){let t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},X&&(Z.prototype[X]=Z.prototype.inspect),Z.prototype.compare=function(t,e,n,r,i){if(Bt(t,Uint8Array)&&(t=Z.from(t,t.offset,t.byteLength)),!Z.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),e<0||n>t.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&e>=n)return 0;if(r>=i)return-1;if(e>=n)return 1;if(this===t)return 0;let s=(i>>>=0)-(r>>>=0),o=(n>>>=0)-(e>>>=0);const a=Math.min(s,o),c=this.slice(r,i),u=t.slice(e,n);for(let t=0;t<a;++t)if(c[t]!==u[t]){s=c[t],o=u[t];break}return s<o?-1:o<s?1:0},Z.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},Z.prototype.indexOf=function(t,e,n){return ut(this,t,e,n,!0)},Z.prototype.lastIndexOf=function(t,e,n){return ut(this,t,e,n,!1)},Z.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}const i=this.length-e;if((void 0===n||n>i)&&(n=i),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let s=!1;for(;;)switch(r){case"hex":return ht(this,t,e,n);case"utf8":case"utf-8":return dt(this,t,e,n);case"ascii":case"latin1":case"binary":return ft(this,t,e,n);case"base64":return pt(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return gt(this,t,e,n);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},Z.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function vt(t,e,n){let r="";n=Math.min(t.length,n);for(let i=e;i<n;++i)r+=String.fromCharCode(127&t[i]);return r}function wt(t,e,n){let r="";n=Math.min(t.length,n);for(let i=e;i<n;++i)r+=String.fromCharCode(t[i]);return r}function bt(t,e,n){const r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);let i="";for(let r=e;r<n;++r)i+=jt[t[r]];return i}function Et(t,e,n){const r=t.slice(e,n);let i="";for(let t=0;t<r.length-1;t+=2)i+=String.fromCharCode(r[t]+256*r[t+1]);return i}function _t(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function It(t,e,n,r,i,s){if(!Z.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<s)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}function Tt(t,e,n,r,i){Dt(e,r,i,t,n,7);let s=Number(e&BigInt(4294967295));t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,n}function St(t,e,n,r,i){Dt(e,r,i,t,n,7);let s=Number(e&BigInt(4294967295));t[n+7]=s,s>>=8,t[n+6]=s,s>>=8,t[n+5]=s,s>>=8,t[n+4]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[n+3]=o,o>>=8,t[n+2]=o,o>>=8,t[n+1]=o,o>>=8,t[n]=o,n+8}function At(t,e,n,r,i,s){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Ct(t,e,n,r,i){return e=+e,n>>>=0,i||At(t,0,n,4),$(t,e,n,r,23,4),n+4}function Nt(t,e,n,r,i){return e=+e,n>>>=0,i||At(t,0,n,8),$(t,e,n,r,52,8),n+8}Z.prototype.slice=function(t,e){const n=this.length;(t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);const r=this.subarray(t,e);return Object.setPrototypeOf(r,Z.prototype),r},Z.prototype.readUintLE=Z.prototype.readUIntLE=function(t,e,n){t>>>=0,e>>>=0,n||_t(t,e,this.length);let r=this[t],i=1,s=0;for(;++s<e&&(i*=256);)r+=this[t+s]*i;return r},Z.prototype.readUintBE=Z.prototype.readUIntBE=function(t,e,n){t>>>=0,e>>>=0,n||_t(t,e,this.length);let r=this[t+--e],i=1;for(;e>0&&(i*=256);)r+=this[t+--e]*i;return r},Z.prototype.readUint8=Z.prototype.readUInt8=function(t,e){return t>>>=0,e||_t(t,1,this.length),this[t]},Z.prototype.readUint16LE=Z.prototype.readUInt16LE=function(t,e){return t>>>=0,e||_t(t,2,this.length),this[t]|this[t+1]<<8},Z.prototype.readUint16BE=Z.prototype.readUInt16BE=function(t,e){return t>>>=0,e||_t(t,2,this.length),this[t]<<8|this[t+1]},Z.prototype.readUint32LE=Z.prototype.readUInt32LE=function(t,e){return t>>>=0,e||_t(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},Z.prototype.readUint32BE=Z.prototype.readUInt32BE=function(t,e){return t>>>=0,e||_t(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},Z.prototype.readBigUInt64LE=$t((function(t){Lt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Pt(t,this.length-8);const r=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,i=this[++t]+256*this[++t]+65536*this[++t]+n*2**24;return BigInt(r)+(BigInt(i)<<BigInt(32))})),Z.prototype.readBigUInt64BE=$t((function(t){Lt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Pt(t,this.length-8);const r=e*2**24+65536*this[++t]+256*this[++t]+this[++t],i=this[++t]*2**24+65536*this[++t]+256*this[++t]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)})),Z.prototype.readIntLE=function(t,e,n){t>>>=0,e>>>=0,n||_t(t,e,this.length);let r=this[t],i=1,s=0;for(;++s<e&&(i*=256);)r+=this[t+s]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*e)),r},Z.prototype.readIntBE=function(t,e,n){t>>>=0,e>>>=0,n||_t(t,e,this.length);let r=e,i=1,s=this[t+--r];for(;r>0&&(i*=256);)s+=this[t+--r]*i;return i*=128,s>=i&&(s-=Math.pow(2,8*e)),s},Z.prototype.readInt8=function(t,e){return t>>>=0,e||_t(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},Z.prototype.readInt16LE=function(t,e){t>>>=0,e||_t(t,2,this.length);const n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},Z.prototype.readInt16BE=function(t,e){t>>>=0,e||_t(t,2,this.length);const n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},Z.prototype.readInt32LE=function(t,e){return t>>>=0,e||_t(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},Z.prototype.readInt32BE=function(t,e){return t>>>=0,e||_t(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},Z.prototype.readBigInt64LE=$t((function(t){Lt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Pt(t,this.length-8);const r=this[t+4]+256*this[t+5]+65536*this[t+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),Z.prototype.readBigInt64BE=$t((function(t){Lt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Pt(t,this.length-8);const r=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(r)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+n)})),Z.prototype.readFloatLE=function(t,e){return t>>>=0,e||_t(t,4,this.length),j(this,t,!0,23,4)},Z.prototype.readFloatBE=function(t,e){return t>>>=0,e||_t(t,4,this.length),j(this,t,!1,23,4)},Z.prototype.readDoubleLE=function(t,e){return t>>>=0,e||_t(t,8,this.length),j(this,t,!0,52,8)},Z.prototype.readDoubleBE=function(t,e){return t>>>=0,e||_t(t,8,this.length),j(this,t,!1,52,8)},Z.prototype.writeUintLE=Z.prototype.writeUIntLE=function(t,e,n,r){if(t=+t,e>>>=0,n>>>=0,!r){It(this,t,e,n,Math.pow(2,8*n)-1,0)}let i=1,s=0;for(this[e]=255&t;++s<n&&(i*=256);)this[e+s]=t/i&255;return e+n},Z.prototype.writeUintBE=Z.prototype.writeUIntBE=function(t,e,n,r){if(t=+t,e>>>=0,n>>>=0,!r){It(this,t,e,n,Math.pow(2,8*n)-1,0)}let i=n-1,s=1;for(this[e+i]=255&t;--i>=0&&(s*=256);)this[e+i]=t/s&255;return e+n},Z.prototype.writeUint8=Z.prototype.writeUInt8=function(t,e,n){return t=+t,e>>>=0,n||It(this,t,e,1,255,0),this[e]=255&t,e+1},Z.prototype.writeUint16LE=Z.prototype.writeUInt16LE=function(t,e,n){return t=+t,e>>>=0,n||It(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},Z.prototype.writeUint16BE=Z.prototype.writeUInt16BE=function(t,e,n){return t=+t,e>>>=0,n||It(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},Z.prototype.writeUint32LE=Z.prototype.writeUInt32LE=function(t,e,n){return t=+t,e>>>=0,n||It(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},Z.prototype.writeUint32BE=Z.prototype.writeUInt32BE=function(t,e,n){return t=+t,e>>>=0,n||It(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},Z.prototype.writeBigUInt64LE=$t((function(t,e=0){return Tt(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),Z.prototype.writeBigUInt64BE=$t((function(t,e=0){return St(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),Z.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e>>>=0,!r){const r=Math.pow(2,8*n-1);It(this,t,e,n,r-1,-r)}let i=0,s=1,o=0;for(this[e]=255&t;++i<n&&(s*=256);)t<0&&0===o&&0!==this[e+i-1]&&(o=1),this[e+i]=(t/s>>0)-o&255;return e+n},Z.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e>>>=0,!r){const r=Math.pow(2,8*n-1);It(this,t,e,n,r-1,-r)}let i=n-1,s=1,o=0;for(this[e+i]=255&t;--i>=0&&(s*=256);)t<0&&0===o&&0!==this[e+i+1]&&(o=1),this[e+i]=(t/s>>0)-o&255;return e+n},Z.prototype.writeInt8=function(t,e,n){return t=+t,e>>>=0,n||It(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},Z.prototype.writeInt16LE=function(t,e,n){return t=+t,e>>>=0,n||It(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},Z.prototype.writeInt16BE=function(t,e,n){return t=+t,e>>>=0,n||It(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},Z.prototype.writeInt32LE=function(t,e,n){return t=+t,e>>>=0,n||It(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},Z.prototype.writeInt32BE=function(t,e,n){return t=+t,e>>>=0,n||It(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},Z.prototype.writeBigInt64LE=$t((function(t,e=0){return Tt(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Z.prototype.writeBigInt64BE=$t((function(t,e=0){return St(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Z.prototype.writeFloatLE=function(t,e,n){return Ct(this,t,e,!0,n)},Z.prototype.writeFloatBE=function(t,e,n){return Ct(this,t,e,!1,n)},Z.prototype.writeDoubleLE=function(t,e,n){return Nt(this,t,e,!0,n)},Z.prototype.writeDoubleBE=function(t,e,n){return Nt(this,t,e,!1,n)},Z.prototype.copy=function(t,e,n,r){if(!Z.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);const i=r-n;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,n,r):Uint8Array.prototype.set.call(t,this.subarray(n,r),e),i},Z.prototype.fill=function(t,e,n,r){if("string"==typeof t){if("string"==typeof e?(r=e,e=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!Z.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===t.length){const e=t.charCodeAt(0);("utf8"===r&&e<128||"latin1"===r)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;let i;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(i=e;i<n;++i)this[i]=t;else{const s=Z.isBuffer(t)?t:Z.from(t,r),o=s.length;if(0===o)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(i=0;i<n-e;++i)this[i+e]=s[i%o]}return this};const Ot={};function kt(t,e,n){Ot[t]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function Rt(t){let e="",n=t.length;const r="-"===t[0]?1:0;for(;n>=r+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return`${t.slice(0,n)}${e}`}function Dt(t,e,n,r,i,s){if(t>n||t<e){const r="bigint"==typeof e?"n":"";let i;throw i=s>3?0===e||e===BigInt(0)?`>= 0${r} and < 2${r} ** ${8*(s+1)}${r}`:`>= -(2${r} ** ${8*(s+1)-1}${r}) and < 2 ** ${8*(s+1)-1}${r}`:`>= ${e}${r} and <= ${n}${r}`,new Ot.ERR_OUT_OF_RANGE("value",i,t)}!function(t,e,n){Lt(e,"offset"),void 0!==t[e]&&void 0!==t[e+n]||Pt(e,t.length-(n+1))}(r,i,s)}function Lt(t,e){if("number"!=typeof t)throw new Ot.ERR_INVALID_ARG_TYPE(e,"number",t)}function Pt(t,e,n){if(Math.floor(t)!==t)throw Lt(t,n),new Ot.ERR_OUT_OF_RANGE(n||"offset","an integer",t);if(e<0)throw new Ot.ERR_BUFFER_OUT_OF_BOUNDS;throw new Ot.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,t)}kt("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),kt("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),kt("ERR_OUT_OF_RANGE",(function(t,e,n){let r=`The value of "${t}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>2**32?i=Rt(String(n)):"bigint"==typeof n&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=Rt(i)),i+="n"),r+=` It must be ${e}. Received ${i}`,r}),RangeError);const xt=/[^+/0-9A-Za-z-_]/g;function Mt(t,e){let n;e=e||1/0;const r=t.length;let i=null;const s=[];for(let o=0;o<r;++o){if(n=t.charCodeAt(o),n>55295&&n<57344){if(!i){if(n>56319){(e-=3)>-1&&s.push(239,191,189);continue}if(o+1===r){(e-=3)>-1&&s.push(239,191,189);continue}i=n;continue}if(n<56320){(e-=3)>-1&&s.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(e-=3)>-1&&s.push(239,191,189);if(i=null,n<128){if((e-=1)<0)break;s.push(n)}else if(n<2048){if((e-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function Ut(t){return F(function(t){if((t=(t=t.split("=")[0]).trim().replace(xt,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function Ft(t,e,n,r){let i;for(i=0;i<r&&!(i+n>=e.length||i>=t.length);++i)e[i+n]=t[i];return i}function Bt(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function Vt(t){return t!=t}const jt=function(){const t="0123456789abcdef",e=new Array(256);for(let n=0;n<16;++n){const r=16*n;for(let i=0;i<16;++i)e[r+i]=t[n]+t[i]}return e}();function $t(t){return"undefined"==typeof BigInt?qt:t}function qt(){throw new Error("BigInt not supported")}var Ht=U;function zt(t){return L.isPlainObject(t)||L.isArray(t)}function Gt(t){return L.endsWith(t,"[]")?t.slice(0,-2):t}function Kt(t,e,n){return t?t.concat(e).map((function(t,e){return t=Gt(t),!n&&e?"["+t+"]":t})).join(n?".":""):e}const Wt=L.toFlatObject(L,{},null,(function(t){return/^is[A-Z]/.test(t)}));var Jt=function(t,e,n){if(!L.isObject(t))throw new TypeError("target must be an object");e=e||new FormData;const r=(n=L.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!L.isUndefined(e[t])}))).metaTokens,i=n.visitor||u,s=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&L.isSpecCompliantForm(e);if(!L.isFunction(i))throw new TypeError("visitor must be a function");function c(t){if(null===t)return"";if(L.isDate(t))return t.toISOString();if(!a&&L.isBlob(t))throw new V("Blob is not supported. Use a Buffer instead.");return L.isArrayBuffer(t)||L.isTypedArray(t)?a&&"function"==typeof Blob?new Blob([t]):Ht.from(t):t}function u(t,n,i){let a=t;if(t&&!i&&"object"==typeof t)if(L.endsWith(n,"{}"))n=r?n:n.slice(0,-2),t=JSON.stringify(t);else if(L.isArray(t)&&function(t){return L.isArray(t)&&!t.some(zt)}(t)||(L.isFileList(t)||L.endsWith(n,"[]"))&&(a=L.toArray(t)))return n=Gt(n),a.forEach((function(t,r){!L.isUndefined(t)&&null!==t&&e.append(!0===o?Kt([n],r,s):null===o?n:n+"[]",c(t))})),!1;return!!zt(t)||(e.append(Kt(i,n,s),c(t)),!1)}const l=[],h=Object.assign(Wt,{defaultVisitor:u,convertValue:c,isVisitable:zt});if(!L.isObject(t))throw new TypeError("data must be an object");return function t(n,r){if(!L.isUndefined(n)){if(-1!==l.indexOf(n))throw Error("Circular reference detected in "+r.join("."));l.push(n),L.forEach(n,(function(n,s){!0===(!(L.isUndefined(n)||null===n)&&i.call(e,n,L.isString(s)?s.trim():s,r,h))&&t(n,r?r.concat(s):[s])})),l.pop()}}(t),e};function Qt(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function Xt(t,e){this._pairs=[],t&&Jt(t,this,e)}const Yt=Xt.prototype;Yt.append=function(t,e){this._pairs.push([t,e])},Yt.toString=function(t){const e=t?function(e){return t.call(this,e,Qt)}:Qt;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var Zt=Xt;function te(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ee(t,e,n){if(!e)return t;const r=n&&n.encode||te,i=n&&n.serialize;let s;if(s=i?i(e,n):L.isURLSearchParams(e)?e.toString():new Zt(e,n).toString(r),s){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}var ne=class{constructor(){this.handlers=[]}use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){L.forEach(this.handlers,(function(e){null!==e&&t(e)}))}},re={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var ie={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Zt,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let t;return("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function se(t,e){return Jt(t,new ie.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,r){return ie.isNode&&L.isBuffer(t)?(this.append(e,t.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},e))}var oe=function(t){function e(t,n,r,i){let s=t[i++];const o=Number.isFinite(+s),a=i>=t.length;if(s=!s&&L.isArray(r)?r.length:s,a)return L.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!o;r[s]&&L.isObject(r[s])||(r[s]=[]);return e(t,n,r[s],i)&&L.isArray(r[s])&&(r[s]=function(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}(r[s])),!o}if(L.isFormData(t)&&L.isFunction(t.entries)){const n={};return L.forEachEntry(t,((t,r)=>{e(function(t){return L.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}(t),r,n,0)})),n}return null};const ae={"Content-Type":void 0};const ce={transitional:re,adapter:["xhr","http"],transformRequest:[function(t,e){const n=e.getContentType()||"",r=n.indexOf("application/json")>-1,i=L.isObject(t);i&&L.isHTMLForm(t)&&(t=new FormData(t));if(L.isFormData(t))return r&&r?JSON.stringify(oe(t)):t;if(L.isArrayBuffer(t)||L.isBuffer(t)||L.isStream(t)||L.isFile(t)||L.isBlob(t))return t;if(L.isArrayBufferView(t))return t.buffer;if(L.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return se(t,this.formSerializer).toString();if((s=L.isFileList(t))||n.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return Jt(s?{"files[]":t}:t,e&&new e,this.formSerializer)}}return i||r?(e.setContentType("application/json",!1),function(t,e,n){if(L.isString(t))try{return(e||JSON.parse)(t),L.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(n||JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){const e=this.transitional||ce.transitional,n=e&&e.forcedJSONParsing,r="json"===this.responseType;if(t&&L.isString(t)&&(n&&!this.responseType||r)){const n=!(e&&e.silentJSONParsing)&&r;try{return JSON.parse(t)}catch(t){if(n){if("SyntaxError"===t.name)throw V.from(t,V.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ie.classes.FormData,Blob:ie.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};L.forEach(["delete","get","head"],(function(t){ce.headers[t]={}})),L.forEach(["post","put","patch"],(function(t){ce.headers[t]=L.merge(ae)}));var ue=ce;const le=L.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var he=t=>{const e={};let n,r,i;return t&&t.split("\n").forEach((function(t){i=t.indexOf(":"),n=t.substring(0,i).trim().toLowerCase(),r=t.substring(i+1).trim(),!n||e[n]&&le[n]||("set-cookie"===n?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)})),e};const de=Symbol("internals");function fe(t){return t&&String(t).trim().toLowerCase()}function pe(t){return!1===t||null==t?t:L.isArray(t)?t.map(pe):String(t)}function ge(t,e,n,r,i){return L.isFunction(r)?r.call(this,e,n):(i&&(e=n),L.isString(e)?L.isString(r)?-1!==e.indexOf(r):L.isRegExp(r)?r.test(e):void 0:void 0)}class me{constructor(t){t&&this.set(t)}set(t,e,n){const r=this;function i(t,e,n){const i=fe(e);if(!i)throw new Error("header name must be a non-empty string");const s=L.findKey(r,i);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||e]=pe(t))}const s=(t,e)=>L.forEach(t,((t,n)=>i(t,n,e)));return L.isPlainObject(t)||t instanceof this.constructor?s(t,e):L.isString(t)&&(t=t.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim())?s(he(t),e):null!=t&&i(e,t,n),this}get(t,e){if(t=fe(t)){const n=L.findKey(this,t);if(n){const t=this[n];if(!e)return t;if(!0===e)return function(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}(t);if(L.isFunction(e))return e.call(this,t,n);if(L.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=fe(t)){const n=L.findKey(this,t);return!(!n||void 0===this[n]||e&&!ge(0,this[n],n,e))}return!1}delete(t,e){const n=this;let r=!1;function i(t){if(t=fe(t)){const i=L.findKey(n,t);!i||e&&!ge(0,n[i],i,e)||(delete n[i],r=!0)}}return L.isArray(t)?t.forEach(i):i(t),r}clear(t){const e=Object.keys(this);let n=e.length,r=!1;for(;n--;){const i=e[n];t&&!ge(0,this[i],i,t,!0)||(delete this[i],r=!0)}return r}normalize(t){const e=this,n={};return L.forEach(this,((r,i)=>{const s=L.findKey(n,i);if(s)return e[s]=pe(r),void delete e[i];const o=t?function(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,n)=>e.toUpperCase()+n))}(i):String(i).trim();o!==i&&delete e[i],e[o]=pe(r),n[o]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return L.forEach(this,((n,r)=>{null!=n&&!1!==n&&(e[r]=t&&L.isArray(n)?n.join(", "):n)})),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const n=new this(t);return e.forEach((t=>n.set(t))),n}static accessor(t){const e=(this[de]=this[de]={accessors:{}}).accessors,n=this.prototype;function r(t){const r=fe(t);e[r]||(!function(t,e){const n=L.toCamelCase(" "+e);["get","set","has"].forEach((r=>{Object.defineProperty(t,r+n,{value:function(t,n,i){return this[r].call(this,e,t,n,i)},configurable:!0})}))}(n,t),e[r]=!0)}return L.isArray(t)?t.forEach(r):r(t),this}}me.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),L.freezeMethods(me.prototype),L.freezeMethods(me);var ye=me;function ve(t,e){const n=this||ue,r=e||n,i=ye.from(r.headers);let s=r.data;return L.forEach(t,(function(t){s=t.call(n,s,i.normalize(),e?e.status:void 0)})),i.normalize(),s}function we(t){return!(!t||!t.__CANCEL__)}function be(t,e,n){V.call(this,null==t?"canceled":t,V.ERR_CANCELED,e,n),this.name="CanceledError"}L.inherits(be,V,{__CANCEL__:!0});var Ee=be;function _e(t,e,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?e(new V("Request failed with status code "+n.status,[V.ERR_BAD_REQUEST,V.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}var Ie=ie.isStandardBrowserEnv?{write:function(t,e,n,r,i,s){const o=[];o.push(t+"="+encodeURIComponent(e)),L.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),L.isString(r)&&o.push("path="+r),L.isString(i)&&o.push("domain="+i),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Te(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function Se(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?Te(t,e):e}var Ae=ie.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let n;function r(n){let r=n;return t&&(e.setAttribute("href",r),r=e.href),e.setAttribute("href",r),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return n=r(window.location.href),function(t){const e=L.isString(t)?r(t):t;return e.protocol===n.protocol&&e.host===n.host}}():function(){return!0};function Ce(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}var Ne=function(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i,s=0,o=0;return e=void 0!==e?e:1e3,function(a){const c=Date.now(),u=r[o];i||(i=c),n[s]=a,r[s]=c;let l=o,h=0;for(;l!==s;)h+=n[l++],l%=t;if(s=(s+1)%t,s===o&&(o=(o+1)%t),c-i<e)return;const d=u&&c-u;return d?Math.round(1e3*h/d):void 0}};function Oe(t,e){let n=0;const r=Ne(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,c=r(a);n=s;const u={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&s<=o?(o-s)/c:void 0,event:i};u[e?"download":"upload"]=!0,t(u)}}const ke={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(t){return new Promise((function(e,n){let r=t.data;const i=ye.from(t.headers).normalize(),s=t.responseType;let o;function a(){t.cancelToken&&t.cancelToken.unsubscribe(o),t.signal&&t.signal.removeEventListener("abort",o)}L.isFormData(r)&&(ie.isStandardBrowserEnv||ie.isStandardBrowserWebWorkerEnv)&&i.setContentType(!1);let c=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(e+":"+n))}const u=Se(t.baseURL,t.url);function l(){if(!c)return;const r=ye.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());_e((function(t){e(t),a()}),(function(t){n(t),a()}),{data:s&&"text"!==s&&"json"!==s?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:t,request:c}),c=null}if(c.open(t.method.toUpperCase(),ee(u,t.params,t.paramsSerializer),!0),c.timeout=t.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(n(new V("Request aborted",V.ECONNABORTED,t,c)),c=null)},c.onerror=function(){n(new V("Network Error",V.ERR_NETWORK,t,c)),c=null},c.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const r=t.transitional||re;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new V(e,r.clarifyTimeoutError?V.ETIMEDOUT:V.ECONNABORTED,t,c)),c=null},ie.isStandardBrowserEnv){const e=(t.withCredentials||Ae(u))&&t.xsrfCookieName&&Ie.read(t.xsrfCookieName);e&&i.set(t.xsrfHeaderName,e)}void 0===r&&i.setContentType(null),"setRequestHeader"in c&&L.forEach(i.toJSON(),(function(t,e){c.setRequestHeader(e,t)})),L.isUndefined(t.withCredentials)||(c.withCredentials=!!t.withCredentials),s&&"json"!==s&&(c.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&c.addEventListener("progress",Oe(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",Oe(t.onUploadProgress)),(t.cancelToken||t.signal)&&(o=e=>{c&&(n(!e||e.type?new Ee(null,t,c):e),c.abort(),c=null)},t.cancelToken&&t.cancelToken.subscribe(o),t.signal&&(t.signal.aborted?o():t.signal.addEventListener("abort",o)));const h=Ce(u);h&&-1===ie.protocols.indexOf(h)?n(new V("Unsupported protocol "+h+":",V.ERR_BAD_REQUEST,t)):c.send(r||null)}))}};L.forEach(ke,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){}Object.defineProperty(t,"adapterName",{value:e})}}));var Re={getAdapter:t=>{t=L.isArray(t)?t:[t];const{length:e}=t;let n,r;for(let i=0;i<e&&(n=t[i],!(r=L.isString(n)?ke[n.toLowerCase()]:n));i++);if(!r){if(!1===r)throw new V(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(L.hasOwnProp(ke,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!L.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:ke};function De(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ee(null,t)}function Le(t){De(t),t.headers=ye.from(t.headers),t.data=ve.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);return Re.getAdapter(t.adapter||ue.adapter)(t).then((function(e){return De(t),e.data=ve.call(t,t.transformResponse,e),e.headers=ye.from(e.headers),e}),(function(e){return we(e)||(De(t),e&&e.response&&(e.response.data=ve.call(t,t.transformResponse,e.response),e.response.headers=ye.from(e.response.headers))),Promise.reject(e)}))}const Pe=t=>t instanceof ye?t.toJSON():t;function xe(t,e){e=e||{};const n={};function r(t,e,n){return L.isPlainObject(t)&&L.isPlainObject(e)?L.merge.call({caseless:n},t,e):L.isPlainObject(e)?L.merge({},e):L.isArray(e)?e.slice():e}function i(t,e,n){return L.isUndefined(e)?L.isUndefined(t)?void 0:r(void 0,t,n):r(t,e,n)}function s(t,e){if(!L.isUndefined(e))return r(void 0,e)}function o(t,e){return L.isUndefined(e)?L.isUndefined(t)?void 0:r(void 0,t):r(void 0,e)}function a(n,i,s){return s in e?r(n,i):s in t?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(t,e)=>i(Pe(t),Pe(e),!0)};return L.forEach(Object.keys(t).concat(Object.keys(e)),(function(r){const s=c[r]||i,o=s(t[r],e[r],r);L.isUndefined(o)&&s!==a||(n[r]=o)})),n}const Me={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{Me[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));const Ue={};Me.transitional=function(t,e,n){function r(t,e){return"[Axios v1.3.6] Transitional option '"+t+"'"+e+(n?". "+n:"")}return(n,i,s)=>{if(!1===t)throw new V(r(i," has been removed"+(e?" in "+e:"")),V.ERR_DEPRECATED);return e&&!Ue[i]&&(Ue[i]=!0,console.warn(r(i," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,i,s)}};var Fe={assertOptions:function(t,e,n){if("object"!=typeof t)throw new V("options must be an object",V.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const e=t[s],n=void 0===e||o(e,s,t);if(!0!==n)throw new V("option "+s+" must be "+n,V.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new V("Unknown option "+s,V.ERR_BAD_OPTION)}},validators:Me};const Be=Fe.validators;class Ve{constructor(t){this.defaults=t,this.interceptors={request:new ne,response:new ne}}request(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},e=xe(this.defaults,e);const{transitional:n,paramsSerializer:r,headers:i}=e;let s;void 0!==n&&Fe.assertOptions(n,{silentJSONParsing:Be.transitional(Be.boolean),forcedJSONParsing:Be.transitional(Be.boolean),clarifyTimeoutError:Be.transitional(Be.boolean)},!1),null!=r&&(L.isFunction(r)?e.paramsSerializer={serialize:r}:Fe.assertOptions(r,{encode:Be.function,serialize:Be.function},!0)),e.method=(e.method||this.defaults.method||"get").toLowerCase(),s=i&&L.merge(i.common,i[e.method]),s&&L.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete i[t]})),e.headers=ye.concat(s,i);const o=[];let a=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(a=a&&t.synchronous,o.unshift(t.fulfilled,t.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(t){c.push(t.fulfilled,t.rejected)}));let l,h=0;if(!a){const t=[Le.bind(this),void 0];for(t.unshift.apply(t,o),t.push.apply(t,c),l=t.length,u=Promise.resolve(e);h<l;)u=u.then(t[h++],t[h++]);return u}l=o.length;let d=e;for(h=0;h<l;){const t=o[h++],e=o[h++];try{d=t(d)}catch(t){e.call(this,t);break}}try{u=Le.call(this,d)}catch(t){return Promise.reject(t)}for(h=0,l=c.length;h<l;)u=u.then(c[h++],c[h++]);return u}getUri(t){return ee(Se((t=xe(this.defaults,t)).baseURL,t.url),t.params,t.paramsSerializer)}}L.forEach(["delete","get","head","options"],(function(t){Ve.prototype[t]=function(e,n){return this.request(xe(n||{},{method:t,url:e,data:(n||{}).data}))}})),L.forEach(["post","put","patch"],(function(t){function e(e){return function(n,r,i){return this.request(xe(i||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Ve.prototype[t]=e(),Ve.prototype[t+"Form"]=e(!0)}));var je=Ve;class $e{constructor(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const n=this;this.promise.then((t=>{if(!n._listeners)return;let e=n._listeners.length;for(;e-- >0;)n._listeners[e](t);n._listeners=null})),this.promise.then=t=>{let e;const r=new Promise((t=>{n.subscribe(t),e=t})).then(t);return r.cancel=function(){n.unsubscribe(e)},r},t((function(t,r,i){n.reason||(n.reason=new Ee(t,r,i),e(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;return{token:new $e((function(e){t=e})),cancel:t}}}var qe=$e;const He={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(He).forEach((([t,e])=>{He[e]=t}));var ze=He;const Ge=function t(e){const r=new je(e),i=n(je.prototype.request,r);return L.extend(i,je.prototype,r,{allOwnKeys:!0}),L.extend(i,r,null,{allOwnKeys:!0}),i.create=function(n){return t(xe(e,n))},i}(ue);Ge.Axios=je,Ge.CanceledError=Ee,Ge.CancelToken=qe,Ge.isCancel=we,Ge.VERSION="1.3.6",Ge.toFormData=Jt,Ge.AxiosError=V,Ge.Cancel=Ge.CanceledError,Ge.all=function(t){return Promise.all(t)},Ge.spread=function(t){return function(e){return t.apply(null,e)}},Ge.isAxiosError=function(t){return L.isObject(t)&&!0===t.isAxiosError},Ge.mergeConfig=xe,Ge.AxiosHeaders=ye,Ge.formToJSON=t=>oe(L.isHTMLForm(t)?new FormData(t):t),Ge.HttpStatusCode=ze,Ge.default=Ge;var Ke=Ge;const{Axios:We,AxiosError:Je,CanceledError:Qe,isCancel:Xe,CancelToken:Ye,VERSION:Ze,all:tn,Cancel:en,isAxiosError:nn,spread:rn,toFormData:sn,AxiosHeaders:on,HttpStatusCode:an,formToJSON:cn,mergeConfig:un}=Ke;document.querySelector("#wrongSearch");async function ln(t=1){const e=`https://api.themoviedb.org/3/trending/movie/week?api_key=b118f38ec77100db6763b4cc83604589&language=en-US&page=${t}`;return await Ke.get(e).then((t=>t.data)).catch((t=>console.log(t)))}document.querySelector("#wrongSearch"),document.querySelector("[data-input]");const hn=async()=>{const t=await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=b118f38ec77100db6763b4cc83604589"),e=await t.json();return dn(e),e},dn=t=>{const e=t.genres;sessionStorage.setItem("genresIds",JSON.stringify(e))},fn=document.querySelector("[data-input]"),pn=document.querySelector("[data-search]"),gn=document.querySelector(".films-cards-set"),mn=document.querySelector("#wrongSearch");let yn="";const vn=t=>yn=t.target.value.trim(),wn=(()=>{hn();const t=sessionStorage.getItem("genresIds");return JSON.parse(t)})(),bn=t=>t.map((t=>{let e;const n=(t=>{let e=[];return t.map((t=>{e.push(wn.find((e=>e.id===t)))})),e.map((t=>t.name)).splice(0,3).join(", ")})(t.genre_ids);e=null===t.poster_path?"https://www.more-kino.info/drama/hide-2/hide-2.jpg":`https://image.tmdb.org/t/p/w500/${t.poster_path}`;const r=String(t.vote_average).slice(0,3);return`\n        <div class="film-card" data-id="${t.id}">\n  <div>\n    <img\n      class="film-img"\n      src="${e}"\n      alt="${t.title}"\n      loading="lazy"\n      srcset="https://image.tmdb.org/t/p/original/${t.poster_path} 2x"\n    />\n    <div class="info">\n      <p class="info-title">${t.original_title}</p>\n      <p class="info-text">\n        ${n} | ${t.release_date.substring(0,4)}\n        <span class="info-rating">${r}</span>\n      </p>\n    </div>\n  </div>\n</div>\n        `})).join(" ");pn.addEventListener("click",(async t=>{let e;t.preventDefault(),e=1,gn.innerHTML="",mn.innerHTML=""})),vn&&fn.addEventListener("input",vn);var En,_n={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */window,En=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){t.exports=function(t,e){var n,r,i,s,o=Object.prototype.hasOwnProperty;for(i=1,s=arguments.length;i<s;i+=1)for(r in n=arguments[i])o.call(n,r)&&(t[r]=n[r]);return t}},function(t,e,n){t.exports=function(t){return void 0===t}},function(t,e,n){t.exports=function(t){return t instanceof Array}},function(t,e,n){var r=n(2),i=n(17),s=n(6);t.exports=function(t,e,n){r(t)?i(t,e,n):s(t,e,n)}},function(t,e,n){t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){t.exports=function(t){return t instanceof Function}},function(t,e,n){t.exports=function(t,e,n){var r;for(r in n=n||null,t)if(t.hasOwnProperty(r)&&!1===e.call(n,t[r],r,t))break}},function(t,e,n){var r=n(18),i=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&r(n,t),e.hasOwnProperty("static")&&(i(n,e.static),delete e.static),i(n.prototype,e),n}},function(t,e,n){var r=n(2);t.exports=function(t,e,n){var i,s;if(n=n||0,!r(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(s=e.length,i=n;n>=0&&i<s;i+=1)if(e[i]===t)return i;return-1}},function(t,e,n){var r=n(29),i=n(30),s=n(5),o={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),i=s(t)?t(e):r(t,e);return n.innerHTML=i,n.firstChild},bind:function(t,e){var n,r=Array.prototype.slice;return t.bind?t.bind.apply(t,r.call(arguments,1)):(n=r.call(arguments,2),function(){return t.apply(e,n.length?n.concat(r.call(arguments)):arguments)})},sendHostName:function(){i("pagination","UA-129987462-1")}};t.exports=o},function(t,e,n){n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){var r=n(13),i=n(7),s=n(0),o=n(1),a=n(20),c=n(9),u={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=i({init:function(t,e){this._options=s({},u,e),this._currentPage=0,this._view=new a(t,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,r="prev"===t;return this._options.centerAlign?r?e-1:e+n:r?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),r=this._getPageIndex(t),i=this._getPageIndex(n),s=this._getEdge(t);return e.leftPageNumber=s.left,e.rightPageNumber=s.right,e.prevMore=r>1,e.nextMore=r<i,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,r,i=this._getLastPage(),s=this._options.visiblePages,o=this._getPageIndex(t);return this._options.centerAlign?(r=Math.floor(s/2),(n=(e=Math.max(t-r,1))+s-1)>i&&(e=Math.max(i-s+1,1),n=i)):(e=(o-1)*s+1,n=o*s,n=Math.min(n,i)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){o(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});r.mixin(l),t.exports=l},function(t,e,n){var r=n(0),i=n(14),s=n(4),o=n(16),a=n(2),c=n(5),u=n(3),l=/\s+/g;function h(){this.events=null,this.contexts=null}h.mixin=function(t){r(t.prototype,h.prototype)},h.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},h.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},h.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},h.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},h.prototype._memorizeContext=function(t){var e,n;i(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},h.prototype._forgetContext=function(t){var e,n;i(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},h.prototype._bindEvent=function(t,e,n){var r=this._safeEvent(t);this._memorizeContext(n),r.push(this._getHandlerItem(e,n))},h.prototype.on=function(t,e,n){var r=this;s(t)?(t=t.split(l),u(t,(function(t){r._bindEvent(t,e,n)}))):o(t)&&(n=e,u(t,(function(t,e){r.on(e,t,n)})))},h.prototype.once=function(t,e,n){var r=this;if(o(t))return n=e,void u(t,(function(t,e){r.once(e,t,n)}));this.on(t,(function i(){e.apply(n,arguments),r.off(t,i,n)}),n)},h.prototype._spliceMatches=function(t,e){var n,r=0;if(a(t))for(n=t.length;r<n;r+=1)!0===e(t[r])&&(t.splice(r,1),n-=1,r-=1)},h.prototype._matchHandler=function(t){var e=this;return function(n){var r=t===n.handler;return r&&e._forgetContext(n.context),r}},h.prototype._matchContext=function(t){var e=this;return function(n){var r=t===n.context;return r&&e._forgetContext(n.context),r}},h.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(r){var i=t===r.handler,s=e===r.context,o=i&&s;return o&&n._forgetContext(r.context),o}},h.prototype._offByEventName=function(t,e){var n=this,r=c(e),i=n._matchHandler(e);t=t.split(l),u(t,(function(t){var e=n._safeEvent(t);r?n._spliceMatches(e,i):(u(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},h.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);u(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},h.prototype._offByObject=function(t,e){var n,r=this;this._indexOfContext(t)<0?u(t,(function(t,e){r.off(e,t)})):s(e)?(n=this._matchContext(t),r._spliceMatches(this._safeEvent(e),n)):c(e)?(n=this._matchHandlerAndContext(e,t),u(this._safeEvent(),(function(t){r._spliceMatches(t,n)}))):(n=this._matchContext(t),u(this._safeEvent(),(function(t){r._spliceMatches(t,n)})))},h.prototype.off=function(t,e){s(t)?this._offByEventName(t,e):arguments.length?c(t)?this._offByHandler(t):o(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},h.prototype.fire=function(t){this.invoke.apply(this,arguments)},h.prototype.invoke=function(t){var e,n,r,i;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),r=0;e[r];){if(!1===(i=e[r]).handler.apply(i.context,n))return!1;r+=1}return!0},h.prototype.hasListener=function(t){return this.getListenerLength(t)>0},h.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=h},function(t,e,n){var r=n(1),i=n(15);t.exports=function(t){return!r(t)&&!i(t)}},function(t,e,n){t.exports=function(t){return null===t}},function(t,e,n){t.exports=function(t){return t===Object(t)}},function(t,e,n){t.exports=function(t,e,n){var r=0,i=t.length;for(n=n||null;r<i&&!1!==e.call(n,t[r],r,t);r+=1);}},function(t,e,n){var r=n(19);t.exports=function(t,e){var n=r(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){var r=n(3),i=n(7),s=n(21),o=n(22),a=n(24),c=n(25),u=n(0),l=n(4),h=n(28),d=n(9),f={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},p=["first","prev","next","last"],g=["prev","next"],m=i({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=u({},f,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(l(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!h(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){r(p,(function(t){this._buttons[t]=d.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){r(p,(function(t){var e="disabled"+d.capitalizeFirstLetter(t);this._buttons[e]=d.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){r(g,(function(t){var e=t+"More";this._buttons[e]=d.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,c(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,c(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,r=t.leftPageNumber,i=t.rightPageNumber;for(n=r;n<=i;n+=1)n===t.page?e=d.createElementByTemplate(this._template.currentPage,{page:n}):(e=d.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==r||t.prevMore||c(e,this._firstItemClassName),n!==i||t.nextMore||c(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();o(e,"click",(function(e){var n,r,i=s(e);a(e),(r=this._getButtonType(i))||(n=this._getPageNumber(i)),t(r,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return r(n,(function(n,r){return!d.isContained(t,n)||(e=r,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,r=this._enabledPageElements.length;n<r;n+=1)if(e=this._enabledPageElements[n],d.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],r(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=m},function(t,e,n){t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){var r=n(4),i=n(3),s=n(23);function o(t,e,n,r){function o(e){n.call(r||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,o):"attachEvent"in t&&t.attachEvent("on"+e,o),function(t,e,n,r){var o=s(t,e),a=!1;i(o,(function(t){return t.handler!==n||(a=!0,!1)})),a||o.push({handler:n,wrappedHandler:r})}(t,e,n,o)}t.exports=function(t,e,n,s){r(e)?i(e.split(/\s+/g),(function(e){o(t,e,n,s)})):i(e,(function(e,r){o(t,r,e,n)}))}},function(t,e,n){var r="_feEventKey";t.exports=function(t,e){var n,i=t[r];return i||(i=t[r]={}),(n=i[e])||(n=i[e]=[]),n}},function(t,e,n){t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){var r=n(3),i=n(8),s=n(26),o=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),a=t.classList,c=[];a?r(n,(function(e){t.classList.add(e)})):((e=s(t))&&(n=[].concat(e.split(/\s+/),n)),r(n,(function(t){i(t,c)<0&&c.push(t)})),o(t,c))}},function(t,e,n){var r=n(1);t.exports=function(t){return t&&t.className?r(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){var r=n(2),i=n(1);t.exports=function(t,e){e=(e=r(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),i(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){var r=n(8),i=n(3),s=n(2),o=n(4),a=n(0),c=/{{\s?|\s?}}/g,u=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,h=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,d=/\./,f=/^["']\w+["']$/,p=/"|'/g,g=/^-?\d+\.?\d*$/,m={if:function(t,e,n){var r=function(t,e){var n=[t],r=[],s=0,o=0;return i(e,(function(t,i){0===t.indexOf("if")?s+=1:"/if"===t?s-=1:s||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),r.push(e.slice(o,i)),o=i+1)})),r.push(e.slice(o)),{exps:n,sourcesInsideIf:r}}(t,e),s=!1,o="";return i(r.exps,(function(t,e){return(s=b(t,n))&&(o=E(r.sourcesInsideIf[e],n)),!s})),o},each:function(t,e,n){var r=b(t,n),o=s(r)?"@index":"@key",c={},u="";return i(r,(function(t,r){c[o]=r,c["@this"]=t,a(n,c),u+=E(e.slice(),n)})),u},with:function(t,e,n){var i=r("as",t),s=t[i+1],o=b(t.slice(0,i),n),c={};return c[s]=o,E(e,a(n,c))||""}},y=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,r,i=[],s=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)r=n.index,i.push(t.slice(s,r)),s=r+n[0].length,n=e.exec(t);return i.push(t.slice(s)),i};function v(t,e){var n,r=e[t];return"true"===t?r=!0:"false"===t?r=!1:f.test(t)?r=t.replace(p,""):u.test(t)?r=v((n=t.split(l))[0],e)[v(n[1],e)]:h.test(t)?r=v((n=t.split(d))[0],e)[n[1]]:g.test(t)&&(r=parseFloat(t)),r}function w(t,e,n){for(var r,i,s,a,c=m[t],u=1,l=2,h=e[l];u&&o(h);)0===h.indexOf(t)?u+=1:0===h.indexOf("/"+t)&&(u-=1,r=l),h=e[l+=2];if(u)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=c(e[0].split(" ").slice(1),(i=0,s=r,(a=e.splice(i+1,s-i)).pop(),a),n),e}function b(t,e){var n=v(t[0],e);return n instanceof Function?function(t,e,n){var r=[];return i(e,(function(t){r.push(v(t,n))})),t.apply(null,r)}(n,t.slice(1),e):n}function E(t,e){for(var n,r,i,s=1,a=t[s];o(a);)r=(n=a.split(" "))[0],m[r]?(i=w(r,t.splice(s,t.length-s),e),t=t.concat(i)):t[s]=b(n,e),a=t[s+=2];return t.join("")}t.exports=function(t,e){return E(y(t,c),e)}},function(t,e,n){var r=n(1),i=n(31);t.exports=function(t,e){var n=location.hostname,s="TOAST UI "+t+" for "+n+": Statistics",o=window.localStorage.getItem(s);(r(window.tui)||!1!==window.tui.usageStatistics)&&(o&&!function(t){return(new Date).getTime()-t>6048e5}(o)||(window.localStorage.setItem(s,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||i("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){var r=n(6);t.exports=function(t,e){var n=document.createElement("img"),i="";return r(e,(function(t,e){i+="&"+e+"="+t})),i=i.substring(1),n.src=t+"?"+i,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},_n=En();const In=document.querySelector("#pagination");function Tn(t,n){const r={itemsPerPage:20,totalItems:t,visiblePages:n<5?n:5},i=new(e(_n))(In,r);return In.style.display=n>1?"block":"none",i}function Sn({title:t,original_title:e,overview:n,popularity:r,poster_path:i,id:s,vote_average:o,vote_count:a,genres:c}){i||(poster="https://live.staticflickr.com/65535/52673964597_7ac974f3b4_k.jpg");return`\n \n\n      <img\n        class="movie-detail__image"\n        src="https://image.tmdb.org/t/p/w500//${i}" srcset="https://image.tmdb.org/t/p/original/${i} 2x"\n      />\n      <div class="modal__content">\n        <h2 class="modal__title">${t}</h2>\n        <ul class="modal__list">\n          <li class="modal__item">\n            <p class="modal__item--label">Vote / Votes</p>\n            <div class="modal__item--vote">\n              <p class="modal__item--value modal__item--value--vote">\n                <span class="modal__item--average">${o.toFixed(1)}</span>\n                /<span class="modal__item--count">${a}</span>\n              </p>\n            </div>\n          </li>\n          <li class="modal__item">\n            <p class="modal__item--label">Popularity</p>\n            <p class="modal__item--value">${r.toFixed(1)}</p>\n          </li>\n          <li class="modal__item">\n            <p class="modal__item--label">Original Title</p>\n            <p class="modal__item--value big">${e}</p>\n          </li>\n          <li class="modal__item">\n            <p class="modal__item--label">Genre</p>\n            <p class="modal__item--value">\n  ${c.map((t=>t.name)).join(", ")}\n</p>\n          </li>\n        </ul>\n        <div class="modal__overview">\n          <h3 class="modal__overview--about">ABOUT</h3>\n          <p class="modal__overview--overview">${n}</p>\n        </div>\n        <div class="modal__buttons">\n          <button id="watched" class="modal__button modal__button--watched" data-id="${s}">\n            Add to watched\n          </button>\n          <button id="queue" class="modal__button modal__button--queue" data-id="${s}">\n            Add to queue\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>`}async function An(t){const e=`https://api.themoviedb.org/3/movie/${t}?api_key=b118f38ec77100db6763b4cc83604589`;return await Ke.get(e)}const Cn=document.querySelector(".movie-info-content"),Nn={openModalBtn:document.querySelector(".films-cards-set"),closeModalBtn:document.querySelector(".modal__cross-btn"),modal:document.querySelector(".backdrop")};function On(){Nn.modal.classList.toggle("is-hidden")}Nn.closeModalBtn.addEventListener("click",On);Nn.modal.addEventListener("click",(t=>{t.target===Nn.modal&&On()})),window.addEventListener("keydown",(t=>{"Escape"!==t.key||Nn.modal.classList.add("is-hidden")}));var kn,Rn,Dn,Ln=kn={};function Pn(){throw new Error("setTimeout has not been defined")}function xn(){throw new Error("clearTimeout has not been defined")}function Mn(t){if(Rn===setTimeout)return setTimeout(t,0);if((Rn===Pn||!Rn)&&setTimeout)return Rn=setTimeout,setTimeout(t,0);try{return Rn(t,0)}catch(e){try{return Rn.call(null,t,0)}catch(e){return Rn.call(this,t,0)}}}!function(){try{Rn="function"==typeof setTimeout?setTimeout:Pn}catch(t){Rn=Pn}try{Dn="function"==typeof clearTimeout?clearTimeout:xn}catch(t){Dn=xn}}();var Un,Fn=[],Bn=!1,Vn=-1;function jn(){Bn&&Un&&(Bn=!1,Un.length?Fn=Un.concat(Fn):Vn=-1,Fn.length&&$n())}function $n(){if(!Bn){var t=Mn(jn);Bn=!0;for(var e=Fn.length;e;){for(Un=Fn,Fn=[];++Vn<e;)Un&&Un[Vn].run();Vn=-1,e=Fn.length}Un=null,Bn=!1,function(t){if(Dn===clearTimeout)return clearTimeout(t);if((Dn===xn||!Dn)&&clearTimeout)return Dn=clearTimeout,clearTimeout(t);try{Dn(t)}catch(e){try{return Dn.call(null,t)}catch(e){return Dn.call(this,t)}}}(t)}}function qn(t,e){this.fun=t,this.array=e}function Hn(){}Ln.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];Fn.push(new qn(t,e)),1!==Fn.length||Bn||Mn($n)},qn.prototype.run=function(){this.fun.apply(null,this.array)},Ln.title="browser",Ln.browser=!0,Ln.env={},Ln.argv=[],Ln.version="",Ln.versions={},Ln.on=Hn,Ln.addListener=Hn,Ln.once=Hn,Ln.off=Hn,Ln.removeListener=Hn,Ln.removeAllListeners=Hn,Ln.emit=Hn,Ln.prependListener=Hn,Ln.prependOnceListener=Hn,Ln.listeners=function(t){return[]},Ln.binding=function(t){throw new Error("process.binding is not supported")},Ln.cwd=function(){return"/"},Ln.chdir=function(t){throw new Error("process.chdir is not supported")},Ln.umask=function(){return 0};
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
const zn=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},Gn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let e=0;e<t.length;e+=3){const i=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=i>>2,l=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(s>>10)),e[r++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let e=0;e<t.length;){const i=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==i||null==s||null==o||null==a)throw new Kn;const c=i<<2|s>>4;if(r.push(c),64!==o){const t=s<<4&240|o>>2;if(r.push(t),64!==a){const t=o<<6&192|a;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
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
 */class Kn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wn=function(t){return function(t){const e=zn(t);return Gn.encodeByteArray(e,!0)}(t).replace(/\./g,"")},Jn=function(t){try{return Gn.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
const Qn=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Xn=()=>{try{return Qn()||(()=>{if(void 0===kn||void 0===kn.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&Jn(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},Yn=t=>{var e,n;return null===(n=null===(e=Xn())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},Zn=t=>{const e=Yn(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},tr=t=>{var e;return null===(e=Xn())||void 0===e?void 0:e[`_${t}`]};
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
class er{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
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
 */function nr(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Wn(JSON.stringify({alg:"none",type:"JWT"})),Wn(JSON.stringify(s)),""].join(".")}
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
 */function rr(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function ir(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function sr(){const t=rr();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function or(){try{return"object"==typeof indexedDB}catch(t){return!1}}function ar(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}}))}function cr(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
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
 */class ur extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,ur.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lr.prototype.create)}}class lr{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?function(t,e){return t.replace(hr,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new ur(r,o,n)}}const hr=/\{\$([^}]+)}/g;
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
 */function dr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(pr(n)&&pr(s)){if(!fr(n,s))return!1}else if(n!==s)return!1}for(const t of r)if(!n.includes(t))return!1;return!0}function pr(t){return null!==t&&"object"==typeof t}
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
function gr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function mr(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function yr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
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
 */function vr(t,e){const n=new wr(t,e);return n.subscribe.bind(n)}class wr{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=br),void 0===r.error&&(r.error=br),void 0===r.complete&&(r.complete=br);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function br(){}
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
 */function Er(t,e=1e3,n=2){const r=e*Math.pow(n,t),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+i)}
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
function _r(t){return t&&t._delegate?t._delegate:t}class Ir{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
class Tr{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new er;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(r)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,"[DEFAULT]"===r?void 0:r),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var r;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Sr{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Tr(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
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
 */const Ar=[];var Cr,Nr;(Nr=Cr||(Cr={}))[Nr.DEBUG=0]="DEBUG",Nr[Nr.VERBOSE=1]="VERBOSE",Nr[Nr.INFO=2]="INFO",Nr[Nr.WARN=3]="WARN",Nr[Nr.ERROR=4]="ERROR",Nr[Nr.SILENT=5]="SILENT";const Or={debug:Cr.DEBUG,verbose:Cr.VERBOSE,info:Cr.INFO,warn:Cr.WARN,error:Cr.ERROR,silent:Cr.SILENT},kr=Cr.INFO,Rr={[Cr.DEBUG]:"log",[Cr.VERBOSE]:"log",[Cr.INFO]:"info",[Cr.WARN]:"warn",[Cr.ERROR]:"error"},Dr=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=Rr[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class Lr{constructor(t){this.name=t,this._logLevel=kr,this._logHandler=Dr,this._userLogHandler=null,Ar.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Cr))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?Or[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Cr.DEBUG,...t),this._logHandler(this,Cr.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Cr.VERBOSE,...t),this._logHandler(this,Cr.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Cr.INFO,...t),this._logHandler(this,Cr.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Cr.WARN,...t),this._logHandler(this,Cr.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Cr.ERROR,...t),this._logHandler(this,Cr.ERROR,...t)}}let Pr,xr;const Mr=new WeakMap,Ur=new WeakMap,Fr=new WeakMap,Br=new WeakMap,Vr=new WeakMap;let jr={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return Ur.get(t);if("objectStoreNames"===e)return t.objectStoreNames||Fr.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hr(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function $r(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(xr||(xr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(zr(this),e),Hr(Mr.get(this))}:function(...e){return Hr(t.apply(zr(this),e))}:function(e,...n){const r=t.call(zr(this),e,...n);return Fr.set(r,e.sort?e.sort():[e]),Hr(r)}}function qr(t){return"function"==typeof t?$r(t):(t instanceof IDBTransaction&&function(t){if(Ur.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));Ur.set(t,e)}(t),e=t,(Pr||(Pr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,jr):t);var e}function Hr(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(Hr(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&Mr.set(e,t)})).catch((()=>{})),Vr.set(e,t),e}(t);if(Br.has(t))return Br.get(t);const e=qr(t);return e!==t&&(Br.set(t,e),Vr.set(e,t)),e}const zr=t=>Vr.get(t);function Gr(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Hr(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(Hr(o.result),t.oldVersion,t.newVersion,Hr(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const Kr=["get","getKey","getAll","getAllKeys","count"],Wr=["put","add","delete","clear"],Jr=new Map;function Qr(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(Jr.get(e))return Jr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Wr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Kr.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return Jr.set(e,s),s}jr=(t=>({...t,get:(e,n,r)=>Qr(e,n)||t.get(e,n,r),has:(e,n)=>!!Qr(e,n)||t.has(e,n)}))(jr);
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
class Xr{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const Yr=new Lr("@firebase/app"),Zr={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ti=new Map,ei=new Map;function ni(t,e){try{t.container.addComponent(e)}catch(n){Yr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ri(t){const e=t.name;if(ei.has(e))return Yr.debug(`There were multiple attempts to register component ${e}.`),!1;ei.set(e,t);for(const e of ti.values())ni(e,t);return!0}function ii(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
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
const si=new lr("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class oi{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ir("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw si.create("app-deleted",{appName:this._name})}}
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
 */function ai(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const r=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),i=r.name;if("string"!=typeof i||!i)throw si.create("bad-app-name",{appName:String(i)});var s;if(n||(n=null===(s=Xn())||void 0===s?void 0:s.config),!n)throw si.create("no-options");const o=ti.get(i);if(o){if(fr(n,o.options)&&fr(r,o.config))return o;throw si.create("duplicate-app",{appName:i})}const a=new Sr(i);for(const t of ei.values())a.addComponent(t);const c=new oi(n,r,a);return ti.set(i,c),c}function ci(t="[DEFAULT]"){const e=ti.get(t);if(!e&&"[DEFAULT]"===t)return ai();if(!e)throw si.create("no-app",{appName:t});return e}function ui(t,e,n){var r;let i=null!==(r=Zr[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${i}" with version "${e}":`];return s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Yr.warn(t.join(" "))}ri(new Ir(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}let li=null;function hi(){return li||(li=Gr("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore("firebase-heartbeat-store")}}).catch((t=>{throw si.create("idb-open",{originalErrorMessage:t.message})}))),li}async function di(t,e){try{const n=(await hi()).transaction("firebase-heartbeat-store","readwrite"),r=n.objectStore("firebase-heartbeat-store");return await r.put(e,fi(t)),n.done}catch(t){if(t instanceof ur)Yr.warn(t.message);else{const e=si.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});Yr.warn(e.message)}}}function fi(t){return`${t.name}!${t.options.appId}`}
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
 */class pi{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new mi(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=gi();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=gi(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),yi(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),yi(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Wn(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function gi(){return(new Date).toISOString().substring(0,10)}class mi{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!or()&&ar().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{return(await hi()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(fi(t))}catch(t){if(t instanceof ur)Yr.warn(t.message);else{const e=si.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});Yr.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return di(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return di(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function yi(t){return Wn(JSON.stringify({version:2,heartbeats:t})).length}
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
 */var vi;vi="",ri(new Ir("platform-logger",(t=>new Xr(t)),"PRIVATE")),ri(new Ir("heartbeat",(t=>new pi(t)),"PRIVATE")),ui("@firebase/app","0.9.7",vi),ui("@firebase/app","0.9.7","esm2017"),ui("fire-js","");
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
ui("firebase","9.19.1","app");const wi=new lr("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function bi(t){return t instanceof ur&&t.code.includes("request-failed")}
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
 */function Ei({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function _i(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}async function Ii(t,e){const n=(await e.json()).error;return wi.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Ti({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Si(t,{refreshToken:e}){const n=Ti(t);return n.append("Authorization",function(t){return`FIS_v2 ${t}`}
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
 */(e)),n}async function Ai(t){const e=await t();return e.status>=500&&e.status<600?t():e}
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
 */function Ci(t){return new Promise((e=>{setTimeout(e,t)}))}
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
const Ni=/^[cdef][\w-]{21}$/;function Oi(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=function(t){return(e=t,btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var e}
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
 */(t);return Ni.test(e)?e:""}catch(t){return""}}function ki(t){return`${t.appName}!${t.appId}`}
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
 */const Ri=new Map;function Di(t,e){const n=ki(t);Li(n,e),function(t,e){const n=xi();n&&n.postMessage({key:t,fid:e});Mi()}(n,e)}function Li(t,e){const n=Ri.get(t);if(n)for(const t of n)t(e)}let Pi=null;function xi(){return!Pi&&"BroadcastChannel"in self&&(Pi=new BroadcastChannel("[Firebase] FID Change"),Pi.onmessage=t=>{Li(t.data.key,t.data.fid)}),Pi}function Mi(){0===Ri.size&&Pi&&(Pi.close(),Pi=null)}
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
 */let Ui=null;function Fi(){return Ui||(Ui=Gr("firebase-installations-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore("firebase-installations-store")}})),Ui}async function Bi(t,e){const n=ki(t),r=(await Fi()).transaction("firebase-installations-store","readwrite"),i=r.objectStore("firebase-installations-store"),s=await i.get(n);return await i.put(e,n),await r.done,s&&s.fid===e.fid||Di(t,e.fid),e}async function Vi(t){const e=ki(t),n=(await Fi()).transaction("firebase-installations-store","readwrite");await n.objectStore("firebase-installations-store").delete(e),await n.done}async function ji(t,e){const n=ki(t),r=(await Fi()).transaction("firebase-installations-store","readwrite"),i=r.objectStore("firebase-installations-store"),s=await i.get(n),o=e(s);return void 0===o?await i.delete(n):await i.put(o,n),await r.done,!o||s&&s.fid===o.fid||Di(t,o.fid),o}
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
 */async function $i(t){let e;const n=await ji(t.appConfig,(n=>{const r=function(t){return zi(t||{fid:Oi(),registrationStatus:0})}(n),i=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){return{installationEntry:e,registrationPromise:Promise.reject(wi.create("app-offline"))}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(t,e){try{const n=await async function({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Ei(t),i=Ti(t),s=e.getImmediate({optional:!0});if(s){const t=await s.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const o={fid:n,authVersion:"FIS_v2",appId:t.appId,sdkVersion:"w:0.6.4"},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Ai((()=>fetch(r,a)));if(c.ok){const t=await c.json();return{fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:_i(t.authToken)}}throw await Ii("Create Installation",c)}(t,e);return Bi(t.appConfig,n)}catch(n){throw bi(n)&&409===n.customData.serverCode?await Vi(t.appConfig):await Bi(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}(t,n);return{installationEntry:n,registrationPromise:r}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:qi(t)}:{installationEntry:e}}(t,r);return e=i.registrationPromise,i.installationEntry}));return""===n.fid?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}async function qi(t){let e=await Hi(t.appConfig);for(;1===e.registrationStatus;)await Ci(100),e=await Hi(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await $i(t);return n||e}return e}function Hi(t){return ji(t,(t=>{if(!t)throw wi.create("installation-not-found");return zi(t)}))}function zi(t){return 1===(e=t).registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e;
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
 */}async function Gi({appConfig:t,heartbeatServiceProvider:e},n){const r=function(t,{fid:e}){return`${Ei(t)}/${e}/authTokens:generate`}
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
 */(t,n),i=Si(t,n),s=e.getImmediate({optional:!0});if(s){const t=await s.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const o={installation:{sdkVersion:"w:0.6.4",appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Ai((()=>fetch(r,a)));if(c.ok){return _i(await c.json())}throw await Ii("Generate Auth Token",c)}async function Ki(t,e=!1){let n;const r=await ji(t.appConfig,(r=>{if(!Ji(r))throw wi.create("not-registered");const i=r.authToken;if(!e&&function(t){return 2===t.requestStatus&&!function(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+36e5}(t)}(i))return r;if(1===i.requestStatus)return n=async function(t,e){let n=await Wi(t.appConfig);for(;1===n.authToken.requestStatus;)await Ci(100),n=await Wi(t.appConfig);const r=n.authToken;return 0===r.requestStatus?Ki(t,e):r}(t,e),r;{if(!navigator.onLine)throw wi.create("app-offline");const e=function(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(r);return n=async function(t,e){try{const n=await Gi(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Bi(t.appConfig,r),n}catch(n){if(!bi(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Bi(t.appConfig,n)}else await Vi(t.appConfig);throw n}}(t,e),e}}));return n?await n:r.authToken}function Wi(t){return ji(t,(t=>{if(!Ji(t))throw wi.create("not-registered");const e=t.authToken;return 1===(n=e).requestStatus&&n.requestTime+1e4<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t;var n;
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
 */}))}function Ji(t){return void 0!==t&&2===t.registrationStatus}
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
async function Qi(t,e=!1){const n=t;await async function(t){const{registrationPromise:e}=await $i(t);e&&await e}
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
 */(n);return(await Ki(n,e)).token}function Xi(t){return wi.create("missing-app-config-values",{valueName:t})}
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
 */const Yi=t=>{const e=ii(t.getProvider("app").getImmediate(),"installations").getImmediate();return{getId:()=>async function(t){const e=t,{installationEntry:n,registrationPromise:r}=await $i(e);return r?r.catch(console.error):Ki(e).catch(console.error),n.fid}(e),getToken:t=>Qi(e,t)}};ri(new Ir("installations",(t=>{const e=t.getProvider("app").getImmediate(),n=
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
function(t){if(!t||!t.options)throw Xi("App Configuration");if(!t.name)throw Xi("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Xi(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e);return{app:e,appConfig:n,heartbeatServiceProvider:ii(e,"heartbeat"),_delete:()=>Promise.resolve()}}),"PUBLIC")),ri(new Ir("installations-internal",Yi,"PRIVATE")),ui("@firebase/installations","0.6.4"),ui("@firebase/installations","0.6.4","esm2017");
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
const Zi=new Lr("@firebase/analytics"),ts=new lr("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});
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
function es(t){if(!t.startsWith("https://www.googletagmanager.com/gtag/js")){const e=ts.create("invalid-gtag-resource",{gtagURL:t});return Zi.warn(e.message),""}return t}function ns(t){return Promise.all(t.map((t=>t.catch((t=>t)))))}function rs(t,e){const n=function(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}("firebase-js-sdk-policy",{createScriptURL:es}),r=document.createElement("script"),i=`https://www.googletagmanager.com/gtag/js?l=${t}&id=${e}`;r.src=n?null==n?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function is(t,e,n,r){return async function(i,s,o){try{"event"===i?await async function(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let t=i.send_to;Array.isArray(t)||(t=[t]);const r=await ns(n);for(const n of t){const t=r.find((t=>t.measurementId===n)),i=t&&e[t.appId];if(!i){s=[];break}s.push(i)}}0===s.length&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(t){Zi.error(t)}}(t,e,n,s,o):"config"===i?await async function(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const t=(await ns(n)).find((t=>t.measurementId===i));t&&await e[t.appId]}}catch(t){Zi.error(t)}t("config",i,s)}(t,e,n,r,s,o):"consent"===i?t("consent","update",o):t("set",s)}catch(t){Zi.error(t)}}}const ss=new class{constructor(t={},e=1e3){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}};function os(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function as(t,e=ss,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw ts.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw ts.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new us;return setTimeout((async()=>{a.abort()}),void 0!==n?n:6e4),cs({appId:r,apiKey:i,measurementId:s},o,a,e)}async function cs(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=ss){var s;const{appId:o,measurementId:a}=t;try{await function(t,e){return new Promise(((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener((()=>{clearTimeout(s),r(ts.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}(r,e)}catch(t){if(a)return Zi.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==t?void 0:t.message}]`),{appId:o,measurementId:a};throw t}try{const e=await async function(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:os(r)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(s,i);if(200!==o.status&&304!==o.status){let t="";try{const n=await o.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(t){}throw ts.create("config-fetch-failed",{httpStatus:o.status,responseMessage:t})}return o.json()}(t);return i.deleteThrottleMetadata(o),e}catch(e){const c=e;if(!function(t){if(!(t instanceof ur&&t.customData))return!1;const e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(c)){if(i.deleteThrottleMetadata(o),a)return Zi.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==c?void 0:c.message}]`),{appId:o,measurementId:a};throw e}const u=503===Number(null===(s=null==c?void 0:c.customData)||void 0===s?void 0:s.httpStatus)?Er(n,i.intervalMillis,30):Er(n,i.intervalMillis),l={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,l),Zi.debug(`Calling attemptFetch again in ${u} millis`),cs(t,l,r,i)}}class us{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach((t=>t()))}}
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
 */let ls,hs;function ds(t){hs=t}function fs(t){ls=t}
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
 */async function ps(t,e,n,r,i,s,o){var a;const c=as(t);c.then((e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&Zi.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((t=>Zi.error(t))),e.push(c);const u=async function(){if(!or())return Zi.warn(ts.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await ar()}catch(t){return Zi.warn(ts.create("indexeddb-unavailable",{errorInfo:null==t?void 0:t.toString()}).message),!1}return!0}().then((t=>t?r.getId():void 0)),[l,h]=await Promise.all([c,u]);(function(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes("https://www.googletagmanager.com/gtag/js")&&n.src.includes(t))return n;return null}
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
 */)(s)||rs(s,l.measurementId),hs&&(i("consent","default",hs),ds(void 0)),i("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=h&&(d.firebase_id=h),i("config",l.measurementId,d),ls&&(i("set",ls),fs(void 0)),l.measurementId}
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
 */class gs{constructor(t){this.app=t}_delete(){return delete ms[this.app.options.appId],Promise.resolve()}}let ms={},ys=[];const vs={};let ws,bs,Es="dataLayer",_s="gtag",Is=!1;function Ts(t,e,n){!function(){const t=[];if(ir()&&t.push("This is a browser extension environment."),cr()||t.push("Cookies are not available."),t.length>0){const e=t.map(((t,e)=>`(${e+1}) ${t}`)).join(" "),n=ts.create("invalid-analytics-context",{errorInfo:e});Zi.warn(n.message)}}();const r=t.options.appId;if(!r)throw ts.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw ts.create("no-api-key");Zi.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=ms[r])throw ts.create("already-exists",{id:r});if(!Is){!function(t){let e=[];Array.isArray(window[t])?e=window[t]:window[t]=e}(Es);const{wrappedGtag:t,gtagCore:e}=function(t,e,n,r,i){let s=function(...t){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(s=window[i]),window[i]=is(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}(ms,ys,vs,Es,_s);bs=t,ws=e,Is=!0}ms[r]=ps(t,ys,vs,e,ws,Es,n);return new gs(t)}function Ss(t,e,n,r){t=_r(t),async function(t,e,n,r,i){if(i&&i.global)t("event",n,r);else{const i=await e;t("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}(bs,ms[t.app.options.appId],e,n,r).catch((t=>Zi.error(t)))}ri(new Ir("analytics",((t,{options:e})=>Ts(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),e)),"PUBLIC")),ri(new Ir("analytics-internal",(function(t){try{const e=t.getProvider("analytics").getImmediate();return{logEvent:(t,n,r)=>Ss(e,t,n,r)}}catch(t){throw ts.create("interop-component-reg-failed",{reason:t})}}),"PRIVATE")),ui("@firebase/analytics","0.9.5"),ui("@firebase/analytics","0.9.5","esm2017");function As(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;function Cs(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ns=Cs,Os=new lr("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),ks={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized"},Rs=new Lr("@firebase/auth");function Ds(t,...e){Rs.logLevel<=Cr.ERROR&&Rs.error(`Auth (9.19.1): ${t}`,...e)}
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
 */function Ls(t,...e){throw Ms(t,...e)}function Ps(t,...e){return Ms(t,...e)}function xs(t,e,n){const r=Object.assign(Object.assign({},Ns()),{[e]:n});return new lr("auth","Firebase",r).create(e,{appName:t.name})}function Ms(t,...e){if("string"!=typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Os.create(t,...e)}function Us(t,e,...n){if(!t)throw Ms(e,...n)}function Fs(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ds(e),new Error(e)}function Bs(t,e){t||Fs(e)}
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
 */const Vs=new Map;function js(t){Bs(t instanceof Function,"Expected a class definition");let e=Vs.get(t);return e?(Bs(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vs.set(t,e),e)}
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
function $s(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function qs(){return"http:"===Hs()||"https:"===Hs()}function Hs(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
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
class zs{constructor(t,e){this.shortDelay=t,this.longDelay=e,Bs(e>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rr())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(qs()||ir()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
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
 */function Gs(t,e){Bs(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
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
 */class Ks{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Fs("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Fs("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Fs("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const Ws={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Js=new zs(3e4,6e4);
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
 */function Qs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xs(t,e,n,r,i={}){return Ys(t,i,(async()=>{let i={},s={};r&&("GET"===e?s=r:i={body:JSON.stringify(r)});const o=gr(Object.assign({key:t.config.apiKey},s)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Ks.fetch()(to(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Ys(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ws),e);try{const e=new eo(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw no(t,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const e=i.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw no(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw no(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw no(t,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw xs(t,a,o);Ls(t,a)}}catch(e){if(e instanceof ur)throw e;Ls(t,"network-request-failed",{message:String(e)})}}async function Zs(t,e,n,r,i={}){const s=await Xs(t,e,n,r,i);return"mfaPendingCredential"in s&&Ls(t,"multi-factor-auth-required",{_serverResponse:s}),s}function to(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Gs(t.config,i):`${t.config.apiScheme}://${i}`}class eo{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(Ps(this.auth,"network-request-failed"))),Js.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function no(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ps(t,e,r);return i.customData._tokenResponse=n,i}
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
function ro(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
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
 */function io(t){return 1e3*Number(t)}function so(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return Ds("JWT malformed, contained fewer than 3 sections"),null;try{const t=Jn(n);return t?JSON.parse(t):(Ds("Failed to decode base64 JWT payload"),null)}catch(t){return Ds("Caught error parsing JWT payload as JSON",null==t?void 0:t.toString()),null}}
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
async function oo(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof ur&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class ao{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null==t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
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
 */class co{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=ro(this.lastLoginAt),this.creationTime=ro(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function uo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await oo(t,async function(t,e){return Xs(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:r}));Us(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?s.providerUserInfo.map((t=>{var{providerId:e}=t,n=As(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=t.providerData,u=o,[...c.filter((t=>!u.some((e=>e.providerId===t.providerId)))),...u]);var c,u;const l=t.isAnonymous,h=!(t.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!l&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new co(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}
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
class lo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Us(t.idToken,"internal-error"),Us(void 0!==t.idToken,"internal-error"),Us(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=so(t);return Us(e,"internal-error"),Us(void 0!==e.exp,"internal-error"),Us(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return Us(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await
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
async function(t,e){const n=await Ys(t,{},(async()=>{const n=gr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,s=to(t,r,"/v1/token",`key=${i}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Ks.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new lo;return n&&(Us("string"==typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(Us("string"==typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(Us("number"==typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new lo,this.toJSON())}_performRefresh(){return Fs("not implemented")}}
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
 */function ho(t,e){Us("string"==typeof t||void 0===t,"internal-error",{appName:e})}class fo{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=As(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ao(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new co(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await oo(this,this.stsTokenManager.getToken(this.auth,t));return Us(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=_r(t),r=await n.getIdToken(e),i=so(r);Us(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ro(io(i.auth_time)),issuedAtTime:ro(io(i.iat)),expirationTime:ro(io(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=_r(t);await uo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(Us(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new fo(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){Us(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await uo(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await oo(this,async function(t,e){return Xs(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:E,stsTokenManager:_}=e;Us(v&&_,t,"internal-error");const I=lo.fromJSON(this.name,_);Us("string"==typeof v,t,"internal-error"),ho(l,t.name),ho(h,t.name),Us("boolean"==typeof w,t,"internal-error"),Us("boolean"==typeof b,t,"internal-error"),ho(d,t.name),ho(f,t.name),ho(p,t.name),ho(g,t.name),ho(m,t.name),ho(y,t.name);const T=new fo({uid:v,auth:t,email:h,emailVerified:w,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:y});return E&&Array.isArray(E)&&(T.providerData=E.map((t=>Object.assign({},t)))),g&&(T._redirectEventId=g),T}static async _fromIdTokenResponse(t,e,n=!1){const r=new lo;r.updateFromServerResponse(e);const i=new fo({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await uo(i),i}}
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
 */class po{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}po.type="NONE";const go=po;
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
 */function mo(t,e,n){return`firebase:${t}:${e}:${n}`}class yo{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=mo(this.userKey,r.apiKey,i),this.fullPersistenceKey=mo("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?fo._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new yo(js(go),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||js(go);const s=mo(n,t.config.apiKey,t.name);let o=null;for(const n of e)try{const e=await n._get(s);if(e){const r=fo._fromJSON(t,e);n!==i&&(o=r),i=n;break}}catch(t){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(s)}catch(t){}}))),new yo(i,t,n)):new yo(i,t,n)}}
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
 */function vo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_o(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wo(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(To(e))return"Blackberry";if(So(e))return"Webos";if(bo(e))return"Safari";if((e.includes("chrome/")||Eo(e))&&!e.includes("edge/"))return"Chrome";if(Io(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function wo(t=rr()){return/firefox\//i.test(t)}function bo(t=rr()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Eo(t=rr()){return/crios\//i.test(t)}function _o(t=rr()){return/iemobile/i.test(t)}function Io(t=rr()){return/android/i.test(t)}function To(t=rr()){return/blackberry/i.test(t)}function So(t=rr()){return/webos/i.test(t)}function Ao(t=rr()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Co(){return sr()&&10===document.documentMode}function No(t=rr()){return Ao(t)||Io(t)||So(t)||To(t)||/windows phone/i.test(t)||_o(t)}
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
function Oo(t,e=[]){let n;switch(t){case"Browser":n=vo(rr());break;case"Worker":n=`${vo(rr())}-${t}`;break;default:n=t}return`${n}/JsCore/9.19.1/${e.length?e.join(","):"FirebaseCore-web"}`}
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
 */class ko{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{n(t(e))}catch(t){r(t)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(t){e.reverse();for(const t of e)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==t?void 0:t.message})}}}
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
 */class Ro{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lo(this),this.idTokenSubscription=new Lo(this),this.beforeStateQueue=new ko(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Os,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=js(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await yo.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(t){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Us(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await uo(t)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?_r(t):null;return e&&Us(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&Us(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(js(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new lr("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&js(t)||this._popupRedirectResolver;Us(e,this,"argument-error"),this.redirectPersistenceManager=await yo.create(this,[js(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"==typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Us(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Us(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Oo(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function Do(t){return _r(t)}class Lo{constructor(t){this.auth=t,this.observer=null,this.addObserver=vr((t=>this.observer=t))}get next(){return Us(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Po(t,e,n){const r=Do(t);Us(r._canInitEmulator,r,"emulator-config-failed"),Us(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=xo(e),{host:o,port:a}=function(t){const e=xo(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const t=i[1];return{host:t,port:Mo(r.substr(t.length+1))}}{const[t,e]=r.split(":");return{host:t,port:Mo(e)}}}(e),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
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
 */()}function xo(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Mo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}class Uo{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return Fs("not implemented")}_getIdTokenResponse(t){return Fs("not implemented")}_linkToIdToken(t,e){return Fs("not implemented")}_getReauthenticationResolver(t){return Fs("not implemented")}}
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
 */async function Fo(t,e){return Xs(t,"POST","/v1/accounts:update",e)}
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
class Bo extends Uo{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new Bo(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Bo(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":
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
return async function(t,e){return Zs(t,"POST","/v1/accounts:signInWithPassword",Qs(t,e))}(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
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
return async function(t,e){return Zs(t,"POST","/v1/accounts:signInWithEmailLink",Qs(t,e))}(t,{email:this._email,oobCode:this._password});default:Ls(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Fo(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return Zs(t,"POST","/v1/accounts:signInWithEmailLink",Qs(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:Ls(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
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
 */async function Vo(t,e){return Zs(t,"POST","/v1/accounts:signInWithIdp",Qs(t,e))}
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
 */class jo extends Uo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new jo(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Ls("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=As(e,["providerId","signInMethod"]);if(!n||!r)return null;const s=new jo(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(t){return Vo(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Vo(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Vo(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=gr(e)}return t}}
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
 */const $o={USER_NOT_FOUND:"user-not-found"};
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
class qo extends Uo{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new qo({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new qo({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return Zs(t,"POST","/v1/accounts:signInWithPhoneNumber",Qs(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const n=await Zs(t,"POST","/v1/accounts:signInWithPhoneNumber",Qs(t,e));if(n.temporaryProof)throw no(t,"account-exists-with-different-credential",n);return n}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return Zs(t,"POST","/v1/accounts:signInWithPhoneNumber",Qs(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),$o)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new qo({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
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
 */class Ho{constructor(t){var e,n,r,i,s,o;const a=mr(yr(t)),c=null!==(e=a.apiKey)&&void 0!==e?e:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,l=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);Us(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(t){const e=function(t){const e=mr(yr(t)).link,n=e?mr(yr(e)).deep_link_id:null,r=mr(yr(t)).deep_link_id;return(r?mr(yr(r)).link:null)||r||n||e||t}(t);try{return new Ho(e)}catch(t){return null}}}
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
class zo{constructor(){this.providerId=zo.PROVIDER_ID}static credential(t,e){return Bo._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Ho.parseLink(e);return Us(n,"argument-error"),Bo._fromEmailAndCode(t,n.code,n.tenantId)}}zo.PROVIDER_ID="password",zo.EMAIL_PASSWORD_SIGN_IN_METHOD="password",zo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Go{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
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
 */class Ko extends Go{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
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
class Wo extends Ko{constructor(){super("facebook.com")}static credential(t){return jo._fromParams({providerId:Wo.PROVIDER_ID,signInMethod:Wo.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Wo.credentialFromTaggedObject(t)}static credentialFromError(t){return Wo.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Wo.credential(t.oauthAccessToken)}catch(t){return null}}}Wo.FACEBOOK_SIGN_IN_METHOD="facebook.com",Wo.PROVIDER_ID="facebook.com";
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
class Jo extends Ko{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return jo._fromParams({providerId:Jo.PROVIDER_ID,signInMethod:Jo.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Jo.credentialFromTaggedObject(t)}static credentialFromError(t){return Jo.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Jo.credential(e,n)}catch(t){return null}}}Jo.GOOGLE_SIGN_IN_METHOD="google.com",Jo.PROVIDER_ID="google.com";
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
class Qo extends Ko{constructor(){super("github.com")}static credential(t){return jo._fromParams({providerId:Qo.PROVIDER_ID,signInMethod:Qo.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Qo.credentialFromTaggedObject(t)}static credentialFromError(t){return Qo.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Qo.credential(t.oauthAccessToken)}catch(t){return null}}}Qo.GITHUB_SIGN_IN_METHOD="github.com",Qo.PROVIDER_ID="github.com";
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
class Xo extends Ko{constructor(){super("twitter.com")}static credential(t,e){return jo._fromParams({providerId:Xo.PROVIDER_ID,signInMethod:Xo.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Xo.credentialFromTaggedObject(t)}static credentialFromError(t){return Xo.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Xo.credential(e,n)}catch(t){return null}}}
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
async function Yo(t,e){return Zs(t,"POST","/v1/accounts:signUp",Qs(t,e))}
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
 */Xo.TWITTER_SIGN_IN_METHOD="twitter.com",Xo.PROVIDER_ID="twitter.com";class Zo{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await fo._fromIdTokenResponse(t,n,r),s=ta(n);return new Zo({user:i,providerId:s,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=ta(n);return new Zo({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function ta(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
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
class ea extends ur{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ea.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new ea(t,e,n,r)}}function na(t,e,n,r){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ea._fromErrorAndOperation(t,n,e,r);throw n}))}
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
 */async function ra(t,e,n=!1){const r=await oo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zo._forOperation(t,"link",r)}
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
async function ia(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await oo(t,na(r,i,e,t),n);Us(s.idToken,r,"internal-error");const o=so(s.idToken);Us(o,r,"internal-error");const{sub:a}=o;return Us(t.uid===a,r,"user-mismatch"),Zo._forOperation(t,i,s)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&Ls(r,"user-mismatch"),t}}
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
 */async function sa(t,e,n=!1){const r="signIn",i=await na(t,r,e),s=await Zo._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function oa(t,e){return sa(Do(t),e)}async function aa(t,e,n){const r=Do(t),i=await Yo(r,{returnSecureToken:!0,email:e,password:n}),s=await Zo._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}
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
async function ca(t,{displayName:e,photoURL:n}){if(void 0===e&&void 0===n)return;const r=_r(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await oo(r,
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
async function(t,e){return Xs(t,"POST","/v1/accounts:update",e)}(r.auth,i));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const o=r.providerData.find((({providerId:t})=>"password"===t));o&&(o.displayName=r.displayName,o.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}new WeakMap;
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
class ua{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */class la extends ua{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=rr();return bo(t)||Ao(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=No(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);Co()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,10):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}la.type="LOCAL";const ha=la;
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
 */class da extends ua{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}da.type="SESSION";const fa=da;
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
class pa{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new pa(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async t=>t(e.origin,i))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function ga(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
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
 */pa.receivers=[];class ma{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=ga("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
 */function ya(){return window}
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
function va(){return void 0!==ya().WorkerGlobalScope&&"function"==typeof ya().importScripts}class wa{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function ba(t,e){return t.transaction(["firebaseLocalStorage"],e?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Ea(){const t=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains("firebaseLocalStorage")?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new wa(t).toPromise()}(),e(await Ea()))}))}))}async function _a(t,e,n){const r=ba(t,!0).put({fbase_key:e,value:n});return new wa(r).toPromise()}function Ia(t,e){const n=ba(t,!0).delete(e);return new wa(n).toPromise()}class Ta{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Ea()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return va()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pa._getInstance(va()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new ma(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ea();return await _a(t,"__sak","1"),await Ia(t,"__sak"),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>_a(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=ba(t,!1).get(e),r=await new wa(n).toPromise();return void 0===r?null:r.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>Ia(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=ba(t,!1).getAll();return new wa(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ta.type="LOCAL";const Sa=Ta;
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
 */function Aa(t){return new Promise(((e,n)=>{const r=document.createElement("script");
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
var i,s;r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=Ps("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function Ca(t){return`__${t}${Math.floor(1e6*Math.random())}`}
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
Ca("rcb"),new zs(3e4,6e4);async function Na(t,e,n){var r;const i=await n.verify();try{let s;if(Us("string"==typeof i,t,"argument-error"),Us("recaptcha"===n.type,t,"argument-error"),s="string"==typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){Us("enroll"===e.type,t,"internal-error");const n=await
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
function(t,e){return Xs(t,"POST","/v2/accounts/mfaEnrollment:start",Qs(t,e))}(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{Us("signin"===e.type,t,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;Us(n,t,"missing-multi-factor-info");const o=await function(t,e){return Xs(t,"POST","/v2/accounts/mfaSignIn:start",Qs(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return Xs(t,"POST","/v1/accounts:sendVerificationCode",Qs(t,e))}(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
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
class Oa{constructor(t){this.providerId=Oa.PROVIDER_ID,this.auth=Do(t)}verifyPhoneNumber(t,e){return Na(this.auth,t,_r(e))}static credential(t,e){return qo._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Oa.credentialFromTaggedObject(e)}static credentialFromError(t){return Oa.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?qo._fromTokenResponse(e,n):null}}
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
function ka(t,e){return e?js(e):(Us(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
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
 */Oa.PROVIDER_ID="phone",Oa.PHONE_SIGN_IN_METHOD="phone";class Ra extends Uo{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Vo(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Vo(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Vo(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Da(t){return sa(t.auth,new Ra(t),t.bypassAuthState)}function La(t){const{auth:e,user:n}=t;return Us(n,e,"internal-error"),ia(n,new Ra(t),t.bypassAuthState)}async function Pa(t){const{auth:e,user:n}=t;return Us(n,e,"internal-error"),ra(n,new Ra(t),t.bypassAuthState)}
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
 */class xa{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Da;case"linkViaPopup":case"linkViaRedirect":return Pa;case"reauthViaPopup":case"reauthViaRedirect":return La;default:Ls(this.auth,"internal-error")}}resolve(t){Bs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Bs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Ma=new zs(2e3,1e4);class Ua extends xa{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Ua.currentPopupAction&&Ua.currentPopupAction.cancel(),Ua.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Us(t,this.auth,"internal-error"),t}async onExecution(){Bs(1===this.filter.length,"Popup operations only handle one event");const t=ga();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(Ps(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(Ps(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ua.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Ps(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,Ma.get())};t()}}Ua.currentPopupAction=null;
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
const Fa=new Map;class Ba extends xa{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Fa.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=$a(e),r=ja(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}Fa.set(this.auth._key(),t)}return this.bypassAuthState||Fa.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Va(t,e){Fa.set(t._key(),e)}function ja(t){return js(t._redirectPersistence)}function $a(t){return mo("pendingRedirect",t.config.apiKey,t.name)}
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
 */async function qa(t,e,n=!1){const r=Do(t),i=ka(r,e),s=new Ba(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}class Ha{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ga(t);default:return!1}}
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
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Ga(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(Ps(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(za(t))}saveEventToCache(t){this.cachedEventUids.add(za(t)),this.lastProcessedEventTime=Date.now()}}function za(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Ga({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
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
const Ka=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Wa=/^https?/;async function Ja(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return Xs(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(Qa(t))return}catch(t){}Ls(t,"unauthorized-domain")}function Qa(t){const e=$s(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Wa.test(n))return!1;if(Ka.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
 */const Xa=new zs(3e4,6e4);function Ya(){const t=ya().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let Za=null;function tc(t){return Za=Za||function(t){return new Promise(((e,n)=>{var r,i,s;function o(){Ya(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ya(),n(Ps(t,"network-request-failed"))},timeout:Xa.get()})}if(null===(i=null===(r=ya().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=ya().gapi)||void 0===s?void 0:s.load)){const e=Ca("iframefcb");return ya()[e]=()=>{gapi.load?o():n(Ps(t,"network-request-failed"))},Aa(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw Za=null,t}))}(t),Za}
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
 */const ec=new zs(5e3,15e3),nc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ic(t){const e=t.config;Us(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gs(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,r={apiKey:e.apiKey,appName:t.name,v:"9.19.1"},i=rc.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${gr(r).slice(1)}`}
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
const sc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class oc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function ac(t,e,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},sc),{width:r.toString(),height:i.toString(),top:s,left:o}),u=rr().toLowerCase();n&&(a=Eo(u)?"_blank":n),wo(u)&&(e=e||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=rr()){var e;return Ao(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(u)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(e||"",a),new oc(null);const h=window.open(e||"",a,l);Us(h,t,"popup-blocked");try{h.focus()}catch(t){}return new oc(h)}function cc(t,e,n,r,i,s){Us(t.config.authDomain,t,"auth-domain-config-required"),Us(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:"9.19.1",eventId:i};if(e instanceof Go){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",dr(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(s||{}))o[t]=e}if(e instanceof Ko){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const t of Object.keys(a))void 0===a[t]&&delete a[t];return`${function({config:t}){return t.emulator?Gs(t,"emulator/auth/handler"):`https://${t.authDomain}/__/auth/handler`}
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
 */(t)}?${gr(a).slice(1)}`}const uc=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fa,this._completeRedirectFn=qa,this._overrideRedirectResult=Va}async _openPopup(t,e,n,r){var i;Bs(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return ac(t,cc(t,e,n,$s(),r),ga())}async _openRedirect(t,e,n,r){var i;return await this._originValidation(t),i=cc(t,e,n,$s(),r),ya().location.href=i,new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(Bs(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await async function(t){const e=await tc(t),n=ya().gapi;return Us(n,t,"internal-error"),e.open({where:document.body,url:ic(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nc,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=Ps(t,"network-request-failed"),s=ya().setTimeout((()=>{r(i)}),ec.get());function o(){ya().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{r(i)}))}))))}(t),n=new Ha(t);return e.register("authEvent",(e=>{Us(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&e(!!i),Ls(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Ja(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return No()||bo()||Ao()}};
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
class lc{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null==e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){Us(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
const hc=tr("authIdTokenMaxAge")||300;let dc=null;var fc;fc="Browser",ri(new Ir("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),{apiKey:i,authDomain:s}=n.options;return((t,n)=>{Us(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),Us(!(null==s?void 0:s.includes(":")),"argument-error",{appName:t.name});const r={apiKey:i,authDomain:s,clientPlatform:fc,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Oo(fc)},o=new Ro(t,n,r);return function(t,e){const n=(null==e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(js);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null==e?void 0:e.popupRedirectResolver)}(o,e),o})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),ri(new Ir("auth-internal",(t=>{const e=Do(t.getProvider("auth").getImmediate());return new lc(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),ui("@firebase/auth","0.22.0",function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(fc)),ui("@firebase/auth","0.22.0","esm2017");var pc,gc="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},mc={},yc=yc||{},vc=gc||self;function wc(){}function bc(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function Ec(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var _c="closure_uid_"+(1e9*Math.random()>>>0),Ic=0;function Tc(t,e,n){return t.call.apply(t.bind,arguments)}function Sc(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Ac(t,e,n){return(Ac=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Tc:Sc).apply(null,arguments)}function Cc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Nc(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function Oc(){this.s=this.s,this.o=this.o}Oc.prototype.s=!1,Oc.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,_c)&&t[_c]||(t[_c]=++Ic))},Oc.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const kc=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Rc(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Dc(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(bc(n)){const e=t.length||0,r=n.length||0;t.length=e+r;for(let i=0;i<r;i++)t[e+i]=n[i]}else t.push(n)}}function Lc(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Lc.prototype.h=function(){this.defaultPrevented=!0};var Pc=function(){if(!vc.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{vc.addEventListener("test",wc,e),vc.removeEventListener("test",wc,e)}catch(t){}return t}();function xc(t){return/^[\s\xa0]*$/.test(t)}var Mc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Uc(t,e){return t<e?-1:t>e?1:0}function Fc(){var t=vc.navigator;return t&&(t=t.userAgent)?t:""}function Bc(t){return-1!=Fc().indexOf(t)}function Vc(t){return Vc[" "](t),t}Vc[" "]=wc;var jc,$c,qc=Bc("Opera"),Hc=Bc("Trident")||Bc("MSIE"),zc=Bc("Edge"),Gc=zc||Hc,Kc=Bc("Gecko")&&!(-1!=Fc().toLowerCase().indexOf("webkit")&&!Bc("Edge"))&&!(Bc("Trident")||Bc("MSIE"))&&!Bc("Edge"),Wc=-1!=Fc().toLowerCase().indexOf("webkit")&&!Bc("Edge");function Jc(){var t=vc.document;return t?t.documentMode:void 0}t:{var Qc="",Xc=($c=Fc(),Kc?/rv:([^\);]+)(\)|;)/.exec($c):zc?/Edge\/([\d\.]+)/.exec($c):Hc?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec($c):Wc?/WebKit\/(\S+)/.exec($c):qc?/(?:Version)[ \/]?(\S+)/.exec($c):void 0);if(Xc&&(Qc=Xc?Xc[1]:""),Hc){var Yc=Jc();if(null!=Yc&&Yc>parseFloat(Qc)){jc=String(Yc);break t}}jc=Qc}var Zc,tu={};function eu(){return function(t){var e=tu;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=Mc(String(jc)).split("."),n=Mc("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=Uc(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||Uc(0==i[2].length,0==s[2].length)||Uc(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t}))}if(vc.document&&Hc){var nu=Jc();Zc=nu||(parseInt(jc,10)||void 0)}else Zc=void 0;var ru=Zc;function iu(t,e){if(Lc.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Kc){t:{try{Vc(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:su[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&iu.X.h.call(this)}}Nc(iu,Lc);var su={2:"touch",3:"pen",4:"mouse"};iu.prototype.h=function(){iu.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ou="closure_listenable_"+(1e6*Math.random()|0),au=0;function cu(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++au,this.ba=this.ea=!1}function uu(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function lu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function hu(t){const e={};for(const n in t)e[n]=t[n];return e}const du="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fu(t,e){let n,r;for(let e=1;e<arguments.length;e++){for(n in r=arguments[e],r)t[n]=r[n];for(let e=0;e<du.length;e++)n=du[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function pu(t){this.src=t,this.g={},this.h=0}function gu(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=kc(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(uu(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function mu(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}pu.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=mu(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):((e=new cu(e,this.src,s,!!r,i)).ea=n,t.push(e)),e};var yu="closure_lm_"+(1e6*Math.random()|0),vu={};function wu(t,e,n,r,i){if(r&&r.once)return Eu(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)wu(t,e[s],n,r,i);return null}return n=Nu(n),t&&t[ou]?t.N(e,n,Ec(r)?!!r.capture:!!r,i):bu(t,e,n,!1,r,i)}function bu(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ec(i)?!!i.capture:!!i,a=Au(t);if(a||(t[yu]=a=new pu(t)),(n=a.add(e,n,r,o,s)).proxy)return n;if(r=function(){function t(n){return e.call(t.src,t.listener,n)}const e=Su;return t}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Pc||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Tu(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function Eu(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Eu(t,e[s],n,r,i);return null}return n=Nu(n),t&&t[ou]?t.O(e,n,Ec(r)?!!r.capture:!!r,i):bu(t,e,n,!0,r,i)}function _u(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)_u(t,e[s],n,r,i);else r=Ec(r)?!!r.capture:!!r,n=Nu(n),t&&t[ou]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=mu(s=t.g[e],n,r,i))&&(uu(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Au(t))&&(e=t.g[e.toString()],t=-1,e&&(t=mu(e,n,r,i)),(n=-1<t?e[t]:null)&&Iu(n))}function Iu(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[ou])gu(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Tu(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Au(e))?(gu(n,t),0==n.h&&(n.src=null,e[yu]=null)):uu(t)}}}function Tu(t){return t in vu?vu[t]:vu[t]="on"+t}function Su(t,e){if(t.ba)t=!0;else{e=new iu(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Iu(t),t=n.call(r,e)}return t}function Au(t){return(t=t[yu])instanceof pu?t:null}var Cu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nu(t){return"function"==typeof t?t:(t[Cu]||(t[Cu]=function(e){return t.handleEvent(e)}),t[Cu])}function Ou(){Oc.call(this),this.i=new pu(this),this.P=this,this.I=null}function ku(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"==typeof e)e=new Lc(e,t);else if(e instanceof Lc)e.target=e.target||t;else{var i=e;fu(e=new Lc(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ru(o,r,!0,e)&&i}if(i=Ru(o=e.g=t,r,!0,e)&&i,i=Ru(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=Ru(o=e.g=n[s],r,!1,e)&&i}function Ru(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&gu(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}Nc(Ou,Oc),Ou.prototype[ou]=!0,Ou.prototype.removeEventListener=function(t,e,n,r){_u(this,t,e,n,r)},Ou.prototype.M=function(){if(Ou.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)uu(n[r]);delete e.g[t],e.h--}}this.I=null},Ou.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},Ou.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Du=vc.JSON.stringify;function Lu(){var t=Vu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Pu,xu=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Mu),(t=>t.reset()));class Mu{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Uu(t){vc.setTimeout((()=>{throw t}),0)}function Fu(t,e){Pu||function(){var t=vc.Promise.resolve(void 0);Pu=function(){t.then(ju)}}(),Bu||(Pu(),Bu=!0),Vu.add(t,e)}var Bu=!1,Vu=new class{constructor(){this.h=this.g=null}add(t,e){const n=xu.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function ju(){for(var t;t=Lu();){try{t.h.call(t.g)}catch(t){Uu(t)}var e=xu;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Bu=!1}function $u(t,e){Ou.call(this),this.h=t||1,this.g=e||vc,this.j=Ac(this.lb,this),this.l=Date.now()}function qu(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function Hu(t,e,n){if("function"==typeof t)n&&(t=Ac(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Ac(t.handleEvent,t)}return 2147483647<Number(e)?-1:vc.setTimeout(t,e||0)}function zu(t){t.g=Hu((()=>{t.g=null,t.i&&(t.i=!1,zu(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Nc($u,Ou),(pc=$u.prototype).ca=!1,pc.R=null,pc.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ku(this,"tick"),this.ca&&(qu(this),this.start()))}},pc.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},pc.M=function(){$u.X.M.call(this),qu(this),delete this.g};class Gu extends Oc{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:zu(this)}M(){super.M(),this.g&&(vc.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ku(t){Oc.call(this),this.h=t,this.g={}}Nc(Ku,Oc);var Wu=[];function Ju(t,e,n,r){Array.isArray(n)||(n&&(Wu[0]=n.toString()),n=Wu);for(var i=0;i<n.length;i++){var s=wu(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Qu(t){lu(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Iu(t)}),t),t.g={}}function Xu(){this.g=!0}function Yu(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Du(n)}catch(t){return e}}(t,n)+(r?" "+r:"")}))}Ku.prototype.M=function(){Ku.X.M.call(this),Qu(this)},Ku.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Xu.prototype.Aa=function(){this.g=!1},Xu.prototype.info=function(){};var Zu={},tl=null;function el(){return tl=tl||new Ou}function nl(t){Lc.call(this,Zu.Pa,t)}function rl(t){const e=el();ku(e,new nl(e))}function il(t,e){Lc.call(this,Zu.STAT_EVENT,t),this.stat=e}function sl(t){const e=el();ku(e,new il(e,t))}function ol(t,e){Lc.call(this,Zu.Qa,t),this.size=e}function al(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return vc.setTimeout((function(){t()}),e)}Zu.Pa="serverreachability",Nc(nl,Lc),Zu.STAT_EVENT="statevent",Nc(il,Lc),Zu.Qa="timingevent",Nc(ol,Lc);var cl={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ul={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ll(){}function hl(t){return t.h||(t.h=t.i())}function dl(){}ll.prototype.h=null;var fl,pl={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function gl(){Lc.call(this,"d")}function ml(){Lc.call(this,"c")}function yl(){}function vl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Ku(this),this.O=bl,t=Gc?125:void 0,this.T=new $u(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new wl}function wl(){this.i=null,this.g="",this.h=!1}Nc(gl,Lc),Nc(ml,Lc),Nc(yl,ll),yl.prototype.g=function(){return new XMLHttpRequest},yl.prototype.i=function(){return{}},fl=new yl;var bl=45e3,El={},_l={};function Il(t,e,n){t.K=1,t.v=$l(Ul(e)),t.s=n,t.P=!0,Tl(t,null)}function Tl(t,e){t.F=Date.now(),Nl(t),t.A=Ul(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),eh(n.i,"t",r),t.C=0,n=t.l.H,t.h=new wl,t.g=td(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Gu(Ac(t.La,t,t.g),t.N)),Ju(t.S,t.g,"readystatechange",t.ib),e=t.H?hu(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),rl(),function(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.U,t.s)}function Sl(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function Al(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=Cl(t,n),r==_l){4==e&&(t.o=4,sl(14),i=!1),Yu(t.j,t.m,null,"[Incomplete Response]");break}if(r==El){t.o=4,sl(15),Yu(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Yu(t.j,t.m,r,null),Ll(t,r)}Sl(t)&&r!=_l&&r!=El&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,sl(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Gh(e),e.K=!0,sl(11))):(Yu(t.j,t.m,n,"[Invalid Chunked Response]"),Dl(t),Rl(t))}function Cl(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?_l:(n=Number(e.substring(n,r)),isNaN(n)?El:(r+=1)+n>e.length?_l:(e=e.substr(r,n),t.C=r+n,e))}function Nl(t){t.V=Date.now()+t.O,Ol(t,t.O)}function Ol(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=al(Ac(t.gb,t),e)}function kl(t){t.B&&(vc.clearTimeout(t.B),t.B=null)}function Rl(t){0==t.l.G||t.I||Jh(t.l,t)}function Dl(t){kl(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,qu(t.T),Qu(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ll(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||ah(n.h,t)))if(!t.J&&ah(n.h,t)&&3==n.G){try{var r=n.Fa.g.parse(e)}catch(t){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Wh(n),Fh(n)}zh(n),sl(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=al(Ac(n.cb,n),6e3));if(1>=oh(n.h)&&n.ja){try{n.ja()}catch(t){}n.ja=void 0}}else Xh(n,11)}else if((t.J||n.g==t)&&Wh(n),!xc(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const e=u[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const i=u[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(ch(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.za=t,jl(r.F,r.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=t;if((r=n).sa=Zh(r,r.H?r.ka:null,r.V),o.J){uh(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(kl(a),Nl(a)),r.g=o}else Hh(r);0<n.i.length&&Vh(n)}else"stop"!=u[0]&&"close"!=u[0]||Xh(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Xh(n,7):Uh(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}rl()}catch(t){}}function Pl(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(bc(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(bc(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}(t),r=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(bc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}(pc=vl.prototype).setTimeout=function(t){this.O=t},pc.ib=function(t){t=t.target;const e=this.L;e&&3==Rh(t)?e.l():this.La(t)},pc.La=function(t){try{if(t==this.g)t:{const l=Rh(this.g);var e=this.g.Ea();this.g.aa();if(!(3>l)&&(3!=l||Gc||this.g&&(this.h.h||this.g.fa()||Dh(this.g)))){this.I||4!=l||7==e||rl(),kl(this);var n=this.g.aa();this.Y=n;e:if(Sl(this)){var r=Dh(this.g);t="";var i=r.length,s=4==Rh(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Dl(this),Rl(this);var o="";break e}this.h.i=new vc.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!xc(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,sl(12),Dl(this),Rl(this);break t}Yu(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ll(this,n)}this.P?(Al(this,l,o),Gc&&this.i&&3==l&&(Ju(this.S,this.T,"tick",this.hb),this.T.start())):(Yu(this.j,this.m,o,null),Ll(this,o)),4==l&&Dl(this),this.i&&!this.I&&(4==l?Jh(this.l,this):(this.i=!1,Nl(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,sl(12)):(this.o=0,sl(13)),Dl(this),Rl(this)}}}catch(t){}},pc.hb=function(){if(this.g){var t=Rh(this.g),e=this.g.fa();this.C<e.length&&(kl(this),Al(this,t,e),this.i&&4!=t&&Nl(this))}},pc.cancel=function(){this.I=!0,Dl(this)},pc.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(rl(),sl(17)),Dl(this),this.o=2,Rl(this)):Ol(this,this.V-t)};var xl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ml(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ml){this.h=void 0!==e?e:t.h,Fl(this,t.j),this.s=t.s,this.g=t.g,Bl(this,t.m),this.l=t.l,e=t.i;var n=new Xl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Vl(this,n),this.o=t.o}else t&&(n=String(t).match(xl))?(this.h=!!e,Fl(this,n[1]||"",!0),this.s=ql(n[2]||""),this.g=ql(n[3]||"",!0),Bl(this,n[4]),this.l=ql(n[5]||"",!0),Vl(this,n[6]||"",!0),this.o=ql(n[7]||"")):(this.h=!!e,this.i=new Xl(null,this.h))}function Ul(t){return new Ml(t)}function Fl(t,e,n){t.j=n?ql(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Bl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Vl(t,e,n){e instanceof Xl?(t.i=e,function(t,e){e&&!t.j&&(Yl(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Zl(this,e),eh(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Hl(e,Jl)),t.i=new Xl(e,t.h))}function jl(t,e,n){t.i.set(e,n)}function $l(t){return jl(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ql(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Hl(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,zl),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function zl(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Ml.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Hl(e,Gl,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Hl(e,Gl,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Hl(n,"/"==n.charAt(0)?Wl:Kl,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Hl(n,Ql)),t.join("")};var Gl=/[#\/\?@]/g,Kl=/[#\?:]/g,Wl=/[#\?]/g,Jl=/[#\?@]/g,Ql=/#/g;function Xl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Yl(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Zl(t,e){Yl(t),e=nh(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function th(t,e){return Yl(t),e=nh(t,e),t.g.has(e)}function eh(t,e,n){Zl(t,e),0<n.length&&(t.i=null,t.g.set(nh(t,e),Rc(n)),t.h+=n.length)}function nh(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(pc=Xl.prototype).add=function(t,e){Yl(this),this.i=null,t=nh(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},pc.forEach=function(t,e){Yl(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},pc.oa=function(){Yl(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},pc.W=function(t){Yl(this);let e=[];if("string"==typeof t)th(this,t)&&(e=e.concat(this.g.get(nh(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},pc.set=function(t,e){return Yl(this),this.i=null,th(this,t=nh(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},pc.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},pc.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function rh(t){this.l=t||ih,vc.PerformanceNavigationTiming?t=0<(t=vc.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(vc.g&&vc.g.Ga&&vc.g.Ga()&&vc.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ih=10;function sh(t){return!!t.h||!!t.g&&t.g.size>=t.j}function oh(t){return t.h?1:t.g?t.g.size:0}function ah(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function ch(t,e){t.g?t.g.add(e):t.h=e}function uh(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function lh(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Rc(t.i)}function hh(){}function dh(){this.g=new hh}function fh(t,e,n){const r=n||"";try{Pl(t,(function(t,n){let i=t;Ec(t)&&(i=Du(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function ph(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}function gh(t){this.l=t.ac||null,this.j=t.jb||!1}function mh(t,e){Ou.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=yh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}rh.prototype.cancel=function(){if(this.i=lh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},hh.prototype.stringify=function(t){return vc.JSON.stringify(t,void 0)},hh.prototype.parse=function(t){return vc.JSON.parse(t,void 0)},Nc(gh,ll),gh.prototype.g=function(){return new mh(this.l,this.j)},gh.prototype.i=function(t){return function(){return t}}({}),Nc(mh,Ou);var yh=0;function vh(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function wh(t){t.readyState=4,t.l=null,t.j=null,t.A=null,bh(t)}function bh(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(pc=mh.prototype).open=function(t,e){if(this.readyState!=yh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,bh(this)},pc.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||vc).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},pc.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,wh(this)),this.readyState=yh},pc.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,bh(this)),this.g&&(this.readyState=3,bh(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==vc.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;vh(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},pc.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?wh(this):bh(this),3==this.readyState&&vh(this)}},pc.Va=function(t){this.g&&(this.response=this.responseText=t,wh(this))},pc.Ua=function(t){this.g&&(this.response=t,wh(this))},pc.ga=function(){this.g&&wh(this)},pc.setRequestHeader=function(t,e){this.v.append(t,e)},pc.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},pc.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(mh.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Eh=vc.JSON.parse;function _h(t){Ou.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ih,this.K=this.L=!1}Nc(_h,Ou);var Ih="",Th=/^https?$/i,Sh=["POST","PUT"];function Ah(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ch(t),Oh(t)}function Ch(t){t.D||(t.D=!0,ku(t,"complete"),ku(t,"error"))}function Nh(t){if(t.h&&void 0!==yc&&(!t.C[1]||4!=Rh(t)||2!=t.aa()))if(t.v&&4==Rh(t))Hu(t.Ha,0,t);else if(ku(t,"readystatechange"),4==Rh(t)){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===a){var i=String(t.H).match(xl)[1]||null;if(!i&&vc.self&&vc.self.location){var s=vc.self.location.protocol;i=s.substr(0,s.length-1)}r=!Th.test(i?i.toLowerCase():"")}n=r}if(n)ku(t,"complete"),ku(t,"success");else{t.m=6;try{var o=2<Rh(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.aa()+"]",Ch(t)}}finally{Oh(t)}}}function Oh(t,e){if(t.g){kh(t);const n=t.g,r=t.C[0]?wc:null;t.g=null,t.C=null,e||ku(t,"ready");try{n.onreadystatechange=r}catch(t){}}}function kh(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(vc.clearTimeout(t.A),t.A=null)}function Rh(t){return t.g?t.g.readyState:0}function Dh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ih:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Lh(t){let e="";return lu(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Ph(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Lh(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):jl(t,e,n))}function xh(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Mh(t){this.Ca=0,this.i=[],this.j=new Xu,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=xh("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=xh("baseRetryDelayMs",5e3,t),this.bb=xh("retryDelaySeedMs",1e4,t),this.$a=xh("forwardChannelMaxRetries",2,t),this.ta=xh("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new rh(t&&t.concurrentRequestLimit),this.Fa=new dh,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Uh(t){if(Bh(t),3==t.G){var e=t.U++,n=Ul(t.F);jl(n,"SID",t.I),jl(n,"RID",e),jl(n,"TYPE","terminate"),$h(t,n),(e=new vl(t,t.j,e,void 0)).K=2,e.v=$l(Ul(n)),n=!1,vc.navigator&&vc.navigator.sendBeacon&&(n=vc.navigator.sendBeacon(e.v.toString(),"")),!n&&vc.Image&&((new Image).src=e.v,n=!0),n||(e.g=td(e.l,null),e.g.da(e.v)),e.F=Date.now(),Nl(e)}Yh(t)}function Fh(t){t.g&&(Gh(t),t.g.cancel(),t.g=null)}function Bh(t){Fh(t),t.u&&(vc.clearTimeout(t.u),t.u=null),Wh(t),t.h.cancel(),t.m&&("number"==typeof t.m&&vc.clearTimeout(t.m),t.m=null)}function Vh(t){sh(t.h)||t.m||(t.m=!0,Fu(t.Ja,t),t.C=0)}function jh(t,e){var n;n=e?e.m:t.U++;const r=Ul(t.F);jl(r,"SID",t.I),jl(r,"RID",n),jl(r,"AID",t.T),$h(t,r),t.o&&t.s&&Ph(r,t.o,t.s),n=new vl(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=qh(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ch(t.h,n),Il(n,r,e)}function $h(t,e){t.ia&&lu(t.ia,(function(t,n){jl(e,n,t)})),t.l&&Pl({},(function(t,n){jl(e,n,t)}))}function qh(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Ac(t.l.Ra,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),s=!1;else try{fh(a,t,"req"+n+"_")}catch(t){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function Hh(t){t.g||t.u||(t.Z=1,Fu(t.Ia,t),t.A=0)}function zh(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=al(Ac(t.Ia,t),Qh(t,t.A)),t.A++,!0)}function Gh(t){null!=t.B&&(vc.clearTimeout(t.B),t.B=null)}function Kh(t){t.g=new vl(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=Ul(t.sa);jl(e,"RID","rpc"),jl(e,"SID",t.I),jl(e,"CI",t.L?"0":"1"),jl(e,"AID",t.T),jl(e,"TYPE","xmlhttp"),$h(t,e),t.o&&t.s&&Ph(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=$l(Ul(e)),n.s=null,n.P=!0,Tl(n,t)}function Wh(t){null!=t.v&&(vc.clearTimeout(t.v),t.v=null)}function Jh(t,e){var n=null;if(t.g==e){Wh(t),Gh(t),t.g=null;var r=2}else{if(!ah(t.h,e))return;n=e.D,uh(t.h,e),r=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;ku(r=el(),new ol(r,n)),Vh(t)}else Hh(t);else if(3==(i=e.o)||0==i&&0<t.pa||!(1==r&&function(t,e){return!(oh(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.C>=(t.Za?0:t.$a)||(t.m=al(Ac(t.Ja,t,e),Qh(t,t.C)),t.C++,0)))}(t,e)||2==r&&zh(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Xh(t,5);break;case 4:Xh(t,10);break;case 3:Xh(t,6);break;default:Xh(t,2)}}function Qh(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Xh(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var r=Ac(t.kb,t);n||(n=new Ml("//www.google.com/images/cleardot.gif"),vc.location&&"http"==vc.location.protocol||Fl(n,"https"),$l(n)),function(t,e){const n=new Xu;if(vc.Image){const r=new Image;r.onload=Cc(ph,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Cc(ph,n,r,"TestLoadImage: error",!1,e),r.onabort=Cc(ph,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Cc(ph,n,r,"TestLoadImage: timeout",!1,e),vc.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else sl(2);t.G=0,t.l&&t.l.va(e),Yh(t),Bh(t)}function Yh(t){if(t.G=0,t.la=[],t.l){const e=lh(t.h);0==e.length&&0==t.i.length||(Dc(t.la,e),Dc(t.la,t.i),t.h.i.length=0,Rc(t.i),t.i.length=0),t.l.ua()}}function Zh(t,e,n){var r=n instanceof Ml?Ul(n):new Ml(n,void 0);if(""!=r.g)e&&(r.g=e+"."+r.g),Bl(r,r.m);else{var i=vc.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ml(null,void 0);r&&Fl(s,r),e&&(s.g=e),i&&Bl(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&jl(r,n,e),jl(r,"VER",t.ma),$h(t,r),r}function td(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Da&&!t.ra?new _h(new gh({jb:!0})):new _h(t.ra)).Ka(t.H),e}function ed(){}function nd(){if(Hc&&!(10<=Number(ru)))throw Error("Environmental error: no available transport.")}function rd(t,e){Ou.call(this),this.g=new Mh(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!xc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!xc(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new od(this)}function id(t){gl.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function sd(){ml.call(this),this.status=1}function od(t){this.g=t}(pc=_h.prototype).Ka=function(t){this.L=t},pc.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():fl.g(),this.C=this.u?hl(this.u):hl(fl),this.g.onreadystatechange=Ac(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void Ah(this,t)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=vc.FormData&&t instanceof vc.FormData,!(0<=kc(Sh,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{kh(this),0<this.B&&((this.K=function(t){return Hc&&eu()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ac(this.qa,this)):this.A=Hu(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Ah(this,t)}},pc.qa=function(){void 0!==yc&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ku(this,"timeout"),this.abort(8))},pc.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ku(this,"complete"),ku(this,"abort"),Oh(this))},pc.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Oh(this,!0)),_h.X.M.call(this)},pc.Ha=function(){this.s||(this.F||this.v||this.l?Nh(this):this.fb())},pc.fb=function(){Nh(this)},pc.aa=function(){try{return 2<Rh(this)?this.g.status:-1}catch(t){return-1}},pc.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},pc.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Eh(e)}},pc.Ea=function(){return this.m},pc.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(pc=Mh.prototype).ma=8,pc.G=1,pc.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new vl(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=hu(s),fu(s,this.S)):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(e+=r)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=qh(this,i,e),jl(n=Ul(this.F),"RID",t),jl(n,"CVER",22),this.D&&jl(n,"X-HTTP-Session-Id",this.D),$h(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(Lh(s)))+"&"+e:this.o&&Ph(n,this.o,s)),ch(this.h,i),this.Ya&&jl(n,"TYPE","init"),this.O?(jl(n,"$req",e),jl(n,"SID","null"),i.Z=!0,Il(i,n,null)):Il(i,n,e),this.G=2}}else 3==this.G&&(t?jh(this,t):0==this.i.length||sh(this.h)||jh(this))},pc.Ia=function(){if(this.u=null,Kh(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=al(Ac(this.eb,this),t)}},pc.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,sl(10),Fh(this),Kh(this))},pc.cb=function(){null!=this.v&&(this.v=null,Fh(this),zh(this),sl(19))},pc.kb=function(t){t?(this.j.info("Successfully pinged google.com"),sl(2)):(this.j.info("Failed to ping google.com"),sl(1))},(pc=ed.prototype).xa=function(){},pc.wa=function(){},pc.va=function(){},pc.ua=function(){},pc.Ra=function(){},nd.prototype.g=function(t,e){return new rd(t,e)},Nc(rd,Ou),rd.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;sl(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Zh(t,null,t.V),Vh(t)},rd.prototype.close=function(){Uh(this.g)},rd.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=Du(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.ab++,t)),3==e.G&&Vh(e)},rd.prototype.M=function(){this.g.l=null,delete this.j,Uh(this.g),delete this.g,rd.X.M.call(this)},Nc(id,gl),Nc(sd,ml),Nc(od,ed),od.prototype.xa=function(){ku(this.g,"a")},od.prototype.wa=function(t){ku(this.g,new id(t))},od.prototype.va=function(t){ku(this.g,new sd)},od.prototype.ua=function(){ku(this.g,"b")},nd.prototype.createWebChannel=nd.prototype.g,rd.prototype.send=rd.prototype.u,rd.prototype.open=rd.prototype.m,rd.prototype.close=rd.prototype.close,cl.NO_ERROR=0,cl.TIMEOUT=8,cl.HTTP_ERROR=6,ul.COMPLETE="complete",dl.EventType=pl,pl.OPEN="a",pl.CLOSE="b",pl.ERROR="c",pl.MESSAGE="d",Ou.prototype.listen=Ou.prototype.N,_h.prototype.listenOnce=_h.prototype.O,_h.prototype.getLastError=_h.prototype.Oa,_h.prototype.getLastErrorCode=_h.prototype.Ea,_h.prototype.getStatus=_h.prototype.aa,_h.prototype.getResponseJson=_h.prototype.Sa,_h.prototype.getResponseText=_h.prototype.fa,_h.prototype.send=_h.prototype.da,_h.prototype.setWithCredentials=_h.prototype.Ka;var ad=mc.createWebChannelTransport=function(){return new nd},cd=mc.getStatEventTarget=function(){return el()},ud=mc.ErrorCode=cl,ld=mc.EventType=ul,hd=mc.Event=Zu,dd=mc.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},fd=mc.FetchXmlHttpFactory=gh,pd=mc.WebChannel=dl,gd=mc.XhrIo=_h;
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
class md{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}md.UNAUTHENTICATED=new md(null),md.GOOGLE_CREDENTIALS=new md("google-credentials-uid"),md.FIRST_PARTY=new md("first-party-uid"),md.MOCK_USER=new md("mock-user");
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
let yd="9.19.0";
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
 */const vd=new Lr("@firebase/firestore");function wd(){return vd.logLevel}function bd(t,...e){if(vd.logLevel<=Cr.DEBUG){const n=e.map(Id);vd.debug(`Firestore (${yd}): ${t}`,...n)}}function Ed(t,...e){if(vd.logLevel<=Cr.ERROR){const n=e.map(Id);vd.error(`Firestore (${yd}): ${t}`,...n)}}function _d(t,...e){if(vd.logLevel<=Cr.WARN){const n=e.map(Id);vd.warn(`Firestore (${yd}): ${t}`,...n)}}function Id(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */var e}
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
 */function Td(t="Unexpected state"){const e=`FIRESTORE (${yd}) INTERNAL ASSERTION FAILED: `+t;throw Ed(e),new Error(e)}function Sd(t,e){t||Td()}function Ad(t,e){return t}
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
 */const Cd={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Nd extends ur{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Od{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class kd{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Rd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(md.UNAUTHENTICATED)))}shutdown(){}}class Dd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Ld{constructor(t){this.t=t,this.currentUser=md.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new Od;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Od,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{bd("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(bd("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Od)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(bd("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Sd("string"==typeof e.accessToken),new kd(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Sd(null===t||"string"==typeof t),new md(t)}}class Pd{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=md.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class xd{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new Pd(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(md.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Md{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ud{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,e){const n=t=>{null!=t.error&&bd("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.T;return this.T=t.token,bd("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{bd("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.I.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.I.getImmediate({optional:!0});t?r(t):bd("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Sd("string"==typeof t.token),this.T=t.token,new Md(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
function Fd(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
 */class Bd{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=Fd(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function Vd(t,e){return t<e?-1:t>e?1:0}function jd(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
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
class $d{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Nd(Cd.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Nd(Cd.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Nd(Cd.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Nd(Cd.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return $d.fromMillis(Date.now())}static fromDate(t){return $d.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new $d(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Vd(this.nanoseconds,t.nanoseconds):Vd(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class qd{constructor(t){this.timestamp=t}static fromTimestamp(t){return new qd(t)}static min(){return new qd(new $d(0,0))}static max(){return new qd(new $d(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class Hd{constructor(t,e,n){void 0===e?e=0:e>t.length&&Td(),void 0===n?n=t.length-e:n>t.length-e&&Td(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Hd.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Hd?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class zd extends Hd{construct(t,e,n){return new zd(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Nd(Cd.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new zd(e)}static emptyPath(){return new zd([])}}const Gd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Kd extends Hd{construct(t,e,n){return new Kd(t,e,n)}static isValidIdentifier(t){return Gd.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Kd.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Kd(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Nd(Cd.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Nd(Cd.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Nd(Cd.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new Nd(Cd.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Kd(e)}static emptyPath(){return new Kd([])}}
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
 */class Wd{constructor(t){this.path=t}static fromPath(t){return new Wd(zd.fromString(t))}static fromName(t){return new Wd(zd.fromString(t).popFirst(5))}static empty(){return new Wd(zd.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===zd.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return zd.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Wd(new zd(t.slice()))}}
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
 */class Jd{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}Jd.UNKNOWN_ID=-1;function Qd(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=qd.fromTimestamp(1e9===r?new $d(n+1,0):new $d(n,r));return new Yd(i,Wd.empty(),e)}function Xd(t){return new Yd(t.readTime,t.key,-1)}class Yd{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Yd(qd.min(),Wd.empty(),-1)}static max(){return new Yd(qd.max(),Wd.empty(),-1)}}function Zd(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Wd.comparator(t.documentKey,e.documentKey),0!==n?n:Vd(t.largestBatchId,e.largestBatchId))}
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
 */const tf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ef{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
 */async function nf(t){if(t.code!==Cd.FAILED_PRECONDITION||t.message!==tf)throw t;bd("LocalStore","Unexpectedly lost primary lease")}
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
 */class rf{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Td(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new rf(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof rf?e:rf.resolve(e)}catch(t){return rf.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):rf.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):rf.reject(e)}static resolve(t){return new rf(((e,n)=>{e(t)}))}static reject(t){return new rf(((e,n)=>{n(t)}))}static waitFor(t){return new rf(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=rf.resolve(!1);for(const n of t)e=e.next((t=>t?rf.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new rf(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new rf(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
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
 */function sf(t){return"IndexedDbTransactionError"===t.name}
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
class of{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ot(t),this.ut=t=>e.writeSequenceNumber(t))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}function af(t){return null==t}function cf(t){return 0===t&&1/t==-1/0}function uf(t){return"number"==typeof t&&Number.isInteger(t)&&!cf(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
 */of.ct=-1;const lf=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],hf=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],df=hf;
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
function ff(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function pf(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function gf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */class mf{constructor(t,e){this.comparator=t,this.root=e||vf.EMPTY}insert(t,e){return new mf(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,vf.BLACK,null,null))}remove(t){return new mf(this.comparator,this.root.remove(t,this.comparator).copy(null,null,vf.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new yf(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new yf(this.root,t,this.comparator,!1)}getReverseIterator(){return new yf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new yf(this.root,t,this.comparator,!0)}}class yf{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class vf{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:vf.RED,this.left=null!=r?r:vf.EMPTY,this.right=null!=i?i:vf.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new vf(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return vf.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return vf.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,vf.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,vf.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Td();if(this.right.isRed())throw Td();const t=this.left.check();if(t!==this.right.check())throw Td();return t+(this.isRed()?0:1)}}vf.EMPTY=null,vf.RED=!0,vf.BLACK=!1,vf.EMPTY=new class{constructor(){this.size=0}get key(){throw Td()}get value(){throw Td()}get color(){throw Td()}get left(){throw Td()}get right(){throw Td()}copy(t,e,n,r,i){return this}insert(t,e,n){return new vf(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class wf{constructor(t){this.comparator=t,this.data=new mf(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new bf(this.data.getIterator())}getIteratorFrom(t){return new bf(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof wf))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new wf(this.comparator);return e.data=t,e}}class bf{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class Ef{constructor(t){this.fields=t,t.sort(Kd.comparator)}static empty(){return new Ef([])}unionWith(t){let e=new wf(Kd.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new Ef(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return jd(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
 */class _f extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
class If{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new _f("Invalid base64 string: "+t):t}}(t);return new If(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new If(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Vd(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}If.EMPTY_BYTE_STRING=new If("");const Tf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Sf(t){if(Sd(!!t),"string"==typeof t){let e=0;const n=Tf.exec(t);if(Sd(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Af(t.seconds),nanos:Af(t.nanos)}}function Af(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Cf(t){return"string"==typeof t?If.fromBase64String(t):If.fromUint8Array(t)}
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
 */function Nf(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Of(t){const e=Sf(t.mapValue.fields.__local_write_time__.timestampValue);return new $d(e.seconds,e.nanos)}
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
 */class kf{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Rf{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Rf("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Rf&&t.projectId===this.projectId&&t.database===this.database}}
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
 */const Df={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Lf(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Nf(t)?4:Hf(t)?9007199254740991:10:Td()}function Pf(t,e){if(t===e)return!0;const n=Lf(t);if(n!==Lf(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Of(t).isEqual(Of(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Sf(t.timestampValue),r=Sf(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return r=e,Cf(t.bytesValue).isEqual(Cf(r.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Af(t.geoPointValue.latitude)===Af(e.geoPointValue.latitude)&&Af(t.geoPointValue.longitude)===Af(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Af(t.integerValue)===Af(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Af(t.doubleValue),r=Af(e.doubleValue);return n===r?cf(n)===cf(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return jd(t.arrayValue.values||[],e.arrayValue.values||[],Pf);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(ff(n)!==ff(r))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===r[t]||!Pf(n[t],r[t])))return!1;return!0}(t,e);default:return Td()}var r}function xf(t,e){return void 0!==(t.values||[]).find((t=>Pf(t,e)))}function Mf(t,e){if(t===e)return 0;const n=Lf(t),r=Lf(e);if(n!==r)return Vd(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Vd(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Af(t.integerValue||t.doubleValue),r=Af(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Uf(t.timestampValue,e.timestampValue);case 4:return Uf(Of(t),Of(e));case 5:return Vd(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Cf(t),r=Cf(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let t=0;t<n.length&&t<r.length;t++){const e=Vd(n[t],r[t]);if(0!==e)return e}return Vd(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Vd(Af(t.latitude),Af(e.latitude));return 0!==n?n:Vd(Af(t.longitude),Af(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let t=0;t<n.length&&t<r.length;++t){const e=Mf(n[t],r[t]);if(e)return e}return Vd(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Df.mapValue&&e===Df.mapValue)return 0;if(t===Df.mapValue)return 1;if(e===Df.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let t=0;t<r.length&&t<s.length;++t){const e=Vd(r[t],s[t]);if(0!==e)return e;const o=Mf(n[r[t]],i[s[t]]);if(0!==o)return o}return Vd(r.length,s.length)}(t.mapValue,e.mapValue);default:throw Td()}}function Uf(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Vd(t,e);const n=Sf(t),r=Sf(e),i=Vd(n.seconds,r.seconds);return 0!==i?i:Vd(n.nanos,r.nanos)}function Ff(t){return Bf(t)}function Bf(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Sf(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Cf(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Wd.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Bf(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${Bf(t.fields[i])}`;return n+"}"}(t.mapValue):Td()}function Vf(t){return!!t&&"integerValue"in t}function jf(t){return!!t&&"arrayValue"in t}function $f(t){return!!t&&"mapValue"in t}function qf(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return pf(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=qf(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qf(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Hf(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class zf{constructor(t){this.value=t}static empty(){return new zf({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!$f(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=qf(e)}setAll(t){let e=Kd.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=qf(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());$f(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Pf(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];$f(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){pf(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new zf(qf(this.value))}}function Gf(t){const e=[];return pf(t.fields,((t,n)=>{const r=new Kd([t]);if($f(n)){const t=Gf(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new Ef(e)
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
 */}class Kf{constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new Kf(t,0,qd.min(),qd.min(),qd.min(),zf.empty(),0)}static newFoundDocument(t,e,n,r){return new Kf(t,1,e,qd.min(),n,r,0)}static newNoDocument(t,e){return new Kf(t,2,e,qd.min(),qd.min(),zf.empty(),0)}static newUnknownDocument(t,e){return new Kf(t,3,e,qd.min(),qd.min(),zf.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(qd.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=zf.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=zf.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=qd.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Kf&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Kf(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class Wf{constructor(t,e){this.position=t,this.inclusive=e}}function Jf(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?Wd.comparator(Wd.fromName(o.referenceValue),n.key):Mf(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Qf(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Pf(t.position[n],e.position[n]))return!1;return!0}
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
 */class Xf{constructor(t,e="asc"){this.field=t,this.dir=e}}function Yf(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
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
 */class Zf{}class tp extends Zf{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new cp(t,e,n):"array-contains"===e?new dp(t,n):"in"===e?new fp(t,n):"not-in"===e?new pp(t,n):"array-contains-any"===e?new gp(t,n):new tp(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new up(t,n):new lp(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Mf(e,this.value)):null!==e&&Lf(this.value)===Lf(e)&&this.matchesComparison(Mf(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Td()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ep extends Zf{constructor(t,e){super(),this.filters=t,this.op=e,this.ht=null}static create(t,e){return new ep(t,e)}matches(t){return np(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt((t=>t.isInequality()));return null!==t?t.field:null}lt(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function np(t){return"and"===t.op}function rp(t){return ip(t)&&np(t)}function ip(t){for(const e of t.filters)if(e instanceof ep)return!1;return!0}function sp(t){if(t instanceof tp)return t.field.canonicalString()+t.op.toString()+Ff(t.value);if(rp(t))return t.filters.map((t=>sp(t))).join(",");{const e=t.filters.map((t=>sp(t))).join(",");return`${t.op}(${e})`}}function op(t,e){return t instanceof tp?(n=t,(r=e)instanceof tp&&n.op===r.op&&n.field.isEqual(r.field)&&Pf(n.value,r.value)):t instanceof ep?function(t,e){return e instanceof ep&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&op(n,e.filters[r])),!0)}(t,e):void Td();var n,r}function ap(t){return t instanceof tp?`${(e=t).field.canonicalString()} ${e.op} ${Ff(e.value)}`:t instanceof ep?function(t){return t.op.toString()+" {"+t.getFilters().map(ap).join(" ,")+"}"}(t):"Filter";var e}class cp extends tp{constructor(t,e,n){super(t,e,n),this.key=Wd.fromName(n.referenceValue)}matches(t){const e=Wd.comparator(t.key,this.key);return this.matchesComparison(e)}}class up extends tp{constructor(t,e){super(t,"in",e),this.keys=hp("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class lp extends tp{constructor(t,e){super(t,"not-in",e),this.keys=hp("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function hp(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Wd.fromName(t.referenceValue)))}class dp extends tp{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return jf(e)&&xf(e.arrayValue,this.value)}}class fp extends tp{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&xf(this.value.arrayValue,e)}}class pp extends tp{constructor(t,e){super(t,"not-in",e)}matches(t){if(xf(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!xf(this.value.arrayValue,e)}}class gp extends tp{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!jf(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>xf(this.value.arrayValue,t)))}}
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
 */class mp{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ft=null}}function yp(t,e=null,n=[],r=[],i=null,s=null,o=null){return new mp(t,e,n,r,i,s,o)}function vp(t){const e=Ad(t);if(null===e.ft){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>sp(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),af(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Ff(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Ff(t))).join(",")),e.ft=t}return e.ft}function wp(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Yf(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!op(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Qf(t.startAt,e.startAt)&&Qf(t.endAt,e.endAt)}
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
class bp{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this.wt=null,this.startAt,this.endAt}}function Ep(t,e,n,r,i,s,o,a){return new bp(t,e,n,r,i,s,o,a)}function _p(t){return new bp(t)}function Ip(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Tp(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Sp(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function Ap(t){return null!==t.collectionGroup}function Cp(t){const e=Ad(t);if(null===e.dt){e.dt=[];const t=Sp(e),n=Tp(e);if(null!==t&&null===n)t.isKeyField()||e.dt.push(new Xf(t)),e.dt.push(new Xf(Kd.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.dt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Xf(Kd.keyField(),t))}}}return e.dt}function Np(t){const e=Ad(t);if(!e.wt)if("F"===e.limitType)e.wt=yp(e.path,e.collectionGroup,Cp(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Cp(e)){const e="desc"===n.dir?"asc":"desc";t.push(new Xf(n.field,e))}const n=e.endAt?new Wf(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Wf(e.startAt.position,e.startAt.inclusive):null;e.wt=yp(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.wt}function Op(t,e,n){return new bp(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function kp(t,e){return wp(Np(t),Np(e))&&t.limitType===e.limitType}function Rp(t){return`${vp(Np(t))}|lt:${t.limitType}`}function Dp(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>ap(t))).join(", ")}]`),af(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Ff(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Ff(t))).join(",")),`Target(${e})`}(Np(t))}; limitType=${t.limitType})`}function Lp(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Wd.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Cp(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(r=e,!((n=t).startAt&&!function(t,e,n){const r=Jf(t,e,n);return t.inclusive?r<=0:r<0}(n.startAt,Cp(n),r)||n.endAt&&!function(t,e,n){const r=Jf(t,e,n);return t.inclusive?r>=0:r>0}(n.endAt,Cp(n),r)));var n,r}function Pp(t){return(e,n)=>{let r=!1;for(const i of Cp(t)){const t=xp(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function xp(t,e,n){const r=t.field.isKeyField()?Wd.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Mf(r,i):Td()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Td()}}
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
 */class Mp{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,r]of n)if(this.equalsFn(e,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){pf(this.inner,((e,n)=>{for(const[e,r]of n)t(e,r)}))}isEmpty(){return gf(this.inner)}size(){return this.innerSize}}
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
 */const Up=new mf(Wd.comparator);function Fp(){return Up}const Bp=new mf(Wd.comparator);function Vp(...t){let e=Bp;for(const n of t)e=e.insert(n.key,n);return e}function jp(t){let e=Bp;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function $p(){return Hp()}function qp(){return Hp()}function Hp(){return new Mp((t=>t.toString()),((t,e)=>t.isEqual(e)))}const zp=new mf(Wd.comparator),Gp=new wf(Wd.comparator);function Kp(...t){let e=Gp;for(const n of t)e=e.add(n);return e}const Wp=new wf(Vd);function Jp(){return Wp}
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
 */function Qp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cf(e)?"-0":e}}function Xp(t){return{integerValue:""+t}}function Yp(t,e){return uf(e)?Xp(e):Qp(t,e)}
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
 */class Zp{constructor(){this._=void 0}}function tg(t,e,n){return t instanceof rg?ig(t,e):t instanceof sg?og(t,e):n}function eg(t,e){var n,r;return t instanceof ag?Vf(n=e)||(r=n)&&"doubleValue"in r?e:{integerValue:0}:null}class ng extends Zp{}class rg extends Zp{constructor(t){super(),this.elements=t}}function ig(t,e){const n=ug(e);for(const e of t.elements)n.some((t=>Pf(t,e)))||n.push(e);return{arrayValue:{values:n}}}class sg extends Zp{constructor(t){super(),this.elements=t}}function og(t,e){let n=ug(e);for(const e of t.elements)n=n.filter((t=>!Pf(t,e)));return{arrayValue:{values:n}}}class ag extends Zp{constructor(t,e){super(),this.serializer=t,this._t=e}}function cg(t){return Af(t.integerValue||t.doubleValue)}function ug(t){return jf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */class lg{constructor(t,e){this.field=t,this.transform=e}}class hg{constructor(t,e){this.version=t,this.transformResults=e}}class dg{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new dg}static exists(t){return new dg(void 0,t)}static updateTime(t){return new dg(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function fg(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class pg{}function gg(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Sg(t.key,dg.none()):new bg(t.key,t.data,dg.none());{const n=t.data,r=zf.empty();let i=new wf(Kd.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new Eg(t.key,r,new Ef(i.toArray()),dg.none())}}function mg(t,e,n){var r;t instanceof bg?function(t,e,n){const r=t.value.clone(),i=Ig(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Eg?function(t,e,n){if(!fg(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Ig(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(_g(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):(r=n,e.convertToNoDocument(r.version).setHasCommittedMutations())}function yg(t,e,n,r){return t instanceof bg?function(t,e,n,r){if(!fg(t.precondition,e))return n;const i=t.value.clone(),s=Tg(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof Eg?function(t,e,n,r){if(!fg(t.precondition,e))return n;const i=Tg(t.fieldTransforms,r,e),s=e.data;return s.setAll(_g(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):(i=e,s=n,fg(t.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):s);var i,s}function vg(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=eg(r.transform,t||null);null!=i&&(null===n&&(n=zf.empty()),n.set(r.field,i))}return n||null}function wg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,r=e.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&jd(n,r,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,r=e.transform,n instanceof rg&&r instanceof rg||n instanceof sg&&r instanceof sg?jd(n.elements,r.elements,Pf):n instanceof ag&&r instanceof ag?Pf(n._t,r._t):n instanceof ng&&r instanceof ng);var n,r}(t,e)))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask));var n,r}class bg extends pg{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Eg extends pg{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function _g(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Ig(t,e,n){const r=new Map;Sd(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,tg(o,a,n[i]))}return r}function Tg(t,e,n){const r=new Map;for(const a of t){const t=a.transform,c=n.data.field(a.field);r.set(a.field,(s=c,o=e,(i=t)instanceof ng?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(o,s):i instanceof rg?ig(i,s):i instanceof sg?og(i,s):function(t,e){const n=eg(t,e),r=cg(n)+cg(t._t);return Vf(n)&&Vf(t._t)?Xp(r):Qp(t.serializer,r)}(i,s)))}var i,s,o;return r}class Sg extends pg{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ag extends pg{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class Cg{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const r=this.mutations[e];r.key.isEqual(t.key)&&mg(r,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=yg(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=yg(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=qp();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=gg(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(qd.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Kp())}isEqual(t){return this.batchId===t.batchId&&jd(this.mutations,t.mutations,((t,e)=>wg(t,e)))&&jd(this.baseMutations,t.baseMutations,((t,e)=>wg(t,e)))}}class Ng{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Sd(t.mutations.length===n.length);let r=zp;const i=t.mutations;for(let t=0;t<i.length;t++)r=r.insert(i[t].key,n[t].version);return new Ng(t,e,n,r)}}
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
 */class Og{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
var kg,Rg;function Dg(t){switch(t){default:return Td();case Cd.CANCELLED:case Cd.UNKNOWN:case Cd.DEADLINE_EXCEEDED:case Cd.RESOURCE_EXHAUSTED:case Cd.INTERNAL:case Cd.UNAVAILABLE:case Cd.UNAUTHENTICATED:return!1;case Cd.INVALID_ARGUMENT:case Cd.NOT_FOUND:case Cd.ALREADY_EXISTS:case Cd.PERMISSION_DENIED:case Cd.FAILED_PRECONDITION:case Cd.ABORTED:case Cd.OUT_OF_RANGE:case Cd.UNIMPLEMENTED:case Cd.DATA_LOSS:return!0}}function Lg(t){if(void 0===t)return Ed("GRPC error has no .code"),Cd.UNKNOWN;switch(t){case kg.OK:return Cd.OK;case kg.CANCELLED:return Cd.CANCELLED;case kg.UNKNOWN:return Cd.UNKNOWN;case kg.DEADLINE_EXCEEDED:return Cd.DEADLINE_EXCEEDED;case kg.RESOURCE_EXHAUSTED:return Cd.RESOURCE_EXHAUSTED;case kg.INTERNAL:return Cd.INTERNAL;case kg.UNAVAILABLE:return Cd.UNAVAILABLE;case kg.UNAUTHENTICATED:return Cd.UNAUTHENTICATED;case kg.INVALID_ARGUMENT:return Cd.INVALID_ARGUMENT;case kg.NOT_FOUND:return Cd.NOT_FOUND;case kg.ALREADY_EXISTS:return Cd.ALREADY_EXISTS;case kg.PERMISSION_DENIED:return Cd.PERMISSION_DENIED;case kg.FAILED_PRECONDITION:return Cd.FAILED_PRECONDITION;case kg.ABORTED:return Cd.ABORTED;case kg.OUT_OF_RANGE:return Cd.OUT_OF_RANGE;case kg.UNIMPLEMENTED:return Cd.UNIMPLEMENTED;case kg.DATA_LOSS:return Cd.DATA_LOSS;default:return Td()}}(Rg=kg||(kg={}))[Rg.OK=0]="OK",Rg[Rg.CANCELLED=1]="CANCELLED",Rg[Rg.UNKNOWN=2]="UNKNOWN",Rg[Rg.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Rg[Rg.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Rg[Rg.NOT_FOUND=5]="NOT_FOUND",Rg[Rg.ALREADY_EXISTS=6]="ALREADY_EXISTS",Rg[Rg.PERMISSION_DENIED=7]="PERMISSION_DENIED",Rg[Rg.UNAUTHENTICATED=16]="UNAUTHENTICATED",Rg[Rg.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Rg[Rg.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Rg[Rg.ABORTED=10]="ABORTED",Rg[Rg.OUT_OF_RANGE=11]="OUT_OF_RANGE",Rg[Rg.UNIMPLEMENTED=12]="UNIMPLEMENTED",Rg[Rg.INTERNAL=13]="INTERNAL",Rg[Rg.UNAVAILABLE=14]="UNAVAILABLE",Rg[Rg.DATA_LOSS=15]="DATA_LOSS";class Pg{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function xg(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ug(t,e){return xg(t,e.toTimestamp())}function Fg(t){return Sd(!!t),qd.fromTimestamp(function(t){const e=Sf(t);return new $d(e.seconds,e.nanos)}(t))}function Bg(t,e){return(n=t,new zd(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function Vg(t){const e=zd.fromString(t);return Sd(Xg(e)),e}function jg(t,e){return Bg(t.databaseId,e.path)}function $g(t){const e=Vg(t);return 4===e.length?zd.emptyPath():Hg(e)}function qg(t){return new zd(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Hg(t){return Sd(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function zg(t,e,n){return{name:jg(t,e),fields:n.value.mapValue.fields}}function Gg(t,e){let n;if(e instanceof bg)n={update:zg(t,e.key,e.value)};else if(e instanceof Sg)n={delete:jg(t,e.key)};else if(e instanceof Eg)n={update:zg(t,e.key,e.data),updateMask:Qg(e.fieldMask)};else{if(!(e instanceof Ag))return Td();n={verify:jg(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof ng)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof rg)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof sg)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ag)return{fieldPath:e.field.canonicalString(),increment:n._t};throw Td()}(0,t)))),e.precondition.isNone||(n.currentDocument=(r=t,void 0!==(i=e.precondition).updateTime?{updateTime:Ug(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:Td())),n;var r,i}function Kg(t){let e=$g(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Sd(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=Wg(t);return e instanceof ep&&rp(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new Xf(Jg((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,af(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Wf(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Wf(n,e)}(n.endAt)),Ep(e,i,o,s,a,"F",c,u)}function Wg(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Jg(t.unaryFilter.field);return tp.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Jg(t.unaryFilter.field);return tp.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Jg(t.unaryFilter.field);return tp.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Jg(t.unaryFilter.field);return tp.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Td()}}(t):void 0!==t.fieldFilter?(n=t,tp.create(Jg(n.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Td()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==t.compositeFilter?(e=t,ep.create(e.compositeFilter.filters.map((t=>Wg(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Td()}}(e.compositeFilter.op))):Td();var e,n}function Jg(t){return Kd.fromServerFormat(t.fieldPath)}function Qg(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Xg(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */class Yg{constructor(t){this.se=t}}function Zg(t){const e=Kg({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Op(e,e.limit,"L"):e}
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
 */class tm{constructor(){}oe(t,e){this.ue(t,e),e.ce()}ue(t,e){if("nullValue"in t)this.ae(e,5);else if("booleanValue"in t)this.ae(e,10),e.he(t.booleanValue?1:0);else if("integerValue"in t)this.ae(e,15),e.he(Af(t.integerValue));else if("doubleValue"in t){const n=Af(t.doubleValue);isNaN(n)?this.ae(e,13):(this.ae(e,15),cf(n)?e.he(0):e.he(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ae(e,20),"string"==typeof n?e.le(n):(e.le(`${n.seconds||""}`),e.he(n.nanos||0))}else if("stringValue"in t)this.fe(t.stringValue,e),this.de(e);else if("bytesValue"in t)this.ae(e,30),e.we(Cf(t.bytesValue)),this.de(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ae(e,45),e.he(n.latitude||0),e.he(n.longitude||0)}else"mapValue"in t?Hf(t)?this.ae(e,Number.MAX_SAFE_INTEGER):(this.me(t.mapValue,e),this.de(e)):"arrayValue"in t?(this.ge(t.arrayValue,e),this.de(e)):Td()}fe(t,e){this.ae(e,25),this.ye(t,e)}ye(t,e){e.le(t)}me(t,e){const n=t.fields||{};this.ae(e,55);for(const t of Object.keys(n))this.fe(t,e),this.ue(n[t],e)}ge(t,e){const n=t.values||[];this.ae(e,50);for(const t of n)this.ue(t,e)}_e(t,e){this.ae(e,37),Wd.fromName(t).path.forEach((t=>{this.ae(e,60),this.ye(t,e)}))}ae(t,e){t.he(e)}de(t){t.he(2)}}tm.pe=new tm;
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
class em{constructor(){this.He=new nm}addToCollectionParentIndex(t,e){return this.He.add(e),rf.resolve()}getCollectionParents(t,e){return rf.resolve(this.He.getEntries(e))}addFieldIndex(t,e){return rf.resolve()}deleteFieldIndex(t,e){return rf.resolve()}getDocumentsMatchingTarget(t,e){return rf.resolve(null)}getIndexType(t,e){return rf.resolve(0)}getFieldIndexes(t,e){return rf.resolve([])}getNextCollectionGroupToUpdate(t){return rf.resolve(null)}getMinOffset(t,e){return rf.resolve(Yd.min())}getMinOffsetFromCollectionGroup(t,e){return rf.resolve(Yd.min())}updateCollectionGroup(t,e,n){return rf.resolve()}updateIndexEntries(t,e){return rf.resolve()}}class nm{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new wf(zd.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new wf(zd.comparator)).toArray()}}
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
 */new Uint8Array(0);class rm{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new rm(t,rm.DEFAULT_COLLECTION_PERCENTILE,rm.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */rm.DEFAULT_COLLECTION_PERCENTILE=10,rm.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rm.DEFAULT=new rm(41943040,rm.DEFAULT_COLLECTION_PERCENTILE,rm.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rm.DISABLED=new rm(-1,0,0);
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
class im{constructor(t){this.Rn=t}next(){return this.Rn+=2,this.Rn}static vn(){return new im(0)}static bn(){return new im(-1)}}
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
class sm{constructor(){this.changes=new Mp((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Kf.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?rf.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
class om{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
 */class am{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&yg(n.mutation,t,Ef.empty(),$d.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Kp()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Kp()){const r=$p();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=Vp();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=$p();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Kp())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=Fp();const s=Hp(),o=Hp();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof Eg)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),yg(o.mutation,e,o.mutation.getFieldMask(),$d.now())):s.set(e.key,Ef.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new om(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Hp();let r=new mf(((t,e)=>t-e)),i=Kp();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||Ef.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||Kp()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=qp();c.forEach((t=>{if(!i.has(t)){const r=gg(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return rf.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return r=e,Wd.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):Ap(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n);var r}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):rf.resolve($p());let o=-1,a=i;return s.next((e=>rf.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?rf.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,Kp()))).next((t=>({batchId:o,changes:jp(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Wd(e)).next((t=>{let e=Vp();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=Vp();return this.indexManager.getCollectionParents(t,r).next((s=>rf.forEach(s,(s=>{const o=(a=e,c=s.child(r),new bp(c,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,c;return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r)))).next((t=>{r.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,Kf.newInvalidDocument(r)))}));let n=Vp();return t.forEach(((t,i)=>{const s=r.get(t);void 0!==s&&yg(s.mutation,i,Ef.empty(),$d.now()),Lp(e,i)&&(n=n.insert(t,i))})),n}))}}
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
 */class cm{constructor(t){this.serializer=t,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return rf.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:Fg(n.createTime)}),rf.resolve()}getNamedQuery(t,e){return rf.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,{name:(n=e).name,query:Zg(n.bundledQuery),readTime:Fg(n.readTime)}),rf.resolve();var n}}
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
 */class um{constructor(){this.overlays=new mf(Wd.comparator),this.ts=new Map}getOverlay(t,e){return rf.resolve(this.overlays.get(e))}getOverlays(t,e){const n=$p();return rf.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.re(t,e,r)})),rf.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.ts.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.ts.delete(n)),rf.resolve()}getOverlaysForCollection(t,e,n){const r=$p(),i=e.length+1,s=new Wd(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return rf.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new mf(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=$p(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=$p(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=r)););return rf.resolve(o)}re(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.ts.get(r.largestBatchId).delete(n.key);this.ts.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Og(e,n));let i=this.ts.get(e);void 0===i&&(i=Kp(),this.ts.set(e,i)),this.ts.set(e,i.add(n.key))}}
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
 */class lm{constructor(){this.es=new wf(hm.ns),this.ss=new wf(hm.rs)}isEmpty(){return this.es.isEmpty()}addReference(t,e){const n=new hm(t,e);this.es=this.es.add(n),this.ss=this.ss.add(n)}os(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.us(new hm(t,e))}cs(t,e){t.forEach((t=>this.removeReference(t,e)))}hs(t){const e=new Wd(new zd([])),n=new hm(e,t),r=new hm(e,t+1),i=[];return this.ss.forEachInRange([n,r],(t=>{this.us(t),i.push(t.key)})),i}ls(){this.es.forEach((t=>this.us(t)))}us(t){this.es=this.es.delete(t),this.ss=this.ss.delete(t)}fs(t){const e=new Wd(new zd([])),n=new hm(e,t),r=new hm(e,t+1);let i=Kp();return this.ss.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new hm(t,0),n=this.es.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class hm{constructor(t,e){this.key=t,this.ds=e}static ns(t,e){return Wd.comparator(t.key,e.key)||Vd(t.ds,e.ds)}static rs(t,e){return Vd(t.ds,e.ds)||Wd.comparator(t.key,e.key)}}
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
 */class dm{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this._s=new wf(hm.ns)}checkEmpty(t){return rf.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Cg(i,e,n,r);this.mutationQueue.push(s);for(const e of r)this._s=this._s.add(new hm(e.key,i)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return rf.resolve(s)}lookupMutationBatch(t,e){return rf.resolve(this.gs(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ys(n),i=r<0?0:r;return rf.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return rf.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return rf.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new hm(e,0),r=new hm(e,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([n,r],(t=>{const e=this.gs(t.ds);i.push(e)})),rf.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new wf(Vd);return e.forEach((t=>{const e=new hm(t,0),r=new hm(t,Number.POSITIVE_INFINITY);this._s.forEachInRange([e,r],(t=>{n=n.add(t.ds)}))})),rf.resolve(this.ps(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;Wd.isDocumentKey(i)||(i=i.child(""));const s=new hm(new Wd(i),0);let o=new wf(Vd);return this._s.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ds)),!0)}),s),rf.resolve(this.ps(o))}ps(t){const e=[];return t.forEach((t=>{const n=this.gs(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Sd(0===this.Is(e.batchId,"removed")),this.mutationQueue.shift();let n=this._s;return rf.forEach(e.mutations,(r=>{const i=new hm(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this._s=n}))}En(t){}containsKey(t,e){const n=new hm(e,0),r=this._s.firstAfterOrEqual(n);return rf.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,rf.resolve()}Is(t,e){return this.ys(t)}ys(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}gs(t){const e=this.ys(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
 */class fm{constructor(t){this.Ts=t,this.docs=new mf(Wd.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.Ts(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return rf.resolve(n?n.document.mutableCopy():Kf.newInvalidDocument(e))}getEntries(t,e){let n=Fp();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Kf.newInvalidDocument(t))})),rf.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=Fp();const s=e.path,o=new Wd(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||Zd(Xd(o),n)<=0||(r.has(o.key)||Lp(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return rf.resolve(i)}getAllFromCollectionGroup(t,e,n,r){Td()}Es(t,e){return rf.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new pm(this)}getSize(t){return rf.resolve(this.size)}}class pm extends sm{constructor(t){super(),this.Jn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.Jn.addEntry(t,r)):this.Jn.removeEntry(n)})),rf.waitFor(e)}getFromCache(t,e){return this.Jn.getEntry(t,e)}getAllFromCache(t,e){return this.Jn.getEntries(t,e)}}
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
 */class gm{constructor(t){this.persistence=t,this.As=new Mp((t=>vp(t)),wp),this.lastRemoteSnapshotVersion=qd.min(),this.highestTargetId=0,this.Rs=0,this.vs=new lm,this.targetCount=0,this.bs=im.vn()}forEachTarget(t,e){return this.As.forEach(((t,n)=>e(n))),rf.resolve()}getLastRemoteSnapshotVersion(t){return rf.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return rf.resolve(this.Rs)}allocateTargetId(t){return this.highestTargetId=this.bs.next(),rf.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Rs&&(this.Rs=e),rf.resolve()}Sn(t){this.As.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.bs=new im(e),this.highestTargetId=e),t.sequenceNumber>this.Rs&&(this.Rs=t.sequenceNumber)}addTargetData(t,e){return this.Sn(e),this.targetCount+=1,rf.resolve()}updateTargetData(t,e){return this.Sn(e),rf.resolve()}removeTargetData(t,e){return this.As.delete(e.target),this.vs.hs(e.targetId),this.targetCount-=1,rf.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.As.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.As.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),rf.waitFor(i).next((()=>r))}getTargetCount(t){return rf.resolve(this.targetCount)}getTargetData(t,e){const n=this.As.get(e)||null;return rf.resolve(n)}addMatchingKeys(t,e,n){return this.vs.os(e,n),rf.resolve()}removeMatchingKeys(t,e,n){this.vs.cs(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),rf.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.vs.hs(e),rf.resolve()}getMatchingKeysForTargetId(t,e){const n=this.vs.fs(e);return rf.resolve(n)}containsKey(t,e){return rf.resolve(this.vs.containsKey(e))}}
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
 */class mm{constructor(t,e){this.Ps={},this.overlays={},this.Vs=new of(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=t(this),this.Ds=new gm(this),this.indexManager=new em,this.remoteDocumentCache=new fm((t=>this.referenceDelegate.Cs(t))),this.serializer=new Yg(e),this.xs=new cm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new um,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Ps[t.toKey()];return n||(n=new dm(e,this.referenceDelegate),this.Ps[t.toKey()]=n),n}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(t,e,n){bd("MemoryPersistence","Starting transaction:",t);const r=new ym(this.Vs.next());return this.referenceDelegate.Ns(),n(r).next((t=>this.referenceDelegate.ks(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Os(t,e){return rf.or(Object.values(this.Ps).map((n=>()=>n.containsKey(t,e))))}}class ym extends ef{constructor(t){super(),this.currentSequenceNumber=t}}class vm{constructor(t){this.persistence=t,this.$s=new lm,this.Ms=null}static Fs(t){return new vm(t)}get Bs(){if(this.Ms)return this.Ms;throw Td()}addReference(t,e,n){return this.$s.addReference(n,e),this.Bs.delete(n.toString()),rf.resolve()}removeReference(t,e,n){return this.$s.removeReference(n,e),this.Bs.add(n.toString()),rf.resolve()}markPotentiallyOrphaned(t,e){return this.Bs.add(e.toString()),rf.resolve()}removeTarget(t,e){this.$s.hs(e.targetId).forEach((t=>this.Bs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Bs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ns(){this.Ms=new Set}ks(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return rf.forEach(this.Bs,(n=>{const r=Wd.fromPath(n);return this.Ls(t,r).next((t=>{t||e.removeEntry(r,qd.min())}))})).next((()=>(this.Ms=null,e.apply(t))))}updateLimboDocument(t,e){return this.Ls(t,e).next((t=>{t?this.Bs.delete(e.toString()):this.Bs.add(e.toString())}))}Cs(t){return 0}Ls(t,e){return rf.or([()=>rf.resolve(this.$s.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Os(t,e)])}}
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
class wm{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Vi=n,this.Si=r}static Di(t,e){let n=Kp(),r=Kp();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:r=r.add(t.doc.key)}return new wm(t,e.fromCache,n,r)}}
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
 */class bm{constructor(){this.Ci=!1}initialize(t,e){this.xi=t,this.indexManager=e,this.Ci=!0}getDocumentsMatchingQuery(t,e,n,r){return this.Ni(t,e).next((i=>i||this.ki(t,e,r,n))).next((n=>n||this.Oi(t,e)))}Ni(t,e){if(Ip(e))return rf.resolve(null);let n=Np(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=Op(e,null,"F"),n=Np(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=Kp(...r);return this.xi.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.$i(e,r);return this.Mi(e,s,i,n.readTime)?this.Ni(t,Op(e,null,"F")):this.Fi(t,s,e,n)}))))})))))}ki(t,e,n,r){return Ip(e)||r.isEqual(qd.min())?this.Oi(t,e):this.xi.getDocuments(t,n).next((i=>{const s=this.$i(e,i);return this.Mi(e,s,n,r)?this.Oi(t,e):(wd()<=Cr.DEBUG&&bd("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Dp(e)),this.Fi(t,s,e,Qd(r,-1)))}))}$i(t,e){let n=new wf(Pp(t));return e.forEach(((e,r)=>{Lp(t,r)&&(n=n.add(r))})),n}Mi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(t,e){return wd()<=Cr.DEBUG&&bd("QueryEngine","Using full collection scan to execute query:",Dp(e)),this.xi.getDocumentsMatchingQuery(t,e,Yd.min())}Fi(t,e,n,r){return this.xi.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
 */class Em{constructor(t,e,n,r){this.persistence=t,this.Bi=e,this.serializer=r,this.Li=new mf(Vd),this.qi=new Mp((t=>vp(t)),wp),this.Ui=new Map,this.Ki=t.getRemoteDocumentCache(),this.Ds=t.getTargetCache(),this.xs=t.getBundleCache(),this.Gi(n)}Gi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new am(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Li)))}}function _m(t,e,n,r){return new Em(t,e,n,r)}async function Im(t,e){const n=Ad(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.Gi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=Kp();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Qi:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function Tm(t){const e=Ad(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ds.getLastRemoteSnapshotVersion(t)))}function Sm(t,e){const n=Ad(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}class Am{constructor(){this.activeTargetIds=Jp()}tr(t){this.activeTargetIds=this.activeTargetIds.add(t)}er(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Xi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Cm{constructor(){this.Br=new Am,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Br.tr(t),this.Lr[t]||"not-current"}updateQueryState(t,e,n){this.Lr[t]=e}removeLocalQueryTarget(t){this.Br.er(t)}isLocalQueryTarget(t){return this.Br.activeTargetIds.has(t)}clearQueryState(t){delete this.Lr[t]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(t){return this.Br.activeTargetIds.has(t)}start(){return this.Br=new Am,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
 */class Nm{qr(t){}shutdown(){}}
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
 */class Om{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(t){this.zr.push(t)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){bd("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.zr)t(0)}Qr(){bd("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.zr)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */let km=null;function Rm(){return null===km?km=268435456+Math.round(2147483648*Math.random()):km++,"0x"+km.toString(16)
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
 */}const Dm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class Lm{constructor(t){this.Wr=t.Wr,this.Hr=t.Hr}Jr(t){this.Yr=t}Zr(t){this.Xr=t}onMessage(t){this.eo=t}close(){this.Hr()}send(t){this.Wr(t)}no(){this.Yr()}so(t){this.Xr(t)}io(t){this.eo(t)}}
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
 */class Pm extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.ro=e+"://"+t.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(t,e,n,r,i){const s=Rm(),o=this.ao(t,e);bd("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={};return this.ho(a,r,i),this.lo(t,o,a,n).then((e=>(bd("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw _d("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}fo(t,e,n,r,i,s){return this.co(t,e,n,r,i)}ho(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+yd,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ao(t,e){const n=Dm[t];return`${this.ro}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}lo(t,e,n,r){const i=Rm();return new Promise(((s,o)=>{const a=new gd;a.setWithCredentials(!0),a.listenOnce(ld.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case ud.NO_ERROR:const e=a.getResponseJson();bd("WebChannelConnection",`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),s(e);break;case ud.TIMEOUT:bd("WebChannelConnection",`RPC '${t}' ${i} timed out`),o(new Nd(Cd.DEADLINE_EXCEEDED,"Request time out"));break;case ud.HTTP_ERROR:const n=a.getStatus();if(bd("WebChannelConnection",`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Cd).indexOf(e)>=0?e:Cd.UNKNOWN}(e.status);o(new Nd(t,e.message))}else o(new Nd(Cd.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Nd(Cd.UNAVAILABLE,"Connection failed."));break;default:Td()}}finally{bd("WebChannelConnection",`RPC '${t}' ${i} completed.`)}}));const c=JSON.stringify(r);bd("WebChannelConnection",`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",c,n,15)}))}wo(t,e,n){const r=Rm(),i=[this.ro,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=ad(),o=cd(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new fd({})),this.ho(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const c=i.join("");bd("WebChannelConnection",`Creating RPC '${t}' stream ${r}: ${c}`,a);const u=s.createWebChannel(c,a);let l=!1,h=!1;const d=new Lm({Wr:e=>{h?bd("WebChannelConnection",`Not sending because RPC '${t}' stream ${r} is closed:`,e):(l||(bd("WebChannelConnection",`Opening RPC '${t}' stream ${r} transport.`),u.open(),l=!0),bd("WebChannelConnection",`RPC '${t}' stream ${r} sending:`,e),u.send(e))},Hr:()=>u.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(u,pd.EventType.OPEN,(()=>{h||bd("WebChannelConnection",`RPC '${t}' stream ${r} transport opened.`)})),f(u,pd.EventType.CLOSE,(()=>{h||(h=!0,bd("WebChannelConnection",`RPC '${t}' stream ${r} transport closed`),d.so())})),f(u,pd.EventType.ERROR,(e=>{h||(h=!0,_d("WebChannelConnection",`RPC '${t}' stream ${r} transport errored:`,e),d.so(new Nd(Cd.UNAVAILABLE,"The operation could not be completed")))})),f(u,pd.EventType.MESSAGE,(e=>{var n;if(!h){const i=e.data[0];Sd(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){bd("WebChannelConnection",`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=kg[t];if(void 0!==e)return Lg(e)}(e),i=o.message;void 0===n&&(n=Cd.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),h=!0,d.so(new Nd(n,i)),u.close()}else bd("WebChannelConnection",`RPC '${t}' stream ${r} received:`,i),d.io(i)}})),f(o,hd.STAT_EVENT,(e=>{e.stat===dd.PROXY?bd("WebChannelConnection",`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===dd.NOPROXY&&bd("WebChannelConnection",`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{d.no()}),0),d}}
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
 */function xm(){return"undefined"!=typeof document?document:null}
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
 */function Mm(t){return new Pg(t,!0)}
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
 */class Um{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Ws=t,this.timerId=e,this._o=n,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const e=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),r=Math.max(0,e-n);r>0&&bd("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,(()=>(this.To=Date.now(),t()))),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}
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
 */class Fm{constructor(t,e,n,r,i,s,o,a){this.Ws=t,this.bo=n,this.Po=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Um(t,e)}xo(){return 1===this.state||5===this.state||this.No()}No(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&null===this.So&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,(()=>this.Mo())))}Fo(t){this.Bo(),this.stream.send(t)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(t,e){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,4!==t?this.Co.reset():e&&e.code===Cd.RESOURCE_EXHAUSTED?(Ed(e.toString()),Ed("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):e&&e.code===Cd.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}qo(){}auth(){this.state=1;const t=this.Uo(this.Vo),e=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Vo===e&&this.Ko(t,n)}),(e=>{t((()=>{const t=new Nd(Cd.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Go(t)}))}))}Ko(t,e){const n=this.Uo(this.Vo);this.stream=this.Qo(t,e),this.stream.Jr((()=>{n((()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,(()=>(this.No()&&(this.state=3),Promise.resolve()))),this.listener.Jr())))})),this.stream.Zr((t=>{n((()=>this.Go(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}ko(){this.state=5,this.Co.Ao((async()=>{this.state=0,this.start()}))}Go(t){return bd("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Uo(t){return e=>{this.Ws.enqueueAndForget((()=>this.Vo===t?e():(bd("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Bm extends Fm{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(Sd(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Ho){this.Co.reset();const r=(e=t.writeResults,n=t.commitTime,e&&e.length>0?(Sd(void 0!==n),e.map((t=>function(t,e){let n=t.updateTime?Fg(t.updateTime):Fg(e);return n.isEqual(qd.min())&&(n=Fg(e)),new hg(n,t.transformResults||[])}(t,n)))):[]),i=Fg(t.commitTime);return this.listener.Zo(i,r)}var e,n;return Sd(!t.writeResults||0===t.writeResults.length),this.Ho=!0,this.listener.Xo()}tu(){const t={};t.database=qg(this.serializer),this.Fo(t)}Yo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Gg(this.serializer,t)))};this.Fo(e)}}
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
 */class Vm extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new Nd(Cd.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,e,n){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.co(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Cd.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Nd(Cd.UNKNOWN,t.toString())}))}fo(t,e,n,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.fo(t,e,n,i,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Cd.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Nd(Cd.UNKNOWN,t.toString())}))}terminate(){this.eu=!0}}class jm{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){0===this.su&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve()))))}au(t){"Online"===this.state?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.uu("Offline")))}set(t){this.hu(),this.su=0,"Online"===t&&(this.ru=!1),this.uu(t)}uu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}cu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Ed(e),this.ru=!1):bd("OnlineStateTracker",e)}hu(){null!==this.iu&&(this.iu.cancel(),this.iu=null)}}
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
 */class $m{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr((t=>{n.enqueueAndForget((async()=>{zm(this)&&(bd("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Ad(t);e.du.add(4),await Hm(e),e.mu.set("Unknown"),e.du.delete(4),await qm(e)}(this))}))})),this.mu=new jm(n,r)}}async function qm(t){if(zm(t))for(const e of t.wu)await e(!0)}async function Hm(t){for(const e of t.wu)await e(!1)}function zm(t){return 0===Ad(t).du.size}async function Gm(t,e,n){if(!sf(e))throw e;t.du.add(1),await Hm(t),t.mu.set("Offline"),n||(n=()=>Tm(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{bd("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await qm(t)}))}function Km(t,e){return e().catch((n=>Gm(t,n,e)))}async function Wm(t){const e=Ad(t),n=sy(e);let r=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;Jm(e);)try{const t=await Sm(e.localStore,r);if(null===t){0===e.lu.length&&n.$o();break}r=t.batchId,Qm(e,t)}catch(t){await Gm(e,t)}Xm(e)&&Ym(e)}function Jm(t){return zm(t)&&t.lu.length<10}function Qm(t,e){t.lu.push(e);const n=sy(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function Xm(t){return zm(t)&&!sy(t).xo()&&t.lu.length>0}function Ym(t){sy(t).start()}async function Zm(t){sy(t).tu()}async function ty(t){const e=sy(t);for(const n of t.lu)e.Yo(n.mutations)}async function ey(t,e,n){const r=t.lu.shift(),i=Ng.from(r,e,n);await Km(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Wm(t)}async function ny(t,e){e&&sy(t).Jo&&await async function(t,e){if(Dg(n=e.code)&&n!==Cd.ABORTED){const n=t.lu.shift();sy(t).Oo(),await Km(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Wm(t)}var n}(t,e),Xm(t)&&Ym(t)}async function ry(t,e){const n=Ad(t);n.asyncQueue.verifyOperationInProgress(),bd("RemoteStore","RemoteStore received new credentials");const r=zm(n);n.du.add(3),await Hm(n),r&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await qm(n)}async function iy(t,e){const n=Ad(t);e?(n.du.delete(2),await qm(n)):e||(n.du.add(2),await Hm(n),n.mu.set("Unknown"))}function sy(t){return t.pu||(t.pu=function(t,e,n){const r=Ad(t);return r.nu(),new Bm(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{Jr:Zm.bind(null,t),Zr:ny.bind(null,t),Xo:ty.bind(null,t),Zo:ey.bind(null,t)}),t.wu.push((async e=>{e?(t.pu.Oo(),await Wm(t)):(await t.pu.stop(),t.lu.length>0&&(bd("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))}))),t.pu
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
 */}class oy{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Od,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new oy(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Nd(Cd.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ay(t,e){if(Ed("AsyncQueue",`${e}: ${t}`),sf(t))return new Nd(Cd.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class cy{constructor(){this.queries=new Mp((t=>Rp(t)),kp),this.onlineState="Unknown",this.Au=new Set}}function uy(t){t.Au.forEach((t=>{t.next()}))}class ly{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.nc={},this.sc=new Mp((t=>Rp(t)),kp),this.ic=new Map,this.rc=new Set,this.oc=new mf(Wd.comparator),this.uc=new Map,this.cc=new lm,this.ac={},this.hc=new Map,this.lc=im.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}function hy(t,e,n){const r=Ad(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.sc.forEach(((n,r)=>{const i=r.view.Ru(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Ad(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.Ru(e)&&(r=!0)})),r&&uy(n)}(r.eventManager,e),t.length&&r.nc.zo(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function dy(t,e){const n=Ad(t),r=e.batch.batchId;try{const t=await function(t,e){const n=Ad(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.Ki.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=rf.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);Sd(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Kp();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(n.localStore,e);gy(n,r,null),py(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await my(n,t)}catch(t){await nf(t)}}async function fy(t,e,n){const r=Ad(t);try{const t=await function(t,e){const n=Ad(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Sd(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);gy(r,e,n),py(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await my(r,t)}catch(t){await nf(t)}}function py(t,e){(t.hc.get(e)||[]).forEach((t=>{t.resolve()})),t.hc.delete(e)}function gy(t,e,n){const r=Ad(t);let i=r.ac[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.ac[r.currentUser.toKey()]=i}}async function my(t,e,n){const r=Ad(t),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach(((t,a)=>{o.push(r.dc(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=wm.Di(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.nc.zo(i),await async function(t,e){const n=Ad(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>rf.forEach(e,(e=>rf.forEach(e.Vi,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>rf.forEach(e.Si,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!sf(t))throw t;bd("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.Li.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Li=n.Li.insert(e,i)}}}(r.localStore,s))}async function yy(t,e){const n=Ad(t);if(!n.currentUser.isEqual(e)){bd("SyncEngine","User change. New user:",e.toKey());const t=await Im(n.localStore,e);n.currentUser=e,(r=n).hc.forEach((t=>{t.forEach((t=>{t.reject(new Nd(Cd.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.hc.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await my(n,t.Qi)}var r}function vy(t){const e=Ad(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dy.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fy.bind(null,e),e}class wy{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Mm(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return _m(this.persistence,new bm,t.initialUser,this.serializer)}createPersistence(t){return new mm(vm.Fs,this.serializer)}createSharedClientState(t){return new Cm}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class by{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>hy(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=yy.bind(null,this.syncEngine),await iy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new cy}createDatastore(t){const e=Mm(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Pm(r));var r,i,s;return i=t.authCredentials,s=t.appCheckCredentials,new Vm(i,s,n,e)}createRemoteStore(t){var e,n,r,i,s;return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>hy(this.syncEngine,t,0),s=Om.D()?new Om:new Nm,new $m(e,n,r,i,s)}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new ly(t,e,n,r,i,s);return o&&(a.fc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Ad(t);bd("RemoteStore","RemoteStore shutting down."),e.du.add(5),await Hm(e),e._u.shutdown(),e.mu.set("Unknown")}(this.remoteStore)}}
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
class Ey{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=md.UNAUTHENTICATED,this.clientId=Bd.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{bd("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(bd("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Nd(Cd.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Od;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=ay(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function _y(t,e){t.asyncQueue.verifyOperationInProgress(),bd("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await Im(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Iy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Sy(t);bd("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>ry(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>ry(e.remoteStore,n))),t._onlineComponents=e}function Ty(t){return"FirebaseError"===t.name?t.code===Cd.FAILED_PRECONDITION||t.code===Cd.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function Sy(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){bd("FirestoreClient","Using user provided OfflineComponentProvider");try{await _y(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Ty(n))throw n;_d("Error using user provided cache. Falling back to memory cache: "+n),await _y(t,new wy)}}else bd("FirestoreClient","Using default OfflineComponentProvider"),await _y(t,new wy);return t._offlineComponents}async function Ay(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(bd("FirestoreClient","Using user provided OnlineComponentProvider"),await Iy(t,t._uninitializedComponentsProvider._online)):(bd("FirestoreClient","Using default OnlineComponentProvider"),await Iy(t,new by))),t._onlineComponents}function Cy(t){return Ay(t).then((t=>t.syncEngine))}
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
const Ny=new Map;
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
 */function Oy(t,e,n){if(!n)throw new Nd(Cd.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ky(t){if(!Wd.isDocumentKey(t))throw new Nd(Cd.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ry(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":Td()}function Dy(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Nd(Cd.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ry(t);throw new Nd(Cd.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
class Ly{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Nd(Cd.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Nd(Cd.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,r){if(!0===e&&!0===r)throw new Nd(Cd.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
 */class Py{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ly({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Nd(Cd.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Nd(Cd.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ly(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Rd;switch(t.type){case"firstParty":return new xd(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Nd(Cd.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ny.get(t);e&&(bd("ComponentProvider","Removing Datastore"),Ny.delete(t),e.terminate())}(this),Promise.resolve()}}function xy(t,e,n,r={}){var i;const s=(t=Dy(t,Py))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==e&&_d("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=md.MOCK_USER;else{e=nr(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new Nd(Cd.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new md(s)}t._authCredentials=new Dd(new kd(e,n))}}
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
 */class My{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fy(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new My(this.firestore,t,this._key)}}class Uy{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Uy(this.firestore,t,this._query)}}class Fy extends Uy{constructor(t,e,n){super(t,e,_p(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new My(this.firestore,null,new Wd(t))}withConverter(t){return new Fy(this.firestore,t,this._path)}}function By(t,e,...n){if(t=_r(t),1===arguments.length&&(e=Bd.A()),Oy("doc","path",e),t instanceof Py){const r=zd.fromString(e,...n);return ky(r),new My(t,null,new Wd(r))}{if(!(t instanceof My||t instanceof Fy))throw new Nd(Cd.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(zd.fromString(e,...n));return ky(r),new My(t.firestore,t instanceof Fy?t.converter:null,new Wd(r))}}
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
class Vy{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Um(this,"async_queue_retry"),this.qc=()=>{const t=xm();t&&bd("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Co.vo()};const t=xm();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Uc(),this.Kc(t)}enterRestrictedMode(t){if(!this.Oc){this.Oc=!0,this.Bc=t||!1;const e=xm();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.qc)}}enqueue(t){if(this.Uc(),this.Oc)return new Promise((()=>{}));const e=new Od;return this.Kc((()=>this.Oc&&this.Bc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.kc.push(t),this.Gc())))}async Gc(){if(0!==this.kc.length){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(t){if(!sf(t))throw t;bd("AsyncQueue","Operation failed with retryable error: "+t)}this.kc.length>0&&this.Co.Ao((()=>this.Gc()))}}Kc(t){const e=this.Nc.then((()=>(this.Fc=!0,t().catch((t=>{this.Mc=t,this.Fc=!1;throw Ed("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.Fc=!1,t))))));return this.Nc=e,e}enqueueAfterDelay(t,e,n){this.Uc(),this.Lc.indexOf(t)>-1&&(e=0);const r=oy.createAndSchedule(this,t,e,n,(t=>this.Qc(t)));return this.$c.push(r),r}Uc(){this.Mc&&Td()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Nc,await t}while(t!==this.Nc)}jc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Wc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Hc(t){this.Lc.push(t)}Qc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}class jy extends Py{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new Vy,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||qy(this),this._firestoreClient.terminate()}}function $y(t){return t._firestoreClient||qy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function qy(t){var e,n,r;const i=t._freezeSettings(),s=(o=t._databaseId,a=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",c=t._persistenceKey,new kf(o,a,c,(u=i).host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams));var o,a,c,u;t._firestoreClient=new Ey(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}
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
class Hy{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Hy(If.fromBase64String(t))}catch(t){throw new Nd(Cd.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Hy(If.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class zy{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Nd(Cd.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Kd(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class Gy{constructor(t){this._methodName=t}}
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
 */class Ky{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Nd(Cd.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Nd(Cd.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Vd(this._lat,t._lat)||Vd(this._long,t._long)}}
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
 */const Wy=/^__.*__$/;class Jy{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Eg(t,this.data,this.fieldMask,e,this.fieldTransforms):new bg(t,this.data,e,this.fieldTransforms)}}class Qy{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Eg(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Xy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Td()}}class Yy{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(t){return new Yy(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Zc({path:n,ta:!1});return r.ea(t),r}na(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Zc({path:n,ta:!1});return r.Jc(),r}sa(t){return this.Zc({path:void 0,ta:!0})}ia(t){return pv(t,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Jc(){if(this.path)for(let t=0;t<this.path.length;t++)this.ea(this.path.get(t))}ea(t){if(0===t.length)throw this.ia("Document fields must not be empty");if(Xy(this.Yc)&&Wy.test(t))throw this.ia('Document fields cannot begin and end with "__"')}}class Zy{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Mm(t)}ua(t,e,n,r=!1){return new Yy({Yc:t,methodName:e,oa:n,path:Kd.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function tv(t){const e=t._freezeSettings(),n=Mm(t._databaseId);return new Zy(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ev(t,e,n,r,i,s={}){const o=t.ua(s.merge||s.mergeFields?2:0,e,n,i);lv("Data must be an object, but it was:",o,r);const a=cv(r,o);let c,u;if(s.merge)c=new Ef(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=hv(e,r,n);if(!o.contains(i))throw new Nd(Cd.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);gv(t,i)||t.push(i)}c=new Ef(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Jy(new zf(a),c,u)}class nv extends Gy{_toFieldTransform(t){if(2!==t.Yc)throw 1===t.Yc?t.ia(`${this._methodName}() can only appear at the top level of your update data`):t.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof nv}}function rv(t,e,n){return new Yy({Yc:3,oa:e.settings.oa,methodName:t._methodName,ta:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class iv extends Gy{constructor(t,e){super(t),this.ca=e}_toFieldTransform(t){const e=rv(this,t,!0),n=this.ca.map((t=>av(t,e))),r=new rg(n);return new lg(t.path,r)}isEqual(t){return this===t}}function sv(t,e,n,r){const i=t.ua(1,e,n);lv("Data must be an object, but it was:",i,r);const s=[],o=zf.empty();pf(r,((t,r)=>{const a=fv(e,t,n);r=_r(r);const c=i.na(a);if(r instanceof nv)s.push(a);else{const t=av(r,c);null!=t&&(s.push(a),o.set(a,t))}}));const a=new Ef(s);return new Qy(o,a,i.fieldTransforms)}function ov(t,e,n,r,i,s){const o=t.ua(1,e,n),a=[hv(e,r,n)],c=[i];if(s.length%2!=0)throw new Nd(Cd.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<s.length;t+=2)a.push(hv(e,s[t])),c.push(s[t+1]);const u=[],l=zf.empty();for(let t=a.length-1;t>=0;--t)if(!gv(u,a[t])){const e=a[t];let n=c[t];n=_r(n);const r=o.na(e);if(n instanceof nv)u.push(e);else{const t=av(n,r);null!=t&&(u.push(e),l.set(e,t))}}const h=new Ef(u);return new Qy(l,h,o.fieldTransforms)}function av(t,e){if(uv(t=_r(t)))return lv("Unsupported field value:",e,t),cv(t,e);if(t instanceof Gy)return function(t,e){if(!Xy(e.Yc))throw e.ia(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ia(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&4!==e.Yc)throw e.ia("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=av(i,e.sa(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=_r(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Yp(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=$d.fromDate(t);return{timestampValue:xg(e.serializer,n)}}if(t instanceof $d){const n=new $d(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:xg(e.serializer,n)}}if(t instanceof Ky)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Hy)return{bytesValue:Mg(e.serializer,t._byteString)};if(t instanceof My){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Bg(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ia(`Unsupported field value: ${Ry(t)}`)}(t,e)}function cv(t,e){const n={};return gf(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):pf(t,((t,r)=>{const i=av(r,e.Xc(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function uv(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof $d||t instanceof Ky||t instanceof Hy||t instanceof My||t instanceof Gy)}function lv(t,e,n){if(!uv(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=Ry(n);throw"an object"===r?e.ia(t+" a custom object"):e.ia(t+" "+r)}var r}function hv(t,e,n){if((e=_r(e))instanceof zy)return e._internalPath;if("string"==typeof e)return fv(t,e);throw pv("Field path arguments must be of type string or ",t,!1,void 0,n)}const dv=new RegExp("[~\\*/\\[\\]]");function fv(t,e,n){if(e.search(dv)>=0)throw pv(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zy(...e.split("."))._internalPath}catch(r){throw pv(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function pv(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Nd(Cd.INVALID_ARGUMENT,a+t+c)}function gv(t,e){return t.some((t=>t.isEqual(e)))}
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
function mv(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function yv(t,e,n){t=Dy(t,My);const r=Dy(t.firestore,jy),i=mv(t.converter,e,n);return wv(r,[ev(tv(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,dg.none())])}function vv(t,e,n,...r){t=Dy(t,My);const i=Dy(t.firestore,jy),s=tv(i);let o;return o="string"==typeof(e=_r(e))||e instanceof zy?ov(s,"updateDoc",t._key,e,n,r):sv(s,"updateDoc",t._key,e),wv(i,[o.toMutation(t._key,dg.exists(!0))])}function wv(t,e){return function(t,e){const n=new Od;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const r=vy(t);try{const t=await function(t,e){const n=Ad(t),r=$d.now(),i=e.reduce(((t,e)=>t.add(e.key)),Kp());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Fp(),c=Kp();return n.Ki.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{s=i;const o=[];for(const t of e){const e=vg(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new Eg(t.key,e,Gf(e.value.mapValue),dg.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:jp(s)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.ac[t.currentUser.toKey()];r||(r=new mf(Vd)),r=r.insert(e,n),t.ac[t.currentUser.toKey()]=r}(r,t.batchId,n),await my(r,t.changes),await Wm(r.remoteStore)}catch(t){const e=ay(t,"Failed to persist write");n.reject(e)}}(await Cy(t),e,n))),n.promise}($y(t),e)}function bv(...t){return new iv("arrayUnion",t)}!function(t,e=!0){yd="9.19.1",ri(new Ir("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new jy(new Ld(t.getProvider("auth-internal")),new Ud(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Nd(Cd.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rf(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),ui("@firebase/firestore","3.10.0",t),ui("@firebase/firestore","3.10.0","esm2017")}();const Ev=document.querySelector(".auth-menu__signup-button"),_v=document.querySelector(".auth-menu__login-button"),Iv=document.querySelector(".menu"),Tv=document.querySelector(".auth-menu"),Sv=document.querySelector(".auth-menu-logout"),Av=document.querySelector(".auth-menu-logout__user-name"),Cv=document.querySelector(".auth-menu-open-btn"),Nv=document.querySelector(".singup-backdrop"),Ov=document.querySelector(".login-backdrop");function kv(){Iv.classList.toggle("is-hidden")}function Rv(t){t.currentTarget===t.target&&(Nv.classList.add("is-hidden"),Nv.removeEventListener("click",Rv))}function Dv(t){"Escape"===t.code&&(Nv.classList.add("is-hidden"),window.removeEventListener("keydown",Dv))}function Lv(t){t.currentTarget===t.target&&(Ov.classList.add("is-hidden"),Ov.removeEventListener("click",Lv))}function Pv(t){"Escape"===t.code&&(Ov.classList.add("is-hidden"),window.removeEventListener("keydown",Pv))}Cv.addEventListener("click",(t=>{t.preventDefault(),Iv.classList.contains("is-hidden")?(kv(),hw?(Sv.classList.toggle("menu-is-hidden"),Av.innerHTML=lw):Tv.classList.toggle("menu-is-hidden")):(hw?(Sv.classList.toggle("menu-is-hidden"),Av.innerHTML=lw):Tv.classList.toggle("menu-is-hidden"),setTimeout(kv,300))})),Ev.addEventListener("click",(function(){Tv.classList.toggle("menu-is-hidden"),setTimeout(kv,300),Nv.classList.remove("is-hidden"),Nv.addEventListener("click",Rv),window.addEventListener("keydown",Dv)})),_v.addEventListener("click",(function(){Tv.classList.toggle("menu-is-hidden"),setTimeout(kv,300),Ov.classList.remove("is-hidden"),Ov.addEventListener("click",Lv),window.addEventListener("keydown",Pv)}));const xv=document.querySelector(".singup-form"),Mv=xv.querySelector(".email-field"),Uv=document.querySelector(".email"),Fv=xv.querySelector(".user-name-field"),Bv=document.querySelector(".user-name"),Vv=xv.querySelector(".create-password"),jv=document.querySelector(".password"),$v=xv.querySelector(".confirm-password"),qv=document.querySelector(".cPassword"),Hv=document.querySelector(".singup-info-error");function zv(){if(!Uv.value.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/))return Mv.classList.add("invalid");Mv.classList.remove("invalid")}function Gv(){let t=Bv.value.length;if(!(4<=t&&t<=20))return Fv.classList.add("invalid");Fv.classList.remove("invalid")}function Kv(){if(!jv.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/))return Vv.classList.add("invalid");Vv.classList.remove("invalid")}function Wv(){if(jv.value!==qv.value||""===qv.value)return $v.classList.add("invalid");$v.classList.remove("invalid")}document.querySelectorAll(".show-hide").forEach((t=>{t.addEventListener("click",(()=>{const e=t.parentElement.querySelector("input");if("password"===e.type)return t.classList.replace("bx-hide","bx-show"),e.type="text";t.classList.replace("bx-show","bx-hide"),e.type="password"}))})),xv.addEventListener("submit",(t=>{t.preventDefault(),zv(),Kv(),Wv(),Gv(),Uv.addEventListener("keyup",zv),jv.addEventListener("keyup",Kv),qv.addEventListener("keyup",Wv),Bv.addEventListener("keyup",Gv),Mv.classList.contains("invalid")||Vv.classList.contains("invalid")||$v.classList.contains("invalid")||Fv.classList.contains("invalid")||Nv.classList.add("is-hidden")}));const Jv=document.querySelector(".login-form"),Qv=Jv.querySelector(".email"),Xv=Qv.querySelector("input"),Yv=Jv.querySelector(".password"),Zv=Yv.querySelector("input"),tw=document.querySelector(".login-info-error");let ew;function nw(){try{let t=localStorage.getItem("guest");ew=JSON.parse(t)}catch(t){console.log(t)}}function rw(t){try{ew.watched.includes(t)||(ew.watched.push(t),localStorage.setItem("guest",JSON.stringify(ew)),nw())}catch(t){console.log(t)}}function iw(t){try{ew.queue.includes(t)||(ew.queue.push(t),localStorage.setItem("guest",JSON.stringify(ew)),nw())}catch(t){console.log(t)}}Jv.addEventListener("submit",(t=>{function e(){if(Xv.value.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/))Qv.classList.remove("error"),Qv.classList.add("valid");else{Qv.classList.add("error"),Qv.classList.remove("valid");let t=Qv.querySelector(".error-txt");""!=Xv.value?t.innerText="Enter a valid email address":t.innerText="Email can't be blank"}}function n(){""==Zv.value?(Yv.classList.add("error"),Yv.classList.remove("valid")):(Yv.classList.remove("error"),Yv.classList.add("valid"))}t.preventDefault(),""==Xv.value?Qv.classList.add("shake","error"):e(),""==Zv.value?Yv.classList.add("shake","error"):n(),setTimeout((()=>{Qv.classList.remove("shake"),Yv.classList.remove("shake")}),500),Xv.addEventListener("keyup",e),Zv.addEventListener("keyup",n),Qv.classList.contains("error")||Yv.classList.contains("error")||Ov.classList.add("is-hidden")}));const sw=document.querySelector(".auth-menu-logout__logout-button"),ow=ai({apiKey:"AIzaSyDWPLJhw8gzRksSLpE290fp-GQpT7FpHaY",authDomain:"moviedreamteam-filmoteka.firebaseapp.com",projectId:"moviedreamteam-filmoteka",storageBucket:"moviedreamteam-filmoteka.appspot.com",messagingSenderId:"18944533513",appId:"1:18944533513:web:be1f6bf81a57a82ccc84d8",measurementId:"G-LPXTQ4NYCN"}),aw=(function(t=ci()){const e=ii(t=_r(t),"analytics");e.isInitialized()?e.getImmediate():function(t,e={}){const n=ii(t,"analytics");if(n.isInitialized()){const t=n.getImmediate();if(fr(e,n.getOptions()))return t;throw ts.create("already-initialized")}n.initialize({options:e})}(t)}(ow),function(t=ci()){const e=ii(t,"auth");if(e.isInitialized())return e.getImmediate();const n=function(t,e){const n=ii(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if(fr(n.getOptions(),null!=e?e:{}))return t;Ls(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:uc,persistence:[Sa,ha,fa]}),r=tr("authTokenSyncURL");if(r){const t=(i=r,async t=>{const e=t&&await t.getIdTokenResult(),n=e&&((new Date).getTime()-Date.parse(e.issuedAtTime))/1e3;if(n&&n>hc)return;const r=null==e?void 0:e.token;dc!==r&&(dc=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(t,e,n){_r(t).beforeAuthStateChanged(e,n)}(n,t,(()=>t(n.currentUser))),function(t,e,n,r){_r(t).onIdTokenChanged(e,n,r)}(n,(e=>t(e)))}var i;const s=Yn("auth");return s&&Po(n,`http://${s}`),n}(ow)),cw=function(t,e){const n="string"==typeof t?t:e||"(default)",r=ii("object"==typeof t?t:ci(),"firestore").getImmediate({identifier:n});if(!r._initialized){const t=Zn("firestore");t&&xy(r,...t)}return r}(ow);let uw,lw,hw;const dw=async()=>{const t=Xv.value,e=Zv.value;try{await(n=aw,r=t,i=e,oa(_r(n),zo.credential(r,i)))}catch(t){tw.style.display="block",t.code==ks.INVALID_PASSWORD?tw.innerHTML='<i class="error error-icon fas fa-exclamation-circle"></i>Wrong pasword. Try again':tw.innerHTML=`<i class="error error-icon fas fa-exclamation-circle"></i>${t.message}`,console.log(t)}var n,r,i;
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
 */};Jv.addEventListener("submit",(t=>{t.preventDefault(),Qv.classList.contains("error")||Yv.classList.contains("error")||dw()}));const fw=async()=>{const t=Uv.value,e=jv.value,n=Bv.value;try{const r=await aa(aw,t,e);await ca(aw.currentUser,{displayName:n});const i=By(cw,"users",`${r.user.uid}`);await yv(i,{watched:[],queue:[]})}catch(t){Hv.style.display="block",Hv.innerHTML=`<i class="bx bx-error-circle singup-error-icon"></i>${t.message}`,console.log(t)}};xv.addEventListener("submit",(t=>{t.preventDefault(),fw(),Mv.classList.contains("invalid")||Vv.classList.contains("invalid")||$v.classList.contains("invalid")||Fv.classList.contains("invalid")||fw()}));(async()=>{var t,e,n;t=t=>{t?(uw=t.uid,lw=t.displayName,hw=!0,xv.reset(),Jv.reset()):(hw=!1,nw(),null===ew&&localStorage.setItem("guest",JSON.stringify({watched:[],queue:[]})))},_r(aw).onAuthStateChanged(t,e,n)})();const pw=async()=>{var t;await(t=aw,_r(t).signOut())};sw.addEventListener("click",(()=>{pw(),Sv.classList.toggle("menu-is-hidden"),setTimeout(kv,300)}));function gw(t){hw?(async t=>{await vv(By(cw,"users",`${uw}`),{watched:bv(`${t}`)})})(t):rw(t)}function mw(t){hw?(async t=>{await vv(By(cw,"users",`${uw}`),{queue:bv(`${t}`)})})(t):iw(t)}function yw(){const t=Cn.querySelector("#watched"),e=Cn.querySelector("#queue");t.addEventListener("click",(t=>{gw(t.currentTarget.dataset.id)})),e.addEventListener("click",(t=>{mw(t.currentTarget.dataset.id)}))}const vw=document.querySelector(".films-cards-set");ln().then((t=>{vw.insertAdjacentHTML("beforeend",bn(t.results));document.querySelectorAll(".film-card").forEach((t=>{t.addEventListener("click",(t=>{An(t.currentTarget.dataset.id).then((t=>t.data)).then((t=>{Cn.innerHTML=Sn(t),On(),yw()})).catch((t=>{throw new Error(t)}))}))}));Tn(t.total_results,t.total_pages).on("afterMove",(({page:t})=>{vw.innerHTML="",ln(t).then((t=>{vw.insertAdjacentHTML("beforeend",bn(t.results));document.querySelectorAll(".film-card").forEach((t=>{t.addEventListener("click",(t=>{An(t.currentTarget.dataset.id).then((t=>t.data)).then((t=>{Cn.innerHTML=Sn(t),On(),yw()})).catch((t=>{throw new Error(t)}))}))}))}))}))})),window.onload=function(){window.location.hash||(window.location=window.location+"#loaded",window.location.reload())};const ww=document.querySelector("#wrongSearch");async function bw(t,e){const n=`https://api.themoviedb.org/3//search/movie?api_key=b118f38ec77100db6763b4cc83604589&query=${t}&language=en-US&page=${e}`,r=await fetch(n);return(await r.json()).results.length<1?(ww.innerHTML="Search result not successful. Enter the correct movie name and search again",{}):await Ke.get(n).then((t=>t.data)).catch((t=>console.log(t)))}const Ew=document.querySelector("[data-search]"),_w=document.querySelector(".films-cards-set"),Iw=document.querySelector("[data-input]"),Tw=document.querySelector("#pagination");let Sw;Ew.addEventListener("click",(function(t){t.preventDefault(),Sw=Iw.value.trim(),bw(Sw,1).then((t=>{if(!t.results<1){_w.insertAdjacentHTML("beforeend",bn(t.results));document.querySelectorAll(".film-card").forEach((t=>{t.addEventListener("click",(t=>{An(t.currentTarget.dataset.id).then((t=>t.data)).then((t=>{Cn.innerHTML=Sn(t),On(),yw()})).catch((t=>{throw new Error(t)}))}))}));Tn(t.total_results,t.total_pages).on("afterMove",(({page:t})=>{_w.innerHTML="",bw(Sw,t).then((t=>{_w.insertAdjacentHTML("beforeend",bn(t.results));document.querySelectorAll(".film-card").forEach((t=>{t.addEventListener("click",(t=>{An(t.currentTarget.dataset.id).then((t=>t.data)).then((t=>{Cn.innerHTML=Sn(t),On(),yw()})).catch((t=>{throw new Error(t)}))}))}))}))}))}t.total_pages<=1&&Tw.classList.add("is-hidden")}))}));const Aw=document.querySelector("body"),Cw=document.querySelector(".fa-regular"),Nw=document.querySelector("#toggle__checkbox"),Ow=document.querySelector(".footer");Nw.addEventListener("click",(()=>{Aw.classList.toggle("dark__theme"),Cw.classList.toggle("fa-sun"),Cw.classList.toggle("fa-moon"),Ow.classList.toggle("dark__theme")}));const kw=document.querySelector(".backdrop--flex");document.querySelector(".footer__font").addEventListener("click",(t=>{t.preventDefault(),kw.classList.remove("is-hidden")}));
//# sourceMappingURL=index.9d5faf10.js.map
