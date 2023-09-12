<?php
/**
 * Enqueue Theme Menu.
 *
 * @package Beth's Library
 */

 namespace Beth_Theme\Inc;

 use BETH_THEME\Inc\Traits\Singleton;

 //creating seperate class to enqueue scripts/styles
 class Menu{
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
      add_action('init', [$this, 'register_menu']);

	}

   public  function register_menu(){
      register_nav_menus([
         'beth-header-menu' => esc_html__('Header Menu', 'beth'),
         'beth-footer-menu' => esc_html__('Footer Menu', 'beth'),
      ]);
   }

   //getting menu location
   public  function get_menu_id($location){
         //get all locations
         $locations = get_nav_menu_locations();

         //get object id by locations
         $menu_id = $locations[$location];
         return ! empty($menu_id)? $menu_id:'';
   }

   //pusshing menu
   public  function get_child_menu_item($menu_array, $parent_id){
      $child_menus = [];

      if (!empty($menu_array) && is_array($menu_array)) {
         foreach ($menu_array as $menu) {
            if (intval($menu->menu_item_parent) === $parent_id) {
               array_push($child_menus, $menu);
            }
         }
      }

      return $child_menus;
}
  
 }
?>