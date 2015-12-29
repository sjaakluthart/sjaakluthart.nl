$(document).ready(function(){

    var audio,
        html;

	audio = new Audio('assets/audio/picardsong.mp3');
    html = $('html');
  
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