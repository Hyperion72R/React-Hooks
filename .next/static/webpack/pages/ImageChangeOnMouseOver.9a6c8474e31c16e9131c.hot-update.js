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
/* harmony import */ var C_Users_troty_Desktop_React_Hooks_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\troty\\Desktop\\React-Hooks\\src\\ImageToggleOnMouseOver.js",
    _this = undefined,
    _s = $RefreshSig$();



var ImageToggleOnMouseOver = function ImageToggleOnMouseOver(_ref) {
  _s();

  var primaryImg = _ref.primaryImg,
      secondaryImg = _ref.secondaryImg;
  var ImageRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    window.addEventListener("scroll", scrollHandler);
    return function () {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  var _useState = useState(false),
      _useState2 = (0,C_Users_troty_Desktop_React_Hooks_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0ltYWdlVG9nZ2xlT25Nb3VzZU92ZXIuanMiXSwibmFtZXMiOlsiSW1hZ2VUb2dnbGVPbk1vdXNlT3ZlciIsInByaW1hcnlJbWciLCJzZWNvbmRhcnlJbWciLCJJbWFnZVJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxIYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVzZVN0YXRlIiwiaW5WaWV3Iiwic2V0aW5WaWV3IiwiaXNpblZpZXciLCJjdXJyZW50IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImJvdHRvbSIsImlubmVySGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsT0FBa0M7QUFBQTs7QUFBQSxNQUEvQkMsVUFBK0IsUUFBL0JBLFVBQStCO0FBQUEsTUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjtBQUMvRCxNQUFNQyxRQUFRLEdBQUdDLDZDQUFNLENBQUMsSUFBRCxDQUF2QjtBQUVBQyxrREFBUyxDQUFDLFlBQU07QUFDZEMsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0MsYUFBbEM7QUFDQSxXQUFPLFlBQU07QUFDWEYsWUFBTSxDQUFDRyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0QsYUFBckM7QUFDRCxLQUZEO0FBR0QsR0FMUSxDQUFUOztBQUgrRCxrQkFVbkNFLFFBQVEsQ0FBQyxLQUFELENBVjJCO0FBQUE7QUFBQSxNQVV4REMsTUFWd0Q7QUFBQSxNQVVoREMsU0FWZ0Q7O0FBWS9ELE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsUUFBSVYsUUFBUSxDQUFDVyxPQUFiLEVBQXNCO0FBQ3BCLFVBQU1DLElBQUksR0FBR1osUUFBUSxDQUFDVyxPQUFULENBQWlCRSxxQkFBakIsRUFBYjtBQUNBLGFBQU9ELElBQUksQ0FBQ0UsR0FBTCxJQUFZLENBQVosSUFBaUJGLElBQUksQ0FBQ0csTUFBTCxJQUFlWixNQUFNLENBQUNhLFdBQTlDO0FBQ0Q7O0FBQ0QsV0FBTyxLQUFQO0FBQ0QsR0FORDs7QUFRQSxNQUFNWCxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUJJLGFBQVMsQ0FBQyxZQUFNO0FBQ2QsYUFBT0MsUUFBUSxFQUFmO0FBQ0QsS0FGUSxDQUFUO0FBR0QsR0FKRDs7QUFNQSxzQkFBTztBQUFLLE9BQUcsRUFBRVosVUFBVjtBQUFzQixPQUFHLEVBQUMsRUFBMUI7QUFBNkIsT0FBRyxFQUFFRTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQTNCRDs7R0FBTUgsc0I7O0tBQUFBLHNCO0FBNkJOLCtEQUFlQSxzQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9JbWFnZUNoYW5nZU9uTW91c2VPdmVyLjlhNmM4NDc0ZTMxYzE2ZTkxMzFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEltYWdlVG9nZ2xlT25Nb3VzZU92ZXIgPSAoeyBwcmltYXJ5SW1nLCBzZWNvbmRhcnlJbWcgfSkgPT4ge1xyXG4gIGNvbnN0IEltYWdlUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsSGFuZGxlcik7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxIYW5kbGVyKTtcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFtpblZpZXcsIHNldGluVmlld10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGlzaW5WaWV3ID0gKCkgPT4ge1xyXG4gICAgaWYgKEltYWdlUmVmLmN1cnJlbnQpIHtcclxuICAgICAgY29uc3QgcmVjdCA9IEltYWdlUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIHJldHVybiByZWN0LnRvcCA+PSAwICYmIHJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0aW5WaWV3KCgpID0+IHtcclxuICAgICAgcmV0dXJuIGlzaW5WaWV3KCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gPGltZyBzcmM9e3ByaW1hcnlJbWd9IGFsdD1cIlwiIHJlZj17SW1hZ2VSZWZ9IC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VUb2dnbGVPbk1vdXNlT3ZlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==