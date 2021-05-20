(function() {
var exports = {};
exports.id = "pages/ImageChangeOnMouseOver";
exports.ids = ["pages/ImageChangeOnMouseOver"];
exports.modules = {

/***/ "./pages/ImageChangeOnMouseOver.js":
/*!*****************************************!*\
  !*** ./pages/ImageChangeOnMouseOver.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/ImageToggleOnMouseOver */ "./src/ImageToggleOnMouseOver.js");

var _jsxFileName = "C:\\Users\\troty\\Desktop\\React-Hooks\\pages\\ImageChangeOnMouseOver.js";



const ImageChangeOnMouseOver = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_2__.default, {
      primaryImg: "/images/monkey.jpg",
      secondaryImg: "/images/monkeyColor.jpg",
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), "\xA0\xA0\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_2__.default, {
      primaryImg: "/images/island.jpg",
      secondaryImg: "/images/islandColor.jpg",
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ImageChangeOnMouseOver);

/***/ }),

/***/ "./src/ImageToggleOnMouseOver.js":
/*!***************************************!*\
  !*** ./src/ImageToggleOnMouseOver.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\troty\\Desktop\\React-Hooks\\src\\ImageToggleOnMouseOver.js";


const ImageToggleOnMouseOver = ({
  primaryImg,
  secondaryImg
}) => {
  const ImageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });
  const {
    0: inView,
    1: setinView
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const isinView = () => {
    if (ImageRef.current) {
      const rect = ImageRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    return false;
  };

  const scrollHandler = () => {
    setinView(() => {
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
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ImageToggleOnMouseOver);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/ImageChangeOnMouseOver.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OZXh0SlMvLi9wYWdlcy9JbWFnZUNoYW5nZU9uTW91c2VPdmVyLmpzIiwid2VicGFjazovL05leHRKUy8uL3NyYy9JbWFnZVRvZ2dsZU9uTW91c2VPdmVyLmpzIiwid2VicGFjazovL05leHRKUy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vTmV4dEpTL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiSW1hZ2VDaGFuZ2VPbk1vdXNlT3ZlciIsIkltYWdlVG9nZ2xlT25Nb3VzZU92ZXIiLCJwcmltYXJ5SW1nIiwic2Vjb25kYXJ5SW1nIiwiSW1hZ2VSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpblZpZXciLCJzZXRpblZpZXciLCJ1c2VTdGF0ZSIsImlzaW5WaWV3IiwiY3VycmVudCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJib3R0b20iLCJpbm5lckhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxzQkFBc0IsR0FBRyxNQUFNO0FBQ25DLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsZ0VBQUQ7QUFDRSxnQkFBVSxFQUFDLG9CQURiO0FBRUUsa0JBQVksRUFBQyx5QkFGZjtBQUdFLFNBQUcsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsK0JBT0UsOERBQUMsZ0VBQUQ7QUFDRSxnQkFBVSxFQUFDLG9CQURiO0FBRUUsa0JBQVksRUFBQyx5QkFGZjtBQUdFLFNBQUcsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFlRCxDQWhCRDs7QUFrQkEsK0RBQWVBLHNCQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTs7QUFFQSxNQUFNQyxzQkFBc0IsR0FBRyxDQUFDO0FBQUVDLFlBQUY7QUFBY0M7QUFBZCxDQUFELEtBQWtDO0FBQy9ELFFBQU1DLFFBQVEsR0FBR0MsNkNBQU0sQ0FBQyxJQUFELENBQXZCO0FBRUFDLGtEQUFTLENBQUMsTUFBTTtBQUNkQyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDQyxhQUFsQztBQUNBLFdBQU8sTUFBTTtBQUNYRixZQUFNLENBQUNHLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDRCxhQUFyQztBQUNELEtBRkQ7QUFHRCxHQUxRLENBQVQ7QUFPQSxRQUFNO0FBQUEsT0FBQ0UsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JDLCtDQUFRLENBQUMsS0FBRCxDQUFwQzs7QUFFQSxRQUFNQyxRQUFRLEdBQUcsTUFBTTtBQUNyQixRQUFJVixRQUFRLENBQUNXLE9BQWIsRUFBc0I7QUFDcEIsWUFBTUMsSUFBSSxHQUFHWixRQUFRLENBQUNXLE9BQVQsQ0FBaUJFLHFCQUFqQixFQUFiO0FBQ0EsYUFBT0QsSUFBSSxDQUFDRSxHQUFMLElBQVksQ0FBWixJQUFpQkYsSUFBSSxDQUFDRyxNQUFMLElBQWVaLE1BQU0sQ0FBQ2EsV0FBOUM7QUFDRDs7QUFDRCxXQUFPLEtBQVA7QUFDRCxHQU5EOztBQVFBLFFBQU1YLGFBQWEsR0FBRyxNQUFNO0FBQzFCRyxhQUFTLENBQUMsTUFBTTtBQUNkLGFBQU9FLFFBQVEsRUFBZjtBQUNELEtBRlEsQ0FBVDtBQUdELEdBSkQ7O0FBTUEsc0JBQU87QUFBSyxPQUFHLEVBQUVaLFVBQVY7QUFBc0IsT0FBRyxFQUFDLEVBQTFCO0FBQTZCLE9BQUcsRUFBRUU7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0EzQkQ7O0FBNkJBLCtEQUFlSCxzQkFBZixFOzs7Ozs7Ozs7OztBQy9CQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9JbWFnZUNoYW5nZU9uTW91c2VPdmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2VUb2dnbGVPbk1vdXNlT3ZlciBmcm9tIFwiLi4vc3JjL0ltYWdlVG9nZ2xlT25Nb3VzZU92ZXJcIjtcclxuXHJcbmNvbnN0IEltYWdlQ2hhbmdlT25Nb3VzZU92ZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxJbWFnZVRvZ2dsZU9uTW91c2VPdmVyXHJcbiAgICAgICAgcHJpbWFyeUltZz1cIi9pbWFnZXMvbW9ua2V5LmpwZ1wiXHJcbiAgICAgICAgc2Vjb25kYXJ5SW1nPVwiL2ltYWdlcy9tb25rZXlDb2xvci5qcGdcIlxyXG4gICAgICAgIGFsdD1cIlwiXHJcbiAgICAgIC8+XHJcbiAgICAgICZuYnNwOyZuYnNwOyZuYnNwO1xyXG4gICAgICA8SW1hZ2VUb2dnbGVPbk1vdXNlT3ZlclxyXG4gICAgICAgIHByaW1hcnlJbWc9XCIvaW1hZ2VzL2lzbGFuZC5qcGdcIlxyXG4gICAgICAgIHNlY29uZGFyeUltZz1cIi9pbWFnZXMvaXNsYW5kQ29sb3IuanBnXCJcclxuICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlQ2hhbmdlT25Nb3VzZU92ZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEltYWdlVG9nZ2xlT25Nb3VzZU92ZXIgPSAoeyBwcmltYXJ5SW1nLCBzZWNvbmRhcnlJbWcgfSkgPT4ge1xyXG4gIGNvbnN0IEltYWdlUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsSGFuZGxlcik7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxIYW5kbGVyKTtcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFtpblZpZXcsIHNldGluVmlld10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGlzaW5WaWV3ID0gKCkgPT4ge1xyXG4gICAgaWYgKEltYWdlUmVmLmN1cnJlbnQpIHtcclxuICAgICAgY29uc3QgcmVjdCA9IEltYWdlUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIHJldHVybiByZWN0LnRvcCA+PSAwICYmIHJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0aW5WaWV3KCgpID0+IHtcclxuICAgICAgcmV0dXJuIGlzaW5WaWV3KCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gPGltZyBzcmM9e3ByaW1hcnlJbWd9IGFsdD1cIlwiIHJlZj17SW1hZ2VSZWZ9IC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VUb2dnbGVPbk1vdXNlT3ZlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==