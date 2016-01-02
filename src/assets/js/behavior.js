$(document).ready(function(){

    var html;

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
		$('.doge').toggleClass('active');
	});

});