<?php 
/**
 * 
 * Theme Function 
 * 
 * @package Beth's Library
 */

 //create a constant for directory path, because it is resused multiple time
if (!defined('BETH_DIR_PATH')) {
   define('BETH_DIR_PATH', untrailingslashit(get_template_directory()));
 }
 //create a constant for directory URI, because it is resused multiple time
if (!defined('BETH_DIR_URI')) {
   define('BETH_DIR_URI', untrailingslashit(get_template_directory_uri()));
 }

if (!defined('BETH_BUILD_PATH')) {
   define('BETH_BUILD_PATH', untrailingslashit(get_template_directory()) . '/assets/build');
 }

if ( ! defined( 'BETH_BUILD_URI' ) ) {
	define( 'BETH_BUILD_URI', untrailingslashit( get_template_directory_uri() ) . '/assets/build' );
}

if (!defined('BETH_BUILD_JS_DIR_PATH')) {
   define('BETH_BUILD_JS_DIR_PATH' , untrailingslashit(get_template_directory()) . '/assets/build/js');
}

if (!defined('BETH_BUILD_JS_URI')) {
   define('BETH_BUILD_JS_URI' , untrailingslashit(get_template_directory_uri()) . '/assets/build/js');
}

// if (!defined('BETH_BUILD_IMG_PATH')) {
//    define('BETH_BUILD_IMG_PATH' , untrailingslashit(get_template_directory()) . '/assets/build/src/Images');
// }

if (!defined('BETH_BUILD_IMG_URI')) {
   define('BETH_BUILD_IMG_URI' , untrailingslashit(get_template_directory_uri()) . '/assets/build/src/images');
}

if (!defined('BETH_BUILD_CSS_DIR_PATH')) {
   define('BETH_BUILD_CSS_DIR_PATH' , untrailingslashit(get_template_directory()) . '/assets/build/css');
}

if (!defined('BETH_BUILD_CSS_URI')) {
   define('BETH_BUILD_CSS_URI' , untrailingslashit(get_template_directory_uri()) . '/assets/build/css');
}

if ( ! defined( 'BETH_BUILD_LIB_URI' ) ) {
	define( 'BETH_BUILD_LIB_URI', untrailingslashit( get_template_directory_uri() ) . '/assets/build/library' );
}

 require_once BETH_DIR_PATH . '/inc/helpers/autoloader.php'; 
 require_once BETH_DIR_PATH . '/inc/helpers/template-tags.php';

 function beth_get_theme_instance() {
   \BETH_THEME\Inc\BETH_THEME::get_instance();
 }

beth_get_theme_instance();

//REMOVE GUTENBERG BLOCK LIBRARY CSS FROM LOADING ON THE FRONTEND
// function remove_block_styles(){
//    wp_dequeue_style('wp_block_library');
//    wp_dequeue_style('wp_block_library-theme');
//    wp_dequeue_style('wc-block-style'); //remove woocommerce block css
// }

// add_action('wp_enqueue_scripts', 'remove_block_styles', 100);
