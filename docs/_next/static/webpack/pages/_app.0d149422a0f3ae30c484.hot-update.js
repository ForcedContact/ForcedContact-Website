webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/@artsy/fresnel/dist/Breakpoints.js":
/*!*********************************************************!*\
  !*** ./node_modules/@artsy/fresnel/dist/Breakpoints.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Breakpoints = exports.BreakpointConstraint = void 0;

var _Utils = __webpack_require__(/*! ./Utils */ "./node_modules/@artsy/fresnel/dist/Utils.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function breakpointKey(breakpoint) {
  return Array.isArray(breakpoint) ? breakpoint.join("-") : breakpoint;
}

var BreakpointConstraint;
/**
 * Encapsulates all breakpoint data needed by the Media component. The data is
 * generated on initialization so no further runtime work is necessary.
 */

exports.BreakpointConstraint = BreakpointConstraint;

(function (BreakpointConstraint) {
  BreakpointConstraint["at"] = "at";
  BreakpointConstraint["lessThan"] = "lessThan";
  BreakpointConstraint["greaterThan"] = "greaterThan";
  BreakpointConstraint["greaterThanOrEqual"] = "greaterThanOrEqual";
  BreakpointConstraint["between"] = "between";
})(BreakpointConstraint || (exports.BreakpointConstraint = BreakpointConstraint = {}));

var Breakpoints =
/*#__PURE__*/
function () {
  _createClass(Breakpoints, null, [{
    key: "validKeys",
    value: function validKeys() {
      return [BreakpointConstraint.at, BreakpointConstraint.lessThan, BreakpointConstraint.greaterThan, BreakpointConstraint.greaterThanOrEqual, BreakpointConstraint.between];
    }
  }]);

  function Breakpoints(_breakpoints) {
    var _this = this,
        _this$_mediaQueries;

    _classCallCheck(this, Breakpoints);

    _defineProperty(this, "_sortedBreakpoints", void 0);

    _defineProperty(this, "_breakpoints", void 0);

    _defineProperty(this, "_mediaQueries", void 0);

    _defineProperty(this, "findBreakpointsForWidths", function (fromWidth, throughWidth) {
      var fromBreakpoint = _this.findBreakpointAtWidth(fromWidth);

      if (!fromBreakpoint) {
        return undefined;
      }

      var throughBreakpoint = _this.findBreakpointAtWidth(throughWidth);

      if (!throughBreakpoint || fromBreakpoint === throughBreakpoint) {
        return [fromBreakpoint];
      } else {
        return _this._sortedBreakpoints.slice(_this._sortedBreakpoints.indexOf(fromBreakpoint), _this._sortedBreakpoints.indexOf(throughBreakpoint) + 1);
      }
    });

    _defineProperty(this, "findBreakpointAtWidth", function (width) {
      return _this._sortedBreakpoints.find(function (breakpoint, i) {
        var nextBreakpoint = _this._sortedBreakpoints[i + 1];

        if (nextBreakpoint) {
          return width >= _this._breakpoints[breakpoint] && width < _this._breakpoints[nextBreakpoint];
        } else {
          return width >= _this._breakpoints[breakpoint];
        }
      });
    });

    _defineProperty(this, "valuesWithBreakpointProps", function (values) {
      var max = values.length;
      var valueBreakpoints = [];
      var lastTuple;

      _this._sortedBreakpoints.forEach(function (breakpoint, i) {
        var value = values[i];

        if (i < max && (!lastTuple || lastTuple[0] !== value)) {
          lastTuple = [value, [breakpoint]];
          valueBreakpoints.push(lastTuple);
        } else {
          lastTuple[1].push(breakpoint);
        }
      });

      return valueBreakpoints.map(function (_ref, i) {
        var _ref2 = _slicedToArray(_ref, 2),
            value = _ref2[0],
            breakpoints = _ref2[1];

        var props = {};

        if (i === valueBreakpoints.length - 1) {
          props.greaterThanOrEqual = breakpoints[0];
        } else if (breakpoints.length === 1) {
          props.at = breakpoints[0];
        } else {
          // TODO: This is less than ideal, would be good to have a `through`
          //       prop, which unlike `between` is inclusive.
          props.between = [breakpoints[0], valueBreakpoints[i + 1][1][0]];
        }

        return [value, props];
      });
    });

    this._breakpoints = _breakpoints;
    this._sortedBreakpoints = Object.keys(_breakpoints).map(function (breakpoint) {
      return [breakpoint, _breakpoints[breakpoint]];
    }).sort(function (a, b) {
      return a[1] < b[1] ? -1 : 1;
    }).map(function (breakpointAndValue) {
      return breakpointAndValue[0];
    }); // List of all possible and valid `between` combinations

    var betweenCombinations = this._sortedBreakpoints.slice(0, -1).reduce(function (acc, b1, i) {
      return _toConsumableArray(acc).concat(_toConsumableArray(_this._sortedBreakpoints.slice(i + 1).map(function (b2) {
        return [b1, b2];
      })));
    }, []);

    this._mediaQueries = (_this$_mediaQueries = {}, _defineProperty(_this$_mediaQueries, BreakpointConstraint.at, this._createBreakpointQueries(BreakpointConstraint.at, this._sortedBreakpoints)), _defineProperty(_this$_mediaQueries, BreakpointConstraint.lessThan, this._createBreakpointQueries(BreakpointConstraint.lessThan, this._sortedBreakpoints.slice(1))), _defineProperty(_this$_mediaQueries, BreakpointConstraint.greaterThan, this._createBreakpointQueries(BreakpointConstraint.greaterThan, this._sortedBreakpoints.slice(0, -1))), _defineProperty(_this$_mediaQueries, BreakpointConstraint.greaterThanOrEqual, this._createBreakpointQueries(BreakpointConstraint.greaterThanOrEqual, this._sortedBreakpoints)), _defineProperty(_this$_mediaQueries, BreakpointConstraint.between, this._createBreakpointQueries(BreakpointConstraint.between, betweenCombinations)), _this$_mediaQueries);
  }

  _createClass(Breakpoints, [{
    key: "toVisibleAtBreakpointSet",
    value: function toVisibleAtBreakpointSet(breakpointProps) {
      breakpointProps = this._normalizeProps(breakpointProps);

      if (breakpointProps.lessThan) {
        var breakpointIndex = this.sortedBreakpoints.findIndex(function (bp) {
          return bp === breakpointProps.lessThan;
        });
        return this.sortedBreakpoints.slice(0, breakpointIndex);
      } else if (breakpointProps.greaterThan) {
        var _breakpointIndex = this.sortedBreakpoints.findIndex(function (bp) {
          return bp === breakpointProps.greaterThan;
        });

        return this.sortedBreakpoints.slice(_breakpointIndex + 1);
      } else if (breakpointProps.greaterThanOrEqual) {
        var _breakpointIndex2 = this.sortedBreakpoints.findIndex(function (bp) {
          return bp === breakpointProps.greaterThanOrEqual;
        });

        return this.sortedBreakpoints.slice(_breakpointIndex2);
      } else if (breakpointProps.between) {
        var _between = breakpointProps.between;
        var fromBreakpointIndex = this.sortedBreakpoints.findIndex(function (bp) {
          return bp === _between[0];
        });
        var toBreakpointIndex = this.sortedBreakpoints.findIndex(function (bp) {
          return bp === _between[1];
        });
        return this.sortedBreakpoints.slice(fromBreakpointIndex, toBreakpointIndex);
      }

      return [];
    }
  }, {
    key: "toRuleSets",
    value: function toRuleSets() {
      var _this2 = this;

      var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Breakpoints.validKeys();
      var selectedMediaQueries = keys.reduce(function (mediaQueries, query) {
        mediaQueries[query] = _this2._mediaQueries[query];
        return mediaQueries;
      }, {});
      return Object.entries(selectedMediaQueries).reduce(function (acc, _ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            type = _ref4[0],
            queries = _ref4[1];

        queries.forEach(function (query, breakpoint) {
          // We need to invert the query, such that it matches when we want the
          // element to be hidden.
          acc.push((0, _Utils.createRuleSet)((0, _Utils.createClassName)(type, breakpoint), "not all and ".concat(query)));
        });
        return acc;
      }, []);
    }
  }, {
    key: "shouldRenderMediaQuery",
    value: function shouldRenderMediaQuery(breakpointProps, onlyRenderAt) {
      var _this3 = this;

      breakpointProps = this._normalizeProps(breakpointProps);

      if (breakpointProps.lessThan) {
        var width = this._breakpoints[breakpointProps.lessThan];
        var lowestAllowedWidth = Math.min.apply(Math, _toConsumableArray(onlyRenderAt.map(function (breakpoint) {
          return _this3._breakpoints[breakpoint];
        })));
        return lowestAllowedWidth < width;
      } else if (breakpointProps.greaterThan) {
        var _width = this._breakpoints[this._findNextBreakpoint(breakpointProps.greaterThan)];

        var highestAllowedWidth = Math.max.apply(Math, _toConsumableArray(onlyRenderAt.map(function (breakpoint) {
          return _this3._breakpoints[breakpoint];
        })));
        return highestAllowedWidth >= _width;
      } else if (breakpointProps.greaterThanOrEqual) {
        var _width2 = this._breakpoints[breakpointProps.greaterThanOrEqual];

        var _highestAllowedWidth = Math.max.apply(Math, _toConsumableArray(onlyRenderAt.map(function (breakpoint) {
          return _this3._breakpoints[breakpoint];
        })));

        return _highestAllowedWidth >= _width2;
      } else if (breakpointProps.between) {
        // TODO: This is the only useful breakpoint to negate, but we’ll
        //       we’ll see when/if we need it. We could then also decide
        //       to add `oustide`.
        var fromWidth = this._breakpoints[breakpointProps.between[0]];
        var toWidth = this._breakpoints[breakpointProps.between[1]];
        var allowedWidths = onlyRenderAt.map(function (breakpoint) {
          return _this3._breakpoints[breakpoint];
        });
        return !(Math.max.apply(Math, _toConsumableArray(allowedWidths)) < fromWidth || Math.min.apply(Math, _toConsumableArray(allowedWidths)) >= toWidth);
      }

      return false;
    }
  }, {
    key: "_normalizeProps",
    value: function _normalizeProps(breakpointProps) {
      if (breakpointProps.at) {
        var fromIndex = this._sortedBreakpoints.indexOf(breakpointProps.at);

        var to = this._sortedBreakpoints[fromIndex + 1];
        return to ? {
          between: [breakpointProps.at, to]
        } : {
          greaterThanOrEqual: breakpointProps.at
        };
      }

      return breakpointProps;
    }
  }, {
    key: "_createBreakpointQuery",
    value: function _createBreakpointQuery(breakpointProps) {
      breakpointProps = this._normalizeProps(breakpointProps);

      if (breakpointProps.lessThan) {
        var width = this._breakpoints[breakpointProps.lessThan];
        return "(max-width:".concat(width - 1, "px)");
      } else if (breakpointProps.greaterThan) {
        var _width3 = this._breakpoints[this._findNextBreakpoint(breakpointProps.greaterThan)];

        return "(min-width:".concat(_width3, "px)");
      } else if (breakpointProps.greaterThanOrEqual) {
        var _width4 = this._breakpoints[breakpointProps.greaterThanOrEqual];
        return "(min-width:".concat(_width4, "px)");
      } else if (breakpointProps.between) {
        // TODO: This is the only useful breakpoint to negate, but we’ll
        //       we’ll see when/if we need it. We could then also decide
        //       to add `outside`.
        var fromWidth = this._breakpoints[breakpointProps.between[0]];
        var toWidth = this._breakpoints[breakpointProps.between[1]];
        return "(min-width:".concat(fromWidth, "px) and (max-width:").concat(toWidth - 1, "px)");
      }

      throw new Error("Unexpected breakpoint props: ".concat(JSON.stringify(breakpointProps)));
    }
  }, {
    key: "_createBreakpointQueries",
    value: function _createBreakpointQueries(key, forBreakpoints) {
      var _this4 = this;

      return forBreakpoints.reduce(function (map, breakpoint) {
        map.set(breakpointKey(breakpoint), _this4._createBreakpointQuery(_defineProperty({}, key, breakpoint)));
        return map;
      }, new Map());
    }
  }, {
    key: "_findNextBreakpoint",
    value: function _findNextBreakpoint(breakpoint) {
      var nextBreakpoint = this._sortedBreakpoints[this._sortedBreakpoints.indexOf(breakpoint) + 1];

      if (!nextBreakpoint) {
        throw new Error("There is no breakpoint larger than ".concat(breakpoint));
      }

      return nextBreakpoint;
    }
  }, {
    key: "sortedBreakpoints",
    get: function get() {
      return this._sortedBreakpoints;
    }
  }, {
    key: "dynamicResponsiveMediaQueries",
    get: function get() {
      return Array.from(this._mediaQueries[BreakpointConstraint.at].entries()).reduce(function (acc, _ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            k = _ref6[0],
            v = _ref6[1];

        return _objectSpread({}, acc, _defineProperty({}, k, v));
      }, {});
    }
  }, {
    key: "largestBreakpoint",
    get: function get() {
      return this._sortedBreakpoints[this._sortedBreakpoints.length - 1];
    }
  }]);

  return Breakpoints;
}();

exports.Breakpoints = Breakpoints;
//# sourceMappingURL=Breakpoints.js.map

/***/ }),

/***/ "./node_modules/@artsy/fresnel/dist/DynamicResponsive.js":
/*!***************************************************************!*\
  !*** ./node_modules/@artsy/fresnel/dist/DynamicResponsive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createResponsiveComponents = createResponsiveComponents;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var shallowEqual = function shallowEqual(a, b) {
  for (var _key in a) {
    if (a[_key] !== b[_key]) return false;
  }

  return true;
};
/** TODO */


function createResponsiveComponents() {
  var ResponsiveContext = _react.default.createContext({});

  ResponsiveContext.displayName = "Media.DynamicContext";
  var ResponsiveConsumer = ResponsiveContext.Consumer;
  return {
    Consumer: ResponsiveConsumer,
    Provider:
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(ResponsiveProvider, _React$Component);

      function ResponsiveProvider(props) {
        var _this;

        _classCallCheck(this, ResponsiveProvider);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(ResponsiveProvider).call(this, props));

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isSupportedEnvironment", function () {
          return typeof window !== "undefined" && typeof window.matchMedia !== "undefined";
        });

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setupMatchers", function (mediaQueries) {
          return Object.keys(mediaQueries).reduce(function (matchers, key) {
            return _objectSpread({}, matchers, _defineProperty({}, key, window.matchMedia(mediaQueries[key])));
          }, {});
        });

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "checkMatchers", function (mediaQueryMatchers) {
          return Object.keys(mediaQueryMatchers).reduce(function (matches, key) {
            return _objectSpread({}, matches, _defineProperty({}, key, mediaQueryMatchers[key].matches));
          }, {});
        });

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "mediaQueryStatusChangedCallback", function () {
          var mediaQueryMatches = _this.checkMatchers(_this.state.mediaQueryMatchers);

          _this.setState({
            mediaQueryMatches: mediaQueryMatches
          });
        });

        var _mediaQueryMatchers = undefined;

        var _mediaQueryMatches;

        if (_this.isSupportedEnvironment()) {
          _mediaQueryMatchers = _this.setupMatchers(props.mediaQueries);
          _mediaQueryMatches = _this.checkMatchers(_mediaQueryMatchers);
        } else {
          _mediaQueryMatches = Object.keys(props.mediaQueries).reduce(function (matches, key) {
            return _objectSpread({}, matches, _defineProperty({}, key, !!props.initialMatchingMediaQueries && props.initialMatchingMediaQueries.includes(key)));
          }, {});
        }

        _this.state = {
          mediaQueryMatchers: _mediaQueryMatchers,
          mediaQueryMatches: _mediaQueryMatches
        };
        return _this;
      }

      _createClass(ResponsiveProvider, [{
        key: "componentDidMount",
        // Lifecycle methods
        value: function componentDidMount() {
          if (this.state.mediaQueryMatchers) {
            var mediaQueryStatusChangedCallback = this.mediaQueryStatusChangedCallback;
            Object.values(this.state.mediaQueryMatchers).forEach(function (matcher) {
              matcher.addListener(mediaQueryStatusChangedCallback);
            });
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (this.state.mediaQueryMatchers) {
            var mediaQueryStatusChangedCallback = this.mediaQueryStatusChangedCallback;
            Object.values(this.state.mediaQueryMatchers).forEach(function (matcher) {
              return matcher.removeListener(mediaQueryStatusChangedCallback);
            });
          }
        }
      }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
          if (!this.state.mediaQueryMatchers) return false;
          if (nextProps.children !== this.props.children) return true;

          if (shallowEqual(this.state.mediaQueryMatches, nextState.mediaQueryMatches)) {
            return false;
          }

          return true;
        }
      }, {
        key: "render",
        value: function render() {
          return _react.default.createElement(ResponsiveContext.Provider, {
            value: this.state.mediaQueryMatches
          }, this.props.children);
        }
      }]);

      return ResponsiveProvider;
    }(_react.default.Component)
  };
}
//# sourceMappingURL=DynamicResponsive.js.map

/***/ }),

/***/ "./node_modules/@artsy/fresnel/dist/Interactions.js":
/*!**********************************************************!*\
  !*** ./node_modules/@artsy/fresnel/dist/Interactions.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Interactions = exports.InteractionKey = void 0;

var _Utils = __webpack_require__(/*! ./Utils */ "./node_modules/@artsy/fresnel/dist/Utils.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InteractionKey;
/**
 * Encapsulates all interaction data needed by the Media component. The data is
 * generated on initialization so no further runtime work is necessary.
 */

exports.InteractionKey = InteractionKey;

(function (InteractionKey) {
  InteractionKey["interaction"] = "interaction";
})(InteractionKey || (exports.InteractionKey = InteractionKey = {}));

var Interactions =
/*#__PURE__*/
function () {
  _createClass(Interactions, null, [{
    key: "validKeys",
    value: function validKeys() {
      return [InteractionKey.interaction];
    }
  }]);

  function Interactions(interactions) {
    _classCallCheck(this, Interactions);

    _defineProperty(this, "_interactions", void 0);

    this._interactions = interactions;
  }

  _createClass(Interactions, [{
    key: "toRuleSets",
    value: function toRuleSets() {
      return Object.entries(this._interactions).reduce(function (acc, _ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            name = _ref2[0],
            query = _ref2[1];

        return _toConsumableArray(acc).concat([(0, _Utils.createRuleSet)((0, _Utils.createClassName)(InteractionKey.interaction, name), query)]);
      }, []);
    }
  }, {
    key: "shouldRenderMediaQuery",
    value: function shouldRenderMediaQuery(interaction, onlyMatch) {
      return !!(onlyMatch && onlyMatch.includes(interaction));
    }
  }, {
    key: "interactions",
    get: function get() {
      return Object.keys(this._interactions);
    }
  }, {
    key: "dynamicResponsiveMediaQueries",
    get: function get() {
      return Object.entries(this._interactions).reduce(function (acc, _ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            name = _ref4[0],
            query = _ref4[1];

        return _objectSpread({}, acc, _defineProperty({}, name, query));
      }, {});
    }
  }]);

  return Interactions;
}();

exports.Interactions = Interactions;
//# sourceMappingURL=Interactions.js.map

/***/ }),

/***/ "./node_modules/@artsy/fresnel/dist/Media.js":
/*!***************************************************!*\
  !*** ./node_modules/@artsy/fresnel/dist/Media.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMedia = createMedia;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _DynamicResponsive = __webpack_require__(/*! ./DynamicResponsive */ "./node_modules/@artsy/fresnel/dist/DynamicResponsive.js");

var _MediaQueries = __webpack_require__(/*! ./MediaQueries */ "./node_modules/@artsy/fresnel/dist/MediaQueries.js");

var _Utils = __webpack_require__(/*! ./Utils */ "./node_modules/@artsy/fresnel/dist/Utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * This is used to generate a Media component, its context provider, and CSS
 * rules based on your application’s breakpoints and interactions.
 *
 * Note that the interaction queries are entirely up to you to define and they
 * should be written in such a way that they match when you want the element to
 * be hidden.
 *
 * @example
 *
   ```tsx
   const MyAppMedia = createMedia({
     breakpoints: {
       xs: 0,
       sm: 768,
       md: 900
       lg: 1024,
       xl: 1192,
     },
     interactions: {
       hover: `not all and (hover:hover)`
     },
   })

   export const Media = MyAppMedia.Media
   export const MediaContextProvider = MyAppMedia.MediaContextProvider
   export const createMediaStyle = MyAppMedia.createMediaStyle
   ```
 *
 */
function createMedia(config) {
  var _class, _temp;

  var mediaQueries = new _MediaQueries.MediaQueries(config.breakpoints, config.interactions || {});
  var DynamicResponsive = (0, _DynamicResponsive.createResponsiveComponents)();

  var MediaContext = _react.default.createContext({});

  MediaContext.displayName = "Media.Context";

  var MediaParentContext = _react.default.createContext({
    hasParentMedia: false,
    breakpointProps: {}
  });

  MediaContext.displayName = "MediaParent.Context";

  var MediaContextProvider = function MediaContextProvider(_ref) {
    var disableDynamicMediaQueries = _ref.disableDynamicMediaQueries,
        onlyMatch = _ref.onlyMatch,
        children = _ref.children;

    if (disableDynamicMediaQueries) {
      return _react.default.createElement(MediaContext.Provider, {
        value: {
          onlyMatch: onlyMatch
        }
      }, children);
    } else {
      return _react.default.createElement(DynamicResponsive.Provider, {
        mediaQueries: mediaQueries.dynamicResponsiveMediaQueries,
        initialMatchingMediaQueries: (0, _Utils.intersection)(mediaQueries.mediaQueryTypes, onlyMatch)
      }, _react.default.createElement(DynamicResponsive.Consumer, null, function (matches) {
        var matchingMediaQueries = Object.keys(matches).filter(function (key) {
          return matches[key];
        });
        return _react.default.createElement(MediaContext.Provider, {
          value: {
            onlyMatch: (0, _Utils.intersection)(matchingMediaQueries, onlyMatch)
          }
        }, children);
      }));
    }
  };

  var Media = (_temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Media, _React$Component);

    function Media(props) {
      var _this;

      _classCallCheck(this, Media);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Media).call(this, props));
      validateProps(props);
      return _this;
    }

    _createClass(Media, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var props = this.props;

        var children = props.children,
            passedClassName = props.className,
            interaction = props.interaction,
            breakpointProps = _objectWithoutProperties(props, ["children", "className", "interaction"]);

        return _react.default.createElement(MediaParentContext.Consumer, null, function (mediaParentContext) {
          return _react.default.createElement(MediaParentContext.Provider, {
            value: {
              hasParentMedia: true,
              breakpointProps: breakpointProps
            }
          }, _react.default.createElement(MediaContext.Consumer, null, function () {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                onlyMatch = _ref2.onlyMatch;

            var className;

            if (props.interaction) {
              className = (0, _Utils.createClassName)("interaction", props.interaction);
            } else {
              if (props.at) {
                var largestBreakpoint = mediaQueries.breakpoints.largestBreakpoint;

                if (props.at === largestBreakpoint) {
                  // TODO: We should look into making React’s __DEV__ available
                  //       and have webpack completely compile these away.
                  var ownerName = null;

                  try {
                    var owner = _this2._reactInternalFiber._debugOwner.type;
                    ownerName = owner.displayName || owner.name;
                  } catch (err) {// no-op
                  }

                  console.warn("[@artsy/fresnel] " + "`at` is being used with the largest breakpoint. " + "Consider using `<Media greaterThanOrEqual=" + "\"".concat(largestBreakpoint, "\">` to account for future ") + "breakpoint definitions outside of this range.".concat(ownerName ? " It is being used in the ".concat(ownerName, " component.") : ""));
                }
              }

              var type = (0, _Utils.propKey)(breakpointProps);
              var breakpoint = breakpointProps[type];
              className = (0, _Utils.createClassName)(type, breakpoint);
            }

            var doesMatchParent = !mediaParentContext.hasParentMedia || (0, _Utils.intersection)(mediaQueries.breakpoints.toVisibleAtBreakpointSet(mediaParentContext.breakpointProps), mediaQueries.breakpoints.toVisibleAtBreakpointSet(breakpointProps)).length > 0;
            var renderChildren = doesMatchParent && (onlyMatch === undefined || mediaQueries.shouldRenderMediaQuery(_objectSpread({}, breakpointProps, {
              interaction: interaction
            }), onlyMatch));

            if (props.children instanceof Function) {
              return props.children(className, renderChildren);
            } else {
              return _react.default.createElement("div", {
                className: "fresnel-container ".concat(className, " ").concat(passedClassName),
                suppressHydrationWarning: !renderChildren
              }, renderChildren ? props.children : null);
            }
          }));
        });
      }
    }]);

    return Media;
  }(_react.default.Component), _defineProperty(_class, "defaultProps", {
    className: ""
  }), _defineProperty(_class, "contextType", MediaParentContext), _temp);
  return {
    Media: Media,
    MediaContextProvider: MediaContextProvider,
    createMediaStyle: mediaQueries.toStyle,
    SortedBreakpoints: _toConsumableArray(mediaQueries.breakpoints.sortedBreakpoints),
    findBreakpointAtWidth: mediaQueries.breakpoints.findBreakpointAtWidth,
    findBreakpointsForWidths: mediaQueries.breakpoints.findBreakpointsForWidths,
    valuesWithBreakpointProps: mediaQueries.breakpoints.valuesWithBreakpointProps
  };
}

var MutuallyExclusiveProps = _MediaQueries.MediaQueries.validKeys();

function validateProps(props) {
  var selectedProps = Object.keys(props).filter(function (prop) {
    return MutuallyExclusiveProps.includes(prop);
  });

  if (selectedProps.length < 1) {
    throw new Error("1 of ".concat(MutuallyExclusiveProps.join(", "), " is required."));
  } else if (selectedProps.length > 1) {
    throw new Error("Only 1 of ".concat(selectedProps.join(", "), " is allowed at a time."));
  }
}
//# sourceMappingURL=Media.js.map

/***/ }),

/***/ "./node_modules/@artsy/fresnel/dist/MediaQueries.js":
/*!**********************************************************!*\
  !*** ./node_modules/@artsy/fresnel/dist/MediaQueries.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaQueries = void 0;

var _Breakpoints = __webpack_require__(/*! ./Breakpoints */ "./node_modules/@artsy/fresnel/dist/Breakpoints.js");

var _Interactions = __webpack_require__(/*! ./Interactions */ "./node_modules/@artsy/fresnel/dist/Interactions.js");

var _Utils = __webpack_require__(/*! ./Utils */ "./node_modules/@artsy/fresnel/dist/Utils.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Encapsulates all interaction data (and breakpoint data in the superclass)
 * needed by the Media component. The data is generated on initialization so no
 * further runtime work is necessary.
 */
var MediaQueries =
/*#__PURE__*/
function () {
  _createClass(MediaQueries, null, [{
    key: "validKeys",
    value: function validKeys() {
      return _toConsumableArray(_Breakpoints.Breakpoints.validKeys()).concat(_toConsumableArray(_Interactions.Interactions.validKeys()));
    }
  }]);

  function MediaQueries(breakpoints, interactions) {
    var _this = this;

    _classCallCheck(this, MediaQueries);

    _defineProperty(this, "_breakpoints", void 0);

    _defineProperty(this, "_interactions", void 0);

    _defineProperty(this, "toStyle", function (breakpointKeys) {
      return [// Don’t add any size to the layout
      ".fresnel-container{margin:0;padding:0;}"].concat(_toConsumableArray(_this._breakpoints.toRuleSets(breakpointKeys)), _toConsumableArray(_this._interactions.toRuleSets())).join("\n");
    });

    this._breakpoints = new _Breakpoints.Breakpoints(breakpoints);
    this._interactions = new _Interactions.Interactions(interactions || {});
  }

  _createClass(MediaQueries, [{
    key: "shouldRenderMediaQuery",
    value: function shouldRenderMediaQuery(mediaQueryProps, onlyMatch) {
      var interaction = mediaQueryProps.interaction,
          breakpointProps = _objectWithoutProperties(mediaQueryProps, ["interaction"]);

      if (interaction) {
        return this._interactions.shouldRenderMediaQuery(interaction, onlyMatch);
      } // Remove any interaction possibilities from the list.


      var onlyMatchBreakpoints = (0, _Utils.intersection)(onlyMatch, this._breakpoints.sortedBreakpoints);
      return this._breakpoints.shouldRenderMediaQuery(breakpointProps, onlyMatchBreakpoints);
    }
  }, {
    key: "breakpoints",
    get: function get() {
      return this._breakpoints;
    }
  }, {
    key: "mediaQueryTypes",
    get: function get() {
      return _toConsumableArray(this._breakpoints.sortedBreakpoints).concat(_toConsumableArray(this._interactions.interactions));
    }
  }, {
    key: "dynamicResponsiveMediaQueries",
    get: function get() {
      return _objectSpread({}, this._breakpoints.dynamicResponsiveMediaQueries, this._interactions.dynamicResponsiveMediaQueries);
    }
  }]);

  return MediaQueries;
}();

exports.MediaQueries = MediaQueries;
//# sourceMappingURL=MediaQueries.js.map

/***/ }),

/***/ "./node_modules/@artsy/fresnel/dist/Utils.js":
/*!***************************************************!*\
  !*** ./node_modules/@artsy/fresnel/dist/Utils.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propKey = propKey;
exports.intersection = intersection;
exports.createRuleSet = createRuleSet;
exports.createClassName = createClassName;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Extracts the single breakpoint prop from the props object.
 */
function propKey(breakpointProps) {
  return Object.keys(breakpointProps)[0];
}
/**
 * Returns the intersection of two arrays.
 */


function intersection(a1, a2) {
  return a2 ? a1.filter(function (element) {
    return a2.indexOf(element) >= 0;
  }) : _toConsumableArray(a1);
}
/**
 * Generate a style rule for a given class name that will hide the element
 * when the given query matches.
 */


function createRuleSet(className, query) {
  return "@media ".concat(query, "{.").concat(className, "{display:none!important;}}");
}
/**
 * Given a list of strings, or string tuples, generates a class name.
 */


function createClassName() {
  for (var _len = arguments.length, components = new Array(_len), _key = 0; _key < _len; _key++) {
    components[_key] = arguments[_key];
  }

  return ["fresnel"].concat(_toConsumableArray(components.reduce(function (acc, breakpoint) {
    return Array.isArray(breakpoint) ? _toConsumableArray(acc).concat(_toConsumableArray(breakpoint)) : _toConsumableArray(acc).concat([breakpoint]);
  }, []))).join("-");
}
//# sourceMappingURL=Utils.js.map

/***/ }),

/***/ "./node_modules/@artsy/fresnel/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@artsy/fresnel/dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createMedia", {
  enumerable: true,
  get: function get() {
    return _Media.createMedia;
  }
});
Object.defineProperty(exports, "BreakpointKey", {
  enumerable: true,
  get: function get() {
    return _Breakpoints.BreakpointConstraint;
  }
});

var _Media = __webpack_require__(/*! ./Media */ "./node_modules/@artsy/fresnel/dist/Media.js");

var _Breakpoints = __webpack_require__(/*! ./Breakpoints */ "./node_modules/@artsy/fresnel/dist/Breakpoints.js");
//# sourceMappingURL=index.js.map

/***/ }),

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
            children: "Load"
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

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var D_GithubProject_ForcedContact_Website_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.js");


var _jsxFileName = "D:\\GithubProject\\ForcedContact-Website\\src\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_GithubProject_ForcedContact_Website_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // This default export is required in a new `pages/_app.js` file.

function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 14
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}
_c = MyApp;

var _c;

$RefreshReg$(_c, "MyApp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhcnRzeS9mcmVzbmVsL2Rpc3QvQnJlYWtwb2ludHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYXJ0c3kvZnJlc25lbC9kaXN0L0R5bmFtaWNSZXNwb25zaXZlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFydHN5L2ZyZXNuZWwvZGlzdC9JbnRlcmFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYXJ0c3kvZnJlc25lbC9kaXN0L01lZGlhLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFydHN5L2ZyZXNuZWwvZGlzdC9NZWRpYVF1ZXJpZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYXJ0c3kvZnJlc25lbC9kaXN0L1V0aWxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFydHN5L2ZyZXNuZWwvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJjcmVhdGVNZWRpYSIsImJyZWFrcG9pbnRzIiwibW9iaWxlIiwidGFibGV0IiwiY29tcHV0ZXIiLCJNZWRpYUNvbnRleHRQcm92aWRlciIsIk5hdkNvbnRhaW5lciIsInByb3BzIiwiY2hpbGRyZW4iLCJiYWNrZ3JvdW5kIiwiTmF2IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyw0REFBUzs7QUFFOUIsZ0NBQWdDLGdCQUFnQixzQkFBc0IsT0FBTyx1REFBdUQsbUNBQW1DLDBEQUEwRCxzRkFBc0YsZ0VBQWdFLEVBQUUsR0FBRyxFQUFFLGlDQUFpQywyQ0FBMkMsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFL2Qsa0NBQWtDLGlGQUFpRjs7QUFFbkgsK0JBQStCLHdFQUF3RTs7QUFFdkcsaUNBQWlDLCtIQUErSDs7QUFFaEssa0NBQWtDLDBCQUEwQiw4Q0FBOEMsZ0JBQWdCLE9BQU8sa0JBQWtCLEVBQUUsYUFBYSxFQUFFOztBQUVwSyxpQ0FBaUMsb0ZBQW9GOztBQUVySCw2QkFBNkIsNkVBQTZFOztBQUUxRyx3Q0FBd0MsZUFBZSxlQUFlLGdCQUFnQixvQkFBb0IsTUFBTSwwQ0FBMEMsK0JBQStCLGFBQWEscUJBQXFCLG1DQUFtQyxFQUFFLEVBQUUsY0FBYyxXQUFXLFVBQVUsRUFBRSxVQUFVLE1BQU0saURBQWlELEVBQUUsVUFBVSxrQkFBa0IsRUFBRSxFQUFFLGFBQWE7O0FBRXZaLCtCQUErQixvQ0FBb0M7O0FBRW5FLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFOztBQUUzVCw2REFBNkQsc0VBQXNFLDhEQUE4RCxvQkFBb0I7O0FBRXJOLDJDQUEyQyxrQkFBa0Isa0NBQWtDLHFFQUFxRSxFQUFFLEVBQUUsT0FBTyxrQkFBa0IsRUFBRSxZQUFZOztBQUUvTTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG1GQUFtRjs7QUFFcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUwsa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxJQUFJO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFD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QSxTQUF1QjtBQUFBLE1BQVpDLFNBQVksUUFBWkEsU0FBWTtBQUNyRCxzQkFBTyxxRUFBQyx1REFBRDtBQUFBLDJCQUFLLHFFQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNBO0tBRnVCRixLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMGQxNDk0MjJhMGYzYWUzMGM0ODQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5CcmVha3BvaW50cyA9IGV4cG9ydHMuQnJlYWtwb2ludENvbnN0cmFpbnQgPSB2b2lkIDA7XG5cbnZhciBfVXRpbHMgPSByZXF1aXJlKFwiLi9VdGlsc1wiKTtcblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7IG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7IH0pKTsgfSBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7IGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gfVxuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBicmVha3BvaW50S2V5KGJyZWFrcG9pbnQpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYnJlYWtwb2ludCkgPyBicmVha3BvaW50LmpvaW4oXCItXCIpIDogYnJlYWtwb2ludDtcbn1cblxudmFyIEJyZWFrcG9pbnRDb25zdHJhaW50O1xuLyoqXG4gKiBFbmNhcHN1bGF0ZXMgYWxsIGJyZWFrcG9pbnQgZGF0YSBuZWVkZWQgYnkgdGhlIE1lZGlhIGNvbXBvbmVudC4gVGhlIGRhdGEgaXNcbiAqIGdlbmVyYXRlZCBvbiBpbml0aWFsaXphdGlvbiBzbyBubyBmdXJ0aGVyIHJ1bnRpbWUgd29yayBpcyBuZWNlc3NhcnkuXG4gKi9cblxuZXhwb3J0cy5CcmVha3BvaW50Q29uc3RyYWludCA9IEJyZWFrcG9pbnRDb25zdHJhaW50O1xuXG4oZnVuY3Rpb24gKEJyZWFrcG9pbnRDb25zdHJhaW50KSB7XG4gIEJyZWFrcG9pbnRDb25zdHJhaW50W1wiYXRcIl0gPSBcImF0XCI7XG4gIEJyZWFrcG9pbnRDb25zdHJhaW50W1wibGVzc1RoYW5cIl0gPSBcImxlc3NUaGFuXCI7XG4gIEJyZWFrcG9pbnRDb25zdHJhaW50W1wiZ3JlYXRlclRoYW5cIl0gPSBcImdyZWF0ZXJUaGFuXCI7XG4gIEJyZWFrcG9pbnRDb25zdHJhaW50W1wiZ3JlYXRlclRoYW5PckVxdWFsXCJdID0gXCJncmVhdGVyVGhhbk9yRXF1YWxcIjtcbiAgQnJlYWtwb2ludENvbnN0cmFpbnRbXCJiZXR3ZWVuXCJdID0gXCJiZXR3ZWVuXCI7XG59KShCcmVha3BvaW50Q29uc3RyYWludCB8fCAoZXhwb3J0cy5CcmVha3BvaW50Q29uc3RyYWludCA9IEJyZWFrcG9pbnRDb25zdHJhaW50ID0ge30pKTtcblxudmFyIEJyZWFrcG9pbnRzID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgX2NyZWF0ZUNsYXNzKEJyZWFrcG9pbnRzLCBudWxsLCBbe1xuICAgIGtleTogXCJ2YWxpZEtleXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRLZXlzKCkge1xuICAgICAgcmV0dXJuIFtCcmVha3BvaW50Q29uc3RyYWludC5hdCwgQnJlYWtwb2ludENvbnN0cmFpbnQubGVzc1RoYW4sIEJyZWFrcG9pbnRDb25zdHJhaW50LmdyZWF0ZXJUaGFuLCBCcmVha3BvaW50Q29uc3RyYWludC5ncmVhdGVyVGhhbk9yRXF1YWwsIEJyZWFrcG9pbnRDb25zdHJhaW50LmJldHdlZW5dO1xuICAgIH1cbiAgfV0pO1xuXG4gIGZ1bmN0aW9uIEJyZWFrcG9pbnRzKF9icmVha3BvaW50cykge1xuICAgIHZhciBfdGhpcyA9IHRoaXMsXG4gICAgICAgIF90aGlzJF9tZWRpYVF1ZXJpZXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQnJlYWtwb2ludHMpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX3NvcnRlZEJyZWFrcG9pbnRzXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfYnJlYWtwb2ludHNcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9tZWRpYVF1ZXJpZXNcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImZpbmRCcmVha3BvaW50c0ZvcldpZHRoc1wiLCBmdW5jdGlvbiAoZnJvbVdpZHRoLCB0aHJvdWdoV2lkdGgpIHtcbiAgICAgIHZhciBmcm9tQnJlYWtwb2ludCA9IF90aGlzLmZpbmRCcmVha3BvaW50QXRXaWR0aChmcm9tV2lkdGgpO1xuXG4gICAgICBpZiAoIWZyb21CcmVha3BvaW50KSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHZhciB0aHJvdWdoQnJlYWtwb2ludCA9IF90aGlzLmZpbmRCcmVha3BvaW50QXRXaWR0aCh0aHJvdWdoV2lkdGgpO1xuXG4gICAgICBpZiAoIXRocm91Z2hCcmVha3BvaW50IHx8IGZyb21CcmVha3BvaW50ID09PSB0aHJvdWdoQnJlYWtwb2ludCkge1xuICAgICAgICByZXR1cm4gW2Zyb21CcmVha3BvaW50XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5fc29ydGVkQnJlYWtwb2ludHMuc2xpY2UoX3RoaXMuX3NvcnRlZEJyZWFrcG9pbnRzLmluZGV4T2YoZnJvbUJyZWFrcG9pbnQpLCBfdGhpcy5fc29ydGVkQnJlYWtwb2ludHMuaW5kZXhPZih0aHJvdWdoQnJlYWtwb2ludCkgKyAxKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImZpbmRCcmVha3BvaW50QXRXaWR0aFwiLCBmdW5jdGlvbiAod2lkdGgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5fc29ydGVkQnJlYWtwb2ludHMuZmluZChmdW5jdGlvbiAoYnJlYWtwb2ludCwgaSkge1xuICAgICAgICB2YXIgbmV4dEJyZWFrcG9pbnQgPSBfdGhpcy5fc29ydGVkQnJlYWtwb2ludHNbaSArIDFdO1xuXG4gICAgICAgIGlmIChuZXh0QnJlYWtwb2ludCkge1xuICAgICAgICAgIHJldHVybiB3aWR0aCA+PSBfdGhpcy5fYnJlYWtwb2ludHNbYnJlYWtwb2ludF0gJiYgd2lkdGggPCBfdGhpcy5fYnJlYWtwb2ludHNbbmV4dEJyZWFrcG9pbnRdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB3aWR0aCA+PSBfdGhpcy5fYnJlYWtwb2ludHNbYnJlYWtwb2ludF07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidmFsdWVzV2l0aEJyZWFrcG9pbnRQcm9wc1wiLCBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICB2YXIgbWF4ID0gdmFsdWVzLmxlbmd0aDtcbiAgICAgIHZhciB2YWx1ZUJyZWFrcG9pbnRzID0gW107XG4gICAgICB2YXIgbGFzdFR1cGxlO1xuXG4gICAgICBfdGhpcy5fc29ydGVkQnJlYWtwb2ludHMuZm9yRWFjaChmdW5jdGlvbiAoYnJlYWtwb2ludCwgaSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZXNbaV07XG5cbiAgICAgICAgaWYgKGkgPCBtYXggJiYgKCFsYXN0VHVwbGUgfHwgbGFzdFR1cGxlWzBdICE9PSB2YWx1ZSkpIHtcbiAgICAgICAgICBsYXN0VHVwbGUgPSBbdmFsdWUsIFticmVha3BvaW50XV07XG4gICAgICAgICAgdmFsdWVCcmVha3BvaW50cy5wdXNoKGxhc3RUdXBsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGFzdFR1cGxlWzFdLnB1c2goYnJlYWtwb2ludCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdmFsdWVCcmVha3BvaW50cy5tYXAoZnVuY3Rpb24gKF9yZWYsIGkpIHtcbiAgICAgICAgdmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMiksXG4gICAgICAgICAgICB2YWx1ZSA9IF9yZWYyWzBdLFxuICAgICAgICAgICAgYnJlYWtwb2ludHMgPSBfcmVmMlsxXTtcblxuICAgICAgICB2YXIgcHJvcHMgPSB7fTtcblxuICAgICAgICBpZiAoaSA9PT0gdmFsdWVCcmVha3BvaW50cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgcHJvcHMuZ3JlYXRlclRoYW5PckVxdWFsID0gYnJlYWtwb2ludHNbMF07XG4gICAgICAgIH0gZWxzZSBpZiAoYnJlYWtwb2ludHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgcHJvcHMuYXQgPSBicmVha3BvaW50c1swXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBUT0RPOiBUaGlzIGlzIGxlc3MgdGhhbiBpZGVhbCwgd291bGQgYmUgZ29vZCB0byBoYXZlIGEgYHRocm91Z2hgXG4gICAgICAgICAgLy8gICAgICAgcHJvcCwgd2hpY2ggdW5saWtlIGBiZXR3ZWVuYCBpcyBpbmNsdXNpdmUuXG4gICAgICAgICAgcHJvcHMuYmV0d2VlbiA9IFticmVha3BvaW50c1swXSwgdmFsdWVCcmVha3BvaW50c1tpICsgMV1bMV1bMF1dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFt2YWx1ZSwgcHJvcHNdO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9icmVha3BvaW50cyA9IF9icmVha3BvaW50cztcbiAgICB0aGlzLl9zb3J0ZWRCcmVha3BvaW50cyA9IE9iamVjdC5rZXlzKF9icmVha3BvaW50cykubWFwKGZ1bmN0aW9uIChicmVha3BvaW50KSB7XG4gICAgICByZXR1cm4gW2JyZWFrcG9pbnQsIF9icmVha3BvaW50c1ticmVha3BvaW50XV07XG4gICAgfSkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGFbMV0gPCBiWzFdID8gLTEgOiAxO1xuICAgIH0pLm1hcChmdW5jdGlvbiAoYnJlYWtwb2ludEFuZFZhbHVlKSB7XG4gICAgICByZXR1cm4gYnJlYWtwb2ludEFuZFZhbHVlWzBdO1xuICAgIH0pOyAvLyBMaXN0IG9mIGFsbCBwb3NzaWJsZSBhbmQgdmFsaWQgYGJldHdlZW5gIGNvbWJpbmF0aW9uc1xuXG4gICAgdmFyIGJldHdlZW5Db21iaW5hdGlvbnMgPSB0aGlzLl9zb3J0ZWRCcmVha3BvaW50cy5zbGljZSgwLCAtMSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGIxLCBpKSB7XG4gICAgICByZXR1cm4gX3RvQ29uc3VtYWJsZUFycmF5KGFjYykuY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShfdGhpcy5fc29ydGVkQnJlYWtwb2ludHMuc2xpY2UoaSArIDEpLm1hcChmdW5jdGlvbiAoYjIpIHtcbiAgICAgICAgcmV0dXJuIFtiMSwgYjJdO1xuICAgICAgfSkpKTtcbiAgICB9LCBbXSk7XG5cbiAgICB0aGlzLl9tZWRpYVF1ZXJpZXMgPSAoX3RoaXMkX21lZGlhUXVlcmllcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX3RoaXMkX21lZGlhUXVlcmllcywgQnJlYWtwb2ludENvbnN0cmFpbnQuYXQsIHRoaXMuX2NyZWF0ZUJyZWFrcG9pbnRRdWVyaWVzKEJyZWFrcG9pbnRDb25zdHJhaW50LmF0LCB0aGlzLl9zb3J0ZWRCcmVha3BvaW50cykpLCBfZGVmaW5lUHJvcGVydHkoX3RoaXMkX21lZGlhUXVlcmllcywgQnJlYWtwb2ludENvbnN0cmFpbnQubGVzc1RoYW4sIHRoaXMuX2NyZWF0ZUJyZWFrcG9pbnRRdWVyaWVzKEJyZWFrcG9pbnRDb25zdHJhaW50Lmxlc3NUaGFuLCB0aGlzLl9zb3J0ZWRCcmVha3BvaW50cy5zbGljZSgxKSkpLCBfZGVmaW5lUHJvcGVydHkoX3RoaXMkX21lZGlhUXVlcmllcywgQnJlYWtwb2ludENvbnN0cmFpbnQuZ3JlYXRlclRoYW4sIHRoaXMuX2NyZWF0ZUJyZWFrcG9pbnRRdWVyaWVzKEJyZWFrcG9pbnRDb25zdHJhaW50LmdyZWF0ZXJUaGFuLCB0aGlzLl9zb3J0ZWRCcmVha3BvaW50cy5zbGljZSgwLCAtMSkpKSwgX2RlZmluZVByb3BlcnR5KF90aGlzJF9tZWRpYVF1ZXJpZXMsIEJyZWFrcG9pbnRDb25zdHJhaW50LmdyZWF0ZXJUaGFuT3JFcXVhbCwgdGhpcy5fY3JlYXRlQnJlYWtwb2ludFF1ZXJpZXMoQnJlYWtwb2ludENvbnN0cmFpbnQuZ3JlYXRlclRoYW5PckVxdWFsLCB0aGlzLl9zb3J0ZWRCcmVha3BvaW50cykpLCBfZGVmaW5lUHJvcGVydHkoX3RoaXMkX21lZGlhUXVlcmllcywgQnJlYWtwb2ludENvbnN0cmFpbnQuYmV0d2VlbiwgdGhpcy5fY3JlYXRlQnJlYWtwb2ludFF1ZXJpZXMoQnJlYWtwb2ludENvbnN0cmFpbnQuYmV0d2VlbiwgYmV0d2VlbkNvbWJpbmF0aW9ucykpLCBfdGhpcyRfbWVkaWFRdWVyaWVzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhCcmVha3BvaW50cywgW3tcbiAgICBrZXk6IFwidG9WaXNpYmxlQXRCcmVha3BvaW50U2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvVmlzaWJsZUF0QnJlYWtwb2ludFNldChicmVha3BvaW50UHJvcHMpIHtcbiAgICAgIGJyZWFrcG9pbnRQcm9wcyA9IHRoaXMuX25vcm1hbGl6ZVByb3BzKGJyZWFrcG9pbnRQcm9wcyk7XG5cbiAgICAgIGlmIChicmVha3BvaW50UHJvcHMubGVzc1RoYW4pIHtcbiAgICAgICAgdmFyIGJyZWFrcG9pbnRJbmRleCA9IHRoaXMuc29ydGVkQnJlYWtwb2ludHMuZmluZEluZGV4KGZ1bmN0aW9uIChicCkge1xuICAgICAgICAgIHJldHVybiBicCA9PT0gYnJlYWtwb2ludFByb3BzLmxlc3NUaGFuO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc29ydGVkQnJlYWtwb2ludHMuc2xpY2UoMCwgYnJlYWtwb2ludEluZGV4KTtcbiAgICAgIH0gZWxzZSBpZiAoYnJlYWtwb2ludFByb3BzLmdyZWF0ZXJUaGFuKSB7XG4gICAgICAgIHZhciBfYnJlYWtwb2ludEluZGV4ID0gdGhpcy5zb3J0ZWRCcmVha3BvaW50cy5maW5kSW5kZXgoZnVuY3Rpb24gKGJwKSB7XG4gICAgICAgICAgcmV0dXJuIGJwID09PSBicmVha3BvaW50UHJvcHMuZ3JlYXRlclRoYW47XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNvcnRlZEJyZWFrcG9pbnRzLnNsaWNlKF9icmVha3BvaW50SW5kZXggKyAxKTtcbiAgICAgIH0gZWxzZSBpZiAoYnJlYWtwb2ludFByb3BzLmdyZWF0ZXJUaGFuT3JFcXVhbCkge1xuICAgICAgICB2YXIgX2JyZWFrcG9pbnRJbmRleDIgPSB0aGlzLnNvcnRlZEJyZWFrcG9pbnRzLmZpbmRJbmRleChmdW5jdGlvbiAoYnApIHtcbiAgICAgICAgICByZXR1cm4gYnAgPT09IGJyZWFrcG9pbnRQcm9wcy5ncmVhdGVyVGhhbk9yRXF1YWw7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNvcnRlZEJyZWFrcG9pbnRzLnNsaWNlKF9icmVha3BvaW50SW5kZXgyKTtcbiAgICAgIH0gZWxzZSBpZiAoYnJlYWtwb2ludFByb3BzLmJldHdlZW4pIHtcbiAgICAgICAgdmFyIF9iZXR3ZWVuID0gYnJlYWtwb2ludFByb3BzLmJldHdlZW47XG4gICAgICAgIHZhciBmcm9tQnJlYWtwb2ludEluZGV4ID0gdGhpcy5zb3J0ZWRCcmVha3BvaW50cy5maW5kSW5kZXgoZnVuY3Rpb24gKGJwKSB7XG4gICAgICAgICAgcmV0dXJuIGJwID09PSBfYmV0d2VlblswXTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciB0b0JyZWFrcG9pbnRJbmRleCA9IHRoaXMuc29ydGVkQnJlYWtwb2ludHMuZmluZEluZGV4KGZ1bmN0aW9uIChicCkge1xuICAgICAgICAgIHJldHVybiBicCA9PT0gX2JldHdlZW5bMV07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5zb3J0ZWRCcmVha3BvaW50cy5zbGljZShmcm9tQnJlYWtwb2ludEluZGV4LCB0b0JyZWFrcG9pbnRJbmRleCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidG9SdWxlU2V0c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1J1bGVTZXRzKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBrZXlzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBCcmVha3BvaW50cy52YWxpZEtleXMoKTtcbiAgICAgIHZhciBzZWxlY3RlZE1lZGlhUXVlcmllcyA9IGtleXMucmVkdWNlKGZ1bmN0aW9uIChtZWRpYVF1ZXJpZXMsIHF1ZXJ5KSB7XG4gICAgICAgIG1lZGlhUXVlcmllc1txdWVyeV0gPSBfdGhpczIuX21lZGlhUXVlcmllc1txdWVyeV07XG4gICAgICAgIHJldHVybiBtZWRpYVF1ZXJpZXM7XG4gICAgICB9LCB7fSk7XG4gICAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMoc2VsZWN0ZWRNZWRpYVF1ZXJpZXMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBfcmVmMykge1xuICAgICAgICB2YXIgX3JlZjQgPSBfc2xpY2VkVG9BcnJheShfcmVmMywgMiksXG4gICAgICAgICAgICB0eXBlID0gX3JlZjRbMF0sXG4gICAgICAgICAgICBxdWVyaWVzID0gX3JlZjRbMV07XG5cbiAgICAgICAgcXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChxdWVyeSwgYnJlYWtwb2ludCkge1xuICAgICAgICAgIC8vIFdlIG5lZWQgdG8gaW52ZXJ0IHRoZSBxdWVyeSwgc3VjaCB0aGF0IGl0IG1hdGNoZXMgd2hlbiB3ZSB3YW50IHRoZVxuICAgICAgICAgIC8vIGVsZW1lbnQgdG8gYmUgaGlkZGVuLlxuICAgICAgICAgIGFjYy5wdXNoKCgwLCBfVXRpbHMuY3JlYXRlUnVsZVNldCkoKDAsIF9VdGlscy5jcmVhdGVDbGFzc05hbWUpKHR5cGUsIGJyZWFrcG9pbnQpLCBcIm5vdCBhbGwgYW5kIFwiLmNvbmNhdChxdWVyeSkpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCBbXSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNob3VsZFJlbmRlck1lZGlhUXVlcnlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkUmVuZGVyTWVkaWFRdWVyeShicmVha3BvaW50UHJvcHMsIG9ubHlSZW5kZXJBdCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIGJyZWFrcG9pbnRQcm9wcyA9IHRoaXMuX25vcm1hbGl6ZVByb3BzKGJyZWFrcG9pbnRQcm9wcyk7XG5cbiAgICAgIGlmIChicmVha3BvaW50UHJvcHMubGVzc1RoYW4pIHtcbiAgICAgICAgdmFyIHdpZHRoID0gdGhpcy5fYnJlYWtwb2ludHNbYnJlYWtwb2ludFByb3BzLmxlc3NUaGFuXTtcbiAgICAgICAgdmFyIGxvd2VzdEFsbG93ZWRXaWR0aCA9IE1hdGgubWluLmFwcGx5KE1hdGgsIF90b0NvbnN1bWFibGVBcnJheShvbmx5UmVuZGVyQXQubWFwKGZ1bmN0aW9uIChicmVha3BvaW50KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMy5fYnJlYWtwb2ludHNbYnJlYWtwb2ludF07XG4gICAgICAgIH0pKSk7XG4gICAgICAgIHJldHVybiBsb3dlc3RBbGxvd2VkV2lkdGggPCB3aWR0aDtcbiAgICAgIH0gZWxzZSBpZiAoYnJlYWtwb2ludFByb3BzLmdyZWF0ZXJUaGFuKSB7XG4gICAgICAgIHZhciBfd2lkdGggPSB0aGlzLl9icmVha3BvaW50c1t0aGlzLl9maW5kTmV4dEJyZWFrcG9pbnQoYnJlYWtwb2ludFByb3BzLmdyZWF0ZXJUaGFuKV07XG5cbiAgICAgICAgdmFyIGhpZ2hlc3RBbGxvd2VkV2lkdGggPSBNYXRoLm1heC5hcHBseShNYXRoLCBfdG9Db25zdW1hYmxlQXJyYXkob25seVJlbmRlckF0Lm1hcChmdW5jdGlvbiAoYnJlYWtwb2ludCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczMuX2JyZWFrcG9pbnRzW2JyZWFrcG9pbnRdO1xuICAgICAgICB9KSkpO1xuICAgICAgICByZXR1cm4gaGlnaGVzdEFsbG93ZWRXaWR0aCA+PSBfd2lkdGg7XG4gICAgICB9IGVsc2UgaWYgKGJyZWFrcG9pbnRQcm9wcy5ncmVhdGVyVGhhbk9yRXF1YWwpIHtcbiAgICAgICAgdmFyIF93aWR0aDIgPSB0aGlzLl9icmVha3BvaW50c1ticmVha3BvaW50UHJvcHMuZ3JlYXRlclRoYW5PckVxdWFsXTtcblxuICAgICAgICB2YXIgX2hpZ2hlc3RBbGxvd2VkV2lkdGggPSBNYXRoLm1heC5hcHBseShNYXRoLCBfdG9Db25zdW1hYmxlQXJyYXkob25seVJlbmRlckF0Lm1hcChmdW5jdGlvbiAoYnJlYWtwb2ludCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczMuX2JyZWFrcG9pbnRzW2JyZWFrcG9pbnRdO1xuICAgICAgICB9KSkpO1xuXG4gICAgICAgIHJldHVybiBfaGlnaGVzdEFsbG93ZWRXaWR0aCA+PSBfd2lkdGgyO1xuICAgICAgfSBlbHNlIGlmIChicmVha3BvaW50UHJvcHMuYmV0d2Vlbikge1xuICAgICAgICAvLyBUT0RPOiBUaGlzIGlzIHRoZSBvbmx5IHVzZWZ1bCBicmVha3BvaW50IHRvIG5lZ2F0ZSwgYnV0IHdl4oCZbGxcbiAgICAgICAgLy8gICAgICAgd2XigJlsbCBzZWUgd2hlbi9pZiB3ZSBuZWVkIGl0LiBXZSBjb3VsZCB0aGVuIGFsc28gZGVjaWRlXG4gICAgICAgIC8vICAgICAgIHRvIGFkZCBgb3VzdGlkZWAuXG4gICAgICAgIHZhciBmcm9tV2lkdGggPSB0aGlzLl9icmVha3BvaW50c1ticmVha3BvaW50UHJvcHMuYmV0d2VlblswXV07XG4gICAgICAgIHZhciB0b1dpZHRoID0gdGhpcy5fYnJlYWtwb2ludHNbYnJlYWtwb2ludFByb3BzLmJldHdlZW5bMV1dO1xuICAgICAgICB2YXIgYWxsb3dlZFdpZHRocyA9IG9ubHlSZW5kZXJBdC5tYXAoZnVuY3Rpb24gKGJyZWFrcG9pbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMzLl9icmVha3BvaW50c1ticmVha3BvaW50XTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAhKE1hdGgubWF4LmFwcGx5KE1hdGgsIF90b0NvbnN1bWFibGVBcnJheShhbGxvd2VkV2lkdGhzKSkgPCBmcm9tV2lkdGggfHwgTWF0aC5taW4uYXBwbHkoTWF0aCwgX3RvQ29uc3VtYWJsZUFycmF5KGFsbG93ZWRXaWR0aHMpKSA+PSB0b1dpZHRoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfbm9ybWFsaXplUHJvcHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX25vcm1hbGl6ZVByb3BzKGJyZWFrcG9pbnRQcm9wcykge1xuICAgICAgaWYgKGJyZWFrcG9pbnRQcm9wcy5hdCkge1xuICAgICAgICB2YXIgZnJvbUluZGV4ID0gdGhpcy5fc29ydGVkQnJlYWtwb2ludHMuaW5kZXhPZihicmVha3BvaW50UHJvcHMuYXQpO1xuXG4gICAgICAgIHZhciB0byA9IHRoaXMuX3NvcnRlZEJyZWFrcG9pbnRzW2Zyb21JbmRleCArIDFdO1xuICAgICAgICByZXR1cm4gdG8gPyB7XG4gICAgICAgICAgYmV0d2VlbjogW2JyZWFrcG9pbnRQcm9wcy5hdCwgdG9dXG4gICAgICAgIH0gOiB7XG4gICAgICAgICAgZ3JlYXRlclRoYW5PckVxdWFsOiBicmVha3BvaW50UHJvcHMuYXRcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJyZWFrcG9pbnRQcm9wcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2NyZWF0ZUJyZWFrcG9pbnRRdWVyeVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfY3JlYXRlQnJlYWtwb2ludFF1ZXJ5KGJyZWFrcG9pbnRQcm9wcykge1xuICAgICAgYnJlYWtwb2ludFByb3BzID0gdGhpcy5fbm9ybWFsaXplUHJvcHMoYnJlYWtwb2ludFByb3BzKTtcblxuICAgICAgaWYgKGJyZWFrcG9pbnRQcm9wcy5sZXNzVGhhbikge1xuICAgICAgICB2YXIgd2lkdGggPSB0aGlzLl9icmVha3BvaW50c1ticmVha3BvaW50UHJvcHMubGVzc1RoYW5dO1xuICAgICAgICByZXR1cm4gXCIobWF4LXdpZHRoOlwiLmNvbmNhdCh3aWR0aCAtIDEsIFwicHgpXCIpO1xuICAgICAgfSBlbHNlIGlmIChicmVha3BvaW50UHJvcHMuZ3JlYXRlclRoYW4pIHtcbiAgICAgICAgdmFyIF93aWR0aDMgPSB0aGlzLl9icmVha3BvaW50c1t0aGlzLl9maW5kTmV4dEJyZWFrcG9pbnQoYnJlYWtwb2ludFByb3BzLmdyZWF0ZXJUaGFuKV07XG5cbiAgICAgICAgcmV0dXJuIFwiKG1pbi13aWR0aDpcIi5jb25jYXQoX3dpZHRoMywgXCJweClcIik7XG4gICAgICB9IGVsc2UgaWYgKGJyZWFrcG9pbnRQcm9wcy5ncmVhdGVyVGhhbk9yRXF1YWwpIHtcbiAgICAgICAgdmFyIF93aWR0aDQgPSB0aGlzLl9icmVha3BvaW50c1ticmVha3BvaW50UHJvcHMuZ3JlYXRlclRoYW5PckVxdWFsXTtcbiAgICAgICAgcmV0dXJuIFwiKG1pbi13aWR0aDpcIi5jb25jYXQoX3dpZHRoNCwgXCJweClcIik7XG4gICAgICB9IGVsc2UgaWYgKGJyZWFrcG9pbnRQcm9wcy5iZXR3ZWVuKSB7XG4gICAgICAgIC8vIFRPRE86IFRoaXMgaXMgdGhlIG9ubHkgdXNlZnVsIGJyZWFrcG9pbnQgdG8gbmVnYXRlLCBidXQgd2XigJlsbFxuICAgICAgICAvLyAgICAgICB3ZeKAmWxsIHNlZSB3aGVuL2lmIHdlIG5lZWQgaXQuIFdlIGNvdWxkIHRoZW4gYWxzbyBkZWNpZGVcbiAgICAgICAgLy8gICAgICAgdG8gYWRkIGBvdXRzaWRlYC5cbiAgICAgICAgdmFyIGZyb21XaWR0aCA9IHRoaXMuX2JyZWFrcG9pbnRzW2JyZWFrcG9pbnRQcm9wcy5iZXR3ZWVuWzBdXTtcbiAgICAgICAgdmFyIHRvV2lkdGggPSB0aGlzLl9icmVha3BvaW50c1ticmVha3BvaW50UHJvcHMuYmV0d2VlblsxXV07XG4gICAgICAgIHJldHVybiBcIihtaW4td2lkdGg6XCIuY29uY2F0KGZyb21XaWR0aCwgXCJweCkgYW5kIChtYXgtd2lkdGg6XCIpLmNvbmNhdCh0b1dpZHRoIC0gMSwgXCJweClcIik7XG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgYnJlYWtwb2ludCBwcm9wczogXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KGJyZWFrcG9pbnRQcm9wcykpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2NyZWF0ZUJyZWFrcG9pbnRRdWVyaWVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9jcmVhdGVCcmVha3BvaW50UXVlcmllcyhrZXksIGZvckJyZWFrcG9pbnRzKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgcmV0dXJuIGZvckJyZWFrcG9pbnRzLnJlZHVjZShmdW5jdGlvbiAobWFwLCBicmVha3BvaW50KSB7XG4gICAgICAgIG1hcC5zZXQoYnJlYWtwb2ludEtleShicmVha3BvaW50KSwgX3RoaXM0Ll9jcmVhdGVCcmVha3BvaW50UXVlcnkoX2RlZmluZVByb3BlcnR5KHt9LCBrZXksIGJyZWFrcG9pbnQpKSk7XG4gICAgICAgIHJldHVybiBtYXA7XG4gICAgICB9LCBuZXcgTWFwKCkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfZmluZE5leHRCcmVha3BvaW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9maW5kTmV4dEJyZWFrcG9pbnQoYnJlYWtwb2ludCkge1xuICAgICAgdmFyIG5leHRCcmVha3BvaW50ID0gdGhpcy5fc29ydGVkQnJlYWtwb2ludHNbdGhpcy5fc29ydGVkQnJlYWtwb2ludHMuaW5kZXhPZihicmVha3BvaW50KSArIDFdO1xuXG4gICAgICBpZiAoIW5leHRCcmVha3BvaW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZXJlIGlzIG5vIGJyZWFrcG9pbnQgbGFyZ2VyIHRoYW4gXCIuY29uY2F0KGJyZWFrcG9pbnQpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5leHRCcmVha3BvaW50O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzb3J0ZWRCcmVha3BvaW50c1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NvcnRlZEJyZWFrcG9pbnRzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkeW5hbWljUmVzcG9uc2l2ZU1lZGlhUXVlcmllc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5fbWVkaWFRdWVyaWVzW0JyZWFrcG9pbnRDb25zdHJhaW50LmF0XS5lbnRyaWVzKCkpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBfcmVmNSkge1xuICAgICAgICB2YXIgX3JlZjYgPSBfc2xpY2VkVG9BcnJheShfcmVmNSwgMiksXG4gICAgICAgICAgICBrID0gX3JlZjZbMF0sXG4gICAgICAgICAgICB2ID0gX3JlZjZbMV07XG5cbiAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIGFjYywgX2RlZmluZVByb3BlcnR5KHt9LCBrLCB2KSk7XG4gICAgICB9LCB7fSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxhcmdlc3RCcmVha3BvaW50XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc29ydGVkQnJlYWtwb2ludHNbdGhpcy5fc29ydGVkQnJlYWtwb2ludHMubGVuZ3RoIC0gMV07XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEJyZWFrcG9pbnRzO1xufSgpO1xuXG5leHBvcnRzLkJyZWFrcG9pbnRzID0gQnJlYWtwb2ludHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1CcmVha3BvaW50cy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY3JlYXRlUmVzcG9uc2l2ZUNvbXBvbmVudHMgPSBjcmVhdGVSZXNwb25zaXZlQ29tcG9uZW50cztcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7IG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7IH0pKTsgfSBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIHNoYWxsb3dFcXVhbCA9IGZ1bmN0aW9uIHNoYWxsb3dFcXVhbChhLCBiKSB7XG4gIGZvciAodmFyIF9rZXkgaW4gYSkge1xuICAgIGlmIChhW19rZXldICE9PSBiW19rZXldKSByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4vKiogVE9ETyAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVJlc3BvbnNpdmVDb21wb25lbnRzKCkge1xuICB2YXIgUmVzcG9uc2l2ZUNvbnRleHQgPSBfcmVhY3QuZGVmYXVsdC5jcmVhdGVDb250ZXh0KHt9KTtcblxuICBSZXNwb25zaXZlQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiTWVkaWEuRHluYW1pY0NvbnRleHRcIjtcbiAgdmFyIFJlc3BvbnNpdmVDb25zdW1lciA9IFJlc3BvbnNpdmVDb250ZXh0LkNvbnN1bWVyO1xuICByZXR1cm4ge1xuICAgIENvbnN1bWVyOiBSZXNwb25zaXZlQ29uc3VtZXIsXG4gICAgUHJvdmlkZXI6XG4gICAgLyojX19QVVJFX18qL1xuICAgIGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHMoUmVzcG9uc2l2ZVByb3ZpZGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgICAgZnVuY3Rpb24gUmVzcG9uc2l2ZVByb3ZpZGVyKHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcztcblxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVzcG9uc2l2ZVByb3ZpZGVyKTtcblxuICAgICAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihSZXNwb25zaXZlUHJvdmlkZXIpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwiaXNTdXBwb3J0ZWRFbnZpcm9ubWVudFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5tYXRjaE1lZGlhICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgICB9KTtcblxuICAgICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwic2V0dXBNYXRjaGVyc1wiLCBmdW5jdGlvbiAobWVkaWFRdWVyaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG1lZGlhUXVlcmllcykucmVkdWNlKGZ1bmN0aW9uIChtYXRjaGVycywga2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgbWF0Y2hlcnMsIF9kZWZpbmVQcm9wZXJ0eSh7fSwga2V5LCB3aW5kb3cubWF0Y2hNZWRpYShtZWRpYVF1ZXJpZXNba2V5XSkpKTtcbiAgICAgICAgICB9LCB7fSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJjaGVja01hdGNoZXJzXCIsIGZ1bmN0aW9uIChtZWRpYVF1ZXJ5TWF0Y2hlcnMpIHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMobWVkaWFRdWVyeU1hdGNoZXJzKS5yZWR1Y2UoZnVuY3Rpb24gKG1hdGNoZXMsIGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIG1hdGNoZXMsIF9kZWZpbmVQcm9wZXJ0eSh7fSwga2V5LCBtZWRpYVF1ZXJ5TWF0Y2hlcnNba2V5XS5tYXRjaGVzKSk7XG4gICAgICAgICAgfSwge30pO1xuICAgICAgICB9KTtcblxuICAgICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwibWVkaWFRdWVyeVN0YXR1c0NoYW5nZWRDYWxsYmFja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIG1lZGlhUXVlcnlNYXRjaGVzID0gX3RoaXMuY2hlY2tNYXRjaGVycyhfdGhpcy5zdGF0ZS5tZWRpYVF1ZXJ5TWF0Y2hlcnMpO1xuXG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbWVkaWFRdWVyeU1hdGNoZXM6IG1lZGlhUXVlcnlNYXRjaGVzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBfbWVkaWFRdWVyeU1hdGNoZXJzID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIHZhciBfbWVkaWFRdWVyeU1hdGNoZXM7XG5cbiAgICAgICAgaWYgKF90aGlzLmlzU3VwcG9ydGVkRW52aXJvbm1lbnQoKSkge1xuICAgICAgICAgIF9tZWRpYVF1ZXJ5TWF0Y2hlcnMgPSBfdGhpcy5zZXR1cE1hdGNoZXJzKHByb3BzLm1lZGlhUXVlcmllcyk7XG4gICAgICAgICAgX21lZGlhUXVlcnlNYXRjaGVzID0gX3RoaXMuY2hlY2tNYXRjaGVycyhfbWVkaWFRdWVyeU1hdGNoZXJzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfbWVkaWFRdWVyeU1hdGNoZXMgPSBPYmplY3Qua2V5cyhwcm9wcy5tZWRpYVF1ZXJpZXMpLnJlZHVjZShmdW5jdGlvbiAobWF0Y2hlcywga2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgbWF0Y2hlcywgX2RlZmluZVByb3BlcnR5KHt9LCBrZXksICEhcHJvcHMuaW5pdGlhbE1hdGNoaW5nTWVkaWFRdWVyaWVzICYmIHByb3BzLmluaXRpYWxNYXRjaGluZ01lZGlhUXVlcmllcy5pbmNsdWRlcyhrZXkpKSk7XG4gICAgICAgICAgfSwge30pO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgbWVkaWFRdWVyeU1hdGNoZXJzOiBfbWVkaWFRdWVyeU1hdGNoZXJzLFxuICAgICAgICAgIG1lZGlhUXVlcnlNYXRjaGVzOiBfbWVkaWFRdWVyeU1hdGNoZXNcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgfVxuXG4gICAgICBfY3JlYXRlQ2xhc3MoUmVzcG9uc2l2ZVByb3ZpZGVyLCBbe1xuICAgICAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICAgICAgLy8gTGlmZWN5Y2xlIG1ldGhvZHNcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLm1lZGlhUXVlcnlNYXRjaGVycykge1xuICAgICAgICAgICAgdmFyIG1lZGlhUXVlcnlTdGF0dXNDaGFuZ2VkQ2FsbGJhY2sgPSB0aGlzLm1lZGlhUXVlcnlTdGF0dXNDaGFuZ2VkQ2FsbGJhY2s7XG4gICAgICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMuc3RhdGUubWVkaWFRdWVyeU1hdGNoZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChtYXRjaGVyKSB7XG4gICAgICAgICAgICAgIG1hdGNoZXIuYWRkTGlzdGVuZXIobWVkaWFRdWVyeVN0YXR1c0NoYW5nZWRDYWxsYmFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5tZWRpYVF1ZXJ5TWF0Y2hlcnMpIHtcbiAgICAgICAgICAgIHZhciBtZWRpYVF1ZXJ5U3RhdHVzQ2hhbmdlZENhbGxiYWNrID0gdGhpcy5tZWRpYVF1ZXJ5U3RhdHVzQ2hhbmdlZENhbGxiYWNrO1xuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnN0YXRlLm1lZGlhUXVlcnlNYXRjaGVycykuZm9yRWFjaChmdW5jdGlvbiAobWF0Y2hlcikge1xuICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hlci5yZW1vdmVMaXN0ZW5lcihtZWRpYVF1ZXJ5U3RhdHVzQ2hhbmdlZENhbGxiYWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6IFwic2hvdWxkQ29tcG9uZW50VXBkYXRlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUubWVkaWFRdWVyeU1hdGNoZXJzKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgaWYgKG5leHRQcm9wcy5jaGlsZHJlbiAhPT0gdGhpcy5wcm9wcy5jaGlsZHJlbikgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICBpZiAoc2hhbGxvd0VxdWFsKHRoaXMuc3RhdGUubWVkaWFRdWVyeU1hdGNoZXMsIG5leHRTdGF0ZS5tZWRpYVF1ZXJ5TWF0Y2hlcykpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUmVzcG9uc2l2ZUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLm1lZGlhUXVlcnlNYXRjaGVzXG4gICAgICAgICAgfSwgdGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIFJlc3BvbnNpdmVQcm92aWRlcjtcbiAgICB9KF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudClcbiAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUR5bmFtaWNSZXNwb25zaXZlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5JbnRlcmFjdGlvbnMgPSBleHBvcnRzLkludGVyYWN0aW9uS2V5ID0gdm9pZCAwO1xuXG52YXIgX1V0aWxzID0gcmVxdWlyZShcIi4vVXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykgeyBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlOyB9KSk7IH0gb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IH1cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIEludGVyYWN0aW9uS2V5O1xuLyoqXG4gKiBFbmNhcHN1bGF0ZXMgYWxsIGludGVyYWN0aW9uIGRhdGEgbmVlZGVkIGJ5IHRoZSBNZWRpYSBjb21wb25lbnQuIFRoZSBkYXRhIGlzXG4gKiBnZW5lcmF0ZWQgb24gaW5pdGlhbGl6YXRpb24gc28gbm8gZnVydGhlciBydW50aW1lIHdvcmsgaXMgbmVjZXNzYXJ5LlxuICovXG5cbmV4cG9ydHMuSW50ZXJhY3Rpb25LZXkgPSBJbnRlcmFjdGlvbktleTtcblxuKGZ1bmN0aW9uIChJbnRlcmFjdGlvbktleSkge1xuICBJbnRlcmFjdGlvbktleVtcImludGVyYWN0aW9uXCJdID0gXCJpbnRlcmFjdGlvblwiO1xufSkoSW50ZXJhY3Rpb25LZXkgfHwgKGV4cG9ydHMuSW50ZXJhY3Rpb25LZXkgPSBJbnRlcmFjdGlvbktleSA9IHt9KSk7XG5cbnZhciBJbnRlcmFjdGlvbnMgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBfY3JlYXRlQ2xhc3MoSW50ZXJhY3Rpb25zLCBudWxsLCBbe1xuICAgIGtleTogXCJ2YWxpZEtleXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRLZXlzKCkge1xuICAgICAgcmV0dXJuIFtJbnRlcmFjdGlvbktleS5pbnRlcmFjdGlvbl07XG4gICAgfVxuICB9XSk7XG5cbiAgZnVuY3Rpb24gSW50ZXJhY3Rpb25zKGludGVyYWN0aW9ucykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnRlcmFjdGlvbnMpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX2ludGVyYWN0aW9uc1wiLCB2b2lkIDApO1xuXG4gICAgdGhpcy5faW50ZXJhY3Rpb25zID0gaW50ZXJhY3Rpb25zO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEludGVyYWN0aW9ucywgW3tcbiAgICBrZXk6IFwidG9SdWxlU2V0c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1J1bGVTZXRzKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMuX2ludGVyYWN0aW9ucykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIF9yZWYpIHtcbiAgICAgICAgdmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMiksXG4gICAgICAgICAgICBuYW1lID0gX3JlZjJbMF0sXG4gICAgICAgICAgICBxdWVyeSA9IF9yZWYyWzFdO1xuXG4gICAgICAgIHJldHVybiBfdG9Db25zdW1hYmxlQXJyYXkoYWNjKS5jb25jYXQoWygwLCBfVXRpbHMuY3JlYXRlUnVsZVNldCkoKDAsIF9VdGlscy5jcmVhdGVDbGFzc05hbWUpKEludGVyYWN0aW9uS2V5LmludGVyYWN0aW9uLCBuYW1lKSwgcXVlcnkpXSk7XG4gICAgICB9LCBbXSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNob3VsZFJlbmRlck1lZGlhUXVlcnlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkUmVuZGVyTWVkaWFRdWVyeShpbnRlcmFjdGlvbiwgb25seU1hdGNoKSB7XG4gICAgICByZXR1cm4gISEob25seU1hdGNoICYmIG9ubHlNYXRjaC5pbmNsdWRlcyhpbnRlcmFjdGlvbikpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpbnRlcmFjdGlvbnNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9pbnRlcmFjdGlvbnMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkeW5hbWljUmVzcG9uc2l2ZU1lZGlhUXVlcmllc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMuX2ludGVyYWN0aW9ucykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIF9yZWYzKSB7XG4gICAgICAgIHZhciBfcmVmNCA9IF9zbGljZWRUb0FycmF5KF9yZWYzLCAyKSxcbiAgICAgICAgICAgIG5hbWUgPSBfcmVmNFswXSxcbiAgICAgICAgICAgIHF1ZXJ5ID0gX3JlZjRbMV07XG5cbiAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIGFjYywgX2RlZmluZVByb3BlcnR5KHt9LCBuYW1lLCBxdWVyeSkpO1xuICAgICAgfSwge30pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBJbnRlcmFjdGlvbnM7XG59KCk7XG5cbmV4cG9ydHMuSW50ZXJhY3Rpb25zID0gSW50ZXJhY3Rpb25zO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SW50ZXJhY3Rpb25zLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jcmVhdGVNZWRpYSA9IGNyZWF0ZU1lZGlhO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX0R5bmFtaWNSZXNwb25zaXZlID0gcmVxdWlyZShcIi4vRHluYW1pY1Jlc3BvbnNpdmVcIik7XG5cbnZhciBfTWVkaWFRdWVyaWVzID0gcmVxdWlyZShcIi4vTWVkaWFRdWVyaWVzXCIpO1xuXG52YXIgX1V0aWxzID0gcmVxdWlyZShcIi4vVXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHsgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykgeyBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlOyB9KSk7IH0gb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTsgdmFyIGtleSwgaTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbi8qKlxuICogVGhpcyBpcyB1c2VkIHRvIGdlbmVyYXRlIGEgTWVkaWEgY29tcG9uZW50LCBpdHMgY29udGV4dCBwcm92aWRlciwgYW5kIENTU1xuICogcnVsZXMgYmFzZWQgb24geW91ciBhcHBsaWNhdGlvbuKAmXMgYnJlYWtwb2ludHMgYW5kIGludGVyYWN0aW9ucy5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlIGludGVyYWN0aW9uIHF1ZXJpZXMgYXJlIGVudGlyZWx5IHVwIHRvIHlvdSB0byBkZWZpbmUgYW5kIHRoZXlcbiAqIHNob3VsZCBiZSB3cml0dGVuIGluIHN1Y2ggYSB3YXkgdGhhdCB0aGV5IG1hdGNoIHdoZW4geW91IHdhbnQgdGhlIGVsZW1lbnQgdG9cbiAqIGJlIGhpZGRlbi5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAgIGBgYHRzeFxuICAgY29uc3QgTXlBcHBNZWRpYSA9IGNyZWF0ZU1lZGlhKHtcbiAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICB4czogMCxcbiAgICAgICBzbTogNzY4LFxuICAgICAgIG1kOiA5MDBcbiAgICAgICBsZzogMTAyNCxcbiAgICAgICB4bDogMTE5MixcbiAgICAgfSxcbiAgICAgaW50ZXJhY3Rpb25zOiB7XG4gICAgICAgaG92ZXI6IGBub3QgYWxsIGFuZCAoaG92ZXI6aG92ZXIpYFxuICAgICB9LFxuICAgfSlcblxuICAgZXhwb3J0IGNvbnN0IE1lZGlhID0gTXlBcHBNZWRpYS5NZWRpYVxuICAgZXhwb3J0IGNvbnN0IE1lZGlhQ29udGV4dFByb3ZpZGVyID0gTXlBcHBNZWRpYS5NZWRpYUNvbnRleHRQcm92aWRlclxuICAgZXhwb3J0IGNvbnN0IGNyZWF0ZU1lZGlhU3R5bGUgPSBNeUFwcE1lZGlhLmNyZWF0ZU1lZGlhU3R5bGVcbiAgIGBgYFxuICpcbiAqL1xuZnVuY3Rpb24gY3JlYXRlTWVkaWEoY29uZmlnKSB7XG4gIHZhciBfY2xhc3MsIF90ZW1wO1xuXG4gIHZhciBtZWRpYVF1ZXJpZXMgPSBuZXcgX01lZGlhUXVlcmllcy5NZWRpYVF1ZXJpZXMoY29uZmlnLmJyZWFrcG9pbnRzLCBjb25maWcuaW50ZXJhY3Rpb25zIHx8IHt9KTtcbiAgdmFyIER5bmFtaWNSZXNwb25zaXZlID0gKDAsIF9EeW5hbWljUmVzcG9uc2l2ZS5jcmVhdGVSZXNwb25zaXZlQ29tcG9uZW50cykoKTtcblxuICB2YXIgTWVkaWFDb250ZXh0ID0gX3JlYWN0LmRlZmF1bHQuY3JlYXRlQ29udGV4dCh7fSk7XG5cbiAgTWVkaWFDb250ZXh0LmRpc3BsYXlOYW1lID0gXCJNZWRpYS5Db250ZXh0XCI7XG5cbiAgdmFyIE1lZGlhUGFyZW50Q29udGV4dCA9IF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUNvbnRleHQoe1xuICAgIGhhc1BhcmVudE1lZGlhOiBmYWxzZSxcbiAgICBicmVha3BvaW50UHJvcHM6IHt9XG4gIH0pO1xuXG4gIE1lZGlhQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiTWVkaWFQYXJlbnQuQ29udGV4dFwiO1xuXG4gIHZhciBNZWRpYUNvbnRleHRQcm92aWRlciA9IGZ1bmN0aW9uIE1lZGlhQ29udGV4dFByb3ZpZGVyKF9yZWYpIHtcbiAgICB2YXIgZGlzYWJsZUR5bmFtaWNNZWRpYVF1ZXJpZXMgPSBfcmVmLmRpc2FibGVEeW5hbWljTWVkaWFRdWVyaWVzLFxuICAgICAgICBvbmx5TWF0Y2ggPSBfcmVmLm9ubHlNYXRjaCxcbiAgICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuXG4gICAgaWYgKGRpc2FibGVEeW5hbWljTWVkaWFRdWVyaWVzKSB7XG4gICAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChNZWRpYUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICBvbmx5TWF0Y2g6IG9ubHlNYXRjaFxuICAgICAgICB9XG4gICAgICB9LCBjaGlsZHJlbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KER5bmFtaWNSZXNwb25zaXZlLlByb3ZpZGVyLCB7XG4gICAgICAgIG1lZGlhUXVlcmllczogbWVkaWFRdWVyaWVzLmR5bmFtaWNSZXNwb25zaXZlTWVkaWFRdWVyaWVzLFxuICAgICAgICBpbml0aWFsTWF0Y2hpbmdNZWRpYVF1ZXJpZXM6ICgwLCBfVXRpbHMuaW50ZXJzZWN0aW9uKShtZWRpYVF1ZXJpZXMubWVkaWFRdWVyeVR5cGVzLCBvbmx5TWF0Y2gpXG4gICAgICB9LCBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KER5bmFtaWNSZXNwb25zaXZlLkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAobWF0Y2hlcykge1xuICAgICAgICB2YXIgbWF0Y2hpbmdNZWRpYVF1ZXJpZXMgPSBPYmplY3Qua2V5cyhtYXRjaGVzKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIHJldHVybiBtYXRjaGVzW2tleV07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChNZWRpYUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgb25seU1hdGNoOiAoMCwgX1V0aWxzLmludGVyc2VjdGlvbikobWF0Y2hpbmdNZWRpYVF1ZXJpZXMsIG9ubHlNYXRjaClcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGNoaWxkcmVuKTtcbiAgICAgIH0pKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIE1lZGlhID0gKF90ZW1wID0gX2NsYXNzID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhNZWRpYSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBNZWRpYShwcm9wcykge1xuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWVkaWEpO1xuXG4gICAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihNZWRpYSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuICAgICAgdmFsaWRhdGVQcm9wcyhwcm9wcyk7XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE1lZGlhLCBbe1xuICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcblxuICAgICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICAgIHBhc3NlZENsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIGludGVyYWN0aW9uID0gcHJvcHMuaW50ZXJhY3Rpb24sXG4gICAgICAgICAgICBicmVha3BvaW50UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNoaWxkcmVuXCIsIFwiY2xhc3NOYW1lXCIsIFwiaW50ZXJhY3Rpb25cIl0pO1xuXG4gICAgICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE1lZGlhUGFyZW50Q29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKG1lZGlhUGFyZW50Q29udGV4dCkge1xuICAgICAgICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE1lZGlhUGFyZW50Q29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgaGFzUGFyZW50TWVkaWE6IHRydWUsXG4gICAgICAgICAgICAgIGJyZWFrcG9pbnRQcm9wczogYnJlYWtwb2ludFByb3BzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChNZWRpYUNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfcmVmMiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICAgICAgICAgICAgb25seU1hdGNoID0gX3JlZjIub25seU1hdGNoO1xuXG4gICAgICAgICAgICB2YXIgY2xhc3NOYW1lO1xuXG4gICAgICAgICAgICBpZiAocHJvcHMuaW50ZXJhY3Rpb24pIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lID0gKDAsIF9VdGlscy5jcmVhdGVDbGFzc05hbWUpKFwiaW50ZXJhY3Rpb25cIiwgcHJvcHMuaW50ZXJhY3Rpb24pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKHByb3BzLmF0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGxhcmdlc3RCcmVha3BvaW50ID0gbWVkaWFRdWVyaWVzLmJyZWFrcG9pbnRzLmxhcmdlc3RCcmVha3BvaW50O1xuXG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLmF0ID09PSBsYXJnZXN0QnJlYWtwb2ludCkge1xuICAgICAgICAgICAgICAgICAgLy8gVE9ETzogV2Ugc2hvdWxkIGxvb2sgaW50byBtYWtpbmcgUmVhY3TigJlzIF9fREVWX18gYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICBhbmQgaGF2ZSB3ZWJwYWNrIGNvbXBsZXRlbHkgY29tcGlsZSB0aGVzZSBhd2F5LlxuICAgICAgICAgICAgICAgICAgdmFyIG93bmVyTmFtZSA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvd25lciA9IF90aGlzMi5fcmVhY3RJbnRlcm5hbEZpYmVyLl9kZWJ1Z093bmVyLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgIG93bmVyTmFtZSA9IG93bmVyLmRpc3BsYXlOYW1lIHx8IG93bmVyLm5hbWU7XG4gICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHsvLyBuby1vcFxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbQGFydHN5L2ZyZXNuZWxdIFwiICsgXCJgYXRgIGlzIGJlaW5nIHVzZWQgd2l0aCB0aGUgbGFyZ2VzdCBicmVha3BvaW50LiBcIiArIFwiQ29uc2lkZXIgdXNpbmcgYDxNZWRpYSBncmVhdGVyVGhhbk9yRXF1YWw9XCIgKyBcIlxcXCJcIi5jb25jYXQobGFyZ2VzdEJyZWFrcG9pbnQsIFwiXFxcIj5gIHRvIGFjY291bnQgZm9yIGZ1dHVyZSBcIikgKyBcImJyZWFrcG9pbnQgZGVmaW5pdGlvbnMgb3V0c2lkZSBvZiB0aGlzIHJhbmdlLlwiLmNvbmNhdChvd25lck5hbWUgPyBcIiBJdCBpcyBiZWluZyB1c2VkIGluIHRoZSBcIi5jb25jYXQob3duZXJOYW1lLCBcIiBjb21wb25lbnQuXCIpIDogXCJcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHZhciB0eXBlID0gKDAsIF9VdGlscy5wcm9wS2V5KShicmVha3BvaW50UHJvcHMpO1xuICAgICAgICAgICAgICB2YXIgYnJlYWtwb2ludCA9IGJyZWFrcG9pbnRQcm9wc1t0eXBlXTtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lID0gKDAsIF9VdGlscy5jcmVhdGVDbGFzc05hbWUpKHR5cGUsIGJyZWFrcG9pbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgZG9lc01hdGNoUGFyZW50ID0gIW1lZGlhUGFyZW50Q29udGV4dC5oYXNQYXJlbnRNZWRpYSB8fCAoMCwgX1V0aWxzLmludGVyc2VjdGlvbikobWVkaWFRdWVyaWVzLmJyZWFrcG9pbnRzLnRvVmlzaWJsZUF0QnJlYWtwb2ludFNldChtZWRpYVBhcmVudENvbnRleHQuYnJlYWtwb2ludFByb3BzKSwgbWVkaWFRdWVyaWVzLmJyZWFrcG9pbnRzLnRvVmlzaWJsZUF0QnJlYWtwb2ludFNldChicmVha3BvaW50UHJvcHMpKS5sZW5ndGggPiAwO1xuICAgICAgICAgICAgdmFyIHJlbmRlckNoaWxkcmVuID0gZG9lc01hdGNoUGFyZW50ICYmIChvbmx5TWF0Y2ggPT09IHVuZGVmaW5lZCB8fCBtZWRpYVF1ZXJpZXMuc2hvdWxkUmVuZGVyTWVkaWFRdWVyeShfb2JqZWN0U3ByZWFkKHt9LCBicmVha3BvaW50UHJvcHMsIHtcbiAgICAgICAgICAgICAgaW50ZXJhY3Rpb246IGludGVyYWN0aW9uXG4gICAgICAgICAgICB9KSwgb25seU1hdGNoKSk7XG5cbiAgICAgICAgICAgIGlmIChwcm9wcy5jaGlsZHJlbiBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9wcy5jaGlsZHJlbihjbGFzc05hbWUsIHJlbmRlckNoaWxkcmVuKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZnJlc25lbC1jb250YWluZXIgXCIuY29uY2F0KGNsYXNzTmFtZSwgXCIgXCIpLmNvbmNhdChwYXNzZWRDbGFzc05hbWUpLFxuICAgICAgICAgICAgICAgIHN1cHByZXNzSHlkcmF0aW9uV2FybmluZzogIXJlbmRlckNoaWxkcmVuXG4gICAgICAgICAgICAgIH0sIHJlbmRlckNoaWxkcmVuID8gcHJvcHMuY2hpbGRyZW4gOiBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNZWRpYTtcbiAgfShfcmVhY3QuZGVmYXVsdC5Db21wb25lbnQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzLCBcImRlZmF1bHRQcm9wc1wiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiXG4gIH0pLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzLCBcImNvbnRleHRUeXBlXCIsIE1lZGlhUGFyZW50Q29udGV4dCksIF90ZW1wKTtcbiAgcmV0dXJuIHtcbiAgICBNZWRpYTogTWVkaWEsXG4gICAgTWVkaWFDb250ZXh0UHJvdmlkZXI6IE1lZGlhQ29udGV4dFByb3ZpZGVyLFxuICAgIGNyZWF0ZU1lZGlhU3R5bGU6IG1lZGlhUXVlcmllcy50b1N0eWxlLFxuICAgIFNvcnRlZEJyZWFrcG9pbnRzOiBfdG9Db25zdW1hYmxlQXJyYXkobWVkaWFRdWVyaWVzLmJyZWFrcG9pbnRzLnNvcnRlZEJyZWFrcG9pbnRzKSxcbiAgICBmaW5kQnJlYWtwb2ludEF0V2lkdGg6IG1lZGlhUXVlcmllcy5icmVha3BvaW50cy5maW5kQnJlYWtwb2ludEF0V2lkdGgsXG4gICAgZmluZEJyZWFrcG9pbnRzRm9yV2lkdGhzOiBtZWRpYVF1ZXJpZXMuYnJlYWtwb2ludHMuZmluZEJyZWFrcG9pbnRzRm9yV2lkdGhzLFxuICAgIHZhbHVlc1dpdGhCcmVha3BvaW50UHJvcHM6IG1lZGlhUXVlcmllcy5icmVha3BvaW50cy52YWx1ZXNXaXRoQnJlYWtwb2ludFByb3BzXG4gIH07XG59XG5cbnZhciBNdXR1YWxseUV4Y2x1c2l2ZVByb3BzID0gX01lZGlhUXVlcmllcy5NZWRpYVF1ZXJpZXMudmFsaWRLZXlzKCk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcHMocHJvcHMpIHtcbiAgdmFyIHNlbGVjdGVkUHJvcHMgPSBPYmplY3Qua2V5cyhwcm9wcykuZmlsdGVyKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgcmV0dXJuIE11dHVhbGx5RXhjbHVzaXZlUHJvcHMuaW5jbHVkZXMocHJvcCk7XG4gIH0pO1xuXG4gIGlmIChzZWxlY3RlZFByb3BzLmxlbmd0aCA8IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCIxIG9mIFwiLmNvbmNhdChNdXR1YWxseUV4Y2x1c2l2ZVByb3BzLmpvaW4oXCIsIFwiKSwgXCIgaXMgcmVxdWlyZWQuXCIpKTtcbiAgfSBlbHNlIGlmIChzZWxlY3RlZFByb3BzLmxlbmd0aCA+IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJPbmx5IDEgb2YgXCIuY29uY2F0KHNlbGVjdGVkUHJvcHMuam9pbihcIiwgXCIpLCBcIiBpcyBhbGxvd2VkIGF0IGEgdGltZS5cIikpO1xuICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1NZWRpYS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuTWVkaWFRdWVyaWVzID0gdm9pZCAwO1xuXG52YXIgX0JyZWFrcG9pbnRzID0gcmVxdWlyZShcIi4vQnJlYWtwb2ludHNcIik7XG5cbnZhciBfSW50ZXJhY3Rpb25zID0gcmVxdWlyZShcIi4vSW50ZXJhY3Rpb25zXCIpO1xuXG52YXIgX1V0aWxzID0gcmVxdWlyZShcIi4vVXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykgeyBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlOyB9KSk7IH0gb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTsgdmFyIGtleSwgaTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG4vKipcbiAqIEVuY2Fwc3VsYXRlcyBhbGwgaW50ZXJhY3Rpb24gZGF0YSAoYW5kIGJyZWFrcG9pbnQgZGF0YSBpbiB0aGUgc3VwZXJjbGFzcylcbiAqIG5lZWRlZCBieSB0aGUgTWVkaWEgY29tcG9uZW50LiBUaGUgZGF0YSBpcyBnZW5lcmF0ZWQgb24gaW5pdGlhbGl6YXRpb24gc28gbm9cbiAqIGZ1cnRoZXIgcnVudGltZSB3b3JrIGlzIG5lY2Vzc2FyeS5cbiAqL1xudmFyIE1lZGlhUXVlcmllcyA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIF9jcmVhdGVDbGFzcyhNZWRpYVF1ZXJpZXMsIG51bGwsIFt7XG4gICAga2V5OiBcInZhbGlkS2V5c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWxpZEtleXMoKSB7XG4gICAgICByZXR1cm4gX3RvQ29uc3VtYWJsZUFycmF5KF9CcmVha3BvaW50cy5CcmVha3BvaW50cy52YWxpZEtleXMoKSkuY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShfSW50ZXJhY3Rpb25zLkludGVyYWN0aW9ucy52YWxpZEtleXMoKSkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIGZ1bmN0aW9uIE1lZGlhUXVlcmllcyhicmVha3BvaW50cywgaW50ZXJhY3Rpb25zKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNZWRpYVF1ZXJpZXMpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX2JyZWFrcG9pbnRzXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfaW50ZXJhY3Rpb25zXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ0b1N0eWxlXCIsIGZ1bmN0aW9uIChicmVha3BvaW50S2V5cykge1xuICAgICAgcmV0dXJuIFsvLyBEb27igJl0IGFkZCBhbnkgc2l6ZSB0byB0aGUgbGF5b3V0XG4gICAgICBcIi5mcmVzbmVsLWNvbnRhaW5lcnttYXJnaW46MDtwYWRkaW5nOjA7fVwiXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KF90aGlzLl9icmVha3BvaW50cy50b1J1bGVTZXRzKGJyZWFrcG9pbnRLZXlzKSksIF90b0NvbnN1bWFibGVBcnJheShfdGhpcy5faW50ZXJhY3Rpb25zLnRvUnVsZVNldHMoKSkpLmpvaW4oXCJcXG5cIik7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9icmVha3BvaW50cyA9IG5ldyBfQnJlYWtwb2ludHMuQnJlYWtwb2ludHMoYnJlYWtwb2ludHMpO1xuICAgIHRoaXMuX2ludGVyYWN0aW9ucyA9IG5ldyBfSW50ZXJhY3Rpb25zLkludGVyYWN0aW9ucyhpbnRlcmFjdGlvbnMgfHwge30pO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1lZGlhUXVlcmllcywgW3tcbiAgICBrZXk6IFwic2hvdWxkUmVuZGVyTWVkaWFRdWVyeVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRSZW5kZXJNZWRpYVF1ZXJ5KG1lZGlhUXVlcnlQcm9wcywgb25seU1hdGNoKSB7XG4gICAgICB2YXIgaW50ZXJhY3Rpb24gPSBtZWRpYVF1ZXJ5UHJvcHMuaW50ZXJhY3Rpb24sXG4gICAgICAgICAgYnJlYWtwb2ludFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG1lZGlhUXVlcnlQcm9wcywgW1wiaW50ZXJhY3Rpb25cIl0pO1xuXG4gICAgICBpZiAoaW50ZXJhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludGVyYWN0aW9ucy5zaG91bGRSZW5kZXJNZWRpYVF1ZXJ5KGludGVyYWN0aW9uLCBvbmx5TWF0Y2gpO1xuICAgICAgfSAvLyBSZW1vdmUgYW55IGludGVyYWN0aW9uIHBvc3NpYmlsaXRpZXMgZnJvbSB0aGUgbGlzdC5cblxuXG4gICAgICB2YXIgb25seU1hdGNoQnJlYWtwb2ludHMgPSAoMCwgX1V0aWxzLmludGVyc2VjdGlvbikob25seU1hdGNoLCB0aGlzLl9icmVha3BvaW50cy5zb3J0ZWRCcmVha3BvaW50cyk7XG4gICAgICByZXR1cm4gdGhpcy5fYnJlYWtwb2ludHMuc2hvdWxkUmVuZGVyTWVkaWFRdWVyeShicmVha3BvaW50UHJvcHMsIG9ubHlNYXRjaEJyZWFrcG9pbnRzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYnJlYWtwb2ludHNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9icmVha3BvaW50cztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibWVkaWFRdWVyeVR5cGVzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX3RvQ29uc3VtYWJsZUFycmF5KHRoaXMuX2JyZWFrcG9pbnRzLnNvcnRlZEJyZWFrcG9pbnRzKS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHRoaXMuX2ludGVyYWN0aW9ucy5pbnRlcmFjdGlvbnMpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZHluYW1pY1Jlc3BvbnNpdmVNZWRpYVF1ZXJpZXNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCB0aGlzLl9icmVha3BvaW50cy5keW5hbWljUmVzcG9uc2l2ZU1lZGlhUXVlcmllcywgdGhpcy5faW50ZXJhY3Rpb25zLmR5bmFtaWNSZXNwb25zaXZlTWVkaWFRdWVyaWVzKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWVkaWFRdWVyaWVzO1xufSgpO1xuXG5leHBvcnRzLk1lZGlhUXVlcmllcyA9IE1lZGlhUXVlcmllcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU1lZGlhUXVlcmllcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucHJvcEtleSA9IHByb3BLZXk7XG5leHBvcnRzLmludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbjtcbmV4cG9ydHMuY3JlYXRlUnVsZVNldCA9IGNyZWF0ZVJ1bGVTZXQ7XG5leHBvcnRzLmNyZWF0ZUNsYXNzTmFtZSA9IGNyZWF0ZUNsYXNzTmFtZTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IH1cblxuLyoqXG4gKiBFeHRyYWN0cyB0aGUgc2luZ2xlIGJyZWFrcG9pbnQgcHJvcCBmcm9tIHRoZSBwcm9wcyBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIHByb3BLZXkoYnJlYWtwb2ludFByb3BzKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhicmVha3BvaW50UHJvcHMpWzBdO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbnRlcnNlY3Rpb24gb2YgdHdvIGFycmF5cy5cbiAqL1xuXG5cbmZ1bmN0aW9uIGludGVyc2VjdGlvbihhMSwgYTIpIHtcbiAgcmV0dXJuIGEyID8gYTEuZmlsdGVyKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGEyLmluZGV4T2YoZWxlbWVudCkgPj0gMDtcbiAgfSkgOiBfdG9Db25zdW1hYmxlQXJyYXkoYTEpO1xufVxuLyoqXG4gKiBHZW5lcmF0ZSBhIHN0eWxlIHJ1bGUgZm9yIGEgZ2l2ZW4gY2xhc3MgbmFtZSB0aGF0IHdpbGwgaGlkZSB0aGUgZWxlbWVudFxuICogd2hlbiB0aGUgZ2l2ZW4gcXVlcnkgbWF0Y2hlcy5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVJ1bGVTZXQoY2xhc3NOYW1lLCBxdWVyeSkge1xuICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KHF1ZXJ5LCBcInsuXCIpLmNvbmNhdChjbGFzc05hbWUsIFwie2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnQ7fX1cIik7XG59XG4vKipcbiAqIEdpdmVuIGEgbGlzdCBvZiBzdHJpbmdzLCBvciBzdHJpbmcgdHVwbGVzLCBnZW5lcmF0ZXMgYSBjbGFzcyBuYW1lLlxuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlQ2xhc3NOYW1lKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgY29tcG9uZW50cyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBjb21wb25lbnRzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIFtcImZyZXNuZWxcIl0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShjb21wb25lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBicmVha3BvaW50KSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYnJlYWtwb2ludCkgPyBfdG9Db25zdW1hYmxlQXJyYXkoYWNjKS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGJyZWFrcG9pbnQpKSA6IF90b0NvbnN1bWFibGVBcnJheShhY2MpLmNvbmNhdChbYnJlYWtwb2ludF0pO1xuICB9LCBbXSkpKS5qb2luKFwiLVwiKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVV0aWxzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiY3JlYXRlTWVkaWFcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX01lZGlhLmNyZWF0ZU1lZGlhO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkJyZWFrcG9pbnRLZXlcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX0JyZWFrcG9pbnRzLkJyZWFrcG9pbnRDb25zdHJhaW50O1xuICB9XG59KTtcblxudmFyIF9NZWRpYSA9IHJlcXVpcmUoXCIuL01lZGlhXCIpO1xuXG52YXIgX0JyZWFrcG9pbnRzID0gcmVxdWlyZShcIi4vQnJlYWtwb2ludHNcIik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQge2NyZWF0ZU1lZGlhfSBmcm9tICdAYXJ0c3kvZnJlc25lbCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcblx0QnV0dG9uLFxyXG5cdENvbnRhaW5lcixcclxuXHRNZW51LFxyXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuXHJcbmNvbnN0IHtNZWRpYUNvbnRleHRQcm92aWRlcn0gPSBjcmVhdGVNZWRpYSh7XHJcblx0YnJlYWtwb2ludHM6IHtcclxuXHRcdG1vYmlsZTogMCxcclxuXHRcdHRhYmxldDogNzY4LFxyXG5cdFx0Y29tcHV0ZXI6IDEwMjQsXHJcblx0fSxcclxufSlcclxuXHJcbmNvbnN0IE5hdkNvbnRhaW5lciA9IChwcm9wcykgPT4ge1xyXG5cdGNvbnN0IHtjaGlsZHJlbn0gPSBwcm9wcztcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PE1lbnVcclxuXHRcdFx0XHRmaXhlZD17J3RvcCd9XHJcblx0XHRcdFx0aW52ZXJ0ZWRcclxuXHRcdFx0XHRwb2ludGluZ1xyXG5cdFx0XHRcdHNlY29uZGFyeVxyXG5cdFx0XHRcdHNpemU9J2xhcmdlJ1xyXG5cdFx0XHRcdHN0eWxlPXt7YmFja2dyb3VuZDogJ2JsYWNrJ319XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8Q29udGFpbmVyPlxyXG5cdFx0XHRcdFx0PE1lbnUuSXRlbSBhcz0nYScgYWN0aXZlPlxyXG5cdFx0XHRcdFx0XHRIb21lXHJcblx0XHRcdFx0XHQ8L01lbnUuSXRlbT5cclxuXHRcdFx0XHRcdDxNZW51Lkl0ZW0gcG9zaXRpb249J3JpZ2h0Jz5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBhcz0nYScgaW52ZXJ0ZWQ+XHJcblx0XHRcdFx0XHRcdFx0TG9hZFxyXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0ey8qPEJ1dHRvbiBhcz0nYScgaW52ZXJ0ZWQgcHJpbWFyeSBzdHlsZT17e21hcmdpbkxlZnQ6ICcwLjVlbSd9fT4qL31cclxuXHRcdFx0XHRcdFx0ey8qU2F2ZSovfVxyXG5cdFx0XHRcdFx0XHR7Lyo8L0J1dHRvbj4qL31cclxuXHRcdFx0XHRcdDwvTWVudS5JdGVtPlxyXG5cdFx0XHRcdDwvQ29udGFpbmVyPlxyXG5cdFx0XHQ8L01lbnU+XHJcblxyXG5cdFx0XHR7Y2hpbGRyZW59XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG5cclxufTtcclxuXHJcbmNvbnN0IE5hdiA9IChwcm9wcykgPT4ge1xyXG5cdGNvbnN0IHtjaGlsZHJlbn0gPSBwcm9wcztcclxuXHRyZXR1cm4gKFxyXG5cdFx0PE1lZGlhQ29udGV4dFByb3ZpZGVyPlxyXG5cdFx0XHQ8TmF2Q29udGFpbmVyPntjaGlsZHJlbn08L05hdkNvbnRhaW5lcj5cclxuXHRcdDwvTWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2XHJcbiIsImltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnO1xyXG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvTmF2JztcclxuXHJcbi8vIFRoaXMgZGVmYXVsdCBleHBvcnQgaXMgcmVxdWlyZWQgaW4gYSBuZXcgYHBhZ2VzL19hcHAuanNgIGZpbGUuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHtDb21wb25lbnQsIHBhZ2VQcm9wc30pIHtcclxuXHRyZXR1cm4gPE5hdj48Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+PC9OYXY+O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=