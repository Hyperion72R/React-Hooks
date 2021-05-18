self["webpackHotUpdate_N_E"]("pages/syntax",{

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _readOnlyError; }
/* harmony export */ });
function _readOnlyError(name) {
  throw new TypeError("\"" + name + "\" is read-only");
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
/* harmony import */ var C_Users_troty_Desktop_React_Hooks_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\troty\\Desktop\\React-Hooks\\pages\\syntax.js",
    _this = undefined,
    _s = $RefreshSig$();



var Syntax = function Syntax() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      checkBoxValue = _useState[0],
      setcheckBoxValue = _useState[1];

  var handleChange = function handleChange(e) {
    var checked = e.target.checked;
    setcheckBoxValue = ((0,C_Users_troty_Desktop_React_Hooks_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__.default)("setcheckBoxValue"), checked);
    console.log(checked);
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
      type: "checkbox",
      onChange: handleChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(Syntax, "dpPi49p+K+FgYiQRucWn1Rg8wYA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3JlYWRPbmx5RXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3N5bnRheC5qcyJdLCJuYW1lcyI6WyJTeW50YXgiLCJ1c2VTdGF0ZSIsImNoZWNrQm94VmFsdWUiLCJzZXRjaGVja0JveFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsImNoZWNrZWQiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUN1QkMsK0NBQVEsQ0FBQyxLQUFELENBRC9CO0FBQUEsTUFDWkMsYUFEWTtBQUFBLE1BQ0dDLGdCQURIOztBQUduQixNQUFJQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFVQyxDQUFWLEVBQWE7QUFDOUIsUUFBSUMsT0FBTyxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0QsT0FBdkI7QUFDQUgsb0JBQWdCLHlKQUFHRyxPQUFILENBQWhCO0FBQ0FFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxPQUFaO0FBQ0QsR0FKRDs7QUFNQUksa0RBQVMsQ0FBQyxZQUFNO0FBQ2RGLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7QUFDQSxXQUFPLFlBQU07QUFDWEQsYUFBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7QUFDRCxLQUZEO0FBR0QsR0FMUSxFQUtOLENBQUNQLGFBQUQsQ0FMTSxDQUFUO0FBT0Esc0JBQ0U7QUFBQSwyQkFDRTtBQUFPLFVBQUksRUFBQyxTQUFaO0FBQXNCLFVBQUksRUFBQyxVQUEzQjtBQUFzQyxjQUFRLEVBQUVFO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQUtELENBckJEOztHQUFNSixNOztLQUFBQSxNO0FBdUJOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N5bnRheC44YTdhMmY1NmIxMDliNDVhNzQ3Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3JlYWRPbmx5RXJyb3IobmFtZSkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiXFxcIlwiICsgbmFtZSArIFwiXFxcIiBpcyByZWFkLW9ubHlcIik7XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFN5bnRheCA9ICgpID0+IHtcclxuICBjb25zdCBbY2hlY2tCb3hWYWx1ZSwgc2V0Y2hlY2tCb3hWYWx1ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGxldCBoYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgbGV0IGNoZWNrZWQgPSBlLnRhcmdldC5jaGVja2VkO1xyXG4gICAgc2V0Y2hlY2tCb3hWYWx1ZSA9IGNoZWNrZWQ7XHJcbiAgICBjb25zb2xlLmxvZyhjaGVja2VkKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJpbiB1c2VFZmZlY3RcIik7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImluIHVzZUVmZmVjdCBDbGVhbnVwXCIpO1xyXG4gICAgfTtcclxuICB9LCBbY2hlY2tCb3hWYWx1ZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGlucHV0IG5hbWU9XCJpc0dvaW5nXCIgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTeW50YXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=