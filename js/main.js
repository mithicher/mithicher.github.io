$(document).ready(function($) {
	/**
     * Add navbar__fixed class to navbar
     */
	$(window).scroll(function(){
		if($(this).scrollTop() > 400)
		{	
			$('.navbar').removeClass('navbar--absolute');
			$('.navbar').addClass('navbar--fixed');
		}
		else
		{
			$('.navbar').removeClass('navbar--fixed');
			$('.navbar').addClass('navbar--absolute');
		}
	});
 	
    /**
     *  Custom Scroll to link
     */
    var $root = $('html, body');
	$('a').click(function() {
	    $root.animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 700);
	    return false;
	});

	/**
	 * Wow.js Initialization
	 */
	wow = new WOW();
	wow.init();
});
