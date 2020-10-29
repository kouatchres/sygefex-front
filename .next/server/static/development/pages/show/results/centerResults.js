module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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

/***/ "./pages/show/results/centerResults.jsx":
/*!**********************************************!*\
  !*** ./pages/show/results/centerResults.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_results_center_CompleteResultsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/components/results/center/CompleteResultsList */ "./src/components/results/center/CompleteResultsList.jsx");
var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\pages\\show\\results\\centerResults.jsx";



var centerResults = function centerResults(_ref) {
  var query = _ref.query;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_results_center_CompleteResultsList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: query.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (centerResults);

/***/ }),

/***/ "./src/components/queries&Mutations&Functions/Queries.jsx":
/*!****************************************************************!*\
  !*** ./src/components/queries&Mutations&Functions/Queries.jsx ***!
  \****************************************************************/
/*! exports provided: getAllSubjectSpecialtiesOfASpecialtyQuery, getAllSpecialtiesOfAnEducationTypeQuery, getAllExamsQuery, getAllSessionsQuery, getDivisionsOfARegionQuery, getAllDivisionsQuery, getSubDivisionsOfADivisionQuery, getTownsOfASubDivisionQuery, getCentersOfATownQuery, getAllEducationTypesQuery, getAllRanksQuery, getAllCandidatesQuery, getAllCentersQuery, getSingleRegionQuery, getAllSpecialtiesQuery, getAllSubDivisionsQuery, getAllSubjectsOfAnEducTypeQuery, getScoreID, singleSpecialtyQuery, getRegistrations, singleSubjectQuery, singleCandidateQuery1, getAllSubjectsWithEducTypesQuery, singleCandidateQuery, viewSingleCandidateQuery, singleCenterQuery, singleExamQuery, singleTownQuery, getAllCenterResultsQuery, singleSessionQuery, singleDivisionQuery, singleSubDivisionQuery, singleEducationTypeQuery, singleRankQuery, centerExamSessionSpecialtyForResultsQuery, getAllCandidateRegistrationIDsQuery, getCenterExamSessionSpecialtyQuery, getExamSessionQuery, getAllSpecialtiesOfACenterExamSessionQuery, getCenterResultsQuery, getCandidateRegistrationIDQuery, registrationIDFromSecretCodeQuery, getCandidateRegistrationIDsQuery, centerExamSessionForResultsQuery, getCandidateIDQuery, getASingleCenterQuery, getRegisteredCandidateCountQuery, centersPerTownQuery, getSingleCenterQuery, getCandidateResultsQuery, getCenterRegistrationIDsQuery, getCandidateByCandCodeQuery, getSingleCenterExamSessionQuery, getEachCandidateResultsQuery, getCenterIDFromCenterCodeQuery, getRegistrationIDFromRegNumberQuery, centerExamSessionSpecialtyResultsQuery, dataForAverage, getAllPhasesQuery, getAllRegionsQuery, getAllUsersQuery, singleExaminerQuery, getAllRegionsDivisionsAndTownsQuery, getCandidateRegistrationInfoQuery, getCESExaminerQuery, getExaminerIDQuery, getAllTownsQuery, getSpecialtyFromCESSQuery, getExaminerRegistrationQuery, getSingleProfQuery, getAllGroup1Query, getAllSubjectsQuery, getSingleCenterFromCenterSecretCodeQuery, getSingleCenterExamSessionBySecretCodeQuery, getAllGroup2Query, singleSubjectGroupQuery, getAllRegionsAndDivisionsQuery, getRegisteredCandidatesPerSpecialty, getAllSubjectGroupsQuery, getAllRanksOfAnExamPhaseQuery, currentUserQuery, singlePhaseQuery, getSingleCenterByCodeQuery */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registrationIDFromSecretCodeQuery", function() { return registrationIDFromSecretCodeQuery; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleCenterFromCenterSecretCodeQuery", function() { return getSingleCenterFromCenterSecretCodeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleCenterExamSessionBySecretCodeQuery", function() { return getSingleCenterExamSessionBySecretCodeQuery; });
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
function _templateObject83() {
  var data = _taggedTemplateLiteral(["\n  query singleSessionQuery($id: ID!) {\n    session(id: $id) {\n      sessionName\n      sessionCode\n      id\n    }\n  }\n"]);

  _templateObject83 = function _templateObject83() {
    return data;
  };

  return data;
}

function _templateObject82() {
  var data = _taggedTemplateLiteral(["\n  query singleSubjectGroupQuery($id: ID!) {\n    subjectGroup(id: $id) {\n      subjectGroupName\n      subjectGroupCode\n      id\n    }\n  }\n"]);

  _templateObject82 = function _templateObject82() {
    return data;
  };

  return data;
}

function _templateObject81() {
  var data = _taggedTemplateLiteral(["\n  query singleSubjectQuery($id: ID!) {\n    subject(id: $id) {\n      subjectName\n      subjectCode\n      id\n    }\n  }\n"]);

  _templateObject81 = function _templateObject81() {
    return data;
  };

  return data;
}

function _templateObject80() {
  var data = _taggedTemplateLiteral(["\n  query singleRankQuery($id: ID!) {\n    rank(id: $id) {\n      rankName\n      rankCode\n      id\n    }\n  }\n"]);

  _templateObject80 = function _templateObject80() {
    return data;
  };

  return data;
}

function _templateObject79() {
  var data = _taggedTemplateLiteral(["\n  query singleDivisionQuery($id: ID!) {\n    division(id: $id) {\n      divName\n      divCode\n      id\n    }\n  }\n"]);

  _templateObject79 = function _templateObject79() {
    return data;
  };

  return data;
}

function _templateObject78() {
  var data = _taggedTemplateLiteral(["\n  query dataForAverage($candExamSecretCode: String!) {\n    scores(candExamSecretCode: $candExamSecretCode) {\n      id\n      subjectAve\n      coeff\n    }\n  }\n"]);

  _templateObject78 = function _templateObject78() {
    return data;
  };

  return data;
}

function _templateObject77() {
  var data = _taggedTemplateLiteral(["\n  query singleSpecialtyQuery($id: ID!) {\n    specialty(id: $id) {\n      specialtyName\n      specialtyCode\n      id\n    }\n  }\n"]);

  _templateObject77 = function _templateObject77() {
    return data;
  };

  return data;
}

function _templateObject76() {
  var data = _taggedTemplateLiteral(["\n  query singlePhaseQuery($id: ID!) {\n    phase(id: $id) {\n      phaseName\n      phaseCode\n      id\n    }\n  }\n"]);

  _templateObject76 = function _templateObject76() {
    return data;
  };

  return data;
}

function _templateObject75() {
  var data = _taggedTemplateLiteral(["\n  query getSingleRegionQuery($id: ID!) {\n    region(id: $id) {\n      regName\n      regCode\n      id\n    }\n  }\n"]);

  _templateObject75 = function _templateObject75() {
    return data;
  };

  return data;
}

function _templateObject74() {
  var data = _taggedTemplateLiteral(["\n  query singleSubDivisionQuery($id: ID!) {\n    subDivision(id: $id) {\n      subDivName\n      subDivCode\n      id\n    }\n  }\n"]);

  _templateObject74 = function _templateObject74() {
    return data;
  };

  return data;
}

function _templateObject73() {
  var data = _taggedTemplateLiteral(["\n  query getRegistrations($candExamSecretCode: String!) {\n    registration(candExamSecretCode: $candExamSecretCode) {\n      id\n      scores {\n        id\n        subject(orderBy: subjectName_ASC) {\n          id\n          subjectName\n        }\n      }\n    }\n  }\n"]);

  _templateObject73 = function _templateObject73() {
    return data;
  };

  return data;
}

function _templateObject72() {
  var data = _taggedTemplateLiteral(["\n  query getScoreID($candExamSecretCode: String!) {\n    scores(candExamSecretCode: $candExamSecretCode) {\n      id\n    }\n  }\n"]);

  _templateObject72 = function _templateObject72() {
    return data;
  };

  return data;
}

function _templateObject71() {
  var data = _taggedTemplateLiteral(["\n  query viewSingleCandidateQuery($candCode: String!) {\n    singleCandidate(candCode: $candCode) {\n      id\n      dateOfBirth\n      cand1stName\n      cand2ndName\n      cand3rdName\n      candCode\n      momName\n      dadName\n      email\n      image\n      phoneNumb\n      birthCertNumber\n      placeOfBirth\n      user {\n        id\n      }\n      gender\n    }\n  }\n"]);

  _templateObject71 = function _templateObject71() {
    return data;
  };

  return data;
}

function _templateObject70() {
  var data = _taggedTemplateLiteral(["\n  query singleExaminerQuery($id: ID!) {\n    examiner(id: $id) {\n      id\n      examiner1stName\n      examiner2ndName\n      examinerOtherNames\n      examinerCode\n      examinerEmail\n      gender\n      examinerImage\n      examinerPhone\n      examinerMatricule\n      examinerCNI\n    }\n  }\n"]);

  _templateObject70 = function _templateObject70() {
    return data;
  };

  return data;
}

function _templateObject69() {
  var data = _taggedTemplateLiteral(["\n  query singleCandidateQuery($id: ID!) {\n    candidate(id: $id) {\n      id\n      dateOfBirth\n      cand1stName\n      cand2ndName\n      cand3rdName\n      candCode\n      dadName\n      momName\n      email\n      image\n      phoneNumb\n      birthCertNumber\n      placeOfBirth\n      user {\n        id\n      }\n      gender\n    }\n  }\n"]);

  _templateObject69 = function _templateObject69() {
    return data;
  };

  return data;
}

function _templateObject68() {
  var data = _taggedTemplateLiteral(["\n  query singleCandidateQuery1($id: ID!) {\n    candidate(id: $id) {\n      cand1stName\n      cand2ndName\n      cand3rdName\n      dadName\n      momName\n      candCode\n      email\n      image\n      phoneNumb\n      placeOfBirth\n      user {\n        id\n      }\n      id\n    }\n  }\n"]);

  _templateObject68 = function _templateObject68() {
    return data;
  };

  return data;
}

function _templateObject67() {
  var data = _taggedTemplateLiteral(["\n  query singleExamQuery($id: ID!) {\n    exam(id: $id) {\n      examName\n      examCode\n      id\n    }\n  }\n"]);

  _templateObject67 = function _templateObject67() {
    return data;
  };

  return data;
}

function _templateObject66() {
  var data = _taggedTemplateLiteral(["\n  query getExamSessionQuery(\n    $exam: ExamWhereUniqueInput!\n    $session: SessionWhereUniqueInput!\n  ) {\n    examSessions(session: $session, exam: $exam) {\n      id\n    }\n  }\n"]);

  _templateObject66 = function _templateObject66() {
    return data;
  };

  return data;
}

function _templateObject65() {
  var data = _taggedTemplateLiteral(["\n  query getSpecialtyFromCESSQuery($id: ID!) {\n    centerExamSessionSpecialty(id: $id) {\n      id\n      specialty {\n        id\n        specialtyName\n      }\n    }\n  }\n"]);

  _templateObject65 = function _templateObject65() {
    return data;
  };

  return data;
}

function _templateObject64() {
  var data = _taggedTemplateLiteral(["\n  query getCenterExamSessionSpecialtyQuery(\n    $centerExamSession: CenterExamSessionWhereUniqueInput!\n    $specialty: SpecialtyWhereUniqueInput!\n  ) {\n    centerExamSessionSpecialties(\n      centerExamSession: $centerExamSession\n      specialty: $specialty\n    ) {\n      id\n    }\n  }\n"]);

  _templateObject64 = function _templateObject64() {
    return data;
  };

  return data;
}

function _templateObject63() {
  var data = _taggedTemplateLiteral(["\n  query getRegisteredCandidatesPerSpecialty($id: ID!) {\n    centerExamSessionSpecialty(id: $id) {\n      id\n      registration {\n        candRegistrationNumber\n        id\n        candExamSecretCode\n        candidate {\n          id\n          cand1stName\n          cand2ndName\n          cand3rdName\n        }\n      }\n    }\n  }\n"]);

  _templateObject63 = function _templateObject63() {
    return data;
  };

  return data;
}

function _templateObject62() {
  var data = _taggedTemplateLiteral(["\n  query getRegisteredCandidateCountQuery($id: ID!) {\n    registrationsConnection(id: $id) {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);

  _templateObject62 = function _templateObject62() {
    return data;
  };

  return data;
}

function _templateObject61() {
  var data = _taggedTemplateLiteral(["\n  query getAllRanksOfAnExamPhaseQuery($id: ID!) {\n    phase(id: $id) {\n      id\n      phaseRank {\n        id\n        rank {\n          id\n          rankName\n          rankCode\n        }\n        phase {\n          id\n          phaseName\n          phaseCode\n        }\n      }\n    }\n  }\n"]);

  _templateObject61 = function _templateObject61() {
    return data;
  };

  return data;
}

function _templateObject60() {
  var data = _taggedTemplateLiteral(["\n  query getSingleCenterExamSessionBySecretCodeQuery($CESCode: String!) {\n    centerExamSessionBySecretCode(CESCode: $CESCode) {\n      id\n    }\n  }\n"]);

  _templateObject60 = function _templateObject60() {
    return data;
  };

  return data;
}

function _templateObject59() {
  var data = _taggedTemplateLiteral(["\n  query getSingleCenterExamSessionQuery(\n    $center: CenterWhereUniqueInput!\n    $examSession: ExamSessionWhereUniqueInput!\n  ) {\n    centerExamSessionsByCode(examSession: $examSession, center: $center) {\n      id\n    }\n  }\n"]);

  _templateObject59 = function _templateObject59() {
    return data;
  };

  return data;
}

function _templateObject58() {
  var data = _taggedTemplateLiteral(["\n  query singleTownQuery($id: ID!) {\n    town(id: $id) {\n      townName\n      townCode\n      id\n    }\n  }\n"]);

  _templateObject58 = function _templateObject58() {
    return data;
  };

  return data;
}

function _templateObject57() {
  var data = _taggedTemplateLiteral(["\n  query getASingleCenterQuery($centerNumber: Int!) {\n    centerByNumber(centerNumber: $centerNumber) {\n      centerNumber\n      centerName\n      centerCode\n      id\n    }\n  }\n"]);

  _templateObject57 = function _templateObject57() {
    return data;
  };

  return data;
}

function _templateObject56() {
  var data = _taggedTemplateLiteral(["\n  query getSingleCenterByCodeQuery($centerSecretCode: String!) {\n    getCenterByCode(centerSecretCode: $centerSecretCode) {\n      id\n      centerCode\n    }\n  }\n"]);

  _templateObject56 = function _templateObject56() {
    return data;
  };

  return data;
}

function _templateObject55() {
  var data = _taggedTemplateLiteral(["\n  query getSingleProfQuery($authCode: String!) {\n    profByAuthCode(authCode: $authCode) {\n      authCode\n      id\n      auth1stName\n    }\n  }\n"]);

  _templateObject55 = function _templateObject55() {
    return data;
  };

  return data;
}

function _templateObject54() {
  var data = _taggedTemplateLiteral(["\n  query getSingleCenterFromCenterSecretCodeQuery($CESCode: String!) {\n    centerBySecretCode(CESCode: $CESCode) {\n      id\n      CESCode\n      centerName\n      centerCode\n    }\n  }\n"]);

  _templateObject54 = function _templateObject54() {
    return data;
  };

  return data;
}

function _templateObject53() {
  var data = _taggedTemplateLiteral(["\n  query getSingleCenterQuery($centerNumber: Int!) {\n    centerByNumber(centerNumber: $centerNumber) {\n      id\n      centerNumber\n      centerCode\n    }\n  }\n"]);

  _templateObject53 = function _templateObject53() {
    return data;
  };

  return data;
}

function _templateObject52() {
  var data = _taggedTemplateLiteral(["\n  query singleCenterQuery($id: ID!) {\n    center(id: $id) {\n      centerName\n      centerNumber\n      centerCode\n      id\n    }\n  }\n"]);

  _templateObject52 = function _templateObject52() {
    return data;
  };

  return data;
}

function _templateObject51() {
  var data = _taggedTemplateLiteral(["\n  query getAllCandidatesQuery {\n    candidates(orderBy: cand1stName_ASC) {\n      cand1stName\n      cand2ndName\n      cand3rdName\n      email\n      image\n      phoneNumb\n      placeOfBirth\n      candCode\n      id\n    }\n  }\n"]);

  _templateObject51 = function _templateObject51() {
    return data;
  };

  return data;
}

function _templateObject50() {
  var data = _taggedTemplateLiteral(["\n  query getAllCentersQuery {\n    centers(orderBy: centerName_ASC) {\n      id\n      centerName\n      centerCode\n    }\n  }\n"]);

  _templateObject50 = function _templateObject50() {
    return data;
  };

  return data;
}

function _templateObject49() {
  var data = _taggedTemplateLiteral(["\n  query centersPerTownQuery($id: ID!) {\n    town(id: $id) {\n      townName\n      id\n      center(orderBy: centerName_ASC) {\n        centerName\n        centerNumber\n        centerSecretCode\n        centerCode\n        id\n      }\n    }\n  }\n"]);

  _templateObject49 = function _templateObject49() {
    return data;
  };

  return data;
}

function _templateObject48() {
  var data = _taggedTemplateLiteral(["\n  query getCentersOfATownQuery($id: ID!) {\n    town(id: $id) {\n      townName\n      id\n      center(orderBy: centerName_ASC) {\n        centerName\n        centerCode\n        centerNumber\n        id\n      }\n    }\n  }\n"]);

  _templateObject48 = function _templateObject48() {
    return data;
  };

  return data;
}

function _templateObject47() {
  var data = _taggedTemplateLiteral(["\n  query getTownsOfASubDivision($id: ID!) {\n    subDivision(id: $id) {\n      subDivName\n      id\n      town(orderBy: townName_ASC) {\n        townName\n        townCode\n        id\n      }\n    }\n  }\n"]);

  _templateObject47 = function _templateObject47() {
    return data;
  };

  return data;
}

function _templateObject46() {
  var data = _taggedTemplateLiteral(["\n  query getAllTownsQuery {\n    towns(orderBy: townName_ASC) {\n      townName\n      townCode\n      id\n    }\n  }\n"]);

  _templateObject46 = function _templateObject46() {
    return data;
  };

  return data;
}

function _templateObject45() {
  var data = _taggedTemplateLiteral(["\n  query getAllSubDivisionsQuery {\n    subDivision(orderBy: subDivName_ASC) {\n      subDivName\n      subDivCode\n      id\n    }\n  }\n"]);

  _templateObject45 = function _templateObject45() {
    return data;
  };

  return data;
}

function _templateObject44() {
  var data = _taggedTemplateLiteral(["\n  query getSubDivisionsOfADivisionQuery($id: ID!) {\n    division(id: $id) {\n      divName\n      id\n      subDivision(orderBy: subDivName_ASC) {\n        subDivName\n        subDivCode\n        id\n      }\n    }\n  }\n"]);

  _templateObject44 = function _templateObject44() {
    return data;
  };

  return data;
}

function _templateObject43() {
  var data = _taggedTemplateLiteral(["\n  query getDivisionsOfARegionQuery($id: ID!) {\n    region(id: $id) {\n      regName\n      id\n      division(orderBy: divName_ASC) {\n        divName\n        divCode\n        id\n      }\n    }\n  }\n"]);

  _templateObject43 = function _templateObject43() {
    return data;
  };

  return data;
}

function _templateObject42() {
  var data = _taggedTemplateLiteral(["\n  query getAllRegionsDivisionsAndTownsQuery {\n    regions {\n      id\n      regName\n      regCode\n      division(orderBy: divName_ASC) {\n        divName\n        divCode\n        id\n        subDivision {\n          town(orderBy: townName_ASC) {\n            id\n            townName\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject42 = function _templateObject42() {
    return data;
  };

  return data;
}

function _templateObject41() {
  var data = _taggedTemplateLiteral(["\n  query getAllRegionsAndDivisionsQuery {\n    regions {\n      id\n      regName\n      regCode\n      division(orderBy: divName_ASC) {\n        divName\n        divCode\n        id\n      }\n    }\n  }\n"]);

  _templateObject41 = function _templateObject41() {
    return data;
  };

  return data;
}

function _templateObject40() {
  var data = _taggedTemplateLiteral(["\n  query getAllDivisionsQuery {\n    divisions(orderBy: divName_ASC) {\n      divName\n      divCode\n      id\n    }\n  }\n"]);

  _templateObject40 = function _templateObject40() {
    return data;
  };

  return data;
}

function _templateObject39() {
  var data = _taggedTemplateLiteral(["\n  query getAllSessionsQuery {\n    sessions(orderBy: createdAt_DESC) {\n      sessionName\n      sessionCode\n      id\n    }\n  }\n"]);

  _templateObject39 = function _templateObject39() {
    return data;
  };

  return data;
}

function _templateObject38() {
  var data = _taggedTemplateLiteral(["\n  query getAllGroup1Query($educType: EducationTypeWhereUniqueInput!) {\n    group1Subjects(educType: $educType, orderBy: subjectName_ASC) {\n      subjectName\n      subjectCode\n      subjectGroup\n      id\n    }\n  }\n"]);

  _templateObject38 = function _templateObject38() {
    return data;
  };

  return data;
}

function _templateObject37() {
  var data = _taggedTemplateLiteral(["\n  query getAllGroup2Query($educType: EducationTypeWhereUniqueInput!) {\n    group2Subjects(educType: $educType, orderBy: subjectName_ASC) {\n      subjectName\n      subjectCode\n      subjectGroup\n      id\n    }\n  }\n"]);

  _templateObject37 = function _templateObject37() {
    return data;
  };

  return data;
}

function _templateObject36() {
  var data = _taggedTemplateLiteral(["\n  query getAllExamsQuery {\n    exams(orderBy: examName_ASC) {\n      examName\n      examCode\n      id\n    }\n  }\n"]);

  _templateObject36 = function _templateObject36() {
    return data;
  };

  return data;
}

function _templateObject35() {
  var data = _taggedTemplateLiteral(["\n  query getAllSubjectSpecialtiesOfASpecialtyQuery($id: ID!) {\n    specialty(id: $id) {\n      id\n      subjectSpecialty {\n        id\n        subject {\n          id\n          subjectName\n          subjectCode\n        }\n      }\n    }\n  }\n"]);

  _templateObject35 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34() {
  var data = _taggedTemplateLiteral(["\n  query getAllSubjectsWithEducTypesQuery {\n    subjects(orderBy: subjectName_ASC) {\n      id\n      subjectName\n      subjectCode\n      subjectType\n      subjectGroup\n      subjectSpecialty {\n        specialty {\n          specialtyName\n        }\n      }\n    }\n  }\n"]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33() {
  var data = _taggedTemplateLiteral(["\n  query getAllSubjectsOfAnEducTypeQuery($id: ID!) {\n    educationType(id: $id) {\n      id\n      educationTypeName\n      subject(orderBy: subjectName_ASC) {\n        id\n        subjectName\n        subjectCode\n        subjectType\n        subjectGroup\n      }\n    }\n  }\n"]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = _taggedTemplateLiteral(["\n  query getAllSpecialtiesQuery {\n    specialties(orderBy: specialtyName_ASC) {\n      id\n      specialtyName\n      specialtyCode\n    }\n  }\n"]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = _taggedTemplateLiteral(["\n  query getAllSpecialtiesOfACenterExamSessionQuery($id: ID!) {\n    centerExamSession(id: $id) {\n      id\n      centerExamSessionSpecialty {\n        id\n        registration {\n          candRegistrationNumber\n          id\n          candidate {\n            id\n            cand1stName\n            cand2ndName\n            cand3rdName\n          }\n        }\n        specialty {\n          id\n          specialtyName\n          specialtyCode\n        }\n      }\n    }\n  }\n"]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["\n  query getAllSpecialtiesOfAnEducationTypeQuery($id: ID!) {\n    educationType(id: $id) {\n      id\n      educationTypeName\n      specialty {\n        id\n        specialtyName\n        specialtyCode\n      }\n    }\n  }\n"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral(["\n  query getAllSubjectGroupsQuery {\n    subjectGroups(orderBy: subjectGroupName_ASC) {\n      subjectGroupName\n      subjectGroupCode\n      id\n    }\n  }\n"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["\n  query getAllSubjectsQuery {\n    subjects(orderBy: subjectName_ASC) {\n      subjectName\n      subjectCode\n      id\n    }\n  }\n"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n  query getAllPhasesQuery {\n    phases(orderBy: phaseName_ASC) {\n      phaseName\n      phaseCode\n      id\n    }\n  }\n"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n  query getAllRanksQuery {\n    ranks(orderBy: rankName_ASC) {\n      rankName\n      rankCode\n      id\n    }\n  }\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n  query getCandidateByCandCodeQuery($candCode: String!) {\n    getCandidateByCode(candCode: $candCode) {\n      id\n      cand1stName\n      candCode\n      dateOfBirth\n      placeOfBirth\n      user {\n        id\n      }\n    }\n  }\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n  query centerExamSessionSpecialtyResultsQuery($id: ID!) {\n    centerExamSessionSpecialty(id: $id) {\n      id\n      centerExamSession {\n        id\n        center {\n          id\n          centerName\n          centerCode\n        }\n        examSession {\n          exam {\n            id\n            examName\n          }\n          session {\n            id\n            sessionName\n          }\n        }\n      }\n\n      specialty {\n        id\n        specialtyName\n        specialtyCode\n      }\n      registration {\n        id\n        candRegistrationNumber\n        candExamSecretCode\n        candidate {\n          id\n          cand1stName\n          cand2ndName\n          cand3rdName\n          dateOfBirth\n          placeOfBirth\n          email\n          phoneNumb\n          user {\n            id\n          }\n          gender\n        }\n        scores {\n          id\n          subjectAve\n        }\n      }\n    }\n  }\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n  query centerExamSessionForResultsQuery($id: ID!) {\n    centerExamSession(id: $id) {\n      id\n      center {\n        id\n        centerName\n      }\n      examSession {\n        id\n        exam {\n          examName\n          id\n        }\n        session {\n          id\n          sessionName\n        }\n      }\n      registration {\n        id\n        EPF1\n        EPF2\n        centerExamSession {\n          id\n          center {\n            id\n            centerName\n          }\n          examSession {\n            id\n            exam {\n              examName\n              id\n            }\n            session {\n              id\n              sessionName\n            }\n          }\n        }\n        candRegistrationNumber\n        candExamSecretCode\n        aptitude\n        candidate {\n          id\n          cand1stName\n          cand2ndName\n          cand3rdName\n          dateOfBirth\n          placeOfBirth\n          email\n          phoneNumb\n          user {\n            id\n          }\n          gender\n        }\n        specialty {\n          id\n          specialtyName\n          specialtyCode\n        }\n        scores {\n          id\n          subjectAve\n        }\n      }\n    }\n  }\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  query centerExamSessionSpecialtyForResultsQuery($centerExamSession: String!) {\n    centerExamSessionSpecialtyForResults(\n      centerExamSession: $centerExamSession\n    ) {\n      id\n      specialty {\n        id\n        specialtyName\n      }\n    }\n  }\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  query getCenterRegistrationIDsQuery(\n    $exam: ExamWhereUniqueInput!\n    $center: CenterWhereUniqueInput!\n    $session: SessionWhereUniqueInput!\n  ) {\n    centerRegistrationIDs(exam: $exam, center: $center, session: $session) {\n      id\n    }\n  }\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  query getCenterIDFromCenterCodeQuery($centerSecretCode: String!) {\n    getCenterByCode(centerSecretCode: $centerSecretCode) {\n      id\n    }\n  }\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  query getRegistrationIDFromRegNumberQuery($candRegistrationNumber: String!) {\n    candidateRegistrationNumber(\n      candRegistrationNumber: $candRegistrationNumber\n    ) {\n      id\n      candidate {\n        id\n        cand1stName\n        cand2ndName\n        cand3rdName\n        placeOfBirth\n        dateOfBirth\n        image\n        momName\n        dadName\n        email\n        user {\n          id\n        }\n        gender\n        registration {\n          id\n\n          centerExamSessionSpecialty {\n            id\n            specialty {\n              id\n              specialtyName\n            }\n            centerExamSession {\n              center {\n                id\n                centerName\n              }\n              examSession {\n                id\n                exam {\n                  id\n                  examName\n                }\n                session {\n                  id\n                  sessionName\n                }\n              }\n            }\n          }\n          scores {\n            id\n            subjectAve\n            coeff\n            subjectSpecialty {\n              id\n              subjectName\n            }\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  query getExaminerIDQuery($examinerCode: String!) {\n    examinerByCode(examinerCode: $examinerCode) {\n      id\n    }\n  }\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  query getCandidateIDQuery($candCode: String!) {\n    candidateCode(candCode: $candCode) {\n      id\n    }\n  }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  query getAllCandidateRegistrationIDsQuery($id: ID!) {\n    candidate(id: $id) {\n      id\n      cand1stName\n      cand2ndName\n      cand3rdName\n      placeOfBirth\n      dateOfBirth\n      image\n      momName\n      dadName\n      email\n      user {\n        id\n      }\n      gender\n      registration {\n        id\n\n        centerExamSessionSpecialty {\n          id\n          specialty {\n            id\n            specialtyName\n          }\n          centerExamSession {\n            center {\n              id\n              centerName\n            }\n            examSession {\n              id\n              exam {\n                id\n                examName\n              }\n              session {\n                id\n                sessionName\n              }\n            }\n          }\n        }\n        scores {\n          id\n          subjectAve\n          coeff\n        }\n      }\n      id\n    }\n  }\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  query registrationIDFromSecretCodeQuery($candExamSecretCode: String!) {\n    getRegistration(candExamSecretCode: $candExamSecretCode) {\n      id\n      specialty {\n        id\n        specialtyName\n      }\n    }\n  }\n"]);

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
  var data = _taggedTemplateLiteral(["\n  query getCandidateResultsQuery($id: ID!) {\n    registration(id: $id) {\n      id\n      createdAt\n      candRegistrationNumber\n\n      candidate {\n        cand1stName\n        cand2ndName\n        cand3rdName\n        momName\n        dadName\n        placeOfBirth\n        image\n        email\n        user {\n          id\n        }\n        dateOfBirth\n        gender\n      }\n      centerExamSessionSpecialty {\n        centerExamSession {\n          id\n          examSession {\n            id\n            exam {\n              id\n              examName\n            }\n            session {\n              id\n              sessionName\n            }\n          }\n          center {\n            id\n            centerName\n          }\n        }\n        specialty {\n          id\n          specialtyName\n        }\n      }\n      scores(orderBy: subjectName_ASC) {\n        id\n        subjectAve\n        subjectName\n        coeff\n        subjectSpecialty {\n          id\n          subject {\n            id\n            subjectName\n          }\n        }\n      }\n    }\n  }\n"]);

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
var registrationIDFromSecretCodeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject15());
var getAllCandidateRegistrationIDsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject16());
var getCandidateIDQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject17());
var getExaminerIDQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject18());
var getRegistrationIDFromRegNumberQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject19());
var getCenterIDFromCenterCodeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject20());
var getCenterRegistrationIDsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject21());
var centerExamSessionSpecialtyForResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject22());
var centerExamSessionForResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject23());
var centerExamSessionSpecialtyResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject24());
var getCandidateByCandCodeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject25());
var getAllRanksQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject26());
var getAllPhasesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject27());
var getAllSubjectsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject28());
var getAllSubjectGroupsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject29());
var getAllSpecialtiesOfAnEducationTypeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject30());
var getAllSpecialtiesOfACenterExamSessionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject31());
var getAllSpecialtiesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject32());
var getAllSubjectsOfAnEducTypeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject33());
var getAllSubjectsWithEducTypesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject34());
var getAllSubjectSpecialtiesOfASpecialtyQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject35());
var getAllExamsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject36());
var getAllGroup2Query = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject37());
var getAllGroup1Query = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject38());
var getAllSessionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject39());
var getAllDivisionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject40());
var getAllRegionsAndDivisionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject41());
var getAllRegionsDivisionsAndTownsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject42());
var getDivisionsOfARegionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject43());
var getSubDivisionsOfADivisionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject44());
var getAllSubDivisionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject45());
var getAllTownsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject46());
var getTownsOfASubDivisionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject47());
var getCentersOfATownQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject48());
var centersPerTownQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject49());
var getAllCentersQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject50());
var getAllCandidatesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject51()); ///*****************Single object queries */

var singleCenterQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject52());
var getSingleCenterQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject53());
var getSingleCenterFromCenterSecretCodeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject54());
var getSingleProfQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject55());
var getSingleCenterByCodeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject56());
var getASingleCenterQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject57());
var singleTownQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject58());
var getSingleCenterExamSessionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject59());
var getSingleCenterExamSessionBySecretCodeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject60());
var getAllRanksOfAnExamPhaseQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject61());
var getRegisteredCandidateCountQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject62());
var getRegisteredCandidatesPerSpecialty = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject63());
var getCenterExamSessionSpecialtyQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject64());
var getSpecialtyFromCESSQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject65());
var getExamSessionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject66());
var singleExamQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject67());
var singleCandidateQuery1 = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject68());
var singleCandidateQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject69());
var singleExaminerQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject70());
var viewSingleCandidateQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject71());
var getScoreID = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject72());
var getRegistrations = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject73());
var singleSubDivisionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject74());
var getSingleRegionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject75());
var singlePhaseQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject76());
var singleSpecialtyQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject77());
var dataForAverage = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject78());
var singleDivisionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject79());
var singleRankQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject80());
var singleSubjectQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject81());
var singleSubjectGroupQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject82());
var singleSessionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject83()); ///*****************End Single object queries */



/***/ }),

/***/ "./src/components/results/center/CompleteResultsList.jsx":
/*!***************************************************************!*\
  !*** ./src/components/results/center/CompleteResultsList.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_table_ui_SygefexText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/table/ui/SygefexText */ "./src/components/utils/table/ui/SygefexText.jsx");
/* harmony import */ var _utils_table_DataTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/table/DataTable */ "./src/components/utils/table/DataTable.jsx");
/* harmony import */ var _utils_table_tr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/table/tr */ "./src/components/utils/table/tr/index.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../queries&Mutations&Functions/Queries */ "./src/components/queries&Mutations&Functions/Queries.jsx");

var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\results\\center\\CompleteResultsList.jsx";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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









var HeaderStyled = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.tr.withConfig({
  displayName: "CompleteResultsList__HeaderStyled",
  componentId: "ufk6ok-0"
})(["display:grid;grid-template-columns:2fr 0.5fr 1fr 1fr 1fr 1fr 0.5fr;td:nth-child(1){min-width:8rem;}td:nth-child(2){min-width:2rem;}td:nth-child(3){min-width:5rem;}td:nth-child(4){min-width:5rem;}td:nth-child(5){min-width:5rem;}td:nth-child(6){min-width:4rem;}td:nth-child(7){min-width:2rem;}"]);
var RowStyled = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.tr.withConfig({
  displayName: "CompleteResultsList__RowStyled",
  componentId: "ufk6ok-1"
})(["td:nth-child(1){min-width:8rem;}td:nth-child(2){min-width:2rem;}td:nth-child(3){min-width:5rem;}td:nth-child(4){min-width:5rem;}td:nth-child(5){min-width:5rem;}td:nth-child(6){min-width:4rem;}td:nth-child(7){min-width:2rem;}display:grid;grid-template-columns:2fr 0.5fr 1fr 1fr 1fr 1fr 0.5fr;"]);
var TablePresentation = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "CompleteResultsList__TablePresentation",
  componentId: "ufk6ok-2"
})(["margin:0 auto;display:grid;min-width:80rem;grid-auto-flow:row;"]);

function pageData(_ref) {
  var data = _ref.data,
      _ref$per = _ref.per,
      per = _ref$per === void 0 ? 2 : _ref$per,
      _ref$page = _ref.page,
      page = _ref$page === void 0 ? 1 : _ref$page;
  return data.slice(per * (page - 1), per * page);
}

var searchableColumns = ["cand1stName", "cand2ndName", "cand3rdName", "gender", "specialtyCode", "candRegistrationNumber"];

var DivisionList = function DivisionList(_ref2) {
  var id = _ref2.id;
  var client = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__["useApolloClient"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      cand = _useState2[0],
      setCand = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    data: pageData({
      data: cand && cand
    }),
    loading: false,
    page: 1,
    sortedBy: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      state = _useState4[0],
      setState = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState6 = _slicedToArray(_useState5, 2),
      query = _useState6[0],
      setQuery = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState8 = _slicedToArray(_useState7, 2),
      additionalData = _useState8[0],
      setAdditionalData = _useState8[1]; // const loadTitleData = async () => {
  //   const { error, data } = await client.query({
  //     query: centerExamSessionForResultsQuery,
  //     variables: { id },
  //   });
  //   console.log(data);
  //   const { centerExamSession } = { ...data };
  //   setTitle({ centerExamSession });
  // };


  var loadCandScoreData = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _yield$client$query, error, data, _data, centerExamSession, _centerExamSession, registration, getCand;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return client.query({
                query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_8__["centerExamSessionForResultsQuery"],
                variables: {
                  id: id
                }
              });

            case 2:
              _yield$client$query = _context.sent;
              error = _yield$client$query.error;
              data = _yield$client$query.data;
              console.log(data);
              _data = _objectSpread({}, data), centerExamSession = _data.centerExamSession;
              _centerExamSession = _objectSpread({}, centerExamSession), registration = _centerExamSession.registration;
              getCand = registration && registration.map(function (item) {
                return _objectSpread({
                  candRegistrationNumber: item.candRegistrationNumber,
                  specialty: item.specialty.specialtyName,
                  specialtyCode: item.specialty.specialtyCode,
                  aptitude: item.aptitude,
                  EPF1: item.EPF1,
                  EPF2: item.EPF2
                }, item.candidate);
              });
              console.log({
                registration: registration
              });
              console.log({
                getCand: getCand
              });
              setState(function (prev) {
                return _objectSpread({}, prev, {
                  data: getCand
                });
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function loadCandScoreData() {
      return _ref3.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    loadCandScoreData(); // loadTitleData();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!state.sortedBy) return;
    var sortKey = Object.keys(state.sortedBy)[0];
    var direction = state.sortedBy[sortKey];
    setState(function (prev) {
      return _objectSpread({}, prev, {
        data: prev.data.sort(function (a, b) {
          return direction === "ascending" ? a[sortKey].localeCompare(b[sortKey]) : b[sortKey].localeCompare(a[sortKey]);
        })
      });
    });
  }, [state.sortedBy]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setState(function (prev) {
      return _objectSpread({}, prev, {
        data: search(state.data)
      });
    });
  }, [query]);

  var search = function search(data) {
    return data && data.filter(function (row) {
      return searchableColumns.some(function (column) {
        return row[column].toString().toLowerCase().indexOf(query.toLowerCase()) > -1;
      });
    });
  };

  var loadMore = function loadMore() {
    if (state.loading) return;
    setState(function (prev) {
      return _objectSpread({}, prev, {
        loading: true
      });
    });
    setState(function (prev) {
      return {
        data: [].concat(_toConsumableArray(prev.data), _toConsumableArray(pageData({
          data: data,
          page: prev.page + 1
        }))),
        loading: false,
        page: prev.page + 1
      };
    });
  };

  var toggleAdditionalData = function toggleAdditionalData(row) {
    setAdditionalData(function (prev) {
      return additionalData.includes(row.id) ? prev.filter(function (id) {
        return row.id !== id;
      }) : [].concat(_toConsumableArray(prev), [row.id]);
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TablePresentation, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_table_ui_SygefexText__WEBPACK_IMPORTED_MODULE_3__["default"], {
    placeholder: "Type here to filter results",
    value: query,
    onChange: function onChange(val) {
      return setQuery(val);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_table_DataTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
    loadMore: loadMore,
    items: state.data,
    renderHead: function renderHead() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RowStyled, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_table_tr__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: "No Inscription",
        sortedBy: state.sortedBy,
        sort: {
          key: "candRegistrationNumber",
          changer: setState
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_table_tr__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: "Serie",
        sortedBy: state.sortedBy,
        sort: {
          key: "specialtyCode",
          changer: setState
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_table_tr__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: "Prenom ",
        sortedBy: state.sortedBy,
        sort: {
          key: "cand1stName",
          changer: setState
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_table_tr__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: "Nom ",
        sortedBy: state.sortedBy,
        sort: {
          key: "cand2ndName",
          changer: setState
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_table_tr__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: "Autres Noms ",
        sortedBy: state.sortedBy,
        sort: {
          key: "cand3rdName",
          changer: setState
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_table_tr__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: "Sexe",
        sortedBy: state.sortedBy,
        sort: {
          key: "gender",
          changer: setState
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_table_tr__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: "A/I",
        sortedBy: state.sortedBy,
        sort: {
          key: "aptitude",
          changer: setState
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }));
    },
    renderRow: function renderRow(row) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderStyled, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        onClick: function onClick() {
          return toggleAdditionalData(row);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: {
          pathname: "/show/results/candResults",
          query: {
            id: row.id
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, row.candRegistrationNumber.substring(6)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        onClick: function onClick() {
          return toggleAdditionalData(row);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, row.specialtyCode), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        onClick: function onClick() {
          return toggleAdditionalData(row);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, row.cand1stName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        onClick: function onClick() {
          return toggleAdditionalData(row);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, row.cand2ndName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        onClick: function onClick() {
          return toggleAdditionalData(row);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, row.cand3rdName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        onClick: function onClick() {
          return toggleAdditionalData(row);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, row.gender), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        onClick: function onClick() {
          return toggleAdditionalData(row);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, row.aptitude));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DivisionList);

/***/ }),

/***/ "./src/components/utils/table/DataTable.jsx":
/*!**************************************************!*\
  !*** ./src/components/utils/table/DataTable.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\utils\\table\\DataTable.jsx";


var TableStyled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.table.withConfig({
  displayName: "DataTable__TableStyled",
  componentId: "sc-18tqx52-0"
})(["margin:0 auto;width:60%;box-sizing:border-box;box-shadow:", ";justify-items:center;border-radius:0.9rem;align-self:center;border:0;margin-bottom:2rem;border-collapse:collapse;"], function (props) {
  return props.theme.formBS2;
});
var TBodyStyled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.tbody.withConfig({
  displayName: "DataTable__TBodyStyled",
  componentId: "sc-18tqx52-1"
})([":hover{cursor:pointer;}border-left:0.1rem solid ", ";tr{font-size:1.4rem;:nth-child(even){background:", ";}:nth-child(odd){background:", ";}:last-child{border-bottom-right-radius:0.9rem;border-bottom:0.1rem solid ", ";border-bottom-left-radius:0.9rem;}td{border-collapse:collapse;padding-left:0.5rem;padding-right:0.5rem;text-align:left;border-top:0.1rem solid ", ";:not(:last-child){border-right:0.1rem solid ", ";}}}"], function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.warna;
}, function (props) {
  return props.theme.tableLightBlue;
}, function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.pureWhite;
});
var THeadStyled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.thead.withConfig({
  displayName: "DataTable__THeadStyled",
  componentId: "sc-18tqx52-2"
})(["padding:1rem 0;color:", ";width:100%;font-size:1.3rem;th{border-collapse:collapse;border-top:0.1rem solid ", ";border-right:0.1rem solid ", ";text-align:left;background:", ";padding:0.5rem;:not(:last-child){border-right:0.1rem solid ", ";}:last-child{border-top-right-radius:0.9rem;}:first-child{border-left:0.1rem solid ", ";border-top-left-radius:0.9rem;}}"], function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.darkRed;
}, function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.pureWhite;
});
var RecordStyled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.tr.withConfig({
  displayName: "DataTable__RecordStyled",
  componentId: "sc-18tqx52-3"
})(["border-collapse:collapse;:last-child{td:first-child{border-bottom-left-radius:0.9rem;}td:last-child{border-bottom-right-radius:0.9rem;}}"]);
var FigureTable = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.figure.withConfig({
  displayName: "DataTable__FigureTable",
  componentId: "sc-18tqx52-4"
})(["max-width:98%;overflow-x:scroll;"]); // @media (max-width: 25rem) {
//   table, caption, tbody, tr, th, td {
//     display: block;
//     text-align: left;
//   }
//   thead, th:empty, td:empty {
//     display: none;
//     visibility: hidden;
//   }
//   th[data-title]:before, td[data-title]:before {
//     content: attr(data-title) ": ";
//     display: inline-block;
//     width: 3.5em;
//   }
// }

var DataTable = function DataTable(_ref) {
  var items = _ref.items,
      renderHead = _ref.renderHead,
      renderRow = _ref.renderRow,
      loadMore = _ref.loadMore;
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var handleScroll = function handleScroll(e) {
    var cY = window.scrollY;
    var tbh = ref.current.offsetHeight;
    var thresh = 1000;
    if (tbh - cY - thresh < 0) loadMore();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.addEventListener("scroll", handleScroll);
    return function () {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FigureTable, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableStyled, {
    cellPadding: 0,
    cellSpacing: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(THeadStyled, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RecordStyled, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, renderHead())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TBodyStyled, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, items.map(function (row) {
    return renderRow(row);
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (DataTable);

/***/ }),

/***/ "./src/components/utils/table/Icons/index.jsx":
/*!****************************************************!*\
  !*** ./src/components/utils/table/Icons/index.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\utils\\table\\Icons\\index.jsx";


var Icon = function Icon(_ref) {
  var children = _ref.children,
      _ref$active = _ref.active,
      active = _ref$active === void 0 ? false : _ref$active,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 20 : _ref$size,
      onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    onClick: onClick,
    style: {
      height: size,
      width: size
    },
    xmlns: "http://www.w3.org/2000/svg",
    fill: active ? "black" : "white",
    viewBox: "0 0 24 24",
    stroke: active ? "blue" : "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./src/components/utils/table/Icons/sort/ascending/index.jsx":
/*!*******************************************************************!*\
  !*** ./src/components/utils/table/Icons/sort/ascending/index.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Icons */ "./src/components/utils/table/Icons/index.jsx");
var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\utils\\table\\Icons\\sort\\ascending\\index.jsx";



var AscendingIcon = function AscendingIcon(_ref) {
  var active = _ref.active,
      onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    active: active,
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AscendingIcon);

/***/ }),

/***/ "./src/components/utils/table/Icons/sort/descending/index.jsx":
/*!********************************************************************!*\
  !*** ./src/components/utils/table/Icons/sort/descending/index.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Icons */ "./src/components/utils/table/Icons/index.jsx");
var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\utils\\table\\Icons\\sort\\descending\\index.jsx";



var DescendingIcon = function DescendingIcon(_ref) {
  var active = _ref.active,
      onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    active: active,
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DescendingIcon);

/***/ }),

/***/ "./src/components/utils/table/tr/index.jsx":
/*!*************************************************!*\
  !*** ./src/components/utils/table/tr/index.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icons_sort_ascending__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icons/sort/ascending */ "./src/components/utils/table/Icons/sort/ascending/index.jsx");
/* harmony import */ var _Icons_sort_descending__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icons/sort/descending */ "./src/components/utils/table/Icons/sort/descending/index.jsx");
var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\utils\\table\\tr\\index.jsx";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var TitleStyled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.th.withConfig({
  displayName: "tr__TitleStyled",
  componentId: "wiphzg-0"
})(["display:grid;justify-items:center;"]);

var Tr = function Tr(_ref) {
  var label = _ref.label,
      sort = _ref.sort,
      sortedBy = _ref.sortedBy,
      sortField = _ref.sortField;

  var changeSortDirection = function changeSortDirection(direction) {
    sort.changer(function (prev) {
      return _objectSpread({}, prev, {
        sortedBy: _defineProperty({}, sort.key, direction)
      });
    });
  };

  var ColumnHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "tr__ColumnHeader",
    componentId: "wiphzg-1"
  })(["text-align:right;"]);
  var LabelHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "tr__LabelHeader",
    componentId: "wiphzg-2"
  })(["text-align:left;"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleStyled, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LabelHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, label, " "), sort ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColumnHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, sortedBy && sortedBy[sort.key] === "ascending" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons_sort_ascending__WEBPACK_IMPORTED_MODULE_2__["default"], {
    active: sortedBy && sortedBy[sort.key] === "ascending",
    onClick: function onClick() {
      return changeSortDirection("descending");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons_sort_descending__WEBPACK_IMPORTED_MODULE_3__["default"], {
    active: sortedBy && sortedBy[sort.key] === "descending",
    onClick: function onClick() {
      return changeSortDirection("ascending");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Tr);

/***/ }),

/***/ "./src/components/utils/table/ui/SygefexText.jsx":
/*!*******************************************************!*\
  !*** ./src/components/utils/table/ui/SygefexText.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\utils\\table\\ui\\SygefexText.jsx";


var StyledTextField = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "SygefexText__StyledTextField",
  componentId: "sc-13fwk0k-0"
})(["padding:0.5rem;border-radius:0.8rem;font-size:1.5rem;box-sizing:border-box;margin:1rem auto;border:0.2rem solid ", ";"], function (props) {
  return props.theme.grey;
});

var SygefexText = function SygefexText(_ref) {
  var value = _ref.value,
      _onChange = _ref.onChange,
      label = _ref.label,
      placeholder = _ref.placeholder;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTextField, {
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: function onChange(e) {
      return _onChange(e.target.value, e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SygefexText);

/***/ }),

/***/ 4:
/*!****************************************************!*\
  !*** multi ./pages/show/results/centerResults.jsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/show/results/centerResults.jsx */"./pages/show/results/centerResults.jsx");


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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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
//# sourceMappingURL=centerResults.js.map