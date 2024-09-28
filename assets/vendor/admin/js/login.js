/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./admin/js/login.js":
/*!***************************!*\
  !*** ./admin/js/login.js ***!
  \***************************/
/***/ (function() {

eval("document.getElementById('login-button').onclick = function () {\n  document.getElementById(\"formAuthentication\").onsubmit = function () {\n    // validate login creds through api\n    var email = document.getElementById('email').value;\n    var pass = document.getElementById('password').value;\n    if (email == 'admin' && pass == 'admin') {\n      window.location.assign('../dashboard.html');\n    } else {\n      //show error (for this either we have to write a custom error prompt or somehow use the thing vuexy is using)\n      //for now ill just give and alert\n      alert('seems that the password might be wrong');\n    }\n  };\n};\n\n//# sourceURL=webpack://Vuexy/./admin/js/login.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./admin/js/login.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});