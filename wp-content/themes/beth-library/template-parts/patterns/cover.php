<?php
/**
 * 
 * Block Patter: cover content
 * 
 * @package Beth's Library
*/

?>
<!-- wp:cover {"url":"<?php echo esc_url( BETH_BUILD_IMG_URI . '/Image-1.jpg' ) ?>","id":133,"dimRatio":50,"isDark":false,"align":"full"} -->
<div class="wp-block-cover alignfull is-light"><span aria-hidden="true" class="wp-block-cover__background has-background-dim"></span><img class="wp-block-cover__image-background wp-image-133" alt="" src="<?php echo esc_url( BETH_BUILD_IMG_URI . '/Image-1.jpg' ) ?>" data-object-fit="cover"/><div class="wp-block-cover__inner-container"><!-- wp:paragraph {"align":"center","placeholder":"Write title…","textColor":"white","fontSize":"large"} -->
<p class="has-text-align-center has-white-color has-text-color has-large-font-size">Hello WordPress Block Patterns</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"center","textColor":"white"} -->
<p class="has-text-align-center has-white-color has-text-color">Beth Library</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
<div class="wp-block-buttons"><!-- wp:button {"textColor":"cyan-bluish-gray","className":"is-style-outline"} -->
<div class="wp-block-button is-style-outline"><a class="wp-block-button__link has-cyan-bluish-gray-color has-text-color wp-element-button">Blogs</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div></div>
<!-- /wp:cover -->

