<?php
/**
 * 
 *  Templatef for post entry Contentt
 * 
 * To be used in the wordpress the loop
*/
?>

<div class="entry-content">
   <?php
   if (is_single()) {
      the_content(sprintf(
         wp_kses(
            __('Continue reading %s <span class="meta-nav">&rarr</span>', 'beth'),
            ['span' =>[
               'class'=>[],
            ],]
            ),
            the_title('<span class="screen-reader-text">"','" </span>', false)
         ));
         wp_link_pages([
            'before' => '<div class="paage-links">' . esc_html__('Pages', 'beth'),
            'after' => '</div>'
         ]);
         
   } else {
      beth_the_excerpt(200);
      printf('<br>');
      echo beth_excerpt_read_more();
   }
   ?>

  
</div>