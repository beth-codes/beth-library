import BockEdit from './edit';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';


const BLOCKNAME = "gallery-carousel";
const BLOCKPATH = `beth-blocks/${BLOCKNAME}`;


registerBlockType( BLOCKPATH, {
	apiVersion: 2,
	title: __( 'Gallery Carousel Blocks', 'beth' ),
	description: __( 'The description' ),
	category: 'beth',
	icon: 'slides',

	edit: BockEdit,

	save: (props) => {
		return (
         <div className="gallery-carousel-wrapper">
         <div className="center gallery-carousel" >
             <InnerBlocks.Content />
         </div>
     </div>
		)
	},
} );



