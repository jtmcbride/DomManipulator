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

	const Router = __webpack_require__(1);
	const Inbox = __webpack_require__(2);

	const routes = {
	  inbox: new Inbox()
	};

	document.addEventListener("DOMContentLoaded", () => {
	  let newRouter = document.querySelector(".content");
	  let rout = new Router(newRouter, routes);
	  rout.start();
	  let elements = Array.from(document.querySelectorAll(".sidebar-nav li"));
	  elements.forEach((el) => {
	    el.addEventListener("click", (e) => {
	      let tar = e.target;
	      window.location.hash = tar.innerText.toLowerCase();
	    });
	  });
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	function Router(node, routes) {
	  this.node = node;
	  this.routes = routes;
	}

	Router.prototype.start = function() {
	  this.render();
	  let that = this;
	  window.addEventListener("hashchange", function() {
	    that.render();
	  });
	};

	Router.prototype.activeRoute = function() {
	  return this.routes[window.location.hash.slice(1,9999)];
	};

	Router.prototype.render = function() {
	  this.node.innerHTML = "";
	  let routeName = this.activeRoute();
	  let newP = document.createElement("p");
	  newP.innerHTML = routeName.render();

	  this.node.appendChild(newP);
	};

	module.exports = Router;


/***/ },
/* 2 */
/***/ function(module, exports) {

	class Inbox {

	  constructor() {
	  }

	  render() {
	    let ulEle = document.createElement("ul");
	    ulEle.className = "messages";
	    ulEle.innerHTML = "An Inbox Message";
	    return ulEle.outerHTML;
	  }
	}

	module.exports = Inbox;


/***/ }
/******/ ]);