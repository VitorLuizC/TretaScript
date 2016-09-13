/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var DOM_1 = __webpack_require__(2);
	function main(e) {
	    var slider = DOM_1.default.getElement("#slider");
	    slider.classList.add("slider-admin");
	}
	$(window).on("load", main);


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	var DOM;
	(function (DOM) {
	    function getElement(selector) {
	        var element = document.querySelector(selector);
	        if (element === null)
	            throw new Error("Selector \"" + selector + "\" didn't return any Element.");
	        return element;
	    }
	    DOM.getElement = getElement;
	})(DOM || (DOM = {}));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = DOM;


/***/ }
/******/ ]);