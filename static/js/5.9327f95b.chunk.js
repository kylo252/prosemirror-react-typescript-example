(this["webpackJsonpexample-app"]=this["webpackJsonpexample-app"]||[]).push([[5],{430:function(e,n,r){"use strict";function t(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}r.d(n,"a",(function(){return a}));var a=function(){function e(){var n,r,t;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),t=void 0,(r="task")in(n=this)?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t}var n,r,a;return n=e,(r=[{key:"request",value:function(){this.cancel();var e=window.requestIdleCallback||window.requestAnimationFrame;return new Promise((function(n){return e(n)}))}},{key:"cancel",value:function(){var e=window.cancelIdleCallack||window.cancelAnimationFrame;this.task&&e(this.task)}}])&&t(n.prototype,r),a&&t(n,a),e}()},437:function(e,n,r){"use strict";r.r(n),r.d(n,"JsonDiffWorker",(function(){return l}));var t=r(95),a=r.n(t),i=r(146),u=r.n(i),o=r(430);function c(e,n,r,t,a,i,u){try{var o=e[i](u),c=o.value}catch(s){return void r(s)}o.done?n(c):Promise.resolve(c).then(t,a)}function s(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function f(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var l=function(){function e(n){var r=this;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,"queue",new Map),f(this,"scheduler",new o.a),this.worker=n,this.worker.addEventListener("message",(function(e){var n=r.queue.get(e.data.id);n&&(r.queue.delete(e.data.id),n.resolve(e.data.returns))}))}var n,r,t;return n=e,(r=[{key:"diff",value:function(){var e,n=(e=a.a.mark((function e(n){var r,t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.scheduler.request();case 2:return r=u()(),t=v(),this.queue.set(r,t),this.worker.postMessage({method:"diff",id:r,args:[n]}),e.abrupt("return",t);case 7:case"end":return e.stop()}}),e,this)})),function(){var n=this,r=arguments;return new Promise((function(t,a){var i=e.apply(n,r);function u(e){c(i,t,a,u,o,"next",e)}function o(e){c(i,t,a,u,o,"throw",e)}u(void 0)}))});return function(e){return n.apply(this,arguments)}}()}])&&s(n.prototype,r),t&&s(n,t),e}();function v(){var e,n=new Promise((function(n){e=n}));return n.resolve=function(){return e.apply(void 0,arguments)},n}}}]);
//# sourceMappingURL=5.9327f95b.chunk.js.map