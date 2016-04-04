$(window).scroll(function(){
		if ($(this).scrollTop() > 250) $('.naveg').addClass("fixed").fadeIn();
		else $('.naveg').removeClass("fixed");
});

$('.slide-noticias').slick();
