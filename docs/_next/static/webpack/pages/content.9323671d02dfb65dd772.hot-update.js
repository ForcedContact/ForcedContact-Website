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

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  var _router$query = router.query,
      page = _router$query.page,
      lang = _router$query.lang;

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
            router.push({
              pathname: '/',
              query: {
                lang: lang,
                page: Number(page) + 1
              }
            }, undefined, {
              shallow: true
            });
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 4
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 3
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MarkdownViewer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        source: source
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 3
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      children: ["This work is licensed under a", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: 'https://github.com/ForcedContact/Content/blob/master/LICENSE',
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: ' Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 5
      }, this), "."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 3
    }, this)]
  }, void 0, true);
}

_s(ContentPage, "uQAhCM33fIjiwHye8kczBo6+p6g=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvbnRlbnQvaW5kZXguanMiXSwibmFtZXMiOlsiQ29udGVudFBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsInBhZ2UiLCJsYW5nIiwidXNlU3RhdGUiLCJzb3VyY2UiLCJzZXRTb3VyY2UiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInJlc3BvbnNlIiwidGV4dCIsIm1pbkhlaWdodCIsInBhZGRpbmciLCJwdXNoIiwicGF0aG5hbWUiLCJOdW1iZXIiLCJ1bmRlZmluZWQiLCJzaGFsbG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxHQUF1QjtBQUFBOztBQUN0QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRHNCLHNCQUVERCxNQUFNLENBQUNFLEtBRk47QUFBQSxNQUVmQyxJQUZlLGlCQUVmQSxJQUZlO0FBQUEsTUFFVEMsSUFGUyxpQkFFVEEsSUFGUzs7QUFBQSxrQkFHTUMsc0RBQVEsQ0FBQyxFQUFELENBSGQ7QUFBQSxNQUdmQyxNQUhlO0FBQUEsTUFHUEMsU0FITzs7QUFNdEJDLHlEQUFTLHdVQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2NDLEtBQUssQ0FBQywwRUFBRCxDQURuQjs7QUFBQTtBQUNIQyxvQkFERztBQUFBO0FBQUEsbUJBRVVBLFFBQVEsQ0FBQ0MsSUFBVCxFQUZWOztBQUFBO0FBRUhBLGdCQUZHO0FBR1RKLHFCQUFTLENBQUVJLElBQUksb0JBQWFSLElBQWIsQ0FBTixDQUFUOztBQUhTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFJUCxDQUFDQSxJQUFELENBSk8sQ0FBVDtBQU9BLHNCQUFPO0FBQUEsNEJBQUUscUVBQUMseURBQUQ7QUFDUixjQUFRLE1BREE7QUFFUixlQUFTLEVBQUMsUUFGRjtBQUdSLFdBQUssRUFBRTtBQUFDUyxpQkFBUyxFQUFFLEdBQVo7QUFBaUJDLGVBQU8sRUFBRTtBQUExQixPQUhDO0FBSVIsY0FBUSxNQUpBO0FBQUEsOEJBTVIscUVBQUMsMkRBQUQ7QUFBVyxhQUFLLEVBQUU7QUFBQ0EsaUJBQU8sRUFBRTtBQUFWLFNBQWxCO0FBQ1csaUJBQVMsRUFBQyxRQURyQjtBQUFBLCtCQUdDLHFFQUFDLHdEQUFEO0FBQVEsaUJBQU8sTUFBZjtBQUFnQixjQUFJLEVBQUMsTUFBckI7QUFBNEIsaUJBQU8sRUFBRSxtQkFBSTtBQUN4Q2Isa0JBQU0sQ0FBQ2MsSUFBUCxDQUFZO0FBQ1hDLHNCQUFRLEVBQUMsR0FERTtBQUVYYixtQkFBSyxFQUFDO0FBQ0xFLG9CQUFJLEVBQUNBLElBREE7QUFFTEQsb0JBQUksRUFBRWEsTUFBTSxDQUFDYixJQUFELENBQU4sR0FBYTtBQUZkO0FBRkssYUFBWixFQU1HYyxTQU5ILEVBTWM7QUFBRUMscUJBQU8sRUFBRTtBQUFYLGFBTmQ7QUFPQTtBQVJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTlEsZUFtQlIscUVBQUMsa0VBQUQ7QUFDQyxjQUFNLEVBQUVaO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5CUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBRixlQXVCTixxRUFBQywyREFBRDtBQUFBLCtEQUVFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFFLDhEQUFaO0FBQUEsK0JBQ0M7QUFBQSxvQkFBSTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkJNO0FBQUEsa0JBQVA7QUErQkE7O0dBNUNRUCxXO1VBQ09FLHFEOzs7S0FEUEYsVztBQThDTUEsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGVudC45MzIzNjcxZDAyZGZiNjVkZDc3Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcblx0QnV0dG9uLFxyXG5cdFNlZ21lbnQsXHJcblx0Q29udGFpbmVyLFxyXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IE1hcmtkb3duVmlld2VyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01hcmtkb3duVmlld2VyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZnVuY3Rpb24gQ29udGVudFBhZ2UoKSB7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3Qge3BhZ2UsIGxhbmd9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cdGNvbnN0IFtzb3VyY2UsIHNldFNvdXJjZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG5cclxuXHR1c2VFZmZlY3QoYXN5bmMgKCk9PntcclxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Gb3JjZWRDb250YWN0L0NvbnRlbnQvbWFzdGVyL1JFQURNRS5tZCcpO1xyXG5cdFx0Y29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcclxuXHRcdHNldFNvdXJjZSggdGV4dCArIGBcXG5wYWdlOiR7cGFnZX1gKTtcclxuXHR9LFtwYWdlXSk7XHJcblxyXG5cclxuXHRyZXR1cm4gPD48U2VnbWVudFxyXG5cdFx0aW52ZXJ0ZWRcclxuXHRcdHRleHRBbGlnbj1cImNlbnRlclwiXHJcblx0XHRzdHlsZT17e21pbkhlaWdodDogNzAwLCBwYWRkaW5nOiAnMWVtIDBlbSd9fVxyXG5cdFx0dmVydGljYWxcclxuXHQ+XHJcblx0XHQ8Q29udGFpbmVyIHN0eWxlPXt7cGFkZGluZzogNTB9fVxyXG5cdFx0ICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuXHJcblx0XHRcdDxCdXR0b24gcHJpbWFyeSBzaXplPSdodWdlJyBvbkNsaWNrPXsoKT0+e1xyXG5cdFx0XHRcdHJvdXRlci5wdXNoKHtcclxuXHRcdFx0XHRcdHBhdGhuYW1lOicvJyxcclxuXHRcdFx0XHRcdHF1ZXJ5OntcclxuXHRcdFx0XHRcdFx0bGFuZzpsYW5nLFxyXG5cdFx0XHRcdFx0XHRwYWdlOiBOdW1iZXIocGFnZSkrMVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9LCB1bmRlZmluZWQsIHsgc2hhbGxvdzogdHJ1ZSB9KTtcclxuXHRcdFx0fX0vPlxyXG5cdFx0PC9Db250YWluZXI+XHJcblx0XHQ8TWFya2Rvd25WaWV3ZXJcclxuXHRcdFx0c291cmNlPXtzb3VyY2V9XHJcblx0XHQvPlxyXG5cdDwvU2VnbWVudD5cclxuXHRcdDxDb250YWluZXI+XHJcblx0XHRcdFRoaXMgd29yayBpcyBsaWNlbnNlZCB1bmRlciBhXHJcblx0XHRcdFx0PExpbmsgaHJlZj17J2h0dHBzOi8vZ2l0aHViLmNvbS9Gb3JjZWRDb250YWN0L0NvbnRlbnQvYmxvYi9tYXN0ZXIvTElDRU5TRSd9PlxyXG5cdFx0XHRcdFx0PGE+eycgQ3JlYXRpdmUgQ29tbW9ucyBBdHRyaWJ1dGlvbi1Ob25Db21tZXJjaWFsLVNoYXJlQWxpa2UgNC4wIEludGVybmF0aW9uYWwgTGljZW5zZSd9XHJcblx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0PC9MaW5rPi5cclxuXHRcdDwvQ29udGFpbmVyPlxyXG5cdDwvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudFBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=