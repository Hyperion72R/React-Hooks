self["webpackHotUpdate_N_E"]("pages/ImageChangeOnScroll",{

/***/ "./src/ImageToggleOnScroll.js":
/*!************************************!*\
  !*** ./src/ImageToggleOnScroll.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\troty\\Desktop\\React-Hooks\\src\\ImageToggleOnScroll.js",
    _this = undefined,
    _s = $RefreshSig$();



var ImageToggleOnScroll = function ImageToggleOnScroll(_ref) {
  _s();

  var primaryImg = _ref.primaryImg,
      secondaryImg = _ref.secondaryImg;
  var ImageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    window.addEventListener("scroll", scrollHandler);
    setinView(isinView());
    setIsLoading(fasle);
    return function () {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      inView = _useState2[0],
      setinView = _useState2[1];

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

  return isLoading ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    src: inView ? secondaryImg : primaryImg,
    alt: "",
    ref: ImageRef
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, _this);
};

_s(ImageToggleOnScroll, "FxmynJyFen1Rj3xb5BS/7kRgE3A=");

_c = ImageToggleOnScroll;
/* harmony default export */ __webpack_exports__["default"] = (ImageToggleOnScroll);

var _c;

$RefreshReg$(_c, "ImageToggleOnScroll");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0ltYWdlVG9nZ2xlT25TY3JvbGwuanMiXSwibmFtZXMiOlsiSW1hZ2VUb2dnbGVPblNjcm9sbCIsInByaW1hcnlJbWciLCJzZWNvbmRhcnlJbWciLCJJbWFnZVJlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidXNlRWZmZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbEhhbmRsZXIiLCJzZXRpblZpZXciLCJpc2luVmlldyIsImZhc2xlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImluVmlldyIsImN1cnJlbnQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiYm90dG9tIiwiaW5uZXJIZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsT0FBa0M7QUFBQTs7QUFBQSxNQUEvQkMsVUFBK0IsUUFBL0JBLFVBQStCO0FBQUEsTUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjtBQUM1RCxNQUFNQyxRQUFRLEdBQUdDLDZDQUFNLENBQUMsSUFBRCxDQUF2Qjs7QUFENEQsa0JBRTFCQywrQ0FBUSxDQUFDLElBQUQsQ0FGa0I7QUFBQSxNQUVyREMsU0FGcUQ7QUFBQSxNQUUxQ0MsWUFGMEM7O0FBSTVEQyxrREFBUyxDQUFDLFlBQU07QUFDZEMsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0MsYUFBbEM7QUFDQUMsYUFBUyxDQUFDQyxRQUFRLEVBQVQsQ0FBVDtBQUNBTixnQkFBWSxDQUFDTyxLQUFELENBQVo7QUFDQSxXQUFPLFlBQU07QUFDWEwsWUFBTSxDQUFDTSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0osYUFBckM7QUFDRCxLQUZEO0FBR0QsR0FQUSxDQUFUOztBQUo0RCxtQkFhaENOLCtDQUFRLENBQUMsS0FBRCxDQWJ3QjtBQUFBLE1BYXJEVyxNQWJxRDtBQUFBLE1BYTdDSixTQWI2Qzs7QUFlNUQsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixRQUFJVixRQUFRLENBQUNjLE9BQWIsRUFBc0I7QUFDcEIsVUFBTUMsSUFBSSxHQUFHZixRQUFRLENBQUNjLE9BQVQsQ0FBaUJFLHFCQUFqQixFQUFiO0FBQ0EsYUFBT0QsSUFBSSxDQUFDRSxHQUFMLElBQVksQ0FBWixJQUFpQkYsSUFBSSxDQUFDRyxNQUFMLElBQWVaLE1BQU0sQ0FBQ2EsV0FBOUM7QUFDRDs7QUFDRCxXQUFPLEtBQVA7QUFDRCxHQU5EOztBQVFBLE1BQU1YLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQkMsYUFBUyxDQUFDLFlBQU07QUFDZCxhQUFPQyxRQUFRLEVBQWY7QUFDRCxLQUZRLENBQVQ7QUFHRCxHQUpEOztBQU1BLFNBQU9QLFNBQVMsR0FBRyxJQUFILGdCQUNkO0FBQUssT0FBRyxFQUFFVSxNQUFNLEdBQUdkLFlBQUgsR0FBa0JELFVBQWxDO0FBQThDLE9BQUcsRUFBQyxFQUFsRDtBQUFxRCxPQUFHLEVBQUVFO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUdELENBaENEOztHQUFNSCxtQjs7S0FBQUEsbUI7QUFrQ04sK0RBQWVBLG1CQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0ltYWdlQ2hhbmdlT25TY3JvbGwuNmY4ZDQ0ZTJlMzBjZjBiYzU4YTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEltYWdlVG9nZ2xlT25TY3JvbGwgPSAoeyBwcmltYXJ5SW1nLCBzZWNvbmRhcnlJbWcgfSkgPT4ge1xyXG4gIGNvbnN0IEltYWdlUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbEhhbmRsZXIpO1xyXG4gICAgc2V0aW5WaWV3KGlzaW5WaWV3KCkpO1xyXG4gICAgc2V0SXNMb2FkaW5nKGZhc2xlKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbEhhbmRsZXIpO1xyXG4gICAgfTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW2luVmlldywgc2V0aW5WaWV3XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaXNpblZpZXcgPSAoKSA9PiB7XHJcbiAgICBpZiAoSW1hZ2VSZWYuY3VycmVudCkge1xyXG4gICAgICBjb25zdCByZWN0ID0gSW1hZ2VSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgcmV0dXJuIHJlY3QudG9wID49IDAgJiYgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNjcm9sbEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRpblZpZXcoKCkgPT4ge1xyXG4gICAgICByZXR1cm4gaXNpblZpZXcoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBpc0xvYWRpbmcgPyBudWxsIDogKFxyXG4gICAgPGltZyBzcmM9e2luVmlldyA/IHNlY29uZGFyeUltZyA6IHByaW1hcnlJbWd9IGFsdD1cIlwiIHJlZj17SW1hZ2VSZWZ9IC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlVG9nZ2xlT25TY3JvbGw7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=