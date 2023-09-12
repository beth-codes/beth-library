<?php
/**
 * 
 * Content None Template
 * 
 * @package Beth's Library
*/
?>

<section class="no-result not-found">
   <div class="page-header">
      <h1 class="page-title">
         <?php esc_html_e('Nothing Found', 'beth'); ?>
      </h1>
   </div>
   <div class="page-content">
      <?php 
         if (is_home() && current_user_can('publish_posts')) {
            ?>
            <p><?php
               printf(
                  wp_kses(
                     __('Ready to pblish your first post? <a href="%s">Get started here</a> ', 'beth'),
                     [
                        'a'=>['href'=>[]]
                     ]
                  ),

                  esc_url(admin_url('post-new.php'))
               )
            ?>
            </p>
         <?php
         } elseif (is_search()) {
            ?>
            <p><?php esc_html_e('Sorry nothing found. Please try another keyword.', 'beth'); ?></p>
            <?php
            get_search_form();
         } else {
            ?>
            <p><?php esc_html_e('Cannot find search', 'beth'); ?></p>
            <?php
            get_search_form();
         }
      ?>
   </div>
</section>