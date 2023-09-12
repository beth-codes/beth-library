
<?php
/**
 * 
 * Main Template File
 * 
 * @package Beth's Library
 */

?>
<?php get_header(); ?>
 <div id="primary">
   <main id="main" role="main">
      <?php if(have_posts()):
         ?>
         <div class="container">
         <!-- Displys the title of the blog created in the pages section on wp -->
            <?php
               if (is_home() && ! is_front_page()) {
                  ?>
                     <h1><?php single_post_title(); ?></h1>
                  <?php
               }
            ?>
         <!-- An array of blogs created on post section is being passed to blog page -->
            <div class="row-flex">
               <?php 
                  $row_count = 0;
                  $no_of_colums = 3;
               ?>
               
               <!-- start loop -->
               <?php while (have_posts()): the_post();
                  if ($row_count  % $no_of_colums === 0) {
                     ?>
                     <div class="flex">
                     <?php
                  }
                  ?>
                  <div class='mr'>
                     <?php
                  get_template_part('template-parts/content');
                  ?>
                 
                  </div>
               <?php
                     $row_count++;
                     if ($row_count ==! 0 && $row_count  % $no_of_colums === 0) {
                  ?>
                     </div>
                     <?php
                  }                 
               endwhile;
               ?>
            </div>           
         </div>
         <?php
         else :
            get_template_part('template-parts/content-none');
       endif;

       //pagination link on post page
       beth_pagination();
      ?>
   </main>
</div> 

   <?php 
   get_footer();