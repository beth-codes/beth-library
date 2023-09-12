<?php
/**
 * 
 * Content Template
 * 
 * @package Beth's Library
*/
?>
 
<article id="post-<?php the_ID(); ?>" <?php post_class('mblock')?>>
   <?php 
   get_template_part('/template-parts/components/blogs/entry-header');
   get_template_part('template-parts/components/blogs/entry-meta');
   get_template_part('template-parts/components/blogs/entry-content');
   get_template_part('template-parts/components/blogs/entry-footer');
   ?>
</article>

