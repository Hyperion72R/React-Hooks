self["webpackHotUpdate_N_E"]("pages/ImageChangeOnMouseOver",{

/***/ "./src/ImageToggleOnMouseOver.js":
/*!***************************************!*\
  !*** ./src/ImageToggleOnMouseOver.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\troty\\Desktop\\React-Hooks\\src\\ImageToggleOnMouseOver.js",
    _this = undefined,
    _s = $RefreshSig$();



var ImageToggleOnMouseOver = function ImageToggleOnMouseOver(_ref) {
  _s();

  var primaryImg = _ref.primaryImg,
      secondaryImg = _ref.secondaryImg;
  var ImageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    window.addEventListener("scroll", scrollHandler);
    return function () {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      inView = _useState[0],
      setinView = _useState[1];

  var isinView = function isinView() {
    if (ImageRef.current) {
      var rect = ImageRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    return false;
  };

  var scrollHandler = function scrollHandler() {
    setinView(function () {
      return isinView();
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    src: primaryImg,
    alt: "",
    ref: ImageRef
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 10
  }, _this);
};

_s(ImageToggleOnMouseOver, "v+PjzQQqVLPQMX9iBZIkKYghI6w=");

_c = ImageToggleOnMouseOver;
/* harmony default export */ __webpack_exports__["default"] = (ImageToggleOnMouseOver);

var _c;

$RefreshReg$(_c, "ImageToggleOnMouseOver");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0ltYWdlVG9nZ2xlT25Nb3VzZU92ZXIuanMiXSwibmFtZXMiOlsiSW1hZ2VUb2dnbGVPbk1vdXNlT3ZlciIsInByaW1hcnlJbWciLCJzZWNvbmRhcnlJbWciLCJJbWFnZVJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxIYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVzZVN0YXRlIiwiaW5WaWV3Iiwic2V0aW5WaWV3IiwiaXNpblZpZXciLCJjdXJyZW50IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImJvdHRvbSIsImlubmVySGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLE9BQWtDO0FBQUE7O0FBQUEsTUFBL0JDLFVBQStCLFFBQS9CQSxVQUErQjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7QUFDL0QsTUFBTUMsUUFBUSxHQUFHQyw2Q0FBTSxDQUFDLElBQUQsQ0FBdkI7QUFFQUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RDLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NDLGFBQWxDO0FBQ0EsV0FBTyxZQUFNO0FBQ1hGLFlBQU0sQ0FBQ0csbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNELGFBQXJDO0FBQ0QsS0FGRDtBQUdELEdBTFEsQ0FBVDs7QUFIK0Qsa0JBVW5DRSwrQ0FBUSxDQUFDLEtBQUQsQ0FWMkI7QUFBQSxNQVV4REMsTUFWd0Q7QUFBQSxNQVVoREMsU0FWZ0Q7O0FBWS9ELE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsUUFBSVYsUUFBUSxDQUFDVyxPQUFiLEVBQXNCO0FBQ3BCLFVBQU1DLElBQUksR0FBR1osUUFBUSxDQUFDVyxPQUFULENBQWlCRSxxQkFBakIsRUFBYjtBQUNBLGFBQU9ELElBQUksQ0FBQ0UsR0FBTCxJQUFZLENBQVosSUFBaUJGLElBQUksQ0FBQ0csTUFBTCxJQUFlWixNQUFNLENBQUNhLFdBQTlDO0FBQ0Q7O0FBQ0QsV0FBTyxLQUFQO0FBQ0QsR0FORDs7QUFRQSxNQUFNWCxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUJJLGFBQVMsQ0FBQyxZQUFNO0FBQ2QsYUFBT0MsUUFBUSxFQUFmO0FBQ0QsS0FGUSxDQUFUO0FBR0QsR0FKRDs7QUFNQSxzQkFBTztBQUFLLE9BQUcsRUFBRVosVUFBVjtBQUFzQixPQUFHLEVBQUMsRUFBMUI7QUFBNkIsT0FBRyxFQUFFRTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQTNCRDs7R0FBTUgsc0I7O0tBQUFBLHNCO0FBNkJOLCtEQUFlQSxzQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9JbWFnZUNoYW5nZU9uTW91c2VPdmVyLmMyOTkyYjQ0YTI5MGI4NDM3ZWQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBJbWFnZVRvZ2dsZU9uTW91c2VPdmVyID0gKHsgcHJpbWFyeUltZywgc2Vjb25kYXJ5SW1nIH0pID0+IHtcclxuICBjb25zdCBJbWFnZVJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbEhhbmRsZXIpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsSGFuZGxlcik7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbaW5WaWV3LCBzZXRpblZpZXddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBpc2luVmlldyA9ICgpID0+IHtcclxuICAgIGlmIChJbWFnZVJlZi5jdXJyZW50KSB7XHJcbiAgICAgIGNvbnN0IHJlY3QgPSBJbWFnZVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICByZXR1cm4gcmVjdC50b3AgPj0gMCAmJiByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2Nyb2xsSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHNldGluVmlldygoKSA9PiB7XHJcbiAgICAgIHJldHVybiBpc2luVmlldygpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIDxpbWcgc3JjPXtwcmltYXJ5SW1nfSBhbHQ9XCJcIiByZWY9e0ltYWdlUmVmfSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlVG9nZ2xlT25Nb3VzZU92ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=