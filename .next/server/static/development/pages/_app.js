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
var endpoint = "http://localhost:50000"; // export const perPage = 6;
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

var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\pages\\_app.js";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var MyApp = /*#__PURE__*/function (_App) {
  _inherits(MyApp, _App);

  var _super = _createSuper(MyApp);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _super.apply(this, arguments);
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
      var _getInitialProps = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
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
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_2___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withData__WEBPACK_IMPORTED_MODULE_6__["default"])(MyApp));

/***/ }),

/***/ "./src/components/ErrorMessage.js":
/*!****************************************!*\
  !*** ./src/components/ErrorMessage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\ErrorMessage.js";



var ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-3nz6rx-0"
})(["padding:0.5rem;background:", ";margin:0 1.1rem;border-radius:0.5rem;border:0.04rem solid rgba(0,0,0,0.05);border-left:0.05rem solid red;p{margin:0;font-size:1.2rem;font-weight:normal;}strong{font-size:1.6rem;font-weight:normal;margin-right:0.15rem;}"], function (props) {
  return props.theme.grey[2];
});

var DisplayError = function DisplayError(_ref) {
  var error = _ref.error;
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map(function (error, i) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        "data-test": "graphql-error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Probleme de reseaux!"), error.message.replace("Graphql error: ", "")));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    "data-test": "graphql-error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Erreure !"), error.message.replace("Graphql error: ", "")));
};

DisplayError.defaultProps = {
  error: {}
};
DisplayError.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayError);

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
var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\Footer.jsx";


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
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "SYGEFEX"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, " \u24B8 Copyright"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
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
/* harmony import */ var _user_User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/User */ "./src/components/user/User.jsx");
var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\Header.jsx";









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
var MeMenu = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "Header__MeMenu",
  componentId: "sc-1ozje8u-1"
})(["display:grid;grid-template-columns:auto 1fr;grid-gap:2rem;"]);

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_User__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, function (_ref) {
    var me = _ref.data.me;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHeader, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "navigation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "subBar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/creates/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, "SYGEFEX"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "burger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mega_menu_Burger__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }))), me && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "megaMenu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MeMenu, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, me.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mega_menu_MegaMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }))), !me));
  });
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
var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\Meta.jsx";



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
var _theme,
    _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\Page.jsx";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n\n\n/* roboto-slab-regular - latin */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: bold;\n  font-weight: 400;\n  src: url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-regular.eot'); /* IE9 Compat Modes */\n  src: local(''),\n       url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n       url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */\n       url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-regular.woff') format('woff'), /* Modern Browsers */\n       url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */\n       url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-regular.svg#RobotoSlab') format('svg'); /* Legacy iOS */\n}\n\n\n\n/* roboto-slab-200 - latin */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 200;\n  src: url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-200.eot'); /* IE9 Compat Modes */\n  src: local(''),\n       url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-200.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n       url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-200.woff2') format('woff2'), /* Super Modern Browsers */\n       url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-200.woff') format('woff'), /* Modern Browsers */\n       url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-200.ttf') format('truetype'), /* Safari, Android, iOS */\n       url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-200.svg#RobotoSlab') format('svg'); /* Legacy iOS */\n}\n\n/* roboto-slab-500 - latin */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 500;\n  src: url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-500.eot'); /* IE9 Compat Modes */\n  src: local(''),\n       url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n       url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-500.woff2') format('woff2'), /* Super Modern Browsers */\n       url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-500.woff') format('woff'), /* Modern Browsers */\n       url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */\n       url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-500.svg#RobotoSlab') format('svg'); /* Legacy iOS */\n}\n\n\n\n  html {\n    box-sizing: border-box;\n    font-size: 11px;\n  }\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  \n  body\n{\n    padding:0;\n    margin: 0;\n    font-size: 2rem;\n    font-family: \"Roboto Slab\";\n    font-weight: 500;\n    font-style: normal;\n   \n  button {  font-family: 'Roboto Slab'; }\n\n}\n\nh1, h2, h3, h4, h5, h6 {\n    font-family: \"Roboto Slab\";\n    font-size:2rem;\n    font-weight: 500;\n    font-style: bold;\n}\n\na\n{\n    font-family: \"Roboto Slab\";\n    font-weight: 400;\n    font-size:1.5rem;\n    font-style: italic;\n    text-decoration: none;\n    color: ", ";\n    :hover {\n  text-decoration: underline;\n}\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var theme = (_theme = {
  maxWidth: "1000px",
  quarterBB: " #003c96",
  lightestBB: "#b3b4d1",
  britishRed: "#d4351c",
  complementaryBB: "#784800",
  complementaryBB1: "#007860",
  complementaryBB2: "#006078",
  complementaryColours: "#456abc",
  complementaryBB3: "#007078",
  americanBlue: "#1d70b8",
  britishBlue: "#003078",
  britishLightBlue: "#1d70b8",
  red: "#FF0000",
  googleBlue: "#359",
  black: "#393939",
  goldenYellow: "#f2ab02",
  gold: "#D4AF37",
  goldRod: "#DAA520",
  tableBackgrd: "#fafad2",
  specialBlue: "#e5f5f9",
  grey: "#aaabaa",
  slightGrey: "rgb(243, 241, 241)",
  lightGrey: "#E1E1E1",
  darkGrey: "#EEEEEE",
  pureWhite: "#FFFFFF",
  offWhite: "#EDEDED",
  primary: "#00ab80",
  black2: "#4a4a4a",
  white3: "#ffffff",
  error: "#e05666",
  brownishRed: "#fo7031",
  coolBlue: "#195e83",
  coolerBlue: "#136ea5",
  sand: "#eea549",
  reddishBrown: "#f57836",
  buff: "#edb879",
  warna: "#E2DD9F",
  deem: "#E7e3af",
  deemer: "#Edcb79",
  bootstrapBlue: "#007bff",
  indigo: "#6610f2",
  purple: "#6f42c1",
  pink: "#e83e8c"
}, _defineProperty(_theme, "red", "#dc3545"), _defineProperty(_theme, "orange", "#fd7e14"), _defineProperty(_theme, "yellow", "#ffc107"), _defineProperty(_theme, "green", "#28a745"), _defineProperty(_theme, "teal", "#20c997"), _defineProperty(_theme, "cyan", "#17a2b8"), _defineProperty(_theme, "white", "#fff"), _defineProperty(_theme, "gray", "#6c757d"), _defineProperty(_theme, "darkGray", "#343a40"), _defineProperty(_theme, "primary", "#007bff"), _defineProperty(_theme, "secondary", "#6c757d"), _defineProperty(_theme, "success", "#28a745"), _defineProperty(_theme, "info", "#17a2b8"), _defineProperty(_theme, "warning", "#ffc107"), _defineProperty(_theme, "danger", "#dc3545"), _defineProperty(_theme, "light", "#f8f9fa"), _defineProperty(_theme, "dark", "#343a40"), _defineProperty(_theme, "tableRed", "#c2463c"), _defineProperty(_theme, "darkRed", "#a2463c"), _defineProperty(_theme, "slightDarkRed", "#b2463c"), _defineProperty(_theme, "brightDarkRed", "#c2463c"), _defineProperty(_theme, "darkDarkRed", "#d2463c"), _defineProperty(_theme, "lightDarkRed", "#e2463c"), _defineProperty(_theme, "darkGreen", "#12463c"), _defineProperty(_theme, "tableBlack", "#2a2943"), _defineProperty(_theme, "tableLightBlue", "#e4ebf8"), _defineProperty(_theme, "blues", ["#729fbf", "#b6c7d6", "#0780b7", "#68a1c5", "#014e98", "#2782b0", "#5EC9F9", "#c8e5eb", "#b1dee3", "#bde4e9", "#cce7e8"]), _defineProperty(_theme, "fingers", ["#bcddfe", "#6581d4", "#f9f9f9", "#195e83", "#678197"]), _defineProperty(_theme, "lightBlues", ["#c8e4f3", "#d1e8ed", "#b3d3ea", "#c5e2f2", "#f1f5ff", "#e6ecfe", "#9cc3dfff", "#ffd662ff", "#c7d3d4ff"]), _defineProperty(_theme, "greys", ["#F9FAFC", "#F2F2F6", "#aaabaa", "#999", "#fcfcfc", "#c8c8c8"]), _defineProperty(_theme, "formBS3", " inset 0.7rem 0.7rem 0.5rem  rgba(0,0,0,0.9)"), _defineProperty(_theme, "formBS4", " inset 0.08rem 1rem 1rem 0.03rem rgba(0,0.3,0,0.2)"), _defineProperty(_theme, "formBS", "  0.1rem .05rem 0.5rem rgba(0,0,0.8,0.5)"), _defineProperty(_theme, "formBS2", " 0.15rem 0.15rem 1rem 0.05rem rgba(0,0,0,0.4);"), _defineProperty(_theme, "formBS1", " 0.15rem 0.15rem 0.15rem 0.15rem rgba(0,0,0.4,0.1)"), _theme);
var GenPage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Page__GenPage",
  componentId: "sc-7w315w-0"
})(["position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100vw;font-family:\"Roboto Slab\";min-height:100vh;background:", ";"], function (props) {
  return props.theme.lightBlues[4];
});
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Page__Inner",
  componentId: "sc-7w315w-1"
})(["position:relative;margin:0 auto;padding:2rem;"]);
var Containers = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Page__Containers",
  componentId: "sc-7w315w-2"
})(["display:grid;grid-template-areas:\"Headers\" \"Mains\" \"Footers\";grid-template-columns:1fr;grid-template-rows:3.5rem 1fr 3.5rem;height:100vh;background:", ";padding:1rem 0;"], function (props) {
  return props.theme.pureWhite;
});
var Headers = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Page__Headers",
  componentId: "sc-7w315w-3"
})(["display:grid;grid-template-columns:1fr 4fr;align-items:right;grid-area:Headers;position:fixed;height:3.5rem;z-index:10;border-bottom:0.2rem solid inset 0.1rem 0.05rem 0.5rem rgba(0,0,0.8,0.5);"]);
var Footers = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Page__Footers",
  componentId: "sc-7w315w-4"
})(["grid-area:Footers;display:flex;justify-content:center;background-color:", ";align-items:center;font-size:1.9rem;color:white;padding-left:2rem;padding-right:2rem;"], function (props) {
  return props.theme.blues[2];
});
var Mains = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Page__Mains",
  componentId: "sc-7w315w-5"
})(["grid-area:Mains;padding-left:auto;padding-top:1rem;padding-right:auto;"]);
Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["injectGlobal"])(_templateObject(), function (props) {
  return props.theme.black;
});

var Page = /*#__PURE__*/function (_Component) {
  _inherits(Page, _Component);

  var _super = _createSuper(Page);

  function Page() {
    _classCallCheck(this, Page);

    return _super.apply(this, arguments);
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Containers, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Meta__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Headers, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Mains, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Inner, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, this.props.children)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footers, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }))));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Page);

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
var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\mega-menu\\Burger.jsx";


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
/* harmony import */ var _user_Signout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/Signout */ "./src/components/user/Signout.jsx");
/* harmony import */ var _user_Signup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/Signup */ "./src/components/user/Signup.jsx");
var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\mega-menu\\MegaMenu.jsx";





var ToolBarNavItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "MegaMenu__ToolBarNavItem",
  componentId: "sc-1gy0ucv-0"
})(["*{box-sizing:border-box;}max-width:100vw;height:0.9rem;margin:0 auto;}*/ body{font-family:'Roboto Slab','Open Sans','Segoe UI','Helvetica Neue',Helvetica,Arial,sans-serif;margin:0;padding:0;}nav{background:", ";margin:0;padding:0 2rem;height:3.5rem;align-items:center;width:100vw;color:", "}nav ul{list-style:none;position:relative;margin:0;padding:0;}nav li{display:inline-block;}nav a{text-decoration:none;display:block;color:", ";padding:0  0.5rem;:hover{color:", ";}}nav li:hover{border-top-right-radius:0.8rem;border-top-left-radius:0.8rem;background:", ";color:", ";}.menu-main{padding-top:1rem;height:3.5rem;font-size:1.6rem;}.menu-main a{padding:0 0.5rem;}.menu-sub{width:100 %;position:absolute;background:", ";color:", ";display:none;padding:1rem;border-bottom-right-radius:0.8rem;border-bottom-left-radius:0.8rem;box-shadow:", ";}nav li:hover .menu-sub{display:block;}.menu-sub li{display:block;}.menu-sub a{margin:0;padding:0;font-size:1.2rem;color:", ";}.menu-sub a:hover{text-decoration:underline;}.menu-sub-user{width:70 %;position:absolute;background:", ";color:", ";display:none;padding:1rem;border-bottom-right-radius:0.8rem;border-bottom-left-radius:0.8rem;}nav li:hover .menu-sub-user{display:block;}.menu-sub-user li{display:block;}.menu-sub-user a{margin:0;padding:0;font-size:1.2rem;color:", ";}.menu-sub-user a:hover{text-decoration:underline;}.menu-category{font-size:1rem;margin-top:0;color:", ";margin-bottom:0.5rem;text-align:left;text-transform:uppercase;}.menu-category:first-of-type{margin-top:0;margin-bottom:0;}.menu-col-1,.menu-col-2,.menu-col-3,.menu-col-4{float:left;}.menu-col-1,.menu-col-2,.menu-col-3,.menu-col-4{width:25 %;padding:1rem;border-right:1px solid #fff;}.menu-category:last-of-type{border-right:none;}hr{margin:0;padding:0;}@media(max-width:650){body{}nav{position:absolute;right:0;height:90vh;top:3.5rem;background:", ";display:flex;flex-direction:column;align-items:center;width:50% transform:translateX(100%);transistion:transform 0.5s ease-in;}nav li{display:block;}}"], function (props) {
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
  return props.theme.blues[2];
}, function (props) {
  return props.theme.blues[2];
});

var MegaMenu = function MegaMenu() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ToolBarNavItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
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
    href: "/creates/login",
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
    href: "/lists/allRegionsList",
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
  }, "Liste Regions")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyRegion",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, "Modifier Region"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, "Departement"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newDivision",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, "Nouveau Departement")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/lists/divisionList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, "Liste Departements")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyDivision",
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
  }, "Modifier Department"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, "Arrondissement"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newSubDivision",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, "Nouvel Arrondissement")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifySubDivision",
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
  }, "Modifier Arrondissement"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, "Ville"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newTown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, "Nouvelle Ville")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/lists/townList",
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
  }, "Liste des Villes")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyTown",
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
  }, "Modifier Ville"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
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
  }, "Nouveau Centre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newCenter",
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
  }, "Inscrire Centre D'examen'")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyCenter",
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
  }, "Modifier Centre"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
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
  }, "Presence A l'Examen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newAttendance",
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
  }, "Prensence a l'Examen")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyAttendance",
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
  }, "Modifier Centre"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }, "Notes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newMarks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, "Inscrire Notes")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyMarks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, "Modifier Notes")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-col-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, "Nouvelle Sp\xE9cialit\xE9 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newSpecialty",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, "nouvelle Sp\xE9cialit\xE9")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifySpecialty",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, "Modifier Sp\xE9cialit\xE9"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }, "Sp\xE9cialit\xE9 par Mati\xE8re"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newSubjectSpecialty",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }, "Sp\xE9cialit\xE9s")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifySubjectSpecialty",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  }, "Modifier Type Mati\xE8re"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }, "Inscription"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newRegister",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }, " Nouvelle Inscription")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/list/registration/CenterRegistrationList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: this
  }, " Nouvelle Inscription")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyRegistration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }, "Modifier Inscription"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }, "Poste"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newRank",
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
  }, "Nouveau Poste")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyRank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: this
  }, "Modifier Poste"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, "Examen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newExam",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  }, "Nouvel Examen")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyExam",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: this
  }, "Modifier Examen"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  }, "Resultats"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/genCenterResults",
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
  }, "Resultats Centre")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/results/candCodeResults",
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
  }, "Resultat Candidat")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345
    },
    __self: this
  }, "Listes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/lists/centersPerTown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
    },
    __self: this
  }, "Centres par Ville")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/lists/subjPerSpecialty",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: this
  }, "Matieres par Sp\xE9cialit\xE9")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/lists/subjPerSpecialty",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354
    },
    __self: this
  }, "Matieres par Sp\xE9cialit\xE9")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-col-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362
    },
    __self: this
  }, "Utilisateur"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365
    },
    __self: this
  }, "Nouveau Utilisateur")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyUser",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368
    },
    __self: this
  }, "Modifier Utilisateur"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
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
      lineNumber: 383
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384
    },
    __self: this
  }, "Rapports"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newReport",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387
    },
    __self: this
  }, "charger rapport ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyReport",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390
    },
    __self: this
  }, "Modifier rapport"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394
    },
    __self: this
  }, "Resultats Centre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/results/centerResults/getCompleteCenterResults",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397
    },
    __self: this
  }, "Resultats Complet du Centre")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/results/centerResults/centerResultsPerSpecialty",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400
    },
    __self: this
  }, "Resultats du Centre par Sp\xE9cialit\xE9")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/results/candidateResults/getCandidateResultsFromRegNo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404
    },
    __self: this
  }, "Resultats Du Candidat")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-col-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410
    },
    __self: this
  }, "Candidat"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newGroupCand",
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
  }, "nouveau Candidat")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/candidatePage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416
    },
    __self: this
  }, "Liste Candidats")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyCandidate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419
    },
    __self: this
  }, "Modifier Candidat"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423
    },
    __self: this
  }, "Enseignement"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newEducType",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426
    },
    __self: this
  }, "Nouveau Type D'enseignement")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyEducType",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429
    },
    __self: this
  }, "Modifier Type D'enseignement"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433
    },
    __self: this
  }, "Mati\xE8re"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newSubject",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436
    },
    __self: this
  }, "Nouvelle Mati\xE8re ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/lists/subjectList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439
    },
    __self: this
  }, "Liste des Mati\xE8res ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifySubject",
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
  }, "Modifier Mati\xE8re"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446
    },
    __self: this
  }, "Charge de centre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newExaminer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449
    },
    __self: this
  }, "Inscription des Charge de centre ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyExaminer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452
    },
    __self: this
  }, "Modifier Charge de centre")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signInOut/signUp",
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
  }, "SignUp"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459
    },
    __self: this
  }, "Phase de l'Examen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newPhase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462
    },
    __self: this
  }, "Nouvelle Phase de l'Examen ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyPhase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466
    },
    __self: this
  }, "Nouvelle Phase de l'Examen "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470
    },
    __self: this
  }, "Inscrire Postes aux Phases de l'Examen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newPhaseRank",
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
  }, "Postes aux Phases de l'Examen "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479
    },
    __self: this
  }, "Inscrire Prof au centre d'Examen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newCESExaminer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484
    },
    __self: this
  }, "Prof s'inscrire au centre d'Examen "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488
    },
    __self: this
  }, "Examen Pour Session par Centre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newCenterExamSession",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493
    },
    __self: this
  }, "Inscrire Centre a l'Examen "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497
    },
    __self: this
  }, "Sp\xE9cialit\xE9 par Centre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newCESS",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500
    },
    __self: this
  }, "Inscrire Sp\xE9cialit\xE9 aux centres ")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/creates/newRegister",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508
    },
    __self: this
  }, "Candidate"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-sub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-col-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
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
  }, "Inscription"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newRegister",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515
    },
    __self: this
  }, " Nouvelle Inscription")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyRegistration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518
    },
    __self: this
  }, "Modifier Inscription"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522
    },
    __self: this
  }, "Resultats"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/genCenterResults",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525
    },
    __self: this
  }, "Resultats Centre")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/results/candCodeResults",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528
    },
    __self: this
  }, "Resultat Candidat")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-col-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535
    },
    __self: this
  }, "Utilisateur"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538
    },
    __self: this
  }, "Nouveau Utilisateur")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyUser",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541
    },
    __self: this
  }, "Modifier Utilisateur"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545
    },
    __self: this
  }, "Resultats Centre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/results/centerResults/getCompleteCenterResults",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548
    },
    __self: this
  }, "Resultats Complet du Centre")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/results/centerResults/centerResultsPerSpecialty",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551
    },
    __self: this
  }, "Resultats du Centre par Sp\xE9cialit\xE9")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/results/candidateResults/getCandidateResultsFromRegNo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555
    },
    __self: this
  }, "Resultats Du Candidat"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559
    },
    __self: this
  }, "Candidat"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 560
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newGroupCand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562
    },
    __self: this
  }, "nouveau Candidat")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/candidatePage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565
    },
    __self: this
  }, "Liste Candidats")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyCandidate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568
    },
    __self: this
  }, "Modifier Candidat"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572
    },
    __self: this
  }, "Charge de centre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newExaminer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575
    },
    __self: this
  }, "Inscription des Charge de centre ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyExaminer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578
    },
    __self: this
  }, "Modifier Charge de centre")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signInOut/signUp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581
    },
    __self: this
  }, "SignUp"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585
    },
    __self: this
  }, "Phase de l'Examen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newPhase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588
    },
    __self: this
  }, "Nouvelle Phase de l'Examen "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592
    },
    __self: this
  }, "Inscrire Postes aux Phases de l'Examen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 595
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newPhaseRank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 596
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597
    },
    __self: this
  }, "Postes aux Phases de l'Examen "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601
    },
    __self: this
  }, "Inscrire Prof au centre d'Examen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 604
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newCESExaminer",
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
  }, "Prof s'inscrire au centre d'Examen "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
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
  }, "Examen Pour Session par Centre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newCenterExamSession",
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
  }, "Inscrire Centre a l'Examen ")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 621
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/creates/newRegister",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 622
    },
    __self: this
  }, "Centre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-sub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-col-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 624
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 625
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 626
    },
    __self: this
  }, "Notes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newMarks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 628
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 629
    },
    __self: this
  }, "Inscrire Notes")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/updates/updateMarks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 631
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 632
    },
    __self: this
  }, "Modifier Notes"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
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
  }, "Inscription"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 638
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newRegister",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 639
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 640
    },
    __self: this
  }, " Nouvelle Inscription")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newMultiRegister",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 642
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 643
    },
    __self: this
  }, "Inscription en Group ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyRegistration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 645
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 646
    },
    __self: this
  }, "Modifier Inscription"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 650
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 651
    },
    __self: this
  }, "Resultats"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/registrationList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 653
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 654
    },
    __self: this
  }, "Inscrit par centre ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/genCenterResults",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 656
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 657
    },
    __self: this
  }, "Resultats Centre")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/results/candCodeResults",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 660
    },
    __self: this
  }, "Resultat Candidat")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 664
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 665
    },
    __self: this
  }, "Listes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 666
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/lists/center/centersPerTown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 667
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 668
    },
    __self: this
  }, "Centres par Ville")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/lists/subjects/subjectSeriesList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 670
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671
    },
    __self: this
  }, "Matieres par Sp\xE9cialit\xE9")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/lists/subjects/subjectList",
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
  }, "Toute les Matieres ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 677
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-col-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 680
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
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
  }, "Utilisateur"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/signup",
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
  }, "Nouveau Utilisateur")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyUser",
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
  }, "Modifier Utilisateur"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 691
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 692
    },
    __self: this
  }, "Resultats Centre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 693
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/results/centerResults/getCompleteCenterResults",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 694
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 695
    },
    __self: this
  }, "Resultats Complet du Centre")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/results/centerResults/centerResultsPerSpecialty",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 697
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 698
    },
    __self: this
  }, "Resultats du Centre par Sp\xE9cialit\xE9")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/results/candidateResults/getCandidateResultsFromRegNo",
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
  }, "Resultats Du Candidat"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 706
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 707
    },
    __self: this
  }, "Candidat Solo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 708
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newCand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 709
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 710
    },
    __self: this
  }, "Nouveau Candidat")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newGroupCand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 712
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 713
    },
    __self: this
  }, "Plusieures Candidats")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/show/candidatePage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 715
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 716
    },
    __self: this
  }, "Liste Candidats")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyCandidate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 718
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 719
    },
    __self: this
  }, "Modifier Candidat"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 722
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723
    },
    __self: this
  }, "Charge de centre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 724
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newExaminer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 725
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 726
    },
    __self: this
  }, "Inscription des Charge de centre ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyExaminer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 728
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 729
    },
    __self: this
  }, "Modifier Charge de centre")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signInOut/signUp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 731
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 732
    },
    __self: this
  }, "SignUp"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 735
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 736
    },
    __self: this
  }, "Inscrire Prof au centre d'Examen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 739
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newCESExaminer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 740
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 741
    },
    __self: this
  }, "Prof s'inscrire au centre d'Examen "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 744
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 745
    },
    __self: this
  }, "Examen Pour Session par Centre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 748
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newCenterExamSession",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 749
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 750
    },
    __self: this
  }, "Inscrire Centre a l'Examen "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 753
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 754
    },
    __self: this
  }, "Sp\xE9cialit\xE9 par Centre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 755
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newCESS",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 756
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 757
    },
    __self: this
  }, "Inscrire Sp\xE9cialit\xE9 aux centres ")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 763
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/creates/newRegister",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 764
    },
    __self: this
  }, "Examinateur"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-sub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 765
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-col-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 766
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 767
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 768
    },
    __self: this
  }, "Notes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 769
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newMarks",
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
  }, "Inscrire Notes")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyMarks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 773
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 774
    },
    __self: this
  }, "Modifier Notes"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 777
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 778
    },
    __self: this
  }, "Utilisateur"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 779
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newUser",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 780
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 781
    },
    __self: this
  }, "Nouveau Utilisateur")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyUser",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 783
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 784
    },
    __self: this
  }, "Modifier Utilisateur"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 787
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 788
    },
    __self: this
  }, "Rapports"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 789
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newReport",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 790
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 791
    },
    __self: this
  }, "charger rapport ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyReport",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 793
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 794
    },
    __self: this
  }, "Modifier rapport"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
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
  }, "Charge de centre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 799
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newExaminer",
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
  }, "Inscription des Charge de centre ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modify/modifyExaminer",
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
  }, "Modifier Charge de centre")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signInOut/signUp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 806
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 807
    },
    __self: this
  }, "SignUp"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 810
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 811
    },
    __self: this
  }, "Inscrire Prof au centre d'Examen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 814
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/newCESExaminer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 815
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 816
    },
    __self: this
  }, "Prof s'inscrire au centre d'Examen ")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 822
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/creates/newRegister",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 823
    },
    __self: this
  }, "Utilisateur"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-sub-user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 824
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-col-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 825
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 826
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "menu-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 827
    },
    __self: this
  }, "Login/Signup"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 828
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/creates/reset",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 829
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 830
    },
    __self: this
  }, "Changer mot de passe")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 832
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 833
    },
    __self: this
  }, "Login")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 839
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/creates/newRegister",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 840
    },
    __self: this
  }, "Contact")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 842
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/creates/newRegister",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 843
    },
    __self: this
  }, "Nous")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 845
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_Signout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 846
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 848
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/creates/signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 849
    },
    __self: this
  }, "Signup"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (MegaMenu);

/***/ }),

/***/ "./src/components/queries&Mutations&Functions/Mutations.jsx":
/*!******************************************************************!*\
  !*** ./src/components/queries&Mutations&Functions/Mutations.jsx ***!
  \******************************************************************/
/*! exports provided: createCandidateMutation, createNewSubjectMutation, createTownMutation, createCenterExamSessionExaminerMutation, createDivisionMutation, createRegistrationMutation, createCenterMutation, createEducationTypeMutation, createSpecialtyMutation, createSubDivisionMutation, createNewSessionMutation, createNewRankMutation, createNewReportMutation, createNewRegionMutation, createExamMutation, registerSubjectSpecialtyMutation, registerNewSubjectSpecialtyMutation, updateCenterMutation, updateTownMutation, updateSessionMutation, updateRegionMutation, updateExamMutation, updateSubDivisionMutation, updateCandidateMutation, updateScoreMutation, updateDivisionMutation, updateItemMutation, createExaminerMutation, createPhaseMutation, createCenterExamSessionSpecialtyMutation, updateSpecialtyMutation, updateRankMutation, createPhaseRankMutation, createNewCountryMutation, createMultipleCandidatesMutation, updateSubjectMutation, updateExaminerMutation, createCenterExamSessionMutation, updateEducationTypeMutation, createAttendanceMutation, signInCandidate, loginUserMutation, updateSignUpMutation, signupUserMutation, deleteRegionMutation, deleteCenterMutation, signoutMutation, enterMarksMutation, deleteReportMutation, requestResetMutation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCandidateMutation", function() { return createCandidateMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewSubjectMutation", function() { return createNewSubjectMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTownMutation", function() { return createTownMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCenterExamSessionExaminerMutation", function() { return createCenterExamSessionExaminerMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDivisionMutation", function() { return createDivisionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRegistrationMutation", function() { return createRegistrationMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCenterMutation", function() { return createCenterMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEducationTypeMutation", function() { return createEducationTypeMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSpecialtyMutation", function() { return createSpecialtyMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSubDivisionMutation", function() { return createSubDivisionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewSessionMutation", function() { return createNewSessionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewRankMutation", function() { return createNewRankMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewReportMutation", function() { return createNewReportMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewRegionMutation", function() { return createNewRegionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExamMutation", function() { return createExamMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerSubjectSpecialtyMutation", function() { return registerSubjectSpecialtyMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerNewSubjectSpecialtyMutation", function() { return registerNewSubjectSpecialtyMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCenterMutation", function() { return updateCenterMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTownMutation", function() { return updateTownMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSessionMutation", function() { return updateSessionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateRegionMutation", function() { return updateRegionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateExamMutation", function() { return updateExamMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSubDivisionMutation", function() { return updateSubDivisionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCandidateMutation", function() { return updateCandidateMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateScoreMutation", function() { return updateScoreMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDivisionMutation", function() { return updateDivisionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItemMutation", function() { return updateItemMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExaminerMutation", function() { return createExaminerMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPhaseMutation", function() { return createPhaseMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCenterExamSessionSpecialtyMutation", function() { return createCenterExamSessionSpecialtyMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSpecialtyMutation", function() { return updateSpecialtyMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateRankMutation", function() { return updateRankMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPhaseRankMutation", function() { return createPhaseRankMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewCountryMutation", function() { return createNewCountryMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMultipleCandidatesMutation", function() { return createMultipleCandidatesMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSubjectMutation", function() { return updateSubjectMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateExaminerMutation", function() { return updateExaminerMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCenterExamSessionMutation", function() { return createCenterExamSessionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEducationTypeMutation", function() { return updateEducationTypeMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAttendanceMutation", function() { return createAttendanceMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInCandidate", function() { return signInCandidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUserMutation", function() { return loginUserMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSignUpMutation", function() { return updateSignUpMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signupUserMutation", function() { return signupUserMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteRegionMutation", function() { return deleteRegionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCenterMutation", function() { return deleteCenterMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signoutMutation", function() { return signoutMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterMarksMutation", function() { return enterMarksMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteReportMutation", function() { return deleteReportMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestResetMutation", function() { return requestResetMutation; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);


var _this = undefined;

function _templateObject49() {
  var data = _taggedTemplateLiteral(["\n  mutation deleteCenterMutation($id: ID!) {\n    deleteCenter(id: $id) {\n      id\n    }\n  }\n"]);

  _templateObject49 = function _templateObject49() {
    return data;
  };

  return data;
}

function _templateObject48() {
  var data = _taggedTemplateLiteral(["\n  mutation deleteRegionMutation($id: ID!) {\n    deleteRegion(id: $id) {\n      id\n    }\n  }\n"]);

  _templateObject48 = function _templateObject48() {
    return data;
  };

  return data;
}

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject47() {
  var data = _taggedTemplateLiteral(["\n  mutation updateSignUpMutation(\n    $email: String!\n    $name: String!\n    $password: String!\n  ) {\n    updateUser(email: $email, name: $name, password: $password) {\n      id\n      email\n      name\n      password\n    }\n  }\n"]);

  _templateObject47 = function _templateObject47() {
    return data;
  };

  return data;
}

function _templateObject46() {
  var data = _taggedTemplateLiteral(["\n  mutation updateExaminerMutation(\n    $id: ID!\n    $examiner1stName: String\n    $examiner2ndName: String\n    $examinerOtherNames: String\n    $examinerCNI: String\n    $examinerPhone: Int\n    $examinerEmail: String\n    $examinerImage: String\n    $examinerMatricule: String\n    $examinerCode: String\n    $gender: String\n  ) {\n    updateExaminer(\n      id: $id\n      examiner1stName: $examiner1stName\n      examiner2ndName: $examiner2ndName\n      examinerOtherNames: $examinerOtherNames\n      examinerCNI: $examinerCNI\n      examinerPhone: $examinerPhone\n      examinerEmail: $examinerEmail\n      examinerMatricule: $examinerMatricule\n      examinerCode: $examinerCode\n      examinerImage: $examinerImage\n      gender: $gender\n    ) {\n      id\n      examiner1stName\n      examiner2ndName\n      examinerOtherNames\n      examinerCNI\n      examinerPhone\n      examinerEmail\n      examinerMatricule\n      examinerCode\n      examinerImage\n      gender\n    }\n  }\n"]);

  _templateObject46 = function _templateObject46() {
    return data;
  };

  return data;
}

function _templateObject45() {
  var data = _taggedTemplateLiteral(["\n  mutation updateCandidateMutation(\n    $id: ID!\n    $cand1stName: String\n    $cand2ndName: String\n    $cand3rdName: String\n    $momName: String\n    $dadName: String\n    $email: String\n    $image: String\n    $phoneNumb: Int\n    $placeOfBirth: String\n    $dateOfBirth: DateTime\n    $birthCertNumber: String\n    $gender: String\n  ) {\n    updateCandidate(\n      id: $id\n      cand1stName: $cand1stName\n      cand2ndName: $cand2ndName\n      cand3rdName: $cand3rdName\n      momName: $momName\n      dadName: $dadName\n      email: $email\n      image: $image\n      phoneNumb: $phoneNumb\n      placeOfBirth: $placeOfBirth\n      dateOfBirth: $dateOfBirth\n      birthCertNumber: $birthCertNumber\n      gender: $gender\n    ) {\n      id\n      cand1stName\n      cand2ndName\n      cand3rdName\n      momName\n      dadName\n      email\n      image\n      phoneNumb\n      placeOfBirth\n      dateOfBirth\n      birthCertNumber\n      gender\n    }\n  }\n"]);

  _templateObject45 = function _templateObject45() {
    return data;
  };

  return data;
}

function _templateObject44() {
  var data = _taggedTemplateLiteral(["\n  mutation enterMarksMutation(\n    $subjectSpecialty: SubjectSpecialtyWhereUniqueInput!\n    $subjectAve: Float!\n    $candExamSecretCode: String!\n  ) {\n    enterMarks(\n      subjectSpecialty: $subjectSpecialty\n      subjectAve: $subjectAve\n      candExamSecretCode: $candExamSecretCode\n    ) {\n      subjectAve\n      coeff\n      id\n      subjectSpecialty {\n        id\n      }\n    }\n  }\n"]);

  _templateObject44 = function _templateObject44() {
    return data;
  };

  return data;
}

function _templateObject43() {
  var data = _taggedTemplateLiteral(["\n  mutation updateScoreMutation(\n    $subjectSpecialty: SubjectSpecialtyWhereUniqueInput!\n    $subjectAve: Float!\n    $candExamSecretCode: String!\n  ) {\n    updateScore(\n      subjectSpecialty: $subjectSpecialty\n      subjectAve: $subjectAve\n      candExamSecretCode: $candExamSecretCode\n    ) {\n      subjectAve\n      coeff\n      id\n      subjectSpecialty {\n        id\n        subjectCode\n        subjectName\n      }\n    }\n  }\n"]);

  _templateObject43 = function _templateObject43() {
    return data;
  };

  return data;
}

function _templateObject42() {
  var data = _taggedTemplateLiteral(["\n  mutation updateExamMutation($id: ID!, $examName: String, $examCode: String) {\n    updateExam(id: $id, examName: $examName, examCode: $examCode) {\n      examName\n      examCode\n      id\n    }\n  }\n"]);

  _templateObject42 = function _templateObject42() {
    return data;
  };

  return data;
}

function _templateObject41() {
  var data = _taggedTemplateLiteral(["\n  mutation updateTownMutation($id: ID!, $townName: String, $townCode: String) {\n    updateTown(id: $id, townName: $townName, townCode: $townCode) {\n      townName\n      townCode\n      id\n    }\n  }\n"]);

  _templateObject41 = function _templateObject41() {
    return data;
  };

  return data;
}

function _templateObject40() {
  var data = _taggedTemplateLiteral(["\n  mutation updateCenterMutation(\n    $id: ID!\n    $centerName: String\n    $centerCode: String\n    $centerNumber: Int\n  ) {\n    updateCenter(\n      id: $id\n      centerName: $centerName\n      centerCode: $centerCode\n      centerNumber: $centerNumber\n    ) {\n      id\n      centerName\n      centerNumber\n      centerCode\n    }\n  }\n"]);

  _templateObject40 = function _templateObject40() {
    return data;
  };

  return data;
}

function _templateObject39() {
  var data = _taggedTemplateLiteral(["\n  mutation updateSubDivisionMutation(\n    $id: ID!\n    $subDivName: String\n    $subDivCode: String\n  ) {\n    updateSubDivision(\n      id: $id\n      subDivName: $subDivName\n      subDivCode: $subDivCode\n    ) {\n      subDivName\n      subDivCode\n      id\n    }\n  }\n"]);

  _templateObject39 = function _templateObject39() {
    return data;
  };

  return data;
}

function _templateObject38() {
  var data = _taggedTemplateLiteral(["\n  mutation createExaminerMutation(\n    $examiner1stName: String!\n    $examiner2ndName: String!\n    $examinerOtherNames: String\n    $examinerCode: String!\n    $examinerEmail: String!\n    $examinerCNI: String!\n    $examinerMatricule: String!\n    $examinerImage: String!\n    $examinerPhone: Int!\n    $gender: String!\n  ) {\n    createExaminer(\n      examiner1stName: $examiner1stName\n      examiner2ndName: $examiner2ndName\n      examinerOtherNames: $examinerOtherNames\n      examinerMatricule: $examinerMatricule\n      examinerCode: $examinerCode\n      examinerCNI: $examinerCNI\n      examinerEmail: $examinerEmail\n      examinerImage: $examinerImage\n      examinerPhone: $examinerPhone\n      gender: $gender\n    ) {\n      id\n      examiner1stName\n      examiner2ndName\n      examinerOtherNames\n      examinerCode\n      examinerEmail\n      examinerImage\n      examinerPhone\n    }\n  }\n"]);

  _templateObject38 = function _templateObject38() {
    return data;
  };

  return data;
}

function _templateObject37() {
  var data = _taggedTemplateLiteral(["\n  mutation createMultipleCandidatesMutation(\n    $cand1stName: String!\n    $cand2ndName: String\n    $cand3rdName: String\n    $dadName: String\n    $momName: String\n    $candCode: String\n    $email: String!\n    $image: String!\n    $phoneNumb: Int\n    $dateOfBirth: DateTime\n    $birthCertNumber: String\n    $placeOfBirth: String\n    $gender: String!\n  ) {\n    createMultipleCandidates(\n      cand1stName: $cand1stName\n      cand2ndName: $cand2ndName\n      dadName: $dadName\n      momName: $momName\n      cand3rdName: $cand3rdName\n      candCode: $candCode\n      email: $email\n      image: $image\n      phoneNumb: $phoneNumb\n      dateOfBirth: $dateOfBirth\n      birthCertNumber: $birthCertNumber\n      placeOfBirth: $placeOfBirth\n      gender: $gender\n    ) {\n      id\n      cand1stName\n      cand2ndName\n      cand3rdName\n      momName\n      dadName\n      candCode\n      gender\n      birthCertNumber\n      dateOfBirth\n      image\n    }\n  }\n"]);

  _templateObject37 = function _templateObject37() {
    return data;
  };

  return data;
}

function _templateObject36() {
  var data = _taggedTemplateLiteral(["\n  mutation createCandidateMutation(\n    $cand1stName: String!\n    $cand2ndName: String\n    $cand3rdName: String\n    $dadName: String\n    $momName: String\n    $candCode: String\n    $email: String!\n    $image: String!\n    $phoneNumb: Int\n    $dateOfBirth: DateTime\n    $birthCertNumber: String\n    $placeOfBirth: String\n    $gender: String!\n  ) {\n    createCandidate(\n      cand1stName: $cand1stName\n      cand2ndName: $cand2ndName\n      dadName: $dadName\n      momName: $momName\n      cand3rdName: $cand3rdName\n      candCode: $candCode\n      email: $email\n      image: $image\n      phoneNumb: $phoneNumb\n      dateOfBirth: $dateOfBirth\n      birthCertNumber: $birthCertNumber\n      placeOfBirth: $placeOfBirth\n      gender: $gender\n    ) {\n      id\n      cand1stName\n      cand2ndName\n      cand3rdName\n      momName\n      dadName\n      candCode\n      birthCertNumber\n      dateOfBirth\n      image\n    }\n  }\n"]);

  _templateObject36 = function _templateObject36() {
    return data;
  };

  return data;
}

function _templateObject35() {
  var data = _taggedTemplateLiteral(["\n  mutation registerNewSubjectSpecialtyMutation(\n    $specialty: SpecialtyWhereUniqueInput!\n    $subject: SubjectWhereUniqueInput!\n    $coeff: Int!\n  ) {\n    createSubjectSpecialty(\n      specialty: $specialty\n      subject: $subject\n      coeff: $coeff\n    ) {\n      id\n      specialty {\n        id\n        specialtyName\n      }\n    }\n  }\n"]);

  _templateObject35 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34() {
  var data = _taggedTemplateLiteral(["\n  mutation registerSubjectSpecialtyMutation(\n    $subject: SubjectWhereUniqueInput!\n    $specialty: SpecialtyWhereUniqueInput!\n    $coeff: Int!\n  ) {\n    createSubjectSpecialty(\n      subject: $subject\n      specialty: $specialty\n      coeff: $coeff\n    ) {\n      id\n      specialty {\n        id\n        specialtyName\n        subjectSpecialty {\n          id\n          subject {\n            id\n            subjectName\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33() {
  var data = _taggedTemplateLiteral(["\n  mutation createExamMutation($examName: String!, $examCode: String!) {\n    createExam(examName: $examName, examCode: $examCode) {\n      id\n      examName\n    }\n  }\n"]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = _taggedTemplateLiteral(["\n  mutation createAttendanceMutation(\n    $subjectSpecialty: SubjectSpecialtyWhereUniqueInput!\n    $collected: String!\n    $candExamSecretCode: String!\n    $handin: String!\n  ) {\n    createAttendance(\n      subjectSpecialty: $subjectSpecialty\n      collected: $collected\n      candExamSecretCode: $candExamSecretCode\n      handin: $handin\n    ) {\n      id\n    }\n  }\n"]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = _taggedTemplateLiteral(["\n  mutation createPhaseMutation($phaseName: String!, $phaseCode: String!) {\n    createPhase(phaseName: $phaseName, phaseCode: $phaseCode) {\n      id\n      phaseName\n    }\n  }\n"]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["\n  mutation createNewCountryMutation(\n    $countryName: String!\n    $countryCode: String!\n  ) {\n    createCountry(countryName: $countryName, countryCode: $countryCode) {\n      id\n      countryName\n      countryCode\n    }\n  }\n"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral(["\n  mutation requestResetMutation($email: String!) {\n    requestReset(email: $email) {\n      message\n    }\n  }\n"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["\n  mutation loginUserMutation($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      id\n      name\n      email\n      password\n      permissions\n    }\n  }\n"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n  mutation signupUserMutation(\n    $name: String!\n    $email: String!\n    $password: String!\n  ) {\n    signup(password: $password, name: $name, email: $email) {\n      id\n      name\n      email\n    }\n  }\n"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n  mutation createNewRegionMutation($regName: String!, $regCode: String!) {\n    createRegion(regName: $regName, regCode: $regCode) {\n      id\n      regName\n    }\n  }\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n  mutation createNewRankMutation($rankName: String!, $rankCode: String!) {\n    createRank(rankName: $rankName, rankCode: $rankCode) {\n      id\n      rankName\n    }\n  }\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n  mutation createNewSessionMutation(\n    $sessionName: String!\n    $sessionCode: String!\n  ) {\n    createSession(sessionName: $sessionName, sessionCode: $sessionCode) {\n      id\n      sessionName\n    }\n  }\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n  mutation createSubDivisionMutation(\n    $subDivName: String!\n    $subDivCode: String!\n    $division: DivisionWhereUniqueInput!\n  ) {\n    createSubDivision(\n      subDivName: $subDivName\n      subDivCode: $subDivCode\n      division: $division\n    ) {\n      id\n      subDivName\n      subDivCode\n      division {\n        divName\n      }\n    }\n  }\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  mutation createNewSubjectMutation(\n    $subjectName: String!\n    $subjectCode: String!\n    $subjectType: String!\n    $subjectGroup: String!\n    $educType: EducationTypeWhereUniqueInput!\n  ) {\n    createSubject(\n      subjectName: $subjectName\n      educType: $educType\n      subjectCode: $subjectCode\n      subjectType: $subjectType\n      subjectGroup: $subjectGroup\n    ) {\n      subjectCode\n      subjectName\n      subjectType\n      subjectGroup\n    }\n  }\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  mutation createTownMutation(\n    $townName: String!\n    $townCode: String!\n    $subDiv: SubDivisionWhereUniqueInput!\n  ) {\n    createTown(townName: $townName, townCode: $townCode, subDiv: $subDiv) {\n      id\n      townName\n      townCode\n      subDiv {\n        subDivName\n      }\n    }\n  }\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  mutation createEducationTypeMutation(\n    $educationTypeName: String!\n    $educationTypeCode: String!\n  ) {\n    createEducationType(\n      educationTypeName: $educationTypeName\n      educationTypeCode: $educationTypeCode\n    ) {\n      id\n      educationTypeName\n    }\n  }\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  mutation createSpecialtyMutation(\n    $specialtyName: String!\n    $specialtyCode: String!\n    $educationType: EducationTypeWhereUniqueInput!\n  ) {\n    createSpecialty(\n      specialtyName: $specialtyName\n      specialtyCode: $specialtyCode\n      educationType: $educationType\n    ) {\n      id\n      specialtyName\n    }\n  }\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  mutation createCenterMutation(\n    $centerName: String!\n    $centerNumber: Int\n    $centerCode: String!\n    $centerSecretCode: String!\n    $town: TownWhereUniqueInput!\n  ) {\n    createCenter(\n      centerSecretCode: $centerSecretCode\n      centerName: $centerName\n      centerNumber: $centerNumber\n      centerCode: $centerCode\n      town: $town\n    ) {\n      id\n      centerName\n      centerSecretCode\n      centerCode\n      town {\n        townName\n      }\n    }\n  }\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  mutation createDivisionMutation(\n    $divName: String!\n    $divCode: String!\n    $region: RegionWhereUniqueInput!\n  ) {\n    createDivision(divName: $divName, divCode: $divCode, region: $region) {\n      id\n      divName\n    }\n  }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  mutation createCenterExamSessionSpecialtyMutation(\n    $specialty: SpecialtyWhereUniqueInput!\n    $centerExamSession: CenterExamSessionWhereUniqueInput!\n  ) {\n    createCenterExamSessionSpecialty(\n      specialty: $specialty\n      centerExamSession: $centerExamSession\n    ) {\n      id\n    }\n  }\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  mutation createCenterExamSessionExaminerMutation(\n    $centerExamSession: CenterExamSessionWhereUniqueInput!\n    $examiner: ExaminerWhereUniqueInput!\n    $phaseRank: PhaseRankWhereUniqueInput!\n  ) {\n    createCenterExamSessionExaminer(\n      phaseRank: $phaseRank\n      centerExamSession: $centerExamSession\n      examiner: $examiner\n    ) {\n      id\n    }\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  mutation createPhaseRankMutation(\n    $phase: PhaseWhereUniqueInput!\n    $rankName: String!\n    $rankCode: String!\n  ) {\n    createPhaseRank(phase: $phase, rankName: $rankName, rankCode: $rankCode) {\n      id\n    }\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  mutation createCenterExamSessionMutation(\n    $examSession: ExamSessionWhereUniqueInput!\n    $center: CenterWhereUniqueInput!\n  ) {\n    createCenterExamSession(examSession: $examSession, center: $center) {\n      id\n    }\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  mutation createRegistrationMutation(\n    $candidate: CandidateWhereUniqueInput!\n    $candExamSecretCode: String!\n    $candExamSession: String!\n    $candRegistrationNumber: String!\n    $centerExamSession: CenterExamSessionWhereUniqueInput!\n    $centerExamSessionSpecialty: CenterExamSessionSpecialtyWhereUniqueInput!\n    $specialty: SpecialtyWhereUniqueInput!\n    $aptitude: String!\n    $EPF1: String!\n    $EPF2: String!\n  ) {\n    createRegistration(\n      candidate: $candidate\n      candExamSecretCode: $candExamSecretCode\n      candExamSession: $candExamSession\n      candRegistrationNumber: $candRegistrationNumber\n      centerExamSession: $centerExamSession\n      centerExamSessionSpecialty: $centerExamSessionSpecialty\n      specialty: $specialty\n      EPF1: $EPF1\n      EPF2: $EPF2\n      aptitude: $aptitude\n    ) {\n      id\n      centerExamSession {\n        id\n        center {\n          id\n          centerName\n        }\n      }\n      candidate {\n        id\n        cand1stName\n      }\n    }\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  mutation createNewReportMutation(\n    $reportImage: String!\n    $reportName: String!\n    $centerExamSessionExaminer: CenterExamSessionExaminerWhereUniqueInput!\n  ) {\n    createReport(\n      reportImage: $reportImage\n      reportName: $reportName\n      centerExamSessionExaminer: $centerExamSessionExaminer\n    ) {\n      id\n      reportName\n      reportImage\n    }\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  mutation updateRegionMutation($id: ID!, $regName: String, $regCode: String) {\n    updateRegion(id: $id, regName: $regName, regCode: $regCode) {\n      id\n      regName\n      regCode\n    }\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  mutation updateDivisionMutation(\n    $id: ID!\n    $divName: String\n    $divCode: String\n  ) {\n    updateDivision(id: $id, divName: $divName, divCode: $divCode) {\n      id\n      divName\n      divCode\n    }\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  mutation updateSpecialtyMutation(\n    $id: ID!\n    $specialtyName: String\n    $specialtyCode: String\n  ) {\n    updateSpecialty(\n      id: $id\n      specialtyName: $specialtyName\n      specialtyCode: $specialtyCode\n    ) {\n      specialtyName\n      specialtyCode\n      id\n    }\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  mutation updateRankMutation($id: ID!, $rankName: String, $rankCode: String) {\n    updateRank(id: $id, rankName: $rankName, rankCode: $rankCode) {\n      id\n      rankName\n      rankCode\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  mutation updateSubjectMutation(\n    $id: ID!\n    $subjectName: String\n    $subjectCode: String\n  ) {\n    updateSubject(\n      id: $id\n      subjectName: $subjectName\n      subjectCode: $subjectCode\n    ) {\n      subjectName\n      subjectCode\n      id\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  mutation updateEducationTypeMutation(\n    $id: ID!\n    $educationTypeName: String\n    $educationTypeCode: String\n  ) {\n    updateEducationType(\n      id: $id\n      educationTypeName: $educationTypeName\n      educationTypeCode: $educationTypeCode\n    ) {\n      id\n      educationTypeName\n      educationTypeCode\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  mutation updateSessionMutation(\n    $id: ID!\n    $sessionName: String\n    $sessionCode: String\n  ) {\n    updateSession(\n      id: $id\n      sessionName: $sessionName\n      sessionCode: $sessionCode\n    ) {\n      sessionName\n      sessionCode\n      id\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  mutation deleteReportMutation($id: ID!) {\n    deleteReport(id: $id) {\n      id\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation signoutMutation {\n    signout {\n      message\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation signInCandidate($candCode: String!) {\n    candidateSignIn(candCode: $candCode) {\n      id\n      cand1stName\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

 //************create mutations  */

var signInCandidate = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject()); //

var signoutMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject2());
var deleteReportMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject3());
var updateSessionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject4());
var updateEducationTypeMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject5());
var updateSubjectMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject6());
var updateRankMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject7());
var updateSpecialtyMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject8());
var updateDivisionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject9());
var updateRegionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject10());
var createNewReportMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject11());
var createRegistrationMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject12());
var createCenterExamSessionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject13());
var createPhaseRankMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject14());
var createCenterExamSessionExaminerMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject15());
var createCenterExamSessionSpecialtyMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject16()); // const createCenterExamSessionexaminerorityMutation = gql`
//   mutation createCenterExamSessionexaminerorityMutation(
//     $rank: RankWhereUniqueInput!
//     $centerExamSession: CenterExamSessionWhereUniqueInput!
//     $examinerName: String!
//     $examinerCode: String!
//     $examinerCNI: String!
//     $examinerPhone: Int!
//     $examinerMatricule: String!
//   ) {
//     createCenterExamSessionexaminerority(
//       rank: $rank
//       centerExamSession: $centerExamSession
//       examinerCNI: $examinerCNI
//       examinerName: $examinerName
//       examinerCode: $examinerCode
//       examinerPhone: $examinerPhone
//       examinerMatricule: $examinerMatricule
//     ) {
//       examinerName
//       examinerCode
//       examinerPhone
//     }
//   }
// `

var createDivisionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject17());
var createCenterMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject18());
var createSpecialtyMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject19());
var createEducationTypeMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject20());
var createTownMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject21());
var createNewSubjectMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject22());
var createSubDivisionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject23());
var createNewSessionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject24());
var createNewRankMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject25());
var createNewRegionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject26());
var signupUserMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject27());
var loginUserMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject28());
var requestResetMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject29());
var createNewCountryMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject30());
var createPhaseMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject31());
var createAttendanceMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject32());
var createExamMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject33());
var registerSubjectSpecialtyMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject34());
var registerNewSubjectSpecialtyMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject35());
var createCandidateMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject36());
var createMultipleCandidatesMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject37());
var createExaminerMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject38()); //************create mutations  */
////**************Update mutations */

var updateSubDivisionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject39());
var updateCenterMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject40());
var updateTownMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject41());
var updateExamMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject42());
var updateScoreMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject43());
var enterMarksMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject44()); // const createUserMutation = gql`
//   mutation createUserMutation(
//     $email: String!
//     $name: String!
//     $password: String!
//     ) {
//     createUser(
//                email: $email!
//                name: $name!
//                password: $password!
//                ) {
//       id
//       name
//       email
//       password
//     }
//   }
// `

var updateCandidateMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject45());
var updateExaminerMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject46());
var updateSignUpMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject47());

var updateItemMutation = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e, updateMutation) {
    var res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            console.log("Updating Region!!");
            _context.next = 4;
            return updateMutation({
              variables: _objectSpread({
                id: _this.props.id
              }, _this.state)
            });

          case 4:
            res = _context.sent;
            console.log("Region Updated!!");

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function updateItemMutation(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); ////**************Update mutations */
/////*****************Delete Mutations */


var deleteRegionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject48());
var deleteCenterMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject49());


/***/ }),

/***/ "./src/components/queries&Mutations&Functions/Queries.jsx":
/*!****************************************************************!*\
  !*** ./src/components/queries&Mutations&Functions/Queries.jsx ***!
  \****************************************************************/
/*! exports provided: getAllSubjectSpecialtiesOfASpecialtyQuery, getAllSpecialtiesOfAnEducationTypeQuery, getAllExamsQuery, getAllSessionsQuery, getDivisionsOfARegionQuery, getAllDivisionsQuery, getSubDivisionsOfADivisionQuery, getTownsOfASubDivisionQuery, getCentersOfATownQuery, getAllEducationTypesQuery, getAllRanksQuery, getAllCandidatesQuery, getAllCentersQuery, getSingleRegionQuery, getAllSpecialtiesQuery, getAllSubDivisionsQuery, getAllSubjectsOfAnEducTypeQuery, getScoreID, singleSpecialtyQuery, getRegistrations, singleSubjectQuery, singleCandidateQuery1, getAllSubjectsWithEducTypesQuery, singleCandidateQuery, viewSingleCandidateQuery, singleCenterQuery, singleExamQuery, singleTownQuery, getAllCenterResultsQuery, singleSessionQuery, singleDivisionQuery, singleSubDivisionQuery, singleEducationTypeQuery, singleRankQuery, centerExamSessionSpecialtyForResultsQuery, getAllCandidateRegistrationIDsQuery, getCenterExamSessionSpecialtyQuery, getExamSessionQuery, getAllSpecialtiesOfACenterExamSessionQuery, getCenterResultsQuery, getCandidateRegistrationIDQuery, getCandidateRegistrationIDsQuery, centerExamSessionForResultsQuery, getCandidateIDQuery, getASingleCenterQuery, getRegisteredCandidateCountQuery, centersPerTownQuery, getSingleCenterQuery, getCandidateResultsQuery, getCenterRegistrationIDsQuery, getCandidateByCandCodeQuery, getSingleCenterExamSessionQuery, getEachCandidateResultsQuery, getCenterIDFromCenterCodeQuery, getRegistrationIDFromRegNumberQuery, centerExamSessionSpecialtyResultsQuery, dataForAverage, getAllPhasesQuery, getAllRegionsQuery, getAllUsersQuery, singleExaminerQuery, getAllRegionsDivisionsAndTownsQuery, getCandidateRegistrationInfoQuery, getCESExaminerQuery, getExaminerIDQuery, getAllTownsQuery, getSpecialtyFromCESSQuery, getExaminerRegistrationQuery, getSingleProfQuery, getAllGroup1Query, getAllSubjectsQuery, getAllGroup2Query, singleSubjectGroupQuery, getAllRegionsAndDivisionsQuery, getRegisteredCandidatesPerSpecialty, getAllSubjectGroupsQuery, getAllRanksOfAnExamPhaseQuery, currentUserQuery, singlePhaseQuery, getSingleCenterByCodeQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubjectSpecialtiesOfASpecialtyQuery", function() { return getAllSubjectSpecialtiesOfASpecialtyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSpecialtiesOfAnEducationTypeQuery", function() { return getAllSpecialtiesOfAnEducationTypeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllExamsQuery", function() { return getAllExamsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSessionsQuery", function() { return getAllSessionsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDivisionsOfARegionQuery", function() { return getDivisionsOfARegionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllDivisionsQuery", function() { return getAllDivisionsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSubDivisionsOfADivisionQuery", function() { return getSubDivisionsOfADivisionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTownsOfASubDivisionQuery", function() { return getTownsOfASubDivisionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCentersOfATownQuery", function() { return getCentersOfATownQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllEducationTypesQuery", function() { return getAllEducationTypesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRanksQuery", function() { return getAllRanksQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCandidatesQuery", function() { return getAllCandidatesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCentersQuery", function() { return getAllCentersQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleRegionQuery", function() { return getSingleRegionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSpecialtiesQuery", function() { return getAllSpecialtiesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubDivisionsQuery", function() { return getAllSubDivisionsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubjectsOfAnEducTypeQuery", function() { return getAllSubjectsOfAnEducTypeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScoreID", function() { return getScoreID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleSpecialtyQuery", function() { return singleSpecialtyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegistrations", function() { return getRegistrations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleSubjectQuery", function() { return singleSubjectQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleCandidateQuery1", function() { return singleCandidateQuery1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubjectsWithEducTypesQuery", function() { return getAllSubjectsWithEducTypesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleCandidateQuery", function() { return singleCandidateQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewSingleCandidateQuery", function() { return viewSingleCandidateQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleCenterQuery", function() { return singleCenterQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleExamQuery", function() { return singleExamQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleTownQuery", function() { return singleTownQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCenterResultsQuery", function() { return getAllCenterResultsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleSessionQuery", function() { return singleSessionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleDivisionQuery", function() { return singleDivisionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleSubDivisionQuery", function() { return singleSubDivisionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleEducationTypeQuery", function() { return singleEducationTypeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleRankQuery", function() { return singleRankQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerExamSessionSpecialtyForResultsQuery", function() { return centerExamSessionSpecialtyForResultsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCandidateRegistrationIDsQuery", function() { return getAllCandidateRegistrationIDsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCenterExamSessionSpecialtyQuery", function() { return getCenterExamSessionSpecialtyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExamSessionQuery", function() { return getExamSessionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSpecialtiesOfACenterExamSessionQuery", function() { return getAllSpecialtiesOfACenterExamSessionQuery; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerExamSessionSpecialtyResultsQuery", function() { return centerExamSessionSpecialtyResultsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataForAverage", function() { return dataForAverage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPhasesQuery", function() { return getAllPhasesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRegionsQuery", function() { return getAllRegionsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllUsersQuery", function() { return getAllUsersQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleExaminerQuery", function() { return singleExaminerQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRegionsDivisionsAndTownsQuery", function() { return getAllRegionsDivisionsAndTownsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCandidateRegistrationInfoQuery", function() { return getCandidateRegistrationInfoQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCESExaminerQuery", function() { return getCESExaminerQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExaminerIDQuery", function() { return getExaminerIDQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllTownsQuery", function() { return getAllTownsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpecialtyFromCESSQuery", function() { return getSpecialtyFromCESSQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExaminerRegistrationQuery", function() { return getExaminerRegistrationQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleProfQuery", function() { return getSingleProfQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllGroup1Query", function() { return getAllGroup1Query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubjectsQuery", function() { return getAllSubjectsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllGroup2Query", function() { return getAllGroup2Query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleSubjectGroupQuery", function() { return singleSubjectGroupQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRegionsAndDivisionsQuery", function() { return getAllRegionsAndDivisionsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredCandidatesPerSpecialty", function() { return getRegisteredCandidatesPerSpecialty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubjectGroupsQuery", function() { return getAllSubjectGroupsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRanksOfAnExamPhaseQuery", function() { return getAllRanksOfAnExamPhaseQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentUserQuery", function() { return currentUserQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singlePhaseQuery", function() { return singlePhaseQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleCenterByCodeQuery", function() { return getSingleCenterByCodeQuery; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject80() {
  var data = _taggedTemplateLiteral(["\n  query singleSessionQuery($id: ID!) {\n    session(id: $id) {\n      sessionName\n      sessionCode\n      id\n    }\n  }\n"]);

  _templateObject80 = function _templateObject80() {
    return data;
  };

  return data;
}

function _templateObject79() {
  var data = _taggedTemplateLiteral(["\n  query singleSubjectGroupQuery($id: ID!) {\n    subjectGroup(id: $id) {\n      subjectGroupName\n      subjectGroupCode\n      id\n    }\n  }\n"]);

  _templateObject79 = function _templateObject79() {
    return data;
  };

  return data;
}

function _templateObject78() {
  var data = _taggedTemplateLiteral(["\n  query singleSubjectQuery($id: ID!) {\n    subject(id: $id) {\n      subjectName\n      subjectCode\n      id\n    }\n  }\n"]);

  _templateObject78 = function _templateObject78() {
    return data;
  };

  return data;
}

function _templateObject77() {
  var data = _taggedTemplateLiteral(["\n  query singleRankQuery($id: ID!) {\n    rank(id: $id) {\n      rankName\n      rankCode\n      id\n    }\n  }\n"]);

  _templateObject77 = function _templateObject77() {
    return data;
  };

  return data;
}

function _templateObject76() {
  var data = _taggedTemplateLiteral(["\n  query singleDivisionQuery($id: ID!) {\n    division(id: $id) {\n      divName\n      divCode\n      id\n    }\n  }\n"]);

  _templateObject76 = function _templateObject76() {
    return data;
  };

  return data;
}

function _templateObject75() {
  var data = _taggedTemplateLiteral(["\n  query dataForAverage($candExamSecretCode: String!) {\n    scores(candExamSecretCode: $candExamSecretCode) {\n      id\n      subjectAve\n      coeff\n    }\n  }\n"]);

  _templateObject75 = function _templateObject75() {
    return data;
  };

  return data;
}

function _templateObject74() {
  var data = _taggedTemplateLiteral(["\n  query singleSpecialtyQuery($id: ID!) {\n    specialty(id: $id) {\n      specialtyName\n      specialtyCode\n      id\n    }\n  }\n"]);

  _templateObject74 = function _templateObject74() {
    return data;
  };

  return data;
}

function _templateObject73() {
  var data = _taggedTemplateLiteral(["\n  query singlePhaseQuery($id: ID!) {\n    phase(id: $id) {\n      phaseName\n      phaseCode\n      id\n    }\n  }\n"]);

  _templateObject73 = function _templateObject73() {
    return data;
  };

  return data;
}

function _templateObject72() {
  var data = _taggedTemplateLiteral(["\n  query getSingleRegionQuery($id: ID!) {\n    region(id: $id) {\n      regName\n      regCode\n      id\n    }\n  }\n"]);

  _templateObject72 = function _templateObject72() {
    return data;
  };

  return data;
}

function _templateObject71() {
  var data = _taggedTemplateLiteral(["\n  query singleSubDivisionQuery($id: ID!) {\n    subDivision(id: $id) {\n      subDivName\n      subDivCode\n      id\n    }\n  }\n"]);

  _templateObject71 = function _templateObject71() {
    return data;
  };

  return data;
}

function _templateObject70() {
  var data = _taggedTemplateLiteral(["\n  query getRegistrations($candExamSecretCode: String!) {\n    registration(candExamSecretCode: $candExamSecretCode) {\n      id\n      scores {\n        id\n        subject(orderBy: subjectName_ASC) {\n          id\n          subjectName\n        }\n      }\n    }\n  }\n"]);

  _templateObject70 = function _templateObject70() {
    return data;
  };

  return data;
}

function _templateObject69() {
  var data = _taggedTemplateLiteral(["\n  query getScoreID($candExamSecretCode: String!) {\n    scores(candExamSecretCode: $candExamSecretCode) {\n      id\n    }\n  }\n"]);

  _templateObject69 = function _templateObject69() {
    return data;
  };

  return data;
}

function _templateObject68() {
  var data = _taggedTemplateLiteral(["\n  query viewSingleCandidateQuery($candCode: String!) {\n    singleCandidate(candCode: $candCode) {\n      id\n      dateOfBirth\n      cand1stName\n      cand2ndName\n      cand3rdName\n      candCode\n      momName\n      dadName\n      email\n      image\n      phoneNumb\n      birthCertNumber\n      placeOfBirth\n      user {\n        id\n      }\n      gender\n    }\n  }\n"]);

  _templateObject68 = function _templateObject68() {
    return data;
  };

  return data;
}

function _templateObject67() {
  var data = _taggedTemplateLiteral(["\n  query singleExaminerQuery($id: ID!) {\n    examiner(id: $id) {\n      id\n      examiner1stName\n      examiner2ndName\n      examinerOtherNames\n      examinerCode\n      examinerEmail\n      examinerImage\n      examinerPhone\n      examinerMatricule\n      examinerCNI\n    }\n  }\n"]);

  _templateObject67 = function _templateObject67() {
    return data;
  };

  return data;
}

function _templateObject66() {
  var data = _taggedTemplateLiteral(["\n  query singleCandidateQuery($id: ID!) {\n    candidate(id: $id) {\n      id\n      dateOfBirth\n      cand1stName\n      cand2ndName\n      cand3rdName\n      candCode\n      dadName\n      momName\n      email\n      image\n      phoneNumb\n      birthCertNumber\n      placeOfBirth\n      user {\n        id\n      }\n      gender\n    }\n  }\n"]);

  _templateObject66 = function _templateObject66() {
    return data;
  };

  return data;
}

function _templateObject65() {
  var data = _taggedTemplateLiteral(["\n  query singleCandidateQuery1($id: ID!) {\n    candidate(id: $id) {\n      cand1stName\n      cand2ndName\n      cand3rdName\n      dadName\n      momName\n      candCode\n      email\n      image\n      phoneNumb\n      placeOfBirth\n      user {\n        id\n      }\n      id\n    }\n  }\n"]);

  _templateObject65 = function _templateObject65() {
    return data;
  };

  return data;
}

function _templateObject64() {
  var data = _taggedTemplateLiteral(["\n  query singleExamQuery($id: ID!) {\n    exam(id: $id) {\n      examName\n      examCode\n      id\n    }\n  }\n"]);

  _templateObject64 = function _templateObject64() {
    return data;
  };

  return data;
}

function _templateObject63() {
  var data = _taggedTemplateLiteral(["\n  query getExamSessionQuery(\n    $exam: ExamWhereUniqueInput!\n    $session: SessionWhereUniqueInput!\n  ) {\n    examSessions(session: $session, exam: $exam) {\n      id\n    }\n  }\n"]);

  _templateObject63 = function _templateObject63() {
    return data;
  };

  return data;
}

function _templateObject62() {
  var data = _taggedTemplateLiteral(["\n  query getSpecialtyFromCESSQuery($id: ID!) {\n    centerExamSessionSpecialty(id: $id) {\n      id\n      specialty {\n        id\n        specialtyName\n      }\n    }\n  }\n"]);

  _templateObject62 = function _templateObject62() {
    return data;
  };

  return data;
}

function _templateObject61() {
  var data = _taggedTemplateLiteral(["\n  query getCenterExamSessionSpecialtyQuery(\n    $centerExamSession: CenterExamSessionWhereUniqueInput!\n    $specialty: SpecialtyWhereUniqueInput!\n  ) {\n    centerExamSessionSpecialties(\n      centerExamSession: $centerExamSession\n      specialty: $specialty\n    ) {\n      id\n    }\n  }\n"]);

  _templateObject61 = function _templateObject61() {
    return data;
  };

  return data;
}

function _templateObject60() {
  var data = _taggedTemplateLiteral(["\n  query getRegisteredCandidatesPerSpecialty($id: ID!) {\n    centerExamSessionSpecialty(id: $id) {\n      id\n      registration {\n        candRegistrationNumber\n        id\n        candExamSecretCode\n        candidate {\n          id\n          cand1stName\n          cand2ndName\n          cand3rdName\n        }\n      }\n    }\n  }\n"]);

  _templateObject60 = function _templateObject60() {
    return data;
  };

  return data;
}

function _templateObject59() {
  var data = _taggedTemplateLiteral(["\n  query getRegisteredCandidateCountQuery($id: ID!) {\n    registrationsConnection(id: $id) {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);

  _templateObject59 = function _templateObject59() {
    return data;
  };

  return data;
}

function _templateObject58() {
  var data = _taggedTemplateLiteral(["\n  query getAllRanksOfAnExamPhaseQuery($id: ID!) {\n    phase(id: $id) {\n      id\n      phaseRank(orderBy: rankName_ASC) {\n        id\n        rankName\n        rankCode\n      }\n    }\n  }\n"]);

  _templateObject58 = function _templateObject58() {
    return data;
  };

  return data;
}

function _templateObject57() {
  var data = _taggedTemplateLiteral(["\n  query getSingleCenterExamSessionQuery(\n    $center: CenterWhereUniqueInput!\n    $examSession: ExamSessionWhereUniqueInput!\n  ) {\n    centerExamSessionsByCode(examSession: $examSession, center: $center) {\n      id\n    }\n  }\n"]);

  _templateObject57 = function _templateObject57() {
    return data;
  };

  return data;
}

function _templateObject56() {
  var data = _taggedTemplateLiteral(["\n  query singleTownQuery($id: ID!) {\n    town(id: $id) {\n      townName\n      townCode\n      id\n    }\n  }\n"]);

  _templateObject56 = function _templateObject56() {
    return data;
  };

  return data;
}

function _templateObject55() {
  var data = _taggedTemplateLiteral(["\n  query getASingleCenterQuery($centerNumber: Int!) {\n    centerByNumber(centerNumber: $centerNumber) {\n      centerNumber\n      centerName\n      centerCode\n      id\n    }\n  }\n"]);

  _templateObject55 = function _templateObject55() {
    return data;
  };

  return data;
}

function _templateObject54() {
  var data = _taggedTemplateLiteral(["\n  query getSingleCenterByCodeQuery($centerSecretCode: String!) {\n    getCenterByCode(centerSecretCode: $centerSecretCode) {\n      id\n      centerCode\n    }\n  }\n"]);

  _templateObject54 = function _templateObject54() {
    return data;
  };

  return data;
}

function _templateObject53() {
  var data = _taggedTemplateLiteral(["\n  query getSingleProfQuery($authCode: String!) {\n    profByAuthCode(authCode: $authCode) {\n      authCode\n      id\n      auth1stName\n    }\n  }\n"]);

  _templateObject53 = function _templateObject53() {
    return data;
  };

  return data;
}

function _templateObject52() {
  var data = _taggedTemplateLiteral(["\n  query getSingleCenterQuery($centerNumber: Int!) {\n    centerByNumber(centerNumber: $centerNumber) {\n      id\n      centerNumber\n      centerCode\n    }\n  }\n"]);

  _templateObject52 = function _templateObject52() {
    return data;
  };

  return data;
}

function _templateObject51() {
  var data = _taggedTemplateLiteral(["\n  query singleCenterQuery($id: ID!) {\n    center(id: $id) {\n      centerName\n      centerNumber\n      centerCode\n      id\n    }\n  }\n"]);

  _templateObject51 = function _templateObject51() {
    return data;
  };

  return data;
}

function _templateObject50() {
  var data = _taggedTemplateLiteral(["\n  query getAllCandidatesQuery {\n    candidates(orderBy: cand1stName_ASC) {\n      cand1stName\n      cand2ndName\n      cand3rdName\n      email\n      image\n      phoneNumb\n      placeOfBirth\n      candCode\n      id\n    }\n  }\n"]);

  _templateObject50 = function _templateObject50() {
    return data;
  };

  return data;
}

function _templateObject49() {
  var data = _taggedTemplateLiteral(["\n  query getAllCentersQuery {\n    centers(orderBy: centerName_ASC) {\n      id\n      centerName\n      centerCode\n    }\n  }\n"]);

  _templateObject49 = function _templateObject49() {
    return data;
  };

  return data;
}

function _templateObject48() {
  var data = _taggedTemplateLiteral(["\n  query centersPerTownQuery($id: ID!) {\n    town(id: $id) {\n      townName\n      id\n      center(orderBy: centerName_ASC) {\n        centerName\n        centerNumber\n        centerSecretCode\n        centerCode\n        id\n      }\n    }\n  }\n"]);

  _templateObject48 = function _templateObject48() {
    return data;
  };

  return data;
}

function _templateObject47() {
  var data = _taggedTemplateLiteral(["\n  query getCentersOfATownQuery($id: ID!) {\n    town(id: $id) {\n      townName\n      id\n      center(orderBy: centerName_ASC) {\n        centerName\n        centerCode\n        centerNumber\n        id\n      }\n    }\n  }\n"]);

  _templateObject47 = function _templateObject47() {
    return data;
  };

  return data;
}

function _templateObject46() {
  var data = _taggedTemplateLiteral(["\n  query getTownsOfASubDivision($id: ID!) {\n    subDivision(id: $id) {\n      subDivName\n      id\n      town(orderBy: townName_ASC) {\n        townName\n        townCode\n        id\n      }\n    }\n  }\n"]);

  _templateObject46 = function _templateObject46() {
    return data;
  };

  return data;
}

function _templateObject45() {
  var data = _taggedTemplateLiteral(["\n  query getAllTownsQuery {\n    towns(orderBy: townName_ASC) {\n      townName\n      townCode\n      id\n    }\n  }\n"]);

  _templateObject45 = function _templateObject45() {
    return data;
  };

  return data;
}

function _templateObject44() {
  var data = _taggedTemplateLiteral(["\n  query getAllSubDivisionsQuery {\n    subDivision(orderBy: subDivName_ASC) {\n      subDivName\n      subDivCode\n      id\n    }\n  }\n"]);

  _templateObject44 = function _templateObject44() {
    return data;
  };

  return data;
}

function _templateObject43() {
  var data = _taggedTemplateLiteral(["\n  query getSubDivisionsOfADivisionQuery($id: ID!) {\n    division(id: $id) {\n      divName\n      id\n      subDivision(orderBy: subDivName_ASC) {\n        subDivName\n        subDivCode\n        id\n      }\n    }\n  }\n"]);

  _templateObject43 = function _templateObject43() {
    return data;
  };

  return data;
}

function _templateObject42() {
  var data = _taggedTemplateLiteral(["\n  query getDivisionsOfARegionQuery($id: ID!) {\n    region(id: $id) {\n      regName\n      id\n      division(orderBy: divName_ASC) {\n        divName\n        divCode\n        id\n      }\n    }\n  }\n"]);

  _templateObject42 = function _templateObject42() {
    return data;
  };

  return data;
}

function _templateObject41() {
  var data = _taggedTemplateLiteral(["\n  query getAllRegionsDivisionsAndTownsQuery {\n    regions {\n      id\n      regName\n      regCode\n      division(orderBy: divName_ASC) {\n        divName\n        divCode\n        id\n        subDivision {\n          town(orderBy: townName_ASC) {\n            id\n            townName\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject41 = function _templateObject41() {
    return data;
  };

  return data;
}

function _templateObject40() {
  var data = _taggedTemplateLiteral(["\n  query getAllRegionsAndDivisionsQuery {\n    regions {\n      id\n      regName\n      regCode\n      division(orderBy: divName_ASC) {\n        divName\n        divCode\n        id\n      }\n    }\n  }\n"]);

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
  var data = _taggedTemplateLiteral(["\n  query getAllGroup1Query($educType: EducationTypeWhereUniqueInput!) {\n    group1Subjects(educType: $educType, orderBy: subjectName_ASC) {\n      subjectName\n      subjectCode\n      subjectGroup\n      id\n    }\n  }\n"]);

  _templateObject37 = function _templateObject37() {
    return data;
  };

  return data;
}

function _templateObject36() {
  var data = _taggedTemplateLiteral(["\n  query getAllGroup2Query($educType: EducationTypeWhereUniqueInput!) {\n    group2Subjects(educType: $educType, orderBy: subjectName_ASC) {\n      subjectName\n      subjectCode\n      subjectGroup\n      id\n    }\n  }\n"]);

  _templateObject36 = function _templateObject36() {
    return data;
  };

  return data;
}

function _templateObject35() {
  var data = _taggedTemplateLiteral(["\n  query getAllExamsQuery {\n    exams(orderBy: examName_ASC) {\n      examName\n      examCode\n      id\n    }\n  }\n"]);

  _templateObject35 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34() {
  var data = _taggedTemplateLiteral(["\n  query getAllSubjectSpecialtiesOfASpecialtyQuery($id: ID!) {\n    specialty(id: $id) {\n      id\n      subjectSpecialty {\n        id\n        subject {\n          id\n          subjectName\n          subjectCode\n        }\n      }\n    }\n  }\n"]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33() {
  var data = _taggedTemplateLiteral(["\n  query getAllSubjectsWithEducTypesQuery {\n    subjects(orderBy: subjectName_ASC) {\n      id\n      subjectName\n      subjectCode\n      subjectType\n      subjectGroup\n      subjectSpecialty {\n        specialty {\n          specialtyName\n        }\n      }\n    }\n  }\n"]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = _taggedTemplateLiteral(["\n  query getAllSubjectsOfAnEducTypeQuery($id: ID!) {\n    educationType(id: $id) {\n      id\n      educationTypeName\n      subject(orderBy: subjectName_ASC) {\n        id\n        subjectName\n        subjectCode\n        subjectType\n        subjectGroup\n        specialty {\n          id\n        }\n        educType {\n          id\n        }\n      }\n    }\n  }\n"]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = _taggedTemplateLiteral(["\n  query getAllSpecialtiesQuery {\n    specialties(orderBy: specialtyName_ASC) {\n      id\n      specialtyName\n      specialtyCode\n    }\n  }\n"]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["\n  query getAllSpecialtiesOfACenterExamSessionQuery($id: ID!) {\n    centerExamSession(id: $id) {\n      id\n      centerExamSessionSpecialty {\n        id\n        registration {\n          candRegistrationNumber\n          id\n          candidate {\n            id\n            cand1stName\n            cand2ndName\n            cand3rdName\n          }\n        }\n        specialty {\n          id\n          specialtyName\n          specialtyCode\n        }\n      }\n    }\n  }\n"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral(["\n  query getAllSpecialtiesOfAnEducationTypeQuery($id: ID!) {\n    educationType(id: $id) {\n      id\n      educationTypeName\n      specialty {\n        id\n        specialtyName\n        specialtyCode\n      }\n    }\n  }\n"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["\n  query getAllSubjectGroupsQuery {\n    subjectGroups(orderBy: subjectGroupName_ASC) {\n      subjectGroupName\n      subjectGroupCode\n      id\n    }\n  }\n"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n  query getAllSubjectsQuery {\n    subjects(orderBy: subjectName_ASC) {\n      subjectName\n      subjectCode\n      id\n    }\n  }\n"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n  query getAllPhasesQuery {\n    phases(orderBy: phaseName_ASC) {\n      phaseName\n      phaseCode\n      id\n    }\n  }\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n  query getAllRanksQuery {\n    ranks(orderBy: rankName_ASC) {\n      rankName\n      rankCode\n      id\n    }\n  }\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n  query getCandidateByCandCodeQuery($candCode: String!) {\n    getCandidateByCode(candCode: $candCode) {\n      id\n      cand1stName\n      candCode\n      dateOfBirth\n      placeOfBirth\n      user {\n        id\n      }\n    }\n  }\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n  query centerExamSessionSpecialtyResultsQuery($id: ID!) {\n    centerExamSessionSpecialty(id: $id) {\n      id\n      centerExamSession {\n        id\n        center {\n          id\n          centerName\n          centerCode\n        }\n        examSession {\n          exam {\n            id\n            examName\n          }\n          session {\n            id\n            sessionName\n          }\n        }\n      }\n\n      specialty {\n        id\n        specialtyName\n        specialtyCode\n      }\n      registration {\n        id\n        candRegistrationNumber\n        candExamSecretCode\n        candidate {\n          id\n          cand1stName\n          cand2ndName\n          cand3rdName\n          dateOfBirth\n          placeOfBirth\n          email\n          phoneNumb\n          user {\n            id\n          }\n          gender\n        }\n        scores {\n          id\n          subjectAve\n        }\n      }\n    }\n  }\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  query centerExamSessionForResultsQuery($id: ID!) {\n    centerExamSession(id: $id) {\n      id\n      center {\n        id\n        centerName\n      }\n      examSession {\n        id\n        exam {\n          examName\n          id\n        }\n        session {\n          id\n          sessionName\n        }\n      }\n      registration {\n        id\n        EPF1\n        EPF2\n        centerExamSession {\n          id\n          center {\n            id\n            centerName\n          }\n          examSession {\n            id\n            exam {\n              examName\n              id\n            }\n            session {\n              id\n              sessionName\n            }\n          }\n        }\n        candRegistrationNumber\n        candExamSecretCode\n        aptitude\n        candidate {\n          id\n          cand1stName\n          cand2ndName\n          cand3rdName\n          dateOfBirth\n          placeOfBirth\n          email\n          phoneNumb\n          user {\n            id\n          }\n          gender\n        }\n        specialty {\n          id\n          specialtyName\n          specialtyCode\n        }\n        scores {\n          id\n          subjectAve\n        }\n      }\n    }\n  }\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  query centerExamSessionSpecialtyForResultsQuery($centerExamSession: String!) {\n    centerExamSessionSpecialtyForResults(\n      centerExamSession: $centerExamSession\n    ) {\n      id\n      specialty {\n        id\n        specialtyName\n      }\n    }\n  }\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  query getCenterRegistrationIDsQuery(\n    $exam: ExamWhereUniqueInput!\n    $center: CenterWhereUniqueInput!\n    $session: SessionWhereUniqueInput!\n  ) {\n    centerRegistrationIDs(exam: $exam, center: $center, session: $session) {\n      id\n    }\n  }\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  query getCenterIDFromCenterCodeQuery($centerSecretCode: String!) {\n    getCenterByCode(centerSecretCode: $centerSecretCode) {\n      id\n    }\n  }\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  query getRegistrationIDFromRegNumberQuery($candRegistrationNumber: String!) {\n    candidateRegistrationNumber(\n      candRegistrationNumber: $candRegistrationNumber\n    ) {\n      id\n      candidate {\n        id\n        cand1stName\n        cand2ndName\n        cand3rdName\n        placeOfBirth\n        dateOfBirth\n        image\n        momName\n        dadName\n        email\n        user {\n          id\n        }\n        gender\n        registration {\n          id\n\n          centerExamSessionSpecialty {\n            id\n            specialty {\n              id\n              specialtyName\n            }\n            centerExamSession {\n              center {\n                id\n                centerName\n              }\n              examSession {\n                id\n                exam {\n                  id\n                  examName\n                }\n                session {\n                  id\n                  sessionName\n                }\n              }\n            }\n          }\n          scores {\n            id\n            subjectAve\n            coeff\n            subjectSpecialty {\n              id\n              subjectName\n            }\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  query getExaminerIDQuery($examinerCode: String!) {\n    examinerByCode(examinerCode: $examinerCode) {\n      id\n    }\n  }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  query getCandidateIDQuery($candCode: String!) {\n    candidateCode(candCode: $candCode) {\n      id\n    }\n  }\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  query getAllCandidateRegistrationIDsQuery($id: ID!) {\n    candidate(id: $id) {\n      id\n      cand1stName\n      cand2ndName\n      cand3rdName\n      placeOfBirth\n      dateOfBirth\n      image\n      momName\n      dadName\n      email\n      user {\n        id\n      }\n      gender\n      registration {\n        id\n\n        centerExamSessionSpecialty {\n          id\n          specialty {\n            id\n            specialtyName\n          }\n          centerExamSession {\n            center {\n              id\n              centerName\n            }\n            examSession {\n              id\n              exam {\n                id\n                examName\n              }\n              session {\n                id\n                sessionName\n              }\n            }\n          }\n        }\n        scores {\n          id\n          subjectAve\n          coeff\n        }\n      }\n      id\n    }\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  query getCandidateRegistrationIDsQuery($candidate: RegistrationWhereInput!) {\n    candidateRegistrationIDs(candidate: $candidate) {\n      id\n    }\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  query getCandidateRegistrationIDQuery(\n    $centerExamSession: CenterExamSessionWhereUniqueInput!\n    $candidate: CandidateWhereUniqueInput!\n  ) {\n    candidateRegistrationID(\n      centerExamSession: $centerExamSession\n      candidate: $candidate\n    ) {\n      id\n    }\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  query getCandidateRegistrationInfoQuery($id: ID!) {\n    registration(id: $id) {\n      id\n      aptitude\n      EPF1\n      EPF2\n      candExamSecretCode\n      createdAt\n      candRegistrationNumber\n      candidate {\n        cand1stName\n        cand2ndName\n        cand3rdName\n        image\n        email\n        candCode\n        dateOfBirth\n        placeOfBirth\n        gender\n      }\n      centerExamSessionSpecialty {\n        id\n        specialty {\n          id\n          specialtyName\n          subjectSpecialty {\n            coeff\n            subject {\n              id\n              subjectName\n              subjectCode\n            }\n          }\n        }\n        centerExamSession {\n          center {\n            id\n            centerName\n          }\n          examSession {\n            id\n            exam {\n              id\n              examName\n            }\n            session {\n              id\n              sessionName\n            }\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  query getEachCandidateResultsQuery($id: ID!) {\n    registration(id: $id) {\n      id\n      candidate {\n        cand1stName\n        cand2ndName\n        cand3rdName\n        momName\n        dadName\n        email\n        dateOfBirth\n        user {\n          id\n        }\n        gender\n      }\n      exam {\n        examName\n      }\n      session {\n        sessionName\n      }\n      specialty {\n        id\n        specialtyName\n      }\n      center {\n        centerName\n      }\n    }\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  query getAllCenterResultsQuery($centerExamSession: String!) {\n    centerExamSessionSpecialtyForResults(\n      centerExamSession: $centerExamSession\n    ) {\n      id\n      specialty {\n        id\n        specialtyName\n        subjectSpecialty {\n          id\n          subjectName\n        }\n      }\n      registration {\n        id\n        candidate {\n          cand1stName\n          id\n        }\n        scores {\n          id\n          subjectAve\n          coeff\n          subjectSpecialty {\n            id\n            subjectName\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  query getExaminerRegistrationQuery($id: ID!) {\n    centerExamSessionExaminer(id: $id) {\n      id\n      examiner {\n        examiner1stName\n        examiner2ndName\n        examinerOtherNames\n        examinerMatricule\n        examinerPhone\n        examinerCNI\n        examinerImage\n        examinerEmail\n        gender\n      }\n      centerExamSession {\n        id\n        examSession {\n          id\n          exam {\n            id\n            examName\n          }\n          session {\n            id\n            sessionName\n          }\n        }\n        center {\n          id\n          centerName\n        }\n      }\n      phaseRank {\n        id\n        rankName\n      }\n    }\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  query getCandidateResultsQuery($id: ID!) {\n    registration(id: $id) {\n      id\n      createdAt\n      candRegistrationNumber\n\n      candidate {\n        cand1stName\n        cand2ndName\n        cand3rdName\n        momName\n        dadName\n        placeOfBirth\n        image\n        email\n        user {\n          id\n        }\n        dateOfBirth\n        gender\n      }\n      centerExamSessionSpecialty {\n        centerExamSession {\n          id\n          examSession {\n            id\n            exam {\n              id\n              examName\n            }\n            session {\n              id\n              sessionName\n            }\n          }\n          center {\n            id\n            centerName\n          }\n        }\n        specialty {\n          id\n          specialtyName\n        }\n      }\n      scores {\n        id\n        subjectAve\n        coeff\n        subjectSpecialty {\n          id\n          subject {\n            id\n            subjectName\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  query getCenterResultsQuery(\n    $exam: ExamWhereUniqueInput!\n    $center: CenterWhereUniqueInput!\n    $session: SessionWhereUniqueInput!\n  ) {\n    getResultsPerCenter(exam: $exam, center: $center, session: $session) {\n      id\n      candidate {\n        cand1stName\n        cand2ndName\n        cand3rdName\n        placeOfBirth\n        email\n        user {\n          id\n        }\n        dateOfBirth\n        user {\n          id\n        }\n        gender\n      }\n      exam {\n        examName\n      }\n      session {\n        sessionName\n      }\n      center {\n        centerName\n      }\n      scores {\n        subjectAve\n        coeff\n        subjectSpecialty {\n          subjectName\n          specialty {\n            id\n            specialtyName\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  query getAllUsersQuery {\n    users(orderBy: name_ASC) {\n      name\n      email\n      id\n      password\n      resetToken\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  query getAllRegionsQuery {\n    regions(orderBy: regName_ASC) {\n      regName\n      regCode\n      id\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  query getAllEducationTypesQuery {\n    educationTypes(orderBy: educationTypeName_ASC) {\n      id\n      educationTypeName\n      educationTypeCode\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  query getCESExaminerQuery(\n    $examiner: ExaminerWhereUniqueInput!\n    $centerExamSession: CenterExamSessionWhereUniqueInput!\n  ) {\n    getCenterExamSessionExaminers(\n      examiner: $examiner\n      centerExamSession: $centerExamSession\n    ) {\n      id\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  query singleEducationTypeQuery($id: ID!) {\n    educationType(id: $id) {\n      educationTypeName\n      educationTypeCode\n      id\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query currentUserQuery {\n    me {\n      id\n      email\n      name\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var currentUserQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject());
var singleEducationTypeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject2());
var getCESExaminerQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject3());
var getAllEducationTypesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject4());
var getAllRegionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject5());
var getAllUsersQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject6());
var getCenterResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject7());
var getCandidateResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject8());
var getExaminerRegistrationQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject9());
var getAllCenterResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject10());
var getEachCandidateResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject11());
var getCandidateRegistrationInfoQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject12());
var getCandidateRegistrationIDQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject13());
var getCandidateRegistrationIDsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject14());
var getAllCandidateRegistrationIDsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject15());
var getCandidateIDQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject16());
var getExaminerIDQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject17());
var getRegistrationIDFromRegNumberQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject18());
var getCenterIDFromCenterCodeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject19());
var getCenterRegistrationIDsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject20());
var centerExamSessionSpecialtyForResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject21());
var centerExamSessionForResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject22());
var centerExamSessionSpecialtyResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject23());
var getCandidateByCandCodeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject24());
var getAllRanksQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject25());
var getAllPhasesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject26());
var getAllSubjectsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject27());
var getAllSubjectGroupsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject28());
var getAllSpecialtiesOfAnEducationTypeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject29());
var getAllSpecialtiesOfACenterExamSessionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject30());
var getAllSpecialtiesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject31());
var getAllSubjectsOfAnEducTypeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject32());
var getAllSubjectsWithEducTypesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject33());
var getAllSubjectSpecialtiesOfASpecialtyQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject34());
var getAllExamsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject35());
var getAllGroup2Query = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject36());
var getAllGroup1Query = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject37());
var getAllSessionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject38());
var getAllDivisionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject39());
var getAllRegionsAndDivisionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject40());
var getAllRegionsDivisionsAndTownsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject41());
var getDivisionsOfARegionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject42());
var getSubDivisionsOfADivisionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject43());
var getAllSubDivisionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject44());
var getAllTownsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject45());
var getTownsOfASubDivisionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject46());
var getCentersOfATownQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject47());
var centersPerTownQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject48());
var getAllCentersQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject49());
var getAllCandidatesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject50()); ///*****************Single object queries */

var singleCenterQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject51());
var getSingleCenterQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject52());
var getSingleProfQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject53());
var getSingleCenterByCodeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject54());
var getASingleCenterQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject55());
var singleTownQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject56());
var getSingleCenterExamSessionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject57());
var getAllRanksOfAnExamPhaseQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject58());
var getRegisteredCandidateCountQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject59());
var getRegisteredCandidatesPerSpecialty = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject60());
var getCenterExamSessionSpecialtyQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject61());
var getSpecialtyFromCESSQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject62());
var getExamSessionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject63());
var singleExamQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject64());
var singleCandidateQuery1 = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject65());
var singleCandidateQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject66());
var singleExaminerQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject67());
var viewSingleCandidateQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject68());
var getScoreID = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject69());
var getRegistrations = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject70());
var singleSubDivisionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject71());
var getSingleRegionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject72());
var singlePhaseQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject73());
var singleSpecialtyQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject74());
var dataForAverage = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject75());
var singleDivisionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject76());
var singleRankQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject77());
var singleSubjectQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject78());
var singleSubjectGroupQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject79());
var singleSessionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject80()); ///*****************End Single object queries */



/***/ }),

/***/ "./src/components/styles/StyledPage.jsx":
/*!**********************************************!*\
  !*** ./src/components/styles/StyledPage.jsx ***!
  \**********************************************/
/*! exports provided: MediumStyledPage, TableStyledPage, MinimStyledPage, MiniStyledPage, StyledPage, BigStyledPage, BiggestStyledPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediumStyledPage", function() { return MediumStyledPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableStyledPage", function() { return TableStyledPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinimStyledPage", function() { return MinimStyledPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniStyledPage", function() { return MiniStyledPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledPage", function() { return StyledPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigStyledPage", function() { return BigStyledPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiggestStyledPage", function() { return BiggestStyledPage; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var TableStyledPage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "StyledPage__TableStyledPage",
  componentId: "sc-141gozs-0"
})(["padding:0 1rem;margin:0 auto;display:grid;grid-template-columns:1fr;grid-auto-flow:row;text-align:center;width:100vw;min-width:30rem;background-color:", ";h4{margin:0 auto;margin-bottom:1rem;padding:0.5rem 1rem;text-align:center;font-size:1.6rem;font-weight:normal;box-shadow:", ";background:", ";width:100%;border-radius:0.5rem;color:", ";}.Form{justify-items:center;align-items:center;}form{justify-items:center;align-items:center;}"], function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.formBS;
}, function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.blues[2];
});
var StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "StyledPage",
  componentId: "sc-141gozs-1"
})(["padding:0 1rem;margin:0 auto;display:grid;grid-template-columns:1fr;grid-auto-flow:row;text-align:center;width:70vw;min-width:30rem;background-color:", ";h4{margin:0 auto;margin-bottom:1rem;padding:0.5rem 1rem;text-align:center;font-size:1.6rem;font-weight:normal;box-shadow:", ";background:", ";width:100%;border-radius:0.5rem;color:", ";}.Form{justify-items:center;align-items:center;}form{justify-items:center;align-items:center;}"], function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.formBS;
}, function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.blues[2];
});
var MiniStyledPage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "StyledPage__MiniStyledPage",
  componentId: "sc-141gozs-2"
})(["display:grid;padding:0 1rem;margin:0 auto;grid-template-columns:1fr;grid-auto-flow:row;text-align:center;width:50vw;min-width:30rem;background-color:", ";h4{margin:0 auto;margin-bottom:1rem;padding:0.5rem 1rem;text-align:center;font-size:1.6rem;font-weight:normal;box-shadow:", ";background:", ";width:100%;border-radius:0.5rem;color:", ";}"], function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.formBS;
}, function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.blues[2];
});
var MinimStyledPage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "StyledPage__MinimStyledPage",
  componentId: "sc-141gozs-3"
})(["display:grid;margin:0 auto;grid-template-columns:1fr;grid-auto-flow:row;text-align:center;width:30vw;min-width:25rem;z-index:-10;background-color:", ";h4{margin:0 auto;margin-bottom:1rem;padding:0.5rem 1rem;text-align:center;font-size:1.6rem;font-weight:normal;box-shadow:", ";background:", ";width:100%;border-radius:0.5rem;color:", ";}.Form{justify-items:center;align-items:center;}form{justify-items:center;align-items:center;}"], function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.formBS;
}, function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.blues[2];
});
var BigStyledPage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "StyledPage__BigStyledPage",
  componentId: "sc-141gozs-4"
})(["display:grid;padding:0 1rem;margin:0 auto;grid-template-columns:1fr;grid-auto-flow:row;text-align:center;width:60vw;min-width:30rem;background-color:", ";h4{margin:0 auto;margin-bottom:1rem;padding:0.5rem 1rem;text-align:center;font-size:1.6rem;font-weight:normal;box-shadow:", ";background:", ";width:100%;border-radius:0.5rem;color:", ";}.Form{justify-items:center;align-items:center;}fieldset{justify-items:center;align-items:center;}"], function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.formBS;
}, function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.blues[2];
});
var BiggestStyledPage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "StyledPage__BiggestStyledPage",
  componentId: "sc-141gozs-5"
})(["display:grid;padding:0 1rem;margin:0 auto;grid-template-columns:1fr;text-align:center;width:90vw;min-width:30rem;background-color:", ";h4{margin:0 auto;margin-bottom:1rem;padding:0.5rem 1rem;text-align:center;font-size:1.6rem;font-weight:normal;box-shadow:", ";background:", ";width:100%;border-radius:0.5rem;color:", ";}.Form{justify-items:center;align-items:center;}fieldset{justify-items:center;align-items:center;}"], function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.formBS;
}, function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.blues[2];
});
var MediumStyledPage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "StyledPage__MediumStyledPage",
  componentId: "sc-141gozs-6"
})(["display:grid;padding:0 1rem;margin:0 auto;grid-template-columns:1fr;text-align:center;width:35vw;min-width:30rem;background-color:", ";h4{margin:0 auto;margin-bottom:1rem;padding:0.5rem 1rem;text-align:center;font-size:1.6rem;font-weight:normal;box-shadow:", ";background:", ";width:100%;border-radius:0.5rem;color:", ";}.Form{justify-items:center;align-items:center;}fieldset{justify-items:center;align-items:center;}"], function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.formBS;
}, function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.blues[2];
});


/***/ }),

/***/ "./src/components/user/Signout.jsx":
/*!*****************************************!*\
  !*** ./src/components/user/Signout.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../queries&Mutations&Functions/Queries */ "./src/components/queries&Mutations&Functions/Queries.jsx");
/* harmony import */ var _queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../queries&Mutations&Functions/Mutations */ "./src/components/queries&Mutations&Functions/Mutations.jsx");
var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\user\\Signout.jsx";





var SingoutButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Signout__SingoutButton",
  componentId: "gdl0yg-0"
})(["color:white;background:", ";padding-left:5rem;padding-right:2rem;cursor:pointer;"], function (props) {
  return props.theme.blues[2];
});

var Signout = function Signout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
    mutation: _queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_4__["signoutMutation"],
    refetchQueries: [{
      query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_3__["currentUserQuery"]
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, function (signout) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SingoutButton, {
      onClick: signout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, " Sign Out ");
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Signout);

/***/ }),

/***/ "./src/components/user/Signup.jsx":
/*!****************************************!*\
  !*** ./src/components/user/Signup.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_StyledPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/StyledPage */ "./src/components/styles/StyledPage.jsx");
/* harmony import */ var _ErrorMessage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ErrorMessage.js */ "./src/components/ErrorMessage.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_FormInputs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/FormInputs */ "./src/components/utils/FormInputs.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../queries&Mutations&Functions/Mutations */ "./src/components/queries&Mutations&Functions/Mutations.jsx");
/* harmony import */ var _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../queries&Mutations&Functions/Queries */ "./src/components/queries&Mutations&Functions/Queries.jsx");

var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\user\\Signup.jsx";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var InputGroup = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "Signup__InputGroup",
  componentId: "hzgo4m-0"
})(["display:flex;flex-direction:column;margin:0 1rem;"]);
var AllControls = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "Signup__AllControls",
  componentId: "hzgo4m-1"
})(["display:flex;flex-direction:column;"]);
var LoginStyled = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "Signup__LoginStyled",
  componentId: "hzgo4m-2"
})(["display:grid;grid-template-columns:1fr;justify-items:left;a{display:block;cursor:pointer;}h9{display:block;}"]);
var validationSchema = yup__WEBPACK_IMPORTED_MODULE_8__["object"]().shape({
  email: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().min(3, "Email, 3 characters au moins").required("Email Obligatoire").email("Email invalide"),
  name: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().min(3, "Nom, 3 characters au moins").required("Nom Obligatoire"),
  password: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required("Mot de passe Obligatoire").min(8, "Mot de passe, 8 characters au moins"),
  confirmPassword: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required("Confirme mot de passe Obligatoire").oneOf([yup__WEBPACK_IMPORTED_MODULE_8__["ref"]("password")], "Les mots de passe ne correspondent pas").min(8, "Mot de passe, 8 characters au moins")
});

var Signup = function Signup() {
  var initialValues = {
    name: "",
    email: "",
    password: ""
  };

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__["useMutation"])(_queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_10__["signupUserMutation"], {
    refetchQueries: ["currentUserQuery"]
  }),
      _useMutation2 = _slicedToArray(_useMutation, 2),
      signup = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      loading = _useMutation2$.loading,
      error = _useMutation2$.error;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    method: "POST",
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, _ref) {
        var setSubmitting, resetForm, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setSubmitting = _ref.setSubmitting, resetForm = _ref.resetForm;
                _context.next = 3;
                return signup({
                  variables: _objectSpread({}, values)
                });

              case 3:
                res = _context.sent;
                setTimeout(function () {
                  console.log(JSON.stringify(values, null, 2));
                  console.log(res);
                  resetForm(true);
                  setSubmitting(false);
                }, 200);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, function (_ref3) {
    var isSubmitting = _ref3.isSubmitting;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_StyledPage__WEBPACK_IMPORTED_MODULE_2__["MinimStyledPage"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, "Ouverture de compte"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      error: error,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_6__["StyledForm"], {
      disabled: isSubmitting,
      "aria-busy": isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AllControls, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputGroup, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_6__["SygexInput"], {
      name: "email",
      type: "email",
      label: "Email",
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_6__["SygexInput"], {
      name: "name",
      type: "text",
      label: "Nom",
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_6__["SygexInput"], {
      name: "password",
      type: "password",
      label: "Mot de passe",
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_6__["SygexInput"], {
      name: "confirmPassword",
      type: "password",
      label: "Confirme mot de passe",
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LoginStyled, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h9", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, "Acceder a votre un compte: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/creates/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, "Connectez-vous")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_6__["ButtonStyled"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_6__["StyledButton"], {
      type: "submit",
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, "Valid", isSubmitting ? "ation en cours" : "er"))))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ }),

/***/ "./src/components/user/User.jsx":
/*!**************************************!*\
  !*** ./src/components/user/User.jsx ***!
  \**************************************/
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
/* harmony import */ var _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../queries&Mutations&Functions/Queries */ "./src/components/queries&Mutations&Functions/Queries.jsx");
var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\user\\User.jsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var User = function User(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], _extends({}, props, {
    query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_3__["currentUserQuery"],
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

/***/ "./src/components/utils/FormInputs.jsx":
/*!*********************************************!*\
  !*** ./src/components/utils/FormInputs.jsx ***!
  \*********************************************/
/*! exports provided: SygefexSelect, SygefexRadio, StyledLabel, StyledButton, ButtonStyled, SygexInput, StyledForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SygefexSelect", function() { return SygefexSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SygefexRadio", function() { return SygefexRadio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLabel", function() { return StyledLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledButton", function() { return StyledButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonStyled", function() { return ButtonStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SygexInput", function() { return SygexInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledForm", function() { return StyledForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\utils\\FormInputs.jsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
var customStyle = {
  control: function control(provided) {
    return _objectSpread({}, provided, {
      fontFamily: "Roboto Slab",
      border: "0 solid black",
      borderBottom: "0.9px solid #0780b7",
      fontSize: "1.6rem",
      paddingTop: "1rem",
      outline: "none",
      backgroundColor: "white",
      color: "#000",
      borderRadius: "0",
      boxShadow: "none",
      alignItems: "center",
      "&:hover": {
        borderBottom: " 0.2rem solid #d4351c",
        borderRadius: "0"
      },
      // border style on hover
      "&:focus": {
        borderBottom: " 0.2rem solid #d4351c",
        borderRadius: "0"
      } // border style on hover

    });
  },
  option: function option(provided) {
    return _objectSpread({}, provided, {
      textAlign: "left",
      fontSize: "1.5rem"
    });
  }
};
var StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.input.withConfig({
  displayName: "FormInputs__StyledInput",
  componentId: "ii1nqi-0"
})(["padding-top:1rem;margin-top:0.4rem;font-size:1.5rem;border-style:none;width:100%;outline:none;border-bottom:0.09rem solid ", ";z-index:10;font-family:\"Roboto Slab\";&:valid + label{top:-0.25rem;font-size:1.1rem;color:", ";}&:focus,&active{outline:none;border-bottom:0.2rem solid ", ";}&:focus + label{top:-0.25rem;font-size:1.1rem;color:#aaa;}"], function (props) {
  return props.theme.blues[2];
}, function (props) {
  return props.theme.britishBlue;
}, function (props) {
  return props.theme.britishRed;
});
var InputGroup = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "FormInputs__InputGroup",
  componentId: "ii1nqi-1"
})(["position:relative;"]);
var AllRadios = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "FormInputs__AllRadios",
  componentId: "ii1nqi-2"
})(["position:relative;margin:0.5rem;label{border:0;width:2rem;height:2rem;}"]);
var StyledLabel = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.label.withConfig({
  displayName: "FormInputs__StyledLabel",
  componentId: "ii1nqi-3"
})(["font-size:1.5rem;border-style:none;position:absolute;left:1rem;top:1.5rem;color:", ";pointer-events:none;transition:all 1s ease-out;font-family:\"Roboto Slab\";&:focus{outline:none;}"], function (props) {
  return props.theme.greys[2];
});
var StyledSelect = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.select.withConfig({
  displayName: "FormInputs__StyledSelect",
  componentId: "ii1nqi-4"
})(["margin-top:1rem;font-size:1.2rem;border-style:none;border-bottom:0.09rem solid ", ";option{background:white;font-weight:400;display:flex;white-space:pre;min-height:20px;padding:0px 2px 1px;background:", ";border-radius:0.5rem;}&:focus{outline:none;border-color:", ";}"], function (props) {
  return props.theme.blues[2];
}, function (props) {
  return props.theme.blues[0];
}, function (props) {
  return props.theme.britishRed;
});
var StyledErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "FormInputs__StyledErrorMessage",
  componentId: "ii1nqi-5"
})(["padding-top:0.2rem;font-size:1.2rem;color:", ";"], function (props) {
  return props.theme.britishRed;
});
var RadioStyled = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "FormInputs__RadioStyled",
  componentId: "ii1nqi-6"
})(["display:inline-block;input,label:hover{cursor:pointer;background:", ";}input[type=\"radio\"]{margin-top:0.5rem;border:0;width:2rem;height:2rem;margin:0 0.7rem;background:", ";}"], function (props) {
  return props.theme.lightBlues[2];
}, function (props) {
  return props.theme.lightBlues[2];
});
var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button.withConfig({
  displayName: "FormInputs__StyledButton",
  componentId: "ii1nqi-7"
})(["color:", ";border:0;border-radius:0.5rem;font-size:2.5rem;font-weight:300;line-height:1.5rem;box-shadow:", ";cursor:pointer;"], function (props) {
  return props.theme.blues[2];
}, function (props) {
  return props.theme.bs2;
});
var ButtonStyled = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "FormInputs__ButtonStyled",
  componentId: "ii1nqi-8"
})(["padding-bottom:0.5rem;padding-top:1rem;button{border-radius:0.6rem;font-size:1.5rem;font-weight:bold;box-shadow:", ";border:0.05rem solid ", ";color:", ";background:", ";cursor:pointer;padding:0.8rem;outline:none;&:hover{color:", ";background-color:", ";}}a{text-decoration:none;}"], function (props) {
  return props.theme.formBS;
}, function (props) {
  return props.theme.blues[2];
}, function (props) {
  return props.theme.blues[2];
}, function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.blues[2];
}, function (props) {
  return props.theme.pureWhite;
});
var StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "FormInputs__StyledForm",
  componentId: "ii1nqi-9"
})(["margin:0 3rem;padding:0.6rem;font-size:1.7rem;border-radius:0.9rem;border:0.001rem solid ", ";border-top:1rem solid ", ";border-bottom:1rem solid ", ";box-shadow:", ";min-width:20rem;&[disabled]{opacity:0.3;}&::before{height:0.3rem;content:\"\";display:block;background-image:linear-gradient( to right,#0780b7 0%,#e2b04a 20%,#0780b7 100% );}&[aria-busy=\"true\"]::before{background-size:50% auto;animation:", " 0.5s linear infinite;}"], function (props) {
  return props.theme.blues[2];
}, function (props) {
  return props.theme.blues[2];
}, function (props) {
  return props.theme.tableRed;
}, function (props) {
  return props.theme.formBS;
}, loading);

var SygexInput = function SygexInput(_ref) {
  var label = _ref.label,
      props = _objectWithoutProperties(_ref, ["label"]);

  var _useField = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useField"])(props),
      _useField2 = _slicedToArray(_useField, 2),
      field = _useField2[0],
      meta = _useField2[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputGroup, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledInput, _extends({
    className: "text-input"
  }, field, props, {
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLabel, {
    htmlFor: props.id || props.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, label), meta.touched && meta.error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledErrorMessage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, meta.error) : null);
};

var SygefexSelect = function SygefexSelect(_ref2) {
  var theme = _ref2.theme,
      props = _objectWithoutProperties(_ref2, ["theme"]);

  var customTheme = function customTheme(theme) {
    return _objectSpread({}, theme, {
      colors: _objectSpread({}, theme.colors, {
        primary25: "#0780b7",
        primary: "#d17f05"
      })
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    theme: customTheme,
    styles: customStyle
  }, props, {
    isSearchable: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }));
};

var SygefexRadio = function SygefexRadio(_ref3) {
  var label = _ref3.label,
      options = _ref3.options,
      props = _objectWithoutProperties(_ref3, ["label", "options"]);

  var _useField3 = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useField"])(props),
      _useField4 = _slicedToArray(_useField3, 2),
      field = _useField4[0],
      meta = _useField4[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AllRadios, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], _extends({
    label: label
  }, field, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }), function (_ref4) {
    var field = _ref4.field;
    return options.map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RadioStyled, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({}, field, {
        type: "radio",
        id: item.value,
        value: item.value,
        checked: field.value === item.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: props.id || item.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, item.key));
    });
  }), meta.touched && meta.error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledErrorMessage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, meta.error) : null);
};

 // <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>

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

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

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

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map