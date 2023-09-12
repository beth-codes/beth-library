
<?php
/**
 * 
 * Single Template File
 * 
 * @package Beth's Library
 */

?>
<?php get_header(); ?>
<div id="primary">
   <main id="main" role="main">
      <div class="container">
         <div class="widget-flex">
            <div class="post-item">
               <?php if(have_posts()):
               ?>
               <div class="container">
                  <?php
                     if (is_home() && ! is_front_page()) {
                        ?>
                           <h1><?php single_post_title(); ?></h1>
                        <?php
                     }
                  ?>
                     <!-- start loop -->
                     <?php while (have_posts()): the_post();
                        
                        get_template_part('template-parts/content');                
                     endwhile;
                     ?>

                     <!-- pagination link on post page -->
                     <div class='mblock postlink-container'>
                        <div class="prev-link"><?php previous_post_link();?></div>
                        <div class="next-link"><?php  next_post_link(); ?></div>
                     </div>
               </div>
               <?php
               else :
                  get_template_part('template-parts/content-none');
            endif;
               ?>
                
            </div>
            <div class="widget-item">
               <?php get_sidebar(); ?>
               <?php get_sidebar('sidebar-2'); ?>
            </div>
   
         </div>
      </div>
   </main>
</div>

   <?php 
   get_footer();