import BockEdit from './edit';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const BLOCKNAME = "accordion";
const BLOCKPATH = `beth-blocks/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
	apiVersion: 2,
	title: __( 'Accordion', 'beth' ),
	description: __( 'The description' ),
	category: 'beth',
	icon: 'menu-alt',

	edit: BockEdit,

	save: (props) => {
		return (
			<div { ...useBlockProps.save() }>
				<InnerBlocks.Content />
			</div>
		)
	},
} );

