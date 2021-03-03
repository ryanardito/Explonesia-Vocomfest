$(document).ready(function(){	
	$windowWidth = $(window).outerWidth();
	$orbitWidth = $windowWidth - ($windowWidth / 4);
	$orbitBottom = $orbitWidth / 2;
	$orbit = $('.orbit');

	$(window).on('resize',function(){
		$windowWidth = $(window).outerWidth();
		$orbitWidth = $windowWidth - ($windowWidth / 4);
		$orbitBottom = $orbitWidth / 2;
		$orbit = $('.orbit');
	});
	$orbit.css({'width': $orbitWidth+'px', 'height': $orbitWidth+'px', 'bottom':'-'+$orbitBottom+'px'});
});