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
 class Blocks{
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
      add_filter('block_categories_all', [$this, 'register_layout_category']);
   
	}

   public function register_layout_category( $categories ) {
      // Adding a new category.
      $category_slugs = wp_list_pluck($categories, 'slug');
    
      return in_array('beth', $category_slugs, true) ? $categories : array_merge(
         $categories,
         [
            [
               'slug' => 'beth',
               'title' => __('Beth Blocks', 'beth'),
               'icon' => 'table-row-after',
            ],
         ]
      );
      
  } 

 }

 
?>