(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3niX":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.flush=function(){var e=l.cssRules();return l.flush(),e},t.default=void 0;var n,o=r("q1tI");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=new(((n=r("SevZ"))&&n.__esModule?n:{default:n}).default),h=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=a(this,u(t).call(this,e))).prevProps={},r}var r,n,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,o.Component),r=t,i=[{key:"dynamic",value:function(e){return e.map(function(e){var t=e[0],r=e[1];return l.computeId(t,r)}).join(" ")}}],(n=[{key:"shouldComponentUpdate",value:function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)}},{key:"componentWillUnmount",value:function(){l.remove(this.props)}},{key:"render",value:function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&l.remove(this.prevProps),l.add(this.props),this.prevProps=this.props),null}}])&&s(r.prototype,n),i&&s(r,i),t}();t.default=h},"8oxB":function(e,t){var r,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"===typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var u,c=[],l=!1,h=-1;function f(){l&&u&&(l=!1,u.length?c=u.concat(c):h=-1,c.length&&p())}function p(){if(!l){var e=a(f);l=!0;for(var t=c.length;t;){for(u=c,c=[];++h<t;)u&&u[h].run();h=-1,t=c.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new d(e,t)),1!==c.length||l||a(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9kyW":function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},"C/Fq":function(e,t,r){function n(e){return console.warn(e),null}r("LpSC"),e.exports={getInfo:function(e){if(null!=e)return function(e){return console.log("hello"),fetch("http://34.73.193.139/api/info?q=".concat(e)).then(function(e){return e.json()})}(e).catch(n)}}},LpSC:function(e,t,r){r("bZMm"),e.exports=self.fetch.bind(self)},MX0m:function(e,t,r){e.exports=r("3niX")},RNiq:function(e,t,r){"use strict";r.r(t);var n=r("ln6h"),o=r.n(n),i=r("eVuF"),s=r.n(i);function a(e,t,r,n,o,i,a){try{var u=e[i](a),c=u.value}catch(l){return void r(l)}u.done?t(c):s.a.resolve(c).then(n,o)}var u=r("hfKm"),c=r.n(u);function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),c()(e,n.key,n)}}var h=r("XVgq"),f=r.n(h),p=r("Z7t5"),d=r.n(p);function y(e){return(y="function"===typeof d.a&&"symbol"===typeof f.a?function(e){return typeof e}:function(e){return e&&"function"===typeof d.a&&e.constructor===d.a&&e!==d.a.prototype?"symbol":typeof e})(e)}function m(e){return(m="function"===typeof d.a&&"symbol"===y(f.a)?function(e){return y(e)}:function(e){return e&&"function"===typeof d.a&&e.constructor===d.a&&e!==d.a.prototype?"symbol":y(e)})(e)}function v(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var b=r("Bhuq"),_=r.n(b),g=r("TRZx"),w=r.n(g);function S(e){return(S=w.a?_.a:function(e){return e.__proto__||_()(e)})(e)}var x=r("SqZg"),j=r.n(x);function k(e,t){return(k=w.a||function(e,t){return e.__proto__=t,e})(e,t)}var T=r("MX0m"),A=r.n(T),E=r("q1tI"),R=r.n(E),C=r("C/Fq"),B=(r("YFqc"),R.a.createElement);function O(){return B("body",null,B("div",null))}B("style",{jsx:!0},'\n      \n\n      .description {\n        font-family: "Arial";\n        font-size: "10px";\n      }\n\n      ul {\n        padding: 0;\n      }\n\n      li {\n        list-style: center;\n        margin: 5px 0;\n      }\n      .App-logo {\n        height: 80px;\n      }\n\n      a {\n        text-decoration: none;\n        color: blue;\n      }\n\n      a:hover {\n        opacity: 0.6;\n      }\n      \n    \n\t\n.header-site{\n      background-color: #000000;\n      background: url("../static/Background-Index.jpg");\n      background-position: 100% 100%;\n      background-repeat: no-repeat;\n   }\n    ');var F=R.a.createElement,P={textAlign:"Center",padding:20,border:"4px solid #AAA",background:"linear-gradient(to bottom right, blue, black, red 80%)",color:"white",fontSize:"30px"};function N(e){return F("div",{style:P},F(O,null),e.children)}var I=R.a.createElement,U={textAlign:"Center",margin:20,padding:20,background:"white",color:"black",fontSize:"25px"};function z(e){return I("div",{style:U},I(O,null),e.children)}var q=R.a.createElement,L=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=v(this,S(t).call(this,e))).state={search:"",food:""},r}var r,n,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=j()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,R.a.Component),r=t,(n=[{key:"handleUpdate",value:function(e){}},{key:"handleSearch",value:function(){var e,t=(e=o.a.mark(function e(t){var r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({search:t.target.value}),e.next=3,Object(C.getInfo)(t.target.value);case 3:r=e.sent,console.log(r),this.setState({food:r}),this.setState({food:r});case 7:case"end":return e.stop()}},e,this)}),function(){var t=this,r=arguments;return new s.a(function(n,o){var i=e.apply(t,r);function s(e){a(i,n,o,s,u,"next",e)}function u(e){a(i,n,o,s,u,"throw",e)}s(void 0)})});return function(e){return t.apply(this,arguments)}}()},{key:"handleFunction",value:function(){return null==this.state.food?(this.state.food="this is some food",q("div",{className:"jsx-2970547567"},q("h5",{className:"jsx-2970547567"},this.state.search," not found"),q(A.a,{id:"2970547567"},["h5.jsx-2970547567{text-align:center;}"]))):null}},{key:"render",value:function(){return q("div",{className:"jsx-2131145016"},q(N,null,q("img",{src:"/static/xmas.gif",width:"100px",height:"100px",className:"jsx-2131145016"}),q("h2",{className:"jsx-2131145016"},"Country Search")),q(z,null,q("p",{className:"jsx-2131145016"},q("input",{type:"text",placeholder:"Search",size:"40",height:"5000",value:this.state.search,onChange:this.handleSearch.bind(this),className:"jsx-2131145016"})," "),this.state.food&&""!=this.state.search?q("div",{className:"jsx-2131145016"},q("table",{cellSpacing:"5",align:"center",valign:"bottom",className:"jsx-2131145016"},q("tbody",{className:"jsx-2131145016"},q("tr",{className:"jsx-2131145016"},q("th",{className:"jsx-2131145016"}," Name "),q("th",{className:"jsx-2131145016"}," Name "),q("th",{className:"jsx-2131145016"},"code"),q("th",{className:"jsx-2131145016"},"region"),q("th",{className:"jsx-2131145016"},"language")),this.state.food.map(function(e,t){return q("tr",{key:t,className:"jsx-2131145016"},q("td",{className:"jsx-2131145016"},e.name),q("div",{className:"jsx-2131145016"},q("td",{className:"jsx-2131145016"},e.poop)),q("td",{className:"jsx-2131145016"},e.countrycode),q("td",{className:"jsx-2131145016"},e.region),q("td",{className:"jsx-2131145016"},e.language))})))):null,q("img",{src:"/static/batman2.gif",width:"500px",height:"300px",className:"jsx-2131145016 meh"}),q("br",{className:"jsx-2131145016"})),q(A.a,{id:"2131145016"},["h1.jsx-2131145016,<p.jsx-2131145016><input.jsx-2131145016 type='text'.jsx-2131145016 value=.jsx-2131145016{-webkit-this.state.search;-ms-flex-this.state.search;this.state.search;}",'/.jsx-2131145016></p.jsx-2131145016><div.jsx-2131145016 className="button-style".jsx-2131145016>Submit</div.jsx-2131145016>h2.jsx-2131145016,a.jsx-2131145016,p.jsx-2131145016{font-family:"Arial";}','.description.jsx-2131145016{font-family:"Arial";font-size:"20px";}','.button-style.jsx-2131145016{margin:auto auto;cursor:pointer;background-color:#000000;color:#ffffff;width:200px;font-family:"Arial";text-align:center;}']))}}])&&l(r.prototype,n),i&&l(r,i),t}();t.default=L},SevZ:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r("9kyW")),o=i(r("bVZc"));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.styleSheet,n=void 0===r?null:r,i=t.optimizeForSpeed,s=void 0!==i&&i,a=t.isBrowser,u=void 0===a?"undefined"!==typeof window:a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sheet=n||new o.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),n&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t,r,i;return t=e,(r=[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var r=this.getIdAndRules(e),n=r.styleId,o=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var i=o.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[n]=i,this._instancesCounts[n]=1}}},{key:"remove",value:function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: ".concat(t,"."))}(r in this._instancesCounts,"styleId: `".concat(r,"` not found")),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[r]),delete this._instancesCounts[r]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return r[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))}},{key:"createComputeId",value:function(){var e={};return function(t,r){if(!r)return"jsx-".concat(t);var o=String(r),i=t+o;return e[i]||(e[i]="jsx-".concat((0,n.default)("".concat(t,"-").concat(o)))),e[i]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var o=r+n;return t[o]||(t[o]=n.replace(e,r)),t[o]}}},{key:"getIdAndRules",value:function(e){var t=this,r=e.children,n=e.dynamic,o=e.id;if(n){var i=this.computeId(o,n);return{styleId:i,rules:Array.isArray(r)?r.map(function(e){return t.computeSelector(i,e)}):[this.computeSelector(i,r)]}}return{styleId:this.computeId(o),rules:Array.isArray(r)?r:[r]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}])&&s(t.prototype,r),i&&s(t,i),e}();t.default=a},YFqc:function(e,t,r){e.exports=r("cTJO")},bVZc:function(e,t,r){"use strict";(function(e){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=e.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.name,i=void 0===r?"stylesheet":r,a=t.optimizeForSpeed,u=void 0===a?n:a,c=t.isBrowser,l=void 0===c?"undefined"!==typeof window:c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(o(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#".concat(i,"-deleted-rule____{}"),s("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var h=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=h?h.getAttribute("content"):null}var t,i,a;return t=e,(i=[{key:"setOptimizeForSpeed",value:function(e){s("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(s(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(a){return n||console.warn("StyleSheet: illegal rule: \n\n".concat(e,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(i){n||console.warn("StyleSheet: illegal rule: \n\n".concat(t,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),r.insertRule(this._deletedRulePlaceholder,e)}}else{var o=this._tags[e];s(o,"old rule at index `".concat(e,"` not found")),o.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `".concat(e,"` not found")),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,r){return r?t=t.concat(e.getSheetForTag(r).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,r){t&&s(o(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-".concat(e),""),t&&n.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return r?i.insertBefore(n,r):i.appendChild(n),n}},{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,i),a&&r(t,a),e}();function s(e,t){if(!e)throw new Error("StyleSheet: ".concat(t,"."))}t.default=i}).call(this,r("8oxB"))},bZMm:function(e,t,r){"use strict";r.r(t),r.d(t,"Headers",function(){return c}),r.d(t,"Request",function(){return m}),r.d(t,"Response",function(){return _}),r.d(t,"DOMException",function(){return w}),r.d(t,"fetch",function(){return S});var n={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(n.arrayBuffer)var o=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],i=ArrayBuffer.isView||function(e){return e&&o.indexOf(Object.prototype.toString.call(e))>-1};function s(e){if("string"!==typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function a(e){return"string"!==typeof e&&(e=String(e)),e}function u(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return n.iterable&&(t[Symbol.iterator]=function(){return t}),t}function c(e){this.map={},e instanceof c?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function l(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function h(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function f(e){var t=new FileReader,r=h(t);return t.readAsArrayBuffer(e),r}function p(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function d(){return this.bodyUsed=!1,this._initBody=function(e){var t;this._bodyInit=e,e?"string"===typeof e?this._bodyText=e:n.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:n.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:n.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():n.arrayBuffer&&n.blob&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=p(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):n.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||i(e))?this._bodyArrayBuffer=p(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"===typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n.blob&&(this.blob=function(){var e=l(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?l(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(f)}),this.text=function(){var e=l(this);if(e)return e;if(this._bodyBlob)return function(e){var t=new FileReader,r=h(t);return t.readAsText(e),r}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},n.formData&&(this.formData=function(){return this.text().then(v)}),this.json=function(){return this.text().then(JSON.parse)},this}c.prototype.append=function(e,t){e=s(e),t=a(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},c.prototype.delete=function(e){delete this.map[s(e)]},c.prototype.get=function(e){return e=s(e),this.has(e)?this.map[e]:null},c.prototype.has=function(e){return this.map.hasOwnProperty(s(e))},c.prototype.set=function(e,t){this.map[s(e)]=a(t)},c.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},c.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),u(e)},c.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),u(e)},c.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),u(e)},n.iterable&&(c.prototype[Symbol.iterator]=c.prototype.entries);var y=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function m(e,t){var r=(t=t||{}).body;if(e instanceof m){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new c(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new c(t.headers)),this.method=function(e){var t=e.toUpperCase();return y.indexOf(t)>-1?t:e}(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function v(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}}),t}function b(e){var t=new c;return e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}}),t}function _(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new c(t.headers),this.url=t.url||"",this._initBody(e)}m.prototype.clone=function(){return new m(this,{body:this._bodyInit})},d.call(m.prototype),d.call(_.prototype),_.prototype.clone=function(){return new _(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new c(this.headers),url:this.url})},_.error=function(){var e=new _(null,{status:0,statusText:""});return e.type="error",e};var g=[301,302,303,307,308];_.redirect=function(e,t){if(-1===g.indexOf(t))throw new RangeError("Invalid status code");return new _(null,{status:t,headers:{location:e}})};var w=self.DOMException;try{new w}catch(x){(w=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack}).prototype=Object.create(Error.prototype),w.prototype.constructor=w}function S(e,t){return new Promise(function(r,o){var i=new m(e,t);if(i.signal&&i.signal.aborted)return o(new w("Aborted","AbortError"));var s=new XMLHttpRequest;function a(){s.abort()}s.onload=function(){var e={status:s.status,statusText:s.statusText,headers:b(s.getAllResponseHeaders()||"")};e.url="responseURL"in s?s.responseURL:e.headers.get("X-Request-URL");var t="response"in s?s.response:s.responseText;r(new _(t,e))},s.onerror=function(){o(new TypeError("Network request failed"))},s.ontimeout=function(){o(new TypeError("Network request failed"))},s.onabort=function(){o(new w("Aborted","AbortError"))},s.open(i.method,i.url,!0),"include"===i.credentials?s.withCredentials=!0:"omit"===i.credentials&&(s.withCredentials=!1),"responseType"in s&&n.blob&&(s.responseType="blob"),i.headers.forEach(function(e,t){s.setRequestHeader(t,e)}),i.signal&&(i.signal.addEventListener("abort",a),s.onreadystatechange=function(){4===s.readyState&&i.signal.removeEventListener("abort",a)}),s.send("undefined"===typeof i._bodyInit?null:i._bodyInit)})}S.polyfill=!0,self.fetch||(self.fetch=S,self.Headers=c,self.Request=m,self.Response=_)},cTJO:function(e,t,r){"use strict";var n=r("/HRN"),o=r("WaGi"),i=r("ZDA2"),s=r("/+P4"),a=r("N9n2"),u=r("5Uuq"),c=r("KI45");t.__esModule=!0,t.default=void 0;var l,h=c(r("LX0d")),f=r("CxY0"),p=u(r("q1tI")),d=(c(r("17x9")),c(r("nOHt"))),y=(r("KA3u"),r("Bu4q"));function m(e){return e&&"object"===typeof e?(0,y.formatWithValidation)(e):e}var v=new h.default,b=window.IntersectionObserver;function _(){return l||(b?l=new b(function(e){e.forEach(function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(e.target),v.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var g=function(e){function t(e){var r;return n(this,t),(r=i(this,s(t).call(this,e))).p=void 0,r.cleanUpListeners=function(){},r.formatUrls=function(e){var t=null,r=null,n=null;return function(o,i){if(n&&o===t&&i===r)return n;var s=e(o,i);return t=o,r=i,n=s,s}}(function(e,t){return{href:m(e),as:t?m(t):t}}),r.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,o=t.target;if("A"!==n||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=r.formatUrls(r.props.href,r.props.as),s=i.href,a=i.as;if(function(e){var t=(0,f.parse)(e,!1,!0),r=(0,f.parse)((0,y.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(s)){var u=window.location.pathname;s=(0,f.resolve)(u,s),a=a?(0,f.resolve)(u,a):s,e.preventDefault();var c=r.props.scroll;null==c&&(c=a.indexOf("#")<0),d.default[r.props.replace?"replace":"push"](s,a,{shallow:r.props.shallow}).then(function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})}}},r.p=!1!==e.prefetch,r}return a(t,e),o(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var r=_();return r?(r.observe(e),v.set(e,t),function(){r.unobserve(e),v.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,r=(0,f.resolve)(e,t);d.default.prefetch(r)}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var i=p.Children.only(t),s={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch()},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(s.href=o||n),p.default.cloneElement(i,s)}}]),t}(p.Component);g.propTypes=void 0;var w=g;t.default=w},vlRD:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=r("RNiq");return{page:e.default||e}}])}},[["vlRD",1,0]]]);