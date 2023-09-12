<?php
/**
 * 
 *  Templatef for post entry footer
 * 
 * @package Beth's Library
*/
//create variable to get post id
$the_post_id = get_the_ID();
///create variable to save post term and pass id into it and pass taxonomy(categroy and tag)
$article_terms = wp_get_post_terms($the_post_id, ['category', 'post_tag']);

if (empty($article_terms) || !is_array($article_terms)) {
  return;
}
?>

<div class="entry-footer mblock">
   <?php 
   foreach ($article_terms as $key => $article_term) {
      ?>
         <a href="<?php echo esc_url(get_term_link($article_term)); ?>">
            <button><?php echo esc_html($article_term->name);?></button>
         </a>  
      <?php
   }
   ?>
</div>