/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/gutenberg/block-extensions/register-block-style.js":
/*!*******************************************************************!*\
  !*** ./src/js/gutenberg/block-extensions/register-block-style.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/*
*Register Block Styles for existing blocks and new
*/



// button style
var layoutStyleButton = [{
  name: 'layout-border',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Blue Outline', 'beth')
}, {
  name: 'layout-border',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('White Outline', 'beth')
}];

/**
 * Quote Block styles.
 *
 * @type {Array}
 */
var layoutStyleQuote = [{
  name: 'layout-dark-background',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Layout style dark background', 'beth')
}, {
  name: 'layout-light-background',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Layout style light background', 'beth')
}];

/**
 * Deregister styles.
 *
 * @return {void}
 */
var deRegister = function deRegister() {
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.unregisterBlockStyle)('core/quote', 'color');
  // unregisterBlockStyle( 'core/button', 'outline' );
};

/**
 * Register styles.
 *
 * @return {void}
 */

var register = function register() {
  layoutStyleQuote.forEach(function (layoutStyle) {
    return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockStyle)('core/quote', layoutStyle);
  });
  layoutStyleButton.forEach(function (layoutStyle) {
    return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockStyle)('core/button', layoutStyle);
  });
};

/**
 * Register and unregister styles on dom ready.
 */
wp.domReady(function () {
  deRegister();
  register();
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/accordion/edit.js":
/*!***************************************************!*\
  !*** ./src/js/gutenberg/blocks/accordion/edit.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Block Edit Component
 *
 * @returns {JSX.Element} React Element
 */
var BockEdit = function BockEdit(className) {
  var ALLOWED_BLOCKS = ['core/image', 'core/paragraph', 'core/columns', 'core/column', 'core/heading', 'core/button', 'core/html'];
  var TEMPLATE = [["core/columns", {
    className: 'accordion-content'
  }, [['core/column', {
    className: 'content-inner'
  }, [['core/paragraph', {
    className: 'overline',
    placeholder: 'Overline'
  }], ['core/heading', {
    className: 'heading',
    placeholder: 'Heading',
    level: 2
  }], ['core/paragraph', {
    className: 'subtitle',
    placeholder: 'Subtitle'
  }], ['core/html', {
    className: 'content-wrap',
    placeholder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }], ['core/column', {
    className: 'buttons button-container'
  }, Array.from({
    length: 2
  }, function () {
    return ['core/button', {
      className: 'button',
      placeholder: 'Button Text...'
    }];
  })]]], ['core/column', {
    className: 'accordion'
  }, Array.from({
    length: 6
  }, function () {
    return ['core/column', {
      className: 'accordion-group'
    }, [['core/column', {
      className: 'accordion-title has-icon'
    }, [['core/heading', {
      placeholder: 'Question',
      className: 'heading h2',
      level: 3
    }], ['core/html', {
      placeholder: 'Enter SVG',
      className: 'icon'
    }]]], ['core/paragraph', {
      className: 'accordion-content',
      placeholder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }]]];
  })]]]];

  // const TEMPLATE = [ [ 'core/columns', {className: 'form-content'}, [
  //    // ['core/columns', {className: 'content'}, [

  //       [ 'core/column', {className: 'content-inner'}, [
  //          [ 'core/paragraph', {
  //             className: 'overline'
  //          } ],
  //          [ 'core/heading', {
  //             className: 'heading'
  //          } ],
  //          [ 'core/paragraph', {
  //             className: 'subtitle'
  //          } ],
  //          [ 'core/html', {
  //             className: 'content-wrap'
  //          } ],
  //          ['core/button', {
  //             placeholder: 'Button Tex2t...'
  //          }],
  //       ] ],

  //    // ]],

  //    [ 'core/column', {className: 'accordion'}, [
  //       Array.from({ length: 6 }, () =>
  //       ['core/column', { className: 'accordion-group' }, [

  //          ['core/column', {className: 'accordion-title has-icon'}, [
  //             ['core/heading', { placeholder: 'Header...', className: 'beth-dos-dont__paras' }],

  //             ['core/button', { placeholder: 'Enter side content...', className: 'button' }],
  //          ]],

  //          ['core/html', { className: 'accordion-content' }],
  //       ]],
  //    )
  //    ] ],
  // ] ] ];

  return /*#__PURE__*/React.createElement("div", {
    className: "block-container"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {
    className: className,
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE,
    templateLock: "insert"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BockEdit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/accordion/index.js":
/*!****************************************************!*\
  !*** ./src/js/gutenberg/blocks/accordion/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/accordion/edit.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);




var BLOCKNAME = "accordion";
var BLOCKPATH = "beth-blocks/".concat(BLOCKNAME);
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(BLOCKPATH, {
  apiVersion: 2,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Accordion', 'beth'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The description'),
  category: 'beth',
  icon: 'menu-alt',
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save(props) {
    return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save(), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/banner/edit.js":
/*!************************************************!*\
  !*** ./src/js/gutenberg/blocks/banner/edit.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Block Edit Component
 *
 * @returns {JSX.Element} React Element
 */
var BockEdit = function BockEdit(className) {
  var ALLOWED_BLOCKS = ['core/image', 'core/paragraph', 'core/columns', 'core/heading', 'beth-blocks/inner-blocks', 'core/button', 'core/html'];
  var TEMPLATE = [['core/columns', {
    className: 'banner-content-block'
  }, [['core/column', {
    className: 'banner-content-block-container'
  }, [['core/image', {
    className: 'block-bg-img'
  }], ['core/column', {
    className: 'banner-content'
  }, [['core/paragraph', {
    className: 'mb-1 overline color-accent',
    placeholder: 'Overline'
  }], ['core/heading', {
    level: 3,
    className: 'h1',
    placeholder: 'Enter title...'
  }], ['core/paragraph', {
    className: 'subtitle',
    placeholder: 'Subtitle'
  }], ['core/html', {
    className: 'content',
    placeholder: 'Enter side content...'
  }], ['core/button', {
    placeholder: 'Button Text...'
  }]]]]]]]];
  return /*#__PURE__*/React.createElement("div", {
    className: "block-container"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {
    className: className,
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE,
    templateLock: "insert"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BockEdit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/banner/index.js":
/*!*************************************************!*\
  !*** ./src/js/gutenberg/blocks/banner/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/banner/edit.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);





//styles that make it look good in the editor
// import './editor.scss';

var BLOCKNAME = "banner";
var BLOCKPATH = "beth/".concat(BLOCKNAME);
var STYLES = {
  maxWidth: "100vw",
  padding: 0,
  margin: 0
};
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(BLOCKPATH, {
  apiVersion: 2,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Banner', 'beth'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The description'),
  category: 'beth',
  icon: 'laptop',
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save(props) {
    return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      style: STYLES
    }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/callout-block/edit.js":
/*!*******************************************************!*\
  !*** ./src/js/gutenberg/blocks/callout-block/edit.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates */ "./src/js/gutenberg/blocks/callout-block/templates.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_templates__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Block Edit Component
 *
 * @returns {JSX.Element} React Element
 */
var BockEdit = function BockEdit(colClassName) {
  var ALLOWED_BLOCKS = ['core/image', 'core/paragraph', 'core/columns', 'core/column', 'core/heading', 'beth-blocks/inner-blocks', 'core/button'];
  var TEMPLATE = [["core/columns", {
    className: 'callouts'
  }, Array.from({
    length: 3
  }, function () {
    return ['core/column', {
      className: 'callout'
    }, [['core/image', {
      className: 'beth-dos-dont__heading'
    }], ['core/column', {
      className: 'beth-dos-dont__para'
    }, [['core/heading', {
      placeholder: 'Heading...',
      className: 'beth-dos-dont__paras'
    }], ['core/paragraph', {
      placeholder: 'Enter side content...',
      className: 'beth-dos-dont__paras'
    }], ['core/button', {
      placeholder: 'Button Text...',
      className: 'beth-dos-dont__btns'
    }]]]]];
  })]];
  return /*#__PURE__*/React.createElement("div", {
    className: "block-container"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BockEdit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/callout-block/index.js":
/*!********************************************************!*\
  !*** ./src/js/gutenberg/blocks/callout-block/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/callout-block/edit.js");




var BLOCKNAME = "callout";
var BLOCKPATH = "beth-blocks/".concat(BLOCKNAME);
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(BLOCKPATH, {
  apiVersion: 2,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Callout', 'beth'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The description'),
  category: 'beth',
  icon: 'editor-justify',
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: function save(props) {
    return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save(), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/callout-block/templates.js":
/*!************************************************************!*\
  !*** ./src/js/gutenberg/blocks/callout-block/templates.js ***!
  \************************************************************/
/***/ (() => {


// const getBlockColumn = (optionVal, colClassNmae, placeholder) => {
//    return [

//          [ 'core/column', {className: 'cta-colClassName'}, [
//             [ 'core/image' ],
//             [ 'core/paragraph', {
//                placeholder: 'Enter side content...', className: 'beth-dos-dont__heading',
//             } ],
//             [ 'core/button', {
//                placeholder: 'Button Text...'
//             } ],
//          ] ],

//          [ 'core/column', {className: 'cta-colClassName'}, [
//             [ 'core/image' ],
//             [ 'core/paragraph', {
//                placeholder: 'Enter side content...'
//             } ],
//             [ 'core/button', {
//                placeholder: 'Button Text...'
//             } ],
//          ] ],

//          [ 'core/column', {className: 'cta-colClassName'}, [
//             [ 'core/heading', {
//                level: 3,
//                placeholder: 'Enter side title...'
//             } ],
//             [ 'core/paragraph', {
//                placeholder: 'Enter side content...'
//             } ],
//             [ 'core/button', {
//                placeholder: 'Button Text...'
//             } ],
//          ] ],
//       ]

// }

// export const blockColumns = [
//    [
//       'core/columns',
//       {
//          className: 'beth-dos-dont__column'
//       },
//       [
//          getBlockColumn('cta', 'cta-colClassName', 'CTA'),

//       ],

//    ],
// ]

/***/ }),

/***/ "./src/js/gutenberg/blocks/colum-content/edit.js":
/*!*******************************************************!*\
  !*** ./src/js/gutenberg/blocks/colum-content/edit.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates */ "./src/js/gutenberg/blocks/colum-content/templates.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_templates__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Block Edit Component
 *
 * @returns {JSX.Element} React Element
 */
var BockEdit = function BockEdit(className) {
  var ALLOWED_BLOCKS = ['core/image', 'core/paragraph', 'core/columns', 'core/column', 'core/heading', 'core/button'];
  var TEMPLATE = [["core/columns", {
    className: 'column-countent-block mobile-scroll'
  }, Array.from({
    length: 3
  }, function () {
    return ['core/column', {
      className: 'column-countent-item'
    }, [['core/image', {
      className: 'img'
    }], ['core/column', {
      className: 'column-countent-article'
    }, [['core/paragraph', {
      className: 'mb-1 overline color-accent',
      placeholder: 'Overline'
    }], ['core/heading', {
      level: 3,
      className: 'h1',
      placeholder: 'Header...'
    }], ['core/paragraph', {
      className: 'subtitle',
      placeholder: 'Subtitle'
    }], ['core/paragraph', {
      className: 'column-content-para',
      placeholder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...'
    }], ['core/column', {
      className: 'buttons button-container'
    }, Array.from({
      length: 2
    }, function () {
      return ['core/button', {
        className: 'button',
        placeholder: 'Button Text...'
      }];
    })]]]]];
  })]];
  return /*#__PURE__*/React.createElement("div", {
    className: "block-container"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE,
    templateLock: "insert"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BockEdit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/colum-content/index.js":
/*!********************************************************!*\
  !*** ./src/js/gutenberg/blocks/colum-content/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/colum-content/edit.js");




var BLOCKNAME = "column-content";
var BLOCKPATH = "beth-blocks/".concat(BLOCKNAME);
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(BLOCKPATH, {
  apiVersion: 2,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Column Content', 'beth'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The description'),
  category: 'beth',
  icon: 'images-alt2',
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: function save(props) {
    return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save(), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/colum-content/templates.js":
/*!************************************************************!*\
  !*** ./src/js/gutenberg/blocks/colum-content/templates.js ***!
  \************************************************************/
/***/ (() => {


// const getBlockColumn = (optionVal, colClassNmae, placeholder) => {
//    return [

//          [ 'core/column', {className: 'cta-colClassName'}, [
//             [ 'core/image' ],
//             [ 'core/paragraph', {
//                placeholder: 'Enter side content...', className: 'beth-dos-dont__heading',
//             } ],
//             [ 'core/button', {
//                placeholder: 'Button Text...'
//             } ],
//          ] ],

//          [ 'core/column', {className: 'cta-colClassName'}, [
//             [ 'core/image' ],
//             [ 'core/paragraph', {
//                placeholder: 'Enter side content...'
//             } ],
//             [ 'core/button', {
//                placeholder: 'Button Text...'
//             } ],
//          ] ],

//          [ 'core/column', {className: 'cta-colClassName'}, [
//             [ 'core/heading', {
//                level: 3,
//                placeholder: 'Enter side title...'
//             } ],
//             [ 'core/paragraph', {
//                placeholder: 'Enter side content...'
//             } ],
//             [ 'core/button', {
//                placeholder: 'Button Text...'
//             } ],
//          ] ],
//       ]

// }

// export const blockColumns = [
//    [
//       'core/columns',
//       {
//          className: 'beth-dos-dont__column'
//       },
//       [
//          getBlockColumn('cta', 'cta-colClassName', 'CTA'),

//       ],

//    ],
// ]

/***/ }),

/***/ "./src/js/gutenberg/blocks/compact-cta/edit.js":
/*!*****************************************************!*\
  !*** ./src/js/gutenberg/blocks/compact-cta/edit.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Block Edit Component
 *
 * @returns {JSX.Element} React Element
 */
var BockEdit = function BockEdit(colClassName) {
  var ALLOWED_BLOCKS = ['core/image', 'core/paragraph', 'core/columns', 'core/column', 'core/heading', 'core/button'];
  var TEMPLATE = [["core/columns", {
    className: 'compact-cta-blocks'
  }, Array.from({
    length: 6
  }, function () {
    return ['core/column', {
      className: 'compact-container'
    }, [['core/image', {
      className: 'img'
    }], ['core/column', {
      className: 'compact-article'
    }, [['core/heading', {
      placeholder: 'Header...',
      className: 'h3'
    }], ['core/paragraph', {
      placeholder: 'Enter side content...',
      className: 'compact-paragraph'
    }]]]]];
  })]];
  return /*#__PURE__*/React.createElement("div", {
    className: "block-container"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE,
    templateLock: "insert"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BockEdit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/compact-cta/index.js":
/*!******************************************************!*\
  !*** ./src/js/gutenberg/blocks/compact-cta/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/compact-cta/edit.js");




var BLOCKNAME = 'compact-cta';
var BLOCKPATH = "beth-blocks/".concat(BLOCKNAME);
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(BLOCKPATH, {
  apiVersion: 2,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Compact CTA', 'beth'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The description'),
  category: 'beth',
  icon: 'images-alt2',
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: function save(props) {
    return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save(), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/content-contact/edit.js":
/*!*********************************************************!*\
  !*** ./src/js/gutenberg/blocks/content-contact/edit.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Block Edit Component
 *
 * @returns {JSX.Element} React Element
 */
var BockEdit = function BockEdit(className) {
  var ALLOWED_BLOCKS = ['core/image', 'core/paragraph', 'core/columns', 'core/heading', 'core/button', 'core/html'];
  var TEMPLATE = [['core/columns', {
    className: 'form-content'
  }, [['core/columns', {
    className: 'content'
  }, [['core/column', {
    className: 'content-inner'
  }, [['core/paragraph', {
    className: 'overline'
  }], ['core/heading', {
    className: 'heading'
  }], ['core/paragraph', {
    className: 'subtitle'
  }], ['core/html', {
    className: 'content-wrap'
  }], ['core/button', {
    placeholder: 'Button Tex2t...'
  }]]]]], ['core/column', {
    className: 'form'
  }, [['core/heading', {
    level: 3,
    placeholder: 'Enter side title...'
  }], ['core/html', {
    placeholder: 'Enter form tag...'
  }]]]]]];
  return /*#__PURE__*/React.createElement("div", {
    className: "block-container"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {
    className: className,
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE,
    templateLock: "insert"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BockEdit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/content-contact/index.js":
/*!**********************************************************!*\
  !*** ./src/js/gutenberg/blocks/content-contact/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/content-contact/edit.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);




var BLOCKNAME = "content-contact";
var BLOCKPATH = "beth-blocks/".concat(BLOCKNAME);
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(BLOCKPATH, {
  apiVersion: 2,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content Contact', 'beth'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The description'),
  category: 'beth',
  icon: 'forms',
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save(props) {
    return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save(), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/cta-block/edit.js":
/*!***************************************************!*\
  !*** ./src/js/gutenberg/blocks/cta-block/edit.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Block Edit Component
 *
 * @returns {JSX.Element} React Element
 */
var BockEdit = function BockEdit(colClassName) {
  var ALLOWED_BLOCKS = ['core/image', 'core/paragraph', 'core/columns', 'core/column', 'core/heading', 'core/button'];
  var TEMPLATE = [["core/columns", {
    className: 'cta-blocks'
  }, Array.from({
    length: 3
  }, function () {
    return ['core/column', {
      className: 'cta'
    }, [['core/image', {
      className: 'cta-img img'
    }], ['core/column', {
      className: 'cta-inner'
    }, [['core/paragraph', {
      placeholder: 'Overline',
      className: 'overline'
    }], ['core/paragraph', {
      placeholder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      className: 'cta-title'
    }], ['core/button', {
      placeholder: 'Button Text',
      className: 'button'
    }]]]]];
  })]];
  return /*#__PURE__*/React.createElement("div", {
    className: "block-container"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE,
    templateLock: "insert"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BockEdit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/cta-block/index.js":
/*!****************************************************!*\
  !*** ./src/js/gutenberg/blocks/cta-block/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/cta-block/edit.js");




var BLOCKNAME = "cta";
var BLOCKPATH = "beth-blocks/".concat(BLOCKNAME);
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(BLOCKPATH, {
  apiVersion: 2,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('CTA', 'beth'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The description'),
  category: 'beth',
  icon: 'layout',
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: function save(props) {
    return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save(), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/dos-dont/edit.js":
/*!**************************************************!*\
  !*** ./src/js/gutenberg/blocks/dos-dont/edit.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates */ "./src/js/gutenberg/blocks/dos-dont/templates.js");


var Edit = function Edit() {
  var ALLOWED_BLOCKS = ['core/group'];
  var TEMPLATE = [['core/group', {
    className: 'beth-dos-dont__group'
  }, _templates__WEBPACK_IMPORTED_MODULE_1__.blockColumns]];
  return /*#__PURE__*/React.createElement("div", {
    className: "beth-dos-dont"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/dos-dont/index.js":
/*!***************************************************!*\
  !*** ./src/js/gutenberg/blocks/dos-dont/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/dos-dont/edit.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('beth-blocks/dos-dont', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dos Dont', 'beth'),
  icon: 'admin-customizer',
  category: 'beth',
  attributes: {
    option: {
      type: 'string',
      default: 'dos'
    },
    content: {
      type: 'string',
      source: 'html',
      selector: ['h2'],
      default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dos', 'beth')
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: function save() {
    return (
      /*#__PURE__*/
      // Saves <h2>Content added in the editor...</h2> to the database for frontend display
      React.createElement("div", null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null))
    );
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/dos-dont/templates.js":
/*!*******************************************************!*\
  !*** ./src/js/gutenberg/blocks/dos-dont/templates.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockColumns: () => (/* binding */ blockColumns)
/* harmony export */ });
var getBlockColumn = function getBlockColumn(optionVal, colClassNmae, heading) {
  return ['core/column', {
    className: colClassNmae
  }, [['beth-blocks/heading', {
    className: 'beth-dos-dont__heading',
    option: optionVal,
    content: heading
  }], ['core/list', {
    className: 'beth-dos-dont__list'
  }]]];
};
var blockColumns = [['core/columns', {
  className: 'beth-dos-dont__column'
}, [getBlockColumn('dos', 'beth-dont__col-one', 'DOS'), getBlockColumn('dos', 'beth-dont__col-two', 'DONT')]]];

/***/ }),

/***/ "./src/js/gutenberg/blocks/featured-list/edit.js":
/*!*******************************************************!*\
  !*** ./src/js/gutenberg/blocks/featured-list/edit.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Block Edit Component
 *
 * @returns {JSX.Element} React Element
 */
var BockEdit = function BockEdit(colClassName) {
  var ALLOWED_BLOCKS = ['core/image', 'core/paragraph', 'core/columns', 'core/column', 'core/heading', 'core/button', 'core/html'];
  var TEMPLATE = [["core/columns", {
    className: 'featured-list'
  }, Array.from({
    length: 6
  }, function () {
    return ['core/column', {
      className: 'featured-list-item '
    }, [['core/html', {
      className: 'svg-cont list-counter'
    }], ['core/column', {
      className: 'list-content'
    }, [['core/heading', {
      level: 3,
      placeholder: 'Lorem ipsum',
      className: 'featured-list-header'
    }], ['core/paragraph', {
      placeholder: 'Lorem ipsum dolor sit amet, consectetur ',
      className: 'featured-list-para'
    }]]]]];
  })]];
  return /*#__PURE__*/React.createElement("div", {
    className: "block-container"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE,
    templateLock: "insert"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BockEdit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/featured-list/index.js":
/*!********************************************************!*\
  !*** ./src/js/gutenberg/blocks/featured-list/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/featured-list/edit.js");




var BLOCKNAME = 'featured-list';
var BLOCKPATH = "beth-blocks/".concat(BLOCKNAME);
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(BLOCKPATH, {
  apiVersion: 2,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Featured List', 'beth'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The description'),
  category: 'beth',
  icon: 'grid-view',
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: function save(props) {
    return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save(), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/full-width-cta/edit.js":
/*!********************************************************!*\
  !*** ./src/js/gutenberg/blocks/full-width-cta/edit.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Block Edit Component
 *
 * @returns {JSX.Element} React Element
 */
var BockEdit = function BockEdit(className) {
  var ALLOWED_BLOCKS = ['core/image', 'core/paragraph', 'core/columns', 'core/heading', 'core/button', 'core/html'];
  var TEMPLATE = [['core/columns', {
    className: 'full-cta'
  }, [['core/column', {
    className: 'full-cta-container'
  }, [['core/image', {
    className: 'block-bg-img'
  }], ['core/column', {
    className: 'full-cta-content'
  }, [['core/paragraph', {
    className: 'mb-1 overline color-accent',
    placeholder: 'Overline'
  }], ['core/heading', {
    level: 2,
    className: 'h1',
    placeholder: 'Title'
  }], ['core/paragraph', {
    className: 'subtitle',
    placeholder: 'Subtitle'
  }], ['core/html', {
    className: 'full-cta-text',
    placeholder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }], ['core/column', {
    className: 'buttons button-container'
  }, Array.from({
    length: 2
  }, function () {
    return ['core/button', {
      className: 'button',
      placeholder: 'Button Text...'
    }];
  })]]]]]]]];
  return /*#__PURE__*/React.createElement("div", {
    className: "block-container"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {
    className: className,
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE,
    templateLock: "insert"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BockEdit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/full-width-cta/index.js":
/*!*********************************************************!*\
  !*** ./src/js/gutenberg/blocks/full-width-cta/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/full-width-cta/edit.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);




var BLOCKNAME = "full-width-cta";
var BLOCKPATH = "beth/".concat(BLOCKNAME);
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(BLOCKPATH, {
  apiVersion: 2,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Full Width CTA', 'beth'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The description'),
  category: 'beth',
  icon: 'editor-expand',
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save(props) {
    return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save(), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/gallery-carousel/edit.js":
/*!**********************************************************!*\
  !*** ./src/js/gutenberg/blocks/gallery-carousel/edit.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Block Edit Component
 *
 * @returns {JSX.Element} React Element
 */

var BockEdit = function BockEdit(_ref) {
  var className = _ref.className,
    attributes = _ref.attributes,
    setAttributes = _ref.setAttributes;
  var ALLOWED_BLOCKS = ['core/image'];
  var TEMPLATE = [
  // ['core/columns', {className: 'gallery-carousel' }, [
  ['core/column', {
    className: 'gallery-carousel-slide'
  }, [['core/image', {
    className: 'gallery-carousel-slide-img img'
  }], ['core/paragraph', {
    className: 'caption',
    placeholder: '<This is a caption for the FIRST slide'
  }]]], ['core/column', {
    className: 'gallery-carousel-slide'
  }, [['core/image', {
    className: 'gallery-carousel-slide-img img'
  }], ['core/paragraph', {
    className: 'caption',
    placeholder: '<This is a caption for the FIRST slide'
  }]]], ['core/column', {
    className: 'gallery-carousel-slide'
  }, [['core/image', {
    className: 'gallery-carousel-slide-img img'
  }], ['core/paragraph', {
    className: 'caption',
    placeholder: '<This is a caption for the FIRST slide'
  }]]], ['core/column', {
    className: 'gallery-carousel-slide'
  }, [['core/image', {
    className: 'gallery-carousel-slide-img img'
  }], ['core/paragraph', {
    className: 'caption',
    placeholder: '<This is a caption for the FIRST slide'
  }]]], ['core/column', {
    className: 'gallery-carousel-slide'
  }, [['core/image', {
    className: 'gallery-carousel-slide-img img'
  }], ['core/paragraph', {
    className: 'caption',
    placeholder: '<This is a caption for the FIRST slide'
  }]]], ['core/column', {
    className: 'gallery-carousel-slide'
  }, [['core/image', {
    className: 'gallery-carousel-slide-img img'
  }], ['core/paragraph', {
    className: 'caption',
    placeholder: '<This is a caption for the FIRST slide'
  }]]]
  // ]],

  // ['core/image', { className: 'gallery-carousel-slide-img' }],
  // ['core/image', { className: 'gallery-carousel-slide-img' }],
  // ['core/image', { className: 'gallery-carousel-slide-img' }],
  // ['core/image', { className: 'gallery-carousel-slide-img' }],
  // ['core/image', { className: 'gallery-carousel-slide-img' }]
  ];

  return /*#__PURE__*/React.createElement("div", {
    className: "block-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "edit"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE,
    templateLock: "insert"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BockEdit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/gallery-carousel/index.js":
/*!***********************************************************!*\
  !*** ./src/js/gutenberg/blocks/gallery-carousel/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/gallery-carousel/edit.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);




var BLOCKNAME = "gallery-carousel";
var BLOCKPATH = "beth-blocks/".concat(BLOCKNAME);
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(BLOCKPATH, {
  apiVersion: 2,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Gallery Carousel Blocks', 'beth'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The description'),
  category: 'beth',
  icon: 'slides',
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: "gallery-carousel-wrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: "center gallery-carousel"
    }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/heading-icon/edit.js":
/*!******************************************************!*\
  !*** ./src/js/gutenberg/blocks/heading-icon/edit.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var Edit = function Edit(_ref) {
  var className = _ref.className,
    attributes = _ref.attributes,
    setAttributes = _ref.setAttributes;
  var content = attributes.content;
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)();
  return /*#__PURE__*/React.createElement("div", {
    className: "beth-icon-heading"
  }, /*#__PURE__*/React.createElement("span", {
    className: "beth-icon-heaing__heading"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, _extends({}, blockProps, {
    tagName: "h2",
    className: className,
    value: content,
    onChange: function onChange(content) {
      return setAttributes({
        content: content
      });
    },
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('heading...', 'beth')
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/heading-icon/index.js":
/*!*******************************************************!*\
  !*** ./src/js/gutenberg/blocks/heading-icon/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/heading-icon/edit.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('beth-blocks/heading', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading Icon', 'beth'),
  icon: 'admin-customizer',
  category: 'beth',
  attributes: {
    option: {
      type: 'string',
      default: 'dos'
    },
    content: {
      type: 'string',
      source: 'html',
      selector: 'h2',
      default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dos', 'beth')
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: function save(_ref) {
    var className = _ref.className,
      attributes = _ref.attributes;
    var content = attributes.content;
    return (
      /*#__PURE__*/
      // Saves <h2>Content added in the editor...</h2> to the database for frontend display
      React.createElement("div", {
        className: "beth-icon-heading"
      }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
        tagName: "h2",
        value: content
      }), /*#__PURE__*/React.createElement("br", null))
    );
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/img-content/edit.js":
/*!*****************************************************!*\
  !*** ./src/js/gutenberg/blocks/img-content/edit.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
// import { useBlockProps, RichText } from '@wordpress/block-editor';
// import { __ } from '@wordpress/i18n';

// const Edit = ({className, attributes, setAttributes}) => {
//    const blockProps = useBlockProps();
//    const {content} = attributes;
//    return (<div className="basic-block">
//       {/* <span className="beth-icon-heaing__heading"> */}
//          <RichText
//           { ...blockProps }
//             tagName="h2"
//             className = {className}
//             value={content}
//             onChange={(content)=> setAttributes({content})}
//             placeholder={__('Basic...', 'beth')}
//          />
//       {/* </span> */}
//    </div>)
// }

// export default Edit;



/**
 * Block Edit Component
 *
 * @returns {JSX.Element} React Element
 */
var BockEdit = function BockEdit(className) {
  var ALLOWED_BLOCKS = ['core/image', 'core/paragraph', 'core/columns', 'core/heading', 'core/button'];
  var TEMPLATE = [['core/columns', {
    className: 'img-content-container'
  }, [['core/column', {
    className: 'img-content-image'
  }, [['core/image', {
    className: 'img'
  }]]], ['core/column', {
    className: 'img-content-text'
  }, [['core/paragraph', {
    className: 'mb-1 overline color-acccent',
    placeholder: 'Overline...'
  }], ['core/heading', {
    level: 2,
    placeholder: 'Heading...'
  }], ['core/paragraph', {
    className: 'img-content-para',
    placeholder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...'
  }], ['core/column', {
    className: 'buttons button-container'
  }, Array.from({
    length: 2
  }, function () {
    return ['core/button', {
      className: 'button',
      placeholder: 'Button Text...'
    }];
  })]]]]]];
  return /*#__PURE__*/React.createElement("div", {
    className: "block-container"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {
    className: className,
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE,
    templateLock: "insert"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BockEdit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/img-content/index.js":
/*!******************************************************!*\
  !*** ./src/js/gutenberg/blocks/img-content/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/img-content/edit.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
// /**
//  * WordPress dependencies
//  */
// import { useBlockProps, RichText } from '@wordpress/block-editor';
// import { __ } from '@wordpress/i18n';
// import { registerBlockType } from '@wordpress/blocks';
// import Edit from './edit';

// // Register the block
// registerBlockType( 'beth-blocks/basic-block', {
//    title: __('Basic Block', 'beth'),
//    icon: 'block-default',  
//    category: 'beth',
//    "supports": {
//       "color": {
//           "text": true,
//           "background": true,
//           "link": true
//       }
//   },
//    attributes: {
//       option:{
//          type:'string',
//          default: 'Basic Block',
//       },
//       content: {
//           type: 'string',
//           source: 'html',
//           selector: ['h2'],
//           default: __('Basic', 'beth'),
//       },
//   },
//     edit : Edit,
//     save( { className, attributes } ) {
//       const blockProps = useBlockProps.save();
//       const {content} = attributes;
//       return (
//             // Saves <h2>Content added in the editor...</h2> to the database for frontend display
//          <div className="basic-block">
//             <RichText.Content { ...blockProps } tagName="h2" value={content} /><br></br>
//          </div>
//       ); 
//   },
// } );

// import { registerBlockType } from '@wordpress/blocks';
// import { InnerBlocks } from '@wordpress/block-editor';



// registerBlockType('beth-blocks/basic-block', {
//    title: __('Basic Block', 'beth'),
//    icon: 'block-default',  
//    category: 'beth',
//    "supports": {
//       "color": {
//           "text": true,
//           "background": true,
//           "link": true
//       }
//   },
//    attributes: {
//       option:{
//          type:'string',
//          default: 'Basic Block',
//       },
//       content: {
//           type: 'string',
//           source: 'html',
//           selector: ['h2'],
//           default: __('Basic', 'beth'),
//       },
//   },
// 	edit: BockEdit,
// 	save: () => <InnerBlocks.Content />,
// });




var BLOCKNAME = "image-content";
var BLOCKPATH = "beth-blocks/".concat(BLOCKNAME);
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(BLOCKPATH, {
  apiVersion: 2,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image Content', 'beth'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The description'),
  category: 'beth',
  icon: 'forms',
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save(props) {
    return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save(), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/sass/blocks.scss":
/*!******************************!*\
  !*** ./src/sass/blocks.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

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
/*!**************************!*\
  !*** ./src/js/blocks.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_blocks_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/blocks.scss */ "./src/sass/blocks.scss");
/* harmony import */ var _gutenberg_blocks_heading_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gutenberg/blocks/heading-icon */ "./src/js/gutenberg/blocks/heading-icon/index.js");
/* harmony import */ var _gutenberg_blocks_dos_dont__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gutenberg/blocks/dos-dont */ "./src/js/gutenberg/blocks/dos-dont/index.js");
/* harmony import */ var _gutenberg_blocks_img_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gutenberg/blocks/img-content */ "./src/js/gutenberg/blocks/img-content/index.js");
/* harmony import */ var _gutenberg_blocks_cta_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gutenberg/blocks/cta-block */ "./src/js/gutenberg/blocks/cta-block/index.js");
/* harmony import */ var _gutenberg_blocks_full_width_cta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gutenberg/blocks/full-width-cta */ "./src/js/gutenberg/blocks/full-width-cta/index.js");
/* harmony import */ var _gutenberg_blocks_colum_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gutenberg/blocks/colum-content */ "./src/js/gutenberg/blocks/colum-content/index.js");
/* harmony import */ var _gutenberg_blocks_compact_cta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gutenberg/blocks/compact-cta */ "./src/js/gutenberg/blocks/compact-cta/index.js");
/* harmony import */ var _gutenberg_blocks_callout_block__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gutenberg/blocks/callout-block */ "./src/js/gutenberg/blocks/callout-block/index.js");
/* harmony import */ var _gutenberg_blocks_gallery_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gutenberg/blocks/gallery-carousel */ "./src/js/gutenberg/blocks/gallery-carousel/index.js");
/* harmony import */ var _gutenberg_blocks_content_contact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gutenberg/blocks/content-contact */ "./src/js/gutenberg/blocks/content-contact/index.js");
/* harmony import */ var _gutenberg_blocks_featured_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gutenberg/blocks/featured-list */ "./src/js/gutenberg/blocks/featured-list/index.js");
/* harmony import */ var _gutenberg_blocks_banner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gutenberg/blocks/banner */ "./src/js/gutenberg/blocks/banner/index.js");
/* harmony import */ var _gutenberg_blocks_accordion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./gutenberg/blocks/accordion */ "./src/js/gutenberg/blocks/accordion/index.js");
/* harmony import */ var _gutenberg_block_extensions_register_block_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./gutenberg/block-extensions/register-block-style */ "./src/js/gutenberg/block-extensions/register-block-style.js");














// import './gutenberg/blocks/grid-list';


})();

/******/ })()
;
//# sourceMappingURL=blocks.js.map