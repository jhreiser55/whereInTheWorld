webpackHotUpdate("static/development/pages/index.js",{

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");

function getProfile(food) {
  console.log("hello");
  return fetch("http://localhost:8080/api/info?q=".concat(food)).then(function (resp) {
    return resp.json();
  });
}

function handleError(error) {
  console.warn(error);
  return null;
}

module.exports = {
  getInfo: function getInfo(food) {
    if (food != null) {
      return getProfile(food)["catch"](handleError);
    }
  }
};

/***/ })

})
//# sourceMappingURL=index.js.eb648db84fde9541afbe.hot-update.js.map