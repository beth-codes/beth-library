(function($){
   class SlickSlider {
      constructor() {
         this.initiateSlider();
      }
   
      initiateSlider(){
         console.log('hellos');
         $('.center').slick({
            centerMode: true,
            autoplay: true,
            autoplayspeed: 2000,
            centerPadding: '60px',
            slidesToShow: 3,
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