(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["WUI"] = factory();
	else
		root["WUI"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	var NavBar = __webpack_require__(2);
	
	module.exports = {
	  NavBar: NavBar,
	  templates: Handlebars.templates
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	(function() {
	  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
	templates['nav-bar'] = template({"1":function(depth0,helpers,partials,data) {
	    return "  <span class=\"right-button\">登录</span>\n";
	},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var stack1, helper;
	
	  return this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
	    + "\n"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.rightButton : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
	},"useData":true});
	})();

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	var create = function create(options) {
	  var $el = options.$el;
	
	  $el.html(Handlebars.templates['nav-bar'](options));
	
	  if (options.rightCallback) {
	    $el.find('.right-button').click(options.rightCallback);
	  }
	};
	
	module.exports = {
	  create: create
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=wui-mobile.js.map