(function() {
var exports = {};
exports.id = "pages/ImageChangeOnScroll";
exports.ids = ["pages/ImageChangeOnScroll"];
exports.modules = {

/***/ "./pages/ImageChangeOnScroll.js":
/*!**************************************!*\
  !*** ./pages/ImageChangeOnScroll.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/ImageToggleOnScroll */ "./src/ImageToggleOnScroll.js");

var _jsxFileName = "C:\\Users\\troty\\Desktop\\React-Hooks\\pages\\ImageChangeOnScroll.js";



const ImageChangeOnScroll = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [1, 2, 3, 4, 5].map(ImgId => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__.default, {
          primaryImg: `/images/ImgScroll/NC/Img-${ImgId}.jpg`,
          secondaryImg: `/images/ImgScroll/Img-${ImgId}.jpg`,
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 13
        }, undefined)
      }, ImgId, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 11
      }, undefined);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ImageChangeOnScroll);

/***/ }),

/***/ "./src/ImageToggleOnScroll.js":
/*!************************************!*\
  !*** ./src/ImageToggleOnScroll.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\troty\\Desktop\\React-Hooks\\src\\ImageToggleOnScroll.js";


const ImageToggleOnScroll = ({
  primaryImg,
  secondaryImg
}) => {
  const ImageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    window.addEventListener("scroll", scrollHandler);
    setinView(isinView());
    setIsLoading(false);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [isLoading]);
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

  return isLoading ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    src: inView ? secondaryImg : primaryImg,
    alt: "",
    ref: ImageRef,
    width: "450",
    height: "675"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ImageToggleOnScroll);

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
var __webpack_exports__ = (__webpack_exec__("./pages/ImageChangeOnScroll.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OZXh0SlMvLi9wYWdlcy9JbWFnZUNoYW5nZU9uU2Nyb2xsLmpzIiwid2VicGFjazovL05leHRKUy8uL3NyYy9JbWFnZVRvZ2dsZU9uU2Nyb2xsLmpzIiwid2VicGFjazovL05leHRKUy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vTmV4dEpTL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiSW1hZ2VDaGFuZ2VPblNjcm9sbCIsIm1hcCIsIkltZ0lkIiwiSW1hZ2VUb2dnbGVPblNjcm9sbCIsInByaW1hcnlJbWciLCJzZWNvbmRhcnlJbWciLCJJbWFnZVJlZiIsInVzZVJlZiIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbEhhbmRsZXIiLCJzZXRpblZpZXciLCJpc2luVmlldyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpblZpZXciLCJjdXJyZW50IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImJvdHRvbSIsImlubmVySGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLG1CQUFtQixHQUFHLE1BQU07QUFDaEMsc0JBQ0U7QUFBQSxjQUNHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0JDLEdBQWhCLENBQXFCQyxLQUFELElBQVc7QUFDOUIsMEJBQ0U7QUFBQSwrQkFDRSw4REFBQyw2REFBRDtBQUNFLG9CQUFVLEVBQUcsNEJBQTJCQSxLQUFNLE1BRGhEO0FBRUUsc0JBQVksRUFBRyx5QkFBd0JBLEtBQU0sTUFGL0M7QUFHRSxhQUFHLEVBQUM7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FBVUEsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBU0QsS0FWQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWVELENBaEJEOztBQWtCQSwrREFBZUYsbUJBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBOztBQUVBLE1BQU1HLG1CQUFtQixHQUFHLENBQUM7QUFBRUMsWUFBRjtBQUFjQztBQUFkLENBQUQsS0FBa0M7QUFDNUQsUUFBTUMsUUFBUSxHQUFHQyw2Q0FBTSxDQUFDLElBQUQsQ0FBdkI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLCtDQUFRLENBQUMsSUFBRCxDQUExQztBQUVBQyxrREFBUyxDQUFDLE1BQU07QUFDZEMsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0MsYUFBbEM7QUFDQUMsYUFBUyxDQUFDQyxRQUFRLEVBQVQsQ0FBVDtBQUNBUCxnQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNBLFdBQU8sTUFBTTtBQUNYRyxZQUFNLENBQUNLLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDSCxhQUFyQztBQUNELEtBRkQ7QUFHRCxHQVBRLEVBT04sQ0FBQ04sU0FBRCxDQVBNLENBQVQ7QUFTQSxRQUFNO0FBQUEsT0FBQ1UsTUFBRDtBQUFBLE9BQVNIO0FBQVQsTUFBc0JMLCtDQUFRLENBQUMsS0FBRCxDQUFwQzs7QUFFQSxRQUFNTSxRQUFRLEdBQUcsTUFBTTtBQUNyQixRQUFJVixRQUFRLENBQUNhLE9BQWIsRUFBc0I7QUFDcEIsWUFBTUMsSUFBSSxHQUFHZCxRQUFRLENBQUNhLE9BQVQsQ0FBaUJFLHFCQUFqQixFQUFiO0FBQ0EsYUFBT0QsSUFBSSxDQUFDRSxHQUFMLElBQVksQ0FBWixJQUFpQkYsSUFBSSxDQUFDRyxNQUFMLElBQWVYLE1BQU0sQ0FBQ1ksV0FBOUM7QUFDRDs7QUFDRCxXQUFPLEtBQVA7QUFDRCxHQU5EOztBQVFBLFFBQU1WLGFBQWEsR0FBRyxNQUFNO0FBQzFCQyxhQUFTLENBQUMsTUFBTTtBQUNkLGFBQU9DLFFBQVEsRUFBZjtBQUNELEtBRlEsQ0FBVDtBQUdELEdBSkQ7O0FBTUEsU0FBT1IsU0FBUyxHQUFHLElBQUgsZ0JBQ2Q7QUFDRSxPQUFHLEVBQUVVLE1BQU0sR0FBR2IsWUFBSCxHQUFrQkQsVUFEL0I7QUFFRSxPQUFHLEVBQUMsRUFGTjtBQUdFLE9BQUcsRUFBRUUsUUFIUDtBQUlFLFNBQUssRUFBQyxLQUpSO0FBS0UsVUFBTSxFQUFDO0FBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBU0QsQ0F0Q0Q7O0FBd0NBLCtEQUFlSCxtQkFBZixFOzs7Ozs7Ozs7OztBQzFDQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9JbWFnZUNoYW5nZU9uU2Nyb2xsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2VUb2dnbGVPblNjcm9sbCBmcm9tIFwiLi4vc3JjL0ltYWdlVG9nZ2xlT25TY3JvbGxcIjtcclxuXHJcbmNvbnN0IEltYWdlQ2hhbmdlT25TY3JvbGwgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtbMSwgMiwgMywgNCwgNV0ubWFwKChJbWdJZCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17SW1nSWR9PlxyXG4gICAgICAgICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbFxyXG4gICAgICAgICAgICAgIHByaW1hcnlJbWc9e2AvaW1hZ2VzL0ltZ1Njcm9sbC9OQy9JbWctJHtJbWdJZH0uanBnYH1cclxuICAgICAgICAgICAgICBzZWNvbmRhcnlJbWc9e2AvaW1hZ2VzL0ltZ1Njcm9sbC9JbWctJHtJbWdJZH0uanBnYH1cclxuICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDaGFuZ2VPblNjcm9sbDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSW1hZ2VUb2dnbGVPblNjcm9sbCA9ICh7IHByaW1hcnlJbWcsIHNlY29uZGFyeUltZyB9KSA9PiB7XHJcbiAgY29uc3QgSW1hZ2VSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsSGFuZGxlcik7XHJcbiAgICBzZXRpblZpZXcoaXNpblZpZXcoKSk7XHJcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsSGFuZGxlcik7XHJcbiAgICB9O1xyXG4gIH0sIFtpc0xvYWRpbmddKTtcclxuXHJcbiAgY29uc3QgW2luVmlldywgc2V0aW5WaWV3XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaXNpblZpZXcgPSAoKSA9PiB7XHJcbiAgICBpZiAoSW1hZ2VSZWYuY3VycmVudCkge1xyXG4gICAgICBjb25zdCByZWN0ID0gSW1hZ2VSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgcmV0dXJuIHJlY3QudG9wID49IDAgJiYgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNjcm9sbEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRpblZpZXcoKCkgPT4ge1xyXG4gICAgICByZXR1cm4gaXNpblZpZXcoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBpc0xvYWRpbmcgPyBudWxsIDogKFxyXG4gICAgPGltZ1xyXG4gICAgICBzcmM9e2luVmlldyA/IHNlY29uZGFyeUltZyA6IHByaW1hcnlJbWd9XHJcbiAgICAgIGFsdD1cIlwiXHJcbiAgICAgIHJlZj17SW1hZ2VSZWZ9XHJcbiAgICAgIHdpZHRoPVwiNDUwXCJcclxuICAgICAgaGVpZ2h0PVwiNjc1XCJcclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlVG9nZ2xlT25TY3JvbGw7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=