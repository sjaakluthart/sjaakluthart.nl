$(document).ready(function(){

	// Cache the Window object
	$window = $(window);

	// disable parallax effect for touch
	if ($('html').hasClass('no-touch')){

		$('.header').addClass('scroll');
		$('.scroll').each(function(){
	    	var $bgobj = $(this); // assigning the object
	                    
	      	$(window).scroll(function() {
	                    
				// Scroll the background at var speed
				// the yPos is a negative value because we're scrolling it UP!								
				var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
				
				// Put together our final background position
				var coords = '50% '+ yPos + 'px';

				// Move the background
				$bgobj.css({ backgroundPosition: coords });
			
			}); // window scroll Ends

	 	});	
	} 
  
  	// enable hover styles for touch
	if ($('html').hasClass('touch')){

		$('body > section > figure').click(function() {
  			$(this).children('div').toggleClass('active')
		});

		$('body > section > figure div').click(function() {
  			$(this).toggleClass('active')
		});

	}

});