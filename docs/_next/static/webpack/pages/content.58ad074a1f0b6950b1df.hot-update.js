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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);





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
          lineNumber: 34,
          columnNumber: 4
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 3
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MarkdownViewer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        source: source
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 3
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      children: ["This work is licensed under a", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: 'https://github.com/ForcedContact/Content/blob/master/LICENSE',
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: ' Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }, this), "."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvbnRlbnQvaW5kZXguanMiXSwibmFtZXMiOlsiQ29udGVudFBhZ2UiLCJ1c2VTdGF0ZSIsInNvdXJjZSIsInNldFNvdXJjZSIsInBhZ2UiLCJzZXRQYWdlIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJyZXNwb25zZSIsInRleHQiLCJtaW5IZWlnaHQiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxHQUF1QjtBQUFBOztBQUFBLGtCQUlNQyxzREFBUSxDQUFDLEVBQUQsQ0FKZDtBQUFBLE1BSWZDLE1BSmU7QUFBQSxNQUlQQyxTQUpPOztBQUFBLG1CQUtFRixzREFBUSxDQUFDLENBQUQsQ0FMVjtBQUFBLE1BS2ZHLElBTGU7QUFBQSxNQUtUQyxPQUxTOztBQU90QkMseURBQVMsd1VBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDY0MsS0FBSyxDQUFDLDBFQUFELENBRG5COztBQUFBO0FBQ0hDLG9CQURHO0FBQUE7QUFBQSxtQkFFVUEsUUFBUSxDQUFDQyxJQUFULEVBRlY7O0FBQUE7QUFFSEEsZ0JBRkc7QUFHVE4scUJBQVMsQ0FBRU0sSUFBSSxvQkFBYUwsSUFBYixDQUFOLENBQVQ7O0FBSFM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQUlQLENBQUNBLElBQUQsQ0FKTyxDQUFUO0FBT0Esc0JBQU87QUFBQSw0QkFBRSxxRUFBQyx5REFBRDtBQUNSLGNBQVEsTUFEQTtBQUVSLGVBQVMsRUFBQyxRQUZGO0FBR1IsV0FBSyxFQUFFO0FBQUNNLGlCQUFTLEVBQUUsR0FBWjtBQUFpQkMsZUFBTyxFQUFFO0FBQTFCLE9BSEM7QUFJUixjQUFRLE1BSkE7QUFBQSw4QkFNUixxRUFBQywyREFBRDtBQUFXLGFBQUssRUFBRTtBQUFDQSxpQkFBTyxFQUFFO0FBQVYsU0FBbEI7QUFDVyxpQkFBUyxFQUFDLFFBRHJCO0FBQUEsK0JBR0MscUVBQUMsd0RBQUQ7QUFBUSxpQkFBTyxNQUFmO0FBQWdCLGNBQUksRUFBQyxNQUFyQjtBQUE0QixpQkFBTyxFQUFFLG1CQUFJO0FBQ3hDTixtQkFBTyxDQUFDRCxJQUFJLEdBQUMsQ0FBTixDQUFQO0FBQ0E7QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5RLGVBYVIscUVBQUMsa0VBQUQ7QUFDQyxjQUFNLEVBQUVGO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFGLGVBaUJOLHFFQUFDLDJEQUFEO0FBQUEsK0RBRUUscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUUsOERBQVo7QUFBQSwrQkFDQztBQUFBLG9CQUFJO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQk07QUFBQSxrQkFBUDtBQXlCQTs7R0F2Q1FGLFc7O0tBQUFBLFc7QUF5Q01BLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnRlbnQuNThhZDA3NGExZjBiNjk1MGIxZGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG5cdEJ1dHRvbixcclxuXHRTZWdtZW50LFxyXG5cdENvbnRhaW5lcixcclxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBNYXJrZG93blZpZXdlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NYXJrZG93blZpZXdlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmZ1bmN0aW9uIENvbnRlbnRQYWdlKCkge1xyXG5cclxuXHRcclxuXHJcblx0Y29uc3QgW3NvdXJjZSwgc2V0U291cmNlXSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcblx0dXNlRWZmZWN0KGFzeW5jICgpPT57XHJcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vRm9yY2VkQ29udGFjdC9Db250ZW50L21hc3Rlci9SRUFETUUubWQnKTtcclxuXHRcdGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcblx0XHRzZXRTb3VyY2UoIHRleHQgKyBgXFxucGFnZToke3BhZ2V9YCk7XHJcblx0fSxbcGFnZV0pO1xyXG5cclxuXHJcblx0cmV0dXJuIDw+PFNlZ21lbnRcclxuXHRcdGludmVydGVkXHJcblx0XHR0ZXh0QWxpZ249XCJjZW50ZXJcIlxyXG5cdFx0c3R5bGU9e3ttaW5IZWlnaHQ6IDcwMCwgcGFkZGluZzogJzFlbSAwZW0nfX1cclxuXHRcdHZlcnRpY2FsXHJcblx0PlxyXG5cdFx0PENvbnRhaW5lciBzdHlsZT17e3BhZGRpbmc6IDUwfX1cclxuXHRcdCAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcblxyXG5cdFx0XHQ8QnV0dG9uIHByaW1hcnkgc2l6ZT0naHVnZScgb25DbGljaz17KCk9PntcclxuXHRcdFx0XHRzZXRQYWdlKHBhZ2UrMSk7XHJcblx0XHRcdH19Lz5cclxuXHRcdDwvQ29udGFpbmVyPlxyXG5cdFx0PE1hcmtkb3duVmlld2VyXHJcblx0XHRcdHNvdXJjZT17c291cmNlfVxyXG5cdFx0Lz5cclxuXHQ8L1NlZ21lbnQ+XHJcblx0XHQ8Q29udGFpbmVyPlxyXG5cdFx0XHRUaGlzIHdvcmsgaXMgbGljZW5zZWQgdW5kZXIgYVxyXG5cdFx0XHRcdDxMaW5rIGhyZWY9eydodHRwczovL2dpdGh1Yi5jb20vRm9yY2VkQ29udGFjdC9Db250ZW50L2Jsb2IvbWFzdGVyL0xJQ0VOU0UnfT5cclxuXHRcdFx0XHRcdDxhPnsnIENyZWF0aXZlIENvbW1vbnMgQXR0cmlidXRpb24tTm9uQ29tbWVyY2lhbC1TaGFyZUFsaWtlIDQuMCBJbnRlcm5hdGlvbmFsIExpY2Vuc2UnfVxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDwvTGluaz4uXHJcblx0XHQ8L0NvbnRhaW5lcj5cclxuXHQ8Lz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9