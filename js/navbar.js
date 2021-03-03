$(document).ready(function(){
	$navbar = $('.navbar');
	$header = $('.header');
	$navbarOffset = $navbar.offset().top;
	$headerOffset = $header.outerHeight();

	$(window).on('resize', function(){
		$navbarOffset = $navbar.offset().top;
	});

	$topOffset = 0;

	$(window).scroll(function(){
		$topOffset = $(window).scrollTop();
		if ($(window).scrollTop() > $navbarOffset) {
			$navbar.addClass('navbar-fixed');
		}
		if ($(window).scrollTop() < $navbarOffset) {
			$navbar.removeClass('navbar-fixed');
			
		}
	});

	
	

	$(".wrapper-menu").click(function(){
			if($topOffset < $headerOffset){
				$('html,body').animate({scrollTop:$headerOffset});
			}
			$('.wrapper-menu').toggleClass("active");
			$('.sidenav').toggleClass("active");
		});
	

});

 