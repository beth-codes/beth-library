

import BockEdit from './edit';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

//styles that make it look good in the editor
// import './editor.scss';

const BLOCKNAME = "full-width-cta-blocks";
const BLOCKPATH = `beth/${BLOCKNAME}`;

const STYLES = {
	minHeight: 100,
	padding: "48px 48px 0 48px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "white",
	color: "black"
};

registerBlockType( 'beth-blocks/full-width-cta-block', {
	apiVersion: 2,
	title: __( 'Full Width CTA', 'beth' ),
	description: __( 'The description' ),
	category: 'beth',
	icon: 'editor-expand',

	edit: BockEdit,

	save: (props) => {
		return (
			<div { ...useBlockProps.save({ style: STYLES }) }>
				<div>
					<InnerBlocks.Content />
				</div>
			</div>
		)
	},
} );

