// start slider

  $(document).ready(function(){
    $('.popular-slider').slick({
    	infinite: true,
      arrows: false,
      dots: true,
      dotsClass: "popular-slider__dots",
      autoplay: true
    });
  });