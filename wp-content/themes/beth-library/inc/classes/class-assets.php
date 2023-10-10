<?php
/**
 * Enqueue Theme Scripts.
 *
 * @package Beth's Library
 */
// 

namespace Beth_Theme\Inc;

 use BETH_THEME\Inc\Traits\Singleton;

 //creating seperate class to enqueue scripts/styles
 class Assets{
   use Singleton;
   protected function __construct() {
      //load class and passed to class-beth-theme.php file
		$this->setup_hooks();
	}
	protected function setup_hooks() {
		/**
		 * Actions.
		 */

      // add_action hook, to call/activate the function created for style/script
      add_action('wp_enqueue_scripts', [$this, 'register_styles']);
      add_action('wp_enqueue_scripts', [$this, 'register_scripts']);
      add_action('enqueue_block_assets', [$this, 'enqueue_editor_assets']);
	}
   public function register_styles(){
      // register style file
      wp_register_style( 'main-css', BETH_BUILD_CSS_URI . '/main.css', [], filemtime(BETH_BUILD_CSS_DIR_PATH. '/main.css'), 'all');
      wp_register_style( 'fonts-css', get_template_directory_uri(). '/assets/src/library/fonts/fonts.css', [], false, 'all');
      wp_register_style( 'slick-css', BETH_BUILD_LIB_URI . '/css/slick.css', [], false, 'all' );
		wp_register_style( 'slick-theme-css', BETH_BUILD_LIB_URI . '/css/slick-theme.css', ['slick-css'], false, 'all' );
        // enqueue registered style file
      wp_enqueue_style( 'style-css' ); 
      wp_enqueue_style( 'main-css' );
      wp_enqueue_style( 'slick-css' );
		wp_enqueue_style( 'slick-theme-css' );
   }
   public function register_scripts(){
       // register script file
      wp_register_script( 'main-js', BETH_BUILD_JS_URI . '/main.js', ['jquery', 'slick-js'], filemtime(BETH_BUILD_JS_DIR_PATH. '/main.js'), true);
      wp_register_script( 'slick-js', BETH_BUILD_LIB_URI . '/js/slick.min.js', ['jquery'], false, true );

     
      // enqueue registered script file
      wp_enqueue_script( 'main-js' );
      wp_enqueue_script( 'slick-js' );

      wp_localize_script( 'main-js', 'siteConfig', [
			'ajaxUrl'    => admin_url( 'admin-ajax.php' ),
			'ajax_nonce' => wp_create_nonce( 'loadmore_post_nonce' ),
		] );

   }

   //gutenberg block styles: enqueing block CSS and JS to the frontend and backend
   public function enqueue_editor_assets(){
     $asset_config_file = sprintf('%s/assets.php', BETH_BUILD_PATH);

     if (!file_exists($asset_config_file)) {
      return;
     }

     $asset_config = require_once $asset_config_file;

     if (empty($asset_config['js/editor.js'])) {
      return;
     }

     $editor_asset = $asset_config['js/editor.js'];
     $js_dependencies = (!empty($editor_asset['dependencies'])) ? $editor_asset['dependencies'] : [];
     $version = (!empty($editor_asset['version'])) ? $editor_asset['version'] : filemtime($asset_config_file);

     //Theme Gutenberg JS: only show JS on the backend/editor side
     if (is_admin()){
      wp_enqueue_script(
         'beth-blocks-js',
         BETH_BUILD_JS_URI. '/blocks.js',
         $js_dependencies,
         $version,
         true
      );
   }

   //Theme Gutenberg CSS
   $css_dependencies = [
      'wp-block-library-theme',
      'wp-block-library',
   ];

   wp_enqueue_style(
      'beth-blocks-css',
      BETH_BUILD_CSS_URI . '/blocks.css',
      $css_dependencies,
      filemtime(BETH_BUILD_CSS_DIR_PATH . '/blocks.css'),
      'all'
   );
  }
 }
?>