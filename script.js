$(document).ready(function(){
    $(".slider").slick({
    //   setting-name: setting-value
    autoplay: true,
    autoplaySpeed:1000,
    arrows: true,
    nextArrow: ".back",
    prevArrow: ".next",
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    });
  });