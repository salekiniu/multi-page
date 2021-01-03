$(function(){
  new WOW().init();
// vertical slider
$('.our-team').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed:2000,
    autoplaySpeed: 2000,
    arrows:false,
    vertical:true,
    dots: true,
  });  
// blog slider
$('.blog-slider-main').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed:2000,
    autoplaySpeed: 2000,
    arrows:false,
    // vertical:true,
    dots: true,
  });  

  

// feedback slider
$('.people-say-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  autoplay: true,
  autoplaySpeed: 2000,
  asNavFor: '.people-say-pic',
});
    
$('.people-say-pic').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.people-say-slider',
  dots: false,
  centerMode: true,
  centerPadding:false,
  autoplay: true,
  autoplaySpeed: 2000,
  focusOnSelect: true,
  arrows:true,
  prevArrow:'.prev',
  nextArrow:'.next',
});  

// about-client slider
$('.client-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed:2000,
  autoplaySpeed: 2000,
  arrows:false,
  // vertical:true,
  dots: false,
  arrows:true,
  prevArrow:'.prev',
  nextArrow:'.next',
}); 

// why-chosse-us slider
$('.why-chooseus-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  speed:2000,
  autoplaySpeed: 2000,
  arrows:false,
  // vertical:true,
  dots: true,
});  
    

//product slider
$('.main-product-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow:'.prev',
  nextArrow:'.next',
  asNavFor: '.product-slider',
});
    
$('.product-slider').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.main-product-slider',
  dots: false,
  centerMode: true,
  centerPadding:false,
  autoplay: true,
  autoplaySpeed: 2000,
  focusOnSelect: true,
  arrows:false,
});

 // blog-img slider
$('.blog-img-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed:2000,
  autoplaySpeed: 2000,
  arrows:false,
  dots: true,
}); 

// blog-post-slider 
$('.blog-post-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed:2000,
  autoplaySpeed: 2000,
  arrows:false,
  vertical:true,
  // dots: true,
});  

});