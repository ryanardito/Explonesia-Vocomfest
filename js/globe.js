$(document).ready(function(){
	$globe = $(".wrapper-globe");
	
	$windowSize = $(window).width();
	$windowHeight = $(window).height();
	$globeHeight = ($windowHeight) - ($windowSize * 0.35);
	$(window).on('resize',function(){
		$windowHeight = $(this).height();
		$windowSize = $(this).width();
		//$globeHeight = ($globe.outerHeight() /2) + (($globe.outerHeight() /4) / 2);
		$globeHeight = ($windowHeight) - ($windowSize * 0.35);
		//$globeHeight = $windowHeight / 2;
		//alert($windowSize);


	$globe.css({'top':$globeHeight+'px'});
	});

	$globe.css({'top':$globeHeight+'px'});
})