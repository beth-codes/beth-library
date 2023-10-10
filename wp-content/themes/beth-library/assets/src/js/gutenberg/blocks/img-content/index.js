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

import BockEdit from './edit';

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


import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const BLOCKNAME = "image-content";
const BLOCKPATH = `beth-blocks/${BLOCKNAME}`;


registerBlockType( BLOCKPATH, {
	apiVersion: 2,
	title: __( 'Image Content', 'beth' ),
	description: __( 'The description' ),
	category: 'beth',
	icon: 'forms',

	edit: BockEdit,

	save: (props) => {
		return (
			<div { ...useBlockProps.save() }>
				<InnerBlocks.Content />
			</div>
		)
	},
} );

