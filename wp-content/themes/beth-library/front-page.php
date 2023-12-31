<?php 
/**
 * 
 * Front Page Template 
 * 
 * @package Beth's Library
 */
get_header();
 ?>
<div id="primary">
   <main>
      <div class="home-page-wrap">
         <?php
         if ( have_posts() ) :
            while ( have_posts() ) : the_post();

               get_template_part( 'template-parts/content', 'page' );

            endwhile;
            ?>

         <?php

         else :

            get_template_part( 'template-parts/content-none' );

         endif;
         get_template_part( 'template-parts/components/posts-carousel' );
         ?>
      </div>
   </main>
</div>

<?php
get_footer();
 ?>

