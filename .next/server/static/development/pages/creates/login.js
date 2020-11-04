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

/***/ "./pages/creates/login.jsx":
/*!*********************************!*\
  !*** ./pages/creates/login.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_user_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/components/user/Login */ "./src/components/user/Login.jsx");
var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\pages\\creates\\login.jsx";



var login = function login() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_user_Login__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (login);

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
      }, "Erreure r\xE9seaux!"), error.message.replace("Network error: ", "")));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
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
  }, "Erreure !"), error.message.replace("GraphQL error: ", "")));
};

DisplayError.defaultProps = {
  error: {}
};
DisplayError.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayError);

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
  var data = _taggedTemplateLiteral(["\n  mutation enterMarksMutation(\n    $subjectSpecialty: SubjectSpecialtyWhereUniqueInput!\n    $subjectAve: Float!\n    $subjectName: String!\n    $candExamSecretCode: String!\n  ) {\n    enterMarks(\n      subjectSpecialty: $subjectSpecialty\n      subjectAve: $subjectAve\n      subjectName: $subjectName\n      candExamSecretCode: $candExamSecretCode\n    ) {\n      subjectAve\n      coeff\n      subjectName\n      id\n      subjectSpecialty {\n        id\n      }\n    }\n  }\n"]);

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
  var data = _taggedTemplateLiteral(["\n  mutation createAttendanceMutation(\n    $subjectSpecialty: SubjectSpecialtyWhereUniqueInput!\n    $centerExamSessionSpecialty: CenterExamSessionSpecialtyWhereUniqueInput!\n    $collected: String!\n    $candExamSecretCode: String!\n    $handin: String!\n  ) {\n    createAttendance(\n      subjectSpecialty: $subjectSpecialty\n      centerExamSessionSpecialty: $centerExamSessionSpecialty\n      collected: $collected\n      candExamSecretCode: $candExamSecretCode\n      handin: $handin\n    ) {\n      id\n    }\n  }\n"]);

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
  var data = _taggedTemplateLiteral(["\n  mutation createPhaseRankMutation(\n    $phase: PhaseWhereUniqueInput!\n    $rank: RankWhereUniqueInput!\n  ) {\n    createPhaseRank(phase: $phase, rank: $rank) {\n      id\n    }\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  mutation createCenterExamSessionMutation(\n    $examSession: ExamSessionWhereUniqueInput!\n    $center: CenterWhereUniqueInput!\n    $CESCode: String!\n  ) {\n    createCenterExamSession(\n      examSession: $examSession\n      center: $center\n      CESCode: $CESCode\n    ) {\n      id\n    }\n  }\n"]);

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
var createCenterExamSessionSpecialtyMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject16());
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
      disabled: isSubmitting || loading,
      "aria-busy": isSubmitting || loading,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AllControls, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputGroup, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_6__["SygexInput"], {
      name: "email",
      type: "email",
      label: "Email",
      disabled: isSubmitting || loading,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_6__["SygexInput"], {
      name: "password",
      type: "password",
      label: "Mot de passe",
      disabled: isSubmitting || loading,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LoginStyled, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, "Pas encore de compte?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/creates/signup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, "Cr\xE9ez votre compte")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_6__["ButtonStyled"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_6__["StyledButton"], {
      type: "submit",
      disabled: isSubmitting || loading,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
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

/***/ 4:
/*!***************************************!*\
  !*** multi ./pages/creates/login.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/creates/login.jsx */"./pages/creates/login.jsx");


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
//# sourceMappingURL=login.js.map