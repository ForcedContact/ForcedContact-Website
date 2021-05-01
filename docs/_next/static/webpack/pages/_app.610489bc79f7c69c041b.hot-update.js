webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Nav.js":
/*!*******************************!*\
  !*** ./src/components/Nav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @artsy/fresnel */ "./node_modules/@artsy/fresnel/dist/index.js");
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");



var _jsxFileName = "D:\\GithubProject\\ForcedContact-Website\\src\\components\\Nav.js",
    _this = undefined;





var _createMedia = Object(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_1__["createMedia"])({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024
  }
}),
    MediaContextProvider = _createMedia.MediaContextProvider;

var NavContainer = function NavContainer(props) {
  var children = props.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
      fixed: 'top',
      inverted: true,
      pointing: true,
      secondary: true,
      size: "large",
      style: {
        background: 'black'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
          as: "a",
          active: true,
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
          position: "right",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            as: "a",
            inverted: true,
            children: "Jump"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, _this), children]
  }, void 0, true);
};

_c = NavContainer;

var Nav = function Nav(props) {
  var children = props.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MediaContextProvider, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavContainer, {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 3
  }, _this);
};

_c2 = Nav;
/* harmony default export */ __webpack_exports__["default"] = (Nav);

var _c, _c2;

$RefreshReg$(_c, "NavContainer");
$RefreshReg$(_c2, "Nav");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2LmpzIl0sIm5hbWVzIjpbImNyZWF0ZU1lZGlhIiwiYnJlYWtwb2ludHMiLCJtb2JpbGUiLCJ0YWJsZXQiLCJjb21wdXRlciIsIk1lZGlhQ29udGV4dFByb3ZpZGVyIiwiTmF2Q29udGFpbmVyIiwicHJvcHMiLCJjaGlsZHJlbiIsImJhY2tncm91bmQiLCJOYXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7bUJBTStCQSxrRUFBVyxDQUFDO0FBQzFDQyxhQUFXLEVBQUU7QUFDWkMsVUFBTSxFQUFFLENBREk7QUFFWkMsVUFBTSxFQUFFLEdBRkk7QUFHWkMsWUFBUSxFQUFFO0FBSEU7QUFENkIsQ0FBRCxDO0lBQW5DQyxvQixnQkFBQUEsb0I7O0FBUVAsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDeEJDLFFBRHdCLEdBQ1pELEtBRFksQ0FDeEJDLFFBRHdCO0FBRS9CLHNCQUNDO0FBQUEsNEJBQ0MscUVBQUMsc0RBQUQ7QUFDQyxXQUFLLEVBQUUsS0FEUjtBQUVDLGNBQVEsTUFGVDtBQUdDLGNBQVEsTUFIVDtBQUlDLGVBQVMsTUFKVjtBQUtDLFVBQUksRUFBQyxPQUxOO0FBTUMsV0FBSyxFQUFFO0FBQUNDLGtCQUFVLEVBQUU7QUFBYixPQU5SO0FBQUEsNkJBUUMscUVBQUMsMkRBQUQ7QUFBQSxnQ0FDQyxxRUFBQyxzREFBRCxDQUFNLElBQU47QUFBVyxZQUFFLEVBQUMsR0FBZDtBQUFrQixnQkFBTSxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUlDLHFFQUFDLHNEQUFELENBQU0sSUFBTjtBQUFXLGtCQUFRLEVBQUMsT0FBcEI7QUFBQSxpQ0FDQyxxRUFBQyx3REFBRDtBQUFRLGNBQUUsRUFBQyxHQUFYO0FBQWUsb0JBQVEsTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxFQXdCRUQsUUF4QkY7QUFBQSxrQkFERDtBQTZCQSxDQS9CRDs7S0FBTUYsWTs7QUFpQ04sSUFBTUksR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ0gsS0FBRCxFQUFXO0FBQUEsTUFDZkMsUUFEZSxHQUNIRCxLQURHLENBQ2ZDLFFBRGU7QUFFdEIsc0JBQ0MscUVBQUMsb0JBQUQ7QUFBQSwyQkFDQyxxRUFBQyxZQUFEO0FBQUEsZ0JBQWVBO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQUtBLENBUEQ7O01BQU1FLEc7QUFTU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42MTA0ODliYzc5ZjdjNjljMDQxYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVNZWRpYX0gZnJvbSAnQGFydHN5L2ZyZXNuZWwnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG5cdEJ1dHRvbixcclxuXHRDb250YWluZXIsXHJcblx0TWVudSxcclxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcblxyXG5jb25zdCB7TWVkaWFDb250ZXh0UHJvdmlkZXJ9ID0gY3JlYXRlTWVkaWEoe1xyXG5cdGJyZWFrcG9pbnRzOiB7XHJcblx0XHRtb2JpbGU6IDAsXHJcblx0XHR0YWJsZXQ6IDc2OCxcclxuXHRcdGNvbXB1dGVyOiAxMDI0LFxyXG5cdH0sXHJcbn0pXHJcblxyXG5jb25zdCBOYXZDb250YWluZXIgPSAocHJvcHMpID0+IHtcclxuXHRjb25zdCB7Y2hpbGRyZW59ID0gcHJvcHM7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxNZW51XHJcblx0XHRcdFx0Zml4ZWQ9eyd0b3AnfVxyXG5cdFx0XHRcdGludmVydGVkXHJcblx0XHRcdFx0cG9pbnRpbmdcclxuXHRcdFx0XHRzZWNvbmRhcnlcclxuXHRcdFx0XHRzaXplPSdsYXJnZSdcclxuXHRcdFx0XHRzdHlsZT17e2JhY2tncm91bmQ6ICdibGFjayd9fVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PENvbnRhaW5lcj5cclxuXHRcdFx0XHRcdDxNZW51Lkl0ZW0gYXM9J2EnIGFjdGl2ZT5cclxuXHRcdFx0XHRcdFx0SG9tZVxyXG5cdFx0XHRcdFx0PC9NZW51Lkl0ZW0+XHJcblx0XHRcdFx0XHQ8TWVudS5JdGVtIHBvc2l0aW9uPSdyaWdodCc+XHJcblx0XHRcdFx0XHRcdDxCdXR0b24gYXM9J2EnIGludmVydGVkPlxyXG5cdFx0XHRcdFx0XHRcdEp1bXBcclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdHsvKjxCdXR0b24gYXM9J2EnIGludmVydGVkIHByaW1hcnkgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMC41ZW0nfX0+Ki99XHJcblx0XHRcdFx0XHRcdHsvKlNhdmUqL31cclxuXHRcdFx0XHRcdFx0ey8qPC9CdXR0b24+Ki99XHJcblx0XHRcdFx0XHQ8L01lbnUuSXRlbT5cclxuXHRcdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdFx0PC9NZW51PlxyXG5cclxuXHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0PC8+XHJcblx0KTtcclxuXHJcbn07XHJcblxyXG5jb25zdCBOYXYgPSAocHJvcHMpID0+IHtcclxuXHRjb25zdCB7Y2hpbGRyZW59ID0gcHJvcHM7XHJcblx0cmV0dXJuIChcclxuXHRcdDxNZWRpYUNvbnRleHRQcm92aWRlcj5cclxuXHRcdFx0PE5hdkNvbnRhaW5lcj57Y2hpbGRyZW59PC9OYXZDb250YWluZXI+XHJcblx0XHQ8L01lZGlhQ29udGV4dFByb3ZpZGVyPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdlxyXG4iXSwic291cmNlUm9vdCI6IiJ9