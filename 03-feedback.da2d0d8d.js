var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),a=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return c.Date.now()};function m(e,t,n){var o,r,i,u,f,c,a=0,m=!1,p=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,i=r;return o=r=void 0,a=t,u=e.apply(i,n)}function h(e){return a=e,f=setTimeout(S,t),m?g(e):u}function j(e){var n=e-c;return void 0===c||n>=t||n<0||p&&e-a>=i}function S(){var e=d();if(j(e))return T(e);f=setTimeout(S,function(e){var n=t-(e-c);return p?s(n,i-(e-a)):n}(e))}function T(e){return f=void 0,y&&o?g(e):(o=r=void 0,u)}function O(){var e=d(),n=j(e);if(o=arguments,r=this,c=e,n){if(void 0===f)return h(c);if(p)return f=setTimeout(S,t),g(c)}return void 0===f&&(f=setTimeout(S,t)),u}return t=b(t)||0,v(n)&&(m=!!n.leading,i=(p="maxWait"in n)?l(b(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),O.cancel=function(){void 0!==f&&clearTimeout(f),a=0,o=c=r=f=void 0},O.flush=function(){return void 0===f?u:T(d())},O}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==a.call(e)}(e))return NaN;if(v(e)){var u="function"==typeof e.valueOf?e.valueOf():e;e=v(u)?u+"":u}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var f=o.test(e);return f||r.test(e)?i(e.slice(2),f?2:8):n.test(e)?NaN:+e}const p=document.querySelector(".feedback-form");document.querySelector("input"),document.querySelector("textarea"),document.querySelector("button");function y(e,t){try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.log(e)}}p.addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget,o=t.value,r={email:t.value,message:n.value};if(""===o){return alert(" полe повиннo бути заповненo.")}console.log(r),e.currentTarget.reset(),function(e,t=!1){const n=g("feedback-form-state");void 0===n?y("feedback-form-state",[h(e,t)]):(n.push(h(e,t)),y("feedback-form-state",n))}(r)}));function g(e,t){try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.log(e)}}function h(e,t){return{data:e,isDone:t}}console.log(g("feedback-form-state"));
//# sourceMappingURL=03-feedback.da2d0d8d.js.map
