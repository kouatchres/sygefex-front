webpackHotUpdate("static\\development\\pages\\creates\\newAttendance.js",{

/***/ "./src/components/attendance/CreateAttendance.jsx":
/*!********************************************************!*\
  !*** ./src/components/attendance/CreateAttendance.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _styles_StyledPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/StyledPage */ "./src/components/styles/StyledPage.jsx");
/* harmony import */ var _ErrorMessage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ErrorMessage.js */ "./src/components/ErrorMessage.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils_useForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useForm */ "./src/components/utils/useForm.jsx");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _utils_FormInputs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/FormInputs */ "./src/components/utils/FormInputs.jsx");
/* harmony import */ var _queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../queries&Mutations&Functions/Functions */ "./src/components/queries&Mutations&Functions/Functions.jsx");
/* harmony import */ var _queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../queries&Mutations&Functions/Mutations */ "./src/components/queries&Mutations&Functions/Mutations.jsx");
/* harmony import */ var _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../queries&Mutations&Functions/Queries */ "./src/components/queries&Mutations&Functions/Queries.jsx");
/* harmony import */ var _dccs_react_formik_mui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @dccs/react-formik-mui */ "./node_modules/@dccs/react-formik-mui/lib/index.js");
/* harmony import */ var _dccs_react_formik_mui__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_dccs_react_formik_mui__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\attendance\\CreateAttendance.jsx";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















var InputGroup = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "CreateAttendance__InputGroup",
  componentId: "y4a8hp-0"
})(["display:flex;flex-direction:column;margin:0 1rem;"]);
var WholeControls = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "CreateAttendance__WholeControls",
  componentId: "y4a8hp-1"
})(["display:flex;flex-direction:Column;"]);
var RadioControls = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "CreateAttendance__RadioControls",
  componentId: "y4a8hp-2"
})(["display:flex;flex-direction:column;"]);
var RadioButtons = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "CreateAttendance__RadioButtons",
  componentId: "y4a8hp-3"
})(["margin-top:2rem;display:flex;flex-direction:column;padding-left:1rem;label{font-size:1.3rem;}align-items:center;.RadioSet{FormikRadio{font-size:1.5rem}padding:0 1rem;display:flex;flex-direction:row;label{font-size:1.3rem;}}"]);
var validationSchema = yup__WEBPACK_IMPORTED_MODULE_7__["object"]().shape({
  collected: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required("Le(a) candidat(e) a-t-il(elle) pris le materiel de composition Obligatoire"),
  handin: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required("Le(s) candidat(e) a-t-il(elle) remis sa feuille de comosition Obligatoire")
});

var CreateAttendance = function CreateAttendance() {
  var _useForm = Object(_utils_useForm__WEBPACK_IMPORTED_MODULE_6__["default"])({
    centerExamSessionSpecialtyID: "",
    centerNumber: "100000",
    examID: "",
    sessionID: "",
    educTypeID: "",
    specialtyID: "",
    subjectSpecialty: ""
  }),
      _useForm2 = _slicedToArray(_useForm, 3),
      state = _useForm2[0],
      setState = _useForm2[1],
      handleReactSelectChange = _useForm2[2];

  var initialValues = {
    centerNumber: "100000",
    collected: "",
    handin: "",
    subjectSpecialty: "",
    candExamSecretCode: ""
  }; // const getObjectFromID = (suppliedID) => {
  //   const theObject = {
  //     id: `${suppliedID}`,
  //   };
  //   return theObject;
  // };

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
      loadingEducType = _useQuery.loading,
      errEducType = _useQuery.error;

  var getEducationTypes = dataEducType && dataEducType.educationTypes;
  var refinedEducTypes = getEducationTypes && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_10__["removeTypename"])(getEducationTypes);
  var getEducTypeOptions = refinedEducTypes && refinedEducTypes.map(function (item) {
    return {
      value: item.id,
      label: item.educationTypeName
    };
  });

  var _useQuery2 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_12__["getAllExamsQuery"]),
      dataExams = _useQuery2.data,
      loadingExams = _useQuery2.loading,
      errExams = _useQuery2.error;

  var getExams = dataExams && dataExams.exams;
  var removeExamName = getExams && getExams.map(function (_ref) {
    var examName = _ref.examName,
        others = _objectWithoutProperties(_ref, ["examName"]);

    return others;
  });
  var refinedExams = getExams && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_10__["removeTypename"])(removeExamName);

  var getExamName = refinedExams && _objectSpread({}, Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_10__["getSelectedObject"])(refinedExams, state.examID));

  var getExamsOptions = getExams && getExams.map(function (item) {
    return {
      value: item.id,
      label: item.examName
    };
  });
  console.log(getExamName);

  var _useQuery3 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_12__["getAllSessionsQuery"]),
      dataSession = _useQuery3.data,
      loadingSession = _useQuery3.loading,
      errSession = _useQuery3.error;

  var getSessions = dataSession && dataSession.sessions;
  var refinedSessions = getSessions && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_10__["removeTypename"])(getSessions);

  var getSessionName = refinedSessions && _objectSpread({}, Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_10__["getSelectedObject"])(refinedSessions, state.sessionID));

  var getSessionsOptions = refinedSessions && refinedSessions.map(function (item) {
    return {
      value: item.id,
      label: item.sessionName
    };
  });

  var _useQuery4 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_12__["getExamSessionQuery"], {
    skip: !state.examID || !state.sessionID,
    variables: {
      exam: getExamName,
      session: getSessionName
    }
  }),
      dataExamSessions = _useQuery4.data,
      errExamSessions = _useQuery4.error,
      loadingExamSession = _useQuery4.loading;

  console.log(dataExamSessions);
  var getExamSessions = dataExamSessions && dataExamSessions.examSessions;
  var refinedES = getExamSessions && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_10__["removeTypename"])(getExamSessions);
  var reducedES = refinedES && refinedES[0];
  console.log(reducedES);

  var _useQuery5 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_12__["getSingleCenterQuery"], {
    variables: {
      centerNumber: state.centerNumber
    }
  }),
      dataCenter = _useQuery5.data,
      errCenter = _useQuery5.error,
      loadingCenter = _useQuery5.loading;

  var _dataCenter = _objectSpread({}, dataCenter),
      centerByNumber = _dataCenter.centerByNumber;

  var newCenterByNumber = Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_10__["removeTypename"])(centerByNumber);
  console.log(newCenterByNumber);

  var _useQuery6 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_12__["getSingleCenterExamSessionQuery"], {
    skip: !reducedES || !newCenterByNumber,
    variables: {
      examSession: reducedES && reducedES,
      center: newCenterByNumber && newCenterByNumber
    }
  }),
      dataCES = _useQuery6.data,
      errCES = _useQuery6.error,
      loadingCES = _useQuery6.loading;

  console.log(dataCES);
  var getCenterExamSessionsByCode = dataCES && dataCES.centerExamSessionsByCode;
  console.log(getCenterExamSessionsByCode);
  var refinedCenterExamSessions = getCenterExamSessionsByCode && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_10__["removeTypename"])(getCenterExamSessionsByCode); // transform the array into a single object

  var getCESID = refinedCenterExamSessions && refinedCenterExamSessions[0];
  console.log(getCESID);

  var _useQuery7 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_12__["getAllSpecialtiesOfACenterExamSessionQuery"], {
    variables: getCESID
  }),
      dataSpecialtyCES = _useQuery7.data,
      loadingSpecialtyCES = _useQuery7.loading,
      errSpecialtyCES = _useQuery7.error;

  console.log(dataSpecialtyCES);
  var getCenterExamSession = dataSpecialtyCES && dataSpecialtyCES.centerExamSession;

  var _getCenterExamSession = _objectSpread({}, getCenterExamSession),
      centerExamSessionSpecialty = _getCenterExamSession.centerExamSessionSpecialty;

  console.log({
    centerExamSessionSpecialty: centerExamSessionSpecialty
  });
  var newSpecialty = centerExamSessionSpecialty && centerExamSessionSpecialty.map(function (item) {
    return item;
  });
  var refinedCESS = newSpecialty && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_10__["removeTypename"])(newSpecialty);
  console.log({
    refinedCESS: refinedCESS
  });
  var getCESSOptions = refinedCESS && refinedCESS.map(function (item) {
    return {
      value: item.id.concat("/", item.specialty.id),
      label: item.specialty.specialtyName
    };
  });
  console.log({
    state: state
  });
  console.log({
    getCESID: getCESID
  });
  console.log(state.centerExamSessionSpecialtyID);
  var getCESSSubjIDs = state.centerExamSessionSpecialtyID.split("/");
  console.log(getCESSSubjIDs);

  var _useQuery8 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_12__["getRegisteredCandidatesPerSpecialty"], {
    skip: !getCESSSubjIDs[0],
    variables: {
      id: getCESSSubjIDs[0]
    }
  }),
      dataRegistration = _useQuery8.data,
      loadingReg = _useQuery8.loading,
      errReg = _useQuery8.error;

  console.log({
    dataRegistration: dataRegistration
  });

  var _dataRegistration = _objectSpread({}, dataRegistration),
      CESS = _dataRegistration.centerExamSessionSpecialty;

  var _CESS = _objectSpread({}, CESS),
      registration = _CESS.registration;

  var getCandOptions = registration && registration.map(function (item) {
    return {
      value: item.candExamSecretCode,
      label: item.candidate.cand1stName.concat("", item.candidate.cand2ndName, "", item.candRegistrationNumber)
    };
  });
  console.log({
    registration: registration
  });
  console.log({
    getCandOptions: getCandOptions
  });

  var _useQuery9 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_12__["getAllSubjectSpecialtiesOfASpecialtyQuery"], {
    skip: !getCESSSubjIDs[1],
    variables: {
      id: getCESSSubjIDs[1]
    }
  }),
      dataSubjSpecialty = _useQuery9.data,
      loadingSubjSpecialty = _useQuery9.loading,
      errSubjSpecialty = _useQuery9.error;

  console.log(dataSubjSpecialty);
  var getSubjSpecialty = dataSubjSpecialty && dataSubjSpecialty.specialty;

  var _getSubjSpecialty = _objectSpread({}, getSubjSpecialty),
      subjectSpecialty = _getSubjSpecialty.subjectSpecialty;

  console.log(subjectSpecialty);
  var refinedSubjectSpecialty = subjectSpecialty && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_10__["removeTypename"])(subjectSpecialty);
  var getSubjectSpecialtyOptions = refinedSubjectSpecialty && refinedSubjectSpecialty.map(function (item) {
    return {
      id: item.id,
      value: item.id,
      label: item.subject.subjectName
    };
  });

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_11__["createAttendanceMutation"]),
      _useMutation2 = _slicedToArray(_useMutation, 2),
      createAttendance = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      loading = _useMutation2$.loading,
      error = _useMutation2$.error;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_8__["Formik"], {
    method: "POST",
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, _ref2) {
        var setSubmitting, resetForm, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setSubmitting = _ref2.setSubmitting, resetForm = _ref2.resetForm;
                _context.next = 3;
                return createAttendance({
                  variables: _objectSpread({}, values, {
                    candExamSecretCode: values.candExamSecretCode.value,
                    subjectSpecialty: refinedSubjectSpecialty && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_10__["getObjectFromID"])(values.subjectSpecialty.value)
                  })
                });

              case 3:
                res = _context.sent;
                setTimeout(function () {
                  console.log(JSON.stringify(values, null, 2));
                  console.log(res);
                  resetForm(true);
                  setSubmitting(false);
                }, 400);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref3.apply(this, arguments);
      };
    }(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  }, function (_ref4) {
    var setFieldValue = _ref4.setFieldValue,
        isSubmitting = _ref4.isSubmitting,
        isValid = _ref4.isValid,
        dirty = _ref4.dirty;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_StyledPage__WEBPACK_IMPORTED_MODULE_3__["MinimStyledPage"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337
      },
      __self: this
    }, "Pr\xE9sence des candidats a l'Ecrit"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      error: error || errCenter || errExams || errSession || errExamSessions || errSpecialtyCES || errEducType || errSubjSpecialty || errReg,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_9__["StyledForm"], {
      disabled: isSubmitting || loadingExams || loadingSession || loadingCES || loadingExamSession || loading || loadingSpecialtyCES || loadingEducType || loadingSubjSpecialty || loadingCenter || loadingReg,
      "aria-busy": isSubmitting || loadingExams || loadingSession || loadingCES || loadingExamSession || loading || loadingSpecialtyCES || loadingEducType || loadingSubjSpecialty || loadingCenter || loadingReg,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_8__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WholeControls, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputGroup, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_9__["SygexInput"], {
      value: centerByNumber && centerByNumber.centerCode,
      name: "centerName",
      type: "text",
      label: " Nom du centre",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_9__["SygexInput"], {
      onChange: handleChange,
      name: "centerNumber",
      value: state.centerNumber || "",
      type: "number",
      label: "Num\xE9ro du centre",
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 389
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_9__["SygefexSelect"], {
      onChange: handleReactSelectChange,
      name: "educTypeID",
      options: getEducTypeOptions,
      placeholder: "Type d'enseignement",
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_9__["SygefexSelect"], {
      onChange: handleReactSelectChange,
      name: "sessionID",
      options: getSessionsOptions,
      placeholder: "La Session",
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 405
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_9__["SygefexSelect"], {
      onChange: handleReactSelectChange,
      name: "examID",
      options: getExamsOptions,
      placeholder: "L'Examen",
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_9__["SygefexSelect"], {
      onChange: handleReactSelectChange,
      name: "centerExamSessionSpecialtyID",
      options: getCESSOptions,
      placeholder: "Les Spécialités",
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_9__["SygefexSelect"], {
      onChange: function onChange(value) {
        return setFieldValue("subjectSpecialty", value);
      },
      name: "subjectSpecialty",
      placeholder: "les Matières",
      options: getSubjectSpecialtyOptions,
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 426
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_9__["SygefexSelect"], {
      onChange: function onChange(value) {
        return setFieldValue("candExamSecretCode", value);
      },
      name: "candExamSecretCode",
      options: getCandOptions,
      placeholder: "Les candidats par Spécialité",
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 435
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RadioControls, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 445
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RadioButtons, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 446
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["FormLabel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 447
      },
      __self: this
    }, "Collecte Des Materiels"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["RadioGroup"], {
      name: "collected",
      className: "RadioSet",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 448
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_dccs_react_formik_mui__WEBPACK_IMPORTED_MODULE_13__["FormikRadio"], {
      label: "Oui",
      name: "collected",
      value: "Oui",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 449
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_dccs_react_formik_mui__WEBPACK_IMPORTED_MODULE_13__["FormikRadio"], {
      label: "Non",
      name: "collected",
      value: "Non",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 454
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RadioButtons, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 461
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["FormLabel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 462
      },
      __self: this
    }, "Remise Des Copies"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["RadioGroup"], {
      name: "handin",
      className: "RadioSet",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 463
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_dccs_react_formik_mui__WEBPACK_IMPORTED_MODULE_13__["FormikRadio"], {
      label: "Oui",
      name: "handin",
      value: "Oui",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 464
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_dccs_react_formik_mui__WEBPACK_IMPORTED_MODULE_13__["FormikRadio"], {
      label: "Non",
      name: "handin",
      value: "Non",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 465
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 471
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_9__["ButtonStyled"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 472
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_9__["StyledButton"], {
      type: "submit",
      disabled: !(dirty && isValid) || isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 473
      },
      __self: this
    }, "Valid", isSubmitting ? "ation en cours" : "er")))))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (CreateAttendance);

/***/ })

})
//# sourceMappingURL=newAttendance.js.d29b4180df77c3a4ab2a.hot-update.js.map