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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    onMouseOver: () => {
      ImageRef.current.src = secondaryImg;
    },
    onMouseOut: () => {
      ImageRef.current.src = primaryImg;
    },
    src: primaryImg,
    alt: "",
    ref: ImageRef
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OZXh0SlMvLi9wYWdlcy9JbWFnZUNoYW5nZU9uTW91c2VPdmVyLmpzIiwid2VicGFjazovL05leHRKUy8uL3NyYy9JbWFnZVRvZ2dsZU9uTW91c2VPdmVyLmpzIiwid2VicGFjazovL05leHRKUy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vTmV4dEpTL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiSW1hZ2VDaGFuZ2VPbk1vdXNlT3ZlciIsIkltYWdlVG9nZ2xlT25Nb3VzZU92ZXIiLCJwcmltYXJ5SW1nIiwic2Vjb25kYXJ5SW1nIiwiSW1hZ2VSZWYiLCJ1c2VSZWYiLCJjdXJyZW50Iiwic3JjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLHNCQUFzQixHQUFHLE1BQU07QUFDbkMsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxnRUFBRDtBQUNFLGdCQUFVLEVBQUMsb0JBRGI7QUFFRSxrQkFBWSxFQUFDLHlCQUZmO0FBR0UsU0FBRyxFQUFDO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERiwrQkFPRSw4REFBQyxnRUFBRDtBQUNFLGdCQUFVLEVBQUMsb0JBRGI7QUFFRSxrQkFBWSxFQUFDLHlCQUZmO0FBR0UsU0FBRyxFQUFDO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWVELENBaEJEOztBQWtCQSwrREFBZUEsc0JBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBOztBQUVBLE1BQU1DLHNCQUFzQixHQUFHLENBQUM7QUFBRUMsWUFBRjtBQUFjQztBQUFkLENBQUQsS0FBa0M7QUFDL0QsUUFBTUMsUUFBUSxHQUFHQyw2Q0FBTSxDQUFDLElBQUQsQ0FBdkI7QUFFQSxzQkFDRTtBQUNFLGVBQVcsRUFBRSxNQUFNO0FBQ2pCRCxjQUFRLENBQUNFLE9BQVQsQ0FBaUJDLEdBQWpCLEdBQXVCSixZQUF2QjtBQUNELEtBSEg7QUFJRSxjQUFVLEVBQUUsTUFBTTtBQUNoQkMsY0FBUSxDQUFDRSxPQUFULENBQWlCQyxHQUFqQixHQUF1QkwsVUFBdkI7QUFDRCxLQU5IO0FBT0UsT0FBRyxFQUFFQSxVQVBQO0FBUUUsT0FBRyxFQUFDLEVBUk47QUFTRSxPQUFHLEVBQUVFO0FBVFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBYUQsQ0FoQkQ7O0FBa0JBLCtEQUFlSCxzQkFBZixFOzs7Ozs7Ozs7OztBQ3BCQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9JbWFnZUNoYW5nZU9uTW91c2VPdmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2VUb2dnbGVPbk1vdXNlT3ZlciBmcm9tIFwiLi4vc3JjL0ltYWdlVG9nZ2xlT25Nb3VzZU92ZXJcIjtcclxuXHJcbmNvbnN0IEltYWdlQ2hhbmdlT25Nb3VzZU92ZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxJbWFnZVRvZ2dsZU9uTW91c2VPdmVyXHJcbiAgICAgICAgcHJpbWFyeUltZz1cIi9pbWFnZXMvbW9ua2V5LmpwZ1wiXHJcbiAgICAgICAgc2Vjb25kYXJ5SW1nPVwiL2ltYWdlcy9tb25rZXlDb2xvci5qcGdcIlxyXG4gICAgICAgIGFsdD1cIlwiXHJcbiAgICAgIC8+XHJcbiAgICAgICZuYnNwOyZuYnNwOyZuYnNwO1xyXG4gICAgICA8SW1hZ2VUb2dnbGVPbk1vdXNlT3ZlclxyXG4gICAgICAgIHByaW1hcnlJbWc9XCIvaW1hZ2VzL2lzbGFuZC5qcGdcIlxyXG4gICAgICAgIHNlY29uZGFyeUltZz1cIi9pbWFnZXMvaXNsYW5kQ29sb3IuanBnXCJcclxuICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlQ2hhbmdlT25Nb3VzZU92ZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEltYWdlVG9nZ2xlT25Nb3VzZU92ZXIgPSAoeyBwcmltYXJ5SW1nLCBzZWNvbmRhcnlJbWcgfSkgPT4ge1xyXG4gIGNvbnN0IEltYWdlUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGltZ1xyXG4gICAgICBvbk1vdXNlT3Zlcj17KCkgPT4ge1xyXG4gICAgICAgIEltYWdlUmVmLmN1cnJlbnQuc3JjID0gc2Vjb25kYXJ5SW1nO1xyXG4gICAgICB9fVxyXG4gICAgICBvbk1vdXNlT3V0PXsoKSA9PiB7XHJcbiAgICAgICAgSW1hZ2VSZWYuY3VycmVudC5zcmMgPSBwcmltYXJ5SW1nO1xyXG4gICAgICB9fVxyXG4gICAgICBzcmM9e3ByaW1hcnlJbWd9XHJcbiAgICAgIGFsdD1cIlwiXHJcbiAgICAgIHJlZj17SW1hZ2VSZWZ9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVRvZ2dsZU9uTW91c2VPdmVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9