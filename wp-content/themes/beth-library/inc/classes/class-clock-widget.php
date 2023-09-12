<?php
/**
 * Enqueue Theme Scripts.
 *
 * @package Beth's Library
 */

 namespace Beth_Theme\Inc;

 use BETH_THEME\Inc\Traits\Singleton;
 use WP_Widget;
 //creating seperate class to enqueue scripts/styles
 class Clock_Widget extends WP_Widget{
   use Singleton;
   public function __construct() {
		parent::__construct(
			'time_widget',  // Base ID
			'Time',   // Name
         ['description' => __('Time Widget', 'beth')]
		);
		add_action( 'widgets_init', function() {
			register_widget( 'My_Widget' );
		});
	}

	public $args = array(
		'before_title'  => '<h3 class="widgettitle">',
		'after_title'   => '</h3>',
		'before_widget' => '<div class="widget-wrap">',
		'after_widget'  => '</div></div>',
	);

   //widget title
	public function widget( $args, $instance ) {
		echo $args['before_widget'];
		if ( ! empty( $instance['title'] ) ) {
			echo $args['before_title'] . apply_filters( 'widget_title', $instance['title'] ) . $args['after_title'];
		}
      ?>
      <div class="mblock">
         <span id="time"></span>
         <span id="ampm"></span>
         <span id="time-emoji"></span>
      </div>
      <?php

		echo $args['after_widget'];
	}

   //widget form
	public function form( $instance ) {
		$title = ! empty( $instance['title'] ) ? $instance['title'] : esc_html__( 'Time', 'beth' );
		$text  = ! empty( $instance['text'] ) ? $instance['text'] : esc_html__( 'Time', 'beth' );
		?>
		<p>
			<label for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php echo esc_html__( 'Title:', 'beth' ); ?></label>
			<input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>">
		</p>
		<p>
			<label for="<?php echo esc_attr( $this->get_field_id( 'Text' ) ); ?>"><?php echo esc_html__( 'Text:', 'beth' ); ?></label>
			<textarea class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'text' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'text' ) ); ?>" type="text" cols="30" rows="10"><?php echo esc_attr( $text ); ?></textarea>
		</p>
		<?php
	}

	public function update( $new_instance, $old_instance ) {
		$instance          = [];
		$instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';
		$instance['text']  = ( ! empty( $new_instance['text'] ) ) ? $new_instance['text'] : '';
		return $instance;
	}


  
 }
?>