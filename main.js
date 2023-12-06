$(document).ready(function(){
    $(".slider").bxSlider({});
    $('.bxslider').bxSlider({
      minSlides: 2,
      maxSlides: 2,
      slideWidth: 360,
      slideMargin: 50,
      auto: true, 
    });  
});

$('.bxslider-two').bxSlider({
  nextSelector: '#slider-next',
  prevSelector: '#slider-prev',
  auto: true,
  pager: true,
  slideWidth: 430
});

$('.bxslider-tree').bxSlider({
  minSlides: 4,
  maxSlides: 4,
  slideWidth: 170,
  slideMargin: 10,
  ticker: true,
  speed: 9000
});

