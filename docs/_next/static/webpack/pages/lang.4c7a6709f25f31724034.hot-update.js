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
    name: 'zh',
    content: '中文'
  }, {
    name: 'en',
    content: 'English'
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
            lang: lang.name
          }
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: lang.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 4
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 41
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
        lineNumber: 39,
        columnNumber: 3
      }, this), links]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 3
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xhbmcvaW5kZXguanMiXSwibmFtZXMiOlsiTGFuZ3VhZ2VQYWdlIiwibGFuZ3MiLCJuYW1lIiwiY29udGVudCIsImxpbmtzIiwibWFwIiwibGFuZyIsInBhZGRpbmciLCJwYXRobmFtZSIsInF1ZXJ5IiwibWluSGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFJQTs7QUFFQSxTQUFTQSxZQUFULEdBQXdCO0FBQUE7O0FBRXZCLE1BQU1DLEtBQUssR0FBRyxDQUFDO0FBQ2RDLFFBQUksRUFBRSxJQURRO0FBRWRDLFdBQU8sRUFBRTtBQUZLLEdBQUQsRUFHWDtBQUNGRCxRQUFJLEVBQUUsSUFESjtBQUVGQyxXQUFPLEVBQUU7QUFGUCxHQUhXLENBQWQ7QUFRQSxNQUFNQyxLQUFLLEdBQUdILEtBQUssQ0FBQ0ksR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBVTtBQUNqQyx3QkFBUSxxRUFBQywyREFBRDtBQUFXLFdBQUssRUFBRTtBQUFDQyxlQUFPLEVBQUM7QUFBVCxPQUFsQjtBQUNXLGVBQVMsRUFBQyxRQURyQjtBQUFBLDZCQUM4QixxRUFBQyxnREFBRDtBQUNyQyxZQUFJLEVBQUU7QUFDTEMsa0JBQVEsRUFBRSxVQURMO0FBRUxDLGVBQUssRUFBRTtBQUFDSCxnQkFBSSxFQUFFQSxJQUFJLENBQUNKO0FBQVo7QUFGRixTQUQrQjtBQUFBLCtCQU1yQztBQUFBLG9CQUFJSSxJQUFJLENBQUNIO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5xQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRDlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUjtBQVNBLEdBVmEsQ0FBZDtBQVlBLHNCQUFPLHFFQUFDLHlEQUFEO0FBQ04sWUFBUSxNQURGO0FBRU4sYUFBUyxFQUFDLFFBRko7QUFHTixTQUFLLEVBQUU7QUFBQ08sZUFBUyxFQUFFLEdBQVo7QUFBaUJILGFBQU8sRUFBRTtBQUExQixLQUhEO0FBSU4sWUFBUSxNQUpGO0FBQUEsMkJBTU4scUVBQUMsMkRBQUQ7QUFBVyxXQUFLLEVBQUU7QUFBQ0EsZUFBTyxFQUFDO0FBQVQsT0FBbEI7QUFDVyxlQUFTLEVBQUMsUUFEckI7QUFBQSw4QkFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhBLEVBSUNILEtBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTk07QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBYUE7O0tBbkNRSixZO0FBcUNNQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sYW5nLjRjN2E2NzA5ZjI1ZjMxNzI0MDM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG5cdFNlZ21lbnQsXHJcblx0Q29udGFpbmVyLFxyXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmZ1bmN0aW9uIExhbmd1YWdlUGFnZSgpIHtcclxuXHJcblx0Y29uc3QgbGFuZ3MgPSBbe1xyXG5cdFx0bmFtZTogJ3poJyxcclxuXHRcdGNvbnRlbnQ6ICfkuK3mlocnXHJcblx0fSwge1xyXG5cdFx0bmFtZTogJ2VuJyxcclxuXHRcdGNvbnRlbnQ6ICdFbmdsaXNoJ1xyXG5cdH1dO1xyXG5cclxuXHRjb25zdCBsaW5rcyA9IGxhbmdzLm1hcCgobGFuZykgPT4ge1xyXG5cdFx0cmV0dXJuICg8Q29udGFpbmVyIHN0eWxlPXt7cGFkZGluZzoxMH19XHJcblx0XHQgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduPSdjZW50ZXInPjxMaW5rXHJcblx0XHRcdGhyZWY9e3tcclxuXHRcdFx0XHRwYXRobmFtZTogJy9jb250ZW50JyxcclxuXHRcdFx0XHRxdWVyeToge2xhbmc6IGxhbmcubmFtZX0sXHJcblx0XHRcdH19XHJcblx0XHQ+XHJcblx0XHRcdDxhPntsYW5nLmNvbnRlbnR9PC9hPlxyXG5cdFx0PC9MaW5rPjwvQ29udGFpbmVyPik7XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiA8U2VnbWVudFxyXG5cdFx0aW52ZXJ0ZWRcclxuXHRcdHRleHRBbGlnbj0nY2VudGVyJ1xyXG5cdFx0c3R5bGU9e3ttaW5IZWlnaHQ6IDcwMCwgcGFkZGluZzogJzFlbSAwZW0nfX1cclxuXHRcdHZlcnRpY2FsXHJcblx0PlxyXG5cdFx0PENvbnRhaW5lciBzdHlsZT17e3BhZGRpbmc6NTB9fVxyXG5cdFx0ICAgICAgICAgICB0ZXh0QWxpZ249J2NlbnRlcic+XHJcblxyXG5cdFx0PHA+Q2hvb3NpbmcgeW91ciBsYW5ndWFnZTwvcD5cclxuXHRcdHtsaW5rc31cclxuXHRcdDwvQ29udGFpbmVyPlxyXG5cdDwvU2VnbWVudD47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhbmd1YWdlUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==