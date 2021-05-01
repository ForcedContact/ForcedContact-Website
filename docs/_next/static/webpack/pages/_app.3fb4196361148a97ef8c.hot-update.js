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
          onClick: function onClick() {
            router.push('/');
          },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2LmpzIl0sIm5hbWVzIjpbImNyZWF0ZU1lZGlhIiwiYnJlYWtwb2ludHMiLCJtb2JpbGUiLCJ0YWJsZXQiLCJjb21wdXRlciIsIk1lZGlhQ29udGV4dFByb3ZpZGVyIiwiTmF2Q29udGFpbmVyIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjaGlsZHJlbiIsImJhY2tncm91bmQiLCJwdXNoIiwiTmF2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFLQTs7bUJBRStCQSxrRUFBVyxDQUFDO0FBQzFDQyxhQUFXLEVBQUU7QUFDWkMsVUFBTSxFQUFFLENBREk7QUFFWkMsVUFBTSxFQUFFLEdBRkk7QUFHWkMsWUFBUSxFQUFFO0FBSEU7QUFENkIsQ0FBRCxDO0lBQW5DQyxvQixnQkFBQUEsb0I7O0FBUVAsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQy9CLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEK0IsTUFFeEJDLFFBRndCLEdBRVpILEtBRlksQ0FFeEJHLFFBRndCO0FBRy9CLHNCQUNDO0FBQUEsNEJBQ0MscUVBQUMsc0RBQUQ7QUFDQyxXQUFLLEVBQUUsS0FEUjtBQUVDLGNBQVEsTUFGVDtBQUdDLGNBQVEsTUFIVDtBQUlDLGVBQVMsTUFKVjtBQUtDLFVBQUksRUFBQyxPQUxOO0FBTUMsV0FBSyxFQUFFO0FBQUNDLGtCQUFVLEVBQUU7QUFBYixPQU5SO0FBQUEsNkJBUUMscUVBQUMsMkRBQUQ7QUFBQSxnQ0FDQyxxRUFBQyxzREFBRCxDQUFNLElBQU47QUFBVyxZQUFFLEVBQUMsR0FBZDtBQUFrQixnQkFBTSxNQUF4QjtBQUF5QixpQkFBTyxFQUFFLG1CQUFJO0FBQ3JDSCxrQkFBTSxDQUFDSSxJQUFQLENBQVksR0FBWjtBQUNBLFdBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFNQyxxRUFBQyxzREFBRCxDQUFNLElBQU47QUFBVyxrQkFBUSxFQUFDLE9BQXBCO0FBQUEsaUNBQ0MscUVBQUMsd0RBQUQ7QUFBUSxjQUFFLEVBQUMsR0FBWDtBQUFlLG9CQUFRLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsRUEwQkVGLFFBMUJGO0FBQUEsa0JBREQ7QUErQkEsQ0FsQ0Q7O0dBQU1KLFk7VUFDVUcscUQ7OztLQURWSCxZOztBQW9DTixJQUFNTyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDTixLQUFELEVBQVc7QUFBQSxNQUNmRyxRQURlLEdBQ0hILEtBREcsQ0FDZkcsUUFEZTtBQUV0QixzQkFDQyxxRUFBQyxvQkFBRDtBQUFBLDJCQUNDLHFFQUFDLFlBQUQ7QUFBQSxnQkFBZUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBS0EsQ0FQRDs7TUFBTUcsRztBQVNTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjNmYjQxOTYzNjExNDhhOTdlZjhjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZU1lZGlhfSBmcm9tICdAYXJ0c3kvZnJlc25lbCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcblx0QnV0dG9uLFxyXG5cdENvbnRhaW5lcixcclxuXHRNZW51LFxyXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3Qge01lZGlhQ29udGV4dFByb3ZpZGVyfSA9IGNyZWF0ZU1lZGlhKHtcclxuXHRicmVha3BvaW50czoge1xyXG5cdFx0bW9iaWxlOiAwLFxyXG5cdFx0dGFibGV0OiA3NjgsXHJcblx0XHRjb21wdXRlcjogMTAyNCxcclxuXHR9LFxyXG59KVxyXG5cclxuY29uc3QgTmF2Q29udGFpbmVyID0gKHByb3BzKSA9PiB7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3Qge2NoaWxkcmVufSA9IHByb3BzO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8TWVudVxyXG5cdFx0XHRcdGZpeGVkPXsndG9wJ31cclxuXHRcdFx0XHRpbnZlcnRlZFxyXG5cdFx0XHRcdHBvaW50aW5nXHJcblx0XHRcdFx0c2Vjb25kYXJ5XHJcblx0XHRcdFx0c2l6ZT0nbGFyZ2UnXHJcblx0XHRcdFx0c3R5bGU9e3tiYWNrZ3JvdW5kOiAnYmxhY2snfX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxDb250YWluZXI+XHJcblx0XHRcdFx0XHQ8TWVudS5JdGVtIGFzPSdhJyBhY3RpdmUgb25DbGljaz17KCk9PntcclxuXHRcdFx0XHRcdFx0cm91dGVyLnB1c2goJy8nKTtcclxuXHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRIb21lXHJcblx0XHRcdFx0XHQ8L01lbnUuSXRlbT5cclxuXHRcdFx0XHRcdDxNZW51Lkl0ZW0gcG9zaXRpb249J3JpZ2h0Jz5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBhcz0nYScgaW52ZXJ0ZWQ+XHJcblx0XHRcdFx0XHRcdFx0U2VsZWN0IENoYXB0ZXJcclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdHsvKjxCdXR0b24gYXM9J2EnIGludmVydGVkIHByaW1hcnkgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMC41ZW0nfX0+Ki99XHJcblx0XHRcdFx0XHRcdHsvKlNhdmUqL31cclxuXHRcdFx0XHRcdFx0ey8qPC9CdXR0b24+Ki99XHJcblx0XHRcdFx0XHQ8L01lbnUuSXRlbT5cclxuXHRcdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdFx0PC9NZW51PlxyXG5cclxuXHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0PC8+XHJcblx0KTtcclxuXHJcbn07XHJcblxyXG5jb25zdCBOYXYgPSAocHJvcHMpID0+IHtcclxuXHRjb25zdCB7Y2hpbGRyZW59ID0gcHJvcHM7XHJcblx0cmV0dXJuIChcclxuXHRcdDxNZWRpYUNvbnRleHRQcm92aWRlcj5cclxuXHRcdFx0PE5hdkNvbnRhaW5lcj57Y2hpbGRyZW59PC9OYXZDb250YWluZXI+XHJcblx0XHQ8L01lZGlhQ29udGV4dFByb3ZpZGVyPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdlxyXG4iXSwic291cmNlUm9vdCI6IiJ9