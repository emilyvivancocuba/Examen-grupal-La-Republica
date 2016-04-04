$(window).scroll(function(){
		if ($(this).scrollTop() > 250) $('nav').addClass("fixed").fadeIn();
		else $('nav').removeClass("fixed");
});

$('.slide-noticias').slick();
