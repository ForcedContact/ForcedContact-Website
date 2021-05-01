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
          lineNumber: 30,
          columnNumber: 4
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 3
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MarkdownViewer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        source: source
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 3
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MarkdownViewer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      source: source
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvbnRlbnQvaW5kZXguanMiXSwibmFtZXMiOlsiQ29udGVudFBhZ2UiLCJ1c2VTdGF0ZSIsInNvdXJjZSIsInNldFNvdXJjZSIsInBhZ2UiLCJzZXRQYWdlIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJyZXNwb25zZSIsInRleHQiLCJtaW5IZWlnaHQiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUtBOztBQUVBLFNBQVNBLFdBQVQsR0FBdUI7QUFBQTs7QUFBQSxrQkFFTUMsc0RBQVEsQ0FBQyxFQUFELENBRmQ7QUFBQSxNQUVmQyxNQUZlO0FBQUEsTUFFUEMsU0FGTzs7QUFBQSxtQkFHRUYsc0RBQVEsQ0FBQyxDQUFELENBSFY7QUFBQSxNQUdmRyxJQUhlO0FBQUEsTUFHVEMsT0FIUzs7QUFLdEJDLHlEQUFTLHdVQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2NDLEtBQUssQ0FBQywwRUFBRCxDQURuQjs7QUFBQTtBQUNIQyxvQkFERztBQUFBO0FBQUEsbUJBRVVBLFFBQVEsQ0FBQ0MsSUFBVCxFQUZWOztBQUFBO0FBRUhBLGdCQUZHO0FBR1ROLHFCQUFTLENBQUVNLElBQUksb0JBQWFMLElBQWIsQ0FBTixDQUFUOztBQUhTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFJUCxDQUFDQSxJQUFELENBSk8sQ0FBVDtBQU9BLHNCQUFPO0FBQUEsNEJBQUUscUVBQUMseURBQUQ7QUFDUixjQUFRLE1BREE7QUFFUixlQUFTLEVBQUMsUUFGRjtBQUdSLFdBQUssRUFBRTtBQUFDTSxpQkFBUyxFQUFFLEdBQVo7QUFBaUJDLGVBQU8sRUFBRTtBQUExQixPQUhDO0FBSVIsY0FBUSxNQUpBO0FBQUEsOEJBTVIscUVBQUMsMkRBQUQ7QUFBVyxhQUFLLEVBQUU7QUFBQ0EsaUJBQU8sRUFBRTtBQUFWLFNBQWxCO0FBQ1csaUJBQVMsRUFBQyxRQURyQjtBQUFBLCtCQUdDLHFFQUFDLHdEQUFEO0FBQVEsaUJBQU8sTUFBZjtBQUFnQixjQUFJLEVBQUMsTUFBckI7QUFBNEIsaUJBQU8sRUFBRSxtQkFBSTtBQUN4Q04sbUJBQU8sQ0FBQ0QsSUFBSSxHQUFDLENBQU4sQ0FBUDtBQUNBO0FBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOUSxlQWFSLHFFQUFDLGtFQUFEO0FBQ0MsY0FBTSxFQUFFRjtBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBRixlQWlCTixxRUFBQyxrRUFBRDtBQUNDLFlBQU0sRUFBRUE7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJNO0FBQUEsa0JBQVA7QUFxQkE7O0dBakNRRixXOztLQUFBQSxXO0FBbUNNQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb250ZW50Ljk2NWNiMWU4NzdhODI0MjcxMWUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuXHRCdXR0b24sXHJcblx0U2VnbWVudCxcclxuXHRDb250YWluZXIsXHJcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgTWFya2Rvd25WaWV3ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWFya2Rvd25WaWV3ZXJcIjtcclxuXHJcbmZ1bmN0aW9uIENvbnRlbnRQYWdlKCkge1xyXG5cclxuXHRjb25zdCBbc291cmNlLCBzZXRTb3VyY2VdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuXHR1c2VFZmZlY3QoYXN5bmMgKCk9PntcclxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Gb3JjZWRDb250YWN0L0NvbnRlbnQvbWFzdGVyL1JFQURNRS5tZCcpO1xyXG5cdFx0Y29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcclxuXHRcdHNldFNvdXJjZSggdGV4dCArIGBcXG5wYWdlOiR7cGFnZX1gKTtcclxuXHR9LFtwYWdlXSk7XHJcblxyXG5cclxuXHRyZXR1cm4gPD48U2VnbWVudFxyXG5cdFx0aW52ZXJ0ZWRcclxuXHRcdHRleHRBbGlnbj1cImNlbnRlclwiXHJcblx0XHRzdHlsZT17e21pbkhlaWdodDogNzAwLCBwYWRkaW5nOiAnMWVtIDBlbSd9fVxyXG5cdFx0dmVydGljYWxcclxuXHQ+XHJcblx0XHQ8Q29udGFpbmVyIHN0eWxlPXt7cGFkZGluZzogNTB9fVxyXG5cdFx0ICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuXHJcblx0XHRcdDxCdXR0b24gcHJpbWFyeSBzaXplPSdodWdlJyBvbkNsaWNrPXsoKT0+e1xyXG5cdFx0XHRcdHNldFBhZ2UocGFnZSsxKTtcclxuXHRcdFx0fX0vPlxyXG5cdFx0PC9Db250YWluZXI+XHJcblx0XHQ8TWFya2Rvd25WaWV3ZXJcclxuXHRcdFx0c291cmNlPXtzb3VyY2V9XHJcblx0XHQvPlxyXG5cdDwvU2VnbWVudD5cclxuXHRcdDxNYXJrZG93blZpZXdlclxyXG5cdFx0XHRzb3VyY2U9e3NvdXJjZX1cclxuXHRcdC8+XHJcblx0PC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50UGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==