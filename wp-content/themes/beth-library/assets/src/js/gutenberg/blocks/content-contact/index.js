import BockEdit from './edit';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const BLOCKNAME = "content-contact";
const BLOCKPATH = `beth-blocks/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
	apiVersion: 2,
	title: __( 'Content Contact', 'beth' ),
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

