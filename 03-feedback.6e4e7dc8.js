!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,y=function(){return s.Date.now()};function p(e,t,n){var o,i,u,a,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function h(e){return l=e,f=setTimeout(O,t),d?p(e):a}function j(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function O(){var e=y();if(j(e))return w(e);f=setTimeout(O,function(e){var n=t-(e-c);return s?g(n,u-(e-l)):n}(e))}function w(e){return f=void 0,v&&o?p(e):(o=i=void 0,a)}function T(){var e=y(),n=j(e);if(o=arguments,i=this,c=e,n){if(void 0===f)return h(c);if(s)return f=setTimeout(O,t),p(c)}return void 0===f&&(f=setTimeout(O,t)),a}return t=S(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(S(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=i=f=void 0},T.flush=function(){return void 0===f?a:w(y())},T}function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=a.test(t);return r||f.test(t)?c(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};var h=document.querySelector(".feedback-form"),j=document.querySelector("input"),O=document.querySelector("textarea"),w=(document.querySelector("button"),"feedback-form-state"),T={email:"",message:""};h.addEventListener("submit",(function(e){e.preventDefault(),console.log(T),e.target.reset(),localStorage.removeItem(w)})),h.addEventListener("input",e(t)((function(e){e.preventDefault();try{T.email,T.message;T[e.target.name]=e.target.value,localStorage.setItem(w,JSON.stringify(T))}catch(e){console.log(e)}}),500)),function(){try{var e=localStorage.getItem(w),t=JSON.parse(e);t&&(j.value=t.email,O.value=t.message)}catch(e){console.log(e)}}()}();
//# sourceMappingURL=03-feedback.6e4e7dc8.js.map
