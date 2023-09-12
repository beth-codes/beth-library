/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/carousel/index.js":
/*!**********************************!*\
  !*** ./src/js/carousel/index.js ***!
  \**********************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function ($) {
  var SlickSlider = /*#__PURE__*/function () {
    function SlickSlider() {
      _classCallCheck(this, SlickSlider);
      this.initiateSlider();
    }
    _createClass(SlickSlider, [{
      key: "initiateSlider",
      value: function initiateSlider() {
        console.log('hellos');
        $('.center').slick({
          centerMode: true,
          autoplay: true,
          autoplayspeed: 2000,
          centerPadding: '60px',
          slidesToShow: 3,
          responsive: [{
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          }, {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }]
        });
      }
    }]);
    return SlickSlider;
  }();
  new SlickSlider();
})(jQuery);

/***/ }),

/***/ "./src/js/clock/index.js":
/*!*******************************!*\
  !*** ./src/js/clock/index.js ***!
  \*******************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function ($) {
  /**
   * Clock Class.
   */
  var Clock = /*#__PURE__*/function () {
    /**
     * Constructor
     */
    function Clock() {
      _classCallCheck(this, Clock);
      this.initializeClock();
    }

    /**
     * initializeClock
     */
    _createClass(Clock, [{
      key: "initializeClock",
      value: function initializeClock() {
        var _this = this;
        setInterval(function () {
          return _this.time();
        }, 1000);
      }

      /**
       * Numpad
       *
       * @param {String} str String
       *
       * @return {string} String
       */
    }, {
      key: "numPad",
      value: function numPad(str) {
        var cStr = str.toString();
        if (2 > cStr.length) {
          str = 0 + cStr;
        }
        return str;
      }

      /**
       * Time
       */
    }, {
      key: "time",
      value: function time() {
        var currDate = new Date();
        var currSec = currDate.getSeconds();
        var currMin = currDate.getMinutes();
        var curr24Hr = currDate.getHours();
        var ampm = 12 <= curr24Hr ? 'pm' : 'am';
        var currHr = curr24Hr % 12;
        currHr = currHr ? currHr : 12;
        var stringTime = currHr + ':' + this.numPad(currMin) + ':' + this.numPad(currSec);
        var timeEmojiEl = $('#time-emoji');
        if (5 <= curr24Hr && 17 >= curr24Hr) {
          timeEmojiEl.text('🌞');
        } else {
          timeEmojiEl.text('🌚');
        }
        $('#time').text(stringTime);
        $('#ampm').text(ampm);
      }
    }]);
    return Clock;
  }();
  new Clock();
})(jQuery);

/***/ }),

/***/ "./src/js/posts/loadmore.js":
/*!**********************************!*\
  !*** ./src/js/posts/loadmore.js ***!
  \**********************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function ($) {
  /**
   * Class Loadmore.
   */
  var LoadMore = /*#__PURE__*/function () {
    /**
     * Contructor.
     */
    function LoadMore() {
      var _siteConfig$ajaxUrl, _siteConfig, _siteConfig$ajax_nonc, _siteConfig2;
      _classCallCheck(this, LoadMore);
      this.ajaxUrl = (_siteConfig$ajaxUrl = (_siteConfig = siteConfig) === null || _siteConfig === void 0 ? void 0 : _siteConfig.ajaxUrl) !== null && _siteConfig$ajaxUrl !== void 0 ? _siteConfig$ajaxUrl : '';
      this.ajaxNonce = (_siteConfig$ajax_nonc = (_siteConfig2 = siteConfig) === null || _siteConfig2 === void 0 ? void 0 : _siteConfig2.ajax_nonce) !== null && _siteConfig$ajax_nonc !== void 0 ? _siteConfig$ajax_nonc : '';
      this.loadMoreBtn = $('#load-more');
      // this.loadingTextEl = $( '#loading-text' );
      // this.isRequestProcessing = false;

      // this.options = {
      // 	root: null,
      // 	rootMargin: '0px',
      // 	threshold: 1.0, // 1.0 means set isIntersecting to true when element comes in 100% view.
      // };

      this.init();
    }
    _createClass(LoadMore, [{
      key: "init",
      value: function init() {
        var _this = this;
        if (!this.loadMoreBtn.length) {
          return;
        }
        this.loadMoreBtn.on('click', function () {
          return _this.handleLoadMorePosts();
        });

        // this.totalPagesCount = $( '#post-pagination' ).data( 'max-pages' );

        /**
         * Add the IntersectionObserver api, and listen to the load more intersection status.
         * so that intersectionObserverCallback gets called if the element intersection status changes.
         *
         * @type {IntersectionObserver}
         */
        // const observer = new IntersectionObserver(
        // 	( entries ) => this.intersectionObserverCallback( entries ),
        // 	this.options
        // );
        // observer.observe( this.loadMoreBtn[ 0 ] );
      }

      /**
       * Gets called on initial render with status 'isIntersecting' as false and then
       * everytime element intersection status changes.
       *
       * @param {array} entries No of elements under observation.
       *
       */
      // intersectionObserverCallback( entries ) {
      // 	// array of observing elements

      // 	// The logic is apply for each entry ( in this case it's just one loadmore button )
      // 	entries.forEach( ( entry ) => {
      // 		// If load more button in view.
      // 		if ( entry?.isIntersecting ) {
      // 			this.handleLoadMorePosts();
      // 		}
      // 	} );
      // }

      /**
       * Load more posts.
       *
       * 1.Make an ajax request, by incrementing the page no. by one on each request.
       * 2.Append new/more posts to the existing content.
       * 3.If the response is 0 ( which means no more posts available ), remove the load-more button from DOM.
       * Once the load-more button gets removed, the IntersectionObserverAPI callback will not be triggered, which means
       * there will be no further ajax request since there won't be any more posts available.
       *
       * @return null
       */
    }, {
      key: "handleLoadMorePosts",
      value: function handleLoadMorePosts() {
        var _this2 = this;
        // Get page no from data attribute of load-more button.
        var page = this.loadMoreBtn.data('page');
        // if ( ! page || this.isRequestProcessing ) {
        // 	return null;
        // }
        if (!page) {
          return null;
        }
        var newPage = parseInt(page) + 1;

        // const nextPage = parseInt( page ) + 1; // Increment page count by one.
        // this.isRequestProcessing = true;

        $.ajax({
          url: this.ajaxUrl,
          type: 'post',
          data: {
            page: page,
            action: 'load_more',
            ajax_nonce: this.ajaxNonce
          },
          success: function success(response) {
            // this.loadMoreBtn.data( 'page', nextPage );
            // $( '#load-more-content' ).append( response );
            // this.removeLoadMoreIfOnLastPage( nextPage );
            // this.isRequestProcessing = false;
            if (0 === parseInt(response)) {
              _this2.loadMoreBtn.remove();
            } else {
              _this2.loadMoreBtn.data(page, newPage);
              $('#load-more-content').append(response);
            }
          },
          error: function error(response) {
            // console.log( response );
            // this.isRequestProcessing = false;
          }
        });
      }

      /**
       * Remove Load more Button If on last page.
       *
       * @param {int} nextPage New Page.
       */
      // removeLoadMoreIfOnLastPage( nextPage ) {
      // 	if ( nextPage + 1 > this.totalPagesCount ) {
      // 		this.loadMoreBtn.remove();
      // 	}
      // }
    }]);
    return LoadMore;
  }(); //  LoadMore(); 
  new LoadMore();
})(jQuery);

/***/ }),

/***/ "./src/images/Image-1.jpg":
/*!********************************!*\
  !*** ./src/images/Image-1.jpg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("../../src/images/Image-1.jpg");

/***/ }),

/***/ "./src/images/Image-2.png":
/*!********************************!*\
  !*** ./src/images/Image-2.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("../../src/images/Image-2.png");

/***/ }),

/***/ "./src/images/Image-3.jpg":
/*!********************************!*\
  !*** ./src/images/Image-3.jpg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("../../src/images/Image-3.jpg");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clock */ "./src/js/clock/index.js");
/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_clock__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel */ "./src/js/carousel/index.js");
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _posts_loadmore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts/loadmore */ "./src/js/posts/loadmore.js");
/* harmony import */ var _posts_loadmore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_posts_loadmore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sass/main.scss */ "./src/sass/main.scss");
/* harmony import */ var _images_Image_1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/Image-1.jpg */ "./src/images/Image-1.jpg");
/* harmony import */ var _images_Image_2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/Image-2.png */ "./src/images/Image-2.png");
/* harmony import */ var _images_Image_3_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/Image-3.jpg */ "./src/images/Image-3.jpg");


// import './carousel';

// import './zustand';

// Styles


// Images.



})();

/******/ })()
;
//# sourceMappingURL=main.js.map