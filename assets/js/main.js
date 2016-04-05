$(window).scroll(function(){
		if ($(this).scrollTop() > 250) $('.naveg').addClass("fixed").fadeIn();
		else $('.naveg').removeClass("fixed");
});

$('.slide-noticias').slick();
(function(document , window , $){
		$(document).ready(function(){
			$('.responsive').slick({
			  dots: true,
			  infinite: false,
			  speed: 300,
			  slidesToShow: 6,
			  slidesToScroll: 6,
			  prevArrow:false,
			  nextArrow:false,
			  responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 6,
			        slidesToScroll: 6,
			        infinite: true,
			        dots: true
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			    // You can unslick at a given breakpoint now by adding:
			    // settings: "unslick"
			    // instead of a settings object
			  ]
			});
  			
		});
})(document, window, jQuery);

