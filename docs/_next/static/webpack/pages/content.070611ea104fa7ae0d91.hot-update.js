webpackHotUpdate_N_E("pages/content",{

/***/ "./src/pages/content/index.js":
/*!************************************!*\
  !*** ./src/pages/content/index.js ***!
  \************************************/
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
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_MarkdownViewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/MarkdownViewer */ "./src/components/MarkdownViewer.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "D:\\GithubProject\\ForcedContact-Website\\src\\pages\\content\\index.js",
    _s = $RefreshSig$();






function ContentPage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      source = _useState[0],
      setSource = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      page = _useState2[0],
      setPage = _useState2[1];

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
            setSource(text + "\npage:".concat(page));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [page]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"], {
      inverted: true,
      textAlign: "center",
      style: {
        minHeight: 700,
        padding: '1em 0em'
      },
      vertical: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], {
        style: {
          padding: 50
        },
        textAlign: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          primary: true,
          size: "huge",
          onClick: function onClick() {
            setPage(page + 1);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 4
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 3
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MarkdownViewer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        source: source
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 3
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["This work is licensed under a", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: 'https://github.com/ForcedContact/Content/blob/master/LICENSE',
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: ' Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 5
          }, this), "."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 3
    }, this)]
  }, void 0, true);
}

_s(ContentPage, "G39N9RXu0/5jsZXPEJwdzJOntmE=");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvbnRlbnQvaW5kZXguanMiXSwibmFtZXMiOlsiQ29udGVudFBhZ2UiLCJ1c2VTdGF0ZSIsInNvdXJjZSIsInNldFNvdXJjZSIsInBhZ2UiLCJzZXRQYWdlIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJyZXNwb25zZSIsInRleHQiLCJtaW5IZWlnaHQiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBS0E7QUFDQTs7QUFFQSxTQUFTQSxXQUFULEdBQXVCO0FBQUE7O0FBQUEsa0JBRU1DLHNEQUFRLENBQUMsRUFBRCxDQUZkO0FBQUEsTUFFZkMsTUFGZTtBQUFBLE1BRVBDLFNBRk87O0FBQUEsbUJBR0VGLHNEQUFRLENBQUMsQ0FBRCxDQUhWO0FBQUEsTUFHZkcsSUFIZTtBQUFBLE1BR1RDLE9BSFM7O0FBS3RCQyx5REFBUyx3VUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNjQyxLQUFLLENBQUMsMEVBQUQsQ0FEbkI7O0FBQUE7QUFDSEMsb0JBREc7QUFBQTtBQUFBLG1CQUVVQSxRQUFRLENBQUNDLElBQVQsRUFGVjs7QUFBQTtBQUVIQSxnQkFGRztBQUdUTixxQkFBUyxDQUFFTSxJQUFJLG9CQUFhTCxJQUFiLENBQU4sQ0FBVDs7QUFIUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBSVAsQ0FBQ0EsSUFBRCxDQUpPLENBQVQ7QUFPQSxzQkFBTztBQUFBLDRCQUFFLHFFQUFDLHlEQUFEO0FBQ1IsY0FBUSxNQURBO0FBRVIsZUFBUyxFQUFDLFFBRkY7QUFHUixXQUFLLEVBQUU7QUFBQ00saUJBQVMsRUFBRSxHQUFaO0FBQWlCQyxlQUFPLEVBQUU7QUFBMUIsT0FIQztBQUlSLGNBQVEsTUFKQTtBQUFBLDhCQU1SLHFFQUFDLDJEQUFEO0FBQVcsYUFBSyxFQUFFO0FBQUNBLGlCQUFPLEVBQUU7QUFBVixTQUFsQjtBQUNXLGlCQUFTLEVBQUMsUUFEckI7QUFBQSwrQkFHQyxxRUFBQyx3REFBRDtBQUFRLGlCQUFPLE1BQWY7QUFBZ0IsY0FBSSxFQUFDLE1BQXJCO0FBQTRCLGlCQUFPLEVBQUUsbUJBQUk7QUFDeENOLG1CQUFPLENBQUNELElBQUksR0FBQyxDQUFOLENBQVA7QUFDQTtBQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTlEsZUFhUixxRUFBQyxrRUFBRDtBQUNDLGNBQU0sRUFBRUY7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQUYsZUFpQk4scUVBQUMsMkRBQUQ7QUFBQSw2QkFDQztBQUFBLGlFQUNDLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFFLDhEQUFaO0FBQUEsa0NBQ0E7QUFBQSxzQkFBSTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQk07QUFBQSxrQkFBUDtBQTJCQTs7R0F2Q1FGLFc7O0tBQUFBLFc7QUF5Q01BLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnRlbnQuMDcwNjExZWExMDRmYTdhZTBkOTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG5cdEJ1dHRvbixcclxuXHRTZWdtZW50LFxyXG5cdENvbnRhaW5lcixcclxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBNYXJrZG93blZpZXdlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NYXJrZG93blZpZXdlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZnVuY3Rpb24gQ29udGVudFBhZ2UoKSB7XHJcblxyXG5cdGNvbnN0IFtzb3VyY2UsIHNldFNvdXJjZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMCk7XHJcblxyXG5cdHVzZUVmZmVjdChhc3luYyAoKT0+e1xyXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0ZvcmNlZENvbnRhY3QvQ29udGVudC9tYXN0ZXIvUkVBRE1FLm1kJyk7XHJcblx0XHRjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG5cdFx0c2V0U291cmNlKCB0ZXh0ICsgYFxcbnBhZ2U6JHtwYWdlfWApO1xyXG5cdH0sW3BhZ2VdKTtcclxuXHJcblxyXG5cdHJldHVybiA8PjxTZWdtZW50XHJcblx0XHRpbnZlcnRlZFxyXG5cdFx0dGV4dEFsaWduPVwiY2VudGVyXCJcclxuXHRcdHN0eWxlPXt7bWluSGVpZ2h0OiA3MDAsIHBhZGRpbmc6ICcxZW0gMGVtJ319XHJcblx0XHR2ZXJ0aWNhbFxyXG5cdD5cclxuXHRcdDxDb250YWluZXIgc3R5bGU9e3twYWRkaW5nOiA1MH19XHJcblx0XHQgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiPlxyXG5cclxuXHRcdFx0PEJ1dHRvbiBwcmltYXJ5IHNpemU9J2h1Z2UnIG9uQ2xpY2s9eygpPT57XHJcblx0XHRcdFx0c2V0UGFnZShwYWdlKzEpO1xyXG5cdFx0XHR9fS8+XHJcblx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdDxNYXJrZG93blZpZXdlclxyXG5cdFx0XHRzb3VyY2U9e3NvdXJjZX1cclxuXHRcdC8+XHJcblx0PC9TZWdtZW50PlxyXG5cdFx0PENvbnRhaW5lcj5cclxuXHRcdFx0PHA+VGhpcyB3b3JrIGlzIGxpY2Vuc2VkIHVuZGVyIGFcclxuXHRcdFx0XHQ8TGluayBocmVmPXsnaHR0cHM6Ly9naXRodWIuY29tL0ZvcmNlZENvbnRhY3QvQ29udGVudC9ibG9iL21hc3Rlci9MSUNFTlNFJ30+XHJcblx0XHRcdFx0PGE+eycgQ3JlYXRpdmUgQ29tbW9ucyBBdHRyaWJ1dGlvbi1Ob25Db21tZXJjaWFsLVNoYXJlQWxpa2UgNC4wIEludGVybmF0aW9uYWwgTGljZW5zZSd9XHJcblx0XHRcdFx0PC9hPi5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdDwvcD5cclxuXHJcblx0XHQ8L0NvbnRhaW5lcj5cclxuXHQ8Lz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9