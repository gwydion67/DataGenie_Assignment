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

/***/ "./admin/js/user.js":
/*!**************************!*\
  !*** ./admin/js/user.js ***!
  \**************************/
/***/ (function() {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/Abhishek/E_drive/sandbox/vuexy/html-version/vuexy-bootstrap-html-admin-template/admin/js/user.js: Support for the experimental syntax 'importAttributes' isn't currently enabled (1:39):\\n\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 1 |\\u001b[39m \\u001b[36mimport\\u001b[39m data \\u001b[36mfrom\\u001b[39m \\u001b[32m'../dummy.json'\\u001b[39m \\u001b[36mwith\\u001b[39m { type\\u001b[33m:\\u001b[39m \\u001b[32m\\\"json\\\"\\u001b[39m }\\u001b[33m;\\u001b[39m\\n \\u001b[90m   |\\u001b[39m                                       \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\n \\u001b[90m 2 |\\u001b[39m\\n \\u001b[90m 3 |\\u001b[39m \\u001b[90m// // console.log(data.users)\\u001b[39m\\n \\u001b[90m 4 |\\u001b[39m\\u001b[0m\\n\\nAdd @babel/plugin-syntax-import-attributes (https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-import-attributes) to the 'plugins' section of your Babel config to enable parsing.\\n    at constructor (/home/Abhishek/E_drive/sandbox/vuexy/html-version/vuexy-bootstrap-html-admin-template/node_modules/@babel/parser/lib/index.js:362:19)\\n    at Parser.raise (/home/Abhishek/E_drive/sandbox/vuexy/html-version/vuexy-bootstrap-html-admin-template/node_modules/@babel/parser/lib/index.js:3260:19)\\n    at Parser.expectPlugin (/home/Abhishek/E_drive/sandbox/vuexy/html-version/vuexy-bootstrap-html-admin-template/node_modules/@babel/parser/lib/index.js:3288:16)\\n    at Parser.expectImportAttributesPlugin (/home/Abhishek/E_drive/sandbox/vuexy/html-version/vuexy-bootstrap-html-admin-template/node_modules/@babel/parser/lib/index.js:10723:12)\\n    at Parser.maybeParseImportAttributes (/home/Abhishek/E_drive/sandbox/vuexy/html-version/vuexy-bootstrap-html-admin-template/node_modules/@babel/parser/lib/index.js:13802:16)\\n    at Parser.parseImportSourceAndAttributes (/home/Abhishek/E_drive/sandbox/vuexy/html-version/vuexy-bootstrap-html-admin-template/node_modules/@babel/parser/lib/index.js:13715:10)\\n    at Parser.parseImportSpecifiersAndAfter (/home/Abhishek/E_drive/sandbox/vuexy/html-version/vuexy-bootstrap-html-admin-template/node_modules/@babel/parser/lib/index.js:13709:17)\\n    at Parser.parseImport (/home/Abhishek/E_drive/sandbox/vuexy/html-version/vuexy-bootstrap-html-admin-template/node_modules/@babel/parser/lib/index.js:13700:17)\\n    at Parser.parseStatementContent (/home/Abhishek/E_drive/sandbox/vuexy/html-version/vuexy-bootstrap-html-admin-template/node_modules/@babel/parser/lib/index.js:12347:27)\\n    at Parser.parseStatementLike (/home/Abhishek/E_drive/sandbox/vuexy/html-version/vuexy-bootstrap-html-admin-template/node_modules/@babel/parser/lib/index.js:12239:17)\\n    at Parser.parseModuleItem (/home/Abhishek/E_drive/sandbox/vuexy/html-version/vuexy-bootstrap-html-admin-template/node_modules/@babel/parser/lib/index.js:12216:17)\\n    at Parser.parseBlockOrModuleBlockBody (/home/Abhishek/E_drive/sandbox/vuexy/html-version/vuexy-bootstrap-html-admin-template/node_modules/@babel/parser/lib/index.js:12792:36)\\n    at Parser.parseBlockBody (/home/Abhishek/E_drive/sandbox/vuexy/html-version/vuexy-bootstrap-html-admin-template/node_modules/@babel/parser/lib/index.js:12785:10)\\n    at Parser.parseProgram (/home/Abhishek/E_drive/sandbox/vuexy/html-version/vuexy-bootstrap-html-admin-template/node_modules/@babel/parser/lib/index.js:12113:10)\\n    at Parser.parseTopLevel (/home/Abhishek/E_drive/sandbox/vuexy/html-version/vuexy-bootstrap-html-admin-template/node_modules/@babel/parser/lib/index.js:12103:25)\\n    at Parser.parse (/home/Abhishek/E_drive/sandbox/vuexy/html-version/vuexy-bootstrap-html-admin-template/node_modules/@babel/parser/lib/index.js:13915:10)\\n    at parse (/home/Abhishek/E_drive/sandbox/vuexy/html-version/vuexy-bootstrap-html-admin-template/node_modules/@babel/parser/lib/index.js:13949:38)\\n    at parser (/home/Abhishek/E_drive/sandbox/vuexy/html-version/vuexy-bootstrap-html-admin-template/node_modules/@babel/core/lib/parser/index.js:41:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/home/Abhishek/E_drive/sandbox/vuexy/html-version/vuexy-bootstrap-html-admin-template/node_modules/@babel/core/lib/transformation/normalize-file.js:64:37)\\n    at normalizeFile.next (<anonymous>)\\n    at run (/home/Abhishek/E_drive/sandbox/vuexy/html-version/vuexy-bootstrap-html-admin-template/node_modules/@babel/core/lib/transformation/index.js:21:50)\\n    at run.next (<anonymous>)\\n    at transform (/home/Abhishek/E_drive/sandbox/vuexy/html-version/vuexy-bootstrap-html-admin-template/node_modules/@babel/core/lib/transform.js:22:33)\\n    at transform.next (<anonymous>)\\n    at step (/home/Abhishek/E_drive/sandbox/vuexy/html-version/vuexy-bootstrap-html-admin-template/node_modules/gensync/index.js:261:32)\\n    at /home/Abhishek/E_drive/sandbox/vuexy/html-version/vuexy-bootstrap-html-admin-template/node_modules/gensync/index.js:273:13\\n    at async.call.result.err.err (/home/Abhishek/E_drive/sandbox/vuexy/html-version/vuexy-bootstrap-html-admin-template/node_modules/gensync/index.js:223:11)\");\n\n//# sourceURL=webpack://Vuexy/./admin/js/user.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./admin/js/user.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});