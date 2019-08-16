webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Nav.jsx":
/*!****************************!*\
  !*** ./components/Nav.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Links */ "./components/Links.jsx");
/* harmony import */ var _Functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Functions */ "./components/Functions.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/Alvaro/Sites/react-next/components/Nav.jsx";




var pages = ['introduction', 'what', 'why', 'background', 'resources', 'builtvisible'];
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      mobile = _useState2[0],
      setMobile = _useState2[1],
      _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      menu = _useState4[0],
      setMenu = _useState4[1],
      mobileToggle = function mobileToggle() {
    return setMenu(!menu);
  },
      handleResize = function handleResize() {
    setMenu(false);
    setMobile(global.innerWidth <= 950);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setMobile(window.innerWidth <= 950);
    Object(_Functions__WEBPACK_IMPORTED_MODULE_3__["listen"])('on', window, 'resize', handleResize);
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "nav-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, mobile ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "nav-trigger",
    onClick: mobileToggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "current",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, next_router__WEBPACK_IMPORTED_MODULE_4___default.a.pathname === "/" ? pages[0] : Object(_Functions__WEBPACK_IMPORTED_MODULE_3__["stripSlash"])(next_router__WEBPACK_IMPORTED_MODULE_4___default.a.pathname))) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    onClick: mobileToggle,
    className: mobile && menu ? "nav-mobile" : "nav hide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, pages.map(function (page) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Links__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: page,
      href: page === "introduction" ? "/" : "/".concat(page),
      as: page,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, Object(_Functions__WEBPACK_IMPORTED_MODULE_3__["caps"])(page));
  })));
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=_app.js.93b9b555207f1f2d6e3a.hot-update.js.map