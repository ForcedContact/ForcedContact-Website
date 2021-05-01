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
      padding: '1em 0em'
    },
    vertical: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
      style: {
        padding: 20,
        background: 'red'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      container: true,
      stackable: true,
      verticalAlign: "middle",
      children: links
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 3
    }, this)]
  }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xhbmcvaW5kZXguanMiXSwibmFtZXMiOlsiTGFuZ3VhZ2VQYWdlIiwibGFuZ3MiLCJuIiwiYyIsImxpbmtzIiwibWFwIiwibGFuZyIsInBhdGhuYW1lIiwicXVlcnkiLCJtaW5IZWlnaHQiLCJwYWRkaW5nIiwiYmFja2dyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBSUE7O0FBRUEsU0FBU0EsWUFBVCxHQUF3QjtBQUFBOztBQUV2QixNQUFNQyxLQUFLLEdBQUcsQ0FBQztBQUNkQyxLQUFDLEVBQUUsT0FEVztBQUVkQyxLQUFDLEVBQUU7QUFGVyxHQUFELEVBR1g7QUFDRkQsS0FBQyxFQUFFLE1BREQ7QUFFRkMsS0FBQyxFQUFFO0FBRkQsR0FIVyxDQUFkO0FBUUEsTUFBTUMsS0FBSyxHQUFHSCxLQUFLLENBQUNJLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQVU7QUFDakMsd0JBQVEscUVBQUMsc0RBQUQsQ0FBTSxHQUFOO0FBQUEsNkJBQVUscUVBQUMsZ0RBQUQ7QUFDakIsWUFBSSxFQUFFO0FBQ0xDLGtCQUFRLEVBQUUsVUFETDtBQUVMQyxlQUFLLEVBQUU7QUFBQ0YsZ0JBQUksRUFBRUEsSUFBSSxDQUFDSjtBQUFaO0FBRkYsU0FEVztBQUFBLCtCQU1qQjtBQUFBLG9CQUFJSSxJQUFJLENBQUNIO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5pQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFSO0FBUUEsR0FUYSxDQUFkO0FBV0Esc0JBQU8scUVBQUMseURBQUQ7QUFDTixZQUFRLE1BREY7QUFFTixhQUFTLEVBQUMsUUFGSjtBQUdOLFNBQUssRUFBRTtBQUFDTSxlQUFTLEVBQUUsR0FBWjtBQUFpQkMsYUFBTyxFQUFFO0FBQTFCLEtBSEQ7QUFJTixZQUFRLE1BSkY7QUFBQSw0QkFNTixxRUFBQyx5REFBRDtBQUFTLFdBQUssRUFBRTtBQUFDQSxlQUFPLEVBQUMsRUFBVDtBQUFhQyxrQkFBVSxFQUFDO0FBQXhCO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOTSxlQVFOLHFFQUFDLHNEQUFEO0FBQU0sZUFBUyxNQUFmO0FBQWdCLGVBQVMsTUFBekI7QUFBMEIsbUJBQWEsRUFBQyxRQUF4QztBQUFBLGdCQUNFUDtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQVlBOztLQWpDUUosWTtBQW1DTUEsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGFuZy5iYjkzNDdkN2U5YzIyMTlhNTA2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuXHRHcmlkLFxyXG5cdFNlZ21lbnQsXHJcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZnVuY3Rpb24gTGFuZ3VhZ2VQYWdlKCkge1xyXG5cclxuXHRjb25zdCBsYW5ncyA9IFt7XHJcblx0XHRuOiAnemhvbmcnLFxyXG5cdFx0YzogJ3poJ1xyXG5cdH0sIHtcclxuXHRcdG46ICd5aW5nJyxcclxuXHRcdGM6ICdlbidcclxuXHR9XTtcclxuXHJcblx0Y29uc3QgbGlua3MgPSBsYW5ncy5tYXAoKGxhbmcpID0+IHtcclxuXHRcdHJldHVybiAoPEdyaWQuUm93PjxMaW5rXHJcblx0XHRcdGhyZWY9e3tcclxuXHRcdFx0XHRwYXRobmFtZTogJy9jb250ZW50JyxcclxuXHRcdFx0XHRxdWVyeToge2xhbmc6IGxhbmcubn0sXHJcblx0XHRcdH19XHJcblx0XHQ+XHJcblx0XHRcdDxhPntsYW5nLmN9PC9hPlxyXG5cdFx0PC9MaW5rPjwvR3JpZC5Sb3c+KTtcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIDxTZWdtZW50XHJcblx0XHRpbnZlcnRlZFxyXG5cdFx0dGV4dEFsaWduPSdjZW50ZXInXHJcblx0XHRzdHlsZT17e21pbkhlaWdodDogNzAwLCBwYWRkaW5nOiAnMWVtIDBlbSd9fVxyXG5cdFx0dmVydGljYWxcclxuXHQ+XHJcblx0XHQ8U2VnbWVudCBzdHlsZT17e3BhZGRpbmc6MjAsIGJhY2tncm91bmQ6J3JlZCd9fT5cclxuXHRcdDwvU2VnbWVudD5cclxuXHRcdDxHcmlkIGNvbnRhaW5lciBzdGFja2FibGUgdmVydGljYWxBbGlnbj0nbWlkZGxlJz5cclxuXHRcdFx0e2xpbmtzfVxyXG5cdFx0PC9HcmlkPlxyXG5cdDwvU2VnbWVudD47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhbmd1YWdlUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==