$(document).ready(function(){

    var audio,
        $window,
        html,
        parallax;

	audio = new Audio('assets/audio/picardsong.mp3');
    html = $('html');
	$window = $(window);

	// disable parallax effect for touch
	if (html.hasClass('no-touch')){

		parallax = function($scroll){
			$(window).scroll(function() {

				// Scroll the background at var speed
				// the yPos is a negative value because we're scrolling it UP!
				var yPos = -($window.scrollTop() / $scroll.data('speed'));

				// Put together our final background position
				var coords = '50% '+ yPos + 'px';

				// Move the background
				$scroll.css({ backgroundPosition: coords });

			});
		};

		$('.scroll').each(function(){
            parallax($(this));
	 	});

        parallax($('header'));
	} 
  
  	// enable hover styles for touch
	if (html.hasClass('touch')){

		$('body > section > figure').click(function() {
  			$(this).children('div').toggleClass('active')
		});

		$('body > section > figure div').click(function() {
  			$(this).toggleClass('active')
		});

	}

	new Konami(function() {
		$('img.doge').toggleClass('active');
		$('body').toggleClass('doge');
		audio.play();
	});

});