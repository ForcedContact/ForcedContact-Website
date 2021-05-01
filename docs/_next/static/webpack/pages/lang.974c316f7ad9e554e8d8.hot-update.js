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
          lineNumber: 26,
          columnNumber: 4
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
      style: {
        padding: 20,
        background: 'transparent'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      textAlign: "center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        container: true,
        stackable: true,
        verticalAlign: "middle",
        children: links
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 3
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 3
    }, this)]
  }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xhbmcvaW5kZXguanMiXSwibmFtZXMiOlsiTGFuZ3VhZ2VQYWdlIiwibGFuZ3MiLCJuIiwiYyIsImxpbmtzIiwibWFwIiwibGFuZyIsInBhdGhuYW1lIiwicXVlcnkiLCJtaW5IZWlnaHQiLCJwYWRkaW5nIiwiYmFja2dyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBS0E7O0FBRUEsU0FBU0EsWUFBVCxHQUF3QjtBQUFBOztBQUV2QixNQUFNQyxLQUFLLEdBQUcsQ0FBQztBQUNkQyxLQUFDLEVBQUUsSUFEVztBQUVkQyxLQUFDLEVBQUU7QUFGVyxHQUFELEVBR1g7QUFDRkQsS0FBQyxFQUFFLElBREQ7QUFFRkMsS0FBQyxFQUFFO0FBRkQsR0FIVyxDQUFkO0FBUUEsTUFBTUMsS0FBSyxHQUFHSCxLQUFLLENBQUNJLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQVU7QUFDakMsd0JBQVEscUVBQUMsc0RBQUQsQ0FBTSxHQUFOO0FBQUEsNkJBQVUscUVBQUMsZ0RBQUQ7QUFDakIsWUFBSSxFQUFFO0FBQ0xDLGtCQUFRLEVBQUUsVUFETDtBQUVMQyxlQUFLLEVBQUU7QUFBQ0YsZ0JBQUksRUFBRUEsSUFBSSxDQUFDSjtBQUFaO0FBRkYsU0FEVztBQUFBLCtCQU1qQjtBQUFBLG9CQUFJSSxJQUFJLENBQUNIO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5pQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFSO0FBUUEsR0FUYSxDQUFkO0FBV0Esc0JBQU8scUVBQUMseURBQUQ7QUFDTixZQUFRLE1BREY7QUFFTixhQUFTLEVBQUMsUUFGSjtBQUdOLFNBQUssRUFBRTtBQUFDTSxlQUFTLEVBQUUsR0FBWjtBQUFpQkMsYUFBTyxFQUFFO0FBQTFCLEtBSEQ7QUFJTixZQUFRLE1BSkY7QUFBQSw0QkFNTixxRUFBQyx5REFBRDtBQUFTLFdBQUssRUFBRTtBQUFDQSxlQUFPLEVBQUMsRUFBVDtBQUFhQyxrQkFBVSxFQUFDO0FBQXhCO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOTSxlQVFOLHFFQUFDLDJEQUFEO0FBQVcsZUFBUyxFQUFDLFFBQXJCO0FBQUEsNkJBQ0EscUVBQUMsc0RBQUQ7QUFBTSxpQkFBUyxNQUFmO0FBQWdCLGlCQUFTLE1BQXpCO0FBQTBCLHFCQUFhLEVBQUMsUUFBeEM7QUFBQSxrQkFDRVA7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBY0E7O0tBbkNRSixZO0FBcUNNQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sYW5nLjk3NGMzMTZmN2FkOWU1NTRlOGQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG5cdEdyaWQsXHJcblx0U2VnbWVudCxcclxuXHRDb250YWluZXIsXHJcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZnVuY3Rpb24gTGFuZ3VhZ2VQYWdlKCkge1xyXG5cclxuXHRjb25zdCBsYW5ncyA9IFt7XHJcblx0XHRuOiAnemgnLFxyXG5cdFx0YzogJ+S4reaWhydcclxuXHR9LCB7XHJcblx0XHRuOiAnZW4nLFxyXG5cdFx0YzogJ0VuZ2xpc2gnXHJcblx0fV07XHJcblxyXG5cdGNvbnN0IGxpbmtzID0gbGFuZ3MubWFwKChsYW5nKSA9PiB7XHJcblx0XHRyZXR1cm4gKDxHcmlkLlJvdz48TGlua1xyXG5cdFx0XHRocmVmPXt7XHJcblx0XHRcdFx0cGF0aG5hbWU6ICcvY29udGVudCcsXHJcblx0XHRcdFx0cXVlcnk6IHtsYW5nOiBsYW5nLm59LFxyXG5cdFx0XHR9fVxyXG5cdFx0PlxyXG5cdFx0XHQ8YT57bGFuZy5jfTwvYT5cclxuXHRcdDwvTGluaz48L0dyaWQuUm93Pik7XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiA8U2VnbWVudFxyXG5cdFx0aW52ZXJ0ZWRcclxuXHRcdHRleHRBbGlnbj0nY2VudGVyJ1xyXG5cdFx0c3R5bGU9e3ttaW5IZWlnaHQ6IDcwMCwgcGFkZGluZzogJzFlbSAwZW0nfX1cclxuXHRcdHZlcnRpY2FsXHJcblx0PlxyXG5cdFx0PFNlZ21lbnQgc3R5bGU9e3twYWRkaW5nOjIwLCBiYWNrZ3JvdW5kOid0cmFuc3BhcmVudCd9fT5cclxuXHRcdDwvU2VnbWVudD5cclxuXHRcdDxDb250YWluZXIgdGV4dEFsaWduPSdjZW50ZXInPlxyXG5cdFx0PEdyaWQgY29udGFpbmVyIHN0YWNrYWJsZSB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnPlxyXG5cdFx0XHR7bGlua3N9XHJcblx0XHQ8L0dyaWQ+XHJcblx0XHQ8L0NvbnRhaW5lcj5cclxuXHQ8L1NlZ21lbnQ+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYW5ndWFnZVBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=