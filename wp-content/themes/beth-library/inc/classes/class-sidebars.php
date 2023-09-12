<?php
/**
 * Sidebar Class
 *
 * @package Beth's Library
 */

 namespace Beth_Theme\Inc;

 use BETH_THEME\Inc\Traits\Singleton;

 //creating seperate class to enqueue scripts/styles
 class Sidebars{
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
      add_action('widgets_init', [$this, 'register_sidebars']);
      add_action('widgets_init', [$this, 'register_time_widget']);
	}

   public function register_sidebars(){
      register_sidebar([
         'name'          => __( 'Sidebar', 'beth' ),
         'id'            => 'sidebar-1',
         'description'   => __( 'Main sidebar.', 'beth' ),
         'before_widget' => '<div id="%1$s" class="widget %2$s">',
         'after_widget'  => '</div>',
         'before_title'  => '<h3 class="widgettitle">',
         'after_title'   => '</h3>',
      ] );

      register_sidebar([
         'name'          => __( 'Footer', 'beth' ),
         'id'            => 'sidebar-2',
         'description'   => __( 'Footer sidebar.', 'beth' ),
         'before_widget' => '<div id="%1$s" class="widget %2$s">',
         'after_widget'  => '</div>',
         'before_title'  => '<h3 class="widgettitle">',
         'after_title'   => '</h3>',
      ] );
   }

   public function register_time_widget(){
      register_widget('BETH_THEME\Inc\Clock_Widget');
   }

   
 }
?>