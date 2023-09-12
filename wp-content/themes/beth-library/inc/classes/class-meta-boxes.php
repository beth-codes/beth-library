<?php
/**
 * Register Meta Box.
 *
 * @package Beth's Library
 */

 namespace Beth_Theme\Inc;

 use BETH_THEME\Inc\Traits\Singleton;

 //creating seperate class to enqueue scripts/styles
 class Meta_Boxes{
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
      add_action('add_meta_boxes', [$this, 'add_custom_meta_box']);
      add_action('save_post', [$this, 'save_post_meta_data']);
	}
   public function add_custom_meta_box($post){
      $screens = [ 'post'];
      foreach ( $screens as $screen ) {
		add_meta_box(
			'hide-page-title',                     // Unique ID
			__('Hide page title', 'beth'),         // Box title
			[$this, 'custom_meta_box_html'],       // Content callback, must be of type callable
			$screen,                               // Post type
         'side'
		);
	}
   }

   public function custom_meta_box_html($post){
      $value = get_post_meta( $post->ID, '_hide_page_title', true );

      /**
      *Using NONCE for verification
      */
      wp_nonce_field(plugin_basename(__FILE__), 'hide_title_meta_box_nonce');
      
      ?>
      <label for="beth-field"><?php esc_html_e('Hide the page title', 'beth'); ?></label>
      <select name="beth_hide_title_field" id="beth-field" class="postbox">
         <option value=""><?php esc_html_e('Select', 'beth'); ?></option>
         <option value="yes" <?php selected( $value, 'yes' ); ?>><?php esc_html_e('Yes', 'beth'); ?></option>
         <option value="no" <?php selected( $value, 'no' ); ?>><?php esc_html_e('No', 'beth'); ?></option>
      </select>
	  <?php
   }

   public function save_post_meta_data($post_id){

      /**
      *check if user is authorised  to perrform action
      */
      if (! current_user_can('edit_post', $post_id)) {
         return;
      }
      
      /**
      *check if nonce value received is the same as created
      */
      if (!isset($_POST['hide_title_meta_box_nonce']) || !wp_verify_nonce($_POST['hide_title_meta_box_nonce'], plugin_basename(__FILE__))) {
         return;
      }

      if (array_key_exists('beth_hide_title_field', $_POST)) {
         update_post_meta(
            $post_id,
            '_hide_page_title',
            $_POST['beth_hide_title_field']
         );
      }
   }

 }
?>