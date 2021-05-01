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
          style: {
            cursor: 'mouse'
          },
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
            children: "Select Chapter"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2LmpzIl0sIm5hbWVzIjpbImNyZWF0ZU1lZGlhIiwiYnJlYWtwb2ludHMiLCJtb2JpbGUiLCJ0YWJsZXQiLCJjb21wdXRlciIsIk1lZGlhQ29udGV4dFByb3ZpZGVyIiwiTmF2Q29udGFpbmVyIiwicHJvcHMiLCJjaGlsZHJlbiIsImJhY2tncm91bmQiLCJjdXJzb3IiLCJOYXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7bUJBTStCQSxrRUFBVyxDQUFDO0FBQzFDQyxhQUFXLEVBQUU7QUFDWkMsVUFBTSxFQUFFLENBREk7QUFFWkMsVUFBTSxFQUFFLEdBRkk7QUFHWkMsWUFBUSxFQUFFO0FBSEU7QUFENkIsQ0FBRCxDO0lBQW5DQyxvQixnQkFBQUEsb0I7O0FBUVAsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDeEJDLFFBRHdCLEdBQ1pELEtBRFksQ0FDeEJDLFFBRHdCO0FBRS9CLHNCQUNDO0FBQUEsNEJBQ0MscUVBQUMsc0RBQUQ7QUFDQyxXQUFLLEVBQUUsS0FEUjtBQUVDLGNBQVEsTUFGVDtBQUdDLGNBQVEsTUFIVDtBQUlDLGVBQVMsTUFKVjtBQUtDLFVBQUksRUFBQyxPQUxOO0FBTUMsV0FBSyxFQUFFO0FBQUNDLGtCQUFVLEVBQUU7QUFBYixPQU5SO0FBQUEsNkJBUUMscUVBQUMsMkRBQUQ7QUFBQSxnQ0FDQyxxRUFBQyxzREFBRCxDQUFNLElBQU47QUFBVyxZQUFFLEVBQUMsR0FBZDtBQUFrQixnQkFBTSxNQUF4QjtBQUF5QixlQUFLLEVBQUU7QUFBQ0Msa0JBQU0sRUFBQztBQUFSLFdBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBSUMscUVBQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQVcsa0JBQVEsRUFBQyxPQUFwQjtBQUFBLGlDQUNDLHFFQUFDLHdEQUFEO0FBQVEsY0FBRSxFQUFDLEdBQVg7QUFBZSxvQkFBUSxNQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELEVBd0JFRixRQXhCRjtBQUFBLGtCQUREO0FBNkJBLENBL0JEOztLQUFNRixZOztBQWlDTixJQUFNSyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDSixLQUFELEVBQVc7QUFBQSxNQUNmQyxRQURlLEdBQ0hELEtBREcsQ0FDZkMsUUFEZTtBQUV0QixzQkFDQyxxRUFBQyxvQkFBRDtBQUFBLDJCQUNDLHFFQUFDLFlBQUQ7QUFBQSxnQkFBZUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBS0EsQ0FQRDs7TUFBTUcsRztBQVNTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmVmOTUwM2M1ODYyZDY3ZTg1YjNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZU1lZGlhfSBmcm9tICdAYXJ0c3kvZnJlc25lbCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcblx0QnV0dG9uLFxyXG5cdENvbnRhaW5lcixcclxuXHRNZW51LFxyXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuXHJcbmNvbnN0IHtNZWRpYUNvbnRleHRQcm92aWRlcn0gPSBjcmVhdGVNZWRpYSh7XHJcblx0YnJlYWtwb2ludHM6IHtcclxuXHRcdG1vYmlsZTogMCxcclxuXHRcdHRhYmxldDogNzY4LFxyXG5cdFx0Y29tcHV0ZXI6IDEwMjQsXHJcblx0fSxcclxufSlcclxuXHJcbmNvbnN0IE5hdkNvbnRhaW5lciA9IChwcm9wcykgPT4ge1xyXG5cdGNvbnN0IHtjaGlsZHJlbn0gPSBwcm9wcztcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PE1lbnVcclxuXHRcdFx0XHRmaXhlZD17J3RvcCd9XHJcblx0XHRcdFx0aW52ZXJ0ZWRcclxuXHRcdFx0XHRwb2ludGluZ1xyXG5cdFx0XHRcdHNlY29uZGFyeVxyXG5cdFx0XHRcdHNpemU9J2xhcmdlJ1xyXG5cdFx0XHRcdHN0eWxlPXt7YmFja2dyb3VuZDogJ2JsYWNrJ319XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8Q29udGFpbmVyPlxyXG5cdFx0XHRcdFx0PE1lbnUuSXRlbSBhcz0nYScgYWN0aXZlIHN0eWxlPXt7Y3Vyc29yOidtb3VzZSd9fT5cclxuXHRcdFx0XHRcdFx0SG9tZVxyXG5cdFx0XHRcdFx0PC9NZW51Lkl0ZW0+XHJcblx0XHRcdFx0XHQ8TWVudS5JdGVtIHBvc2l0aW9uPSdyaWdodCc+XHJcblx0XHRcdFx0XHRcdDxCdXR0b24gYXM9J2EnIGludmVydGVkPlxyXG5cdFx0XHRcdFx0XHRcdFNlbGVjdCBDaGFwdGVyXHJcblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHR7Lyo8QnV0dG9uIGFzPSdhJyBpbnZlcnRlZCBwcmltYXJ5IHN0eWxlPXt7bWFyZ2luTGVmdDogJzAuNWVtJ319PiovfVxyXG5cdFx0XHRcdFx0XHR7LypTYXZlKi99XHJcblx0XHRcdFx0XHRcdHsvKjwvQnV0dG9uPiovfVxyXG5cdFx0XHRcdFx0PC9NZW51Lkl0ZW0+XHJcblx0XHRcdFx0PC9Db250YWluZXI+XHJcblx0XHRcdDwvTWVudT5cclxuXHJcblx0XHRcdHtjaGlsZHJlbn1cclxuXHRcdDwvPlxyXG5cdCk7XHJcblxyXG59O1xyXG5cclxuY29uc3QgTmF2ID0gKHByb3BzKSA9PiB7XHJcblx0Y29uc3Qge2NoaWxkcmVufSA9IHByb3BzO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8TWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcblx0XHRcdDxOYXZDb250YWluZXI+e2NoaWxkcmVufTwvTmF2Q29udGFpbmVyPlxyXG5cdFx0PC9NZWRpYUNvbnRleHRQcm92aWRlcj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==