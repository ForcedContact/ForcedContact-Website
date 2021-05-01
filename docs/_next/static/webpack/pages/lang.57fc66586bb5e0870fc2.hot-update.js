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
    n: 'zh',
    c: '中文'
  }, {
    n: 'en',
    c: 'English'
  }];
  var links = langs.map(function (lang) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      style: {
        padding: 10
      },
      textAlign: "center",
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
          lineNumber: 27,
          columnNumber: 4
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 41
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
    inverted: true,
    textAlign: "center",
    style: {
      minHeight: 700,
      padding: '1em 0em'
    },
    vertical: true,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      style: {
        padding: 50
      },
      textAlign: "center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Choosing your language"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 3
      }, this), links]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 3
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xhbmcvaW5kZXguanMiXSwibmFtZXMiOlsiTGFuZ3VhZ2VQYWdlIiwibGFuZ3MiLCJuIiwiYyIsImxpbmtzIiwibWFwIiwibGFuZyIsInBhZGRpbmciLCJwYXRobmFtZSIsInF1ZXJ5IiwibWluSGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFLQTs7QUFFQSxTQUFTQSxZQUFULEdBQXdCO0FBQUE7O0FBRXZCLE1BQU1DLEtBQUssR0FBRyxDQUFDO0FBQ2RDLEtBQUMsRUFBRSxJQURXO0FBRWRDLEtBQUMsRUFBRTtBQUZXLEdBQUQsRUFHWDtBQUNGRCxLQUFDLEVBQUUsSUFERDtBQUVGQyxLQUFDLEVBQUU7QUFGRCxHQUhXLENBQWQ7QUFRQSxNQUFNQyxLQUFLLEdBQUdILEtBQUssQ0FBQ0ksR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBVTtBQUNqQyx3QkFBUSxxRUFBQywyREFBRDtBQUFXLFdBQUssRUFBRTtBQUFDQyxlQUFPLEVBQUM7QUFBVCxPQUFsQjtBQUNXLGVBQVMsRUFBQyxRQURyQjtBQUFBLDZCQUM4QixxRUFBQyxnREFBRDtBQUNyQyxZQUFJLEVBQUU7QUFDTEMsa0JBQVEsRUFBRSxVQURMO0FBRUxDLGVBQUssRUFBRTtBQUFDSCxnQkFBSSxFQUFFQSxJQUFJLENBQUNKO0FBQVo7QUFGRixTQUQrQjtBQUFBLCtCQU1yQztBQUFBLG9CQUFJSSxJQUFJLENBQUNIO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5xQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRDlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUjtBQVNBLEdBVmEsQ0FBZDtBQVlBLHNCQUFPLHFFQUFDLHlEQUFEO0FBQ04sWUFBUSxNQURGO0FBRU4sYUFBUyxFQUFDLFFBRko7QUFHTixTQUFLLEVBQUU7QUFBQ08sZUFBUyxFQUFFLEdBQVo7QUFBaUJILGFBQU8sRUFBRTtBQUExQixLQUhEO0FBSU4sWUFBUSxNQUpGO0FBQUEsMkJBTU4scUVBQUMsMkRBQUQ7QUFBVyxXQUFLLEVBQUU7QUFBQ0EsZUFBTyxFQUFDO0FBQVQsT0FBbEI7QUFDVyxlQUFTLEVBQUMsUUFEckI7QUFBQSw4QkFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhBLEVBSUNILEtBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTk07QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBYUE7O0tBbkNRSixZO0FBcUNNQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sYW5nLjU3ZmM2NjU4NmJiNWUwODcwZmMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG5cdEdyaWQsXHJcblx0U2VnbWVudCxcclxuXHRDb250YWluZXIsXHJcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZnVuY3Rpb24gTGFuZ3VhZ2VQYWdlKCkge1xyXG5cclxuXHRjb25zdCBsYW5ncyA9IFt7XHJcblx0XHRuOiAnemgnLFxyXG5cdFx0YzogJ+S4reaWhydcclxuXHR9LCB7XHJcblx0XHRuOiAnZW4nLFxyXG5cdFx0YzogJ0VuZ2xpc2gnXHJcblx0fV07XHJcblxyXG5cdGNvbnN0IGxpbmtzID0gbGFuZ3MubWFwKChsYW5nKSA9PiB7XHJcblx0XHRyZXR1cm4gKDxDb250YWluZXIgc3R5bGU9e3twYWRkaW5nOjEwfX1cclxuXHRcdCAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249J2NlbnRlcic+PExpbmtcclxuXHRcdFx0aHJlZj17e1xyXG5cdFx0XHRcdHBhdGhuYW1lOiAnL2NvbnRlbnQnLFxyXG5cdFx0XHRcdHF1ZXJ5OiB7bGFuZzogbGFuZy5ufSxcclxuXHRcdFx0fX1cclxuXHRcdD5cclxuXHRcdFx0PGE+e2xhbmcuY308L2E+XHJcblx0XHQ8L0xpbms+PC9Db250YWluZXI+KTtcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIDxTZWdtZW50XHJcblx0XHRpbnZlcnRlZFxyXG5cdFx0dGV4dEFsaWduPSdjZW50ZXInXHJcblx0XHRzdHlsZT17e21pbkhlaWdodDogNzAwLCBwYWRkaW5nOiAnMWVtIDBlbSd9fVxyXG5cdFx0dmVydGljYWxcclxuXHQ+XHJcblx0XHQ8Q29udGFpbmVyIHN0eWxlPXt7cGFkZGluZzo1MH19XHJcblx0XHQgICAgICAgICAgIHRleHRBbGlnbj0nY2VudGVyJz5cclxuXHJcblx0XHQ8cD5DaG9vc2luZyB5b3VyIGxhbmd1YWdlPC9wPlxyXG5cdFx0e2xpbmtzfVxyXG5cdFx0PC9Db250YWluZXI+XHJcblx0PC9TZWdtZW50PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFuZ3VhZ2VQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9