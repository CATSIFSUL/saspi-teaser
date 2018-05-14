(function(){
	particlesJS.load('particles-js', 'assets/js/particlesjs-config.json', function() {
		console.log('callback - particles.js config loaded');
	});

	var countDownDate = new Date("Oct 11, 2018 13:30:00").getTime();

	var x = setInterval(function() {

			var now = new Date().getTime();

			var distance = countDownDate - now;

			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	    // Output the result in an element with id="demo"
	    document.getElementById("counter").innerHTML = days + " dias " + hours + " horas "
	    + minutes + " minutos e " + seconds + " segundos.";
	    
	    // If the count down is over, write some text 
	    if (distance < 0) {
	    	clearInterval(x);
	    	document.getElementById("demo").innerHTML = "EXPIRED";
	    }
	}, 1000);
})(window, document);