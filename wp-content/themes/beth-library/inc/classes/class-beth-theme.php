<?php
/**
 * Bootstraps the Theme.
 *
 * @package Beth's Library
 */

namespace BETH_THEME\Inc;

use BETH_THEME\Inc\Traits\Singleton;

class BETH_THEME {
	use Singleton;

	protected function __construct() {
      //instatiating enqueue script/class class
      Assets::get_instance();
      Menu::get_instance();
      Meta_Boxes::get_instance();
      Sidebars::get_instance();
		Blocks::get_instance();
      Block_Pattern::get_instance();
		Loadmore_Posts::get_instance();
		// Load class.
		
	
		
		// Loadmore_Single::get_instance();
		// Register_Post_Types::get_instance();
		// Register_Taxonomies::get_instance();
		// Archive_Settings::get_instance();

		$this->setup_hooks();
	}

	protected function setup_hooks() {

		/**
		 * Actions.
		 */
		// add action for theme support
      add_action('after_setup_theme', [ $this, 'setup_theme' ]);
	}
	/**
	 * Setup theme.
	 *
	 * @return void
	 */

    //Theme support adds dynamic functionality to website. differnt theme supports are enabled in this section. 
   public function setup_theme(){
      /**
	 	 * Let WordPress manage the document title.
	 	 * By adding theme support, we declare that this theme does not use a
	 	 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
 	 */
      //dynamic title tag
      add_theme_support('title-tag');

      /**
		 * Custom logo.
		 * @see Adding custom logo
		 * @link https://developer.wordpress.org/themes/functionality/custom-logo/#adding-custom-logo-support-to-your-theme
       * Adding logo to section to wordpress customise
		 */
     
      add_theme_support( 'custom-logo', [
	      'header-text' => [ 'site-title', 'site-description' ],
         'height'      => 100,
	      'width'       => 400,
	      'flex-height' => true,
	      'flex-width'  => true,
     ] );

     /**
		 * Adds Custom background panel to customizer.
		 *
		 * @see Enable Custom Backgrounds
		 * @link https://developer.wordpress.org/themes/functionality/custom-backgrounds/#enable-custom-backgrounds
		 */
       add_theme_support(
         'custom-background',
         [
            'default-color' => 'ffffff',
            'default-image' => '/wp-content/themes/beth-library/images/Image-2.png',
            'default-repeat' => 'no-repeat',
         ]
      );

      /**
		 * Enable support for Post Thumbnails on posts and pages.
		 * Adding this will allow you to select the featured image on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
      add_theme_support( 'post-thumbnails' );

      add_theme_support( 'post-formats', array( 'aside', 'gallery' ) );

      /**
		 * Register image sizes.
		 */
      //name of the image size and width/height set
		add_image_size( 'featured-thumbnail', 350, 233, true );

      // Add theme support for selective refresh for widgets.
		/**
		 * WordPress 4.5 includes a new Customizer framework called selective refresh.
		 * Selective refresh is a hybrid preview mechanism that has the performance benefit of not having to refresh the entire preview window.
		 *
		 * @link https://make.wordpress.org/core/2016/03/22/implementing-selective-refresh-support-for-widgets/
		 */
      add_theme_support( 'customize-selective-refresh-widgets' );

      // Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

      /**
		 * Switch default core markup for search form, comment form, comment-list, gallery, caption, script and style
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			[
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'script',
				'style',
			]
		);

   

      // Gutenberg theme support.
		/**
		 * Some blocks in Gutenberg like tables, quotes, separator benefit from structural styles (margin, padding, border etc…)
		 * They are applied visually only in the editor (back-end) but not on the front-end to avoid the risk of conflicts with the styles wanted in the theme.
		 * If you want to display them on front to have a base to work with, in this case, you can add support for wp-block-styles, as done below.
		 * @see Theme Styles.
		 * @link https://make.wordpress.org/core/2018/06/05/whats-new-in-gutenberg-5th-june/, https://developer.wordpress.org/block-editor/developers/themes/theme-support/#default-block-styles
		 */
		add_theme_support( 'wp-block-styles' );

      /**
		 * Some blocks such as the image block have the possibility to define
		 * a “wide” or “full” alignment by adding the corresponding classname
		 * to the block’s wrapper ( alignwide or alignfull ). 
		 * @see Wide Alignment
		 * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#wide-alignment
		 */
      //changes image width
      add_theme_support( 'align-wide' );

      /**
		 * Loads the editor styles in the Gutenberg editor.
		 *
		 * Editor Styles allow you to provide the CSS used by WordPress’ Visual Editor so that it can match the frontend styling.
		 * If we don't add this, the editor styles will only load in the classic editor ( tiny mice )
		 *
		 * @see https://developer.wordpress.org/block-editor/developers/themes/theme-support/#editor-styles
		 */
		add_theme_support( 'editor-styles' );

      // Add path to custom editor style, folder is created in build, editor.css. To style existing block on WP
      add_editor_style('assets/build/css/editor.css' );

      // Remove default core block patterns
      remove_theme_support('core-block-patterns');

      /**
		 * Set the maximum allowed width for any content in the theme,
		 * like oEmbeds and images added to posts
		 *
		 * @see Content Width
		 * @link https://codex.wordpress.org/Content_Width
		 */
		global $content_width;
		if ( ! isset( $content_width ) ) {
			$content_width = 1240;
		}
	
   }


	// public function setup_theme() {

	// 	/**
	// 	 *
	// 	 * Path to our custom editor style.
	// 	 * It allows you to link a custom stylesheet file to the TinyMCE editor within the post edit screen.
	// 	 *
	// 	 * Since we are not passing any parameter to the function,
	// 	 * it will by default, link the editor-style.css file located directly under the current theme directory.
	// 	 * In our case since we are passing 'assets/build/css/editor.css' path it will use that.
	// 	 * You can change the name of the file or path and replace the path here.
	// 	 *
	// 	 * @see add_editor_style(
	// 	 * @link https://developer.wordpress.org/reference/functions/add_editor_style/
	// 	 */
	// 	add_editor_style( 'assets/build/css/editor.css' );

	// 	// Remove the core block patterns
	// 	remove_theme_support( 'core-block-patterns' );

	// }

}