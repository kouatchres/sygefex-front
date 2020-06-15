module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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

/***/ "./pages/modify/modifyTown.jsx":
/*!*************************************!*\
  !*** ./pages/modify/modifyTown.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_town_TownToModifyHook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/components/town/TownToModifyHook */ "./src/components/town/TownToModifyHook.jsx");
var _jsxFileName = "E:\\SYGEFEX\\Sygefex-recent\\sygefex-frontend\\pages\\modify\\modifyTown.jsx";



var modifyTown = function modifyTown(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_town_TownToModifyHook__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (modifyTown);

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
var _jsxFileName = "E:\\SYGEFEX\\Sygefex-recent\\sygefex-frontend\\src\\components\\ErrorMessage.js";



var ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-3nz6rx-0"
})(["padding:0.5rem;background:", ";margin:0 1.1rem;border-radius:0.5rem;border:0.01rem solid rgba(0,0,0,0.05);border-left:0.05rem solid red;p{margin:0;font-size:1.2rem;font-weight:bold;}strong{margin-right:0.15rem;}"], function (props) {
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
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        "data-test": "graphql-error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Probleme Reseaux!"), error.message.replace("GraphQL error: ", "")));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    "data-test": "graphql-error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Erreure!"), error.message.replace("GraphQL error: ", "")));
};

DisplayError.defaultProps = {
  error: {}
};
DisplayError.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayError);

/***/ }),

/***/ "./src/components/queries&Mutations&Functions/Functions.jsx":
/*!******************************************************************!*\
  !*** ./src/components/queries&Mutations&Functions/Functions.jsx ***!
  \******************************************************************/
/*! exports provided: candExamSessionCode, roundFloatNumber, calcCandTotalScore, calcCandTotalCoeff, calcCandAve, objectFromCode, updateItemMutation, uniqueCodeGen, getSelectedObject, getObjectFromID, removeTypename, uploadFile, registrationSerialNumber, centerExamSessionObjectFromCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "candExamSessionCode", function() { return candExamSessionCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundFloatNumber", function() { return roundFloatNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcCandTotalScore", function() { return calcCandTotalScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcCandTotalCoeff", function() { return calcCandTotalCoeff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcCandAve", function() { return calcCandAve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectFromCode", function() { return objectFromCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItemMutation", function() { return updateItemMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueCodeGen", function() { return uniqueCodeGen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedObject", function() { return getSelectedObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjectFromID", function() { return getObjectFromID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTypename", function() { return removeTypename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFile", function() { return uploadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registrationSerialNumber", function() { return registrationSerialNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerExamSessionObjectFromCode", function() { return centerExamSessionObjectFromCode; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link */ "apollo-link");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_link__WEBPACK_IMPORTED_MODULE_2__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }




var uniqueCodeGen = function uniqueCodeGen(keyLength) {
  var i,
      key = '',
      //  characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  characters = 'abcdefghijklmnopqrstuvwxyzABCDEF@#$%&GHIJKLMNOPQRSTUVWXYZ0123456789';
  var charactersLength = characters.length;

  for (i = 0; i < keyLength; i++) {
    key += characters.substr(Math.floor(Math.random() * charactersLength + 1), 1);
  }

  return key;
};

var objectFromCode = function objectFromCode(codeValue) {
  var storedObject = {
    candCode: "".concat(codeValue)
  };
  return storedObject;
};

var getObjectFromID = function getObjectFromID(suppliedID) {
  var theObject = {
    id: "".concat(suppliedID)
  };
  return theObject;
};

var centerExamSessionObjectFromCode = function centerExamSessionObjectFromCode(codeValue) {
  var storedObject = {
    centerExamSession: "".concat(codeValue)
  };
  return storedObject;
};

var candExamSessionCode = function candExamSessionCode(candID, examID, sessionID) {
  return "".concat(candID + examID + sessionID);
};

var getSelectedObject = function getSelectedObject(dataSource, objectID) {
  // 1 copy the data source
  if (dataSource.length > 0) {
    var tempObjects = _toConsumableArray(dataSource); // get the object


    var selectedObject = tempObjects.find(function (item) {
      return item.id === objectID;
    });
    return selectedObject;
  }
}; // function to model a number with leading zeroes


Number.prototype.pad = function (size) {
  var s = String(this);

  while (s.length < (size || 2)) {
    s = '0' + s;
  }

  return s;
};

var calcCandAve = function calcCandAve(candScores) {
  var aveTotal = candScores && candScores.reduce(function (tally, item) {
    return tally + item.subjectAve * item.coeff;
  }, 0);
  var coeffTotal = candScores.reduce(function (tally, item) {
    return item.subjectAve === null ? tally : tally + item.coeff;
  }, 0);
  var candAve = aveTotal / coeffTotal;
  return candAve;
};

var calcCandTotalScore = function calcCandTotalScore(candScores) {
  var aveTotal = candScores && candScores.reduce(function (tally, item) {
    return tally + item.subjectAve * item.coeff;
  }, 0);
  return aveTotal;
};

var calcCandTotalCoeff = function calcCandTotalCoeff(candScores) {
  var coeffTotal = candScores && candScores.reduce(function (tally, item) {
    return item.subjectAve === null ? tally : tally + item.coeff;
  }, 0);
  return coeffTotal;
};

var roundFloatNumber = function roundFloatNumber(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
};

var removeTypename = function removeTypename(value) {
  if (value === null || value === undefined) {
    return value;
  } else if (Array.isArray(value)) {
    return value.map(function (v) {
      return removeTypename(v);
    });
  } else if (_typeof(value) === 'object') {
    var newObj = {};
    Object.entries(value).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          v = _ref2[1];

      if (key !== '__typename') {
        newObj[key] = removeTypename(v);
      }
    });
    return newObj;
  }

  return value;
};

var uploadFile =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
    var files, data, res, file;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            files = e.target.files;
            data = new FormData();
            data.append('file', files[0]);
            data.append('upload_preset', 'ineximages');
            _context.next = 6;
            return fetch('https://api.cloudinary.com/v1_1/inex/image/upload', {
              method: 'POST',
              body: data
            });

          case 6:
            res = _context.sent;
            _context.next = 9;
            return res.json();

          case 9:
            file = _context.sent;
            console.log(file); // this.setState({ image: file.secure_url });

            setState({
              image: file.secure_url
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function uploadFile(_x) {
    return _ref3.apply(this, arguments);
  };
}();



/***/ }),

/***/ "./src/components/queries&Mutations&Functions/Mutations.jsx":
/*!******************************************************************!*\
  !*** ./src/components/queries&Mutations&Functions/Mutations.jsx ***!
  \******************************************************************/
/*! exports provided: createCandidateMutation, createNewSubjectMutation, createNewSubjectTypeMutation, createTownMutation, createCenterExamSessionExaminerMutation, createDivisionMutation, createRegistrationMutation, createCenterMutation, createEducationTypeMutation, createSeriesMutation, createSubDivisionMutation, createNewSessionMutation, createNewRankMutation, createNewReportMutation, createNewRegionMutation, createNewGenderMutation, createExamMutation, registerSubjectSeriesMutation, registerNewSubjectSeriesMutation, updateCenterMutation, updateTownMutation, updateSessionMutation, updateRegionMutation, updateExamMutation, updateSubDivisionMutation, updateGenderMutation, updateCandidateMutation, updateScoreMutation, updateDivisionMutation, updateItemMutation, createExaminerMutation, createPhaseMutation, createCenterExamSessionSeriesMutation, updateSeriesMutation, updateRankMutation, createPhaseRankMutation, createNewCountryMutation, signUpMutation, updateSubjectMutation, updateSubjectTypeMutation, createCenterExamSessionMutation, updateEducationTypeMutation, signInCandidate, loginUserMutation, signupUserMutation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCandidateMutation", function() { return createCandidateMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewSubjectMutation", function() { return createNewSubjectMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewSubjectTypeMutation", function() { return createNewSubjectTypeMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTownMutation", function() { return createTownMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCenterExamSessionExaminerMutation", function() { return createCenterExamSessionExaminerMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDivisionMutation", function() { return createDivisionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRegistrationMutation", function() { return createRegistrationMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCenterMutation", function() { return createCenterMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEducationTypeMutation", function() { return createEducationTypeMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSeriesMutation", function() { return createSeriesMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSubDivisionMutation", function() { return createSubDivisionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewSessionMutation", function() { return createNewSessionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewRankMutation", function() { return createNewRankMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewReportMutation", function() { return createNewReportMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewRegionMutation", function() { return createNewRegionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewGenderMutation", function() { return createNewGenderMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExamMutation", function() { return createExamMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerSubjectSeriesMutation", function() { return registerSubjectSeriesMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerNewSubjectSeriesMutation", function() { return registerNewSubjectSeriesMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCenterMutation", function() { return updateCenterMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTownMutation", function() { return updateTownMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSessionMutation", function() { return updateSessionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateRegionMutation", function() { return updateRegionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateExamMutation", function() { return updateExamMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSubDivisionMutation", function() { return updateSubDivisionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGenderMutation", function() { return updateGenderMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCandidateMutation", function() { return updateCandidateMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateScoreMutation", function() { return updateScoreMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDivisionMutation", function() { return updateDivisionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItemMutation", function() { return updateItemMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExaminerMutation", function() { return createExaminerMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPhaseMutation", function() { return createPhaseMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCenterExamSessionSeriesMutation", function() { return createCenterExamSessionSeriesMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSeriesMutation", function() { return updateSeriesMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateRankMutation", function() { return updateRankMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPhaseRankMutation", function() { return createPhaseRankMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewCountryMutation", function() { return createNewCountryMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpMutation", function() { return signUpMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSubjectMutation", function() { return updateSubjectMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSubjectTypeMutation", function() { return updateSubjectTypeMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCenterExamSessionMutation", function() { return createCenterExamSessionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEducationTypeMutation", function() { return updateEducationTypeMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInCandidate", function() { return signInCandidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUserMutation", function() { return loginUserMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signupUserMutation", function() { return signupUserMutation; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);


var _this = undefined;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject44() {
  var data = _taggedTemplateLiteral(["\n  mutation signUpMutation($email: String!, $name: String!, $password: String!) {\n    signUp(email: $email, name: $name, password: $password) {\n      id\n      email\n      resetToken\n      password\n    }\n  }\n"]);

  _templateObject44 = function _templateObject44() {
    return data;
  };

  return data;
}

function _templateObject43() {
  var data = _taggedTemplateLiteral(["\n  mutation updateGenderMutation(\n    $id: ID!\n    $genderName: String\n    $genderCode: String\n  ) {\n    updateGender(id: $id, genderName: $genderName, genderCode: $genderCode) {\n      id\n      genderName\n      genderCode\n    }\n  }\n"]);

  _templateObject43 = function _templateObject43() {
    return data;
  };

  return data;
}

function _templateObject42() {
  var data = _taggedTemplateLiteral(["\n  mutation updateCandidateMutation(\n    $id: ID!\n    $cand1stName: String\n    $cand2ndName: String\n    $cand3rdName: String\n    $momName: String\n    $dadName: String\n    $email: String\n    $image: String\n    $phoneNumb: Int\n    $placeOfBirth: String\n    $dateOfBirth: DateTime\n    $birthCertNumber: String\n    $gender: GenderWhereUniqueInput\n  ) {\n    updateCandidate(\n      id: $id\n      cand1stName: $cand1stName\n      cand2ndName: $cand2ndName\n      cand3rdName: $cand3rdName\n      momName: $momName\n      dadName: $dadName\n      email: $email\n      image: $image\n      phoneNumb: $phoneNumb\n      placeOfBirth: $placeOfBirth\n      dateOfBirth: $dateOfBirth\n      birthCertNumber: $birthCertNumber\n      gender: $gender\n    ) {\n      id\n      cand1stName\n      cand2ndName\n      cand3rdName\n      momName\n      dadName\n      email\n      image\n      phoneNumb\n      placeOfBirth\n      dateOfBirth\n      birthCertNumber\n      gender {\n        id\n      }\n    }\n  }\n"]);

  _templateObject42 = function _templateObject42() {
    return data;
  };

  return data;
}

function _templateObject41() {
  var data = _taggedTemplateLiteral(["\n  mutation updateScoreMutation(\n    $subjectSeries: SubjectSeriesWhereUniqueInput!\n    $subjectAve: Float!\n    $candExamSecretCode: String!\n  ) {\n    updateScore(\n      subjectSeries: $subjectSeries\n      subjectAve: $subjectAve\n      candExamSecretCode: $candExamSecretCode\n    ) {\n      subjectAve\n      coeff\n      id\n      subjectSeries {\n        id\n        subjectCode\n        subjectName\n      }\n    }\n  }\n"]);

  _templateObject41 = function _templateObject41() {
    return data;
  };

  return data;
}

function _templateObject40() {
  var data = _taggedTemplateLiteral(["\n  mutation updateExamMutation($id: ID!, $examName: String, $examCode: String) {\n    updateExam(id: $id, examName: $examName, examCode: $examCode) {\n      examName\n      examCode\n      id\n    }\n  }\n"]);

  _templateObject40 = function _templateObject40() {
    return data;
  };

  return data;
}

function _templateObject39() {
  var data = _taggedTemplateLiteral(["\n  mutation updateTownMutation($id: ID!, $townName: String, $townCode: String) {\n    updateTown(id: $id, townName: $townName, townCode: $townCode) {\n      townName\n      townCode\n      id\n    }\n  }\n"]);

  _templateObject39 = function _templateObject39() {
    return data;
  };

  return data;
}

function _templateObject38() {
  var data = _taggedTemplateLiteral(["\n  mutation updateCenterMutation(\n    $id: ID!\n    $centerName: String\n    $centerCode: String\n    $centerNumber: Int\n  ) {\n    updateCenter(\n      id: $id\n      centerName: $centerName\n      centerCode: $centerCode\n      centerNumber: $centerNumber\n    ) {\n      id\n      centerName\n      centerNumber\n      centerCode\n    }\n  }\n"]);

  _templateObject38 = function _templateObject38() {
    return data;
  };

  return data;
}

function _templateObject37() {
  var data = _taggedTemplateLiteral(["\n  mutation updateSubDivisionMutation(\n    $id: ID!\n    $subDivName: String\n    $subDivCode: String\n  ) {\n    updateSubDivision(\n      id: $id\n      subDivName: $subDivName\n      subDivCode: $subDivCode\n    ) {\n      subDivName\n      subDivCode\n      id\n    }\n  }\n"]);

  _templateObject37 = function _templateObject37() {
    return data;
  };

  return data;
}

function _templateObject36() {
  var data = _taggedTemplateLiteral(["\n  mutation createExaminerMutation(\n    $examiner1stName: String!\n    $examiner2ndName: String!\n    $examinerOtherNames: String\n    $examinerCode: String!\n    $examinerEmail: String!\n    $examinerCNI: String!\n    $examinerMatricule: String!\n    $examinerImage: String!\n    $examinerPhone: Int!\n    $gender: GenderWhereUniqueInput!\n  ) {\n    createExaminer(\n      examiner1stName: $examiner1stName\n      examiner2ndName: $examiner2ndName\n      examinerOtherNames: $examinerOtherNames\n      examinerMatricule: $examinerMatricule\n      examinerCode: $examinerCode\n      examinerCNI: $examinerCNI\n      examinerEmail: $examinerEmail\n      examinerImage: $examinerImage\n      examinerPhone: $examinerPhone\n      gender: $gender\n    ) {\n      id\n      examiner1stName\n      examiner2ndName\n      examinerOtherNames\n      examinerCode\n      examinerEmail\n      examinerImage\n      examinerPhone\n    }\n  }\n"]);

  _templateObject36 = function _templateObject36() {
    return data;
  };

  return data;
}

function _templateObject35() {
  var data = _taggedTemplateLiteral(["\n  mutation createCandidateMutation(\n    $cand1stName: String!\n    $cand2ndName: String\n    $cand3rdName: String\n    $dadName: String\n    $momName: String\n    $candCode: String\n    $email: String!\n    $image: String!\n    $phoneNumb: Int\n    $dateOfBirth: DateTime\n    $birthCertNumber: String\n    $placeOfBirth: String\n    $gender: GenderWhereUniqueInput!\n  ) {\n    createCandidate(\n      cand1stName: $cand1stName\n      cand2ndName: $cand2ndName\n      dadName: $dadName\n      momName: $momName\n      cand3rdName: $cand3rdName\n      candCode: $candCode\n      email: $email\n      image: $image\n      phoneNumb: $phoneNumb\n      dateOfBirth: $dateOfBirth\n      birthCertNumber: $birthCertNumber\n      placeOfBirth: $placeOfBirth\n      gender: $gender\n    ) {\n      id\n      cand1stName\n      cand2ndName\n      cand3rdName\n      momName\n      dadName\n      candCode\n      birthCertNumber\n      dateOfBirth\n      image\n    }\n  }\n"]);

  _templateObject35 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34() {
  var data = _taggedTemplateLiteral(["\n  mutation registerNewSubjectSeriesMutation(\n    $series: SeriesWhereUniqueInput!\n    $coeff: Int!\n    $subjectName: String!\n    $subjectCode: String!\n  ) {\n    createSubjectSeries(\n      subjectCode: $subjectCode\n      subjectName: $subjectName\n      series: $series\n      coeff: $coeff\n    ) {\n      id\n      series {\n        id\n        seriesName\n        subjectSeries {\n          id\n          subjectName\n          subjectCode\n        }\n      }\n    }\n  }\n"]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33() {
  var data = _taggedTemplateLiteral(["\n  mutation registerSubjectSeriesMutation(\n    $subject: SubjectWhereUniqueInput!\n    $series: SeriesWhereUniqueInput!\n    $coeff: Int!\n  ) {\n    createSubjectSeries(subject: $subject, series: $series, coeff: $coeff) {\n      id\n      series {\n        id\n        seriesName\n        subjectSeries {\n          id\n          subject {\n            id\n            subjectName\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = _taggedTemplateLiteral(["\n  mutation createExamMutation($examName: String!, $examCode: String!) {\n    createExam(examName: $examName, examCode: $examCode) {\n      id\n      examName\n    }\n  }\n"]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = _taggedTemplateLiteral(["\n  mutation createPhaseMutation($phaseName: String!, $phaseCode: String!){\n    createPhase(phaseName: $phaseName, phaseCode: $phaseCode) {\n      id\n      phaseName\n    }\n  }\n"]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["\n  mutation createNewCountryMutation($countryName: String!, $countryCode: String!) {\n    createCountry(countryName: $countryName, countryCode: $countryCode) {\n      id\n      countryName\n      countryCode\n    }\n  }\n"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral(["\n  mutation loginUserMutation(\n     $email: String!\n      $password: String!\n      ) {\n    login(\n       password: $password \n         email: $email\n         ) {\n      id\n      email\n    }\n  }\n"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["\n  mutation signupUserMutation(\n    $name: String!\n     $email: String!\n      $password: String!\n      ) {\n  createUser(\n       password: $password \n        name: $name\n         email: $email\n         ) {\n      id\n      name\n      email\n    }\n  }\n"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n  mutation createNewRegionMutation(\n    $regName: String!\n     $regCode: String!\n      $country: CountryWhereUniqueInput!\n      ) {\n    createRegion(\n       country: $country \n        regName: $regName\n         regCode: $regCode\n         ) {\n      id\n      regName\n    }\n  }\n"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n  mutation createNewRankMutation($rankName: String!, $rankCode: String!) {\n    createRank(rankName: $rankName, rankCode: $rankCode) {\n      id\n      rankName\n    }\n  }\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n  mutation createNewSessionMutation(\n    $sessionName: String!\n    $sessionCode: String!\n  ) {\n    createSession(sessionName: $sessionName, sessionCode: $sessionCode) {\n      id\n      sessionName\n    }\n  }\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n  mutation createSubDivisionMutation(\n    $subDivName: String!\n    $subDivCode: String!\n    $division: DivisionWhereUniqueInput!\n  ) {\n    createSubDivision(\n      subDivName: $subDivName\n      subDivCode: $subDivCode\n      division: $division\n    ) {\n      id\n      subDivName\n      subDivCode\n      division {\n        divName\n      }\n    }\n  }\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n  mutation createNewSubjectMutation(\n    $subjectName: String!\n    $subjectCode: String!\n    $subjectType: SubjectTypeWhereUniqueInput!\n    $educType: EducationTypeWhereUniqueInput!\n  ) {\n    createSubject(\n      subjectName: $subjectName\n      educType: $educType\n      subjectCode: $subjectCode\n      subjectType: $subjectType\n    ) {\n      subjectCode\n      subjectName\n    }\n  }\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  mutation createNewSubjectTypeMutation(\n    $subjectTypeName: String!\n    $subjectTypeCode: String!\n  ) {\n    createSubjectType(\n      subjectTypeName: $subjectTypeName\n      subjectTypeCode: $subjectTypeCode\n    ) {\n      id\n      subjectTypeName\n    }\n  }\n"]);

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
  var data = _taggedTemplateLiteral(["\n  mutation createSeriesMutation(\n    $seriesName: String!\n    $seriesCode: String!\n    $educationType: EducationTypeWhereUniqueInput!\n  ) {\n    createSeries(\n      seriesName: $seriesName\n      seriesCode: $seriesCode\n      educationType: $educationType\n    ) {\n      id\n      seriesName\n    }\n  }\n"]);

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
  var data = _taggedTemplateLiteral(["\n  mutation createCenterExamSessionSeriesMutation(\n    $series: SeriesWhereUniqueInput!\n    $centerExamSession: CenterExamSessionWhereUniqueInput!\n  ) {\n    createCenterExamSessionSeries(\n      series: $series\n      centerExamSession: $centerExamSession\n    ) {\n      id\n    }\n  }\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  mutation createCenterExamSessionExaminerMutation(\n    $centerExamSession: CenterExamSessionWhereUniqueInput!\n    $examiner:  ExaminerWhereUniqueInput! \n    $phaseRank:  PhaseRankWhereUniqueInput! \n  ) {\n    createCenterExamSessionExaminer(\n    phaseRank: $phaseRank,\n    centerExamSession: $centerExamSession,\n    examiner: $examiner\n    ){                                                                                                                                                                      \n      id\n    }\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  mutation createPhaseRankMutation(\n    $phase: PhaseWhereUniqueInput!\n    $rankName:  String!                                                                                                                                                                    \n    $rankCode:  String!                                                                                                                                                                   \n  ) {\n    createPhaseRank(phase: $phase, rankName : $rankName, rankCode: $rankCode ){                                                                                                                                                                      \n      id\n    }\n  }\n"]);

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
  var data = _taggedTemplateLiteral(["\n  mutation createRegistrationMutation(\n    $candidate: CandidateWhereUniqueInput!\n    $candExamSecretCode: String!\n    $candExamSession: String!\n    $candRegistrationNumber: String!\n    $centerExamSession: CenterExamSessionWhereUniqueInput!\n    $centerExamSessionSeries: CenterExamSessionSeriesWhereUniqueInput!\n    $series: SeriesWhereUniqueInput!\n  ) {\n    createRegistration(\n      candidate: $candidate\n      candExamSecretCode: $candExamSecretCode\n      candExamSession: $candExamSession\n      candRegistrationNumber: $candRegistrationNumber\n      centerExamSession: $centerExamSession\n      centerExamSessionSeries: $centerExamSessionSeries\n      series: $series\n    ) {\n      id\n      centerExamSession {\n        id\n        center {\n          id\n          centerName\n        }\n      }\n      candidate {\n        id\n        cand1stName\n      }\n    }\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  mutation createNewGenderMutation($genderName: String!, $genderCode: String!) {\n    createGender(genderName: $genderName, genderCode: $genderCode) {\n      id\n      genderCode\n      genderName\n    }\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  mutation createNewReportMutation(\n    $reportImage: String!\n    $reportName: String!\n    $centerExamSessionExaminer: CenterExamSessionExaminerWhereUniqueInput!\n\n  ) {\n    createReport(\n      reportImage: $reportImage\n      reportName: $reportName\n      centerExamSessionExaminer: $centerExamSessionExaminer\n    ) {\n      id\n      reportName\n      reportImage\n    }\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  mutation updateRegionMutation($id: ID!, $regName: String, $regCode: String) {\n    updateRegion(id: $id, regName: $regName, regCode: $regCode) {\n      id\n      regName\n      regCode\n    }\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  mutation updateDivisionMutation(\n    $id: ID!\n    $divName: String\n    $divCode: String\n  ) {\n    updateDivision(id: $id, divName: $divName, divCode: $divCode) {\n      id\n      divName\n      divCode\n    }\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  mutation updateSeriesMutation(\n    $id: ID!\n    $seriesName: String\n    $seriesCode: String\n  ) {\n    updateSeries(id: $id, seriesName: $seriesName, seriesCode: $seriesCode) {\n      seriesName\n      seriesCode\n      id\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  mutation updateRankMutation($id: ID!, $rankName: String, $rankCode: String) {\n    updateRank(id: $id, rankName: $rankName, rankCode: $rankCode) {\n      id\n      rankName\n      rankCode\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  mutation updateSubjectMutation(\n    $id: ID!\n    $subjectName: String\n    $subjectCode: String\n  ) {\n    updateSubject(\n      id: $id\n      subjectName: $subjectName\n      subjectCode: $subjectCode\n    ) {\n      subjectName\n      subjectCode\n      id\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  mutation updateSubjectTypeMutation(\n    $id: ID!\n    $subjectTypeName: String\n    $subjectTypeCode: String\n  ) {\n    updateSubjectType(\n      id: $id\n      subjectTypeName: $subjectTypeName\n      subjectTypeCode: $subjectTypeCode\n    ) {\n      id\n      subjectTypeName\n      subjectTypeCode\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  mutation updateEducationTypeMutation(\n    $id: ID!\n    $educationTypeName: String\n    $educationTypeCode: String\n  ) {\n    updateEducationType(\n      id: $id\n      educationTypeName: $educationTypeName\n      educationTypeCode: $educationTypeCode\n    ) {\n      id\n      educationTypeName\n      educationTypeCode\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation updateSessionMutation(\n    $id: ID!\n    $sessionName: String\n    $sessionCode: String\n  ) {\n    updateSession(\n      id: $id\n      sessionName: $sessionName\n      sessionCode: $sessionCode\n    ) {\n      sessionName\n      sessionCode\n      id\n    }\n  }\n"]);

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

var updateSessionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject2());
var updateEducationTypeMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject3());
var updateSubjectTypeMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject4());
var updateSubjectMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject5());
var updateRankMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject6());
var updateSeriesMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject7());
var updateDivisionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject8());
var updateRegionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject9());
var createNewReportMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject10());
var createNewGenderMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject11());
var createRegistrationMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject12());
var createCenterExamSessionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject13());
var createPhaseRankMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject14());
var createCenterExamSessionExaminerMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject15());
var createCenterExamSessionSeriesMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject16()); // const createCenterExamSessionexaminerorityMutation = gql`
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
var createSeriesMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject19());
var createEducationTypeMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject20());
var createTownMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject21());
var createNewSubjectTypeMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject22());
var createNewSubjectMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject23());
var createSubDivisionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject24());
var createNewSessionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject25());
var createNewRankMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject26());
var createNewRegionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject27());
var signupUserMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject28());
var loginUserMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject29());
var createNewCountryMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject30());
var createPhaseMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject31());
var createExamMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject32());
var registerSubjectSeriesMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject33());
var registerNewSubjectSeriesMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject34());
var createCandidateMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject35());
var createExaminerMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject36()); //************create mutations  */
////**************Update mutations */

var updateSubDivisionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject37());
var updateCenterMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject38());
var updateTownMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject39());
var updateExamMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject40());
var updateScoreMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject41()); // const createUserMutation = gql`
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

var updateCandidateMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject42());
var updateGenderMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject43());
var signUpMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject44());

var updateItemMutation =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e, updateMutation) {
    var res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            console.log('Updating Region!!');
            _context.next = 4;
            return updateMutation({
              variables: _objectSpread({
                id: _this.props.id
              }, _this.state)
            });

          case 4:
            res = _context.sent;
            console.log('Region Updated!!');

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function updateItemMutation(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); ////**************Update mutations */




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

/***/ "./src/components/styles/StyledPage.jsx":
/*!**********************************************!*\
  !*** ./src/components/styles/StyledPage.jsx ***!
  \**********************************************/
/*! exports provided: MinimStyledPage, MiniStyledPage, StyledPage, BigStyledPage, BiggestStyledPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinimStyledPage", function() { return MinimStyledPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniStyledPage", function() { return MiniStyledPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledPage", function() { return StyledPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigStyledPage", function() { return BigStyledPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiggestStyledPage", function() { return BiggestStyledPage; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "StyledPage",
  componentId: "sc-141gozs-0"
})(["padding:0 1rem margin:0 auto;display:grid;grid-template-columns:1fr;grid-auto-flow:row;text-align:center;width:70vw;min-width:30rem;background-color:", ";h4{margin:0 auto;margin-bottom:1rem;padding:0.5rem 1rem;text-align:center;font-size:1.6rem;font-weight:normal;box-shadow:", ";background:", ";width:100%;border-radius:0.5rem;color:", ";}.Form{justify-items:center;align-items:center;}form{justify-items:center;align-items:center;}"], function (props) {
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
  componentId: "sc-141gozs-1"
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
  componentId: "sc-141gozs-2"
})(["display:grid;margin:0 auto;grid-template-columns:1fr;grid-auto-flow:row;text-align:center;width:30vw;min-width:25rem;background-color:", ";h4{margin:0 auto;margin-bottom:1rem;padding:0.5rem 1rem;text-align:center;font-size:1.6rem;font-weight:normal;box-shadow:", ";background:", ";width:100%;border-radius:0.5rem;color:", ";}.Form{justify-items:center;align-items:center;}form{justify-items:center;align-items:center;}"], function (props) {
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
  componentId: "sc-141gozs-3"
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
  componentId: "sc-141gozs-4"
})(["display:grid;padding:0 1rem;margin:0 auto;grid-template-columns:1fr;text-align:center;width:90vw;min-width:30rem;background-color:", ";h4{margin:0 auto;margin-bottom:1rem;padding:0.5rem 1rem;text-align:center;font-size:1.6rem;font-weight:normal;box-shadow:", ";background:", ";width:100%;border-radius:0.5rem;color:", ";}.Form{justify-items:center;align-items:center;}fieldset{justify-items:center;align-items:center;}"], function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.formBS;
}, function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.blues[2];
});


/***/ }),

/***/ "./src/components/town/TownToModifyHook.jsx":
/*!**************************************************!*\
  !*** ./src/components/town/TownToModifyHook.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_StyledPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/StyledPage */ "./src/components/styles/StyledPage.jsx");
/* harmony import */ var _ErrorMessage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ErrorMessage.js */ "./src/components/ErrorMessage.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_useForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useForm */ "./src/components/utils/useForm.jsx");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_FormInputs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/FormInputs */ "./src/components/utils/FormInputs.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../queries&Mutations&Functions/Mutations */ "./src/components/queries&Mutations&Functions/Mutations.jsx");
/* harmony import */ var _queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../queries&Mutations&Functions/Functions */ "./src/components/queries&Mutations&Functions/Functions.jsx");
/* harmony import */ var _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../queries&Mutations&Functions/Queries */ "./src/components/queries&Mutations&Functions/Queries.jsx");
var _jsxFileName = "E:\\SYGEFEX\\Sygefex-recent\\sygefex-frontend\\src\\components\\town\\TownToModifyHook.jsx";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var InputGroup = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "TownToModifyHook__InputGroup",
  componentId: "sc-1q7meqy-0"
})(["display:flex;flex-direction:column;min-width:13rem;margin:0 1rem;"]);
var Buttons = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "TownToModifyHook__Buttons",
  componentId: "sc-1q7meqy-1"
})(["display:grid;grid-template-columns:1fr;grid-auto-flow:column;grid-gap:2rem;margin:0 auto;"]);
var AllControls = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "TownToModifyHook__AllControls",
  componentId: "sc-1q7meqy-2"
})(["display:flex;flex-direction:column;"]);
var validationSchema = yup__WEBPACK_IMPORTED_MODULE_9__["object"]().shape({
  centerName: yup__WEBPACK_IMPORTED_MODULE_9__["string"]().required("Choix de la matière Obligatoire"),
  centerCode: yup__WEBPACK_IMPORTED_MODULE_9__["string"]().required("Choix de la Séries Obligatoire"),
  centerNumber: yup__WEBPACK_IMPORTED_MODULE_9__["number"]().min(1, "Numéro du centre doit etre Positif").required("Choix de la Séries Obligatoire")
});

var TownToModifyHook = function TownToModifyHook() {
  var initialValues = {
    centerName: "",
    centerCode: "",
    town: ""
  };

  var _useForm = Object(_utils_useForm__WEBPACK_IMPORTED_MODULE_5__["default"])({
    regionID: "",
    divisionID: "",
    subDivisionID: "",
    townID: ""
  }),
      _useForm2 = _slicedToArray(_useForm, 3),
      state = _useForm2[0],
      setState = _useForm2[1],
      handleReactSelectChange = _useForm2[2];

  var handleChange = function handleChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    setState(_defineProperty({}, name, value));
  };

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_12__["getAllCountrysQuery"]),
      data = _useQuery.data,
      loadingCount = _useQuery.loading,
      errorCount = _useQuery.error;

  {
    loadingCount && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "Loading Countries from DB...");
  }
  {
    errorCount && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      error: errorCount,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    });
  }

  var _data = _objectSpread({}, data),
      countries = _data.countries;

  console.log(countries);
  var reducedCountries = countries && countries.reduce(function (item) {
    return item;
  });
  console.log(reducedCountries);

  var _reducedCountries = _objectSpread({}, reducedCountries),
      id = _reducedCountries.id;

  console.log(id);

  var _useQuery2 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_12__["getAllRegionsOfACountryQuery"], {
    variables: {
      id: id
    }
  }),
      dataCountry = _useQuery2.data,
      loadingCountry = _useQuery2.loading,
      errCountry = _useQuery2.error;

  {
    loadingCountry && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, "loading...");
  }
  {
    errCountry && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      error: errCountry,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    });
  }
  console.log(dataCountry);
  var getCountry = dataCountry && dataCountry.country;
  console.log(getCountry);

  var _getCountry = _objectSpread({}, getCountry),
      region = _getCountry.region;

  var getRegionsOptions = region && region.map(function (item) {
    return {
      value: item.id,
      label: item.regName
    };
  });
  console.log(state.regionID);

  var _useQuery3 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_12__["getDivisionsOfARegionQuery"], {
    skip: !state.regionID,
    variables: {
      id: state.regionID
    }
  }),
      dataRegion = _useQuery3.data,
      loadingRegion = _useQuery3.loading,
      errRegion = _useQuery3.error;

  {
    loadingRegion && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, "loading...");
  }
  {
    errRegion && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      error: errRegion,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    });
  }
  console.log(dataRegion);
  var getRegion = dataRegion && dataRegion.region;

  var _getRegion = _objectSpread({}, getRegion),
      division = _getRegion.division;

  console.log(division);
  var getDivOptions = division && division.map(function (item) {
    return {
      value: item.id,
      label: item.divName
    };
  });
  console.log(state.divisionID);

  var _useQuery4 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_12__["getSubDivisionsOfADivisionQuery"], {
    skip: !state.divisionID,
    variables: {
      id: state.divisionID
    }
  }),
      dataDivision = _useQuery4.data,
      loadingDivision = _useQuery4.loading,
      errDivision = _useQuery4.error;

  {
    loadingDivision && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, "loading...");
  }
  {
    errDivision && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      error: errDivision,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    });
  }
  console.log(dataDivision);
  var getDivision = dataDivision && dataDivision.division;

  var _getDivision = _objectSpread({}, getDivision),
      subDivision = _getDivision.subDivision;

  console.log(subDivision);
  var getSubDivOptions = subDivision && subDivision.map(function (item) {
    return {
      value: item.id,
      label: item.subDivName
    };
  });

  var _useQuery5 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_12__["getTownsOfASubDivisionQuery"], {
    skip: !state.subDivID,
    variables: {
      id: state.subDivID
    }
  }),
      dataSubDivision = _useQuery5.data,
      loadingSubDivision = _useQuery5.loading,
      errSubDivision = _useQuery5.error;

  {
    loadingSubDivision && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, "loading...");
  }
  {
    errSubDivision && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      error: errSubDivision,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    });
  }
  console.log(dataSubDivision);
  var getSubDivision = dataSubDivision && dataSubDivision.subDivision;

  var _getSubDivision = _objectSpread({}, getSubDivision),
      town = _getSubDivision.town;

  console.log(town);
  var getTownOptions = town && town.map(function (item) {
    return {
      value: item.id,
      label: item.townName
    };
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["Formik"], {
    method: "POST",
    initialValues: initialValues,
    validationSchema: validationSchema,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, function (_ref) {
    var isSubmitting = _ref.isSubmitting;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_StyledPage__WEBPACK_IMPORTED_MODULE_2__["MinimStyledPage"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, "Correction Info Ville"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      error: errSubDivision,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_7__["StyledForm"], {
      disabled: isSubmitting,
      "aria-busy": isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AllControls, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputGroup, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_7__["SygefexSelect"], {
      onChange: handleReactSelectChange,
      name: "regionID",
      placeholder: "La R\xE9gion",
      options: getRegionsOptions,
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_7__["SygefexSelect"], {
      onChange: handleReactSelectChange,
      name: "divisionID",
      placeholder: "Le D\xE9partement",
      options: getDivOptions,
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_7__["SygefexSelect"], {
      onChange: handleReactSelectChange,
      name: "subDivID",
      placeholder: "L'Arrondissement",
      options: getSubDivOptions,
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_7__["SygefexSelect"], {
      onChange: handleReactSelectChange,
      name: "townID",
      placeholder: "La Ville",
      options: getTownOptions,
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Buttons, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_7__["ButtonStyled"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_7__["StyledButton"], {
      type: "submit",
      id: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, "Supprimer")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_7__["ButtonStyled"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_7__["StyledButton"], {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: {
        pathname: "../updates/updateTown",
        query: state.townID && {
          id: state.townID
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, "Modifier")))))))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TownToModifyHook);

/***/ }),

/***/ "./src/components/utils/FormInputs.jsx":
/*!*********************************************!*\
  !*** ./src/components/utils/FormInputs.jsx ***!
  \*********************************************/
/*! exports provided: SygefexSelect, StyledLabel, StyledButton, SygexSelect, ButtonStyled, SygexInput, StyledForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SygefexSelect", function() { return SygefexSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLabel", function() { return StyledLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledButton", function() { return StyledButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SygexSelect", function() { return SygexSelect; });
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
var _jsxFileName = "E:\\SYGEFEX\\Sygefex-recent\\sygefex-frontend\\src\\components\\utils\\FormInputs.jsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
var customStyle = {
  control: function control(provided) {
    return _objectSpread({}, provided, {
      fontFamily: 'Roboto Slab',
      border: '0px solid black',
      borderBottom: '0.9px solid #0780b7',
      fontSize: '1.3rem',
      outline: 'none',
      backgroundColor: 'white',
      color: '#000',
      borderRadius: '0',
      boxShadow: 'none',
      alignItems: 'center',
      '&:hover': {
        borderBottom: ' 2px solid #d4351c',
        borderRadius: '0'
      },
      // border style on hover
      '&:focus': {
        borderBottom: ' 2px solid #d4351c',
        borderRadius: '0' // border style on hover

      }
    });
  },
  option: function option(provided) {
    return _objectSpread({}, provided, {
      textAlign: 'left',
      fontSize: '1.2rem'
    });
  }
};
var StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.input.withConfig({
  displayName: "FormInputs__StyledInput",
  componentId: "ii1nqi-0"
})(["padding-top:1rem;margin-top:0.4rem;font-size:1.5rem;border-style:none;width:100%;outline:none;border-bottom:0.09rem solid ", ";z-index:10;font-family:'Roboto Slab';&:valid + label{top:-0.25rem;font-size:1.1rem;color:", ";}&:focus,&active{outline:none;border-bottom:0.2rem solid ", ";}&:focus + label{top:-0.25rem;font-size:1.1rem;color:#aaa;}"], function (props) {
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
var StyledLabel = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.label.withConfig({
  displayName: "FormInputs__StyledLabel",
  componentId: "ii1nqi-2"
})(["font-size:1.2rem;border-style:none;position:absolute;left:1rem;top:1.3rem;color:", ";pointer-events:none;transition:all 1s ease-out;font-family:'Roboto Slab';&:focus{outline:none;}"], function (props) {
  return props.theme.greys[2];
});
var StyledSelect = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.select.withConfig({
  displayName: "FormInputs__StyledSelect",
  componentId: "ii1nqi-3"
})(["margin-top:1rem;font-size:1.2rem;border-style:none;border-bottom:0.09rem solid ", ";option{background:white;font-weight:400;display:flex;white-space:pre;min-height:20px;padding:0px 2px 1px;background:", ";border-radius:0.5rem;}&:focus{outline:none;border-color:", ";}"], function (props) {
  return props.theme.blues[2];
}, function (props) {
  return props.theme.blues[0];
}, function (props) {
  return props.theme.britishRed;
});
var StyledErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "FormInputs__StyledErrorMessage",
  componentId: "ii1nqi-4"
})(["padding-top:0.2rem;font-size:1.2rem;color:", ";"], function (props) {
  return props.theme.britishRed;
});
var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button.withConfig({
  displayName: "FormInputs__StyledButton",
  componentId: "ii1nqi-5"
})(["background-color:", ";color:", ";border:0;border-radius:.5rem;font-size:2.5rem;font-weight:300;line-height:1.5rem;text-shadow:3px 4px 5px #0000;box-shadow:", " cursor:pointer;"], function (props) {
  return props.theme.blues[2];
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.bs2;
});
var ButtonStyled = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "FormInputs__ButtonStyled",
  componentId: "ii1nqi-6"
})(["padding-bottom:0.5rem;padding-top:1rem;button{border-radius:0.6rem;font-size:1.5rem;font-weight:bold;box-shadow:", ";border:0.05rem solid ", ";color:", ";background:", ";cursor:pointer;padding:0.8rem;outline:none;&:hover{color:", " background-color:", ";}}"], function (props) {
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
  return props.theme.sand;
});
var StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "FormInputs__StyledForm",
  componentId: "ii1nqi-7"
})(["margin:0 2rem;padding:0.6rem;font-size:1.5rem;border-radius:.5rem;border:0.09rem solid ", ";box-shadow:", ";min-width:20rem;&[disabled]{opacity:0.3;}&::before{height:0.3rem;content:'';display:block;background-image:linear-gradient(to right,#0780b7 0%,#e2b04a 20%,#0780b7 100%);}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}"], function (props) {
  return props.theme.blues[2];
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
      lineNumber: 191
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledInput, _extends({
    className: "text-input"
  }, field, props, {
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLabel, {
    htmlFor: props.id || props.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, label), meta.touched && meta.error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledErrorMessage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, meta.error) : null);
};

var SygexSelect = function SygexSelect(_ref2) {
  var label = _ref2.label,
      props = _objectWithoutProperties(_ref2, ["label"]);

  var _useField3 = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useField"])(props),
      _useField4 = _slicedToArray(_useField3, 2),
      field = _useField4[0],
      meta = _useField4[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSelect, _extends({}, field, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  })), meta.touched && meta.error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledErrorMessage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, meta.error) : null);
};

var SygefexSelect = function SygefexSelect(_ref3) {
  var theme = _ref3.theme,
      props = _objectWithoutProperties(_ref3, ["theme"]);

  var customTheme = function customTheme(theme) {
    return _objectSpread({}, theme, {
      colors: _objectSpread({}, theme.colors, {
        primary25: '#0780b7',
        primary: '#d17f05'
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
      lineNumber: 224
    },
    __self: this
  }));
};



/***/ }),

/***/ "./src/components/utils/useForm.jsx":
/*!******************************************!*\
  !*** ./src/components/utils/useForm.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var useForm = function useForm(initialValues) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValues),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var handleInputChange = function handleInputChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value,
        type = _e$target.type;
    var val = type === "number" ? parseInt(value) : value;
    setState(function (state) {
      return _objectSpread({}, state, _defineProperty({}, name, val));
    });
  };

  var handleReactSelectChange = function handleReactSelectChange(value, action) {
    console.log(value.value);
    console.log(action.name);
    setState(function (state) {
      return _objectSpread({}, state, _defineProperty({}, action.name, value.value));
    });
  };

  return [state, setState, handleReactSelectChange, handleInputChange];
};

/* harmony default export */ __webpack_exports__["default"] = (useForm);

/***/ }),

/***/ 3:
/*!*******************************************!*\
  !*** multi ./pages/modify/modifyTown.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/modify/modifyTown.jsx */"./pages/modify/modifyTown.jsx");


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

/***/ "apollo-link":
/*!******************************!*\
  !*** external "apollo-link" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link");

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

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

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
//# sourceMappingURL=modifyTown.js.map