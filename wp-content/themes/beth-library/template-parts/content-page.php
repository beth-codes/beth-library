<?php
/**
 * 
 * Content Page Template
 * 
 * @package Beth's Library
*/
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php
	if ( ! is_home() ) {
		?>
			<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>

		<?php
	}
	?>

	<div class="entry-content">
		<?php
		the_content();

		if ( ! is_home() ) {
			wp_link_pages(
				[
					'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'beth' ),
					'after'  => '</div>',
				]
			);
		}
		?>
	</div><!-- .entry-content -->

	<footer class="entry-footer">
		<?php edit_post_link( esc_html__( 'Edit', 'beth' ), '<span class="edit-link">', '</span>' ); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-## -->