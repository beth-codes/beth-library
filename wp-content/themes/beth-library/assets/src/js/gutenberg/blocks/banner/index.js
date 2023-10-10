

import BockEdit from './edit';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

//styles that make it look good in the editor
// import './editor.scss';

const BLOCKNAME = "banner";
const BLOCKPATH = `beth/${BLOCKNAME}`;

const STYLES = {
   maxWidth: "100vw",
   padding: 0,
   margin: 0,
};

registerBlockType( BLOCKPATH, {
	apiVersion: 2,
	title: __( 'Banner', 'beth' ),
	description: __( 'The description' ),
	category: 'beth',
	icon: 'laptop',

	edit: BockEdit,

	save: (props) => {
		return (
			<div { ...useBlockProps.save({ style: STYLES }) }>
				<InnerBlocks.Content />
			</div>
		)
	},
} );

