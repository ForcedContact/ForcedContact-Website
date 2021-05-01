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
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Grid.Row, {
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
      padding: '1em 0em'
    },
    vertical: true,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Grid, {
      container: true,
      stackable: true,
      verticalAlign: "middle",
      children: links
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xhbmcvaW5kZXguanMiXSwibmFtZXMiOlsiTGFuZ3VhZ2VQYWdlIiwibGFuZ3MiLCJuIiwiYyIsImxpbmtzIiwibWFwIiwibGFuZyIsInBhdGhuYW1lIiwicXVlcnkiLCJtaW5IZWlnaHQiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFJQTs7QUFFQSxTQUFTQSxZQUFULEdBQXdCO0FBQUE7O0FBRXZCLE1BQU1DLEtBQUssR0FBRyxDQUFDO0FBQ2RDLEtBQUMsRUFBRSxPQURXO0FBRWRDLEtBQUMsRUFBRTtBQUZXLEdBQUQsRUFHWDtBQUNGRCxLQUFDLEVBQUUsTUFERDtBQUVGQyxLQUFDLEVBQUU7QUFGRCxHQUhXLENBQWQ7QUFRQSxNQUFNQyxLQUFLLEdBQUdILEtBQUssQ0FBQ0ksR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBVTtBQUNqQyx3QkFBUSxxRUFBQyxJQUFELENBQU0sR0FBTjtBQUFBLDZCQUFVLHFFQUFDLGdEQUFEO0FBQ2pCLFlBQUksRUFBRTtBQUNMQyxrQkFBUSxFQUFFLFVBREw7QUFFTEMsZUFBSyxFQUFFO0FBQUNGLGdCQUFJLEVBQUVBLElBQUksQ0FBQ0o7QUFBWjtBQUZGLFNBRFc7QUFBQSwrQkFNakI7QUFBQSxvQkFBSUksSUFBSSxDQUFDSDtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUjtBQVFBLEdBVGEsQ0FBZDtBQVdBLHNCQUFPLHFFQUFDLHlEQUFEO0FBQ04sWUFBUSxNQURGO0FBRU4sYUFBUyxFQUFDLFFBRko7QUFHTixTQUFLLEVBQUU7QUFBQ00sZUFBUyxFQUFFLEdBQVo7QUFBaUJDLGFBQU8sRUFBRTtBQUExQixLQUhEO0FBSU4sWUFBUSxNQUpGO0FBQUEsMkJBTU4scUVBQUMsSUFBRDtBQUFNLGVBQVMsTUFBZjtBQUFnQixlQUFTLE1BQXpCO0FBQTBCLG1CQUFhLEVBQUMsUUFBeEM7QUFBQSxnQkFFQ047QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTk07QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBWUE7O0tBakNRSixZO0FBbUNNQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sYW5nLjEwZDk0NjYxMGQxZGUxYTFmYmEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG5cdEJ1dHRvbixcclxuXHRTZWdtZW50LFxyXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmZ1bmN0aW9uIExhbmd1YWdlUGFnZSgpIHtcclxuXHJcblx0Y29uc3QgbGFuZ3MgPSBbe1xyXG5cdFx0bjogJ3pob25nJyxcclxuXHRcdGM6ICd6aCdcclxuXHR9LCB7XHJcblx0XHRuOiAneWluZycsXHJcblx0XHRjOiAnZW4nXHJcblx0fV07XHJcblxyXG5cdGNvbnN0IGxpbmtzID0gbGFuZ3MubWFwKChsYW5nKSA9PiB7XHJcblx0XHRyZXR1cm4gKDxHcmlkLlJvdz48TGlua1xyXG5cdFx0XHRocmVmPXt7XHJcblx0XHRcdFx0cGF0aG5hbWU6ICcvY29udGVudCcsXHJcblx0XHRcdFx0cXVlcnk6IHtsYW5nOiBsYW5nLm59LFxyXG5cdFx0XHR9fVxyXG5cdFx0PlxyXG5cdFx0XHQ8YT57bGFuZy5jfTwvYT5cclxuXHRcdDwvTGluaz48L0dyaWQuUm93Pik7XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiA8U2VnbWVudFxyXG5cdFx0aW52ZXJ0ZWRcclxuXHRcdHRleHRBbGlnbj0nY2VudGVyJ1xyXG5cdFx0c3R5bGU9e3ttaW5IZWlnaHQ6IDcwMCwgcGFkZGluZzogJzFlbSAwZW0nfX1cclxuXHRcdHZlcnRpY2FsXHJcblx0PlxyXG5cdFx0PEdyaWQgY29udGFpbmVyIHN0YWNrYWJsZSB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnPlxyXG5cclxuXHRcdHtsaW5rc31cclxuXHJcblx0XHQ8L0dyaWQ+XHJcblx0PC9TZWdtZW50PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFuZ3VhZ2VQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9