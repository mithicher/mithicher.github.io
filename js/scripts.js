/**
 * ----------------------------------------------------------------------------------------
 * Main JS functionality.
 * ----------------------------------------------------------------------------------------
 */

$(document).ready(function() {
	var $main_nav = $('.main-nav'),
		$alert_toggle = $('.alert-toggle');

	// Menu Toggle
	$main_nav.on('click', function(event){

		if( $(event.target).is($main_nav) ) {
			// on mobile open the submenu
			$(this).children('ul').toggleClass('is-visible');
		} else {
			// on mobile close submenu
			$main_nav.children('ul').removeClass('is-visible');
		}

	});

	// Alert Toggle
	$alert_toggle.click(function(){ 
		$('.alert-box').fadeOut();		
	});
});