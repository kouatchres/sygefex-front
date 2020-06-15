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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: endpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoint", function() { return endpoint; });
// This is client side config only - don't put anything in here that shouldn't be public!
var endpoint = "http://localhost:5000"; // export const perPage = 6;
// export  {perPage};

/***/ }),

/***/ "./lib/withData.jsx":
/*!**************************!*\
  !*** ./lib/withData.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-with-apollo */ "next-with-apollo");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");




function createClient(_ref) {
  var headers = _ref.headers;
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_1___default.a({
    uri:  true ? _config__WEBPACK_IMPORTED_MODULE_2__["endpoint"] : undefined,
    request: function request(operation) {
      operation.setContext({
        fetchOptions: {
          credentials: 'include'
        },
        headers: headers
      });
    },
    // local data from apollo client
    clientState: {
      resolvers: {}
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default()(createClient));

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Page */ "./src/components/Page.jsx");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_withData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/withData */ "./lib/withData.jsx");

var _jsxFileName = "E:\\SYGEFEX\\Sygefex-recent\\sygefex-frontend\\pages\\_app.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          apollo = _this$props.apollo,
          pageProps = _this$props.pageProps;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["ApolloProvider"], {
        client: apollo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["ApolloProvider"], {
        client: apollo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                // this exposes the query to the user
                pageProps.query = ctx.query;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_2___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withData__WEBPACK_IMPORTED_MODULE_6__["default"])(MyApp));

/***/ }),

/***/ "./src/components/Footer.jsx":
/*!***********************************!*\
  !*** ./src/components/Footer.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\SYGEFEX\\Sygefex-recent\\sygefex-frontend\\src\\components\\Footer.jsx";


var FooterItems = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "Footer__FooterItems",
  componentId: "sc-1xu6ued-0"
})(["margin:0 auto;display:flex;align-content:center;padding-bottom:0.5rem;"]);
var FooterItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({
  displayName: "Footer__FooterItem",
  componentId: "sc-1xu6ued-1"
})(["list-style:none;display:flex;padding:0 0.5rem;font-size:1.5rem;"]);
var FooterContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__FooterContainer",
  componentId: "sc-1xu6ued-2"
})(["margin:0 auto;margin-top:0.5rem;display:flex;bottom:0;left:0;align-items:center;color:", ";background:", ";"], function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.blues[2];
});

var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Sygex"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, " \u24B8 Copyright"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Contact")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Header.jsx":
/*!***********************************!*\
  !*** ./src/components/Header.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mega_menu_MegaMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mega-menu/MegaMenu */ "./src/components/mega-menu/MegaMenu.jsx");
/* harmony import */ var _mega_menu_Burger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mega-menu/Burger */ "./src/components/mega-menu/Burger.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/User */ "./src/components/User.jsx");
var _jsxFileName = "E:\\SYGEFEX\\Sygefex-recent\\sygefex-frontend\\src\\components\\Header.jsx";









next_router__WEBPACK_IMPORTED_MODULE_6___default.a.onRouteChangeStart = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_6___default.a.onRouteChangeComplete = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_6___default.a.onRouteChangeError = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done();
};

var StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "Header__StyledHeader",
  componentId: "sc-1ozje8u-0"
})(["position:fixed;left:0;top:0;align-content:center;z-index:100;.megaMenu{display:none;}.subBar{margin:0;align-items:center;display:grid;grid-template-columns:repeat(2,1fr);}.logo{font-size:3rem;position:relative;height:3.5rem;font-weight:bold;font-family:\"Roboto Slab\";letter-spacing:0.3rem;background:", ";a{align-items:center;color:", ";padding-bottom:2rem;padding:0 2rem;text-transform:uppercase;text-decoration:none;}}.meMenu{font-size:1.2rem;position:relative;height:3.5rem;font-weight:normal;font-family:\"Roboto Slab\";align-items:center;text-align:center;letter-spacing:0.15rem;color:", ";background:", ";padding:0  2rem;}@media(min-width:550px){position:fixed;left:0;top:0;.subBar{margin:0 auto;align-items:center;display:grid;grid-template-columns:repeat(2,1fr);.meMenu{display:grid;}.burger{display:none;}}.navigation{display:grid;grid-template-columns:1fr 1fr;}.megaMenu{display:grid;}x .burger{display:none;}}"], function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.blues[2];
}, function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.blues[2];
});

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navigation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "subBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/login/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "SYGEFEX"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "burger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mega_menu_Burger__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "meMenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_User__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, function (_ref) {
    var data = _ref.data;
    var currentUser = data && data.me;

    if (currentUser) {
      return currentUser.name;
    }

    return null;
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "megaMenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mega_menu_MegaMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Meta.jsx":
/*!*********************************!*\
  !*** ./src/components/Meta.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\SYGEFEX\\Sygefex-recent\\sygefex-frontend\\src\\components\\Meta.jsx";



var Meta = function Meta() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "UTF-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "ie=edge",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/favicon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/nprogress.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "SYGEFEX"));
};

/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./src/components/Page.jsx":
/*!*********************************!*\
  !*** ./src/components/Page.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/components/Header.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer.jsx");
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Meta */ "./src/components/Meta.jsx");
var _jsxFileName = "E:\\SYGEFEX\\Sygefex-recent\\sygefex-frontend\\src\\components\\Page.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n\n\n/* roboto-slab-regular - latin */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: bold;\n  font-weight: 400;\n  src: url('/public/fonts/roboto/roboto-slab-v11-latin-regular.eot'); /* IE9 Compat Modes */\n  src: local(''),\n       url('/public/fonts/roboto/roboto-slab-v11-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n       url('/public/fonts/roboto/roboto-slab-v11-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */\n       url('/public/fonts/roboto/roboto-slab-v11-latin-regular.woff') format('woff'), /* Modern Browsers */\n       url('/public/fonts/roboto/roboto-slab-v11-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */\n       url('/public/fonts/roboto/roboto-slab-v11-latin-regular.svg#RobotoSlab') format('svg'); /* Legacy iOS */\n}\n\n/* aguafina-script-regular - latin */\n@font-face {\n  font-family: 'Aguafina Script';\n  font-style: bold;\n  font-weight: 400;\n  src: url('../fonts/aguafina-script-v8-latin-regular.eot'); /* IE9 Compat Modes */\n  src: local('Aguafina Script Regular'), local('AguafinaScript-Regular'),\n       url('../fonts/aguafina-script-v8-latin/aguafina-script-v8-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n       url('../fonts/aguafina-script-v8-latin/aguafina-script-v8-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */\n       url('../fonts/aguafina-script-v8-latin/aguafina-script-v8-latin-regular.woff') format('woff'), /* Modern Browsers */\n       url('../fonts/aguafina-script-v8-latin/aguafina-script-v8-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */\n       url('../fonts/aguafina-script-v8-latin/aguafina-script-v8-latin-regular.svg#AguafinaScript') format('svg'); /* Legacy iOS */\n}\n  html {\n    box-sizing: border-box;\n    font-size: 11px;\n  }\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  \n  body\n{\n    padding:0;\n    margin: 0;\n    font-size: 2rem;\n    font-family: \"Roboto Slab\";\n    font-weight: 500;\n    font-style: normal;\n   \n  button {  font-family: 'Roboto Slab'; }\n\n}\n\nh1, h2, h3, h4, h5, h6 {\n    font-family: \"Roboto Slab\";\n    font-size:2rem;\n    font-weight: 500;\n    font-style: bold;\n}\n\na\n{\n    font-family: \"Roboto Slab\";\n    font-weight: 400;\n    font-size:1.5rem;\n    font-style: italic;\n    text-decoration: none;\n    color: ", ";\n    :hover {\n  text-decoration: underline;\n}\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var theme = {
  maxWidth: '1000p',
  quarterBB: ' #003c96',
  lightestBB: '#b3b4d1',
  britishRed: '#d4351c',
  complementaryBB: '#784800',
  complementaryBB1: '#007860',
  complementaryBB2: '#006078',
  complementaryBB3: '#007078',
  americanBlue: '#1d70b8',
  britishBlue: '#003078',
  britishLightBlue: '#1d70b8',
  red: '#FF0000',
  googleBlue: '#359',
  goldenBrown: '#d17f05',
  black: '#393939',
  grey: '#aaabaa',
  slightGrey: 'rgb(243, 241, 241)',
  lightGrey: '#E1E1E1',
  darkGrey: '#EEEEEE',
  pureWhite: '#FFFFFF',
  offWhite: '#EDEDED',
  primary: '#00ab80',
  black2: '#4a4a4a',
  white3: '#ffffff',
  error: '#e05666',
  brownishRed: '#fo7031',
  coolBlue: '#195e83',
  coollerBlue: '#136ea5',
  sand: '#eea549',
  reddishBrown: '#f57836',
  buff: '#edb879',
  blues: ['#729fbf', '#b6c7d6', '#0780b7', '#68a1c5', '#014e98', '#2782b0', '#5EC9F9', '#c8e5eb', '#b1dee3', '#bde4e9', '#cce7e8'],
  lightBlues: ['#c8e4f3', '#d1e8ed', '#b3d3ea', '#c5e2f2', '#f1f5ff', '#e6ecfe', '#9cc3dfff', '#ffd662ff', '#c7d3d4ff'],
  greys: ['#F9FAFC', '#F2F2F6', '#aaabaa', '#999', '#fcfcfc', '#c8c8c8'],
  formBS3: ' inset 0.7rem 0.7rem 0.5rem  rgba(0,0,0,0.9)',
  formBS4: ' inset 0.08rem 1rem 1rem 0.03rem rgba(0,0.3,0,0.2)',
  formBS: ' inset 0.1rem .05rem 0.5rem rgba(0,0,0.8,0.5)',
  formBS2: ' inset  0 0 2px 2px rgba(0,0,0.4,0.1)',
  formBS1: ' 2px 2px 2px 2px rgba(0,0,0.4,0.1)'
};
var GenPage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Page__GenPage",
  componentId: "sc-7w315w-0"
})(["position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100vw;font-family:'Roboto Slab';min-height:100vh;background:", ";"], function (props) {
  return props.theme.lightBlues[4];
});
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Page__Inner",
  componentId: "sc-7w315w-1"
})(["position:relative;margin:0 auto;padding:2rem;background:", ";border-radius:0.5rem;border:0.09rem solid ", ";"], function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.blues[2];
});
var Containers = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Page__Containers",
  componentId: "sc-7w315w-2"
})(["display:grid;grid-template-areas:\"Headers\" \"Mains\" \"Footers\";grid-template-columns:1fr;grid-template-rows:3.5rem 1fr 3.5rem;height:100vh;"]);
var Headers = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Page__Headers",
  componentId: "sc-7w315w-3"
})(["display:grid;grid-template-columns:1fr 4fr;align-items:right;grid-area:Headers;position:fixed;height:3.5rem;z-index:10;border-bottom:0.2rem solid inset 0.1rem .05rem 0.5rem rgba(0,0,0.8,0.5);"]);
var Footers = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Page__Footers",
  componentId: "sc-7w315w-4"
})(["grid-area:Footers;display:flex;justify-content:center;background-color:", ";align-items:center;font-size:1.9rem;color:white;padding-left:2rem;padding-right:2rem;"], function (props) {
  return props.theme.blues[2];
});
var Mains = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Page__Mains",
  componentId: "sc-7w315w-5"
})(["grid-area:Mains;padding-left:auto;padding-top:1rem;padding-right:auto;background-color:", ";"], function (props) {
  return props.theme.lightBlues[6];
});
Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["injectGlobal"])(_templateObject(), function (props) {
  return props.theme.black;
});

var Page =
/*#__PURE__*/
function (_Component) {
  _inherits(Page, _Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, _getPrototypeOf(Page).apply(this, arguments));
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Containers, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Meta__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Headers, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Mains, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Inner, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, this.props.children)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footers, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }))));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/components/User.jsx":
/*!*********************************!*\
  !*** ./src/components/User.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/queries&Mutations&Functions/Queries */ "./src/components/queries&Mutations&Functions/Queries.jsx");
var _jsxFileName = "E:\\SYGEFEX\\Sygefex-recent\\sygefex-frontend\\src\\components\\User.jsx";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var User = function User(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], _extends({}, props, {
    query: _components_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_3__["meQuery"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), function (payload) {
    return props.children(payload);
  });
};

User.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./src/components/mega-menu/Burger.jsx":
/*!*********************************************!*\
  !*** ./src/components/mega-menu/Burger.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\SYGEFEX\\Sygefex-recent\\sygefex-frontend\\src\\components\\mega-menu\\Burger.jsx";


var BurgerStyled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Burger__BurgerStyled",
  componentId: "kae2he-0"
})(["padding-top:1rem;padding-bottom:1rem;padding-left:1.5rem;width:5rem;max-height:3.5rem;background:", ";div{width:2rem;height:0.2rem;padding:0.1rem;margin-top:0.2rem;background-color:", ";cursor:pointer;}"], function (props) {
  return props.theme.blues[2];
}, function (props) {
  return props.theme.pureWhite;
});

var Burger = function Burger() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BurgerStyled, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "line1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "line2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "line3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Burger);

/***/ }),

/***/ "./src/components/mega-menu/MegaMenu.jsx":
/*!***********************************************!*\
  !*** ./src/components/mega-menu/MegaMenu.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\SYGEFEX\\Sygefex-recent\\sygefex-frontend\\src\\components\\mega-menu\\MegaMenu.jsx";



var ToolBarNavItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "MegaMenu__ToolBarNavItem",
  componentId: "sc-1gy0ucv-0"
})(["*{box-sizing:border-box;}max-width:100vw;height:0.9rem;margin:0 auto;}*/ body{font-family:'Roboto Slab','Open Sans','Segoe UI','Helvetica Neue',Helvetica,Arial,sans-serif;margin:0;padding:0;}nav{background:", ";margin:0;padding:0 2rem;height:3.5rem;align-items:center;width:100vw;color:", "}nav ul{list-style:none;position:relative;margin:0;padding:0;}nav li{display:inline-block;}nav a{text-decoration:none;display:block;color:", ";padding:0  0.5rem;:hover{color:", ";}}nav li:hover{border-top-right-radius:0.8rem;border-top-left-radius:0.8rem;background:", ";color:", ";}.menu-main{padding-top:1rem;height:3.5rem;font-size:1.6rem;}.menu-main a{padding:0 0.5rem;}.menu-sub{width:100 %;position:absolute;background:", ";color:", ";display:none;padding:1rem;border-bottom-right-radius:0.8rem;border-bottom-left-radius:0.8rem;box-shadow:", ";}nav li:hover .menu-sub{display:block;}.menu-sub li{display:block;}.menu-sub a{margin:0;padding:0;font-size:1.2rem;color:", ";}.menu-sub a:hover{text-decoration:underline;}.menu-sub-user{width:70 %;position:absolute;background:", ";color:", ";display:none;padding:1rem;border-bottom-right-radius:0.8rem;border-bottom-left-radius:0.8rem;}nav li:hover .menu-sub-user{display:block;}.menu-sub-user li{display:block;}.menu-sub-user a{margin:0;padding:0;font-size:1.2rem;color:", ";}.menu-sub-user a:hover{text-decoration:underline;}.menu-category{font-size:1rem;margin-top:0;color:", " margin-bottom:0.5rem;text-align:left;text-transform:uppercase;}.menu-category:first-of-type{margin-top:0;margin-bottom:0;}.menu-col-1,.menu-col-2,.menu-col-3,.menu-col-4{float:left;}.menu-col-1,.menu-col-2,.menu-col-3,.menu-col-4{width:25 %;padding:1rem;border-right:1px solid #fff;}.menu-category:last-of-type{border-right:none;}hr{margin:0;padding:0;}@media(max-width:650){body{}nav{position:absolute;right:0;height:90vh;top:3.5rem;background:", ";display:flex;flex-direction:column;align-items:center;width:50% transform:translateX(100%);transistion:transform 0.5s ease-in;}nav li{display:block;}}"], function (props) {
  return props.theme.blues[2];
}, function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.britishLightBlue;
}, function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.britishBlue;
}, function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.britishBlue;
}, function (props) {
  return props.theme.formBS;
}, function (props) {
  return props.theme.britishBlue;
}, function (props) {
  return props.theme.blues[2];
}, function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.britishBlue;
}, function (props) {
  return props.theme.blues[2];
});

var MegaMenu = function MegaMenu() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ToolBarNavItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "menu-main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, "Administration"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-sub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-col-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, "Region"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newRegion",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "Nouvelle Region")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyRegion",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, "Modifier Region"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, "Departement"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newDivision",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, "Nouveau Departement")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyDivision",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, "Modifier Department"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, "Arrondissement"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newSubDivision",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, "Nouvel Arrondissement")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifySubDivision",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, "Modifier Arrondissement"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, "Ville"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newTown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, "Nouvelle Ville")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyTown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, "Modifier Ville"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, "New Series"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newSeries",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, "register Series")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifySeries",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, "Modifier Serie"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, "Notes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newMarks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, "Inscrire Notes")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyMarks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, "Modifier Notes"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, "Formik Forms"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/formikForms/showFormikForms",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, "New Registration")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifySubjectType",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, "Modifier Type Mati\xE8re")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-col-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }, "Type De Mati\xE8re"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newSubjectType",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, " Nouveau Type Mati\xE8re")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifySubjectType",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }, "Modifier Type Mati\xE8re"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, "Subject Series"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newSubjectSeries",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }, "Subjects Series")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifySubjectSeries",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, "Modifier Type Mati\xE8re"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }, "Inscription"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newRegister",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, " Nouvelle Inscription")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyRegistration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, "Modifier Inscription"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }, "Poste"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newRank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }, "Nouveau Poste")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyRank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: this
  }, "Modifier Poste"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }, "Examen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newExam",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }, "Nouvel Examen")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyExam",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: this
  }, "Modifier Examen"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }, "Resultats"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/genCenterResults",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }, "Resultats Centre")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/results/candCodeResults",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  }, "Resultat Candidat")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: this
  }, "Listes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/lists/centersPerTown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  }, "Centres par Ville")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/lists/subjPerSeries",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337
    },
    __self: this
  }, "Matieres par Serie")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/lists/subjPerSeries",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340
    },
    __self: this
  }, "Matieres par Serie")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/lists/subjPerSeries",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: this
  }, "Matieres par Serie")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/lists/subjPerSeries",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: this
  }, "Matieres par Serie")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-col-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    },
    __self: this
  }, "Utilisateur"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newUser",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: this
  }, "Nouveau Utilisateur")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyUser",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    __self: this
  }, "Modifier Utilisateur"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    },
    __self: this
  }, "Centre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newCenter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366
    },
    __self: this
  }, "Nouveau Centre")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyCenter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369
    },
    __self: this
  }, "Modifier Centre"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: this
  }, "Session"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newSession",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376
    },
    __self: this
  }, "Nouvelle Session")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifySession",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379
    },
    __self: this
  }, "Modifier Session"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383
    },
    __self: this
  }, "Series"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newSeries",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
    },
    __self: this
  }, "Nouvelle Series")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifySeries",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389
    },
    __self: this
  }, "Modifier Series"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    },
    __self: this
  }, "Rapports"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newReport",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396
    },
    __self: this
  }, "charger rapport ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyReport",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399
    },
    __self: this
  }, "Modifier rapport"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403
    },
    __self: this
  }, "Resultats Centre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/results/centerResults/getCompleteCenterResults",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406
    },
    __self: this
  }, "Resultats Complet du Centre")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/results/centerResults/centerResultsPerSeries",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409
    },
    __self: this
  }, "Resultats du Centre par Serie")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/results/candidateResults/getCandidateResultsFromRegNo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413
    },
    __self: this
  }, "Resultats Du Candidat"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417
    },
    __self: this
  }, "Pays"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newCountry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420
    },
    __self: this
  }, "Nouveau pays")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/results",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423
    },
    __self: this
  }, "Modify counr")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-col-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429
    },
    __self: this
  }, "Sexe"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newGender",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432
    },
    __self: this
  }, "nouveau Sexe")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyGender",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435
    },
    __self: this
  }, "Modifier Sexe"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439
    },
    __self: this
  }, "Candidat"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newCand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442
    },
    __self: this
  }, "nouveau Candidat")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/candidatePage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445
    },
    __self: this
  }, "Liste Candidats")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyCandidate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448
    },
    __self: this
  }, "Modifier Candidat"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452
    },
    __self: this
  }, "Enseignement"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newEducType",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455
    },
    __self: this
  }, "Nouveau Type D'enseignement")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyEducType",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458
    },
    __self: this
  }, "Modifier Type D'enseignement"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462
    },
    __self: this
  }, "Mati\xE8re"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newSubject",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465
    },
    __self: this
  }, "Nouvelle Mati\xE8re ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifySubject",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468
    },
    __self: this
  }, "Modifier Mati\xE8re"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472
    },
    __self: this
  }, "Charge de centre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newExaminer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475
    },
    __self: this
  }, "Inscription des Charge de centre ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyExaminer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478
    },
    __self: this
  }, "Modifier Charge de centre")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signInOut/signUp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481
    },
    __self: this
  }, "SignUp"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485
    },
    __self: this
  }, "Phase de l'Examen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newPhase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490
    },
    __self: this
  }, "Nouvelle Phase de l'Examen "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494
    },
    __self: this
  }, "Inscrire Postes aux Phases de l'Examen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newPhaseRank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499
    },
    __self: this
  }, "Postes aux Phases de l'Examen "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503
    },
    __self: this
  }, "Inscrire Prof au centre d'Examen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newCESExaminer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508
    },
    __self: this
  }, "Prof s'inscrire au centre d'Examen "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512
    },
    __self: this
  }, "Examen Pour Session par Centre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newCenterExamSession",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517
    },
    __self: this
  }, "Inscrire Centre a l'Examen "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521
    },
    __self: this
  }, "Series par Centre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newCenterExamSessionSeries",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524
    },
    __self: this
  }, "Inscrire Series aux centres ")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/creates/newRegister",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532
    },
    __self: this
  }, "Candidate"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-sub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-col-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537
    },
    __self: this
  }, "Inscription"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newRegister",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540
    },
    __self: this
  }, " Nouvelle Inscription")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyRegistration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543
    },
    __self: this
  }, "Modifier Inscription"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547
    },
    __self: this
  }, "Resultats"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/genCenterResults",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550
    },
    __self: this
  }, "Resultats Centre")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/results/candCodeResults",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553
    },
    __self: this
  }, "Resultat Candidat")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-col-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 560
    },
    __self: this
  }, "Utilisateur"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newUser",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563
    },
    __self: this
  }, "Nouveau Utilisateur")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyUser",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566
    },
    __self: this
  }, "Modifier Utilisateur"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570
    },
    __self: this
  }, "Resultats Centre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/results/centerResults/getCompleteCenterResults",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573
    },
    __self: this
  }, "Resultats Complet du Centre")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/results/centerResults/centerResultsPerSeries",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576
    },
    __self: this
  }, "Resultats du Centre par Serie")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/results/candidateResults/getCandidateResultsFromRegNo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580
    },
    __self: this
  }, "Resultats Du Candidat"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584
    },
    __self: this
  }, "Candidat"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newCand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587
    },
    __self: this
  }, "nouveau Candidat")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/candidatePage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590
    },
    __self: this
  }, "Liste Candidats")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyCandidate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593
    },
    __self: this
  }, "Modifier Candidat"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 596
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597
    },
    __self: this
  }, "Charge de centre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newExaminer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600
    },
    __self: this
  }, "Inscription des Charge de centre ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyExaminer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 603
    },
    __self: this
  }, "Modifier Charge de centre")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signInOut/signUp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 605
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606
    },
    __self: this
  }, "SignUp"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610
    },
    __self: this
  }, "Phase de l'Examen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newPhase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 614
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615
    },
    __self: this
  }, "Nouvelle Phase de l'Examen "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 618
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 619
    },
    __self: this
  }, "Inscrire Postes aux Phases de l'Examen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 622
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newPhaseRank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 624
    },
    __self: this
  }, "Postes aux Phases de l'Examen "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 628
    },
    __self: this
  }, "Inscrire Prof au centre d'Examen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 631
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newCESExaminer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 632
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 633
    },
    __self: this
  }, "Prof s'inscrire au centre d'Examen "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 636
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 637
    },
    __self: this
  }, "Examen Pour Session par Centre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 640
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newCenterExamSession",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 641
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 642
    },
    __self: this
  }, "Inscrire Centre a l'Examen "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 645
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 646
    },
    __self: this
  }, "Series par Centre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 647
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newCenterExamSessionSeries",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 648
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 649
    },
    __self: this
  }, "Inscrire Series aux centres ")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/creates/newRegister",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 656
    },
    __self: this
  }, "Centre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-sub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 657
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-col-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 658
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 660
    },
    __self: this
  }, "Notes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 661
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newMarks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 663
    },
    __self: this
  }, "Inscrire Notes")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyMarks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 665
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 666
    },
    __self: this
  }, "Modifier Notes"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 670
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671
    },
    __self: this
  }, "Inscription"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 672
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newRegister",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 674
    },
    __self: this
  }, " Nouvelle Inscription")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyRegistration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 677
    },
    __self: this
  }, "Modifier Inscription"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 682
    },
    __self: this
  }, "Resultats"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/genCenterResults",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 685
    },
    __self: this
  }, "Resultats Centre")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/results/candCodeResults",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 688
    },
    __self: this
  }, "Resultat Candidat")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 690
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 692
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 693
    },
    __self: this
  }, "Listes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 694
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/lists/centersPerTown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 695
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 696
    },
    __self: this
  }, "Centres par Ville")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/lists/subjPerSeries",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 698
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 699
    },
    __self: this
  }, "Matieres par Serie")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/lists/subjPerSeries",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 701
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 702
    },
    __self: this
  }, "Matieres par Serie")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/lists/subjPerSeries",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 704
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 705
    },
    __self: this
  }, "Matieres par Serie")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/lists/subjPerSeries",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 707
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 708
    },
    __self: this
  }, "Matieres par Serie")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 710
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-col-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 713
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 714
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 715
    },
    __self: this
  }, "Utilisateur"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 716
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newUser",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 717
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 718
    },
    __self: this
  }, "Nouveau Utilisateur")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyUser",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 720
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 721
    },
    __self: this
  }, "Modifier Utilisateur"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 724
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 725
    },
    __self: this
  }, "Resultats Centre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 726
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/results/centerResults/getCompleteCenterResults",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 727
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 728
    },
    __self: this
  }, "Resultats Complet du Centre")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/results/centerResults/centerResultsPerSeries",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 730
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 731
    },
    __self: this
  }, "Resultats du Centre par Serie")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/results/candidateResults/getCandidateResultsFromRegNo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 734
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 735
    },
    __self: this
  }, "Resultats Du Candidat"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 739
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 740
    },
    __self: this
  }, "Candidat"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 741
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newCand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 742
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 743
    },
    __self: this
  }, "nouveau Candidat")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/candidatePage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 745
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 746
    },
    __self: this
  }, "Liste Candidats")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyCandidate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 748
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 749
    },
    __self: this
  }, "Modifier Candidat"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 752
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 753
    },
    __self: this
  }, "Charge de centre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 754
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newExaminer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 755
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 756
    },
    __self: this
  }, "Inscription des Charge de centre ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyExaminer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 758
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 759
    },
    __self: this
  }, "Modifier Charge de centre")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signInOut/signUp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 761
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 762
    },
    __self: this
  }, "SignUp"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 765
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 766
    },
    __self: this
  }, "Inscrire Prof au centre d'Examen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 769
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newCESExaminer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 770
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 771
    },
    __self: this
  }, "Prof s'inscrire au centre d'Examen "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 774
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 775
    },
    __self: this
  }, "Examen Pour Session par Centre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 778
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newCenterExamSession",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 779
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 780
    },
    __self: this
  }, "Inscrire Centre a l'Examen "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 783
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 784
    },
    __self: this
  }, "Series par Centre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 785
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newCenterExamSessionSeries",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 786
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 787
    },
    __self: this
  }, "Inscrire Series aux centres ")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 793
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/creates/newRegister",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 794
    },
    __self: this
  }, "Examinateur"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-sub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 795
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-col-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 796
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 797
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 798
    },
    __self: this
  }, "Notes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 799
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newMarks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 800
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 801
    },
    __self: this
  }, "Inscrire Notes")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyMarks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 803
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 804
    },
    __self: this
  }, "Modifier Notes"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 807
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 808
    },
    __self: this
  }, "Utilisateur"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 809
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newUser",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 810
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 811
    },
    __self: this
  }, "Nouveau Utilisateur")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyUser",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 813
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 814
    },
    __self: this
  }, "Modifier Utilisateur"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 817
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 818
    },
    __self: this
  }, "Rapports"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 819
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newReport",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 820
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 821
    },
    __self: this
  }, "charger rapport ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyReport",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 823
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 824
    },
    __self: this
  }, "Modifier rapport"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 827
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 828
    },
    __self: this
  }, "Charge de centre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 829
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newExaminer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 830
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 831
    },
    __self: this
  }, "Inscription des Charge de centre ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyExaminer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 833
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 834
    },
    __self: this
  }, "Modifier Charge de centre")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signInOut/signUp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 836
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 837
    },
    __self: this
  }, "SignUp"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 840
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 841
    },
    __self: this
  }, "Inscrire Prof au centre d'Examen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 844
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newCESExaminer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 845
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 846
    },
    __self: this
  }, "Prof s'inscrire au centre d'Examen ")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 853
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/creates/newRegister",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 854
    },
    __self: this
  }, "Utilisateur"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-sub-user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 855
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-col-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 856
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 857
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 858
    },
    __self: this
  }, "Login/Signup"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 859
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newSignup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 860
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 861
    },
    __self: this
  }, "Signup")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 863
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 864
    },
    __self: this
  }, "Login")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 870
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/creates/newRegister",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 871
    },
    __self: this
  }, "Contact")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 873
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/creates/newRegister",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 874
    },
    __self: this
  }, "Nous"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (MegaMenu);

/***/ }),

/***/ "./src/components/queries&Mutations&Functions/Queries.jsx":
/*!****************************************************************!*\
  !*** ./src/components/queries&Mutations&Functions/Queries.jsx ***!
  \****************************************************************/
/*! exports provided: getAllSubjectsOfASeriesQuery, getAllSubjectTypesQuery, getAllGendersQuery, getAllEducTypeQuery, getAllRegionsOfACountryQuery, getAllSeriesOfAnEducationTypeQuery, getAllExamsQuery, getAllSessionsQuery, getDivisionsOfARegionQuery, getAllDivisionsQuery, getSubDivisionsOfADivisionQuery, getTownsOfASubDivisionQuery, getCentersOfATownQuery, getAllEducationTypesQuery, getAllSubjectsQuery, getAllRanksQuery, getAllEducTypesOfAnExam, getAllCandidatesQuery, getAllCentersQuery, getSingleRegionQuery, getACenterAdminQuery, getAllCenterAdminsQuery, getAllSeriesQuery, getAllSubDivisionsQuery, getAllSubjectsOfAnEducTypeQuery, getScoreID, singleSeriesQuery, getRegistrations, singleSubjectQuery, singleCandidateQuery1, singleCandidateQuery, viewSingleCandidateQuery, singleCenterQuery, singleCenterAdminQuery, singleExamQuery, singleTownQuery, schoolDataQuery, getAllCenterResultsQuery, singleSessionQuery, singleDivisionQuery, singleSubDivisionQuery, singleSubjectTypeQuery, singleEducationTypeQuery, singleRankQuery, centerExamSessionSeriesForResultsQuery, getAllCandidateRegistrationIDsQuery, getCenterExamSessionSeriesQuery, singleGenderQuery, getExamSessionQuery, getAllSeriesOfACenterExamSessionQuery, getCenterResultsQuery, getCandidateRegistrationIDQuery, getCandidateRegistrationIDsQuery, centerExamSessionForResultsQuery, getCandidateIDQuery, getASingleCenterQuery, getRegisteredCandidateCountQuery, centersPerTownQuery, getSingleCenterQuery, getCandidateResultsQuery, getCenterRegistrationIDsQuery, getCandidateByCandCodeQuery, getSingleCenterExamSessionQuery, getEachCandidateResultsQuery, getCenterIDFromCenterCodeQuery, getRegistrationIDFromRegNumberQuery, centerExamSessionSeriesResultsQuery, dataForAverage, getAllCountrysRegionCreateQuery, getAllPhasesQuery, getAllRegionsQuery, getAllCountrysQuery, singleExaminerQuery, getCESExaminerQuery, getAllTownsQuery, getExaminerRegistrationQuery, getSingleProfQuery, getAllRanksOfAnExamPhaseQuery, getASinglePhaseRankQuery, meQuery, getSingleCenterByCodeQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubjectsOfASeriesQuery", function() { return getAllSubjectsOfASeriesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubjectTypesQuery", function() { return getAllSubjectTypesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllGendersQuery", function() { return getAllGendersQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllEducTypeQuery", function() { return getAllEducTypeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRegionsOfACountryQuery", function() { return getAllRegionsOfACountryQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSeriesOfAnEducationTypeQuery", function() { return getAllSeriesOfAnEducationTypeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllExamsQuery", function() { return getAllExamsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSessionsQuery", function() { return getAllSessionsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDivisionsOfARegionQuery", function() { return getDivisionsOfARegionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllDivisionsQuery", function() { return getAllDivisionsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSubDivisionsOfADivisionQuery", function() { return getSubDivisionsOfADivisionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTownsOfASubDivisionQuery", function() { return getTownsOfASubDivisionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCentersOfATownQuery", function() { return getCentersOfATownQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllEducationTypesQuery", function() { return getAllEducationTypesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubjectsQuery", function() { return getAllSubjectsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRanksQuery", function() { return getAllRanksQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllEducTypesOfAnExam", function() { return getAllEducTypesOfAnExam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCandidatesQuery", function() { return getAllCandidatesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCentersQuery", function() { return getAllCentersQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleRegionQuery", function() { return getSingleRegionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getACenterAdminQuery", function() { return getACenterAdminQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCenterAdminsQuery", function() { return getAllCenterAdminsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSeriesQuery", function() { return getAllSeriesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubDivisionsQuery", function() { return getAllSubDivisionsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubjectsOfAnEducTypeQuery", function() { return getAllSubjectsOfAnEducTypeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScoreID", function() { return getScoreID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleSeriesQuery", function() { return singleSeriesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegistrations", function() { return getRegistrations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleSubjectQuery", function() { return singleSubjectQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleCandidateQuery1", function() { return singleCandidateQuery1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleCandidateQuery", function() { return singleCandidateQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewSingleCandidateQuery", function() { return viewSingleCandidateQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleCenterQuery", function() { return singleCenterQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleCenterAdminQuery", function() { return singleCenterAdminQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleExamQuery", function() { return singleExamQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleTownQuery", function() { return singleTownQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schoolDataQuery", function() { return schoolDataQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCenterResultsQuery", function() { return getAllCenterResultsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleSessionQuery", function() { return singleSessionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleDivisionQuery", function() { return singleDivisionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleSubDivisionQuery", function() { return singleSubDivisionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleSubjectTypeQuery", function() { return singleSubjectTypeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleEducationTypeQuery", function() { return singleEducationTypeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleRankQuery", function() { return singleRankQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerExamSessionSeriesForResultsQuery", function() { return centerExamSessionSeriesForResultsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCandidateRegistrationIDsQuery", function() { return getAllCandidateRegistrationIDsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCenterExamSessionSeriesQuery", function() { return getCenterExamSessionSeriesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleGenderQuery", function() { return singleGenderQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExamSessionQuery", function() { return getExamSessionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSeriesOfACenterExamSessionQuery", function() { return getAllSeriesOfACenterExamSessionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCenterResultsQuery", function() { return getCenterResultsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCandidateRegistrationIDQuery", function() { return getCandidateRegistrationIDQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCandidateRegistrationIDsQuery", function() { return getCandidateRegistrationIDsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerExamSessionForResultsQuery", function() { return centerExamSessionForResultsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCandidateIDQuery", function() { return getCandidateIDQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getASingleCenterQuery", function() { return getASingleCenterQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredCandidateCountQuery", function() { return getRegisteredCandidateCountQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centersPerTownQuery", function() { return centersPerTownQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleCenterQuery", function() { return getSingleCenterQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCandidateResultsQuery", function() { return getCandidateResultsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCenterRegistrationIDsQuery", function() { return getCenterRegistrationIDsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCandidateByCandCodeQuery", function() { return getCandidateByCandCodeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleCenterExamSessionQuery", function() { return getSingleCenterExamSessionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEachCandidateResultsQuery", function() { return getEachCandidateResultsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCenterIDFromCenterCodeQuery", function() { return getCenterIDFromCenterCodeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegistrationIDFromRegNumberQuery", function() { return getRegistrationIDFromRegNumberQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerExamSessionSeriesResultsQuery", function() { return centerExamSessionSeriesResultsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataForAverage", function() { return dataForAverage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCountrysRegionCreateQuery", function() { return getAllCountrysRegionCreateQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPhasesQuery", function() { return getAllPhasesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRegionsQuery", function() { return getAllRegionsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCountrysQuery", function() { return getAllCountrysQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleExaminerQuery", function() { return singleExaminerQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCESExaminerQuery", function() { return getCESExaminerQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllTownsQuery", function() { return getAllTownsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExaminerRegistrationQuery", function() { return getExaminerRegistrationQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleProfQuery", function() { return getSingleProfQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRanksOfAnExamPhaseQuery", function() { return getAllRanksOfAnExamPhaseQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getASinglePhaseRankQuery", function() { return getASinglePhaseRankQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meQuery", function() { return meQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleCenterByCodeQuery", function() { return getSingleCenterByCodeQuery; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject77() {
  var data = _taggedTemplateLiteral(["\n  query singleSessionQuery($id: ID!) {\n    session(id: $id) {\n      sessionName\n      sessionCode\n      id\n    }\n  }\n"]);

  _templateObject77 = function _templateObject77() {
    return data;
  };

  return data;
}

function _templateObject76() {
  var data = _taggedTemplateLiteral(["\n  query singleSubjectQuery($id: ID!) {\n    subject(id: $id) {\n      subjectName\n      subjectCode\n      id\n    }\n  }\n"]);

  _templateObject76 = function _templateObject76() {
    return data;
  };

  return data;
}

function _templateObject75() {
  var data = _taggedTemplateLiteral(["\n  query singleRankQuery($id: ID!) {\n    rank(id: $id) {\n      rankName\n      rankCode\n      id\n    }\n  }\n"]);

  _templateObject75 = function _templateObject75() {
    return data;
  };

  return data;
}

function _templateObject74() {
  var data = _taggedTemplateLiteral(["\n  query singleDivisionQuery($id: ID!) {\n    division(id: $id) {\n      divName\n      divCode\n      id\n    }\n  }\n"]);

  _templateObject74 = function _templateObject74() {
    return data;
  };

  return data;
}

function _templateObject73() {
  var data = _taggedTemplateLiteral(["\n  query dataForAverage($candExamSecretCode: String!) {\n    scores(candExamSecretCode: $candExamSecretCode) {\n      id\n      subjectAve\n      coeff\n    }\n  }\n"]);

  _templateObject73 = function _templateObject73() {
    return data;
  };

  return data;
}

function _templateObject72() {
  var data = _taggedTemplateLiteral(["\n  query singleCenterAdminQuery($id: ID!) {\n    centerAdmin(id: $id) {\n      centerAdminName\n      centerAdminCode\n      id\n    }\n  }\n"]);

  _templateObject72 = function _templateObject72() {
    return data;
  };

  return data;
}

function _templateObject71() {
  var data = _taggedTemplateLiteral(["\n  query singleSeriesQuery($id: ID!) {\n    series(id: $id) {\n      seriesName\n      seriesCode\n      id\n    }\n  }\n"]);

  _templateObject71 = function _templateObject71() {
    return data;
  };

  return data;
}

function _templateObject70() {
  var data = _taggedTemplateLiteral(["\n  query singleGenderQuery($id: ID!) {\n    gender(id: $id) {\n      genderName\n      genderCode\n      id\n    }\n  }\n"]);

  _templateObject70 = function _templateObject70() {
    return data;
  };

  return data;
}

function _templateObject69() {
  var data = _taggedTemplateLiteral(["\n  query getSingleRegionQuery($id: ID!) {\n    region(id: $id) {\n      regName\n      regCode\n      id\n    }\n  }\n"]);

  _templateObject69 = function _templateObject69() {
    return data;
  };

  return data;
}

function _templateObject68() {
  var data = _taggedTemplateLiteral(["\n  query singleSubDivisionQuery($id: ID!) {\n    subDivision(id: $id) {\n      subDivName\n      subDivCode\n      id\n    }\n  }\n"]);

  _templateObject68 = function _templateObject68() {
    return data;
  };

  return data;
}

function _templateObject67() {
  var data = _taggedTemplateLiteral(["\n  query getRegistrations($candExamSecretCode: String!) {\n    registration(candExamSecretCode: $candExamSecretCode) {\n      id\n      scores {\n        id\n        subject(orderBy: subjectName_ASC) {\n          id\n          subjectName\n        }\n      }\n    }\n  }\n"]);

  _templateObject67 = function _templateObject67() {
    return data;
  };

  return data;
}

function _templateObject66() {
  var data = _taggedTemplateLiteral(["\n  query getScoreID($candExamSecretCode: String!) {\n    scores(candExamSecretCode: $candExamSecretCode) {\n      id\n    }\n  }\n"]);

  _templateObject66 = function _templateObject66() {
    return data;
  };

  return data;
}

function _templateObject65() {
  var data = _taggedTemplateLiteral(["\n  query viewSingleCandidateQuery($candCode: String!) {\n    singleCandidate(candCode: $candCode) {\n      id\n      dateOfBirth\n      cand1stName\n      cand2ndName\n      cand3rdName\n      candCode\n      momName\n      dadName\n      email\n      image\n      phoneNumb\n      birthCertNumber\n      placeOfBirth\n      gender {\n        id\n        genderName\n      }\n    }\n  }\n"]);

  _templateObject65 = function _templateObject65() {
    return data;
  };

  return data;
}

function _templateObject64() {
  var data = _taggedTemplateLiteral(["\n  query singleExaminerQuery($id: ID!) {\n    examiner(id: $id) {\n      id\n      examiner1stName\n      examiner2ndName\n      examinerOtherNames\n      examinerCode\n      examinerEmail\n      examinerImage\n      examinerPhone\n      examinerMatricule\n      examinerCNI\n      \n    }\n  }\n"]);

  _templateObject64 = function _templateObject64() {
    return data;
  };

  return data;
}

function _templateObject63() {
  var data = _taggedTemplateLiteral(["\n  query singleCandidateQuery($id: ID!) {\n    candidate(id: $id) {\n      id\n      dateOfBirth\n      cand1stName\n      cand2ndName\n      cand3rdName\n      candCode  \n      dadName\n      momName\n      email\n      image\n      phoneNumb\n      birthCertNumber\n      placeOfBirth\n      gender {\n        id\n        genderName\n      }\n    }\n  }\n"]);

  _templateObject63 = function _templateObject63() {
    return data;
  };

  return data;
}

function _templateObject62() {
  var data = _taggedTemplateLiteral(["\n  query singleCandidateQuery1($id: ID!) {\n    candidate(id: $id) {\n      cand1stName\n      cand2ndName\n      cand3rdName\n      dadName\n      momName\n      candCode\n      email\n      image\n      phoneNumb\n      placeOfBirth\n      id\n    }\n  }\n"]);

  _templateObject62 = function _templateObject62() {
    return data;
  };

  return data;
}

function _templateObject61() {
  var data = _taggedTemplateLiteral(["\n  query singleExamQuery($id: ID!) {\n    exam(id: $id) {\n      examName\n      examCode\n      id\n    }\n  }\n"]);

  _templateObject61 = function _templateObject61() {
    return data;
  };

  return data;
}

function _templateObject60() {
  var data = _taggedTemplateLiteral(["\n  query getExamSessionQuery(\n    $exam: ExamWhereUniqueInput!\n    $session: SessionWhereUniqueInput!\n  ) {\n    examSessions(session: $session, exam: $exam) {\n      id\n\n    }\n  }\n"]);

  _templateObject60 = function _templateObject60() {
    return data;
  };

  return data;
}

function _templateObject59() {
  var data = _taggedTemplateLiteral(["\n  query getCenterExamSessionSeriesQuery(\n    $centerExamSession: CenterExamSessionWhereUniqueInput!\n    $series: SeriesWhereUniqueInput!\n  ) {\n    centerExamSessionSerieses(series: $series, centerExamSession: $centerExamSession) {\n      id\n\n    }\n  }\n"]);

  _templateObject59 = function _templateObject59() {
    return data;
  };

  return data;
}

function _templateObject58() {
  var data = _taggedTemplateLiteral(["\n  query getRegisteredCandidateCountQuery($id: ID!)\n {\n    registrationsConnection(id: $id) {\n     aggregate{\n       count\n     }\n    }\n  }\n"]);

  _templateObject58 = function _templateObject58() {
    return data;
  };

  return data;
}

function _templateObject57() {
  var data = _taggedTemplateLiteral(["\n  query getAllRanksOfAnExamPhaseQuery($id: ID!) {\n    phase(id: $id) {\n      id\n      phaseRank{\n             id\n          rankName\n          rankCode\n      }\n    }\n  }\n"]);

  _templateObject57 = function _templateObject57() {
    return data;
  };

  return data;
}

function _templateObject56() {
  var data = _taggedTemplateLiteral(["\n  query getSingleCenterExamSessionQuery(\n    $center: CenterWhereUniqueInput!\n    $examSession: ExamSessionWhereUniqueInput!\n  ) {\n    centerExamSessionsByCode(examSession: $examSession, center: $center) {\n      id\n    }\n  }\n"]);

  _templateObject56 = function _templateObject56() {
    return data;
  };

  return data;
}

function _templateObject55() {
  var data = _taggedTemplateLiteral(["\n  query singleTownQuery($id: ID!) {\n    town(id: $id) {\n      townName\n      townCode\n      id\n    }\n  }\n"]);

  _templateObject55 = function _templateObject55() {
    return data;
  };

  return data;
}

function _templateObject54() {
  var data = _taggedTemplateLiteral(["\n  query getASingleCenterQuery($centerNumber: Int!) {\n    centerByNumber(centerNumber:  $centerNumber) {\n      centerNumber\n      centerName\n      centerCode\n      id\n    }\n  }\n"]);

  _templateObject54 = function _templateObject54() {
    return data;
  };

  return data;
}

function _templateObject53() {
  var data = _taggedTemplateLiteral(["\n  query getSingleCenterByCodeQuery($centerSecretCode: String!) {\n    getCenterByCode(centerSecretCode:  $centerSecretCode) {\n      id\n      centerCode\n     \n    }\n  }\n"]);

  _templateObject53 = function _templateObject53() {
    return data;
  };

  return data;
}

function _templateObject52() {
  var data = _taggedTemplateLiteral(["\n  query getSingleProfQuery($authCode: String!) {\n   profByAuthCode(authCode:  $authCode) {\n     authCode\n      id\n      auth1stName\n    }\n  }\n"]);

  _templateObject52 = function _templateObject52() {
    return data;
  };

  return data;
}

function _templateObject51() {
  var data = _taggedTemplateLiteral(["\n  query getSingleCenterQuery($centerNumber: Int!) {\n    centerByNumber(centerNumber:  $centerNumber) {\n      id\n      centerNumber\n      centerCode\n    }\n  }\n"]);

  _templateObject51 = function _templateObject51() {
    return data;
  };

  return data;
}

function _templateObject50() {
  var data = _taggedTemplateLiteral(["\n  query singleCenterQuery($id: ID!) {\n    center(id: $id) {\n      centerName\n      centerNumber\n      centerCode\n      id\n    }\n  }\n"]);

  _templateObject50 = function _templateObject50() {
    return data;
  };

  return data;
}

function _templateObject49() {
  var data = _taggedTemplateLiteral(["\n  query getAllCandidatesQuery {\n    candidates(orderBy: cand1stName_ASC) {\n      cand1stName\n      cand2ndName\n      cand3rdName\n      email\n      image\n      phoneNumb\n      placeOfBirth\n      candCode\n      id\n    }\n  }\n"]);

  _templateObject49 = function _templateObject49() {
    return data;
  };

  return data;
}

function _templateObject48() {
  var data = _taggedTemplateLiteral(["\n  query getAllCentersQuery {\n    centers(orderBy: centerName_ASC) {\n      id\n      centerName\n      centerCode\n    }\n  }\n"]);

  _templateObject48 = function _templateObject48() {
    return data;
  };

  return data;
}

function _templateObject47() {
  var data = _taggedTemplateLiteral(["\n  query getAllSubjectTypesQuery {\n    subjectTypes(orderBy: subjectTypeName_DESC) {\n      id\n      subjectTypeName\n      subjectTypeCode\n    }\n  }\n"]);

  _templateObject47 = function _templateObject47() {
    return data;
  };

  return data;
}

function _templateObject46() {
  var data = _taggedTemplateLiteral(["\n  query centersPerTownQuery($id: ID!) {\n    town(id: $id) {\n      townName\n      id\n      center(orderBy: centerName_ASC) {\n        centerName\n        centerNumber\n        centerSecretCode\n        centerCode\n        id\n      }\n    }\n  }\n"]);

  _templateObject46 = function _templateObject46() {
    return data;
  };

  return data;
}

function _templateObject45() {
  var data = _taggedTemplateLiteral(["\n  query getCentersOfATownQuery($id: ID!) {\n    town(id: $id) {\n      townName\n      id\n      center(orderBy: centerName_ASC) {\n        centerName\n        centerCode\n        id\n      }\n    }\n  }\n"]);

  _templateObject45 = function _templateObject45() {
    return data;
  };

  return data;
}

function _templateObject44() {
  var data = _taggedTemplateLiteral(["\n  query getTownsOfASubDivision($id: ID!) {\n    subDivision(id: $id) {\n      subDivName\n      id\n      town(orderBy: townName_ASC) {\n        townName\n        townCode\n        id\n      }\n    }\n  }\n"]);

  _templateObject44 = function _templateObject44() {
    return data;
  };

  return data;
}

function _templateObject43() {
  var data = _taggedTemplateLiteral(["\n  query getAllTownsQuery {\n    towns(orderBy: townName_ASC) {\n      townName\n      townCode\n      id\n    }\n  }\n"]);

  _templateObject43 = function _templateObject43() {
    return data;
  };

  return data;
}

function _templateObject42() {
  var data = _taggedTemplateLiteral(["\n  query getAllSubDivisionsQuery {\n    subDivision(orderBy: subDivName_ASC) {\n      subDivName\n      subDivCode\n      id\n    }\n  }\n"]);

  _templateObject42 = function _templateObject42() {
    return data;
  };

  return data;
}

function _templateObject41() {
  var data = _taggedTemplateLiteral(["\n  query getSubDivisionsOfADivisionQuery($id: ID!) {\n    division(id: $id) {\n      divName\n      id\n      subDivision(orderBy: subDivName_ASC) {\n        subDivName\n        subDivCode\n        id\n      }\n    }\n  }\n"]);

  _templateObject41 = function _templateObject41() {
    return data;
  };

  return data;
}

function _templateObject40() {
  var data = _taggedTemplateLiteral(["\n  query getDivisionsOfARegionQuery($id: ID!) {\n    region(id: $id) {\n      regName\n      id\n      division(orderBy: divName_ASC) {\n        divName\n        divCode\n        id\n      }\n    }\n  }\n"]);

  _templateObject40 = function _templateObject40() {
    return data;
  };

  return data;
}

function _templateObject39() {
  var data = _taggedTemplateLiteral(["\n  query getAllDivisionsQuery {\n    divisions(orderBy: divName_ASC) {\n      divName\n      divCode\n      id\n    }\n  }\n"]);

  _templateObject39 = function _templateObject39() {
    return data;
  };

  return data;
}

function _templateObject38() {
  var data = _taggedTemplateLiteral(["\n  query getAllSessionsQuery {\n    sessions(orderBy: createdAt_DESC) {\n      sessionName\n      sessionCode\n      id\n    }\n  }\n"]);

  _templateObject38 = function _templateObject38() {
    return data;
  };

  return data;
}

function _templateObject37() {
  var data = _taggedTemplateLiteral(["\n  query getAllExamsQuery {\n    exams(orderBy: examName_ASC) {\n      examName\n      examCode\n      id\n    }\n  }\n"]);

  _templateObject37 = function _templateObject37() {
    return data;
  };

  return data;
}

function _templateObject36() {
  var data = _taggedTemplateLiteral(["\n  query getAllSubjectsOfASeriesQuery($id: ID!) {\n    series(id: $id) {\n      id\n      seriesName\n      subjectSeries {\n        id\n        subjectName\n        subjectCode\n      }\n    }\n  }\n"]);

  _templateObject36 = function _templateObject36() {
    return data;
  };

  return data;
}

function _templateObject35() {
  var data = _taggedTemplateLiteral(["\n  query getAllSubjectsOfAnEducTypeQuery($id: ID!) {\n    educationType(id: $id) {\n      id\n      educationTypeName\n      subject(orderBy: subjectName_ASC) {\n        id\n        subjectName\n        subjectCode\n      }\n    }\n  }\n"]);

  _templateObject35 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34() {
  var data = _taggedTemplateLiteral(["\n  query getAllSeriesQuery {\n    serieses(orderBy: seriesName_ASC) {\n      id\n      seriesName\n      seriesCode\n    }\n  }\n"]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33() {
  var data = _taggedTemplateLiteral(["\n  query getAllSeriesOfACenterExamSessionQuery($id: ID!) {\n    centerExamSession(id: $id) {\n      id\n      centerExamSessionSeries{\n      series {\n        id\n        seriesName\n        seriesCode\n      }\n    }}\n  }\n"]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = _taggedTemplateLiteral(["\n  query getAllSeriesOfAnEducationTypeQuery($id: ID!) {\n    educationType(id: $id) {\n      id\n      educationTypeName\n      series(orderBy: seriesName_ASC) {\n        id\n        seriesName\n        seriesCode\n      }\n    }\n  }\n"]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = _taggedTemplateLiteral(["\n  query getAllGendersQuery {\n    genders(orderBy: genderName_ASC) {\n      id\n      genderName\n      genderCode\n    }\n  }\n"]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["\n  query getAllSubjectsQuery {\n    subjects(orderBy: subjectName_ASC) {\n      subjectName\n      subjectCode\n      id\n    }\n  }\n"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral(["\n  query getAllPhasesQuery {\n  phases(orderBy:phaseName_ASC) {\n    phaseName\n    phaseCode\n      id\n    }\n  }\n"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["\n  query getAllRanksQuery {\n    ranks(orderBy: rankName_ASC) {\n      rankName\n      rankCode\n      id\n    }\n  }\n"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n  query getCandidateByCandCodeQuery($candCode: String!) {\n    getCandidateByCode(candCode: $candCode) {\n      id\n      cand1stName\n      candCode\n      dateOfBirth\n      placeOfBirth\n    }\n  }\n"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n  query centerExamSessionSeriesResultsQuery($id: ID !) {\n    centerExamSessionSeries(id: $id) {\n      id\n      centerExamSession{\n                 id\n                center{\n                  id\n                  centerName\n                  centerCode\n                }\n               examSession{\n               exam{\n                 id\n                 examName\n               }\n               session{\n                 id\n                 sessionName\n               }\n               }}\n         \n          \n            series{\n              id\n              seriesName\n              seriesCode\n            }\n             registration{\n               id\n               candRegistrationNumber\n               candExamSecretCode\n               candidate{\n            id\n            cand1stName\n            cand2ndName\n            cand3rdName\n            dateOfBirth\n            placeOfBirth\n            email\n            phoneNumb\n            gender{\n              id\n              genderName\n            }\n\n               }\n               scores{\n                 id\n                 subjectAve\n\n               }\n             }\n    }\n  }\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n  query centerExamSessionForResultsQuery($id: ID !) {\n    centerExamSession(id: $id) {\n      id\n      center{\n                 id\n                 centerName\n                 centerCode\n               }\n               examSession{\n               exam{\n                 id\n                 examName\n               }\n               session{\n                 id\n                 sessionName\n               }}\n           centerExamSessionSeries{\n             id\n            series{\n              id\n              seriesName\n              seriesCode\n            }\n             registration{\n               id\n               candRegistrationNumber\n               candExamSecretCode\n               candidate{\n            id\n            cand1stName\n            cand2ndName\n            cand3rdName\n            dateOfBirth\n            placeOfBirth\n            email\n            phoneNumb\n            gender{\n              id\n              genderName\n            }\n\n               }\n               scores{\n                 id\n                 subjectAve\n\n               }\n             }\n           }\n       \n    }\n  }\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n  query centerExamSessionSeriesForResultsQuery($centerExamSession: String !) {\n    centerExamSessionSeriesForResults(centerExamSession: $centerExamSession) {\n      id\n      series{\n        id\n        seriesName\n      }\n      \n    }\n  }\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n  query getCenterRegistrationIDsQuery(\n    $exam: ExamWhereUniqueInput!\n    $center: CenterWhereUniqueInput!\n    $session: SessionWhereUniqueInput!\n  ) {\n    centerRegistrationIDs(exam: $exam, center: $center, session: $session) {\n      id\n    }\n  }\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  query getCenterIDFromCenterCodeQuery($centerCode: String!) {\n    centerByCode(centerCode: $centerCode) {\n      id\n    }\n  }\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  query getRegistrationIDFromRegNumberQuery(\n    $candRegistrationNumber: String!\n  ) {\n    candidateRegistrationNumber(candRegistrationNumber: $candRegistrationNumber) {\n     id\n     candidate{\n      id\n      cand1stName\n      cand2ndName\n      cand3rdName\n      placeOfBirth\n      dateOfBirth\n      image\n      momName\n      dadName\n      email\n      gender{\nid\ngenderName\n      }\n      registration{\n        id\n     \n        centerExamSessionSeries{\n          id\n         series{\n           id\n           seriesName\n         }\n         centerExamSession{\n          center{\n            id\n            centerName\n          }\n          examSession{\n            id\n            exam{\n              id\n              examName\n            }\n            session{\n              id\n              sessionName\n            }\n          }\n        }\n       \n        }\n        scores {\n        id\n        subjectAve\n        coeff\n        subjectSeries {\n          id\n          subjectName\n        }\n      }\n        }\n        }\n        }\n    }\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  query getCandidateIDQuery(\n    $candCode: String!\n  ) {\n    candidateCode(candCode: $candCode) {\n      id\n    }\n  }\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  query getAllCandidateRegistrationIDsQuery($id: ID!  ) {\n    candidate( id: $id) {\n      id\n      cand1stName\n      cand2ndName\n      cand3rdName\n      placeOfBirth\n      dateOfBirth\n      image\n      momName\n      dadName\n      email\n      gender{\nid\ngenderName\n      }\n      registration{\n        id\n     \n        centerExamSessionSeries{\n          id\n         series{\n           id\n           seriesName\n         }\n         centerExamSession{\n          center{\n            id\n            centerName\n          }\n          examSession{\n            id\n            exam{\n              id\n              examName\n            }\n            session{\n              id\n              sessionName\n            }\n          }\n        }\n       \n        }\n        scores {\n        id\n        subjectAve\n        coeff\n        subjectSeries {\n          id\n          subjectName\n        }\n      }\n        }\n      id\n      \n    }\n  }\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  query getCandidateRegistrationIDsQuery($candidate: RegistrationWhereInput!  ) {\n    candidateRegistrationIDs(candidate: $candidate) {\n      id\n      \n    }\n  }\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  query getCandidateRegistrationIDQuery(\n    $centerExamSession: CenterExamSessionWhereUniqueInput!\n    $candidate: CandidateWhereUniqueInput!\n  ) {\n    candidateRegistrationID(centerExamSession: $centerExamSession, candidate: $candidate) {\n      id\n      \n    }\n  }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  query getEachCandidateResultsQuery($id: ID!) {\n    registration(id: $id) {\n      id\n      candidate {\n        cand1stName\n        cand2ndName\n        cand3rdName\n        momName\n        dadName\n        email\n        dateOfBirth\n        gender {\n          genderName\n        }\n      }\n      exam {\n        examName\n      }\n      session {\n        sessionName\n      }\n      series {\n        id\n        seriesName\n      }\n      center {\n        centerName\n      }\n    }\n  }\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  query getAllCenterResultsQuery($centerExamSession: String!) {\n    centerExamSessionSeriesForResults(centerExamSession: $centerExamSession) {\n      id\n      series{\n        id\n        seriesName\n        subjectSeries {\n          id\n          subjectName\n        }\n      }\n     registration{\n       id\n       candidate{\n         cand1stName\n         id\n       }\n      scores {\n        id\n        subjectAve\n        coeff\n        subjectSeries {\n          id\n          subjectName\n        }\n      }\n     }\n   }\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  query getExaminerRegistrationQuery($id: ID!) {\n    centerExamSessionExaminer(id: $id) {\n      id\n      examiner{\n        examiner1stName\n        examiner2ndName\n        examinerOtherNames\n        examinerMatricule\n        examinerPhone\n        examinerCNI\n        examinerImage\n        examinerEmail\n        gender {\n          genderName\n        }\n      }\n      centerExamSession{\n        id \n      examSession {\n       id\n        exam{\n          id \n          examName\n        }\n        session{\n          id\n          sessionName\n      }}\n      center {\n        id\n        centerName\n      }\n      \n      }\n      phaseRank {\n        id\n        rankName\n      }\n    }\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  query getCandidateResultsQuery($id: ID!) {\n    registration(id: $id) {\n      id\n      createdAt\n      candRegistrationNumber\n      \n      candidate {\n        cand1stName\n        cand2ndName\n        cand3rdName\n        momName\n        dadName\n        placeOfBirth\n        image\n        email\n        dateOfBirth\n        gender {\n          genderName\n        }\n      }\n      centerExamSessionSeries {\n      centerExamSession{\n        id \n      examSession {\n       id\n        exam{\n          id \n          examName\n        }\n        session{\n          id\n          sessionName\n        }\n      }\n      center {\n        id\n        centerName\n      }}\n      series {\n        id\n        seriesName\n        subjectSeries {\n          id\n          subjectName\n        }\n      }\n      }\n      scores {\n        id\n        subjectAve\n        coeff\n        subjectSeries  {\n          id\n          subjectName\n        }\n      }\n    }\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  query getCenterResultsQuery(\n    $exam: ExamWhereUniqueInput!\n    $center: CenterWhereUniqueInput!\n    $session: SessionWhereUniqueInput!\n  ) {\n    getResultsPerCenter(exam: $exam, center: $center, session: $session) {\n      id\n      candidate {\n        cand1stName\n        cand2ndName\n        cand3rdName\n        placeOfBirth\n        email\n        dateOfBirth\n        gender {\n          genderName\n        }\n      }\n      exam {\n        examName\n      }\n      session {\n        sessionName\n      }\n      center {\n        centerName\n      }\n      scores {\n        subjectAve\n        coeff\n        subjectSeries {\n          subjectName\n          series {\n            id\n            seriesName\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  query getAllCountrysRegionCreateQuery {\n    countries(orderBy:countryName_ASC) {\n           id\n    }\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  query getAllCountrysQuery {\n    countries(orderBy:countryName_ASC) {\n      countryName\n      countryCode\n      id\n    }\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  query getAllRegionsQuery {\n      regions{\n       regName\n      regCode\n      id\n  }}\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  query getAllRegionsOfACountryQuery($id: ID!) {\n    country(id: $id) {\n      id\n      region(orderBy: regName_ASC){\n       regName\n      regCode\n      id\n      }\n    }\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  query getAllEducationTypesQuery {\n    educationTypes(orderBy: educationTypeName_ASC) {\n      id\n      educationTypeName\n      educationTypeCode\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  query getAllCenterAdminsQuery {\n    centerAdmins {\n      id\n      authName\n      authCode\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  query singleSubjectTypeQuery($id: ID!) {\n    subjectType(id: $id) {\n      subjectTypeName\n      subjectTypeCode\n      id\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  query getCESExaminerQuery(\n    $examiner: ExaminerWhereUniqueInput!,\n     $centerExamSession:CenterExamSessionWhereUniqueInput!) {\n    getCenterExamSessionExaminers(\n      examiner: $examiner, \n      centerExamSession:$centerExamSession  ) {\n     \n      id\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  query singleEducationTypeQuery($id: ID!) {\n    educationType(id: $id) {\n      educationTypeName\n      educationTypeCode\n      id\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  query meQuery {\n    me {\n      id\n     email\n     name \n     password\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query getACenterAdminQuery($authCode: String!) {\n    centerAdminSignIn(authCode: $authCode) {\n      id\n      authCode\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var getACenterAdminQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject());
var meQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject2());
var singleEducationTypeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject3());
var getCESExaminerQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject4());
var singleSubjectTypeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject5());
var getAllCenterAdminsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject6());
var getAllEducationTypesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject7());
var getAllRegionsOfACountryQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject8());
var getAllRegionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject9());
var getAllCountrysQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject10());
var getAllCountrysRegionCreateQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject11());
var getCenterResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject12());
var getCandidateResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject13());
var getExaminerRegistrationQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject14());
var getAllCenterResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject15());
var getEachCandidateResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject16());
var getCandidateRegistrationIDQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject17());
var getCandidateRegistrationIDsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject18());
var getAllCandidateRegistrationIDsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject19());
var getCandidateIDQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject20());
var getRegistrationIDFromRegNumberQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject21());
var getCenterIDFromCenterCodeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject22());
var getCenterRegistrationIDsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject23());
var centerExamSessionSeriesForResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject24());
var centerExamSessionForResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject25());
var centerExamSessionSeriesResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject26());
var getCandidateByCandCodeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject27());
var getAllRanksQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject28());
var getAllPhasesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject29());
var getAllSubjectsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject30());
var getAllGendersQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject31());
var getAllSeriesOfAnEducationTypeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject32());
var getAllSeriesOfACenterExamSessionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject33());
var getAllSeriesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject34());
var getAllSubjectsOfAnEducTypeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject35());
var getAllSubjectsOfASeriesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject36());
var getAllExamsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject37());
var getAllSessionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject38());
var getAllDivisionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject39());
var getDivisionsOfARegionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject40());
var getSubDivisionsOfADivisionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject41());
var getAllSubDivisionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject42());
var getAllTownsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject43());
var getTownsOfASubDivisionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject44());
var getCentersOfATownQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject45());
var centersPerTownQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject46());
var getAllSubjectTypesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject47());
var getAllCentersQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject48());
var getAllCandidatesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject49()); ///*****************Single object queries */

var singleCenterQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject50());
var getSingleCenterQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject51());
var getSingleProfQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject52());
var getSingleCenterByCodeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject53());
var getASingleCenterQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject54());
var singleTownQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject55());
var getSingleCenterExamSessionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject56());
var getAllRanksOfAnExamPhaseQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject57());
var getRegisteredCandidateCountQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject58());
var getCenterExamSessionSeriesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject59());
var getExamSessionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject60());
var singleExamQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject61());
var singleCandidateQuery1 = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject62());
var singleCandidateQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject63());
var singleExaminerQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject64());
var viewSingleCandidateQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject65());
var getScoreID = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject66());
var getRegistrations = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject67());
var singleSubDivisionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject68());
var getSingleRegionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject69());
var singleGenderQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject70());
var singleSeriesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject71());
var singleCenterAdminQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject72());
var dataForAverage = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject73());
var singleDivisionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject74());
var singleRankQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject75());
var singleSubjectQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject76());
var singleSessionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject77()); ///*****************End Single object queries */



/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next-with-apollo":
/*!***********************************!*\
  !*** external "next-with-apollo" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-with-apollo");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map