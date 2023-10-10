(function($){
   class SlickSlider {
      constructor() {
         this.initiateSlider();
      }
   
      initiateSlider(){
         console.log('hellos');
         $('.center').slick({
            dots: true,
            arrows: true,
            centerMode: true,
            autoplay: false,
            autoplayspeed: 2000,
            centerPadding: '60px',
            slidesToShow: 1,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
                }
              }
            ]
          });
      }
   }
   new SlickSlider();
})(jQuery)



jQuery(function($){
   // accordion
   $('.accordion-title').click(function(e) {
       e.preventDefault();
       if( !$(this).hasClass('open') ) {
           // clicking a closed tab, so close all other tabs at this level
           // be specific so it doesn't mess up inner accordions
           $(this).parent().parent().find('> .accordion-group > .accordion-title').removeClass('open');
           $(this).parent().parent().find('> .accordion-group > .accordion-content').stop().slideUp();
           $(this).toggleClass('open');
           $(this).parent().find('> .accordion-content').stop().slideToggle();

           // this is the first open, so add class to accordion
           if( !$(this).parents('.accordion').hasClass('opened') ) {
               $(this).parents('.accordion').addClass('opened');
           }
       } else {
           // clicking an open tab, so close it
           $(this).toggleClass('open');
           $(this).parent().find('> .accordion-content').stop().slideToggle();

           // so remove class to accordion
           if( $(this).parents('.accordion').hasClass('opened') ) {
               $(this).parents('.accordion').removeClass('opened');
           }
       }
       AOS.refresh();
   });
});