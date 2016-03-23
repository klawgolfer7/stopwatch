$(document).ready(function() {

	function addLeadingZero(val) {
		if (val < 10) {
			return '0' + val;
		} else {
			return val;	
		}
	}

	var interval;

	// listen for clicks on start button


	$('.start').on('click', function () {

		// get initial time

		var startTime = new Date();

			// Every second...

		interval = setInterval(function() {

			// Get new Time

			var newTime = new Date();

			// Compute elapsed Time

			var elapsedTime = new Date(newTime - startTime);

			// Display it!

			var seconds = elapsedTime.getSeconds();
			var minutes = elapsedTime.getMinutes();

			seconds = addLeadingZero(seconds);
			minutes = addLeadingZero(minutes);

			$('.minutes').text(minutes);
			$('.seconds').text(seconds);




	// $('.stop').on('click', function () {

	// 	var stopTime = new Date();
	// }

		}, 1000);

	});

		$('.stop').on('click', function () {
			clearInterval(interval);

		});

		$('.reset').on('click', function () {
			$('.seconds').text('00');
			$('.minutes').text('00');
		});

});










