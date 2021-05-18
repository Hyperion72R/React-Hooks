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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\troty\\Desktop\\React-Hooks\\pages\\syntax.js",
    _this = undefined,
    _s = $RefreshSig$();




var Syntax = function Syntax() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      checkBoxValue = _useState[0],
      setCheckBoxValue = _useState[1];

  setCheckBoxValue = function setCheckBoxValue(e) {
    checkBoxValue = e.target.checked;
    console.log(checkBoxValue); // console.log("TEST");
    // console.log(checkBoxValue);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
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
      onChange: setCheckBoxValue
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(Syntax, "wE0HdO4g7J2KRd1NDwcm1BrwifU=");

_c = Syntax;

function MainSyntax() {
  function render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Syntax, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)
    }, void 0, false);
  }

  render();
}

_c2 = MainSyntax;
/* harmony default export */ __webpack_exports__["default"] = (MainSyntax);

var _c, _c2;

$RefreshReg$(_c, "Syntax");
$RefreshReg$(_c2, "MainSyntax");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3ludGF4LmpzIl0sIm5hbWVzIjpbIlN5bnRheCIsInVzZVN0YXRlIiwiY2hlY2tCb3hWYWx1ZSIsInNldENoZWNrQm94VmFsdWUiLCJlIiwidGFyZ2V0IiwiY2hlY2tlZCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJNYWluU3ludGF4IiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQUlBLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxrQkFDdUJDLCtDQUFRLENBQUMsS0FBRCxDQUQvQjtBQUFBLE1BQ1pDLGFBRFk7QUFBQSxNQUNHQyxnQkFESDs7QUFHakJBLGtCQUFnQixHQUFHLDBCQUFVQyxDQUFWLEVBQWE7QUFDOUJGLGlCQUFhLEdBQUdFLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxPQUF6QjtBQUVBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWU4sYUFBWixFQUg4QixDQUk5QjtBQUNBO0FBQ0QsR0FORDs7QUFRQU8sa0RBQVMsQ0FBQyxZQUFNO0FBQ2RGLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7QUFDQSxXQUFPLFlBQU07QUFDWEQsYUFBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7QUFDRCxLQUZEO0FBR0QsR0FMUSxFQUtOLENBQUNOLGFBQUQsQ0FMTSxDQUFUO0FBT0Esc0JBQ0U7QUFBQSwyQkFDRTtBQUNFLFVBQUksRUFBQyxTQURQO0FBRUUsVUFBSSxFQUFDLFVBRlA7QUFHRSxvQkFBYyxFQUFFQSxhQUhsQjtBQUlFLGNBQVEsRUFBRUM7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFVRCxDQTVCRDs7R0FBSUgsTTs7S0FBQUEsTTs7QUE4QkosU0FBU1UsVUFBVCxHQUFzQjtBQUNwQixXQUFTQyxNQUFULEdBQWtCO0FBQ2hCLHdCQUNFO0FBQUEsNkJBQ0UsOERBQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYscUJBREY7QUFLRDs7QUFDREEsUUFBTTtBQUNQOztNQVRRRCxVO0FBV1QsK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3ludGF4LjRlNmY5NWM0YjBkOGVlYjUxZjM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcblxyXG5sZXQgU3ludGF4ID0gKCkgPT4ge1xyXG4gIGxldCBbY2hlY2tCb3hWYWx1ZSwgc2V0Q2hlY2tCb3hWYWx1ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHNldENoZWNrQm94VmFsdWUgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgY2hlY2tCb3hWYWx1ZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XHJcblxyXG4gICAgY29uc29sZS5sb2coY2hlY2tCb3hWYWx1ZSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIlRFU1RcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhjaGVja0JveFZhbHVlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJpbiB1c2VFZmZlY3RcIik7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImluIHVzZUVmZmVjdCBDbGVhbnVwXCIpO1xyXG4gICAgfTtcclxuICB9LCBbY2hlY2tCb3hWYWx1ZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgbmFtZT1cImlzR29pbmdcIlxyXG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgZGVmYXVsdENoZWNrZWQ9e2NoZWNrQm94VmFsdWV9XHJcbiAgICAgICAgb25DaGFuZ2U9e3NldENoZWNrQm94VmFsdWV9XHJcbiAgICAgIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gTWFpblN5bnRheCgpIHtcclxuICBmdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxTeW50YXggLz5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuICByZW5kZXIoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpblN5bnRheDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==