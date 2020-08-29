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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/creates/newSubjectSpecialty.jsx":
/*!***********************************************!*\
  !*** ./pages/creates/newSubjectSpecialty.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_subjectSpecialty_NewRegSubjectToSpecialty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/components/subjectSpecialty/NewRegSubjectToSpecialty */ "./src/components/subjectSpecialty/NewRegSubjectToSpecialty.jsx");
/* harmony import */ var _src_components_user_GatedSignin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/components/user/GatedSignin */ "./src/components/user/GatedSignin.jsx");
var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\pages\\creates\\newSubjectSpecialty.jsx";




var NewSubjectSpecialty = function NewSubjectSpecialty() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_user_GatedSignin__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_subjectSpecialty_NewRegSubjectToSpecialty__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (NewSubjectSpecialty);

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

/***/ "./src/components/queries&Mutations&Functions/Functions.jsx":
/*!******************************************************************!*\
  !*** ./src/components/queries&Mutations&Functions/Functions.jsx ***!
  \******************************************************************/
/*! exports provided: candExamSessionCode, roundFloatNumber, calcCandTotalScore, calcCandTotalCoeff, calcCandAve, objectFromCode, uniqueCodeGen, getSelectedObject, getObjectFromID, removeTypename, uploadFile, centerExamSessionObjectFromCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "candExamSessionCode", function() { return candExamSessionCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundFloatNumber", function() { return roundFloatNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcCandTotalScore", function() { return calcCandTotalScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcCandTotalCoeff", function() { return calcCandTotalCoeff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcCandAve", function() { return calcCandAve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectFromCode", function() { return objectFromCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueCodeGen", function() { return uniqueCodeGen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedObject", function() { return getSelectedObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjectFromID", function() { return getObjectFromID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTypename", function() { return removeTypename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFile", function() { return uploadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerExamSessionObjectFromCode", function() { return centerExamSessionObjectFromCode; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link */ "apollo-link");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_link__WEBPACK_IMPORTED_MODULE_2__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




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

var uploadFile = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
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
    }, _callee);
  }));

  return function uploadFile(_x) {
    return _ref3.apply(this, arguments);
  };
}(); // const updateCacheForDelete = (cache, { data }, queryToUpdate) => {
//   // manually update the cache so that the data are all the same
//   // 1. read the cache for the data we want
//   const { regions, deleteRegion } = data
//   const data = cache.readQuery({ query: queryToUpdate });
//   // selects all the other regions leaving out the deleted one
//   regions = regions.filter(region => region.id !== deleteRegion.id);
//   //  3. write the new data back to the cache
//   console.log("getting payload");
//   console.log(payload);
//   cache.writeQuery({ query: queryToUpdate, data });
// };


var updateCache = function updateCache(cache, payload) {
  // manually update the cache so that the data are all the same
  // 1. read the cache for the data we want
  var data = cache.readQuery({
    query: getAllRegionsQuery
  }); // the deletedselect all the other regions except the deleted one from the cache

  data.regions = data.regions.filter(function (region) {
    return region.id !== payload.data.deleteRegion.id;
  }); //  3. write the new data back to the cache

  console.log("getting payload");
  console.log(payload);
  cache.writeQuery({
    query: getAllRegionsQuery,
    data: data
  });
};



/***/ }),

/***/ "./src/components/queries&Mutations&Functions/Mutations.jsx":
/*!******************************************************************!*\
  !*** ./src/components/queries&Mutations&Functions/Mutations.jsx ***!
  \******************************************************************/
/*! exports provided: createCandidateMutation, createNewSubjectMutation, createTownMutation, createCenterExamSessionExaminerMutation, createDivisionMutation, createRegistrationMutation, createCenterMutation, createEducationTypeMutation, createSpecialtyMutation, createSubDivisionMutation, createNewSessionMutation, createNewRankMutation, createNewReportMutation, createNewRegionMutation, createExamMutation, registerSubjectSpecialtyMutation, registerNewSubjectSpecialtyMutation, updateCenterMutation, updateTownMutation, updateSessionMutation, updateRegionMutation, updateExamMutation, updateSubDivisionMutation, updateCandidateMutation, updateScoreMutation, updateDivisionMutation, updateItemMutation, createExaminerMutation, createPhaseMutation, createCenterExamSessionSpecialtyMutation, updateSpecialtyMutation, updateRankMutation, createPhaseRankMutation, createNewCountryMutation, signUpMutation, createMultipleCandidatesMutation, updateSubjectMutation, updateExaminerMutation, createCenterExamSessionMutation, updateEducationTypeMutation, signInCandidate, loginUserMutation, updateSignUpMutation, signupUserMutation, deleteRegionMutation, deleteCenterMutation, signoutMutation, enterMarksMutation, deleteReportMutation, requestResetMutation */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpMutation", function() { return signUpMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMultipleCandidatesMutation", function() { return createMultipleCandidatesMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSubjectMutation", function() { return updateSubjectMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateExaminerMutation", function() { return updateExaminerMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCenterExamSessionMutation", function() { return createCenterExamSessionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEducationTypeMutation", function() { return updateEducationTypeMutation; });
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
  var data = _taggedTemplateLiteral(["\n  mutation signUpMutation($email: String!, $name: String!, $password: String!) {\n    signUp(email: $email, name: $name, password: $password) {\n      id\n      email\n      resetToken\n      password\n    }\n  }\n"]);

  _templateObject46 = function _templateObject46() {
    return data;
  };

  return data;
}

function _templateObject45() {
  var data = _taggedTemplateLiteral(["\n  mutation updateExaminerMutation(\n    $id: ID!\n    $examiner1stName: String\n    $examiner2ndName: String\n    $examinerOtherNames: String\n    $examinerCNI: String\n    $examinerPhone: Int\n    $examinerEmail: String\n    $examinerImage: String\n    $examinerMatricule: String\n    $examinerCode: String\n    $gender: String\n  ) {\n    updateExaminer(\n      id: $id\n      examiner1stName: $examiner1stName\n      examiner2ndName: $examiner2ndName\n      examinerOtherNames: $examinerOtherNames\n      examinerCNI: $examinerCNI\n      examinerPhone: $examinerPhone\n      examinerEmail: $examinerEmail\n      examinerMatricule: $examinerMatricule\n      examinerCode: $examinerCode\n      examinerImage: $examinerImage\n      gender: $gender\n    ) {\n      id\n      examiner1stName\n      examiner2ndName\n      examinerOtherNames\n      examinerCNI\n      examinerPhone\n      examinerEmail\n      examinerMatricule\n      examinerCode\n      examinerImage\n      gender\n    }\n  }\n"]);

  _templateObject45 = function _templateObject45() {
    return data;
  };

  return data;
}

function _templateObject44() {
  var data = _taggedTemplateLiteral(["\n  mutation updateCandidateMutation(\n    $id: ID!\n    $cand1stName: String\n    $cand2ndName: String\n    $cand3rdName: String\n    $momName: String\n    $dadName: String\n    $email: String\n    $image: String\n    $phoneNumb: Int\n    $placeOfBirth: String\n    $dateOfBirth: DateTime\n    $birthCertNumber: String\n    $gender: String\n  ) {\n    updateCandidate(\n      id: $id\n      cand1stName: $cand1stName\n      cand2ndName: $cand2ndName\n      cand3rdName: $cand3rdName\n      momName: $momName\n      dadName: $dadName\n      email: $email\n      image: $image\n      phoneNumb: $phoneNumb\n      placeOfBirth: $placeOfBirth\n      dateOfBirth: $dateOfBirth\n      birthCertNumber: $birthCertNumber\n      gender: $gender\n    ) {\n      id\n      cand1stName\n      cand2ndName\n      cand3rdName\n      momName\n      dadName\n      email\n      image\n      phoneNumb\n      placeOfBirth\n      dateOfBirth\n      birthCertNumber\n      gender\n    }\n  }\n"]);

  _templateObject44 = function _templateObject44() {
    return data;
  };

  return data;
}

function _templateObject43() {
  var data = _taggedTemplateLiteral(["\n  mutation enterMarksMutation(\n    $subjectSpecialty: SubjectSpecialtyWhereUniqueInput!\n    $subjectAve: Float!\n    $candExamSecretCode: String!\n  ) {\n    enterMarks(\n      subjectSpecialty: $subjectSpecialty\n      subjectAve: $subjectAve\n      candExamSecretCode: $candExamSecretCode\n    ) {\n      subjectAve\n      coeff\n      id\n      subjectSpecialty {\n        id\n      }\n    }\n  }\n"]);

  _templateObject43 = function _templateObject43() {
    return data;
  };

  return data;
}

function _templateObject42() {
  var data = _taggedTemplateLiteral(["\n  mutation updateScoreMutation(\n    $subjectSpecialty: SubjectSpecialtyWhereUniqueInput!\n    $subjectAve: Float!\n    $candExamSecretCode: String!\n  ) {\n    updateScore(\n      subjectSpecialty: $subjectSpecialty\n      subjectAve: $subjectAve\n      candExamSecretCode: $candExamSecretCode\n    ) {\n      subjectAve\n      coeff\n      id\n      subjectSpecialty {\n        id\n        subjectCode\n        subjectName\n      }\n    }\n  }\n"]);

  _templateObject42 = function _templateObject42() {
    return data;
  };

  return data;
}

function _templateObject41() {
  var data = _taggedTemplateLiteral(["\n  mutation updateExamMutation($id: ID!, $examName: String, $examCode: String) {\n    updateExam(id: $id, examName: $examName, examCode: $examCode) {\n      examName\n      examCode\n      id\n    }\n  }\n"]);

  _templateObject41 = function _templateObject41() {
    return data;
  };

  return data;
}

function _templateObject40() {
  var data = _taggedTemplateLiteral(["\n  mutation updateTownMutation($id: ID!, $townName: String, $townCode: String) {\n    updateTown(id: $id, townName: $townName, townCode: $townCode) {\n      townName\n      townCode\n      id\n    }\n  }\n"]);

  _templateObject40 = function _templateObject40() {
    return data;
  };

  return data;
}

function _templateObject39() {
  var data = _taggedTemplateLiteral(["\n  mutation updateCenterMutation(\n    $id: ID!\n    $centerName: String\n    $centerCode: String\n    $centerNumber: Int\n  ) {\n    updateCenter(\n      id: $id\n      centerName: $centerName\n      centerCode: $centerCode\n      centerNumber: $centerNumber\n    ) {\n      id\n      centerName\n      centerNumber\n      centerCode\n    }\n  }\n"]);

  _templateObject39 = function _templateObject39() {
    return data;
  };

  return data;
}

function _templateObject38() {
  var data = _taggedTemplateLiteral(["\n  mutation updateSubDivisionMutation(\n    $id: ID!\n    $subDivName: String\n    $subDivCode: String\n  ) {\n    updateSubDivision(\n      id: $id\n      subDivName: $subDivName\n      subDivCode: $subDivCode\n    ) {\n      subDivName\n      subDivCode\n      id\n    }\n  }\n"]);

  _templateObject38 = function _templateObject38() {
    return data;
  };

  return data;
}

function _templateObject37() {
  var data = _taggedTemplateLiteral(["\n  mutation createExaminerMutation(\n    $examiner1stName: String!\n    $examiner2ndName: String!\n    $examinerOtherNames: String\n    $examinerCode: String!\n    $examinerEmail: String!\n    $examinerCNI: String!\n    $examinerMatricule: String!\n    $examinerImage: String!\n    $examinerPhone: Int!\n    $gender: String!\n  ) {\n    createExaminer(\n      examiner1stName: $examiner1stName\n      examiner2ndName: $examiner2ndName\n      examinerOtherNames: $examinerOtherNames\n      examinerMatricule: $examinerMatricule\n      examinerCode: $examinerCode\n      examinerCNI: $examinerCNI\n      examinerEmail: $examinerEmail\n      examinerImage: $examinerImage\n      examinerPhone: $examinerPhone\n      gender: $gender\n    ) {\n      id\n      examiner1stName\n      examiner2ndName\n      examinerOtherNames\n      examinerCode\n      examinerEmail\n      examinerImage\n      examinerPhone\n    }\n  }\n"]);

  _templateObject37 = function _templateObject37() {
    return data;
  };

  return data;
}

function _templateObject36() {
  var data = _taggedTemplateLiteral(["\n  mutation createMultipleCandidatesMutation(\n    $cand1stName: String!\n    $cand2ndName: String\n    $cand3rdName: String\n    $dadName: String\n    $momName: String\n    $candCode: String\n    $email: String!\n    $image: String!\n    $phoneNumb: Int\n    $dateOfBirth: DateTime\n    $birthCertNumber: String\n    $placeOfBirth: String\n    $gender: String!\n  ) {\n    createMultipleCandidates(\n      cand1stName: $cand1stName\n      cand2ndName: $cand2ndName\n      dadName: $dadName\n      momName: $momName\n      cand3rdName: $cand3rdName\n      candCode: $candCode\n      email: $email\n      image: $image\n      phoneNumb: $phoneNumb\n      dateOfBirth: $dateOfBirth\n      birthCertNumber: $birthCertNumber\n      placeOfBirth: $placeOfBirth\n      gender: $gender\n    ) {\n      id\n      cand1stName\n      cand2ndName\n      cand3rdName\n      momName\n      dadName\n      candCode\n      gender\n      birthCertNumber\n      dateOfBirth\n      image\n    }\n  }\n"]);

  _templateObject36 = function _templateObject36() {
    return data;
  };

  return data;
}

function _templateObject35() {
  var data = _taggedTemplateLiteral(["\n  mutation createCandidateMutation(\n    $cand1stName: String!\n    $cand2ndName: String\n    $cand3rdName: String\n    $dadName: String\n    $momName: String\n    $candCode: String\n    $email: String!\n    $image: String!\n    $phoneNumb: Int\n    $dateOfBirth: DateTime\n    $birthCertNumber: String\n    $placeOfBirth: String\n    $gender: String!\n  ) {\n    createCandidate(\n      cand1stName: $cand1stName\n      cand2ndName: $cand2ndName\n      dadName: $dadName\n      momName: $momName\n      cand3rdName: $cand3rdName\n      candCode: $candCode\n      email: $email\n      image: $image\n      phoneNumb: $phoneNumb\n      dateOfBirth: $dateOfBirth\n      birthCertNumber: $birthCertNumber\n      placeOfBirth: $placeOfBirth\n      gender: $gender\n    ) {\n      id\n      cand1stName\n      cand2ndName\n      cand3rdName\n      momName\n      dadName\n      candCode\n      birthCertNumber\n      dateOfBirth\n      image\n    }\n  }\n"]);

  _templateObject35 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34() {
  var data = _taggedTemplateLiteral(["\n  mutation registerNewSubjectSpecialtyMutation(\n    $specialty: SpecialtyWhereUniqueInput!\n    $subject: SubjectWhereUniqueInput!\n    $coeff: Int!\n  ) {\n    createSubjectSpecialty(\n      specialty: $specialty\n      subject: $subject\n      coeff: $coeff\n    ) {\n      id\n      specialty {\n        id\n        specialtyName\n      }\n    }\n  }\n"]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33() {
  var data = _taggedTemplateLiteral(["\n  mutation registerSubjectSpecialtyMutation(\n    $subject: SubjectWhereUniqueInput!\n    $specialty: SpecialtyWhereUniqueInput!\n    $coeff: Int!\n  ) {\n    createSubjectSpecialty(\n      subject: $subject\n      specialty: $specialty\n      coeff: $coeff\n    ) {\n      id\n      specialty {\n        id\n        specialtyName\n        subjectSpecialty {\n          id\n          subject {\n            id\n            subjectName\n          }\n        }\n      }\n    }\n  }\n"]);

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
  var data = _taggedTemplateLiteral(["\n  mutation createRegistrationMutation(\n    $candidate: CandidateWhereUniqueInput!\n    $candExamSecretCode: String!\n    $candExamSession: String!\n    $candRegistrationNumber: String!\n    $centerExamSession: CenterExamSessionWhereUniqueInput!\n    $centerExamSessionSpecialty: CenterExamSessionSpecialtyWhereUniqueInput!\n    $specialty: SpecialtyWhereUniqueInput!\n    $aptitude: String!\n  ) {\n    createRegistration(\n      candidate: $candidate\n      candExamSecretCode: $candExamSecretCode\n      candExamSession: $candExamSession\n      candRegistrationNumber: $candRegistrationNumber\n      centerExamSession: $centerExamSession\n      centerExamSessionSpecialty: $centerExamSessionSpecialty\n      specialty: $specialty\n      aptitude: $aptitude\n    ) {\n      id\n      centerExamSession {\n        id\n        center {\n          id\n          centerName\n        }\n      }\n      candidate {\n        id\n        cand1stName\n      }\n    }\n  }\n"]);

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
var createExamMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject32());
var registerSubjectSpecialtyMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject33());
var registerNewSubjectSpecialtyMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject34());
var createCandidateMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject35());
var createMultipleCandidatesMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject36());
var createExaminerMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject37()); //************create mutations  */
////**************Update mutations */

var updateSubDivisionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject38());
var updateCenterMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject39());
var updateTownMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject40());
var updateExamMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject41());
var updateScoreMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject42());
var enterMarksMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject43()); // const createUserMutation = gql`
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

var updateCandidateMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject44());
var updateExaminerMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject45());
var signUpMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject46());
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
/*! exports provided: getAllSubjectSpecialtiesOfASpecialtyQuery, getAllSpecialtiesOfAnEducationTypeQuery, getAllExamsQuery, getAllSessionsQuery, getDivisionsOfARegionQuery, getAllDivisionsQuery, getSubDivisionsOfADivisionQuery, getTownsOfASubDivisionQuery, getCentersOfATownQuery, getAllEducationTypesQuery, getAllSubjectsQuery, getAllRanksQuery, getAllCandidatesQuery, getAllCentersQuery, getSingleRegionQuery, getAllSpecialtiesQuery, getAllSubDivisionsQuery, getAllSubjectsOfAnEducTypeQuery, getScoreID, singleSpecialtyQuery, getRegistrations, singleSubjectQuery, singleCandidateQuery1, singleCandidateQuery, viewSingleCandidateQuery, singleCenterQuery, singleExamQuery, singleTownQuery, getAllCenterResultsQuery, singleSessionQuery, singleDivisionQuery, singleSubDivisionQuery, singleEducationTypeQuery, singleRankQuery, centerExamSessionSpecialtyForResultsQuery, getAllCandidateRegistrationIDsQuery, getCenterExamSessionSpecialtyQuery, getExamSessionQuery, getAllSpecialtiesOfACenterExamSessionQuery, getCenterResultsQuery, getCandidateRegistrationIDQuery, getCandidateRegistrationIDsQuery, centerExamSessionForResultsQuery, getCandidateIDQuery, getASingleCenterQuery, getRegisteredCandidateCountQuery, centersPerTownQuery, getSingleCenterQuery, getCandidateResultsQuery, getCenterRegistrationIDsQuery, getCandidateByCandCodeQuery, getSingleCenterExamSessionQuery, getEachCandidateResultsQuery, getCenterIDFromCenterCodeQuery, getRegistrationIDFromRegNumberQuery, centerExamSessionSpecialtyResultsQuery, dataForAverage, getAllPhasesQuery, getAllRegionsQuery, getAllUsersQuery, singleExaminerQuery, getCandidateRegistrationInfoQuery, getCESExaminerQuery, getExaminerIDQuery, getAllTownsQuery, getSpecialtyFromCESSQuery, getExaminerRegistrationQuery, getSingleProfQuery, getAllGroup1Query, getAllGroup2Query, singleSubjectGroupQuery, getAllRegionsAndDivisionsQuery, getAllSubjectGroupsQuery, getAllRanksOfAnExamPhaseQuery, currentUserQuery, singlePhaseQuery, getSingleCenterByCodeQuery */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubjectsQuery", function() { return getAllSubjectsQuery; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCandidateRegistrationInfoQuery", function() { return getCandidateRegistrationInfoQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCESExaminerQuery", function() { return getCESExaminerQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExaminerIDQuery", function() { return getExaminerIDQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllTownsQuery", function() { return getAllTownsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpecialtyFromCESSQuery", function() { return getSpecialtyFromCESSQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExaminerRegistrationQuery", function() { return getExaminerRegistrationQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleProfQuery", function() { return getSingleProfQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllGroup1Query", function() { return getAllGroup1Query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllGroup2Query", function() { return getAllGroup2Query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleSubjectGroupQuery", function() { return singleSubjectGroupQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRegionsAndDivisionsQuery", function() { return getAllRegionsAndDivisionsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubjectGroupsQuery", function() { return getAllSubjectGroupsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRanksOfAnExamPhaseQuery", function() { return getAllRanksOfAnExamPhaseQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentUserQuery", function() { return currentUserQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singlePhaseQuery", function() { return singlePhaseQuery; });
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
  var data = _taggedTemplateLiteral(["\n  query singleSubjectGroupQuery($id: ID!) {\n    subjectGroup(id: $id) {\n      subjectGroupName\n      subjectGroupCode\n      id\n    }\n  }\n"]);

  _templateObject76 = function _templateObject76() {
    return data;
  };

  return data;
}

function _templateObject75() {
  var data = _taggedTemplateLiteral(["\n  query singleSubjectQuery($id: ID!) {\n    subject(id: $id) {\n      subjectName\n      subjectCode\n      id\n    }\n  }\n"]);

  _templateObject75 = function _templateObject75() {
    return data;
  };

  return data;
}

function _templateObject74() {
  var data = _taggedTemplateLiteral(["\n  query singleRankQuery($id: ID!) {\n    rank(id: $id) {\n      rankName\n      rankCode\n      id\n    }\n  }\n"]);

  _templateObject74 = function _templateObject74() {
    return data;
  };

  return data;
}

function _templateObject73() {
  var data = _taggedTemplateLiteral(["\n  query singleDivisionQuery($id: ID!) {\n    division(id: $id) {\n      divName\n      divCode\n      id\n    }\n  }\n"]);

  _templateObject73 = function _templateObject73() {
    return data;
  };

  return data;
}

function _templateObject72() {
  var data = _taggedTemplateLiteral(["\n  query dataForAverage($candExamSecretCode: String!) {\n    scores(candExamSecretCode: $candExamSecretCode) {\n      id\n      subjectAve\n      coeff\n    }\n  }\n"]);

  _templateObject72 = function _templateObject72() {
    return data;
  };

  return data;
}

function _templateObject71() {
  var data = _taggedTemplateLiteral(["\n  query singleSpecialtyQuery($id: ID!) {\n    specialty(id: $id) {\n      specialtyName\n      specialtyCode\n      id\n    }\n  }\n"]);

  _templateObject71 = function _templateObject71() {
    return data;
  };

  return data;
}

function _templateObject70() {
  var data = _taggedTemplateLiteral(["\n  query singlePhaseQuery($id: ID!) {\n    phase(id: $id) {\n      phaseName\n      phaseCode\n      id\n    }\n  }\n"]);

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
  var data = _taggedTemplateLiteral(["\n  query viewSingleCandidateQuery($candCode: String!) {\n    singleCandidate(candCode: $candCode) {\n      id\n      dateOfBirth\n      cand1stName\n      cand2ndName\n      cand3rdName\n      candCode\n      momName\n      dadName\n      email\n      image\n      phoneNumb\n      birthCertNumber\n      placeOfBirth\n      user {\n        id\n      }\n      gender\n    }\n  }\n"]);

  _templateObject65 = function _templateObject65() {
    return data;
  };

  return data;
}

function _templateObject64() {
  var data = _taggedTemplateLiteral(["\n  query singleExaminerQuery($id: ID!) {\n    examiner(id: $id) {\n      id\n      examiner1stName\n      examiner2ndName\n      examinerOtherNames\n      examinerCode\n      examinerEmail\n      examinerImage\n      examinerPhone\n      examinerMatricule\n      examinerCNI\n    }\n  }\n"]);

  _templateObject64 = function _templateObject64() {
    return data;
  };

  return data;
}

function _templateObject63() {
  var data = _taggedTemplateLiteral(["\n  query singleCandidateQuery($id: ID!) {\n    candidate(id: $id) {\n      id\n      dateOfBirth\n      cand1stName\n      cand2ndName\n      cand3rdName\n      candCode\n      dadName\n      momName\n      email\n      image\n      phoneNumb\n      birthCertNumber\n      placeOfBirth\n      user {\n        id\n      }\n      gender\n    }\n  }\n"]);

  _templateObject63 = function _templateObject63() {
    return data;
  };

  return data;
}

function _templateObject62() {
  var data = _taggedTemplateLiteral(["\n  query singleCandidateQuery1($id: ID!) {\n    candidate(id: $id) {\n      cand1stName\n      cand2ndName\n      cand3rdName\n      dadName\n      momName\n      candCode\n      email\n      image\n      phoneNumb\n      placeOfBirth\n      user {\n        id\n      }\n      id\n    }\n  }\n"]);

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
  var data = _taggedTemplateLiteral(["\n  query getExamSessionQuery(\n    $exam: ExamWhereUniqueInput!\n    $session: SessionWhereUniqueInput!\n  ) {\n    examSessions(session: $session, exam: $exam) {\n      id\n    }\n  }\n"]);

  _templateObject60 = function _templateObject60() {
    return data;
  };

  return data;
}

function _templateObject59() {
  var data = _taggedTemplateLiteral(["\n  query getSpecialtyFromCESSQuery($id: ID!) {\n    centerExamSessionSpecialty(id: $id) {\n      id\n      specialty {\n        id\n        specialtyName\n      }\n    }\n  }\n"]);

  _templateObject59 = function _templateObject59() {
    return data;
  };

  return data;
}

function _templateObject58() {
  var data = _taggedTemplateLiteral(["\n  query getCenterExamSessionSpecialtyQuery(\n    $centerExamSession: CenterExamSessionWhereUniqueInput!\n    $specialty: SpecialtyWhereUniqueInput!\n  ) {\n    centerExamSessionSpecialties(\n      centerExamSession: $centerExamSession\n      specialty: $specialty\n    ) {\n      id\n    }\n  }\n"]);

  _templateObject58 = function _templateObject58() {
    return data;
  };

  return data;
}

function _templateObject57() {
  var data = _taggedTemplateLiteral(["\n  query getRegisteredCandidateCountQuery($id: ID!) {\n    registrationsConnection(id: $id) {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);

  _templateObject57 = function _templateObject57() {
    return data;
  };

  return data;
}

function _templateObject56() {
  var data = _taggedTemplateLiteral(["\n  query getAllRanksOfAnExamPhaseQuery($id: ID!) {\n    phase(id: $id) {\n      id\n      phaseRank(orderBy: rankName_ASC) {\n        id\n        rankName\n        rankCode\n      }\n    }\n  }\n"]);

  _templateObject56 = function _templateObject56() {
    return data;
  };

  return data;
}

function _templateObject55() {
  var data = _taggedTemplateLiteral(["\n  query getSingleCenterExamSessionQuery(\n    $center: CenterWhereUniqueInput!\n    $examSession: ExamSessionWhereUniqueInput!\n  ) {\n    centerExamSessionsByCode(examSession: $examSession, center: $center) {\n      id\n    }\n  }\n"]);

  _templateObject55 = function _templateObject55() {
    return data;
  };

  return data;
}

function _templateObject54() {
  var data = _taggedTemplateLiteral(["\n  query singleTownQuery($id: ID!) {\n    town(id: $id) {\n      townName\n      townCode\n      id\n    }\n  }\n"]);

  _templateObject54 = function _templateObject54() {
    return data;
  };

  return data;
}

function _templateObject53() {
  var data = _taggedTemplateLiteral(["\n  query getASingleCenterQuery($centerNumber: Int!) {\n    centerByNumber(centerNumber: $centerNumber) {\n      centerNumber\n      centerName\n      centerCode\n      id\n    }\n  }\n"]);

  _templateObject53 = function _templateObject53() {
    return data;
  };

  return data;
}

function _templateObject52() {
  var data = _taggedTemplateLiteral(["\n  query getSingleCenterByCodeQuery($centerSecretCode: String!) {\n    getCenterByCode(centerSecretCode: $centerSecretCode) {\n      id\n      centerCode\n    }\n  }\n"]);

  _templateObject52 = function _templateObject52() {
    return data;
  };

  return data;
}

function _templateObject51() {
  var data = _taggedTemplateLiteral(["\n  query getSingleProfQuery($authCode: String!) {\n    profByAuthCode(authCode: $authCode) {\n      authCode\n      id\n      auth1stName\n    }\n  }\n"]);

  _templateObject51 = function _templateObject51() {
    return data;
  };

  return data;
}

function _templateObject50() {
  var data = _taggedTemplateLiteral(["\n  query getSingleCenterQuery($centerNumber: Int!) {\n    centerByNumber(centerNumber: $centerNumber) {\n      id\n      centerNumber\n      centerCode\n    }\n  }\n"]);

  _templateObject50 = function _templateObject50() {
    return data;
  };

  return data;
}

function _templateObject49() {
  var data = _taggedTemplateLiteral(["\n  query singleCenterQuery($id: ID!) {\n    center(id: $id) {\n      centerName\n      centerNumber\n      centerCode\n      id\n    }\n  }\n"]);

  _templateObject49 = function _templateObject49() {
    return data;
  };

  return data;
}

function _templateObject48() {
  var data = _taggedTemplateLiteral(["\n  query getAllCandidatesQuery {\n    candidates(orderBy: cand1stName_ASC) {\n      cand1stName\n      cand2ndName\n      cand3rdName\n      email\n      image\n      phoneNumb\n      placeOfBirth\n      candCode\n      id\n    }\n  }\n"]);

  _templateObject48 = function _templateObject48() {
    return data;
  };

  return data;
}

function _templateObject47() {
  var data = _taggedTemplateLiteral(["\n  query getAllCentersQuery {\n    centers(orderBy: centerName_ASC) {\n      id\n      centerName\n      centerCode\n    }\n  }\n"]);

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
  var data = _taggedTemplateLiteral(["\n  query getAllRegionsAndDivisionsQuery {\n    divisions(orderBy: divName_ASC) {\n      divName\n      divCode\n      id\n    }\n  }\n"]);

  _templateObject39 = function _templateObject39() {
    return data;
  };

  return data;
}

function _templateObject38() {
  var data = _taggedTemplateLiteral(["\n  query getAllDivisionsQuery {\n    divisions(orderBy: divName_ASC) {\n      divName\n      divCode\n      id\n    }\n  }\n"]);

  _templateObject38 = function _templateObject38() {
    return data;
  };

  return data;
}

function _templateObject37() {
  var data = _taggedTemplateLiteral(["\n  query getAllSessionsQuery {\n    sessions(orderBy: createdAt_DESC) {\n      sessionName\n      sessionCode\n      id\n    }\n  }\n"]);

  _templateObject37 = function _templateObject37() {
    return data;
  };

  return data;
}

function _templateObject36() {
  var data = _taggedTemplateLiteral(["\n  query getAllGroup1Query($educType: EducationTypeWhereUniqueInput!) {\n    group1Subjects(educType: $educType, orderBy: subjectName_ASC) {\n      subjectName\n      subjectCode\n      subjectGroup\n      id\n    }\n  }\n"]);

  _templateObject36 = function _templateObject36() {
    return data;
  };

  return data;
}

function _templateObject35() {
  var data = _taggedTemplateLiteral(["\n  query getAllGroup2Query($educType: EducationTypeWhereUniqueInput!) {\n    group2Subjects(educType: $educType, orderBy: subjectName_ASC) {\n      subjectName\n      subjectCode\n      subjectGroup\n      id\n    }\n  }\n"]);

  _templateObject35 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34() {
  var data = _taggedTemplateLiteral(["\n  query getAllExamsQuery {\n    exams(orderBy: examName_ASC) {\n      examName\n      examCode\n      id\n    }\n  }\n"]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33() {
  var data = _taggedTemplateLiteral(["\n  query getAllSubjectSpecialtiesOfASpecialtyQuery($id: ID!) {\n    specialty(id: $id) {\n      id\n      subjectSpecialty {\n        id\n        subject {\n          id\n          subjectName\n          subjectCode\n        }\n      }\n    }\n  }\n"]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = _taggedTemplateLiteral(["\n  query getAllSubjectsOfAnEducTypeQuery($id: ID!) {\n    educationType(id: $id) {\n      id\n      educationTypeName\n      subject(orderBy: subjectName_ASC) {\n        id\n        subjectName\n        subjectCode\n      }\n    }\n  }\n"]);

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
  var data = _taggedTemplateLiteral(["\n  query getAllSpecialtiesOfACenterExamSessionQuery($id: ID!) {\n    centerExamSession(id: $id) {\n      id\n      centerExamSessionSpecialty {\n        id\n        specialty {\n          id\n          specialtyName\n          specialtyCode\n        }\n      }\n    }\n  }\n"]);

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
  var data = _taggedTemplateLiteral(["\n  query centerExamSessionForResultsQuery($id: ID!) {\n    centerExamSession(id: $id) {\n      id\n\n      registration {\n        id\n        centerExamSession {\n          id\n          center {\n            id\n            centerName\n          }\n          examSession {\n            id\n            exam {\n              examName\n              id\n            }\n            session {\n              id\n              sessionName\n            }\n          }\n        }\n        candRegistrationNumber\n        candExamSecretCode\n        aptitude {\n          id\n          aptitudeName\n        }\n        candidate {\n          id\n          cand1stName\n          cand2ndName\n          cand3rdName\n          dateOfBirth\n          placeOfBirth\n          email\n          phoneNumb\n          user {\n            id\n          }\n          gender\n        }\n        specialty {\n          id\n          specialtyName\n          specialtyCode\n        }\n        scores {\n          id\n          subjectAve\n        }\n      }\n    }\n  }\n"]);

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
  var data = _taggedTemplateLiteral(["\n  query getCandidateRegistrationInfoQuery($id: ID!) {\n    registration(id: $id) {\n      id\n      candExamSecretCode\n      createdAt\n      candRegistrationNumber\n      candidate {\n        cand1stName\n        cand2ndName\n        cand3rdName\n        image\n        email\n        candCode\n        dateOfBirth\n        placeOfBirth\n        gender\n      }\n      centerExamSessionSpecialty {\n        id\n        specialty {\n          id\n          specialtyName\n          subjectSpecialty {\n            coeff\n            subject {\n              id\n              subjectName\n              subjectCode\n            }\n          }\n        }\n        centerExamSession {\n          center {\n            id\n            centerName\n          }\n          examSession {\n            id\n            exam {\n              id\n              examName\n            }\n            session {\n              id\n              sessionName\n            }\n          }\n        }\n      }\n    }\n  }\n"]);

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
var getAllSubjectSpecialtiesOfASpecialtyQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject33());
var getAllExamsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject34());
var getAllGroup2Query = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject35());
var getAllGroup1Query = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject36());
var getAllSessionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject37());
var getAllDivisionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject38());
var getAllRegionsAndDivisionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject39());
var getDivisionsOfARegionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject40());
var getSubDivisionsOfADivisionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject41());
var getAllSubDivisionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject42());
var getAllTownsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject43());
var getTownsOfASubDivisionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject44());
var getCentersOfATownQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject45());
var centersPerTownQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject46());
var getAllCentersQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject47());
var getAllCandidatesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject48()); ///*****************Single object queries */

var singleCenterQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject49());
var getSingleCenterQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject50());
var getSingleProfQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject51());
var getSingleCenterByCodeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject52());
var getASingleCenterQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject53());
var singleTownQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject54());
var getSingleCenterExamSessionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject55());
var getAllRanksOfAnExamPhaseQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject56());
var getRegisteredCandidateCountQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject57());
var getCenterExamSessionSpecialtyQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject58());
var getSpecialtyFromCESSQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject59());
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
var singlePhaseQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject70());
var singleSpecialtyQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject71());
var dataForAverage = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject72());
var singleDivisionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject73());
var singleRankQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject74());
var singleSubjectQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject75());
var singleSubjectGroupQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject76());
var singleSessionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject77()); ///*****************End Single object queries */



/***/ }),

/***/ "./src/components/styles/StyledPage.jsx":
/*!**********************************************!*\
  !*** ./src/components/styles/StyledPage.jsx ***!
  \**********************************************/
/*! exports provided: TableStyledPage, MinimStyledPage, MiniStyledPage, StyledPage, BigStyledPage, BiggestStyledPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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


/***/ }),

/***/ "./src/components/subjectSpecialty/NewRegSubjectToSpecialty.jsx":
/*!**********************************************************************!*\
  !*** ./src/components/subjectSpecialty/NewRegSubjectToSpecialty.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_StyledPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/StyledPage */ "./src/components/styles/StyledPage.jsx");
/* harmony import */ var _ErrorMessage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ErrorMessage.js */ "./src/components/ErrorMessage.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_FormInputs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/FormInputs */ "./src/components/utils/FormInputs.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_useForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/useForm */ "./src/components/utils/useForm.jsx");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../queries&Mutations&Functions/Mutations */ "./src/components/queries&Mutations&Functions/Mutations.jsx");
/* harmony import */ var _queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../queries&Mutations&Functions/Functions */ "./src/components/queries&Mutations&Functions/Functions.jsx");
/* harmony import */ var _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../queries&Mutations&Functions/Queries */ "./src/components/queries&Mutations&Functions/Queries.jsx");

var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\subjectSpecialty\\NewRegSubjectToSpecialty.jsx";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var InputGroup = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "NewRegSubjectToSpecialty__InputGroup",
  componentId: "sc-1nszp1v-0"
})(["display:flex;flex-direction:column;margin:0 1rem;"]);
var AllControls = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "NewRegSubjectToSpecialty__AllControls",
  componentId: "sc-1nszp1v-1"
})(["display:flex;flex-direction:column;"]);
var validationSchema = yup__WEBPACK_IMPORTED_MODULE_9__["object"]().shape({
  specialty: yup__WEBPACK_IMPORTED_MODULE_9__["string"]().required("Choix de la Série Obligatoire"),
  subject: yup__WEBPACK_IMPORTED_MODULE_9__["string"]().required("Choix de la matière Obligatoire"),
  coeff: yup__WEBPACK_IMPORTED_MODULE_9__["number"]().min(1, "Le coefficient doit etre au moins 1").required("Choix de la matière Obligatoire")
});

var NewRegSubjectSpecialty = function NewRegSubjectSpecialty() {
  var makeSpecialtyObject = function makeSpecialtyObject(specialtyID, specialtyCode) {
    var storedSpecialty = {
      id: "".concat(specialtyID),
      specialtyCode: "".concat(specialtyCode)
    };
    return storedSpecialty;
  };

  var makeSubjectObject = function makeSubjectObject(subjectID, subjectCode) {
    var storedSubject = {
      id: "".concat(subjectID),
      subjectCode: "".concat(subjectCode)
    };
    return storedSubject;
  };

  var initialValues = {
    specialty: " ",
    subject: " ",
    coeff: ""
  };

  var _useForm = Object(_utils_useForm__WEBPACK_IMPORTED_MODULE_8__["default"])({
    educTypeID: " "
  }),
      _useForm2 = _slicedToArray(_useForm, 3),
      state = _useForm2[0],
      setState = _useForm2[1],
      handleReactSelectChange = _useForm2[2];

  var handleChange = function handleChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value,
        type = _e$target.type;
    var val = type === "number" ? parseInt(value) : value;
    setState(_defineProperty({}, name, val));
  };

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_12__["getAllEducationTypesQuery"]),
      dataEducType = _useQuery.data,
      loadingEducType = _useQuery.loadingEducType,
      errorEducType = _useQuery.errorEducType;

  {
    loadingEducType && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, "loading...");
  }
  {
    errorEducType && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      error: errorEducType,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    });
  }
  console.log(dataEducType);
  var getEducTypes = dataEducType && dataEducType.educationTypes;
  console.log(getEducTypes);
  var getEducTypeOptions = getEducTypes && getEducTypes.map(function (item) {
    return {
      value: item.id,
      label: item.educationTypeName
    };
  });

  var _useQuery2 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_12__["getAllSpecialtiesOfAnEducationTypeQuery"], {
    skip: !state.educTypeID,
    variables: {
      id: state.educTypeID
    }
  }),
      dataSpecialty = _useQuery2.data,
      loadingSpecialty = _useQuery2.loading,
      errorSpecialty = _useQuery2.error;

  {
    loadingSpecialty && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, "loading...");
  }
  {
    errorSpecialty && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      error: errorSpecialty,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    });
  }
  console.log(dataSpecialty);
  var getSpecialtyEducType = dataSpecialty && dataSpecialty.educationType;

  var _getSpecialtyEducType = _objectSpread({}, getSpecialtyEducType),
      specialty = _getSpecialtyEducType.specialty;

  console.log(specialty);
  var refinedSpecialty = specialty && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_11__["removeTypename"])(specialty);
  var getSpecialtyOptions = refinedSpecialty && refinedSpecialty.map(function (item) {
    return _objectSpread({}, item, {
      value: item.id,
      label: item.specialtyName
    });
  });

  var _useQuery3 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_12__["getAllSubjectsOfAnEducTypeQuery"], {
    skip: !state.educTypeID,
    variables: {
      id: state.educTypeID
    }
  }),
      dataSubj = _useQuery3.data,
      loadingSubj = _useQuery3.loading,
      errorSubj = _useQuery3.error;

  {
    loadingSubj && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, "loading...");
  }
  {
    errorSubj && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      error: errorSubj,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    });
  }
  console.log(dataSubj);
  var getEducationType = dataSubj && dataSubj.educationType;

  var _getEducationType = _objectSpread({}, getEducationType),
      subject = _getEducationType.subject;

  console.log(subject);
  var refinedSubject = subject && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_11__["removeTypename"])(subject);
  var getSubjectOptions = refinedSubject && refinedSubject.map(function (item) {
    return _objectSpread({}, item, {
      value: item.id,
      label: item.subjectName
    });
  });

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_10__["registerNewSubjectSpecialtyMutation"]),
      _useMutation2 = _slicedToArray(_useMutation, 2),
      createSubjectSpecialty = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      loading = _useMutation2$.loading,
      error = _useMutation2$.error;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
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
                return createSubjectSpecialty({
                  variables: _objectSpread({}, values, {
                    specialty: refinedSpecialty && makeSpecialtyObject(values.specialty.value, values.specialty.specialtyCode),
                    subject: refinedSubject && makeSubjectObject(values.subject.value, values.subject.subjectCode)
                  })
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
      lineNumber: 154
    },
    __self: this
  }, function (_ref3) {
    var values = _ref3.values,
        isSubmitting = _ref3.isSubmitting,
        setFieldValue = _ref3.setFieldValue;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_StyledPage__WEBPACK_IMPORTED_MODULE_3__["MinimStyledPage"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, "Donner les mati\xE8res aux S\xE9ries"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      error: error,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_6__["StyledForm"], {
      disabled: isSubmitting || loading || loadingEducType || loadingSpecialty || loadingSubj,
      "aria-busy": isSubmitting || loading || loadingEducType || loadingSpecialty || loadingSubj,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AllControls, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputGroup, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_6__["SygefexSelect"], {
      onChange: handleReactSelectChange,
      name: "educTypeID",
      placeholder: "Le type d'enseignement",
      options: getEducTypeOptions,
      disbled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_6__["SygefexSelect"], {
      onChange: function onChange(value) {
        return setFieldValue("specialty", value);
      },
      name: "specialty",
      placeholder: "La Sp\xE9cialit\xE9",
      options: getSpecialtyOptions,
      disbled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_6__["SygefexSelect"], {
      onChange: function onChange(value) {
        return setFieldValue("subject", value);
      },
      name: "subject",
      placeholder: "La mati\xE8re",
      options: getSubjectOptions,
      disbled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_6__["SygexInput"], {
      name: "coeff",
      type: "number",
      label: "Coefficient de la mati\xE8re",
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_6__["ButtonStyled"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_6__["StyledButton"], {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      },
      __self: this
    }, "Valid", isSubmitting ? "ation en cours" : "er"))))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (NewRegSubjectSpecialty);

/***/ }),

/***/ "./src/components/user/GatedSignin.jsx":
/*!*********************************************!*\
  !*** ./src/components/user/GatedSignin.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ErrorMessage */ "./src/components/ErrorMessage.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Login */ "./src/components/user/Login.jsx");
/* harmony import */ var _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../queries&Mutations&Functions/Queries */ "./src/components/queries&Mutations&Functions/Queries.jsx");
var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\user\\GatedSignin.jsx";






var GatedSignin = function GatedSignin(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
    query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_4__["currentUserQuery"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, function (_ref) {
    var data = _ref.data,
        loading = _ref.loading,
        error = _ref.error;
    if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "Loading...");

    if (!data.me) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_1__["default"], {
        error: error,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Veuillez vous connecter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Login__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }));
    }

    return props.children;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (GatedSignin);

/***/ }),

/***/ "./src/components/user/Login.jsx":
/*!***************************************!*\
  !*** ./src/components/user/Login.jsx ***!
  \***************************************/
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

var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\user\\Login.jsx";

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
  displayName: "Login__InputGroup",
  componentId: "sc-175qynx-0"
})(["display:flex;flex-direction:column;margin:0 1rem;"]);
var AllControls = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "Login__AllControls",
  componentId: "sc-175qynx-1"
})(["display:flex;flex-direction:column;"]);
var LoginStyled = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "Login__LoginStyled",
  componentId: "sc-175qynx-2"
})(["display:grid;grid-template-columns:1fr;justify-items:left;a{display:block;cursor:pointer;}h9{display:block;padding-left:0;padding-right:2rem;}"]);
var validationSchema = yup__WEBPACK_IMPORTED_MODULE_8__["object"]().shape({
  email: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().min(3, "Email 3 characters au moins").required("Email Obligatoire").email("Email invalide"),
  password: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required("Mot de passe Obligatoire").min(3, "Mot de passe 3 characters au moins")
});

var Login = function Login() {
  var initialValues = {
    email: "",
    password: ""
  };

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__["useMutation"])(_queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_10__["loginUserMutation"], {
    refetchQueries: ["currentUserQuery"]
  }),
      _useMutation2 = _slicedToArray(_useMutation, 2),
      login = _useMutation2[0],
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
                return login({
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
      lineNumber: 63
    },
    __self: this
  }, function (_ref3) {
    var isSubmitting = _ref3.isSubmitting;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_StyledPage__WEBPACK_IMPORTED_MODULE_2__["MinimStyledPage"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, "Acceder a son compte"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      error: error,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_6__["StyledForm"], {
      disabled: isSubmitting,
      "aria-busy": isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AllControls, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputGroup, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_6__["SygexInput"], {
      name: "email",
      type: "email",
      label: "Email",
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_6__["SygexInput"], {
      name: "password",
      type: "password",
      label: "Mot de passe",
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LoginStyled, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h9", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, "Pas encore de compte?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/creates/signup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, "Cr\xE9ez votre compte")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_6__["ButtonStyled"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_6__["StyledButton"], {
      type: "submit",
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, "Valid", isSubmitting ? "ation en cours" : "er"))))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

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
})(["margin:0 3rem;padding:0.6rem;font-size:1.7rem;border-radius:0.5rem;border:0.09rem solid ", ";box-shadow:", ";min-width:20rem;&[disabled]{opacity:0.3;}&::before{height:0.3rem;content:\"\";display:block;background-image:linear-gradient( to right,#0780b7 0%,#e2b04a 20%,#0780b7 100% );}&[aria-busy=\"true\"]::before{background-size:50% auto;animation:", " 0.5s linear infinite;}"], function (props) {
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
      lineNumber: 224
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledInput, _extends({
    className: "text-input"
  }, field, props, {
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLabel, {
    htmlFor: props.id || props.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, label), meta.touched && meta.error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledErrorMessage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
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
      lineNumber: 244
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
      lineNumber: 251
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], _extends({
    label: label
  }, field, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }), function (_ref4) {
    var field = _ref4.field;
    return options.map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RadioStyled, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({}, field, {
        type: "radio",
        id: item.value,
        value: item.value,
        checked: field.value === item.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: props.id || item.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, item.key));
    });
  }), meta.touched && meta.error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledErrorMessage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, meta.error) : null);
};

 // <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>

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
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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

/***/ 4:
/*!*****************************************************!*\
  !*** multi ./pages/creates/newSubjectSpecialty.jsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/creates/newSubjectSpecialty.jsx */"./pages/creates/newSubjectSpecialty.jsx");


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
//# sourceMappingURL=newSubjectSpecialty.js.map