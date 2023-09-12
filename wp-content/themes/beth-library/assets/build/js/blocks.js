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

/***/ "./src/js/gutenberg/blocks/basic-block/edit.js":
/*!*****************************************************!*\
  !*** ./src/js/gutenberg/blocks/basic-block/edit.js ***!
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
  var ALLOWED_BLOCKS = ['core/image', 'core/paragraph', 'core/columns', 'core/heading', 'wp-gb/inner-blocks', 'core/button'];
  var TEMPLATE = [['core/columns', {}, [['core/column', {}, [['core/image']]], ['core/column', {}, [['core/heading', {
    level: 3,
    placeholder: 'Enter side title...'
  }], ['core/paragraph', {
    placeholder: 'Enter side content...'
  }], ['core/button', {
    placeholder: 'Button Text...'
  }]]]]]];
  return /*#__PURE__*/React.createElement("div", {
    className: "hhh"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {
    className: className,
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE,
    templateLock: "insert"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BockEdit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/basic-block/index.js":
/*!******************************************************!*\
  !*** ./src/js/gutenberg/blocks/basic-block/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/basic-block/edit.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons_build_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons/build-types */ "@wordpress/icons/build-types");
/* harmony import */ var _wordpress_icons_build_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_icons_build_types__WEBPACK_IMPORTED_MODULE_4__);
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






//styles that make it look good in the editor
// import './editor.scss';

var BLOCKNAME = "inner-blocks";
var BLOCKPATH = "wp-gb/".concat(BLOCKNAME);
var STYLES = {
  minHeight: 100,
  padding: "48px 48px 0 48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  color: "black"
};
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('beth-blocks/basic-block', {
  apiVersion: 2,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Inner Blocks', 'beth'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The description'),
  category: 'beth',
  icon: 'smiley',
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save(props) {
    return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      style: STYLES
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)));
  }
});

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
var BockEdit = function BockEdit(colClassName) {
  var ALLOWED_BLOCKS = ['core/image', 'core/paragraph', 'core/columns', 'core/column', 'core/heading', 'wp-gb/inner-blocks', 'core/button', 'core/html'];
  var TEMPLATE = [["core/columns", {
    className: 'cta-blocjs'
  }, Array.from({
    length: 3
  }, function () {
    return ['core/column', {
      className: 'cta-colClassName'
    }, [['core/image', {
      className: 'beth-dos-dont__heading2'
    }], ['core/paragraph', {
      className: 'mb-1 overline color-accent',
      placeholder: 'Overline'
    }], ['core/heading', {
      level: 3,
      className: 'h1',
      placeholder: 'Enter title2...'
    }], ['core/paragraph', {
      className: 'subtitle',
      placeholder: 'Subtitle'
    }], ['core/html', {
      className: 'content',
      placeholder: 'Enter side content2...'
    }], ['core/button', {
      placeholder: 'Button Tex2t...'
    }]]];
  })]];
  return /*#__PURE__*/React.createElement("div", {
    className: "hhh"
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
/* harmony import */ var _wordpress_icons_build_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons/build-types */ "@wordpress/icons/build-types");
/* harmony import */ var _wordpress_icons_build_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_icons_build_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/colum-content/edit.js");





//styles that make it look good in the editor
// import './editor.scss';

var BLOCKNAME = "column-content-block";
var BLOCKPATH = "beth-blocks/".concat(BLOCKNAME);
var STYLES = {
  minHeight: 100,
  padding: "48px 48px 0 48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  color: "black"
};
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('beth-blocks/column-content-block', {
  apiVersion: 2,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Column Content', 'beth'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The description'),
  category: 'beth',
  icon: 'images-alt2',
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: function save(props) {
    return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      style: STYLES
    }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null));
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
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates */ "./src/js/gutenberg/blocks/cta-block/templates.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_templates__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Block Edit Component
 *
 * @returns {JSX.Element} React Element
 */
var BockEdit = function BockEdit(colClassName) {
  var ALLOWED_BLOCKS = ['core/image', 'core/paragraph', 'core/columns', 'core/column', 'core/heading', 'wp-gb/inner-blocks', 'core/button'];

  //Rewritten with loop below
  // const TEMPLATE = [

  //    ['core/columns', { className: 'cta-blocjs' }, [
  //       ['core/column', { className: 'cta-colClassName' }, [
  //          ['core/image', {className: 'beth-dos-dont__heading'}],
  //          ['core/paragraph', {
  //             placeholder: 'Enter side content...', className: 'beth-dos-dont__heading',
  //          }],
  //          ['core/button', {
  //             placeholder: 'Button Text...', className: 'beth-dos-dont__btn'
  //          }],
  //       ]],

  //       ['core/column', { className: 'cta-colClassName' }, [
  //          ['core/image'],
  //          ['core/paragraph', {
  //             placeholder: 'Enter side content...'
  //          }],
  //          ['core/button', {
  //             placeholder: 'Button Text...'
  //          }],
  //       ]],

  //       ['core/column', { className: 'cta-colClassName' }, [
  //          ['core/heading', {
  //             level: 3,
  //             placeholder: 'Enter side title...'
  //          }],
  //          ['core/paragraph', {
  //             placeholder: 'Enter side content...'
  //          }],
  //          ['core/button', {
  //             placeholder: 'Button Text...'
  //          }],
  //       ]],
  //    ]]
  //    ,
  // ]

  var TEMPLATE = [["core/columns", {
    className: 'cta-blocjs'
  }, Array.from({
    length: 3
  }, function () {
    return ['core/column', {
      className: 'cta-colClassName'
    }, [['core/image', {
      className: 'beth-dos-dont__heading'
    }], ['core/paragraph', {
      placeholder: 'Enter side content...',
      className: 'beth-dos-dont__para'
    }], ['core/button', {
      placeholder: 'Button Text...',
      className: 'beth-dos-dont__btn'
    }]]];
  })]];
  return /*#__PURE__*/React.createElement("div", {
    className: "hhh"
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
/* harmony import */ var _wordpress_icons_build_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons/build-types */ "@wordpress/icons/build-types");
/* harmony import */ var _wordpress_icons_build_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_icons_build_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/cta-block/edit.js");





//styles that make it look good in the editor
// import './editor.scss';

var BLOCKNAME = "CTA";
var BLOCKPATH = "wp-gb/".concat(BLOCKNAME);
var STYLES = {
  minHeight: 100,
  padding: "48px 48px 0 48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  color: "black"
};
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('beth-blocks/cta-block', {
  apiVersion: 2,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('CTA', 'beth'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The description'),
  category: 'beth',
  icon: 'layout',
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: function save(props) {
    return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      style: STYLES
    }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/cta-block/templates.js":
/*!********************************************************!*\
  !*** ./src/js/gutenberg/blocks/cta-block/templates.js ***!
  \********************************************************/
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
  var ALLOWED_BLOCKS = ['core/image', 'core/paragraph', 'core/columns', 'core/heading', 'wp-gb/inner-blocks', 'core/button', 'core/html'];
  var TEMPLATE = [['core/columns', {}, [
  // [ 'core/column', {}, [
  //    [ 'core/image' ],
  // ] ],
  ['core/column', {
    className: 'full-width-cta__wrapper'
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
  }]]]]]];
  return /*#__PURE__*/React.createElement("div", {
    className: "hhh"
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





//styles that make it look good in the editor
// import './editor.scss';

var BLOCKNAME = "full-width-cta-blocks";
var BLOCKPATH = "beth/".concat(BLOCKNAME);
var STYLES = {
  minHeight: 100,
  padding: "48px 48px 0 48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  color: "black"
};
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('beth-blocks/full-width-cta-block', {
  apiVersion: 2,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Full Width CTA', 'beth'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The description'),
  category: 'beth',
  icon: 'editor-expand',
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save(props) {
    return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      style: STYLES
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)));
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

/***/ }),

/***/ "@wordpress/icons/build-types":
/*!******************************************!*\
  !*** external ["wp","icons/buildTypes"] ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["icons/buildTypes"];

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
/* harmony import */ var _gutenberg_blocks_basic_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gutenberg/blocks/basic-block */ "./src/js/gutenberg/blocks/basic-block/index.js");
/* harmony import */ var _gutenberg_blocks_cta_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gutenberg/blocks/cta-block */ "./src/js/gutenberg/blocks/cta-block/index.js");
/* harmony import */ var _gutenberg_blocks_full_width_cta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gutenberg/blocks/full-width-cta */ "./src/js/gutenberg/blocks/full-width-cta/index.js");
/* harmony import */ var _gutenberg_blocks_colum_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gutenberg/blocks/colum-content */ "./src/js/gutenberg/blocks/colum-content/index.js");
/* harmony import */ var _gutenberg_block_extensions_register_block_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gutenberg/block-extensions/register-block-style */ "./src/js/gutenberg/block-extensions/register-block-style.js");








})();

/******/ })()
;
//# sourceMappingURL=blocks.js.map