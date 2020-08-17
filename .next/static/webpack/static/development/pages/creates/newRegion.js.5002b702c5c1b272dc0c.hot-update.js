webpackHotUpdate("static\\development\\pages\\creates\\newRegion.js",{

/***/ "./src/components/region/TableContainer.jsx":
/*!**************************************************!*\
  !*** ./src/components/region/TableContainer.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_FormInputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/FormInputs */ "./src/components/utils/FormInputs.jsx");
/* harmony import */ var _Filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Filters */ "./src/components/region/Filters.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\region\\TableContainer.jsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var TableStyled = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].table.withConfig({
  displayName: "TableContainer__TableStyled",
  componentId: "oob6bm-0"
})(["margin:1rem auto;justify-items:center;position:sticky;border-radius:0.6rem;align-self:center;border:0.15rem solid ", ";box-shadow:", ";"], function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.formBS2;
});
var TableHeadStyled = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].thead.withConfig({
  displayName: "TableContainer__TableHeadStyled",
  componentId: "oob6bm-1"
})(["color:", ";background-color:", ";input{border-radius:0.5rem;width:11rem;background:", ";}select{border-radius:0.5rem;width:auto;max-width:20rem;background:", ";}tr:first-child{th{:last-child{border-top-right-radius:0.6rem;}:first-child{border-top-left-radius:0.6rem;}}}tr:last-child{th{border-top:0.01rem solid ", ";border-right:0.01rem solid ", ";}}tr{th{border-right:0.02rem solid ", ";}}"], function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.darkRed;
}, function (props) {
  return props.theme.warna;
}, function (props) {
  return props.theme.warna;
}, function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.pureWhite;
});
var THeadStyled = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].th.withConfig({
  displayName: "TableContainer__THeadStyled",
  componentId: "oob6bm-2"
})(["font-size:1.5rem;position:sticky;top:5rem;"]);
var TBodyStyled = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].tbody.withConfig({
  displayName: "TableContainer__TBodyStyled",
  componentId: "oob6bm-3"
})(["tr{font-size:1.4rem;}tr:nth-child(even){background:", ";border-bottom-left-radius:2rem;}tr:nth-child(odd){background:", ";border-bottom-left-radius:2rem;}tr:last-child{border-bottom:0.02rem solid ", ";}tr{td{padding-left:0.5rem;padding-right:0.5rem;text-align:left;border-top:0.02rem solid ", ";border-right:0.02rem solid ", ";}}tr{td:first-child{border-left:0.02rem solid ", ";}}"], function (props) {
  return props.theme.warna;
}, function (props) {
  return props.theme.tableLightBlue;
}, function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.pureWhite;
});
var TDStyled = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].td.withConfig({
  displayName: "TableContainer__TDStyled",
  componentId: "oob6bm-4"
})([""]);
var RecordStyled = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].tr.withConfig({
  displayName: "TableContainer__RecordStyled",
  componentId: "oob6bm-5"
})([":last-child{td:first-child{border-bottom-left-radius:0.6rem;}td:last-child{border-bottom-right-radius:0.6rem;}}"]);
var PageNumbersStyled = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "TableContainer__PageNumbersStyled",
  componentId: "oob6bm-6"
})(["font-size:1.3rem;justify-items:center;align-items:center;"]);
var LeftButtons = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "TableContainer__LeftButtons",
  componentId: "oob6bm-7"
})(["display:grid;grid-template-columns:repeat(2,1fr);grid-gap:0.5rem;"]);
var PaginationSection = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "TableContainer__PaginationSection",
  componentId: "oob6bm-8"
})(["justify-content:center;display:flex;margin:1rem 0;"]);
var Controls = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "TableContainer__Controls",
  componentId: "oob6bm-9"
})(["display:grid;grid-template-columns:2fr 1fr 2fr;grid-gap:0.5rem;"]);
var PaginationComponents = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "TableContainer__PaginationComponents",
  componentId: "oob6bm-10"
})(["display:grid;width:50vw;border:0.2rem solid ", ";box-shadow:", ";font-size:1.3rem;grid-gap:0.5rem;padding:0.4rem;align-self:center;border-radius:0.5rem;color:", ";grid-template-columns:0.5fr 1.5fr 0.5fr;background-color:", ";button{border:solid 0.1rem ", ";color:", ";background-color:", ";}input,select{border-radius:0.5rem;width:10rem;background:", ";}"], function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.formBS2;
}, function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.darkRed;
}, function (props) {
  return props.theme.gray;
}, function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.tableLightBlue;
}, function (props) {
  return props.theme.warna;
});
var Styles = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "TableContainer__Styles",
  componentId: "oob6bm-11"
})(["display:flex;justify-content:center;"]);

var TableContainer = function TableContainer(_ref) {
  var columns = _ref.columns,
      data = _ref.data;

  var _useTable = Object(react_table__WEBPACK_IMPORTED_MODULE_1__["useTable"])({
    columns: columns,
    data: data,
    defaultColumn: {
      Filter: _Filters__WEBPACK_IMPORTED_MODULE_3__["DefaultColumnFilter"]
    },
    initialState: {
      pageIndex: 0,
      pageSize: 20
    }
  }, react_table__WEBPACK_IMPORTED_MODULE_1__["useFilters"], react_table__WEBPACK_IMPORTED_MODULE_1__["useSortBy"], react_table__WEBPACK_IMPORTED_MODULE_1__["useExpanded"], react_table__WEBPACK_IMPORTED_MODULE_1__["usePagination"]),
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      headerGroups = _useTable.headerGroups,
      page = _useTable.page,
      prepareRow = _useTable.prepareRow,
      canPreviousPage = _useTable.canPreviousPage,
      canNextPage = _useTable.canNextPage,
      pageOptions = _useTable.pageOptions,
      pageCount = _useTable.pageCount,
      gotoPage = _useTable.gotoPage,
      nextPage = _useTable.nextPage,
      previousPage = _useTable.previousPage,
      setPageSize = _useTable.setPageSize,
      _useTable$state = _useTable.state,
      pageIndex = _useTable$state.pageIndex,
      pageSize = _useTable$state.pageSize;

  var generateSortingIndicator = function generateSortingIndicator(column) {
    return column.isSorted ? column.isSortedDesc ? " 🔽" : " 🔼" : "";
  };

  var onChangeInSelect = function onChangeInSelect(event) {
    setPageSize(Number(event.target.value));
  };

  var onChangeInInput = function onChangeInInput(event) {
    var page = event.target.value ? Number(event.target.value) - 1 : 0;
    gotoPage(page);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Styles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableStyled, _extends({
    bordered: true,
    hover: true
  }, getTableProps(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableHeadStyled, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, headerGroups.map(function (headerGroup) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RecordStyled, _extends({}, headerGroup.getHeaderGroupProps(), {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      },
      __self: this
    }), headerGroup.headers.map(function (column) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(THeadStyled, _extends({}, column.getHeaderProps(), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, column.getSortByToggleProps(), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }), column.render("Header"), generateSortingIndicator(column)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Filters__WEBPACK_IMPORTED_MODULE_3__["Filters"], {
        column: column,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }));
    }));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TBodyStyled, _extends({}, getTableBodyProps(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }), page.map(function (row) {
    prepareRow(row);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RecordStyled, {
      key: row.getRowProps().key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      },
      __self: this
    }, row.cells.map(function (cell) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TDStyled, _extends({}, cell.getCellProps(), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }), cell.render("Cell"));
    }));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (TableContainer);

/***/ })

})
//# sourceMappingURL=newRegion.js.5002b702c5c1b272dc0c.hot-update.js.map