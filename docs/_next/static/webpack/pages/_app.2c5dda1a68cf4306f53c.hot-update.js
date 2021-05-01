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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "D:\\GithubProject\\ForcedContact-Website\\src\\components\\Nav.js",
    _this = undefined,
    _s = $RefreshSig$();






var _createMedia = Object(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_1__["createMedia"])({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024
  }
}),
    MediaContextProvider = _createMedia.MediaContextProvider;

var NavContainer = function NavContainer(props) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
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
          onClick: function onClick() {},
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
          position: "right",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            as: "a",
            inverted: true,
            children: "Select Chapter"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }, _this), children]
  }, void 0, true);
};

_s(NavContainer, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = NavContainer;

var Nav = function Nav(props) {
  var children = props.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MediaContextProvider, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavContainer, {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2LmpzIl0sIm5hbWVzIjpbImNyZWF0ZU1lZGlhIiwiYnJlYWtwb2ludHMiLCJtb2JpbGUiLCJ0YWJsZXQiLCJjb21wdXRlciIsIk1lZGlhQ29udGV4dFByb3ZpZGVyIiwiTmF2Q29udGFpbmVyIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjaGlsZHJlbiIsImJhY2tncm91bmQiLCJOYXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUtBOzttQkFFK0JBLGtFQUFXLENBQUM7QUFDMUNDLGFBQVcsRUFBRTtBQUNaQyxVQUFNLEVBQUUsQ0FESTtBQUVaQyxVQUFNLEVBQUUsR0FGSTtBQUdaQyxZQUFRLEVBQUU7QUFIRTtBQUQ2QixDQUFELEM7SUFBbkNDLG9CLGdCQUFBQSxvQjs7QUFRUCxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDL0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUQrQixNQUV4QkMsUUFGd0IsR0FFWkgsS0FGWSxDQUV4QkcsUUFGd0I7QUFHL0Isc0JBQ0M7QUFBQSw0QkFDQyxxRUFBQyxzREFBRDtBQUNDLFdBQUssRUFBRSxLQURSO0FBRUMsY0FBUSxNQUZUO0FBR0MsY0FBUSxNQUhUO0FBSUMsZUFBUyxNQUpWO0FBS0MsVUFBSSxFQUFDLE9BTE47QUFNQyxXQUFLLEVBQUU7QUFBQ0Msa0JBQVUsRUFBRTtBQUFiLE9BTlI7QUFBQSw2QkFRQyxxRUFBQywyREFBRDtBQUFBLGdDQUNDLHFFQUFDLHNEQUFELENBQU0sSUFBTjtBQUFXLFlBQUUsRUFBQyxHQUFkO0FBQWtCLGdCQUFNLE1BQXhCO0FBQXlCLGlCQUFPLEVBQUUsbUJBQUksQ0FFckMsQ0FGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQU1DLHFFQUFDLHNEQUFELENBQU0sSUFBTjtBQUFXLGtCQUFRLEVBQUMsT0FBcEI7QUFBQSxpQ0FDQyxxRUFBQyx3REFBRDtBQUFRLGNBQUUsRUFBQyxHQUFYO0FBQWUsb0JBQVEsTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxFQTBCRUQsUUExQkY7QUFBQSxrQkFERDtBQStCQSxDQWxDRDs7R0FBTUosWTtVQUNVRyxxRDs7O0tBRFZILFk7O0FBb0NOLElBQU1NLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNMLEtBQUQsRUFBVztBQUFBLE1BQ2ZHLFFBRGUsR0FDSEgsS0FERyxDQUNmRyxRQURlO0FBRXRCLHNCQUNDLHFFQUFDLG9CQUFEO0FBQUEsMkJBQ0MscUVBQUMsWUFBRDtBQUFBLGdCQUFlQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFLQSxDQVBEOztNQUFNRSxHO0FBU1NBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMmM1ZGRhMWE2OGNmNDMwNmY1M2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlTWVkaWF9IGZyb20gJ0BhcnRzeS9mcmVzbmVsJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuXHRCdXR0b24sXHJcblx0Q29udGFpbmVyLFxyXG5cdE1lbnUsXHJcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCB7TWVkaWFDb250ZXh0UHJvdmlkZXJ9ID0gY3JlYXRlTWVkaWEoe1xyXG5cdGJyZWFrcG9pbnRzOiB7XHJcblx0XHRtb2JpbGU6IDAsXHJcblx0XHR0YWJsZXQ6IDc2OCxcclxuXHRcdGNvbXB1dGVyOiAxMDI0LFxyXG5cdH0sXHJcbn0pXHJcblxyXG5jb25zdCBOYXZDb250YWluZXIgPSAocHJvcHMpID0+IHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdCB7Y2hpbGRyZW59ID0gcHJvcHM7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxNZW51XHJcblx0XHRcdFx0Zml4ZWQ9eyd0b3AnfVxyXG5cdFx0XHRcdGludmVydGVkXHJcblx0XHRcdFx0cG9pbnRpbmdcclxuXHRcdFx0XHRzZWNvbmRhcnlcclxuXHRcdFx0XHRzaXplPSdsYXJnZSdcclxuXHRcdFx0XHRzdHlsZT17e2JhY2tncm91bmQ6ICdibGFjayd9fVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PENvbnRhaW5lcj5cclxuXHRcdFx0XHRcdDxNZW51Lkl0ZW0gYXM9J2EnIGFjdGl2ZSBvbkNsaWNrPXsoKT0+e1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRIb21lXHJcblx0XHRcdFx0XHQ8L01lbnUuSXRlbT5cclxuXHRcdFx0XHRcdDxNZW51Lkl0ZW0gcG9zaXRpb249J3JpZ2h0Jz5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBhcz0nYScgaW52ZXJ0ZWQ+XHJcblx0XHRcdFx0XHRcdFx0U2VsZWN0IENoYXB0ZXJcclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdHsvKjxCdXR0b24gYXM9J2EnIGludmVydGVkIHByaW1hcnkgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMC41ZW0nfX0+Ki99XHJcblx0XHRcdFx0XHRcdHsvKlNhdmUqL31cclxuXHRcdFx0XHRcdFx0ey8qPC9CdXR0b24+Ki99XHJcblx0XHRcdFx0XHQ8L01lbnUuSXRlbT5cclxuXHRcdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdFx0PC9NZW51PlxyXG5cclxuXHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0PC8+XHJcblx0KTtcclxuXHJcbn07XHJcblxyXG5jb25zdCBOYXYgPSAocHJvcHMpID0+IHtcclxuXHRjb25zdCB7Y2hpbGRyZW59ID0gcHJvcHM7XHJcblx0cmV0dXJuIChcclxuXHRcdDxNZWRpYUNvbnRleHRQcm92aWRlcj5cclxuXHRcdFx0PE5hdkNvbnRhaW5lcj57Y2hpbGRyZW59PC9OYXZDb250YWluZXI+XHJcblx0XHQ8L01lZGlhQ29udGV4dFByb3ZpZGVyPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdlxyXG4iXSwic291cmNlUm9vdCI6IiJ9