/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((module) => {

function getFullYear() {
  return '2023';
}
function getFooterCopy(isIndex) {
  if (isIndex) {
    return 'Holberton School';
  } else {
    return 'Holberton School main dashboard';
  }
}
var footerCopy = getFooterCopy(true);
var year = getFullYear();
module.exports = "Copyright ".concat(year, " - ").concat(footerCopy);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/utils/utils.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBLFNBQVNBLFdBQVcsR0FBRztFQUNyQixPQUFPLE1BQU07QUFDZjtBQUVBLFNBQVNDLGFBQWEsQ0FBQ0MsT0FBTyxFQUFFO0VBQzlCLElBQUlBLE9BQU8sRUFBQztJQUNWLE9BQU8sa0JBQWtCO0VBQzNCLENBQUMsTUFDSTtJQUNILE9BQU8saUNBQWlDO0VBQzFDO0FBQ0Y7QUFDQSxJQUFNQyxVQUFVLEdBQUdGLGFBQWEsQ0FBQyxJQUFJLENBQUM7QUFDdEMsSUFBTUcsSUFBSSxHQUFHSixXQUFXLEVBQUU7QUFDMUJLLE1BQU0sQ0FBQ0MsT0FBTyx1QkFBZ0JGLElBQUksZ0JBQU1ELFVBQVUsQ0FBRTs7Ozs7O1VDaEJwRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFza181Ly4vc3JjL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovL3Rhc2tfNS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90YXNrXzUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90YXNrXzUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Rhc2tfNS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmZ1bmN0aW9uIGdldEZ1bGxZZWFyKCkge1xuICByZXR1cm4gJzIwMjMnXG59XG5cbmZ1bmN0aW9uIGdldEZvb3RlckNvcHkoaXNJbmRleCkge1xuICBpZiAoaXNJbmRleCl7XG4gICAgcmV0dXJuICdIb2xiZXJ0b24gU2Nob29sJ1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiAnSG9sYmVydG9uIFNjaG9vbCBtYWluIGRhc2hib2FyZCdcbiAgfVxufVxuY29uc3QgZm9vdGVyQ29weSA9IGdldEZvb3RlckNvcHkodHJ1ZSk7XG5jb25zdCB5ZWFyID0gZ2V0RnVsbFllYXIoKTtcbm1vZHVsZS5leHBvcnRzID0gYENvcHlyaWdodCAke3llYXJ9IC0gJHtmb290ZXJDb3B5fWBcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy91dGlscy91dGlscy5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJnZXRGdWxsWWVhciIsImdldEZvb3RlckNvcHkiLCJpc0luZGV4IiwiZm9vdGVyQ29weSIsInllYXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==