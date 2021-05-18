self["webpackHotUpdate_N_E"]("pages/syntax",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/syntax.js":
/*!*************************!*\
  !*** ./pages/syntax.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_troty_Desktop_React_Hooks_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\troty\\Desktop\\React-Hooks\\pages\\syntax.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_troty_Desktop_React_Hooks_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Syntax = function Syntax() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),
      checkBoxValue = _useState[0],
      setCheckBoxValue = _useState[1];

  var handleChange = function handleChange(e) {
    var checked = e.target.value;
    setCheckBoxValue(_objectSpread({}, checkBoxValue));
    console.log(checked); // console.log("TEST");
    // console.log(checkBoxValue);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    console.log("in useEffect");
    return function () {
      console.log("in useEffect Cleanup");
    };
  }, [checkBoxValue]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      name: "isGoing",
      type: "checkbox" // defaultChecked={checkBoxValue}
      ,
      onChange: handleChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(Syntax, "Ly6YmuFe3UhEWNj+xt4r3JGMgno=");

_c = Syntax;
/* harmony default export */ __webpack_exports__["default"] = (Syntax);

var _c;

$RefreshReg$(_c, "Syntax");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9zeW50YXguanMiXSwibmFtZXMiOlsiU3ludGF4IiwidXNlU3RhdGUiLCJjaGVja0JveFZhbHVlIiwic2V0Q2hlY2tCb3hWYWx1ZSIsImhhbmRsZUNoYW5nZSIsImUiLCJjaGVja2VkIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7O0FBRUEsSUFBSUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUN1QkMsK0NBQVEsQ0FBQyxFQUFELENBRC9CO0FBQUEsTUFDWkMsYUFEWTtBQUFBLE1BQ0dDLGdCQURIOztBQUdqQixNQUFJQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFVQyxDQUFWLEVBQWE7QUFDOUIsUUFBSUMsT0FBTyxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBdkI7QUFDQUwsb0JBQWdCLG1CQUFNRCxhQUFOLEVBQWhCO0FBQ0FPLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixPQUFaLEVBSDhCLENBSTlCO0FBQ0E7QUFDRCxHQU5EOztBQVFBSyxrREFBUyxDQUFDLFlBQU07QUFDZEYsV0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNBLFdBQU8sWUFBTTtBQUNYRCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUNELEtBRkQ7QUFHRCxHQUxRLEVBS04sQ0FBQ1IsYUFBRCxDQUxNLENBQVQ7QUFPQSxzQkFDRTtBQUFBLDJCQUNFO0FBQ0UsVUFBSSxFQUFDLFNBRFA7QUFFRSxVQUFJLEVBQUMsVUFGUCxDQUdFO0FBSEY7QUFJRSxjQUFRLEVBQUVFO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBV0QsQ0E3QkQ7O0dBQUlKLE07O0tBQUFBLE07QUErQkosK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3ludGF4LjY0MmE2YTc1NDlkZTEzZTY3OGJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcblxyXG5sZXQgU3ludGF4ID0gKCkgPT4ge1xyXG4gIGxldCBbY2hlY2tCb3hWYWx1ZSwgc2V0Q2hlY2tCb3hWYWx1ZV0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIGxldCBoYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgbGV0IGNoZWNrZWQgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHNldENoZWNrQm94VmFsdWUoeyAuLi5jaGVja0JveFZhbHVlIH0pO1xyXG4gICAgY29uc29sZS5sb2coY2hlY2tlZCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIlRFU1RcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhjaGVja0JveFZhbHVlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJpbiB1c2VFZmZlY3RcIik7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImluIHVzZUVmZmVjdCBDbGVhbnVwXCIpO1xyXG4gICAgfTtcclxuICB9LCBbY2hlY2tCb3hWYWx1ZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgbmFtZT1cImlzR29pbmdcIlxyXG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgLy8gZGVmYXVsdENoZWNrZWQ9e2NoZWNrQm94VmFsdWV9XHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgLz5cclxuICAgICAgey8qIDxpbnB1dCBuYW1lPVwiaXNHb2luZ1wiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3NldENoZWNrQm94VmFsdWV9IC8+ICovfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN5bnRheDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==