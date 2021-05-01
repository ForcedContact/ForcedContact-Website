webpackHotUpdate_N_E("pages/content",{

/***/ "./src/pages/content.js":
/*!******************************!*\
  !*** ./src/pages/content.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_GithubProject_ForcedContact_Website_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_GithubProject_ForcedContact_Website_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_GithubProject_ForcedContact_Website_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_GithubProject_ForcedContact_Website_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_MarkdownViewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MarkdownViewer */ "./src/components/MarkdownViewer.js");





var _jsxFileName = "D:\\GithubProject\\ForcedContact-Website\\src\\pages\\content.js",
    _s = $RefreshSig$();




function ContentPage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      source = _useState[0],
      setSource = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])( /*#__PURE__*/Object(D_GithubProject_ForcedContact_Website_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_GithubProject_ForcedContact_Website_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var response, text;
    return D_GithubProject_ForcedContact_Website_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://raw.githubusercontent.com/ForcedContact/Content/master/README.md');

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.text();

          case 5:
            text = _context.sent;
            setSource(text);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MarkdownViewer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      source: source
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 3
    }, this)
  }, void 0, false);
}

_s(ContentPage, "toM3z34+Br3Qv+WRRPyQ9W7rcZU=");

_c = ContentPage;
/* harmony default export */ __webpack_exports__["default"] = (ContentPage);

var _c;

$RefreshReg$(_c, "ContentPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvbnRlbnQuanMiXSwibmFtZXMiOlsiQ29udGVudFBhZ2UiLCJ1c2VTdGF0ZSIsInNvdXJjZSIsInNldFNvdXJjZSIsInVzZUVmZmVjdCIsImZldGNoIiwicmVzcG9uc2UiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFdBQVQsR0FBdUI7QUFBQTs7QUFBQSxrQkFFTUMsc0RBQVEsQ0FBQyxFQUFELENBRmQ7QUFBQSxNQUVmQyxNQUZlO0FBQUEsTUFFUEMsU0FGTzs7QUFJdEJDLHlEQUFTLHdVQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2NDLEtBQUssQ0FBQywwRUFBRCxDQURuQjs7QUFBQTtBQUNIQyxvQkFERztBQUFBO0FBQUEsbUJBRVVBLFFBQVEsQ0FBQ0MsSUFBVCxFQUZWOztBQUFBO0FBRUhBLGdCQUZHO0FBR1RKLHFCQUFTLENBQUNJLElBQUQsQ0FBVDs7QUFIUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBSVAsRUFKTyxDQUFUO0FBT0Esc0JBQU87QUFBQSwyQkFDTixxRUFBQyxrRUFBRDtBQUNDLFlBQU0sRUFBRUw7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE0sbUJBQVA7QUFLQTs7R0FoQlFGLFc7O0tBQUFBLFc7QUFrQk1BLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnRlbnQuNWMwYzNkYTk1M2VmNDg2YTIyYzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWFya2Rvd25WaWV3ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFya2Rvd25WaWV3ZXJcIjtcclxuXHJcbmZ1bmN0aW9uIENvbnRlbnRQYWdlKCkge1xyXG5cclxuXHRjb25zdCBbc291cmNlLCBzZXRTb3VyY2VdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuXHR1c2VFZmZlY3QoYXN5bmMgKCk9PntcclxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Gb3JjZWRDb250YWN0L0NvbnRlbnQvbWFzdGVyL1JFQURNRS5tZCcpO1xyXG5cdFx0Y29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcclxuXHRcdHNldFNvdXJjZSh0ZXh0KTtcclxuXHR9LFtdKTtcclxuXHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0PE1hcmtkb3duVmlld2VyXHJcblx0XHRcdHNvdXJjZT17c291cmNlfVxyXG5cdFx0Lz5cclxuXHQ8Lz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9