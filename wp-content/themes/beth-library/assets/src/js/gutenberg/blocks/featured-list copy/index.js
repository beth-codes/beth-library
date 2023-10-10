
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import BockEdit from './edit';

const BLOCKNAME = 'grid-list';
const BLOCKPATH = `beth-blocks/${BLOCKNAME}`;


registerBlockType( BLOCKPATH, {
	apiVersion: 2,
	title: __( 'Grid List', 'beth' ),
	description: __( 'The description' ),
	category: 'beth',
	icon: 'grid-view',

	edit: BockEdit,

	save: (props) => {
		return (
			<div { ...useBlockProps.save() }>
				<InnerBlocks.Content />
			</div>
		)
	},
} );

