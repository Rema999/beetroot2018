$(function(){
  $('._slideWork').slick({
  	dots:true,
 slidesToShow: 1,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:true,	 
  });
  $('._scrollAbout').on('click', function (e) {
    e.preventDefault();
    $('html').animate({
        scrollTop: $('.about_left-text').offset().top
    }, 1500);
});
  
});
