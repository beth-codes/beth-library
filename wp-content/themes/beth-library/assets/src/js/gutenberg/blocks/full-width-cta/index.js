import BockEdit from './edit';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const BLOCKNAME = "full-width-cta";
const BLOCKPATH = `beth/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
	apiVersion: 2,
	title: __( 'Full Width CTA', 'beth' ),
	description: __( 'The description' ),
	category: 'beth',
	icon: 'editor-expand',

	edit: BockEdit,

	save: (props) => {
		return (
			<div { ...useBlockProps.save() }>
				<InnerBlocks.Content />
			</div>
		)
	},
} );

