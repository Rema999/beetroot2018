$(function(){
  $('._headerSlide').slick({
  	dots:true,
 slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,	 
  });
     $('._projectScroll').on('click',function(){
          $('html').animate({

            scrollTop: $('._projectScrollEnd').offset().top
          }, 5000)
        });
});

var map = null;
function initMap(){
//   установка карты
  map = new google.maps.Map(document.querySelector('._map'), {zoom:13, center: {lat: -34.397, lng: 150.644}
      })
  new google.maps.Marker({position: 
    {lat: -34.397, lng: 150.644},map: map,
      }); 
}
