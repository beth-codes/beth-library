<?php
/**
 * Block Patterns.
 *
 * @package Beth's Library
 */
// 

namespace Beth_Theme\Inc;

 use BETH_THEME\Inc\Traits\Singleton;

 //creating seperate class to enqueue scripts/styles
 class Block_Pattern{
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
      add_action('init', [$this, 'register_block_patterns']);
      add_action( 'init', [$this, 'register_block_pattern_categories']);

	}

   public function register_block_patterns(){
      if (function_exists('register_block_pattern')) {
         //cover pattern path
         $cover_content =$this->get_pattern_content('template-parts/patterns/cover');
         register_block_pattern(
            'beth/cover',
            array(
                'title'       => __( 'Beth Cover', 'beth' ),
                'categories' => ['cover'],
                'description' => _x( 'Beth Cover with image content.','beth' ),
                'content' => $cover_content,
            )
        );

        //CTA pattern path
        $cta_content =$this->get_pattern_content('template-parts/patterns/cta');
         register_block_pattern(
            'beth/cta',
            array(
                'title'       => __( 'Beth CTA', 'beth' ),
                'categories' => ['cta'],
                'description' => _x( 'Beth Call to Action.', 'beth' ),
                'content' => $cta_content,
            )
        );
      }
   }

   public function get_pattern_content($template_path){
      //getting content from template-parts. use ob_start/end to stop it from echoing out content
      ob_start();
      get_template_part($template_path);
      $pattern_content = ob_get_contents();
      ob_end_clean();
      return $pattern_content;
   }
   public function register_block_pattern_categories() {
      $pattern_categories = [
         'cover' => __('Cover Beth', 'beth'),
         'cta' => __('CTA', 'beth'),
         'ctan' => __('CTAN', 'beth'),
      ];

      if (!empty($pattern_categories) && is_array($pattern_categories)) {
         foreach ($pattern_categories as $pattern_category => $pattern_category_label) {
            register_block_pattern_category( $pattern_category, 
            ['label' =>  $pattern_category_label] );
         }
      }
      
   }
   
 }
?>