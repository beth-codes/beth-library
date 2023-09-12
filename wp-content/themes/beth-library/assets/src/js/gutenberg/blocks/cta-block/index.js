
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { shadow } from '@wordpress/icons/build-types';
import BockEdit from './edit';
//styles that make it look good in the editor
// import './editor.scss';

const BLOCKNAME = "CTA";
const BLOCKPATH = `wp-gb/${BLOCKNAME}`;

const STYLES = {
	minHeight: 100,
	padding: "48px 48px 0 48px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "white",
	color: "black"
};

registerBlockType( 'beth-blocks/cta-block', {
	apiVersion: 2,
	title: __( 'CTA', 'beth' ),
	description: __( 'The description' ),
	category: 'beth',
	icon: 'layout',

	edit: BockEdit,

	save: (props) => {
		return (
			<div { ...useBlockProps.save({ style: STYLES }) }>
				<InnerBlocks.Content />
			</div>
		)
	},
} );

