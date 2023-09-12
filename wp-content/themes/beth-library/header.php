<?php
/**
 * 
 * Header Template
 * 
 * @package Beth's Library
*/
?>
<!DOCTYPE html>
<!-- dynamic language attributes -->
<html lang="<?php language_attributes()?>">
<head>
   <meta charset="<?php bloginfo( 'charset' )?>">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Karla:wght@200;700&display=swap" rel="stylesheet">
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link href="https://fonts.googleapis.com/css2?family=Karla:wght@200;700&family=Oxygen:wght@400;700&display=swap" rel="stylesheet">

   <!-- CSS
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
JS
<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script> -->


   <title>Beth's Library</title>
   <?php wp_head();?>
</head>
<body <?php body_class(); ?>>
<?php 
if ( function_exists( 'wp_body_open' ) ) {
   wp_body_open(); } 
?>
<div id="page" classsite>
   <header id="page-head" class="site-header header" role="banner">
      <?php get_template_part("template-parts/header/nav") ?>
   </header>
   <div id="content" class="site-content">

  