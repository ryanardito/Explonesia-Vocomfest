function display_c(){
	  var refresh=1000; // Refresh rate in milli seconds
	  mytime=setTimeout('display_ct()',refresh)
}

function display_ct() {
	var strcount;
	$orbit = $('.orbit');
	$start = 6;
	$end = 18;

	var date = new Date();
	var hour = date.getHours();
	var second = date.getSeconds();
	tt=display_c();
	console.log(hour);

	if (hour < 6) {
		document.getElementById('malam').style.opacity = '1';
		document.getElementById('pagi').style.opacity = '0';
		document.getElementById('siang').style.opacity = '0';
		document.getElementById('sore').style.opacity = '0';
	}
	else if (hour <= 10) {
		document.getElementById('malam').style.opacity = '0';
		document.getElementById('pagi').style.opacity = '1';
		document.getElementById('siang').style.opacity = '0';
		document.getElementById('sore').style.opacity = '0';

	}
	else if (hour <= 15) {
		document.getElementById('malam').style.opacity = '0';
		document.getElementById('pagi').style.opacity = '0';
		document.getElementById('siang').style.opacity = '1';
		document.getElementById('sore').style.opacity = '0';
	}
	else if (hour < 18) {
		document.getElementById('malam').style.opacity = '0';
		document.getElementById('pagi').style.opacity = '0';
		document.getElementById('siang').style.opacity = '0';
		document.getElementById('sore').style.opacity = '1';
	}
	else{
		document.getElementById('malam').style.opacity = '1';
		document.getElementById('pagi').style.opacity = '0';
		document.getElementById('siang').style.opacity = '0';
		document.getElementById('sore').style.opacity = '0';
	}

	if (hour >= 0) {
		if (hour == $start) {
			$step = 0;
		}
		else{
			$step = 15;
		}
		$degree = 45 - ((hour - $start) * $step);
		$orbit.css({'transform':'rotate('+$degree+'deg)'});

	}



}

display_ct();