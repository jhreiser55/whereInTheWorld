module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/jhreiser/Desktop/School/CPSC350/whereInTheWorld/frontend/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const linkStyle = {
  marginRight: 15
};
function Header() {
  return __jsx("body", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
}

__jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, `
      

      .description {
        font-family: "Arial";
        font-size: "10px";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: center;
        margin: 5px 0;
      }
      .App-logo {
        height: 80px;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
      
    
	
.header-site{
      background-color: #000000;
      background: url("../static/Background-Index.jpg");
      background-position: 100% 100%;
      background-repeat: no-repeat;
   }
    `);

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
var _jsxFileName = "/home/jhreiser/Desktop/School/CPSC350/whereInTheWorld/frontend/components/layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const layoutStyle = {
  textAlign: "Center",
  //margin: 20,
  padding: 20,
  border: '4px solid #AAA',
  background: "linear-gradient(to bottom right, blue, black, red 80%)",
  color: "white",
  fontSize: "30px"
};
function Layout(props) {
  return __jsx("div", {
    style: layoutStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), props.children);
}

/***/ }),

/***/ "./components/layout2.js":
/*!*******************************!*\
  !*** ./components/layout2.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout2; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
var _jsxFileName = "/home/jhreiser/Desktop/School/CPSC350/whereInTheWorld/frontend/components/layout2.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const layoutStyle2 = {
  textAlign: "Center",
  margin: 20,
  padding: 20,
  //border: '1px solid #DDD',
  background: "white",
  color: "black",
  fontSize: "25px"
};
function Layout2(props) {
  return __jsx("div", {
    style: layoutStyle2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), props.children);
}

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");

function getProfile(food) {
  console.log("hello");
  return fetch(`http://localhost:8080/api/info?q=${food}`).then(function (resp) {
    return resp.json();
  });
}

function handleError(error) {
  console.warn(error);
  return null;
}

module.exports = {
  getInfo: function (food) {
    if (food != null) {
      return getProfile(food).catch(handleError);
    }
  }
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_layout2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout2 */ "./components/layout2.js");
var _jsxFileName = "/home/jhreiser/Desktop/School/CPSC350/whereInTheWorld/frontend/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class Search extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      food: ""
    };
  }

  handleUpdate(evt) {}

  async handleSearch(evt) {
    this.setState({
      search: evt.target.value
    });
    const food = await Object(_lib_utils__WEBPACK_IMPORTED_MODULE_2__["getInfo"])(evt.target.value);
    console.log(food);
    this.setState({
      food
    });
    this.setState({
      food
    });
  }

  handleFunction() {
    if (this.state.food == null) {
      this.state.food = "rawr";
      return __jsx("div", {
        className: "jsx-2970547567",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx("h5", {
        className: "jsx-2970547567",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, this.state.search, " no foundo"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "2970547567",
        __self: this
      }, "h5.jsx-2970547567{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pocmVpc2VyL0Rlc2t0b3AvU2Nob29sL0NQU0MzNTAvd2hlcmVJblRoZVdvcmxkL2Zyb250ZW5kL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCNEIsQUFHMEMsa0JBQ3JCIiwiZmlsZSI6Ii9ob21lL2pocmVpc2VyL0Rlc2t0b3AvU2Nob29sL0NQU0MzNTAvd2hlcmVJblRoZVdvcmxkL2Zyb250ZW5kL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtnZXRJbmZvfSBmcm9tICcuLi9saWIvdXRpbHMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0JztcbmltcG9ydCBMYXlvdXQyIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0Mic7XG5cbmNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlPXtzZWFyY2g6ICcnLCBmb29kOiBcIlwifVxuICAgICAgfVxuICAgIGhhbmRsZVVwZGF0ZShldnQpe1xuICAgICAgICBcbiAgICB9XG5cblxuICAgIGFzeW5jIGhhbmRsZVNlYXJjaChldnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoOiBldnQudGFyZ2V0LnZhbHVlfSk7XG4gICAgICAgIGNvbnN0IGZvb2QgPSBhd2FpdCBnZXRJbmZvKGV2dC50YXJnZXQudmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhmb29kKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9vZH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtmb29kfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlRnVuY3Rpb24oKXtcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5mb29kID09IG51bGwpe1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5mb29kID0gXCJyYXdyXCI7XG4gICAgICAgICAgICByZXR1cm4gKCA8ZGl2PjxoNT57dGhpcy5zdGF0ZS5zZWFyY2h9IG5vIGZvdW5kbzwvaDU+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBoNXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAvLzxMYXlvdXQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy94bWFzLmdpZlwiIHdpZHRoPVwiMTAwcHhcIiBoZWlnaHQ9XCIxMDBweFwiPjwvaW1nPlxuICAgICAgICA8aDI+Q291bnRyeSBTZWFyY2g8L2gyPlxuICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8TGF5b3V0Mj5cblxuXG4gICAgICAgIDxwPjxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlciA9IFwiU2VhcmNoXCIgc2l6ZT1cIjQwXCIgaGVpZ2h0PVwiNTAwMFwiIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VhcmNoLmJpbmQodGhpcyl9Lz4gPC9wPlxuICAgICAgICB7dGhpcy5zdGF0ZS5mb29kICYmIHRoaXMuc3RhdGUuc2VhcmNoICE9IFwiXCIgPyA8ZGl2PlxuICAgICAgICBcbiAgICAgIDx0YWJsZSBjZWxsU3BhY2luZz1cIjVcIiBhbGlnbiA9XCJjZW50ZXJcIiB2YWxpZ24gPVwiYm90dG9tXCI+XG5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPiBOYW1lIDwvdGg+XG4gICAgICAgICAgICAgIDx0aD4gTmFtZSA8L3RoPlxuICAgICAgICAgICAgICA8dGg+Y29kZTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5yZWdpb248L3RoPlxuICAgICAgICAgICAgICA8dGg+bGFuZ3VhZ2U8L3RoPlxuICAgICAgICAgIDwvdHI+IFxuICAgICAgICAgIHt0aGlzLnN0YXRlLmZvb2QubWFwKGZ1bmN0aW9uKHJvdyxpbmRleCl7XG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8dGQ+e3Jvdy5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8dGQ+e3Jvdy5wb29wfTwvdGQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHRkPntyb3cuY291bnRyeWNvZGV9PC90ZD5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDx0ZD57cm93LnJlZ2lvbn08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57cm93Lmxhbmd1YWdlfTwvdGQ+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cblxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbjwvZGl2PiA6IG51bGx9XG48aW1nIHNyYz1cIi9zdGF0aWMvYmF0bWFuMi5naWZcIiBjbGFzc05hbWU9XCJtZWhcIiB3aWR0aD0gXCI1MDBweFwiIGhlaWdodD0gXCIzMDBweFwiLz5cbjxicj48L2JyPlxuPC9MYXlvdXQyPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgIGgxLFxuICAgICAgICAgICAgIDxwPjxpbnB1dCB0eXBlPSd0ZXh0JyB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h9ICAvPjwvcD5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1zdHlsZVwiPlN1Ym1pdDwvZGl2PlxuICAgICAgICAgICAgIGgyLFxuICAgICAgICAgICAgIGEsXG4gICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgICAgICAgICAgIH1cbiAgIFxuICAgICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgICAgICAgICAgICAgZm9udC1zaXplOiBcIjIwcHhcIjtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnV0dG9uLXN0eWxlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDsgIFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmOyBcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICBcbiAgICAgICA8L2Rpdj5cbiAgICAgICAgKX07XG4gICAgICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7Il19 */\n/*@ sourceURL=/home/jhreiser/Desktop/School/CPSC350/whereInTheWorld/frontend/pages/index.js */"));
    }

    return null;
  }

  render() {
    return (//<Layout>
      __jsx("div", {
        className: "jsx-2131145016",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx("img", {
        src: "/static/xmas.gif",
        width: "100px",
        height: "100px",
        className: "jsx-2131145016",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), __jsx("h2", {
        className: "jsx-2131145016",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Country Search")), __jsx(_components_layout2__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-2131145016",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx("input", {
        type: "text",
        placeholder: "Search",
        size: "40",
        height: "5000",
        value: this.state.search,
        onChange: this.handleSearch.bind(this),
        className: "jsx-2131145016",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), " "), this.state.food && this.state.search != "" ? __jsx("div", {
        className: "jsx-2131145016",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx("table", {
        cellSpacing: "5",
        align: "center",
        valign: "bottom",
        className: "jsx-2131145016",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("tbody", {
        className: "jsx-2131145016",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx("tr", {
        className: "jsx-2131145016",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("th", {
        className: "jsx-2131145016",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, " Name "), __jsx("th", {
        className: "jsx-2131145016",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, " Name "), __jsx("th", {
        className: "jsx-2131145016",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "code"), __jsx("th", {
        className: "jsx-2131145016",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "region"), __jsx("th", {
        className: "jsx-2131145016",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "language")), this.state.food.map(function (row, index) {
        return __jsx("tr", {
          key: index,
          className: "jsx-2131145016",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, __jsx("td", {
          className: "jsx-2131145016",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, row.name), __jsx("div", {
          className: "jsx-2131145016",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, __jsx("td", {
          className: "jsx-2131145016",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, row.poop)), __jsx("td", {
          className: "jsx-2131145016",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, row.countrycode), __jsx("td", {
          className: "jsx-2131145016",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, row.region), __jsx("td", {
          className: "jsx-2131145016",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, row.language));
      })))) : null, __jsx("img", {
        src: "/static/batman2.gif",
        width: "500px",
        height: "300px",
        className: "jsx-2131145016" + " " + "meh",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-2131145016",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "2131145016",
        __self: this
      }, "h1.jsx-2131145016,<p.jsx-2131145016><input.jsx-2131145016 type='text'.jsx-2131145016 value=.jsx-2131145016{-webkit-this.state.search;-ms-flex-this.state.search;this.state.search;}/.jsx-2131145016></p.jsx-2131145016><div.jsx-2131145016 className=\"button-style\".jsx-2131145016>Submit</div.jsx-2131145016>h2.jsx-2131145016,a.jsx-2131145016,p.jsx-2131145016{font-family:\"Arial\";}.description.jsx-2131145016{font-family:\"Arial\";font-size:\"20px\";}.button-style.jsx-2131145016{margin:auto auto;cursor:pointer;background-color:#000000;color:#ffffff;width:200px;font-family:\"Arial\";text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pocmVpc2VyL0Rlc2t0b3AvU2Nob29sL0NQU0MzNTAvd2hlcmVJblRoZVdvcmxkL2Zyb250ZW5kL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNGd0IsQUFHMEQsQUFLdEIsQUFJQSxBQUlGLGlCQUNGLEdBUmxCLEFBSW1CLFlBS1MsS0FKNUIsb0JBS2lCLGNBaEI0QixBQWlCOUIsWUFDUSxvQkFDRixrQkFFdEIiLCJmaWxlIjoiL2hvbWUvamhyZWlzZXIvRGVza3RvcC9TY2hvb2wvQ1BTQzM1MC93aGVyZUluVGhlV29ybGQvZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2dldEluZm99IGZyb20gJy4uL2xpYi91dGlscydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnO1xuaW1wb3J0IExheW91dDIgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQyJztcblxuY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGU9e3NlYXJjaDogJycsIGZvb2Q6IFwiXCJ9XG4gICAgICB9XG4gICAgaGFuZGxlVXBkYXRlKGV2dCl7XG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgYXN5bmMgaGFuZGxlU2VhcmNoKGV2dCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWFyY2g6IGV2dC50YXJnZXQudmFsdWV9KTtcbiAgICAgICAgY29uc3QgZm9vZCA9IGF3YWl0IGdldEluZm8oZXZ0LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGZvb2QpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtmb29kfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Zvb2R9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVGdW5jdGlvbigpe1xuICAgICAgICBpZih0aGlzLnN0YXRlLmZvb2QgPT0gbnVsbCl7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmZvb2QgPSBcInJhd3JcIjtcbiAgICAgICAgICAgIHJldHVybiAoIDxkaXY+PGg1Pnt0aGlzLnN0YXRlLnNlYXJjaH0gbm8gZm91bmRvPC9oNT5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIGg1e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIC8vPExheW91dD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL3htYXMuZ2lmXCIgd2lkdGg9XCIxMDBweFwiIGhlaWdodD1cIjEwMHB4XCI+PC9pbWc+XG4gICAgICAgIDxoMj5Db3VudHJ5IFNlYXJjaDwvaDI+XG4gICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIDxMYXlvdXQyPlxuXG5cbiAgICAgICAgPHA+PGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyID0gXCJTZWFyY2hcIiBzaXplPVwiNDBcIiBoZWlnaHQ9XCI1MDAwXCIgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNofSBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWFyY2guYmluZCh0aGlzKX0vPiA8L3A+XG4gICAgICAgIHt0aGlzLnN0YXRlLmZvb2QgJiYgdGhpcy5zdGF0ZS5zZWFyY2ggIT0gXCJcIiA/IDxkaXY+XG4gICAgICAgIFxuICAgICAgPHRhYmxlIGNlbGxTcGFjaW5nPVwiNVwiIGFsaWduID1cImNlbnRlclwiIHZhbGlnbiA9XCJib3R0b21cIj5cblxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+IE5hbWUgPC90aD5cbiAgICAgICAgICAgICAgPHRoPiBOYW1lIDwvdGg+XG4gICAgICAgICAgICAgIDx0aD5jb2RlPC90aD5cbiAgICAgICAgICAgICAgPHRoPnJlZ2lvbjwvdGg+XG4gICAgICAgICAgICAgIDx0aD5sYW5ndWFnZTwvdGg+XG4gICAgICAgICAgPC90cj4gXG4gICAgICAgICAge3RoaXMuc3RhdGUuZm9vZC5tYXAoZnVuY3Rpb24ocm93LGluZGV4KXtcbiAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDx0ZD57cm93Lm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDx0ZD57cm93LnBvb3B9PC90ZD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8dGQ+e3Jvdy5jb3VudHJ5Y29kZX08L3RkPlxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHRkPntyb3cucmVnaW9ufTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntyb3cubGFuZ3VhZ2V9PC90ZD5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuXG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuPC9kaXY+IDogbnVsbH1cbjxpbWcgc3JjPVwiL3N0YXRpYy9iYXRtYW4yLmdpZlwiIGNsYXNzTmFtZT1cIm1laFwiIHdpZHRoPSBcIjUwMHB4XCIgaGVpZ2h0PSBcIjMwMHB4XCIvPlxuPGJyPjwvYnI+XG48L0xheW91dDI+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgaDEsXG4gICAgICAgICAgICAgPHA+PGlucHV0IHR5cGU9J3RleHQnIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaH0gIC8+PC9wPlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLXN0eWxlXCI+U3VibWl0PC9kaXY+XG4gICAgICAgICAgICAgaDIsXG4gICAgICAgICAgICAgYSxcbiAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICAgICAgICAgfVxuICAgXG4gICAgICAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICAgICAgICAgICBmb250LXNpemU6IFwiMjBweFwiO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5idXR0b24tc3R5bGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOyAgXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7IFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIFxuICAgICAgIDwvZGl2PlxuICAgICAgICApfTtcbiAgICAgICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDsiXX0= */\n/*@ sourceURL=/home/jhreiser/Desktop/School/CPSC350/whereInTheWorld/frontend/pages/index.js */"))
    );
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jhreiser/Desktop/School/CPSC350/whereInTheWorld/frontend/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map