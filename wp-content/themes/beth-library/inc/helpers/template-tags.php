<?php

//Thumbnail function
function get_the_post_custom_thumbnail($post_id, $size='featured-thumbnail', $additional_attributes=[]) {
   $custom_thumbnail  = '';

   if ($post_id === null) {
      $post_id = get_the_ID();
   }

   if (has_post_thumbnail($post_id)) {
      $default_attributes = [
         'loading' => 'lazy',
      ];
      
      $attributes = array_merge($default_attributes, $additional_attributes);
      
      $custom_thumbnail = wp_get_attachment_image(
         get_post_thumbnail_id($post_id),
         $size,
         false,
         $additional_attributes
      );
   }
   return $custom_thumbnail;
}

//Date function
function the_post_custom_thumbnail($post_id, $size='featured-thumbnail', $additional_attributes=[]){
   echo get_the_post_custom_thumbnail($post_id, $size, $additional_attributes);
}

function beth_posted_on()
{
   $time_string = '<time class="entry-date published updated" datetime=%1$s>%2$s</time>';
   if (get_the_time('U') !== get_the_modified_time('U')) {
      $time_string = '<time class="entry-date published" datetime=%1$s>%3$s</time><time class="updated" datetime=%1$s>%4$s</time>';
   }
   $time_string = sprintf($time_string,
   esc_attr(get_the_date(DATE_W3C)),
   esc_attr(get_the_date()),
   esc_attr(get_the_modified_date(DATE_W3C)),
   esc_attr(get_the_modified_date()),
   );

   $posted_on = sprintf(
      esc_html_x('posted on  %s', 'post date', 'beth'),
      '<a href=" '.esc_url(get_permalink()). ' "rel="bookmark" ">' . $time_string . '</a>'
   );
   
   echo '<span class="posted-one ">' . $posted_on .' </span>';

}
//author functionn
function beth_posted_by(){
   $postedby = sprintf(
      esc_html_x('by %s', 'post author', 'beth'),
      '<span class="author"><a href=" '.esc_url(get_author_posts_url(get_the_author_meta('ID'))) . ' ">' . esc_html(get_the_author()).'</a></span>'
   );
   echo '<span class="postedby">' . $postedby .' </span>';
}

//excerpt trim
function beth_the_excerpt($trim_character_count = 0){
   $post_ID = get_the_ID();

	if ( empty( $post_ID ) ) {
		return null;
	}
   
   if (!has_excerpt() || 0 === $trim_character_count) {
      the_excerpt();
      return;
   }

   $excerpt = wp_strip_all_tags(get_the_excerpt());
   $excerpt = substr($excerpt, 0, $trim_character_count);
   //cuts out the last word on after count
   $excerpt = substr($excerpt, 0, strrpos($excerpt, ' '));

   echo $excerpt . ' ';
}

//Read more function
function  beth_excerpt_read_more($more = '') {
   //if user is not on the single page show this
   if (! is_single()) {
      $more = sprintf( '<a href="%1$s"><button class="btn-white">%2$s</button></a>', 
      get_permalink(get_the_ID()),
      __('Read more', 'beth')
   );
   }
   return $more;
}

//post pagination
function beth_pagination(){

   // allowed_tags is a defined function that states attributes allowed in the function
   $allowed_tags = [
      'span' => [
         'class' => []
      ], 
      'a' => 
      [
         'class' => [],
         'href' => []
      ]
   ];
   //arg wraps the elements inside a div, section or span attributes
   $args = [
       'before_page_number' => '<span class="mr">',
       'after_page_number' => '</span>',
   ];
   //paginate_links allows 2 arguments (arg and allowed tags)
   printf('<nav class="aquila-paagination clearfix">%s</nav>', wp_kses(paginate_links($args), $allowed_tags));
}