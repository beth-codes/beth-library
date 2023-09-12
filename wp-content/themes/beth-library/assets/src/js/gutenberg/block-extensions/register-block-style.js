/*
*Register Block Styles for existing blocks and new
*/
import {registerBlockStyle, unregisterBlockStyle } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

// button style
const layoutStyleButton = [
   {
      name: 'layout-border',
      label: __('Blue Outline', 'beth')
   },
   {
      name: 'layout-border',
      label: __('White Outline', 'beth')
   },
];

/**
 * Quote Block styles.
 *
 * @type {Array}
 */
const layoutStyleQuote = [
	{
		name: 'layout-dark-background',
		label: __( 'Layout style dark background', 'beth' ),
	},
   {
      name: 'layout-light-background',
      label: __('Layout style light background', 'beth'),
   },
];

/**
 * Deregister styles.
 *
 * @return {void}
 */
const deRegister = () => {
	unregisterBlockStyle( 'core/quote', 'color' );
	// unregisterBlockStyle( 'core/button', 'outline' );
};

/**
 * Register styles.
 *
 * @return {void}
 */

const register = () => {
	layoutStyleQuote.forEach( ( layoutStyle ) =>
		registerBlockStyle( 'core/quote', layoutStyle )
	);

	layoutStyleButton.forEach( ( layoutStyle ) =>
		registerBlockStyle( 'core/button', layoutStyle )
	);
};

/**
 * Register and unregister styles on dom ready.
 */
wp.domReady( () => {
	deRegister();
	register();
} );