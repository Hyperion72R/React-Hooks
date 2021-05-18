self["webpackHotUpdate_N_E"]("pages/syntax",{

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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
      checkBoxValue = _useState[0],
      setCheckBoxValue = _useState[1];

  var handleChange = function handleChange(e) {
    var checked = e.target.checked;
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
      type: "checkbox",
      defaultChecked: checkBoxValue,
      onChange: handleChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(Syntax, "m2tAXKEf0pzT9Pe6Mg6eeJI1vi8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3ludGF4LmpzIl0sIm5hbWVzIjpbIlN5bnRheCIsInVzZVN0YXRlIiwiY2hlY2tCb3hWYWx1ZSIsInNldENoZWNrQm94VmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwiY2hlY2tlZCIsInRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBSUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUN1QkMsK0NBQVEsQ0FBQyxJQUFELENBRC9CO0FBQUEsTUFDWkMsYUFEWTtBQUFBLE1BQ0dDLGdCQURIOztBQUdqQixNQUFJQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFVQyxDQUFWLEVBQWE7QUFDOUIsUUFBSUMsT0FBTyxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0QsT0FBdkI7QUFDQUgsb0JBQWdCLG1CQUFNRCxhQUFOLEVBQWhCO0FBQ0FNLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxPQUFaLEVBSDhCLENBSTlCO0FBQ0E7QUFDRCxHQU5EOztBQVFBSSxrREFBUyxDQUFDLFlBQU07QUFDZEYsV0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNBLFdBQU8sWUFBTTtBQUNYRCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUNELEtBRkQ7QUFHRCxHQUxRLEVBS04sQ0FBQ1AsYUFBRCxDQUxNLENBQVQ7QUFPQSxzQkFDRTtBQUFBLDJCQUNFO0FBQ0UsVUFBSSxFQUFDLFNBRFA7QUFFRSxVQUFJLEVBQUMsVUFGUDtBQUdFLG9CQUFjLEVBQUVBLGFBSGxCO0FBSUUsY0FBUSxFQUFFRTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQVVELENBNUJEOztHQUFJSixNOztLQUFBQSxNO0FBOEJKLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N5bnRheC45OWM3NmRmNTIzMWM2YjdkMGIzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5cclxubGV0IFN5bnRheCA9ICgpID0+IHtcclxuICBsZXQgW2NoZWNrQm94VmFsdWUsIHNldENoZWNrQm94VmFsdWVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGxldCBoYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgbGV0IGNoZWNrZWQgPSBlLnRhcmdldC5jaGVja2VkO1xyXG4gICAgc2V0Q2hlY2tCb3hWYWx1ZSh7IC4uLmNoZWNrQm94VmFsdWUgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhjaGVja2VkKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiVEVTVFwiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGNoZWNrQm94VmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImluIHVzZUVmZmVjdFwiKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiaW4gdXNlRWZmZWN0IENsZWFudXBcIik7XHJcbiAgICB9O1xyXG4gIH0sIFtjaGVja0JveFZhbHVlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBuYW1lPVwiaXNHb2luZ1wiXHJcbiAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICBkZWZhdWx0Q2hlY2tlZD17Y2hlY2tCb3hWYWx1ZX1cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN5bnRheDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==