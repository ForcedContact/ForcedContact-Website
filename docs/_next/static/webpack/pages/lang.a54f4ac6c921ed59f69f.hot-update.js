webpackHotUpdate_N_E("pages/lang",{

/***/ "./src/pages/lang/index.js":
/*!*********************************!*\
  !*** ./src/pages/lang/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\GithubProject\\ForcedContact-Website\\src\\pages\\lang\\index.js";




function LanguagePage() {
  var _this = this;

  var langs = [{
    n: 'zhong',
    c: 'zh'
  }, {
    n: 'ying',
    c: 'en'
  }];
  var links = langs.map(function (lang) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: {
          pathname: '/content',
          query: {
            lang: lang.n
          }
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: lang.c
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 4
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
    inverted: true,
    textAlign: "center",
    style: {
      minHeight: 700,
      padding: '1em 0em',
      marginTop: '4em'
    },
    vertical: true,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      container: true,
      stackable: true,
      verticalAlign: "middle",
      children: links
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 3
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, this);
}

_c = LanguagePage;
/* harmony default export */ __webpack_exports__["default"] = (LanguagePage);

var _c;

$RefreshReg$(_c, "LanguagePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xhbmcvaW5kZXguanMiXSwibmFtZXMiOlsiTGFuZ3VhZ2VQYWdlIiwibGFuZ3MiLCJuIiwiYyIsImxpbmtzIiwibWFwIiwibGFuZyIsInBhdGhuYW1lIiwicXVlcnkiLCJtaW5IZWlnaHQiLCJwYWRkaW5nIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFJQTs7QUFFQSxTQUFTQSxZQUFULEdBQXdCO0FBQUE7O0FBRXZCLE1BQU1DLEtBQUssR0FBRyxDQUFDO0FBQ2RDLEtBQUMsRUFBRSxPQURXO0FBRWRDLEtBQUMsRUFBRTtBQUZXLEdBQUQsRUFHWDtBQUNGRCxLQUFDLEVBQUUsTUFERDtBQUVGQyxLQUFDLEVBQUU7QUFGRCxHQUhXLENBQWQ7QUFRQSxNQUFNQyxLQUFLLEdBQUdILEtBQUssQ0FBQ0ksR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBVTtBQUNqQyx3QkFBUSxxRUFBQyxzREFBRCxDQUFNLEdBQU47QUFBQSw2QkFBVSxxRUFBQyxnREFBRDtBQUNqQixZQUFJLEVBQUU7QUFDTEMsa0JBQVEsRUFBRSxVQURMO0FBRUxDLGVBQUssRUFBRTtBQUFDRixnQkFBSSxFQUFFQSxJQUFJLENBQUNKO0FBQVo7QUFGRixTQURXO0FBQUEsK0JBTWpCO0FBQUEsb0JBQUlJLElBQUksQ0FBQ0g7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTmlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVI7QUFRQSxHQVRhLENBQWQ7QUFXQSxzQkFBTyxxRUFBQyx5REFBRDtBQUNOLFlBQVEsTUFERjtBQUVOLGFBQVMsRUFBQyxRQUZKO0FBR04sU0FBSyxFQUFFO0FBQUNNLGVBQVMsRUFBRSxHQUFaO0FBQWlCQyxhQUFPLEVBQUUsU0FBMUI7QUFBcUNDLGVBQVMsRUFBQztBQUEvQyxLQUhEO0FBSU4sWUFBUSxNQUpGO0FBQUEsMkJBUU4scUVBQUMsc0RBQUQ7QUFBTSxlQUFTLE1BQWY7QUFBZ0IsZUFBUyxNQUF6QjtBQUEwQixtQkFBYSxFQUFDLFFBQXhDO0FBQUEsZ0JBQ0VQO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJNO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQVlBOztLQWpDUUosWTtBQW1DTUEsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGFuZy5hNTRmNGFjNmM5MjFlZDU5ZjY5Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuXHRHcmlkLFxyXG5cdFNlZ21lbnQsXHJcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZnVuY3Rpb24gTGFuZ3VhZ2VQYWdlKCkge1xyXG5cclxuXHRjb25zdCBsYW5ncyA9IFt7XHJcblx0XHRuOiAnemhvbmcnLFxyXG5cdFx0YzogJ3poJ1xyXG5cdH0sIHtcclxuXHRcdG46ICd5aW5nJyxcclxuXHRcdGM6ICdlbidcclxuXHR9XTtcclxuXHJcblx0Y29uc3QgbGlua3MgPSBsYW5ncy5tYXAoKGxhbmcpID0+IHtcclxuXHRcdHJldHVybiAoPEdyaWQuUm93PjxMaW5rXHJcblx0XHRcdGhyZWY9e3tcclxuXHRcdFx0XHRwYXRobmFtZTogJy9jb250ZW50JyxcclxuXHRcdFx0XHRxdWVyeToge2xhbmc6IGxhbmcubn0sXHJcblx0XHRcdH19XHJcblx0XHQ+XHJcblx0XHRcdDxhPntsYW5nLmN9PC9hPlxyXG5cdFx0PC9MaW5rPjwvR3JpZC5Sb3c+KTtcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIDxTZWdtZW50XHJcblx0XHRpbnZlcnRlZFxyXG5cdFx0dGV4dEFsaWduPSdjZW50ZXInXHJcblx0XHRzdHlsZT17e21pbkhlaWdodDogNzAwLCBwYWRkaW5nOiAnMWVtIDBlbScsIG1hcmdpblRvcDonNGVtJ319XHJcblx0XHR2ZXJ0aWNhbFxyXG5cdD5cclxuXHRcdHsvKjxTZWdtZW50IHN0eWxlPXt7cGFkZGluZzoyMCwgYmFja2dyb3VuZDondHJhbnNwYXJlbnQnfX0+Ki99XHJcblx0XHR7Lyo8L1NlZ21lbnQ+Ki99XHJcblx0XHQ8R3JpZCBjb250YWluZXIgc3RhY2thYmxlIHZlcnRpY2FsQWxpZ249J21pZGRsZSc+XHJcblx0XHRcdHtsaW5rc31cclxuXHRcdDwvR3JpZD5cclxuXHQ8L1NlZ21lbnQ+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYW5ndWFnZVBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=