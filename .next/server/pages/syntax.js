(function() {
var exports = {};
exports.id = "pages/syntax";
exports.ids = ["pages/syntax"];
exports.modules = {

/***/ "./pages/syntax.js":
/*!*************************!*\
  !*** ./pages/syntax.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\troty\\Desktop\\React-Hooks\\pages\\syntax.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




let Syntax = () => {
  let {
    0: checkBoxValue,
    1: setCheckBoxValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);

  let handleChange = function (e) {
    let checked = e.target.checked;
    setCheckBoxValue(_objectSpread({}, checkBoxValue));
    console.log(checked); // console.log("TEST");
    // console.log(checkBoxValue);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    console.log("in useEffect");
    return () => {
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
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Syntax);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-dom");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/syntax.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OZXh0SlMvLi9wYWdlcy9zeW50YXguanMiLCJ3ZWJwYWNrOi8vTmV4dEpTL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9OZXh0SlMvZXh0ZXJuYWwgXCJyZWFjdC1kb21cIiIsIndlYnBhY2s6Ly9OZXh0SlMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJTeW50YXgiLCJjaGVja0JveFZhbHVlIiwic2V0Q2hlY2tCb3hWYWx1ZSIsInVzZVN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsImNoZWNrZWQiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQUlBLE1BQU0sR0FBRyxNQUFNO0FBQ2pCLE1BQUk7QUFBQSxPQUFDQyxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DQywrQ0FBUSxDQUFDLElBQUQsQ0FBaEQ7O0FBRUEsTUFBSUMsWUFBWSxHQUFHLFVBQVVDLENBQVYsRUFBYTtBQUM5QixRQUFJQyxPQUFPLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTRCxPQUF2QjtBQUNBSixvQkFBZ0IsbUJBQU1ELGFBQU4sRUFBaEI7QUFDQU8sV0FBTyxDQUFDQyxHQUFSLENBQVlILE9BQVosRUFIOEIsQ0FJOUI7QUFDQTtBQUNELEdBTkQ7O0FBUUFJLGtEQUFTLENBQUMsTUFBTTtBQUNkRixXQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0EsV0FBTyxNQUFNO0FBQ1hELGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO0FBQ0QsS0FGRDtBQUdELEdBTFEsRUFLTixDQUFDUixhQUFELENBTE0sQ0FBVDtBQU9BLHNCQUNFO0FBQUEsMkJBQ0U7QUFDRSxVQUFJLEVBQUMsU0FEUDtBQUVFLFVBQUksRUFBQyxVQUZQO0FBR0Usb0JBQWMsRUFBRUEsYUFIbEI7QUFJRSxjQUFRLEVBQUVHO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBVUQsQ0E1QkQ7O0FBOEJBLCtEQUFlSixNQUFmLEU7Ozs7Ozs7Ozs7O0FDakNBLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL3N5bnRheC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJyZWFjdC1kb21cIjtcclxuXHJcbmxldCBTeW50YXggPSAoKSA9PiB7XHJcbiAgbGV0IFtjaGVja0JveFZhbHVlLCBzZXRDaGVja0JveFZhbHVlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBsZXQgaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIGxldCBjaGVja2VkID0gZS50YXJnZXQuY2hlY2tlZDtcclxuICAgIHNldENoZWNrQm94VmFsdWUoeyAuLi5jaGVja0JveFZhbHVlIH0pO1xyXG4gICAgY29uc29sZS5sb2coY2hlY2tlZCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIlRFU1RcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhjaGVja0JveFZhbHVlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJpbiB1c2VFZmZlY3RcIik7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImluIHVzZUVmZmVjdCBDbGVhbnVwXCIpO1xyXG4gICAgfTtcclxuICB9LCBbY2hlY2tCb3hWYWx1ZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgbmFtZT1cImlzR29pbmdcIlxyXG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgZGVmYXVsdENoZWNrZWQ9e2NoZWNrQm94VmFsdWV9XHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTeW50YXg7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==