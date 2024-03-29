webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Nav.jsx":
/*!****************************!*\
  !*** ./components/Nav.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Links__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Links */ "./components/Links.jsx");
/* harmony import */ var _Functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Functions */ "./components/Functions.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/Users/Alvaro/Sites/react-next/components/Nav.jsx";




var pages = ['introduction', 'what', 'why', 'background', 'resources', 'builtvisible'];

var Nav =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Nav, _Component);

  function Nav() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Nav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Nav)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      mobileMenu: false,
      menuOpen: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "mobileToggle", function () {
      return _this.setState({
        menuOpen: !_this.state.menuOpen
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleResize", function () {
      return _this.setState({
        menuOpen: false,
        mobileMenu: global.innerWidth <= 950
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Nav, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        mobileMenu: window.innerWidth <= 950
      });
      Object(_Functions__WEBPACK_IMPORTED_MODULE_9__["listen"])('on', window, 'resize', this.handleResize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      Object(_Functions__WEBPACK_IMPORTED_MODULE_9__["listen"])('off', window, 'resize', this.handleResize);
    } // toggle mobile menu, Check that mobile width is true

  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          mobileMenu = _this$state.mobileMenu,
          menuOpen = _this$state.menuOpen;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "nav-wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, mobileMenu ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "nav-trigger",
        onClick: this.mobileToggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), " "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "current",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, next_router__WEBPACK_IMPORTED_MODULE_10___default.a.pathname === "/" ? pages[0] : Object(_Functions__WEBPACK_IMPORTED_MODULE_9__["stripSlash"])(next_router__WEBPACK_IMPORTED_MODULE_10___default.a.pathname))) : null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        onClick: this.mobileToggle,
        className: mobileMenu && menuOpen ? "nav-mobile" : "nav hide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, pages.map(function (page) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Links__WEBPACK_IMPORTED_MODULE_8__["default"], {
          key: page,
          href: page === "introduction" ? "/" : "/".concat(page),
          as: page,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, Object(_Functions__WEBPACK_IMPORTED_MODULE_9__["caps"])(page));
      })));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=_app.js.d25aa33c3e91c48067ae.hot-update.js.map